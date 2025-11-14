"use client";
import { motion } from 'framer-motion';
import { FaBook, FaSeedling, FaPalette, FaUsers, FaChartLine, FaHeart, FaArrowRight, FaBus, FaTint, FaHospital, FaGraduationCap, FaTree } from 'react-icons/fa';

export default function ProgramsPage() {
  const programs = [
    {
      icon: FaBus,
      title: 'যানজট নিরসন',
      tagline: 'আধুনিক গণপরিবহন ব্যবস্থা',
      description: 'ঢাকার যানজট আমাদের মূল্যবান সময় এবং শক্তি নষ্ট করে। আমিনুল হক একটি আধুনিক গণপরিবহন ব্যবস্থা গড়ে তুলবেন, রাস্তাঘাট প্রশস্ত করবেন এবং ট্র্যাফিক ব্যবস্থাপনাকে উন্নত করে ঢাকাকে যানজটমুক্ত করবেন।',
      color: 'from-red-500 to-rose-600',
    },
    {
      icon: FaTint,
      title: 'বিশুদ্ধ পানির সরবরাহ',
      tagline: 'প্রতিটি বাড়িতে বিশুদ্ধ পানি',
      description: 'বিশুদ্ধ পানি প্রত্যেক নাগরিকের অধিকার। অনেক এলাকা এখনও বিশুদ্ধ পানির সংকটে ভুগছে। মেয়র হিসেবে, আমিনুল ঢাকার প্রতিটি বাড়িতে বিশুদ্ধ পানির সরবরাহ নিশ্চিত করতে নতুন পাইপলাইন স্থাপন এবং ওয়াটার ট্রিটমেন্ট প্ল্যান্ট তৈরি করবেন।',
     
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: FaHospital,
      title: 'সাশ্রয়ী স্বাস্থ্যসেবা',
      tagline: 'সবার জন্য মানসম্মত চিকিৎসা',
      description: 'স্বাস্থ্যসেবা কোনো বিলাসিতা নয়, এটি একটি মৌলিক অধিকার। আমিনুল হক শহরের হাসপাতালগুলোর মান উন্নয়ন করবেন এবং সাধারণ মানুষের জন্য সাশ্রয়ী মূল্যে চিকিৎসা সেবা নিশ্চিত করতে নতুন ক্লিনিক স্থাপন করবেন।',
      
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: FaGraduationCap,
      title: 'মানসম্মত শিক্ষা',
      tagline: 'সকল শিশুর জন্য উন্নত শিক্ষা',
      description: 'সকল শিশুর জন্য মানসম্মত শিক্ষা নিশ্চিত করতে স্কুলগুলোর আধুনিকায়ন করা হবে এবং শিক্ষকদের প্রশিক্ষণের ব্যবস্থা করা হবে। প্রযুক্তিভিত্তিক শিক্ষা প্রসারেও বিশেষ নজর দেওয়া হবে।',
      
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: FaTree,
      title: 'পরিষ্কার ও সবুজ ঢাকা',
      tagline: 'বাসযোগ্য সবুজ নগরী',
      description: 'শহরকে পরিষ্কার রাখতে আধুনিক বর্জ্য ব্যবস্থাপনা সিস্টেম চালু করা হবে। পার্ক, খেলার মাঠ এবং সবুজায়ন বৃদ্ধি করে ঢাকাকে একটি স্বাস্থ্যকর ও বাসযোগ্য নগরী হিসেবে গড়ে তোলা হবে।',
      
      color: 'from-emerald-500 to-green-600',
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
              আমাদের প্রোগ্রাম
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                পরিবর্তন তৈরি
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto">
              স্থায়ী প্রভাবের জন্য যত্ন সহকারে ডিজাইন করা উদ্যোগ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl space-y-8">
          {programs.map((program, idx) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${program.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all`}></div>
              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all border border-slate-200">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Icon */}
                  <div className={`flex-shrink-0 p-5 bg-gradient-to-br ${program.color} rounded-2xl shadow-lg`}>
                    <program.icon className="text-5xl text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                      {program.title}
                    </h2>
                    <p className={`text-base md:text-lg font-semibold bg-gradient-to-r ${program.color} bg-clip-text text-transparent mb-4`}>
                      {program.tagline}
                    </p>
                    <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
                পরিবর্তনের অংশ হন
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                আমাদের প্রোগ্রামে যোগদান করুন এবং বাংলাদেশে টেকসই প্রভাব তৈরি করতে সাহায্য করুন
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:from-emerald-600 hover:to-green-700 transition-all transform hover:scale-105">
                যোগাযোগ করুন
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
