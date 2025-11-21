"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGraduationCap, FaSeedling, FaPalette, FaUsers, FaArrowRight, FaChartLine, FaHeart, FaTrophy, FaMapMarkerAlt, FaNewspaper, FaExclamationTriangle } from 'react-icons/fa';
import Hero from './components/Hero';
import TestimonialCarousel from './components/TestimonialCarousel';
import WelcomeModal from './components/WelcomeModal';
import Link from 'next/link';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <WelcomeModal />
      
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      {/* <section className="py-20 px-4 -mt-20 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaUsers, label: 'জনগণ সেবায়', value: '৫০,০০০+', color: 'from-emerald-500 to-green-600' },
              { icon: FaGraduationCap, label: 'ছাত্র উপকৃত', value: '১৫,০০০+', color: 'from-blue-500 to-cyan-600' },
              { icon: FaSeedling, label: 'কৃষক সহায়তা', value: '৮,০০০+', color: 'from-amber-500 to-orange-600' },
              { icon: FaTrophy, label: 'সফল প্রকল্প', value: '৫০+', color: 'from-purple-500 to-pink-600' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all`}></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-200">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${stat.color} rounded-xl mb-4`}>
                    <stat.icon className="text-3xl text-white" />
                  </div>
                  <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-slate-600 font-semibold">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Vision Section */}
      {/* <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
              আমাদের রূপকল্প
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              একটি উন্নত <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">বাংলাদেশ</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              শিক্ষা, কৃষি, শিল্প ও সংস্কৃতিতে টেকসই উন্নয়নের মাধ্যমে একটি সমৃদ্ধ ও ন্যায়সংগত সমাজ গড়ে তোলা আমাদের লক্ষ্য।
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/aminul_haque.jpg"
                  alt="আমিনুল হক"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-4xl font-black text-slate-900">
                জনগণের সেবায় নিবেদিত
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                আমিনুল হক দীর্ঘদিন ধরে বাংলাদেশের সাধারণ মানুষের জীবনমান উন্নয়নে কাজ করে যাচ্ছেন। তার নেতৃত্বে শিক্ষা, কৃষি এবং সংস্কৃতি ক্ষেত্রে অসংখ্য সফল কর্মসূচি বাস্তবায়িত হয়েছে।
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaGraduationCap, text: 'শিক্ষা প্রতিষ্ঠান উন্নয়ন ও বৃত্তি কর্মসূচি' },
                  { icon: FaSeedling, text: 'কৃষক সহায়তা ও আধুনিক কৃষি প্রযুক্তি' },
                  { icon: FaPalette, text: 'সংস্কৃতি সংরক্ষণ ও শিল্পীদের সহায়তা' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
                      <item.icon className="text-2xl text-white" />
                    </div>
                    <span className="font-semibold text-slate-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Video Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
              আমাদের ইশতেহার
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              উন্নত আগামীর রূপকল্প
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              আমাদের বিস্তৃত নির্বাচনী ইশতেহার দেখুন এবং জানুন কীভাবে আমরা একটি সমৃদ্ধ, অন্তর্ভুক্তিমূলক বাংলাদেশ গড়ছি
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-600 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/AyL-WF3Uryo"
                  title="আমিনুল হকের নির্বাচনী প্রচারণা"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-blue-100 text-blue-700 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
              আমাদের কর্মসূচি
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              পরিবর্তনের <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">উদ্যোগ</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaGraduationCap,
                title: 'শিক্ষা অগ্রাধিকার',
                description: 'প্রতিটি শিশুর জন্য মানসম্পন্ন শিক্ষা নিশ্চিত করা',
                color: 'from-emerald-500 to-green-600',
              },
              {
                icon: FaSeedling,
                title: 'কৃষি উন্নয়ন',
                description: 'কৃষকদের জন্য আধুনিক প্রযুক্তি ও সহায়তা',
                color: 'from-blue-500 to-cyan-600',
              },
              {
                icon: FaPalette,
                title: 'শিল্প ও সংস্কৃতি',
                description: 'ঐতিহ্য সংরক্ষণ ও শিল্পীদের ক্ষমতায়ন',
                color: 'from-purple-500 to-pink-600',
              },
              {
                icon: FaUsers,
                title: 'যুব নেতৃত্ব',
                description: 'তরুণদের দক্ষতা উন্নয়ন ও প্রশিক্ষণ',
                color: 'from-amber-500 to-orange-600',
              },
            ].map((program, idx) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all`}></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-200 h-full">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${program.color} rounded-xl mb-6`}>
                    <program.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{program.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{program.description}</p>
                  <button className={`mt-6 inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${program.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                    আরও জানুন <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Quick Services Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-cyan-100 text-cyan-700 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
              দ্রুত সেবা
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              অনলাইন <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">সেবা সমূহ</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all"></div>
              <Link href="/voter-center" className="relative block bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all border border-slate-200 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 p-5 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mb-6">
                    <FaMapMarkerAlt className="text-5xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-slate-900 mb-4">ভোট কেন্দ্র খুঁজুন</h3>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      আপনার এনআইডি, মোবাইল নম্বর বা এলাকার নাম দিয়ে সহজেই আপনার ভোট কেন্দ্রের অবস্থান খুঁজে নিন
                    </p>
                    <div className="flex items-center justify-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all">
                      এখনই খুঁজুন <FaArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all"></div>
              <Link href="/complaints" className="relative block bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all border border-slate-200 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 p-5 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl mb-6">
                    <FaExclamationTriangle className="text-5xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-slate-900 mb-4">অভিযোগ দাখিল</h3>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      আপনার সমস্যা ও অভিযোগ জানান। আমরা সমাধানে প্রতিশ্রুতিবদ্ধ এবং দ্রুত ব্যবস্থা নিতে প্রস্তুত
                    </p>
                    <div className="flex items-center justify-center gap-2 text-red-600 font-bold group-hover:gap-3 transition-all">
                      অভিযোগ করুন <FaArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all"></div>
              <Link href="/press-release" className="relative block bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all border border-slate-200 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 p-5 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl mb-6">
                    <FaNewspaper className="text-5xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-slate-900 mb-4">প্রেস রিলিজ</h3>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      আমাদের সর্বশেষ প্রেস রিলিজ, ঘোষণা এবং কার্যক্রম সম্পর্কে জানুন এবং মিডিয়া কভারেজ দেখুন
                    </p>
                    <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold group-hover:gap-3 transition-all">
                      সব রিলিজ দেখুন <FaArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-purple-100 text-purple-700 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
              জনগণের মতামত
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              সাফল্যের <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">গল্প</span>
            </h2>
          </motion.div>
          <TestimonialCarousel 
            testimonials={[
              {
                quote: 'আমিনুল হক আমাদের এলাকায় শিক্ষার মান উন্নয়নে অসাধারণ কাজ করেছেন। তার বৃত্তি কর্মসূচির কারণে আমার সন্তান উচ্চশিক্ষা গ্রহণ করতে পারছে।',
                author: 'করিম উদ্দিন',
                role: 'গ্রামীণ শিক্ষক',
                rating: 5
              },
              {
                quote: 'কৃষি সমবায় প্রকল্পের মাধ্যমে আমরা আমাদের ফসলের ন্যায্য মূল্য পাচ্ছি। আমিনুল হকের নেতৃত্বে আমরা সংগঠিত হয়েছি এবং আমাদের জীবনযাত্রা উন্নত হয়েছে।',
                author: 'রহিমা খাতুন',
                role: 'কৃষক',
                rating: 5
              },
              {
                quote: 'যুব নেতৃত্ব প্রশিক্ষণ প্রোগ্রাম আমার জীবন বদলে দিয়েছে। আজ আমি নিজের একটি সামাজিক উদ্যোগ চালাচ্ছি এবং সমাজে অবদান রাখতে পারছি।',
                author: 'সাকিব হাসান',
                role: 'উদ্যোক্তা',
                rating: 5
              },
              {
                quote: 'সাংস্কৃতিক কর্মসূচির মাধ্যমে আমাদের ঐতিহ্যবাহী শিল্পকলা রক্ষা পাচ্ছে। স্থানীয় শিল্পীরা এখন তাদের প্রতিভা প্রদর্শনের সুযোগ পাচ্ছেন।',
                author: 'নাসিমা আক্তার',
                role: 'লোক শিল্পী',
                rating: 5
              },
              {
                quote: 'আমিনুল হকের দূরদর্শী নেতৃত্বে আমাদের অঞ্চলে অনেক উন্নয়ন হয়েছে। তিনি সাধারণ মানুষের কথা শোনেন এবং তাদের সমস্যার সমাধান করেন।',
                author: 'আব্দুল করিম',
                role: 'সমাজসেবক',
                rating: 5
              },
            ]}
          />
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-amber-100 text-amber-700 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
              ক্যাম্পেইন গ্যালারি
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              মুহূর্ত <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">ক্যাপচার</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={idx % 2 === 0 ? '/aminul_haque.jpg' : '/aminul_nomination_post.webp'}
                  alt={`গ্যালারি ছবি ${idx}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-105">
              সম্পূর্ণ গ্যালারি দেখুন <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-rose-100 text-rose-700 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
              সর্বশেষ আপডেট
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              খবর ও <span className="bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">গল্প</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'গ্রামীণ শিক্ষা উন্নয়ন', category: 'শিক্ষা', color: 'from-emerald-500 to-green-600' },
              { title: 'কৃষক সমবায় সাফল্য', category: 'কৃষি', color: 'from-blue-500 to-cyan-600' },
              { title: 'সাংস্কৃতিক উৎসব', category: 'সংস্কৃতি', color: 'from-purple-500 to-pink-600' },
            ].map((post, idx) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${post.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all`}></div>
                <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-slate-200">
                  <div className={`h-48 bg-gradient-to-br ${post.color}`}></div>
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${post.color} text-white text-xs font-bold rounded-full mb-3`}>
                      {post.category}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mb-3">{post.title}</h3>
                    <p className="text-slate-600 mb-4">
                      আমাদের সর্বশেষ উদ্যোগ এবং সফলতার গল্প পড়ুন...
                    </p>
                    <button className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${post.color} bg-clip-text text-transparent`}>
                      আরও পড়ুন <FaArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-white rounded-3xl p-12 md:p-16 shadow-2xl text-center border border-slate-200">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                একসাথে পরিবর্তন আনি
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                আপনার সহযোগিতায় আমরা আরও বেশি মানুষের জীবনে ইতিবাচক পরিবর্তন আনতে পারি
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                  যোগাযোগ করুন
                </button>
                <button className="px-8 py-4 bg-slate-100 text-slate-900 font-bold text-lg rounded-xl hover:bg-slate-200 transition-all">
                  আরও জানুন
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
