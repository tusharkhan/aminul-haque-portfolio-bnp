"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaDownload } from 'react-icons/fa';

interface ImageLightboxProps {
  isOpen: boolean;
  selectedImage: string | null;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export default function ImageLightbox({
  isOpen,
  selectedImage,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  
  const handleDownloadImage = () => {
    if (!selectedImage) return;

    try {
      // Use our Next.js API proxy to download the image (bypasses CORS)
      const downloadUrl = `/api/download-image?url=${encodeURIComponent(selectedImage)}`;
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = downloadUrl;
      
      // Extract filename from URL
      const urlParts = selectedImage.split('/');
      const filename = urlParts[urlParts.length - 1] || `image-${currentIndex + 1}.jpg`;
      link.download = filename;
      
      // Trigger the download
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
      alert('ছবি ডাউনলোড করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDownloadImage();
              }}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
              aria-label="Download Image"
              title="Download Image"
            >
              <FaDownload className="text-xl" />
            </button>
            <button
              onClick={onClose}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
              aria-label="Close"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate('prev');
                }}
                className="absolute left-4 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
                aria-label="Previous Image"
              >
                <FaChevronLeft className="text-2xl" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate('next');
                }}
                className="absolute right-4 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
                aria-label="Next Image"
              >
                <FaChevronRight className="text-2xl" />
              </button>
            </>
          )}

          <motion.img
            key={selectedImage}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-full font-bold">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

