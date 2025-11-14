"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { href: '/', label: 'হোম' },
  { href: '/about', label: 'সম্পর্কে' },
  { href: '/programs', label: 'কর্মসূচি' },
  { href: '/manifesto', label: 'রূপকল্প' },
  { href: '/gallery', label: 'গ্যালারি' },
  { href: '/blog', label: 'ব্লগ' },
  { href: '/comments', label: 'মন্তব্য' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-all"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl font-black">আহ</span>
              </div>
            </div>
            <div>
              <div className="text-xl font-black bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                আমিনুল হক
              </div>
              <div className="text-xs font-semibold text-slate-600">জনগণের সেবায় নিবেদিত</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 font-bold text-sm transition-all rounded-lg ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-700 hover:text-emerald-600'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-green-700 transition-all transform hover:scale-105"
            >
              যোগাযোগ
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 bg-slate-100 rounded-xl hover:bg-slate-200 transition-all"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6 text-slate-900" />
            ) : (
              <FaBars className="h-6 w-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 font-bold rounded-xl transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-xl text-center shadow-lg"
                >
                  যোগাযোগ করুন
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
