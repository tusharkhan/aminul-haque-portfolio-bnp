"use client";
import { motion } from 'framer-motion';
import { FaFileAlt, FaFlag, FaCheck } from 'react-icons/fa';

export default function BNP31PointPage() {
  const points = [
    'সংবিধান সংস্কার: জনগণের ম্যান্ডেট নিয়ে গণতান্ত্রিক সংবিধান প্রণয়ন',
    'নির্বাচন ব্যবস্থা সংস্কার: স্বচ্ছ ও নিরপেক্ষ নির্বাচন নিশ্চিতকরণ',
    'বিচার বিভাগের স্বাধীনতা: সম্পূর্ণ স্বাধীন ও কার্যকর বিচার ব্যবস্থা',
    'প্রশাসনিক সংস্কার: দক্ষ ও জনবান্ধব প্রশাসন গঠন',
    'দুর্নীতি দমন: শূন্য সহনশীলতা নীতি গ্রহণ',
    'মত প্রকাশের স্বাধীনতা: সংবাদমাধ্যম ও বাকস্বাধীনতা নিশ্চিতকরণ',
    'আইনের শাসন প্রতিষ্ঠা: সকলের জন্য সমান আইন প্রয়োগ',
    'মানবাধিকার সংরক্ষণ: সকল নাগরিকের মৌলিক অধিকার নিশ্চিতকরণ',
    'বিকেন্দ্রীকরণ: স্থানীয় সরকারকে ক্ষমতায়ন',
    'শিক্ষা ব্যবস্থা সংস্কার: মানসম্পন্ন ও আধুনিক শিক্ষা নিশ্চিতকরণ',
    'স্বাস্থ্য সেবা উন্নয়ন: সকলের জন্য সাশ্রয়ী স্বাস্থ্য সেবা',
    'কৃষি উন্নয়ন: কৃষকদের ন্যায্য মূল্য ও সহায়তা',
    'শিল্প বিকাশ: শিল্প-কারখানা স্থাপনে সুবিধা প্রদান',
    'কর্মসংস্থান সৃষ্টি: বেকারত্ব দূরীকরণে বিশেষ কর্মসূচি',
    'যুব উন্নয়ন: তরুণদের দক্ষতা উন্নয়ন ও কর্মসংস্থান',
    'নারী ক্ষমতায়ন: সকল ক্ষেত্রে নারীর সমান অধিকার',
    'শিশু সুরক্ষা: শিশুদের নিরাপত্তা ও উন্নয়ন নিশ্চিতকরণ',
    'প্রবীণ কল্যাণ: বয়স্কদের জন্য বিশেষ সুবিধা',
    'প্রতিবন্ধী সেবা: প্রতিবন্ধীদের পূর্ণাঙ্গ পুনর্বাসন',
    'দারিদ্র্য বিমোচন: দরিদ্র জনগোষ্ঠীর জীবনমান উন্নয়ন',
    'খাদ্য নিরাপত্তা: সকলের জন্য খাদ্য নিশ্চিতকরণ',
    'আবাসন সমস্যা সমাধান: সবার জন্য বাসস্থান',
    'যোগাযোগ ব্যবস্থা উন্নয়ন: আধুনিক ও নিরাপদ পরিবহন',
    'বিদ্যুৎ ও জ্বালানি: সাশ্রয়ী মূল্যে নিরবচ্ছিন্ন বিদ্যুৎ',
    'পরিবেশ সংরক্ষণ: টেকসই পরিবেশ ব্যবস্থাপনা',
    'জলবায়ু পরিবর্তন মোকাবেলা: জলবায়ু সংকট মোকাবেলায় পদক্ষেপ',
    'নদী ও জলাশয় রক্ষা: নদী দূষণ রোধ ও পুনরুদ্ধার',
    'শিল্প ও সংস্কৃতি উন্নয়ন: সাংস্কৃতিক ঐতিহ্য সংরক্ষণ',
    'খেলাধুলা প্রসার: ক্রীড়া উন্নয়নে বিশেষ বরাদ্দ',
    'বিজ্ঞান ও প্রযুক্তি: আধুনিক প্রযুক্তিতে বিনিয়োগ',
    'পররাষ্ট্র নীতি: স্বাধীন ও সুষম পররাষ্ট্র নীতি',
  ];

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-2 bg-red-100 text-red-700 rounded-full font-bold text-sm uppercase tracking-wider mb-6">
              <FaFlag className="inline mr-2" />
              জাতীয় কর্মসূচি
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                বিএনপির ৩১ দফা
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto">
              গণতন্ত্র পুনরুদ্ধার ও রাষ্ট্রীয় সংস্কারের রূপরেখা
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200"
          >
            <FaFileAlt className="text-6xl text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900 mb-6 text-center">সংস্কারের রূপরেখা</h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি) এর ৩১ দফা দাবি হল দেশের রাজনৈতিক, অর্থনৈতিক ও সামাজিক সংস্কারের একটি বিস্তৃত রূপরেখা। 
              এই দফাগুলো প্রণয়ন করা হয়েছে দেশে গণতন্ত্র পুনরুদ্ধার, সুশাসন প্রতিষ্ঠা এবং জনগণের মৌলিক অধিকার নিশ্চিত করার লক্ষ্যে।
            </p>
            <p className="text-xl text-slate-700 leading-relaxed">
              প্রতিটি দফা তৈরি করা হয়েছে দেশের বর্তমান সংকট ও জনগণের প্রত্যাশা বিবেচনা করে। এই কর্মসূচি বাস্তবায়িত হলে বাংলাদেশ একটি সত্যিকারের 
              গণতান্ত্রিক, সমৃদ্ধ ও ন্যায়ভিত্তিক রাষ্ট্র হিসেবে প্রতিষ্ঠিত হবে।
            </p>
          </motion.div>
        </div>
      </section>

      {/* 31 Points List */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              ৩১ দফা দাবি
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 10) * 0.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-slate-200 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-black text-lg">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-900 font-semibold leading-relaxed">{point}</p>
                  </div>
                  <FaCheck className="text-emerald-600 flex-shrink-0 mt-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-white rounded-3xl p-12 md:p-16 shadow-2xl text-center border border-slate-200">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                একসাথে পরিবর্তন আনি
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                এই ৩১ দফা বাস্তবায়নে আপনার সমর্থন ও অংশগ্রহণ প্রয়োজন
              </p>
              <a
                href="/contact"
                className="inline-block px-10 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:from-red-700 hover:to-orange-700 transition-all transform hover:scale-105"
              >
                যোগাযোগ করুন
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


