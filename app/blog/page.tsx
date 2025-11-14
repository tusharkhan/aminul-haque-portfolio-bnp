"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { FaNewspaper, FaFilter } from 'react-icons/fa';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('সব');

  const categories = ['সব', 'শিক্ষা', 'কৃষি', 'সংস্কৃতি', 'যুব উন্নয়ন', 'সম্প্রদায়'];

  const blogPosts = [
    {
      title: 'গ্রামীণ বাংলাদেশে শিক্ষায় রূপান্তর',
      excerpt: 'প্রত্যন্ত গ্রামীণ এলাকায় আমাদের শিক্ষা কর্মসূচি কীভাবে শিশুদের জীবন পরিবর্তন করছে তা আবিষ্কার করুন।',
      author: 'আমিনুল হক',
      date: '১৫ অক্টোবর ২০২৩',
      category: 'শিক্ষা',
      image: '/aminul_haque.jpg',
    },
    {
      title: 'কৃষক ক্ষমতায়ন: একটি সাফল্যের গল্প',
      excerpt: 'আমাদের কৃষি সমবায় কীভাবে ফলন বৃদ্ধি করছে এবং কৃষক পরিবারের জীবিকা উন্নত করছে।',
      author: 'আমিনুল হক',
      date: '২ অক্টোবর ২০২৩',
      category: 'কৃষি',
      image: '/aminul_haque.jpg',
    },
    {
      title: 'সাংস্কৃতিক ঐতিহ্য সংরক্ষণ',
      excerpt: 'আমাদের শিল্প ও সংস্কৃতি উদ্যোগের মাধ্যমে ঐতিহ্যগত শিল্পরূপ এবং স্থানীয় কারিগরদের পুনরুজ্জীবন।',
      author: 'আমিনুল হক',
      date: '২০ সেপ্টেম্বর ২০২৩',
      category: 'সংস্কৃতি',
      image: '/aminul_haque.jpg',
    },
    {
      title: 'যুব নেতৃত্ব: ভবিষ্যত গড়া',
      excerpt: 'আমাদের যুব ক্ষমতায়ন প্রোগ্রাম কীভাবে সামাজিক পরিবর্তনের জন্য পরবর্তী প্রজন্মের নেতা তৈরি করছে।',
      author: 'আমিনুল হক',
      date: '৮ সেপ্টেম্বর ২০২৩',
      category: 'যুব উন্নয়ন',
      image: '/aminul_haque.jpg',
    },
    {
      title: 'সম্প্রদায় সম্পৃক্ততা মাঠ থেকে',
      excerpt: 'স্থানীয় সম্প্রদায়ে আমাদের সাম্প্রতিক পরিদর্শন এবং তাদের গল্প ভাগাভাগি করা।',
      author: 'আমিনুল হক',
      date: '২৫ আগস্ট ২০২৩',
      category: 'সম্প্রদায়',
      image: '/aminul_haque.jpg',
    },
    {
      title: 'টেকসই উন্নয়ন লক্ষ্য এবং আমাদের কাজ',
      excerpt: 'আমাদের প্রোগ্রাম কীভাবে জাতিসংঘের টেকসই উন্নয়ন লক্ষ্যের সাথে সামঞ্জস্যপূর্ণ।',
      author: 'আমিনুল হক',
      date: '১০ আগস্ট ২০২৩',
      category: 'সব',
      image: '/aminul_haque.jpg',
    },
  ];

  const filteredPosts = selectedCategory === 'সব'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-2 bg-purple-100 text-purple-700 rounded-full font-bold text-sm uppercase tracking-wider mb-6">
              <FaNewspaper className="inline mr-2" />
              আমাদের ব্লগ
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                গল্প ও অন্তর্দৃষ্টি
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto">
              মাঠ থেকে সর্বশেষ আপডেট, গল্প এবং অন্তর্দৃষ্টি
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
            <div className="flex items-center gap-2 text-purple-700 font-bold">
              <FaFilter />
              <span>ফিল্টার:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-xl'
                    : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-purple-500 hover:text-purple-600 shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <BlogCard {...post} href="#" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-white rounded-3xl p-12 md:p-16 shadow-2xl text-center border border-slate-200">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                নিউজলেটার সাবস্ক্রাইব করুন
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                আমাদের কাজ, আসন্ন ইভেন্ট এবং আরও অনেক কিছু সম্পর্কে সর্বশেষ আপডেট পান
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল লিখুন"
                  className="flex-1 px-6 py-4 bg-slate-50 text-slate-900 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-purple-500 transition-all"
                />
                <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105">
                  সাবস্ক্রাইব
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
    </main>
  );
}
