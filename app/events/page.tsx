"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from '../components/EventCard';
import { FaCalendarAlt, FaFilter } from 'react-icons/fa';

export default function EventsPage() {
  const [filter, setFilter] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingEvents = [
    {
      title: 'যুব উন্নয়ন কর্মশালা ২০২৫',
      date: '২৫ ডিসেম্বর ২০২৫',
      time: 'সকাল ১০:০০',
      location: 'উত্তরা কমিউনিটি সেন্টার, সেক্টর ৭, উত্তরা, ঢাকা',
      description: 'তরুণদের জন্য বিশেষ দক্ষতা উন্নয়ন কর্মশালা। উদ্যোক্তা উন্নয়ন, নেতৃত্ব প্রশিক্ষণ এবং ক্যারিয়ার গাইডেন্স।',
      slug: 'youth-development-workshop-2025',
      image: '/aminul_haque.jpg',
    },
    {
      title: 'সম্প্রদায় স্বাস্থ্য ক্যাম্প',
      date: '৩০ ডিসেম্বর ২০২৫',
      time: 'সকাল ৯:০০',
      location: 'মিরপুর সরকারি স্কুল মাঠ, মিরপুর-১০, ঢাকা',
      description: 'বিনামূল্যে স্বাস্থ্য পরীক্ষা, ডায়াবেটিস স্ক্রিনিং, রক্তচাপ পরীক্ষা এবং বিশেষজ্ঞ ডাক্তারদের পরামর্শ।',
      slug: 'community-health-camp',
      image: '/aminul_haque.jpg',
    },
    {
      title: 'নববর্ষ সাংস্কৃতিক অনুষ্ঠান',
      date: '১ জানুয়ারি ২০২৬',
      time: 'বিকাল ৫:০০',
      location: 'জাতীয় জাদুঘর প্রাঙ্গণ, শাহবাগ, ঢাকা',
      description: 'নববর্ষ উদযাপনে বিশেষ সাংস্কৃতিক অনুষ্ঠান। গান, নৃত্য, কবিতা আবৃত্তি এবং ঐতিহ্যবাহী খাবারের আয়োজন।',
      slug: 'new-year-cultural-program',
      image: '/aminul_nomination_post.webp',
    },
    {
      title: 'কৃষক সমাবেশ ও কৃষি মেলা',
      date: '৫ জানুয়ারি ২০২৬',
      time: 'সকাল ৮:০০',
      location: 'কৃষি অফিস মাঠ, সাভার, ঢাকা',
      description: 'স্থানীয় কৃষকদের জন্য বিশেষ সমাবেশ। আধুনিক কৃষি প্রযুক্তি প্রদর্শনী এবং বিনামূল্যে বীজ ও সার বিতরণ।',
      slug: 'farmers-assembly-agro-fair',
      image: '/aminul_haque.jpg',
    },
  ];

  const pastEvents = [
    {
      title: 'শিক্ষা উন্নয়ন সম্মেলন ২০২৫',
      date: '১৫ নভেম্বর ২০২৫',
      time: 'সকাল ১০:০০',
      location: 'ঢাকা রিপোর্টার্স ইউনিটি, সেগুনবাগিচা, ঢাকা',
      description: 'শিক্ষা ব্যবস্থার উন্নয়নে করণীয় নিয়ে জাতীয় সম্মেলন। শিক্ষাবিদ, শিক্ষক এবং অভিভাবকদের অংশগ্রহণ।',
      slug: 'education-development-conference-2025',
      hasVideo: true,
      image: '/aminul_haque.jpg',
    },
    {
      title: 'স্থানীয় সরকার উন্নয়ন কর্মশালা',
      date: '৩ নভেম্বর ২০২৫',
      time: 'দুপুর ২:০০',
      location: 'বনানী কমিউনিটি হল, বনানী, ঢাকা',
      description: 'স্থানীয় সরকার উন্নয়নে জনগণের অংশগ্রহণ বৃদ্ধি এবং স্বচ্ছতা নিশ্চিতকরণ নিয়ে আলোচনা।',
      slug: 'local-government-workshop',
      hasVideo: true,
      image: '/aminul_nomination_post.webp',
    },
    {
      title: 'যুব ফুটবল টুর্নামেন্ট',
      date: '২০ অক্টোবর ২০২৫',
      time: 'সকাল ৯:০০',
      location: 'উত্তরা স্টেডিয়াম, সেক্টর ৪, উত্তরা, ঢাকা',
      description: 'স্থানীয় যুবকদের মধ্যে আন্তঃবিদ্যালয় ফুটবল টুর্নামেন্ট। ১৬টি দল অংশগ্রহণ করে।',
      slug: 'youth-football-tournament',
      hasVideo: true,
      image: '/aminul_haque.jpg',
    },
    {
      title: 'মহিলা ক্ষমতায়ন সেমিনার',
      date: '৮ অক্টোবর ২০২৫',
      time: 'বিকাল ৩:০০',
      location: 'গুলশান মহিলা কলেজ, গুলশান-২, ঢাকা',
      description: 'মহিলাদের অর্থনৈতিক স্বাধীনতা এবং সামাজিক ক্ষমতায়ন নিয়ে বিশেষ সেমিনার।',
      slug: 'women-empowerment-seminar',
      hasVideo: false,
      image: '/aminul_haque.jpg',
    },
    {
      title: 'পরিবেশ সংরক্ষণ র‍্যালি',
      date: '২৮ সেপ্টেম্বর ২০২৫',
      time: 'সকাল ৭:০০',
      location: 'রমনা পার্ক, ঢাকা',
      description: 'পরিবেশ সচেতনতা বৃদ্ধি এবং বৃক্ষরোপণ কর্মসূচির আয়োজন। ৫০০+ অংশগ্রহণকারী।',
      slug: 'environment-protection-rally',
      hasVideo: true,
      image: '/aminul_nomination_post.webp',
    },
  ];

  const displayEvents = filter === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm uppercase tracking-wider mb-6">
              <FaCalendarAlt className="inline mr-2" />
              আমাদের কার্যক্রম
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                ইভেন্ট সমূহ
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto">
              আসন্ন এবং অতীতের সকল কার্যক্রম ও অনুষ্ঠান দেখুন
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <div className="flex items-center gap-2 text-emerald-700 font-bold">
              <FaFilter />
              <span>ফিল্টার:</span>
            </div>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 ${
                filter === 'upcoming'
                  ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-xl'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-emerald-500 hover:text-emerald-600 shadow-lg'
              }`}
            >
              আসন্ন ইভেন্ট ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 ${
                filter === 'past'
                  ? 'bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-xl'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-slate-500 hover:text-slate-600 shadow-lg'
              }`}
            >
              অতীতের ইভেন্ট ({pastEvents.length})
            </button>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayEvents.map((event, idx) => (
              <motion.div
                key={event.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <EventCard {...event} isPast={filter === 'past'} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {displayEvents.length === 0 && (
            <div className="text-center py-20">
              <FaCalendarAlt className="text-6xl text-slate-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-700 mb-2">
                কোন ইভেন্ট নেই
              </h3>
              <p className="text-slate-500">
                {filter === 'upcoming' ? 'শীঘ্রই নতুন ইভেন্ট যুক্ত করা হবে' : 'অতীতের কোন ইভেন্ট পাওয়া যায়নি'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-white rounded-3xl p-12 md:p-16 shadow-2xl text-center border border-slate-200">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                ইভেন্ট সম্পর্কে জানুন
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                আমাদের আসন্ন ইভেন্ট সম্পর্কে সর্বশেষ আপডেট পেতে যোগাযোগ করুন
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:from-emerald-700 hover:to-green-700 transition-all transform hover:scale-105"
                >
                  যোগাযোগ করুন
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


