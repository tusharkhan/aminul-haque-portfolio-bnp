"use client";
import {
  fetchManifestoCms,
  fetchManifestos,
  type ManifestoApi,
  type ManifestoCms,
} from "@/lib/api";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCheck, FaHeart, FaQuoteLeft } from "react-icons/fa";
import { useTranslation } from "../i18n/I18nProvider";

export default function AminulManifestoPage() {
  const { language } = useTranslation();
  const [manifestoCategories, setManifestoCategories] = useState<
    ManifestoApi[]
  >([]);
  const [cms, setCms] = useState<ManifestoCms | null>(null);

  useEffect(() => {
    fetchManifestos().then((apiData) => {
      if (apiData.length > 0) {
        setManifestoCategories(apiData);
      }
    });
    fetchManifestoCms().then(setCms);
  }, []);
  console.log("Manifesto Categories:", manifestoCategories);
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
              {language === "bd" ? "ঢাকা-১৬" : "Dhaka-16"}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                {cms?.header?.title ||
                  (language === "bd" ? "আমিনুল হক" : "Aminul Haque")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-700 font-bold mb-6">
              {cms?.header?.subtitle ||
                (language === "bd"
                  ? "বিএনপি মনোনীত ধানের শীষের প্রার্থী"
                  : "BNP Nominated Sheaf of Paddy Candidate")}
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 inline-block shadow-xl border border-emerald-100">
              <p className="text-3xl md:text-4xl font-black text-emerald-600 mb-2">
                {cms?.header?.quotation_title
                  ? `"${cms.header.quotation_title}"`
                  : language === "bd"
                    ? '"আমি আপনাদেরই একজন"'
                    : '"I am one of you"'}
              </p>
              <p className="text-lg text-slate-600">
                {cms?.header?.quotation_subtitle ||
                  (language === "bd"
                    ? "আমি আপনাদের সন্তান এবং আপনাদেরই একজন"
                    : "I am your child and one of you")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Manifesto Image Section */}
      <section className="relative w-full">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
          >
            <Image
              src="/aminul Haque/menifesto.jpeg"
              alt={
                language === "bd"
                  ? "আমিনুল হকের নির্বাচনী ইশতেহার"
                  : "Aminul Haque Election Manifesto"
              }
              width={1200}
              height={1600}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20 bg-gradient-to-r from-emerald-500 to-green-600"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
              <div className="text-center mb-8">
                <FaHeart className="text-5xl md:text-6xl text-emerald-600 mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                  {cms?.plans?.title ||
                    (language === "bd"
                      ? "প্রিয় পল্লবী ও রুপনগরবাসী"
                      : "Dear Residents of Pallabi & Rupnagar")}
                </h2>
                <p className="text-emerald-600 font-bold mt-2">
                  {cms?.plans?.subtitle ||
                    (language === "bd"
                      ? "আসসালামুআলাইকুম। আন্তরিক শুভেচ্ছা গ্রহণ করুন।"
                      : "Assalamu Alaikum. Please accept my sincere greetings.")}
                </p>
              </div>
              {cms?.plans?.content ? (
                <div
                  className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: cms.plans.content }}
                />
              ) : (
                <div className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed">
                  <p>
                    {language === "bd"
                      ? "আমি, আমিনুল হক, আপনাদেরই একজন সন্তান। পল্লবী ও রুপনগর আমার ঘর ও আমার পরিবার। এ এলাকার ভবিষ্যৎ আমি নিজের মত করে অনুভব করি। বিগত ১৭ বছর আমরা সবাই একসাথে এক কঠিন সময় পার করেছি।"
                      : "I, Aminul Haque, am one of your own children. Pallabi and Rupnagar are my home and my family. I feel the future of this area as my own. For the past 17 years, we have all gone through difficult times together."}
                  </p>
                  <p>
                    {language === "bd"
                      ? "যানজট, পানি ও গ্যাসের ঘাটতি, চাঁদাবাজি, মাদক আর অব্যবস্থাপনার কারণে আমাদের প্রতিদিনের জীবন দুর্বিষহ হয়ে উঠেছে। আমাদের তরুণরা পথ হারাচ্ছে, মায়েরা নিরাপত্তাহীনতায় ভুগছে ও পরিবারগুলো স্বপ্ন হারাচ্ছে।"
                      : "Traffic jams, water and gas shortages, extortion, drugs and mismanagement have made our daily lives unbearable. Our youth are losing their way, mothers are suffering from insecurity, and families are losing their dreams."}
                  </p>
                  <p>
                    {language === "bd"
                      ? "আমি রাজনীতি করি ক্ষমতার জন্য না, মানুষের সেবা করার জন্য। সকল মত ও চিন্তার ঐক্যতান রচনার জন্য অব্যাহত আলোচনা, মতবিনিময় এবং পারস্পারিক বোঝাপড়ার সেতুবন্ধন রচনা করে সকল প্রকার বৈষম্য ও ভেদবুদ্ধির বেড়াজাল অতিক্রম করে ভবিষ্যতে সুখী এবং নতুন সংস্কৃতি চর্চার মাধ্যমে আধুনিক, সুস্থ ও আদর্শ নগর জীবন উপহার দেওয়াই আমার স্বপ্ন।"
                      : "I do politics not for power, but to serve the people. My dream is to create a modern, healthy and ideal urban life through continuous dialogue, exchange of views and building bridges of mutual understanding to overcome all forms of discrimination."}
                  </p>
                  <p>
                    {language === "bd"
                      ? "প্রবীণের অভিজ্ঞতা আর তারুণ্যের প্রাণশক্তি কাজে লাগিয়ে শুরু করতে চাই আমাদের পথচলা। আমি বিশ্বাস করি, আপনাদের সমর্থন ও আন্তরিক সহযোগিতা এবং নিষ্কলুষ সততা ও সমতার আদর্শে উজ্জীবিত হয়ে সকলে মিলে কাজ করলে এ স্বপ্ন বাস্তবায়ন অবশ্যই সম্ভব।"
                      : "I want to start our journey by utilizing the experience of elders and the vitality of youth. I believe that with your support and sincere cooperation, and working together inspired by the ideals of pure honesty and equality, this dream can definitely be realized."}
                  </p>
                </div>
              )}
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 mt-8">
                <FaQuoteLeft className="text-3xl text-emerald-400 mb-4" />
                <p className="text-xl md:text-2xl font-bold text-emerald-700 italic">
                  {cms?.plans?.quotes ||
                    (language === "bd"
                      ? 'আমি বিশ্বাস করি –পরিবর্তন সম্ভব, যদি আমরা সবাই চাই। আর সেই পরিবর্তনের পথ দেখাতে আমি আপনাদের কাছে এসেছি "পল্লবী ও রুপনগর গড়ার পরিকল্পনা" ও তার বাস্তবায়নের অঙ্গীকার নিয়ে।'
                      : 'I believe - change is possible, if we all want it. And to show you that path of change, I have come to you with the "Plan for Building Pallabi & Rupnagar" and a commitment to its implementation.')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manifesto Title Section */}
      <section className="px-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-12 rounded-3xl bg-gradient-to-r from-emerald-600 to-green-700">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              {cms?.green_box?.title ||
                (language === "bd"
                  ? "আমাদের পল্লবী ও রুপনগর পরিবর্তনের পরিকল্পনা"
                  : "Our Plan for Transforming Pallabi & Rupnagar")}
            </h2>
            <p className="text-xl text-white/80">
              {cms?.green_box?.subtitle ||
                (language === "bd"
                  ? "আমার নির্বাচনী ইশতেহার"
                  : "My Election Manifesto")}
            </p>
            <div className="mt-6 inline-block bg-white/20 backdrop-blur-sm rounded-full px-8 py-3">
              <span className="text-2xl font-black text-white">
                {cms?.green_box?.short_title ||
                  (language === "bd"
                    ? "সবার আগে বাংলাদেশ"
                    : "Bangladesh First")}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Manifesto Categories */}
      {manifestoCategories.map((category, categoryIdx) => (
        <div key={category.id}>
          {/* Category Intro */}
          <section
            className={`py-16 px-4 ${categoryIdx % 2 === 0 ? "bg-gradient-to-b from-white to-slate-50" : "bg-gradient-to-b from-slate-50 to-white"}`}
          >
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                  {category.main_title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {category.second_title}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Category Sections */}
          <section className="py-12 md:py-20 px-4">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.items.map((section, idx) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group"
                  >
                    <div
                      className={`h-full relative bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300`}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                          {section.title}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {section.text_list.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <FaCheck
                              className={`text-sm mt-1 flex-shrink-0 text-emerald-500 group-hover:text-emerald-600 transition-colors duration-300`}
                            />
                            <span className="text-slate-700 text-sm md:text-base leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* Closing Message */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30 bg-gradient-to-r from-emerald-500 to-green-600"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center border border-slate-200">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                {cms?.conclusion?.title ||
                  (language === "bd"
                    ? "শ্রদ্ধেয় মুরুব্বীগণ, প্রিয় সমবয়সী ও তরুণ বন্ধুগণ"
                    : "Respected Elders, Dear Peers & Young Friends")}
              </h2>
              {cms?.conclusion?.content ? (
                <div
                  className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed text-left prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: cms.conclusion.content }}
                />
              ) : (
                <div className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed text-left">
                  <p>
                    {language === "bd"
                      ? "আমি পল্লবী ও রুপনগরের সন্তান। আপনাদেরই সন্তান। আপনাদের আপনজন। আপনাদের সুখ-দুঃখের সাথে আমার জীবন ওতপ্রোতভাবে জড়িয়ে আছে। এ এলাকা আমার আনন্দ-বেদনা, হাসি-কান্নার স্মৃতিমাখা গর্বের শহর।"
                      : "I am a child of Pallabi and Rupnagar—your child. Your loved one. My life is deeply intertwined with your joys and sorrows. This area is my proud city filled with memories of joy and sorrow, laughter and tears."}
                  </p>
                  <p>
                    {language === "bd"
                      ? "আমি জানি, যত সংকট, যত সীমাবদ্ধতা, নাগরিক-যন্ত্রণাসহ নানাবিধ সমস্যা আছে। এই এলাকার সন্তান হিসেবে আমার নির্বাচনী প্রতিশ্রুতি হচ্ছে ঐতিহ্য ও আধুনিকতার সমন্বয়ে বিশ্বমানের বাসযোগ্য অত্যাধুনিক পল্লবী ও রুপনগর গড়ে তোলা।"
                      : "I know there are many crises, limitations, civic sufferings and various problems. As a child of this area, my electoral promise is to build a world-class livable, ultra-modern Pallabi and Rupnagar combining tradition and modernity."}
                  </p>
                  <p>
                    {language === "bd"
                      ? "এ লক্ষ্যে আমার নিজস্ব চিন্তা চেতনা, স্বপ্ন-দাবনা ও প্রত্যাশার কথাগুলো আপনাদের সমীপে তুলে ধরলাম। আপনাদের সহযোগিতা পেলে তা আরও বাস্তব, প্রায়োগিক ও নাগরিকবান্ধব করে গড়ে তোলা সম্ভব হবে ইনশাআল্লাহ।"
                      : "I have presented my own thoughts, dreams and expectations to you for this purpose. With your cooperation, it will be possible to make it more practical, applicable and citizen-friendly, Inshallah."}
                  </p>
                </div>
              )}
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 my-8">
                <p className="text-xl md:text-2xl font-bold text-emerald-700">
                  {cms?.conclusion?.quotes ||
                    (language === "bd"
                      ? "আমি একান্তভাবে আশা করি, আসন্ন জাতীয় নির্বাচনে ঢাকা-১৬ আসনে ধানের শীষ প্রতীকে আপনার মূল্যবান ভোটটি দিয়ে আমাকে আপনাদের সেবা করার সুযোগ দিবেন।"
                      : "I sincerely hope that in the upcoming national election, you will give me the opportunity to serve you by casting your valuable vote for the Sheaf of Paddy symbol in Dhaka-16 constituency.")}
                </p>
              </div>
              <div className="space-y-2 text-center">
                <p className="text-lg text-slate-600">
                  {cms?.conclusion?.short_title_first ||
                    (language === "bd"
                      ? "আল্লাহ আমাদের সহায় হোন।"
                      : "May Allah help us.")}
                </p>
                <p className="text-lg text-slate-600">
                  {cms?.conclusion?.short_title_second ||
                    (language === "bd" ? "আল্লাহ হাফেজ।" : "Allah Hafez.")}
                </p>
                <p className="text-2xl font-black text-emerald-600 mt-4">
                  {cms?.conclusion?.slogan ||
                    (language === "bd"
                      ? "বাংলাদেশ জিন্দাবাদ।"
                      : "Long Live Bangladesh.")}
                </p>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-3xl font-black text-emerald-600">
                    -{" "}
                    {cms?.conclusion?.from_name ||
                      (language === "bd" ? "আমিনুল হক" : "Aminul Haque")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
