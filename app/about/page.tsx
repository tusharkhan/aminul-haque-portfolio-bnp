"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../i18n/I18nProvider";
import Image from "next/image";
import { fetchBiographies, Biography } from "../../lib/api";

export default function AboutPage() {
  const { t } = useTranslation();
  const [biographies, setBiographies] = useState<Biography[]>([]);
  const [selectedPage, setSelectedPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBiographies = async () => {
      try {
        setLoading(true);
        const data = await fetchBiographies();

        if (data && data.length > 0) {
          setBiographies(data);
          setError(null);
        } else {
          throw new Error("No biographies found");
        }
      } catch (err) {
        console.error("Error fetching biographies:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load biography data",
        );
        setBiographies([]);
      } finally {
        setLoading(false);
      }
    };

    loadBiographies();
  }, []);

  const currentBiography = biographies[0];
  const currentPage = currentBiography?.pages?.[selectedPage];

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative px-4 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-6 py-2 bg-red-100 text-red-700 rounded-full font-bold text-sm uppercase tracking-wider mb-6">
              {t("about.aboutMe")}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                {currentBiography?.title || "Biography"}
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Biography Content Section */}
      <section className="px-4">
        <div className="mx-auto max-w-6xl">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
              <p className="mt-4 text-slate-600">Loading biography...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          ) : currentBiography ? (
            <div>
              {/* Static Image and Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center"
              ></motion.div>

              {/* Pages Navigation and Content */}
              {currentBiography.pages && currentBiography.pages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Page Tabs */}
                  <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-4">
                    {currentBiography.pages.map((page, index) => (
                      <button
                        key={page.id}
                        onClick={() => setSelectedPage(index)}
                        className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                          selectedPage === index
                            ? "bg-red-600 text-white shadow-md"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {page.page_number}
                      </button>
                    ))}
                  </div>

                  {/* Page Content */}
                  {currentPage && (
                    <motion.div
                      key={currentPage.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm"
                    >
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        {currentPage.title}
                      </h3>
                      <div
                        className="prose prose-sm max-w-none text-slate-700 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: currentPage.content,
                        }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Page Navigation Buttons */}
              {currentBiography.pages && currentBiography.pages.length > 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex justify-between items-center mt-8 pt-8 border-t border-slate-200"
                >
                  <button
                    onClick={() =>
                      setSelectedPage(Math.max(0, selectedPage - 1))
                    }
                    disabled={selectedPage === 0}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                      selectedPage === 0
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                        : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                    }`}
                  >
                    ← Previous
                  </button>

                  <span className="text-slate-600 font-medium">
                    Page {selectedPage + 1} of {currentBiography.pages.length}
                  </span>

                  <button
                    onClick={() =>
                      setSelectedPage(
                        Math.min(
                          currentBiography.pages.length - 1,
                          selectedPage + 1,
                        ),
                      )
                    }
                    disabled={
                      selectedPage === currentBiography.pages.length - 1
                    }
                    className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                      selectedPage === currentBiography.pages.length - 1
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                        : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                  >
                    Next →
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                No biography data available
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
