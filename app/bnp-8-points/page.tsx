"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from '../i18n/I18nProvider';
import { FaFileAlt } from 'react-icons/fa';

const bnp8PointsImages = [
  '/aminul Haque/8point1.jpeg',
  '/aminul Haque/8points2.jpeg',
  '/aminul Haque/8points3.jpeg',
  '/aminul Haque/8points4.jpeg',
  '/aminul Haque/8points5.jpeg',
  '/aminul Haque/8points6.jpeg',
  '/aminul Haque/8points7.jpeg',
  '/aminul Haque/8points8.jpeg',
];

export default function BNP8PointsPage() {
  const { language } = useTranslation();

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex p-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl mb-6 shadow-lg">
              <FaFileAlt className="text-4xl text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                {language === 'bd' ? 'বিএনপির ৮ দফা পরিকল্পনা' : 'BNP 8-Point Plan'}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              {language === 'bd' 
                ? 'বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি) এর ৮ দফা নির্বাচনী পরিকল্পনা'
                : 'Bangladesh Nationalist Party (BNP) 8-Point Election Plan'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-8">
            {bnp8PointsImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white"
              >
                <Image
                  src={image}
                  alt={language === 'bd' 
                    ? `বিএনপির ৮ দফা পরিকল্পনা - পৃষ্ঠা ${index + 1}` 
                    : `BNP 8-Point Plan - Page ${index + 1}`}
                  width={1200}
                  height={1600}
                  className="w-full h-auto object-contain"
                  priority={index < 2}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
