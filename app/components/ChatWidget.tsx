"use client";
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';

export default function ChatWidget() {
  // WhatsApp number in international format (remove leading 0, add country code 880 for Bangladesh)
  const whatsappNumber = '+8801552161616'; // Format: country code + number without leading zero
  const messengerUsername = '/AminulBd07'; // Replace with actual username

  const handleWhatsAppClick = () => {
    // WhatsApp requires international format: country code + number (no +, no spaces, no dashes)
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleMessengerClick = () => {
    const messengerUrl = `https://m.me/${messengerUsername}`;
    window.open(messengerUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-[#20BA5A] transition-colors"
        aria-label="Open WhatsApp"
      >
        <FaWhatsapp className="text-2xl md:text-3xl" />
      </motion.button>

      {/* Messenger Button */}
      <motion.button
        onClick={handleMessengerClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 md:w-16 md:h-16 bg-[#0084FF] rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-[#0073E6] transition-colors"
        aria-label="Open Messenger"
      >
        <FaFacebookMessenger className="text-2xl md:text-3xl" />
      </motion.button>
    </div>
  );
}
