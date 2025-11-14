"use client";
import { motion } from 'framer-motion';
import { FaFileAlt } from 'react-icons/fa';

export default function ManifestoPage() {
  const manifestoPoints = [
    {
      number: '০৩',
      title: 'মিনি স্পোর্টস ভিলেজ',
      description: 'প্রতিটি উপজেলায় ২০ বিঘা জমির উপর ইন্ডোর সুবিধাসম্পন্ন "মিনি স্পোর্টস ভিলেজ" তৈরি করা হবে',
      color: 'from-emerald-500 to-green-600',
      pdfUrl: '/pdfs/manifesto-03.pdf'
    },
    {
      number: '০৪',
      title: 'নতুন কুঁড়ি ক্রীড়া',
      description: 'তৃণমূল পর্যায় থেকে প্রতিভাবান খেলোয়াড়দের জাতীয় পর্যায়ে সুযোগ প্রদানের লক্ষ্যে "নতুন কুঁড়ি ক্রীড়া" আয়োজন করা হবে',
      color: 'from-blue-500 to-cyan-600',
      pdfUrl: '/pdfs/manifesto-04.pdf'
    },
    {
      number: '০৬',
      title: 'শারীরিক শিক্ষা বাধ্যতামূলক',
      description: 'দেশের প্রতিটি শিক্ষা প্রতিষ্ঠানে শারীরিক শিক্ষার শিক্ষক নিয়োগ বাধ্যতামূলক করা সহ তাদের যোগ্যতা ও দক্ষতার সঠিক ব্যবহার নিশ্চিত করা হবে এবং শিক্ষা কারিকুলামে শারীরিক শিক্ষার বিষয়টি বাধ্যতামূলক/ঐচ্ছিক করা হবে',
      color: 'from-purple-500 to-pink-600',
      pdfUrl: '/pdfs/manifesto-06.pdf'
    },
    {
      number: '০৭',
      title: 'বি.কে.এস.পি প্রতিষ্ঠা',
      description: '১ম ধাপে, দেশের বিভাগীয় অঞ্চল সমন্বয় করে ৫ টি এবং দ্বিতীয় ধাপে, আরো ৩ টি বি.কে.এস.পি প্রতিষ্ঠা করা হবে',
      color: 'from-amber-500 to-orange-600',
      pdfUrl: '/pdfs/manifesto-07.pdf'
    },
    {
      number: '০৮',
      title: 'বাংলাদেশ ক্রীড়া উন্নয়ন ব্যাংক',
      description: 'ক্রীড়াঙ্গনের আর্থিক সমৃদ্ধি, স্বচ্ছতা ও খেলোয়াড়দের আর্থিক সহায়তার লক্ষ্যে "বাংলাদেশ ক্রীড়া উন্নয়ন ব্যাংক" প্রতিষ্ঠা করা হবে',
      color: 'from-rose-500 to-red-600',
      pdfUrl: '/pdfs/manifesto-08.pdf'
    },
    {
      number: '০৯',
      title: 'আন্তর্জাতিক মানের স্পোর্টস ভিলেজ',
      description: 'আন্তর্জাতিক মানের সুবিধাসম্পন্ন একটি "স্পোর্টস ভিলেজ" প্রতিষ্ঠা করা হবে',
      color: 'from-teal-500 to-cyan-600',
      pdfUrl: '/pdfs/manifesto-09.pdf'
    },
    {
      number: '১০',
      title: 'ক্রীড়া বিশ্ববিদ্যালয়',
      description: 'খেলাধুলা ও ক্রীড়া গবেষণার জন্য একটি আধুনিক ও পূর্ণাঙ্গ "ক্রীড়া বিশ্ববিদ্যালয়/Sports University" প্রতিষ্ঠা করা হবে',
      color: 'from-indigo-500 to-purple-600',
      pdfUrl: '/pdfs/manifesto-10.pdf'
    },
    {
      number: '১১',
      title: 'ক্রীড়া সরঞ্জাম ইন্ডাস্ট্রি',
      description: 'ক্রীড়াঙ্গনের সার্বিক উন্নয়ন ও ক্রীড়া সরঞ্জামের স্বল্পতা দূরীকরণে "ক্রীড়া সরঞ্জাম ইন্ডাস্ট্রি" স্থাপন করা হবে',
      color: 'from-emerald-500 to-green-600',
      pdfUrl: '/pdfs/manifesto-11.pdf'
    },
    {
      number: '১২',
      title: 'আন্তর্জাতিক সহযোগিতা',
      description: 'বিদেশী বিভিন্ন ক্রীড়া সংস্থার সাথে চুক্তির মাধ্যমে দেশের ক্রীড়ার মান উন্নয়ন, আন্তর্জাতিক মান অর্জন এবং খেলোয়াড়দের উন্নত প্রশিক্ষণ ও দক্ষতা নিশ্চিত করা হবে',
      color: 'from-blue-500 to-cyan-600',
      pdfUrl: '/pdfs/manifesto-12.pdf'
    },
    {
      number: '১৩',
      title: 'ক্রীড়া পত্রিকা',
      description: 'দেশীয় ও আন্তর্জাতিক ক্রীড়া সংবাদ প্রকাশে "ক্রীড়া পত্রিকা" চালু করা হবে',
      color: 'from-purple-500 to-pink-600',
      pdfUrl: '/pdfs/manifesto-13.pdf'
    },
    {
      number: '১৪',
      title: 'স্পোর্টস টিভি চ্যানেল',
      description: '২৪ ঘন্টা ক্রীড়া সম্প্রচারের জন্য "স্পোর্টস টিভি চ্যানেল" চালু করা হবে',
      color: 'from-amber-500 to-orange-600',
      pdfUrl: '/pdfs/manifesto-14.pdf'
    },
    {
      number: '১৫',
      title: 'স্পোর্টস রেডিও চ্যানেল',
      description: 'নিয়মিত ক্রীড়া সংবাদ প্রচারের জন্য "স্পোর্টস রেডিও চ্যানেল" চালু করা হবে',
      color: 'from-rose-500 to-red-600',
      pdfUrl: '/pdfs/manifesto-15.pdf'
    },
    {
      number: '১৭',
      title: 'বেসরকারি একাডেমী সহযোগিতা',
      description: 'বেসরকারি ক্রীড়া একাডেমীসমূহকে সরকারি/রাষ্ট্রীয়ভাবে সহযোগিতা ও সংরক্ষন করা হবে',
      color: 'from-teal-500 to-cyan-600',
      pdfUrl: '/pdfs/manifesto-17.pdf'
    },
  ];

  const handleDownload = (pdfUrl: string, title: string) => {
    // In a real implementation, this would download or open the PDF
    alert(`PDF ডাউনলোড: ${title}\nPath: ${pdfUrl}\n\nদ্রষ্টব্য: PDF ফাইল যোগ করতে হবে`);
  };

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-red-50 via-white to-rose-50">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-2 bg-red-100 text-red-700 rounded-full font-bold text-sm uppercase tracking-wider mb-6">
              <FaFileAlt className="inline mr-2" />
              আমাদের রূপকল্প
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                বিএনপির ১৮ দফা রূপকল্প
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto">
              ক্রীড়া বিষয়ক উন্নয়ন পরিকল্পনা
            </p>
          </motion.div>
        </div>
      </section>


      {/* Manifesto Points */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              প্রস্তাবনা সমূহ
            </h2>
            <p className="text-xl text-slate-600">
              ক্রীড়া খাতের সার্বিক উন্নয়নে আমাদের প্রতিশ্রুতি
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manifestoPoints.map((point, idx) => (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${point.color} rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all`}></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-slate-200 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-end mb-4">
                    <div className={`px-3 py-1 bg-gradient-to-r ${point.color} text-white font-black rounded-full text-sm`}>
                      প্রস্তাবনা-{point.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-4 flex-1">
                    {point.description}
                  </p>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(point.pdfUrl, point.title)}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${point.color} text-white font-bold rounded-xl hover:shadow-xl transition-all transform hover:scale-105`}
                  >
                    বিস্তারিত
                  </button>
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
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-white rounded-3xl p-12 md:p-16 shadow-2xl text-center border border-slate-200">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                আমাদের প্রতিশ্রুতি
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                বাংলাদেশের ক্রীড়া খাতকে আন্তর্জাতিক মানে উন্নীত করতে আমরা প্রতিশ্রুতিবদ্ধ। 
                প্রতিটি খেলোয়াড়ের স্বপ্ন পূরণে আমরা সর্বাত্মক সহযোগিতা করব।
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:from-red-600 hover:to-rose-700 transition-all transform hover:scale-105">
                সম্পূর্ণ রূপকল্প ডাউনলোড করুন
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

