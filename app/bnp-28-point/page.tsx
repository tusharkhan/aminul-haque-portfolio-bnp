"use client";
import { motion } from 'framer-motion';
import { FaFileAlt, FaFlag, FaCheck } from 'react-icons/fa';

export default function BNP28PointPage() {
  const points = [
    'অবিলম্বে সংসদ ভেঙ্গে নিরপেক্ষ তত্ত্বাবধায়ক সরকার গঠন',
    'দলীয় সরকারের অধীনে নির্বাচন নয়, নিরপেক্ষ সরকারের অধীনে নির্বাচন',
    'নির্বাচন কমিশন পুনর্গঠন ও সংস্কার',
    'রাজনৈতিক বন্দীদের মুক্তি',
    'সকল মিথ্যা মামলা প্রত্যাহার',
    'গুম ও জোরপূর্বক নিখোঁজদের ফিরিয়ে আনা',
    'বিচারবহির্ভূত হত্যাকাণ্ডের তদন্ত ও বিচার',
    'সংবাদপত্র ও গণমাধ্যমের স্বাধীনতা নিশ্চিতকরণ',
    'সভা-সমাবেশের স্বাধীনতা ফিরিয়ে দেওয়া',
    'র্যাবের দমনমূলক কার্যক্রম বন্ধ করা',
    'পুলিশকে রাজনৈতিক প্রভাবমুক্ত করা',
    'বিচার বিভাগের স্বাধীনতা নিশ্চিতকরণ',
    'দুর্নীতিবাজদের বিচারের আওতায় আনা',
    'লুটপাটের সম্পদ উদ্ধার',
    'কালো টাকা সাদা করার সুযোগ বন্ধ করা',
    'ডিজিটাল নিরাপত্তা আইন বাতিল',
    'দ্রব্যমূল্যের ঊর্ধ্বগতি রোধ',
    'বেকারত্ব দূরীকরণে কার্যকর পদক্ষেপ',
    'কৃষকদের ন্যায্যমূল্য নিশ্চিতকরণ',
    'শিক্ষা খাতে বাজেট বৃদ্ধি',
    'স্বাস্থ্য সেবার মান উন্নয়ন',
    'বিদ্যুৎ ও জ্বালানি খাতে স্বচ্ছতা',
    'পদ্মা সেতু টোল যুক্তিসংগত করা',
    'বিদেশে পাচারকৃত অর্থ ফেরত আনা',
    'শেয়ার বাজার স্থিতিশীল করা',
    'ব্যাংক খাত সংস্কার',
    'স্থানীয় সরকার নির্বাচন অবাধ ও সুষ্ঠু করা',
    'ভারতের সাথে অসম চুক্তি বাতিল',
  ];

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-2 bg-blue-100 text-blue-700 rounded-full font-bold text-sm uppercase tracking-wider mb-6">
              <FaFlag className="inline mr-2" />
              আন্দোলনের দাবি
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                বিএনপির ২৮ দফা
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto">
              গণতন্ত্র পুনরুদ্ধার ও জনগণের অধিকার প্রতিষ্ঠার দাবি
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
            <FaFileAlt className="text-6xl text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900 mb-6 text-center">আন্দোলনের পটভূমি</h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি) এর ২৮ দফা কর্মসূচি ঘোষণা করা হয়েছে দেশের বর্তমান রাজনৈতিক সংকট নিরসন এবং গণতান্ত্রিক ব্যবস্থা 
              পুনরুদ্ধারের লক্ষ্যে। এই দফাগুলো জনগণের দীর্ঘদিনের আকাঙ্ক্ষা এবং মৌলিক অধিকারের প্রতিফলন।
            </p>
            <p className="text-xl text-slate-700 leading-relaxed">
              দেশে গণতন্ত্র, মানবাধিকার, আইনের শাসন এবং বাক স্বাধীনতা প্রতিষ্ঠার জন্য এই দাবিগুলো অপরিহার্য। 
              প্রতিটি দফা যুক্তিসঙ্গত এবং বাস্তবায়নযোগ্য, যা জনগণের প্রত্যক্ষ কল্যাণ নিশ্চিত করবে।
            </p>
          </motion.div>
        </div>
      </section>

      {/* 28 Points List */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              ২৮ দফা দাবি
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-slate-200 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-black text-lg">
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

      {/* Priority Areas */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 text-center">
              অগ্রাধিকার ভিত্তিক দাবি
            </h2>
            <div className="space-y-6">
              {[
                { 
                  title: 'জরুরি রাজনৈতিক সংস্কার',
                  items: ['নিরপেক্ষ সরকার গঠন', 'নির্বাচন কমিশন সংস্কার', 'রাজনৈতিক বন্দী মুক্তি']
                },
                { 
                  title: 'মানবাধিকার সংরক্ষণ',
                  items: ['গুম বন্ধ', 'বিচারবহির্ভূত হত্যা বন্ধ', 'বাক স্বাধীনতা প্রতিষ্ঠা']
                },
                { 
                  title: 'অর্থনৈতিক সংস্কার',
                  items: ['দ্রব্যমূল্য নিয়ন্ত্রণ', 'দুর্নীতি দমন', 'লুটপাট বন্ধ']
                },
                { 
                  title: 'প্রাতিষ্ঠানিক সংস্কার',
                  items: ['বিচার বিভাগের স্বাধীনতা', 'পুলিশ সংস্কার', 'ব্যাংক খাত সংস্কার']
                },
              ].map((area, idx) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-6 bg-white rounded-2xl shadow-lg border border-slate-200"
                >
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <FaCheck className="text-blue-600" />
                        <span className="font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-white rounded-3xl p-12 md:p-16 shadow-2xl text-center border border-slate-200">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                আপনার সমর্থন প্রয়োজন
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                গণতন্ত্র পুনরুদ্ধারে এই ২৮ দফা বাস্তবায়নে আমাদের সাথে থাকুন
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105"
                >
                  যোগাযোগ করুন
                </a>
                <a
                  href="/events"
                  className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:shadow-2xl border-2 border-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105"
                >
                  ইভেন্ট দেখুন
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


