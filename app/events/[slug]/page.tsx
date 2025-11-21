"use client";
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaMapMarkerAlt, FaArrowLeft, FaVideo, FaEnvelope, FaSms, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

// Sample event data - In production, this would come from a CMS or API
const eventsData: { [key: string]: any } = {
  'youth-development-workshop-2025': {
    title: 'যুব উন্নয়ন কর্মশালা ২০২৫',
    date: '২৫ ডিসেম্বর ২০২৫',
    time: 'সকাল ১০:০০ - দুপুর ২:০০',
    location: 'উত্তরা কমিউনিটি সেন্টার',
    fullAddress: 'সেক্টর ৭, উত্তরা মডেল টাউন, ঢাকা-১২৩০',
    mapLocation: {
      lat: 23.8759,
      lng: 90.3795,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.564!2d90.3795!3d23.8759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUyJzMzLjIiTiA5MMKwMjInNDYuMiJF!5e0!3m2!1sen!2sbd!4v1234567890'
    },
    description: `
      <h2>কর্মশালার উদ্দেশ্য</h2>
      <p>এই কর্মশালার মূল উদ্দেশ্য হল তরুণদের মধ্যে দক্ষতা উন্নয়ন এবং নেতৃত্বের গুণাবলী বিকাশ করা। আমরা বিশ্বাস করি যে তরুণরাই আগামীর বাংলাদেশ গড়ার কারিগর।</p>

      <h2>কর্মসূচীর বিবরণ</h2>
      <ul>
        <li><strong>উদ্যোক্তা উন্নয়ন:</strong> কীভাবে নিজের ব্যবসা শুরু করবেন</li>
        <li><strong>নেতৃত্ব প্রশিক্ষণ:</strong> কার্যকর নেতৃত্বের গুণাবলী</li>
        <li><strong>ক্যারিয়ার গাইডেন্স:</strong> সঠিক ক্যারিয়ার পথ নির্বাচন</li>
        <li><strong>দক্ষতা উন্নয়ন:</strong> যোগাযোগ এবং উপস্থাপনা দক্ষতা</li>
        <li><strong>নেটওয়ার্কিং:</strong> সমমনা তরুণদের সাথে সংযোগ স্থাপন</li>
      </ul>

      <h2>বক্তা</h2>
      <p>সফল উদ্যোক্তা, কর্পোরেট লিডার এবং যুব উন্নয়ন বিশেষজ্ঞরা তাদের অভিজ্ঞতা শেয়ার করবেন।</p>

      <h2>নিবন্ধন</h2>
      <p>কর্মশালায় অংশগ্রহণ সম্পূর্ণ বিনামূল্যে। আগ্রহী তরুণরা (১৮-৩০ বছর) আমাদের অফিসে যোগাযোগ করে নিবন্ধন করতে পারেন।</p>
    `,
    isPast: false,
    hasVideo: false,
    videos: [],
    image: '/aminul_haque.jpg',
    confirmationMessage: 'নিবন্ধনের পর আপনি ইমেইল এবং এসএমএসের মাধ্যমে নিশ্চিতকরণ বার্তা পাবেন।'
  },
  'community-health-camp': {
    title: 'সম্প্রদায় স্বাস্থ্য ক্যাম্প',
    date: '৩০ ডিসেম্বর ২০২৫',
    time: 'সকাল ৯:০০ - দুপুর ১:০০',
    location: 'মিরপুর সরকারি স্কুল মাঠ',
    fullAddress: 'মিরপুর-১০, ঢাকা-১২১৬',
    mapLocation: {
      lat: 23.8069,
      lng: 90.3685,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.0!2d90.3685!3d23.8069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ4JzI0LjgiTiA5MMKwMjInMDYuNiJF!5e0!3m2!1sen!2sbd!4v1234567890'
    },
    description: `
      <h2>স্বাস্থ্য ক্যাম্পের উদ্দেশ্য</h2>
      <p>স্থানীয় সম্প্রদায়ের জন্য বিনামূল্যে স্বাস্থ্য সেবা প্রদান এবং স্বাস্থ্য সচেতনতা বৃদ্ধি করা।</p>

      <h2>সেবা সমূহ</h2>
      <ul>
        <li><strong>রক্তচাপ পরীক্ষা:</strong> বিনামূল্যে BP চেক</li>
        <li><strong>ডায়াবেটিস স্ক্রিনিং:</strong> রক্তে সুগার লেভেল পরীক্ষা</li>
        <li><strong>সাধারণ স্বাস্থ্য পরীক্ষা:</strong> MBBS ডাক্তারদের দ্বারা</li>
        <li><strong>ওষুধ বিতরণ:</strong> প্রয়োজনীয় ওষুধ বিনামূল্যে</li>
        <li><strong>স্বাস্থ্য পরামর্শ:</strong> বিশেষজ্ঞ ডাক্তারদের সাথে</li>
      </ul>

      <h2>কারা অংশগ্রহণ করতে পারবেন</h2>
      <p>সকল বয়সের মানুষ এই স্বাস্থ্য ক্যাম্পে অংশগ্রহণ করতে পারবেন। বিশেষ করে যারা নিয়মিত চিকিৎসা সেবা পান না তাদের জন্য এটি একটি সুবর্ণ সুযোগ।</p>

      <h2>গুরুত্বপূর্ণ নির্দেশনা</h2>
      <p>দয়া করে আপনার পূর্ববর্তী প্রেসক্রিপশন এবং চিকিৎসা রিপোর্ট (যদি থাকে) সাথে নিয়ে আসুন।</p>
    `,
    isPast: false,
    hasVideo: false,
    videos: [],
    image: '/aminul_haque.jpg',
    confirmationMessage: 'আপনি এসএমএসের মাধ্যমে ক্যাম্পের সময়সূচী এবং অবস্থানের বিস্তারিত তথ্য পাবেন।'
  },
  'education-development-conference-2025': {
    title: 'শিক্ষা উন্নয়ন সম্মেলন ২০২৫',
    date: '১৫ নভেম্বর ২০২৫',
    time: 'সকাল ১০:০০ - বিকাল ৪:০০',
    location: 'ঢাকা রিপোর্টার্স ইউনিটি',
    fullAddress: 'সেগুনবাগিচা, ঢাকা-১০০০',
    mapLocation: {
      lat: 23.7380,
      lng: 90.3978,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8!2d90.3978!3d23.7380!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ0JzE2LjgiTiA5MMKwMjMnNTIuMSJF!5e0!3m2!1sen!2sbd!4v1234567890'
    },
    description: `
      <h2>সম্মেলনের উদ্দেশ্য</h2>
      <p>বাংলাদেশের শিক্ষা ব্যবস্থার উন্নয়নে করণীয় নিয়ে জাতীয় পর্যায়ের আলোচনা এবং সুপারিশ প্রণয়ন।</p>

      <h2>আলোচ্য বিষয়</h2>
      <ul>
        <li>প্রাথমিক শিক্ষার মান উন্নয়ন</li>
        <li>মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা সংস্কার</li>
        <li>শিক্ষকদের প্রশিক্ষণ ও উন্নয়ন</li>
        <li>ডিজিটাল শিক্ষা ব্যবস্থা</li>
        <li>শিক্ষায় বরাদ্দ বৃদ্ধি</li>
      </ul>

      <h2>অংশগ্রহণকারী</h2>
      <p>শিক্ষাবিদ, শিক্ষক, অভিভাবক প্রতিনিধি, সরকারি কর্মকর্তা এবং শিক্ষা নিয়ে কাজ করা সংগঠনের প্রতিনিধিরা অংশগ্রহণ করেন।</p>

      <h2>সম্মেলনের ফলাফল</h2>
      <p>সম্মেলন শেষে একটি বিস্তারিত সুপারিশমালা প্রণয়ন করা হয় যা সরকারের কাছে পেশ করা হয়েছে।</p>
    `,
    isPast: true,
    hasVideo: true,
    videos: [
      {
        title: 'সম্মেলনের মূল অধিবেশন',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/aminul_haque.jpg'
      },
      {
        title: 'প্যানেল আলোচনা - শিক্ষার গুণমান',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/aminul_haque.jpg'
      }
    ],
    image: '/aminul_haque.jpg',
  },
  'youth-football-tournament': {
    title: 'যুব ফুটবল টুর্নামেন্ট',
    date: '২০ অক্টোবর ২০২৫',
    time: 'সকাল ৯:০০ - সন্ধ্যা ৬:০০',
    location: 'উত্তরা স্টেডিয়াম',
    fullAddress: 'সেক্টর ৪, উত্তরা মডেল টাউন, ঢাকা-১২৩০',
    mapLocation: {
      lat: 23.8759,
      lng: 90.3795,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.564!2d90.3795!3d23.8759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUyJzMzLjIiTiA5MMKwMjInNDYuMiJF!5e0!3m2!1sen!2sbd!4v1234567890'
    },
    description: `
      <h2>টুর্নামেন্টের বিবরণ</h2>
      <p>স্থানীয় যুবকদের মধ্যে ফুটবলের প্রতি আগ্রহ বৃদ্ধি এবং প্রতিভা বিকাশের লক্ষ্যে এই টুর্নামেন্টের আয়োজন করা হয়।</p>

      <h2>অংশগ্রহণকারী দল</h2>
      <p>মোট ১৬টি দল টুর্নামেন্টে অংশগ্রহণ করে। প্রতিটি দলে ১৫ জন খেলোয়াড় ছিল।</p>

      <h2>বিজয়ী দল</h2>
      <ul>
        <li><strong>চ্যাম্পিয়ন:</strong> উত্তরা ইউনাইটেড</li>
        <li><strong>রানার আপ:</strong> মিরপুর স্পোর্টস</li>
        <li><strong>তৃতীয় স্থান:</strong> গুলশান এফসি</li>
      </ul>

      <h2>বিশেষ পুরস্কার</h2>
      <ul>
        <li>সেরা খেলোয়াড়: সাকিব হোসেন</li>
        <li>সর্বোচ্চ গোলদাতা: রফিক আহমেদ (৮ গোল)</li>
        <li>সেরা গোলরক্ষক: জামাল উদ্দিন</li>
      </ul>
    `,
    isPast: true,
    hasVideo: true,
    videos: [
      {
        title: 'ফাইনাল ম্যাচের হাইলাইটস',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/aminul_haque.jpg'
      },
      {
        title: 'পুরস্কার বিতরণী অনুষ্ঠান',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/aminul_haque.jpg'
      },
      {
        title: 'সেরা গোল সংকলন',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/aminul_haque.jpg'
      }
    ],
    image: '/aminul_haque.jpg',
  },
};

export default function EventDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const event = eventsData[slug];

  if (!event) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">ইভেন্ট পাওয়া যায়নি</h1>
          <Link href="/events" className="text-emerald-600 hover:underline font-bold">
            ইভেন্ট পেজে ফিরে যান
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Back Button */}
      <section className="py-8 px-4">
        <div className="mx-auto max-w-6xl">
          <Link 
            href="/events"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold transition-colors"
          >
            <FaArrowLeft />
            সব ইভেন্টে ফিরে যান
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      {event.image && (
        <section className="py-8 px-4">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-96 object-cover"
              />
              {event.isPast && (
                <div className="absolute top-6 left-6 px-4 py-2 bg-slate-600 text-white rounded-full font-bold shadow-lg">
                  সম্পন্ন ইভেন্ট
                </div>
              )}
              {!event.isPast && (
                <div className="absolute top-6 left-6 px-4 py-2 bg-emerald-600 text-white rounded-full font-bold shadow-lg">
                  আসন্ন ইভেন্ট
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Event Details */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              {event.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-3 px-5 py-3 bg-emerald-50 text-emerald-700 rounded-xl font-bold border border-emerald-200">
                <FaCalendar className="text-xl" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-blue-50 text-blue-700 rounded-xl font-bold border border-blue-200">
                <FaClock className="text-xl" />
                <span>{event.time}</span>
              </div>
            </div>

            {/* Location */}
            <div className="mb-8 p-6 bg-red-50 rounded-2xl border border-red-200">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-2xl text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{event.location}</h3>
                  <p className="text-slate-700">{event.fullAddress}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
          >
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: event.description }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: '#334155'
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
          >
            <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-600" />
              ইভেন্টের অবস্থান
            </h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src={event.mapLocation.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event Location"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Videos (For Past Events) */}
      {event.isPast && event.hasVideo && event.videos && event.videos.length > 0 && (
        <section className="py-12 px-4 bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <FaVideo className="text-red-600" />
                ইভেন্টের ভিডিও ও রেকর্ডিং
              </h2>
              <div className="space-y-8">
                {event.videos.map((video: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200"
                  >
                    {video.title && (
                      <div className="p-4 bg-slate-50 border-b border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                          <FaVideo className="text-red-600" />
                          {video.title}
                        </h3>
                      </div>
                    )}
                    <div className="aspect-video">
                      <iframe
                        src={video.url}
                        title={video.title || `Video ${idx + 1}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Confirmation Info (For Upcoming Events) */}
      {!event.isPast && event.confirmationMessage && (
        <section className="py-12 px-4">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 border-2 border-emerald-200"
            >
              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-3xl text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center gap-3">
                    স্বয়ংক্রিয় নিশ্চিতকরণ
                    <FaEnvelope className="text-emerald-600" />
                    <FaSms className="text-blue-600" />
                  </h3>
                  <p className="text-lg text-slate-700">
                    {event.confirmationMessage}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl p-12 md:p-16 shadow-2xl text-center border border-slate-200">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                আরও তথ্যের জন্য
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                ইভেন্ট সম্পর্কে বিস্তারিত জানতে অথবা নিবন্ধনের জন্য যোগাযোগ করুন
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:from-emerald-700 hover:to-green-700 transition-all transform hover:scale-105"
                >
                  যোগাযোগ করুন
                </a>
                <Link
                  href="/events"
                  className="px-10 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-xl hover:shadow-2xl border-2 border-emerald-600 hover:bg-emerald-50 transition-all transform hover:scale-105"
                >
                  সব ইভেন্ট দেখুন
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


