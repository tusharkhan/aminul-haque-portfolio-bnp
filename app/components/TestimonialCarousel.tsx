"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
  rating?: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

export default function TestimonialCarousel({ testimonials, autoPlay = true, interval = 5000 }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 3) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (testimonials.length === 0) return null;

  // Get the 3 testimonials to display
  const getVisibleTestimonials = () => {
    const indices = [
      currentIndex % testimonials.length,
      (currentIndex + 1) % testimonials.length,
      (currentIndex + 2) % testimonials.length,
    ];
    return indices.map((idx) => testimonials[idx]);
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden min-h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            key={currentIndex}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {visibleTestimonials.map((testimonial, idx) => {
              const isActive = idx === 1; // Middle card is active
              return (
                <div key={`${currentIndex}-${idx}-${testimonial.author}`}>
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    image={testimonial.image}
                    rating={testimonial.rating}
                    isActive={isActive}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        {testimonials.length > 3 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 md:-translate-x-12 rounded-full bg-white shadow-lg p-3 hover:bg-red-50 transition border border-red-200"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="h-5 w-5 text-red-700" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 md:translate-x-12 rounded-full bg-white shadow-lg p-3 hover:bg-red-50 transition border border-red-200"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="h-5 w-5 text-red-700" />
            </button>
          </>
        )}

        {/* Indicators */}
        {testimonials.length > 3 && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-12 z-10 flex gap-2">
            {Array.from({ length: Math.max(1, testimonials.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-red-700' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

