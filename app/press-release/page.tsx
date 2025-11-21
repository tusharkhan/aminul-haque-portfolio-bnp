"use client";
import { motion } from 'framer-motion';
import PressReleaseCard from '../components/PressReleaseCard';
import { FaNewspaper, FaBullhorn } from 'react-icons/fa';

export default function PressReleasePage() {
  const pressReleases = [
    {
      title: 'আমিনুল হক বিএনপির ঢাকা উত্তর সিটি ইউনিটের সদস্য সচিব হিসেবে নিযুক্ত',
      summary: 'বিশিষ্ট ফুটবলার ও সামাজিক ব্যক্তিত্ব আমিনুল হক বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি) এর ঢাকা উত্তর সিটি ইউনিটের সদস্য সচিব হিসেবে দায়িত্ব গ্রহণ করেছেন।',
      date: '১৫ নভেম্বর ২০২৫',
      slug: 'aminul-bnp-appointment',
      image: '/aminul_nomination_post.webp',
    },
    {
      title: 'স্থানীয় যুব ফুটবল উন্নয়ন প্রোগ্রাম উদ্বোধন',
      summary: 'আমিনুল হক ঢাকার বিভিন্ন এলাকায় তরুণ প্রতিভা বিকাশের জন্য একটি বিস্তৃত ফুটবল প্রশিক্ষণ কর্মসূচি চালু করেছেন যা প্রতিবছর ৫০০+ যুবকদের উপকৃত করবে।',
      date: '৩ নভেম্বর ২০২৫',
      slug: 'youth-football-program',
      image: '/aminul_haque.jpg',
      hasVideo: true,
    },
    {
      title: 'গ্রামীণ শিক্ষা উদ্যোগে আমিনুল হক এর অবদান',
      summary: 'প্রত্যন্ত অঞ্চলে শিক্ষার মান উন্নয়নে একটি নতুন উদ্যোগ ঘোষণা করেছেন আমিনুল হক। এই কর্মসূচির মাধ্যমে ১০টি গ্রামে স্কুল সুবিধা উন্নত করা হবে।',
      date: '২২ অক্টোবর ২০২৫',
      slug: 'rural-education-initiative',
      image: '/aminul_haque.jpg',
    },
    {
      title: 'সম্প্রদায়ের স্বাস্থ্য সচেতনতা ক্যাম্পেইন শুরু',
      summary: 'স্থানীয় সম্প্রদায়ে স্বাস্থ্য সেবা এবং সচেতনতা বৃদ্ধির জন্য একটি বিনামূল্যে স্বাস্থ্য পরীক্ষা এবং শিক্ষা কর্মসূচি চালু করা হয়েছে।',
      date: '১০ অক্টোবর ২০২৫',
      slug: 'health-awareness-campaign',
      image: '/aminul_haque.jpg',
    },
    {
      title: 'কৃষক কল্যাণ কর্মসূচির নতুন পর্যায়',
      summary: 'স্থানীয় কৃষকদের সহায়তা করার জন্য একটি বিস্তৃত কৃষি সহায়তা কর্মসূচি ঘোষণা করা হয়েছে যা আধুনিক কৃষি পদ্ধতি এবং সম্পদে অ্যাক্সেস প্রদান করবে।',
      date: '২৮ সেপ্টেম্বর ২০২৫',
      slug: 'farmer-welfare-program',
      image: '/aminul_haque.jpg',
      hasVideo: true,
    },
    {
      title: 'মহিলা ক্ষমতায়ন ওয়ার্কশপ সিরিজ',
      summary: 'স্থানীয় মহিলাদের দক্ষতা উন্নয়ন এবং অর্থনৈতিক স্বাধীনতার জন্য একটি নতুন প্রশিক্ষণ কর্মসূচি শুরু হয়েছে।',
      date: '১৫ সেপ্টেম্বর ২০২৫',
      slug: 'women-empowerment-workshop',
      image: '/aminul_haque.jpg',
    },
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
              <FaBullhorn className="inline mr-2" />
              সর্বশেষ সংবাদ
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                প্রেস রিলিজ
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto">
              আমাদের কার্যক্রম এবং উদ্যোগ সম্পর্কে সর্বশেষ আপডেট
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Releases Grid */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((release, idx) => (
              <motion.div
                key={release.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <PressReleaseCard {...release} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Press Section */}
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
              <FaNewspaper className="text-5xl text-blue-600 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                মিডিয়া যোগাযোগ
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                সাংবাদিক এবং মিডিয়া সংস্থাগুলির জন্য, অনুগ্রহ করে আমাদের প্রেস অফিসের সাথে যোগাযোগ করুন
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:press@aminulhaque.com"
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105"
                >
                  ইমেইল পাঠান
                </a>
                <a
                  href="/contact"
                  className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:shadow-2xl border-2 border-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105"
                >
                  যোগাযোগ ফর্ম
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

