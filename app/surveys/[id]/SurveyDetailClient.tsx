"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle, FaImage, FaVideo, FaQuestionCircle } from 'react-icons/fa';
import Image from 'next/image';

interface Question {
  id: string;
  type: string;
  question: string;
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

interface Survey {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail?: string;
  images?: string[];
  videos?: Array<{ url: string; title: string }>;
  questions: Question[];
}

interface SurveyDetailClientProps {
  survey: Survey | null;
}

export default function SurveyDetailClient({ survey }: SurveyDetailClientProps) {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<{
    answers: Record<string, string>;
    name: string;
    phone: string;
    area: string;
  }>({
    answers: {},
    name: '',
    phone: '',
    area: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleAnswerChange = (questionId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: value,
      },
    }));
    // Clear error for this question
    if (errors[questionId]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[questionId];
        return newErrors;
      });
    }
  };

  const handleInputChange = (field: 'name' | 'phone' | 'area', value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error for this field
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate required fields
    if (!formData.name.trim()) {
      newErrors.name = 'নাম আবশ্যক';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'ফোন নম্বর আবশ্যক';
    }
    if (!formData.area.trim()) {
      newErrors.area = 'এলাকা আবশ্যক';
    }

    // Validate required questions
    if (survey) {
      survey.questions.forEach((question) => {
        if (question.required && !formData.answers[question.id]) {
          newErrors[question.id] = 'এই প্রশ্নের উত্তর আবশ্যক';
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, you would send this data to a backend
      // For now, we'll just show success message
      setSubmitted(true);
    }
  };

  if (!survey) {
    return (
      <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-4">জরিপ পাওয়া যায়নি</h2>
            <p className="text-slate-600 mb-6">আপনি যে জরিপটি খুঁজছেন তা পাওয়া যায়নি।</p>
            <Link
              href="/surveys"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <FaArrowLeft /> জরিপ তালিকায় ফিরে যান
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
        <div className="flex items-center justify-center min-h-[80vh] px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full text-center"
          >
            <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl border border-slate-200">
              <div className="inline-flex p-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-6">
                <FaCheckCircle className="text-6xl text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                ধন্যবাদ!
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                আপনার মতামত সফলভাবে জমা দেওয়া হয়েছে। আপনার মূল্যবান মতামতের জন্য আমরা কৃতজ্ঞ।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/surveys"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-green-700 transition-all transform hover:scale-105"
                >
                  <FaArrowLeft /> অন্যান্য জরিপ দেখুন
                </Link>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ answers: {}, name: '', phone: '', area: '' });
                    setErrors({});
                  }}
                  className="px-8 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all"
                >
                  আবার জমা দিন
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Header */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/surveys"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold mb-6 transition-all"
          >
            <FaArrowLeft /> জরিপ তালিকায় ফিরে যান
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
              {survey.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {survey.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Images/Videos Section */}
      {(survey.images && survey.images.length > 0) || (survey.videos && survey.videos.length > 0) ? (
        <section className="py-12 px-4">
          <div className="mx-auto max-w-4xl">
            {/* Images */}
            {survey.images && survey.images.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
                  <FaImage className="text-emerald-600" />
                  ছবি
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {survey.images.map((image, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative h-64 rounded-2xl overflow-hidden shadow-lg bg-slate-200"
                    >
                      <Image
                        src={image}
                        alt={`${survey.title} - Image ${idx + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Videos */}
            {survey.videos && survey.videos.length > 0 && (
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
                  <FaVideo className="text-emerald-600" />
                  ভিডিও
                </h3>
                <div className="space-y-6">
                  {survey.videos.map((video, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative rounded-2xl overflow-hidden shadow-lg"
                    >
                      <div className="relative pb-[56.25%] h-0">
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src={video.url}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ) : null}

      {/* Survey Form */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200">
            {/* Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-2">
                <FaQuestionCircle className="text-emerald-600" />
                প্রশ্নসমূহ
              </h2>
              <div className="space-y-8">
                {survey.questions.map((question, idx) => (
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="border-b border-slate-200 pb-8 last:border-b-0"
                  >
                    <label className="block text-lg font-bold text-slate-900 mb-4">
                      {question.question}
                      {question.required && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </label>
                    {errors[question.id] && (
                      <p className="text-red-500 text-sm font-bold mb-2">{errors[question.id]}</p>
                    )}
                    {question.type === 'multiple-choice' && question.options ? (
                      <div className="space-y-3">
                        {question.options.map((option, optIdx) => (
                          <label
                            key={optIdx}
                            className="flex items-center p-4 rounded-xl border-2 border-slate-200 hover:border-emerald-500 cursor-pointer transition-all group"
                          >
                            <input
                              type="radio"
                              name={question.id}
                              value={option}
                              checked={formData.answers[question.id] === option}
                              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                              className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 focus:ring-2"
                            />
                            <span className="ml-3 text-slate-700 font-semibold group-hover:text-emerald-600 transition-colors">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <textarea
                        value={formData.answers[question.id] || ''}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        placeholder={question.placeholder || 'আপনার উত্তর লিখুন...'}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-slate-700 font-medium"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personal Information */}
            <div className="mb-8 border-t-2 border-slate-200 pt-8">
              <h2 className="text-3xl font-black text-slate-900 mb-6">ব্যক্তিগত তথ্য</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-bold text-slate-900 mb-2">
                    নাম <span className="text-red-500">*</span>
                  </label>
                  {errors.name && (
                    <p className="text-red-500 text-sm font-bold mb-2">{errors.name}</p>
                  )}
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="আপনার নাম লিখুন"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-slate-700 font-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg font-bold text-slate-900 mb-2">
                    ফোন নম্বর <span className="text-red-500">*</span>
                  </label>
                  {errors.phone && (
                    <p className="text-red-500 text-sm font-bold mb-2">{errors.phone}</p>
                  )}
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="আপনার ফোন নম্বর লিখুন"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-slate-700 font-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg font-bold text-slate-900 mb-2">
                    এলাকা <span className="text-red-500">*</span>
                  </label>
                  {errors.area && (
                    <p className="text-red-500 text-sm font-bold mb-2">{errors.area}</p>
                  )}
                  <input
                    type="text"
                    value={formData.area}
                    onChange={(e) => handleInputChange('area', e.target.value)}
                    placeholder="আপনার এলাকা লিখুন"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-slate-700 font-medium"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-green-700 transition-all transform hover:scale-105"
              >
                জমা দিন
              </button>
              <Link
                href="/surveys"
                className="px-8 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all text-center"
              >
                বাতিল করুন
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}


