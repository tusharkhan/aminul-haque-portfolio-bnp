"use client";
import { motion } from 'framer-motion';
import {
  FaHeart,
  FaRoad,
  FaCar,
  FaHospital,
  FaGraduationCap,
  FaWifi,
  FaTint,
  FaUsers,
  FaBriefcase,
  FaFutbol,
  FaShieldAlt,
  FaTree,
  FaHandHoldingHeart,
  FaHandshake,
  FaCheck,
  FaQuoteLeft,
  FaBolt,
  FaHome,
  FaLandmark,
  FaLaptopCode,
  FaPaintBrush,
  FaTools,
  FaLanguage,
  FaTrophy,
  FaBan,
  FaStore,
  FaSeedling,
  FaWalking,
  FaLeaf,
  FaChild,
  FaBoxOpen,
  FaCity,
  FaRunning,
  FaUserShield,
  FaHandsHelping
} from 'react-icons/fa';
import { useTranslation } from '../i18n/I18nProvider';
import { IconType } from 'react-icons';

interface ManifestoSection {
  id: string;
  icon: IconType;
  title: string;
  titleEn: string;
  color: string;
  items: string[];
  itemsEn: string[];
}

interface ManifestoCategory {
  id: string;
  icon: IconType;
  subtitle: string;
  subtitleEn: string;
  title: string;
  titleEn: string;
  color: string;
  sections: ManifestoSection[];
}

// Category 1: Civic Modernization (নাগরিক জীবনযাত্রার আধুনিকায়ন)
const category1_civicModernization: ManifestoCategory = {
  id: 'civic-modernization',
  icon: FaCity,
  subtitle: 'নাগরিক জীবনযাত্রার আধুনিকায়ন',
  subtitleEn: 'Modernization of Civic Life',
  title: 'পল্লবী ও রুপনগরকে একটি আধুনিক, নিরাপদ ও সমৃদ্ধ অঞ্চল হিসেবে গড়ে তোলার জন্য আমি দৃঢ়প্রতিজ্ঞ। আমার পরিকল্পনা প্রতিটি নাগরিকের জীবনযাত্রা ও প্রতিটি ওয়ার্ডকে সুষমভাবে উন্নত করতে আমার সুনির্দিষ্ট পরিকল্পনা রয়েছে।',
  titleEn: 'I am determined to develop Pallabi and Rupnagar as a modern, safe and prosperous region. I have specific plans to improve the quality of life of every citizen and develop every ward uniformly.',
  color: 'from-blue-600 to-indigo-700',
  sections: [
    {
      id: 'roads',
      icon: FaRoad,
      title: '১. রাস্তা নির্মাণ ও জলাবদ্ধতা নিরসন',
      titleEn: '1. Road Construction & Waterlogging Solutions',
      color: 'from-blue-600 to-indigo-700',
      items: [
        'এলাকার ভাঙা রাস্তা মেরামত ও পাকা রাস্তা নির্মাণ করা হবে।',
        'বর্ষায় জলাবদ্ধতা নিরসনে ১০০ দিনের ড্রেনেজ পরিষ্কার অভিযান পরিচালনা করা হবে।',
        'খালগুলো সংস্কার ও পরিষ্কারের মাধ্যমে পানি প্রবাহ নিশ্চিত করা হবে।',
        'খালের দুই পাশে ওয়াক ওয়ে (Walk Way) নির্মাণ করা হবে।'
      ],
      itemsEn: [
        'Repair broken roads and construct paved roads in the area.',
        '100-day drainage cleaning campaign to eliminate waterlogging during monsoon.',
        'Ensure water flow through canal renovation and cleaning.',
        'Construction of walkways on both sides of canals.'
      ]
    },
    {
      id: 'traffic',
      icon: FaCar,
      title: '২. যানজট নিরসন',
      titleEn: '2. Traffic Solutions',
      color: 'from-amber-500 to-orange-600',
      items: [
        'যানজট নিরসনে প্রধান সড়ক ও মোড়ে স্মার্ট ট্রাফিক সিগন্যাল নির্মাণ করা হবে।',
        'ট্রাফিক সিগন্যালের পাশাপাশি কমিউনিটি ট্রাফিকিং ব্যবস্থা চালু করা হবে।',
        'সুনির্দিষ্ট পার্কিং জোন নির্মাণ করা হবে।',
        'রিক্সা ও অটো রিক্সার জন্য নীতিমালা তৈরি ও সুযোগ-সুবিধা প্রদান করা হবে।'
      ],
      itemsEn: [
        'Smart traffic signals will be installed at main roads and intersections to reduce traffic jams.',
        'Community trafficking system will be implemented alongside traffic signals.',
        'Designated parking zones will be constructed.',
        'Policies and facilities will be provided for rickshaws and auto-rickshaws.'
      ]
    },
    {
      id: 'healthcare',
      icon: FaHospital,
      title: '৩. স্বাস্থ্যসেবা ও মেডিকেল কলেজ হাসপাতাল স্থাপন',
      titleEn: '3. Healthcare & Medical College Hospital',
      color: 'from-rose-500 to-red-600',
      items: [
        'আমার নির্বাচনী এলাকায় সরকারি মেডিকেল কলেজ ও হাসপাতাল নির্মাণ করা হবে যাতে শিক্ষার্থীগণ স্বল্প খরচে মেডিকেলে পড়াশোনা করতে পারে।',
        'বিনামূল্যে প্রাথমিক স্বাস্থ্য সেবা প্রদান করা হবে।',
        'ওয়ার্ড ভিত্তিক স্বাস্থ্য ও মাতৃসদন কেন্দ্র স্থাপন করে বিনামূল্যে প্রাথমিক স্বাস্থ্যসেবা প্রদানসহ গর্ভবতী মায়েদের সেবা নিশ্চিত করা হবে।',
        'ডেঙ্গু ও চিকুনগুনিয়া প্রতিরোধে কার্যকর ব্যবস্থা গ্রহণ করা হবে।'
      ],
      itemsEn: [
        'A government medical college and hospital will be established in my constituency so students can study medicine at low cost.',
        'Free primary healthcare will be provided.',
        'Ward-based health and maternity centers will be established for free primary healthcare and pregnant mother services.',
        'Effective measures will be taken to prevent dengue and chikungunya.'
      ]
    },
    {
      id: 'education',
      icon: FaGraduationCap,
      title: '৪. শিক্ষা ও শিক্ষা প্রতিষ্ঠানের মান উন্নয়ন',
      titleEn: '4. Education & Institution Development',
      color: 'from-sky-500 to-blue-600',
      items: [
        'প্রতিটি শিক্ষা প্রতিষ্ঠানে শিক্ষার পরিবেশ ও শিক্ষার মান নিশ্চিত করা হবে।',
        'ডিগ্রী কলেজগুলোকে বিশ্ববিদ্যালয় কলেজে রূপান্তরিত করা হবে।',
        'পল্লবী ও রুপনগর এলাকার সকল এমপিও ভুক্ত শিক্ষা প্রতিষ্ঠানগুলোকে অগ্রাধিকার ভিত্তিতে জাতীয়করণ করা হবে।',
        'প্রতিটি স্কুল, কলেজ ও মাদ্রাসার অবকাঠামোর উন্নয়ন করা হবে।',
        'মেধাবী শিক্ষার্থীদের জন্য শিক্ষা ও শিক্ষা বৃত্তি প্রদান করা হবে।',
        'প্রতিটি ওয়ার্ডে কমিউনিটি সেন্টার নির্মাণ করা হবে, যা সামাজিক ও সাংস্কৃতিক কর্মকাণ্ডের কেন্দ্র হবে।',
        'নিম্ন আয়ের মানুষের বিনামূল্যে শিক্ষার ব্যবস্থার জন্য স্কুল স্থাপন করা হবে।'
      ],
      itemsEn: [
        'Educational environment and quality will be ensured in every educational institution.',
        'Degree colleges will be converted to university colleges.',
        'All MPO-listed educational institutions in Pallabi and Rupnagar will be prioritized for nationalization.',
        'Infrastructure of every school, college and madrasa will be developed.',
        'Scholarships will be provided for meritorious students.',
        'Community centers will be built in every ward as hubs for social and cultural activities.',
        'Schools will be established for free education for low-income people.'
      ]
    },
    {
      id: 'internet',
      icon: FaWifi,
      title: '৫. ইন্টারনেট ও অন্যান্য নাগরিক সেবা',
      titleEn: '5. Internet & Other Civic Services',
      color: 'from-cyan-500 to-teal-600',
      items: [
        'কলেজ, বাসস্ট্যান্ড ও মার্কেটে Free Wifi Zone স্থাপন করা হবে।',
        'মাল্টিপারপাস কমিউনিটি সেন্টার নির্মাণ করা হবে।',
        'জনস্বার্থে আঞ্চলিক পাসপোর্ট অফিস স্থাপন করা হবে।',
        'কাঁচাবাজার ব্যবস্থাপনাকে আধুনিক ও সুশৃঙ্খল করে নির্ধারিত স্থানে বাজার স্থাপন করা হবে।'
      ],
      itemsEn: [
        'Free WiFi zones will be established at colleges, bus stands and markets.',
        'Multipurpose community centers will be constructed.',
        'Regional passport office will be established for public interest.',
        'Wet markets will be modernized and organized in designated areas.'
      ]
    }
  ]
};

// Category 2: Water, Electricity & Gas (পানি, বিদ্যুৎ ও গ্যাস সংকট সমাধান)
const category2_utilities: ManifestoCategory = {
  id: 'utilities',
  icon: FaTint,
  subtitle: 'পানি, বিদ্যুৎ ও গ্যাস সংকট সমাধানের পরিকল্পনা ও বাস্তবায়ন',
  subtitleEn: 'Planning & Implementation of Water, Electricity & Gas Crisis Solutions',
  title: 'আমাদের মা-বোনেরা আজও রান্নার জন্য গ্যাসের অপেক্ষায় থাকে। বিশুদ্ধ পানির জন্য কষ্ট পায়। বিদ্যুতের ঘন ঘন লোডশেডিং এর কারণে দুর্ভোগান্তিতে পড়ে। এই দুর্ভোগান্তির স্থায়ী সমাধান করতে আমি আমার মা-বোনদের জন্য কাজ করতে চাই। আমার পরিকল্পনা—',
  titleEn: 'Our mothers and sisters still wait for gas for cooking. They suffer for pure water. They face hardship due to frequent power outages. I want to work for my mothers and sisters to permanently solve these problems. My plan—',
  color: 'from-cyan-500 to-blue-600',
  sections: [
    {
      id: 'utilities-water',
      icon: FaTint,
      title: '১. পানির প্রাপ্যতা নিশ্চিতকরণ',
      titleEn: '1. Ensuring Water Availability',
      color: 'from-blue-500 to-cyan-600',
      items: [
        'ঢাকা ওয়াসার সাথে সমন্বয় করে এলাকাভিত্তিক পানির প্রাপ্যতার স্থায়ী সমাধান করা হবে।',
        'পুরনো ও ক্ষতিগ্রস্থ পাইপলাইন পরিবর্তন করে নতুন পাইপলাইন স্থাপন করা হবে।',
        'প্রয়োজন অনুযায়ী কমিউনিটি ওয়াটার টাঙ্ক বসানো হবে।',
        'আবাদ পানি সরবরাহের জন্য গভীর নলকূপ স্থাপন করা হবে।',
        '২৪ ঘন্টা অভিযোগ হটলাইন চালু থাকবে, যাতে পানির সমস্যা দ্রুত সমাধান হয়।'
      ],
      itemsEn: [
        'Permanent area-based water availability solutions will be implemented in coordination with Dhaka WASA.',
        'Old and damaged pipelines will be replaced with new ones.',
        'Community water tanks will be installed as needed.',
        'Deep tube wells will be installed for agricultural water supply.',
        '24-hour complaint hotline will be operational for quick resolution of water problems.'
      ]
    },
    {
      id: 'utilities-gas-electricity',
      icon: FaBolt,
      title: '২. গ্যাস ও বিদ্যুৎ সংকটের স্থায়ী সমাধান',
      titleEn: '2. Permanent Solution to Gas & Electricity Crisis',
      color: 'from-yellow-500 to-amber-600',
      items: [
        'প্রতিটি পরিবারের জন্য নিরবচ্ছিন্ন গ্যাস ও বিদ্যুৎ সরবরাহ নিশ্চিত করতে তিতাস ও সিটি কর্পোরেশনের সঙ্গে সমন্বয় করে প্রয়োজনীয় ব্যবস্থা নেওয়া হবে।',
        'পুরাতন ত্রুটিপূর্ণ গ্যাস লাইনের প্রয়োজনীয় সংস্কার ও পুনঃস্থাপন করা হবে।',
        'যেখানে বিদ্যুতের অভাব, সেখানে নতুন লাইন ও সংযোগ ব্যবস্থা করা হবে।',
        'স্কুল ও কলেজের পরীক্ষার সময় লোডশেডিং বন্ধের ব্যবস্থা গ্রহণ করা হবে যাতে শিক্ষার্থীদের পড়াশোনা ও পরীক্ষার বিঘ্ন না ঘটে।'
      ],
      itemsEn: [
        'Necessary measures will be taken in coordination with Titas and City Corporation to ensure uninterrupted gas and electricity supply for every family.',
        'Old and faulty gas lines will be renovated and replaced.',
        'New lines and connections will be provided where electricity is lacking.',
        'Load shedding will be stopped during school and college exams to not disrupt students\' studies.'
      ]
    }
  ]
};

// Category 3: "We Are All Bangladeshi" ("আমরা সবাই বাংলাদেশী" প্রত্যয় বাস্তবায়ন)
const category3_bangladeshiIdentity: ManifestoCategory = {
  id: 'bangladeshi-identity',
  icon: FaUsers,
  subtitle: '"আমরা সবাই বাংলাদেশী" প্রত্যয় বাস্তবায়নের পরিকল্পনা',
  subtitleEn: 'Implementation Plan for "We Are All Bangladeshi" Commitment',
  title: 'আমাদের পল্লবী ও রুপনগরের উদ্বাস্তু, নিম্ন ও মধ্যম আয়ের মানুষ নিরাপদ, মর্যাদাপূর্ণ ও সমৃদ্ধ জীবন-যাপন করতে পারছে না। তারা বিভিন্ন সমস্যার মুখোমুখি হচ্ছে। তাদের নিরাপদ, মর্যাদাপূর্ণ ও সমৃদ্ধ জীবন-যাপন নিশ্চিত করার জন্য আমি নিম্নোক্ত পদক্ষেপগুলো নিতে চাই:',
  titleEn: 'The refugees, low and middle income people of Pallabi and Rupnagar are unable to live safe, dignified and prosperous lives. They are facing various problems. I want to take the following steps to ensure their safe, dignified and prosperous living:',
  color: 'from-emerald-500 to-green-600',
  sections: [
    {
      id: 'permanent-rehabilitation',
      icon: FaHome,
      title: '১. স্থায়ী ও টিকসই পুনর্বাসন',
      titleEn: '1. Permanent & Sustainable Rehabilitation',
      color: 'from-emerald-500 to-green-600',
      items: [
        'নিম্ন ও মধ্যম আয়ের সকল নাগরিকদের স্থায়ী পূর্ণবাসন, নিরাপত্তা ও সামাজিক মর্যাদা প্রদান করা হবে।',
        'উর্দুভাষী জনগোষ্ঠীকে নিরাপদ, মর্যাদাপূর্ণ ও স্থায়ী পুনর্বাসন করা হবে।',
        'উর্দুভাষী জনগোষ্ঠীর জন্য সকল নাগরিক সুবিধা নিশ্চিত করা হবে।',
        'সিসিটিভি, নাইটগার্ড ও স্থানীয় কমিটির মাধ্যমে নাগরিকদের নিরাপত্তা নিশ্চিত করা হবে।'
      ],
      itemsEn: [
        'Permanent rehabilitation, security and social dignity will be provided to all low and middle income citizens.',
        'The Urdu-speaking community will be provided safe, dignified and permanent rehabilitation.',
        'All civic facilities will be ensured for the Urdu-speaking community.',
        'Security will be ensured through CCTV, night guards and local committees.'
      ]
    },
    {
      id: 'fair-price-supply',
      icon: FaStore,
      title: '২. ন্যায্যমূল্যে পণ্য সরবরাহ',
      titleEn: '2. Fair Price Product Supply',
      color: 'from-violet-500 to-purple-600',
      items: [
        'টিসিবির ন্যায্যমূল্যের দোকান সংখ্যা বৃদ্ধি করা হবে, যাতে নিম্ন আয়ের মানুষ সাশ্রয়ী দামে নিত্যপ্রয়োজনীয় পণ্য সংগ্রহ করতে পারে।'
      ],
      itemsEn: [
        'Number of TCB fair price shops will be increased so that low-income people can purchase essential commodities at affordable prices.'
      ]
    },
    {
      id: 'education-healthcare-urdu',
      icon: FaGraduationCap,
      title: '৩. শিক্ষা ও স্বাস্থ্যসেবা',
      titleEn: '3. Education & Healthcare',
      color: 'from-green-500 to-emerald-600',
      items: [
        'উর্দুভাষী ও নিম্ন আয়ের জনগোষ্ঠীর জন্য বিনামূল্যে স্কুল ও কলেজ স্থাপন করে প্রতিটি শিশুর শিক্ষার সুযোগ নিশ্চিত করা হবে।',
        'স্বাস্থ্যকেন্দ্র ও মাতৃসদন হাসপাতালের মাধ্যমে সবার জন্য বিনামূল্যে চিকিৎসা নিশ্চিত করা হবে।'
      ],
      itemsEn: [
        'Free schools and colleges will be established for Urdu-speaking and low-income communities to ensure educational opportunities for every child.',
        'Free treatment will be ensured for all through health centers and maternity hospitals.'
      ]
    },
    {
      id: 'water-sanitation',
      icon: FaTint,
      title: '৪. বিশুদ্ধ পানি ও স্যানিটেশন',
      titleEn: '4. Pure Water & Sanitation',
      color: 'from-slate-600 to-zinc-700',
      items: [
        'উদ্বাস্তু জনগোষ্ঠীর জন্য নিরাপদ ও বিশুদ্ধ পানি সরবরাহ নিশ্চিত করা হবে।',
        'আধুনিক স্যানিটেশন ব্যবস্থা স্থাপন করা হবে, যাতে স্বাস্থ্য ঝুঁকি যথাযথভাবে কমানো যায়।',
        'ঘনবসতিপূর্ণ এলাকায় স্বাস্থ্যসম্মত গণশৌচাগার নির্মাণ করা হবে, যেখানে বিশেষভাবে নারীদের জন্য নিরাপদ ও পৃথক সুবিধা থাকবে।'
      ],
      itemsEn: [
        'Safe and pure water supply will be ensured for the refugee community.',
        'Modern sanitation system will be established to properly reduce health risks.',
        'Hygienic public toilets will be built in densely populated areas with separate and safe facilities specifically for women.'
      ]
    },
    {
      id: 'youth-development-employment',
      icon: FaBriefcase,
      title: '৫. যুব উন্নয়ন ও কর্মসংস্থান',
      titleEn: '5. Youth Development & Employment',
      color: 'from-green-600 to-teal-700',
      items: [
        'কারিগরি প্রশিক্ষণ কেন্দ্র স্থাপন করে যুবকদেরকে দক্ষ জনশক্তিতে রূপান্তর করা হবে।',
        'প্রশিক্ষণ শেষে কর্মসংস্থানের সংযোগ তৈরি করা হবে, যাতে প্রতিটি যুবক স্বাবলম্বী হতে পারে।',
        'যুবকদের উন্নয়ন ও বিনোদনের জন্য খেলাধূলার সুব্যবস্থা করা হবে।'
      ],
      itemsEn: [
        'Technical training centers will be established to transform youth into skilled manpower.',
        'After training, employment connections will be created so that every youth can become self-reliant.',
        'Proper sports facilities will be arranged for youth development and entertainment.'
      ]
    }
  ]
};

// Category 4: Youth Skill Development & Employment (তরুণদের দক্ষতা বৃদ্ধি ও কর্মসংস্থান)
const category4_youthSkills: ManifestoCategory = {
  id: 'youth-skills',
  icon: FaBriefcase,
  subtitle: 'তরুণদের দক্ষতা বৃদ্ধি ও কর্মসংস্থান',
  subtitleEn: 'Youth Skill Development & Employment',
  title: 'অত্র এলাকার অনেক তরুণ ও যুবক কলেজ বা বিশ্ববিদ্যালয় থেকে ডিগ্রী অর্জন করলেও দক্ষতার অভাবে চাকুরী ও অন্যান্য কর্মসংস্থানের সুযোগ লাভ করতে পারছে না। বেকারত্ব সমস্যা প্রকট। তাই তরুণদের বেকারত্ব সমস্যা দূর করে স্বাবলম্বী করার জন্য আমি নির্বাচিত হলে নিম্নোক্ত পরিকল্পনা বাস্তবায়ন করব:',
  titleEn: 'Many youth in this area, despite obtaining degrees from colleges or universities, are unable to find jobs and other employment opportunities due to lack of skills. Unemployment is severe. Therefore, if elected, I will implement the following plans to eliminate youth unemployment and make them self-reliant:',
  color: 'from-purple-500 to-indigo-600',
  sections: [
    {
      id: 'technical-training-employment',
      icon: FaTools,
      title: '১. কারিগরি প্রশিক্ষণ ও কর্মসংস্থান',
      titleEn: '1. Technical Training & Employment',
      color: 'from-pink-500 to-rose-600',
      items: [
        'প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়ের অধীনে তরুণদের দক্ষতা বৃদ্ধির জন্য কারিগরি প্রশিক্ষণের আয়োজন করা হবে।',
        'স্বল্প শিক্ষিত ও দরিদ্র যুবকদের যানবাহন মেরামত, কম্পিউটার মেরামত ও প্রোগ্রাম ডিজাইন, প্লাম্বিং, হার্ডওয়ার, ইলেকট্রিক যন্ত্রপাতি, টিভি রিজ ও মোবাইল সার্ভিসিং বিষয়ে প্রশিক্ষণের মাধ্যমে দক্ষ জনশক্তি তৈরি করা হবে।',
        'নারীদের কর্মসংস্থানের মাধ্যমে স্বাবলম্বী ও নিরাপত্তা নিশ্চিত করে সামাজিক মর্যাদা প্রতিষ্ঠা করা হবে।'
      ],
      itemsEn: [
        'Technical training will be organized under the Ministry of Expatriates\' Welfare and Overseas Employment to enhance youth skills.',
        'Skilled manpower will be created through training in vehicle repair, computer repair & program design, plumbing, hardware, electrical equipment, TV and mobile servicing for less educated and poor youth.',
        'Social dignity will be established by ensuring self-reliance and security through employment for women.'
      ]
    },
    {
      id: 'freelancer-it-hub',
      icon: FaLaptopCode,
      title: '২. ফ্রিল্যান্সারদের জন্য Paypal ও আইটি হাব',
      titleEn: '2. PayPal & IT Hub for Freelancers',
      color: 'from-purple-500 to-indigo-600',
      items: [
        'আপনাদের ভোটে যদি বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি) সরকার গঠন করে, আমরা ফ্রিল্যান্সারদের ট্রানজেকশন সুবিধার্থে Paypal চালু করব।',
        'এছাড়া ফ্রিল্যান্সারদের জন্য একটি বিশেষায়িত আইটি সেন্টার ও ফ্রিল্যান্সার কমিউনিটি হাব স্থাপন করা হবে, যা প্রশিক্ষণ, সার্ভিস, ট্রানজেকশন ও নেটওয়ার্কিংয়ের কেন্দ্র হিসেবে কাজ করবে।'
      ],
      itemsEn: [
        'If BNP forms the government with your votes, we will launch PayPal for freelancers\' transaction convenience.',
        'A specialized IT center and freelancer community hub will be established, which will serve as a center for training, services, transactions and networking.'
      ]
    },
    {
      id: 'cultural-center',
      icon: FaPaintBrush,
      title: '৩. কালচারাল সেন্টার স্থাপন',
      titleEn: '3. Establishment of Cultural Center',
      color: 'from-fuchsia-500 to-pink-600',
      items: [
        'শিল্প, সাহিত্য ও সংস্কৃতি বিকাশে কালচারাল সেন্টার স্থাপন করা হবে।',
        'প্রতিবছর আয়োজন করব Youth Carnival- যেখানে থাকবে কনসার্ট, শিল্প-সংস্কৃতি, খেলাধুলা, স্টার্টআপ প্রদর্শনী ও উদ্যোক্তা সম্মেলন।'
      ],
      itemsEn: [
        'Cultural centers will be established for the development of art, literature and culture.',
        'Youth Carnival will be organized every year - featuring concerts, arts & culture, sports, startup exhibitions and entrepreneur conferences.'
      ]
    },
    {
      id: 'technical-education-jobs-fair',
      icon: FaTools,
      title: '৪. কারিগরি শিক্ষা কেন্দ্র ও Jobs Fair',
      titleEn: '4. Technical Education Center & Jobs Fair',
      color: 'from-orange-500 to-red-600',
      items: [
        'রুপনগর-পল্লবীতে একটি পূর্ণাঙ্গ Youth Development Technical Education Center গড়ে তুলব যেখানে কম খরচে আধুনিক কারিগরি প্রশিক্ষণ, স্কিল ডেভেলপমেন্ট এবং কর্মসংস্থানের সুযোগ তৈরির কার্যক্রম চলবে।',
        'Jobs Fair-এর মাধ্যমে কর্মসংস্থান নিশ্চিত করা হবে।'
      ],
      itemsEn: [
        'A full-fledged Youth Development Technical Education Center will be established in Rupnagar-Pallabi offering modern technical training, skill development and job creation opportunities at low cost.',
        'Employment will be ensured through Jobs Fair.'
      ]
    },
    {
      id: 'language-education',
      icon: FaLanguage,
      title: '৫. ভাষা শিক্ষা ও কর্মসংস্থান',
      titleEn: '5. Language Education & Employment',
      color: 'from-teal-500 to-cyan-600',
      items: [
        'তরুণদের ভাষা দক্ষতা বৃদ্ধির মাধ্যমে কর্মসংস্থান লাভে সহযোগিতার জন্য বাধ্যতামূলক তৃতীয় ভাষা শিক্ষা চালু করা হবে।',
        'অত্র এলাকায় একটি ভাষা শিক্ষা কেন্দ্র স্থাপন করা হবে।'
      ],
      itemsEn: [
        'Compulsory third language education will be introduced to assist youth in gaining employment through enhanced language skills.',
        'A language education center will be established in this area.'
      ]
    }
  ]
};

// Category 5: Sports & Youth Development (খেলাধূলা ও যুব উন্নয়ন)
const category5_sports: ManifestoCategory = {
  id: 'sports',
  icon: FaFutbol,
  subtitle: 'খেলাধূলা ও যুব উন্নয়ন',
  subtitleEn: 'Sports & Youth Development',
  title: 'শিশুরা আজ নিরাপদ খেলার মাঠের অভাবে বড় হচ্ছে, তরুণরা সময় কাটানোর উপযুক্ত জায়গা পাচ্ছে না। আমাদের দেশে খেলা এখনও পেশা হিসাবে প্রতিষ্ঠিত হয়নি। এই বাস্তবতা পেলানোর জন্য আমার পরিকল্পনা—',
  titleEn: 'Children today are growing up without safe playgrounds, youth are not finding suitable places to spend time. Sports is still not established as a profession in our country. My plan to change this reality—',
  color: 'from-lime-500 to-green-600',
  sections: [
    {
      id: 'playground-sports-complex',
      icon: FaFutbol,
      title: '১. খেলার মাঠ ও আধুনিক স্পোর্টস কমপ্লেক্স নির্মাণ',
      titleEn: '1. Playground & Modern Sports Complex Construction',
      color: 'from-lime-500 to-green-600',
      items: [
        'খেলাধুলার জন্য খেলার উপযোগী মাঠ তৈরি করা হবে যাতে তরুণরা নিয়মিত খেলাধূলা করতে পারে।',
        'প্রতিটি ওয়ার্ডে অত্যাধুনিক Sports Complex নির্মাণ করব-যেখানে থাকবে ইনডোর ও আউটডোর সব ধরনের খেলাধুলার সুযোগ।',
        'মেয়েদের জন্য আলাদা ও নিরাপদ খেলাধুলার সুবিধা থাকবে।'
      ],
      itemsEn: [
        'Suitable playgrounds will be created for sports so youth can play regularly.',
        'State-of-the-art Sports Complex will be built in every ward with indoor and outdoor sports facilities.',
        'Separate and safe sports facilities will be available for girls.'
      ]
    },
    {
      id: 'sports-career',
      icon: FaTrophy,
      title: '২. খেলাকে পেশা হিসাবে প্রতিষ্ঠা',
      titleEn: '2. Establishing Sports as a Profession',
      color: 'from-amber-500 to-yellow-600',
      items: [
        'তরুণদের খেলাধূলার জন্য পূর্ণাঙ্গ স্পোর্টস একাডেমি প্রতিষ্ঠা করা হবে যাতে তারা খেলাকে পেশা হিসাবে গ্রহণ করতে পারে।',
        'তরুণদেরকে খেলাধুলা ও শিল্প সংস্কৃতিতে সম্পৃক্ত করে মাদক থেকে বিরত রাখার ব্যবস্থা করা হবে।'
      ],
      itemsEn: [
        'Full-fledged sports academy will be established for youth so they can take sports as a profession.',
        'Youth will be engaged in sports and arts & culture to keep them away from drugs.'
      ]
    }
  ]
};

// Category 6: Public Safety (জননিরাপত্তা, মাদক, চাঁদাবাজি ও সন্ত্রাস প্রতিরোধ)
const category6_publicSafety: ManifestoCategory = {
  id: 'public-safety',
  icon: FaUserShield,
  subtitle: 'জননিরাপত্তা, মাদক, চাঁদাবাজি ও সন্ত্রাস প্রতিরোধ',
  subtitleEn: 'Public Safety, Drugs, Extortion & Terrorism Prevention',
  title: 'আমি দৃঢ়প্রতিজ্ঞ ঢাকা-১৬ কে একটি আধুনিক, নিরাপদ ও সমৃদ্ধ অঞ্চল হিসেবে গড়ে তোলার জন্য। সন্ত্রাস ও চাঁদাবাজির কারণে ব্যবসা ক্ষতিগ্রস্থ হয়, সাধারণ মানুষ আতঙ্কে থাকে। এই অন্যায় ও হয়রানির স্থায়ী সমাধানে আমি প্রয়োজনীয় পদক্ষেপ নেব।',
  titleEn: 'I am determined to develop Dhaka-16 as a modern, safe and prosperous region. Businesses are affected by terrorism and extortion, common people live in fear. I will take necessary steps to permanently solve this injustice and harassment.',
  color: 'from-red-600 to-rose-700',
  sections: [
    {
      id: 'public-safety-measures',
      icon: FaShieldAlt,
      title: '১. জননিরাপত্তা',
      titleEn: '1. Public Safety',
      color: 'from-slate-600 to-gray-700',
      items: [
        'আবাসিক এলাকাকে সম্পূর্ণ আবাসিক ঘোষণা করা হবে।',
        'স্থানীয় কমিটির মাধ্যমে জননিরাপত্তা নিশ্চিতকরণে পরিকল্পনা তৈরী করা হবে।',
        'প্রতি ওয়ার্ডে সপ্তাহে ০১ দিন মতবিনিময় সভা করা হবে।',
        'সিসিটিভি, নাইট গার্ড ও স্থানীয় কমিটির মাধ্যমে নিরাপত্তা নিশ্চিত করা হবে।'
      ],
      itemsEn: [
        'Residential areas will be declared completely residential.',
        'Plans will be made to ensure public safety through local committees.',
        'Weekly dialogue meetings will be held in every ward.',
        'Security will be ensured through CCTV, night guards and local committees.'
      ]
    },
    {
      id: 'drugs-extortion-control',
      icon: FaBan,
      title: '২. মাদক, চাঁদাবাজি ও সন্ত্রাস নিয়ন্ত্রণ',
      titleEn: '2. Control of Drugs, Extortion & Terrorism',
      color: 'from-red-600 to-rose-700',
      items: [
        'মাদক, চাঁদাবাজি ও সন্ত্রাসের বিরুদ্ধে জিরো টলারেন্স নীতি গ্রহণ করা হবে।',
        'চাঁদাবাজি প্রতিরোধে হটলাইন চালু করা হবে।',
        'কিশোর গ্যাং ও মাদক প্রতিরোধে স্থানীয় গুণীজনদের সমন্বয়ে কমিটি গঠন করে তদারকির ব্যবস্থা করা হবে।',
        'মাদক নিরাময় কেন্দ্র স্থাপন করা হবে।',
        'যুবসমাজকে বাঁচাতে নৈতিকতা ও ধর্মীয় মূল্যবোধের মাধ্যমে ইতিবাচক সামাজিক আন্দোলন গড়ে তুলে কার্যকর মাদক নির্মূল কর্মসূচির বাস্তবায়ন করা হবে।'
      ],
      itemsEn: [
        'Zero tolerance policy will be adopted against drugs, extortion and terrorism.',
        'Hotline will be launched to prevent extortion.',
        'Committees will be formed with local dignitaries for supervision to prevent juvenile gangs and drugs.',
        'Drug rehabilitation centers will be established.',
        'Effective drug eradication programs will be implemented by building positive social movements through morality and religious values to save the youth.'
      ]
    },
    {
      id: 'business-protection',
      icon: FaStore,
      title: '৩. ব্যবসায়ীদের নিরাপত্তা প্রটেকশন ইউনিট গঠন',
      titleEn: '3. Formation of Business Security Protection Unit',
      color: 'from-indigo-600 to-blue-700',
      items: [
        'ব্যবসায়ীদের নিরাপত্তা নিশ্চিত করতে বিশেষ প্রটেকশন ইউনিট গঠন করা হবে, যারা বাজার ও ব্যবসায়িক এলাকায় নজরদারি ও সহায়তা প্রদান করবে।'
      ],
      itemsEn: [
        'Special protection unit will be formed to ensure business security, who will provide surveillance and assistance in markets and business areas.'
      ]
    }
  ]
};

// Category 7: Green & Healthy Pallabi & Rupnagar (সবুজ ও সুস্থ পল্লবী ও রূপনগর)
const category7_greenHealthy: ManifestoCategory = {
  id: 'green-healthy',
  icon: FaTree,
  subtitle: 'সবুজ ও সুস্থ পল্লবী ও রূপনগর গড়তে পরিকল্পনা ও বাস্তবায়ন',
  subtitleEn: 'Planning & Implementation for Green & Healthy Pallabi & Rupnagar',
  title: 'আমি দৃঢ় প্রতিজ্ঞ পল্লবী ও রূপনগরকে একটি সুস্থ ও সবুজ অঞ্চল হিসেবে গড়ে তোলার জন্য। আমার পরিকল্পনা প্রতিটি নাগরিকের জীবনযাত্রাকে উন্নত করা এবং প্রতিটি ওয়ার্ডকে সুষমভাবে আধুনিকায়ন করা। সুস্থভাবে বেঁচে থাকার জন্য আমাদের দেশে যে পরিমাণ সবুজায়ন থাকার কথা তা নেই। দেশকে সুস্থ ও সুন্দর পরিবেশ ছোঁয়া রাখতে গাছ লাগাতে হবে, সবুজ বিপ্লব ঘটাতে হবে।',
  titleEn: 'I am determined to develop Pallabi and Rupnagar as a healthy and green region. My plan is to improve the quality of life of every citizen and modernize every ward uniformly. Our country does not have the greenery needed for healthy living. Trees must be planted and a green revolution must happen to keep the country healthy and beautiful.',
  color: 'from-green-600 to-emerald-700',
  sections: [
    {
      id: 'park-greening',
      icon: FaTree,
      title: '১. খেলার মাঠ ও পার্কের সবুজায়ন',
      titleEn: '1. Greening of Playgrounds & Parks',
      color: 'from-green-600 to-emerald-700',
      items: [
        'প্রতিটি খেলার মাঠ ও পার্ককে আরও সবুজ, ছায়াময় ও স্বাস্থ্যসম্মত পরিবেশে রূপান্তর করা হবে, যাতে শিশু-কিশোরদের জন্য নিরাপদ খেলার জায়গা নিশ্চিত হয়।'
      ],
      itemsEn: [
        'Every playground and park will be transformed into greener, shaded and healthier environments to ensure safe play areas for children.'
      ]
    },
    {
      id: 'tree-plantation',
      icon: FaSeedling,
      title: '২. বৃক্ষরোপণ ও বীজ বিতরণ কর্মসূচি',
      titleEn: '2. Tree Plantation & Seedling Distribution Program',
      color: 'from-emerald-500 to-green-600',
      items: [
        'সবুজ ও সুস্থ ঢাকা-১৬ গড়তে বৃহৎ পরিসরে বৃক্ষরোপণ কর্মসূচি গ্রহণ করা হবে।',
        'এলাকা জুড়ে ফলদ, বনজ ও ঔষধি গাছ লাগানো হবে।',
        'ঢাকা-১৬ আসনের মানুষের হাতে ২০ লক্ষ চারা বিতরণ করা হবে, যাতে প্রতিটি পরিবার নিজ ঘর-আঙিনা সবুজে ভরিয়ে তুলতে পারে।'
      ],
      itemsEn: [
        'Large-scale tree plantation programs will be undertaken to build a green and healthy Dhaka-16.',
        'Fruit, forest and medicinal trees will be planted throughout the area.',
        '20 lakh saplings will be distributed to the people of Dhaka-16 constituency so every family can fill their home and yard with greenery.'
      ]
    },
    {
      id: 'exercise-walkway',
      icon: FaWalking,
      title: '৩. সুস্থতার জন্য ব্যায়াম ও হাটার সুব্যবস্থা',
      titleEn: '3. Exercise & Walking Facilities for Health',
      color: 'from-teal-500 to-green-600',
      items: [
        'ব্যায়াম ও হাটার জন্য খেলার মাঠের চারপাশে Walk Way নির্মাণ করা হবে।',
        'খালের দুই পাশে Walk Way নির্মাণ করা হবে।'
      ],
      itemsEn: [
        'Walkways will be constructed around playgrounds for exercise and walking.',
        'Walkways will be constructed on both sides of canals.'
      ]
    },
    {
      id: 'rooftop-garden-tax',
      icon: FaHome,
      title: '৪. ছাদ বাগান ও ছাদকৃষিতে কর ছাড়',
      titleEn: '4. Tax Discount for Rooftop Gardens & Farming',
      color: 'from-lime-500 to-emerald-600',
      items: [
        'সিটি কর্পোরেশনের সঙ্গে আলোচনাপূর্বক ছাদ বাগান ও ছাদকৃষিতে যুক্ত বাড়িওয়ালাদের গৃহকর ও হোল্ডিং ট্যাক্সে বিশেষ ছাড় প্রদান করার ব্যবস্থা করা হবে।'
      ],
      itemsEn: [
        'Special discounts on house tax and holding tax will be arranged for homeowners engaged in rooftop gardens and farming after discussion with City Corporation.'
      ]
    },
    {
      id: 'tree-training',
      icon: FaLeaf,
      title: '৫. গাছ লাগানো ও পরিচর্যার প্রশিক্ষণ',
      titleEn: '5. Training on Tree Planting & Care',
      color: 'from-green-500 to-teal-600',
      items: [
        'গাছ লাগানো ও পরিচর্যার সঠিক পদ্ধতি শেখাতে বিনামূলে প্রশিক্ষণ চালু করা হবে',
        'কোন গাছ কোথায় লাগাতে হবে।',
        'কোন মৌসুমে কোন গাছ লাগাতে হবে।',
        'মাটি প্রস্তুত করা।',
        'সার ও পানির সঠিক ব্যবহার।',
        'রোগ বালাই নিয়ন্ত্রণ।'
      ],
      itemsEn: [
        'Free training will be provided to teach proper methods of tree planting and care.',
        'Which tree to plant where.',
        'Which tree to plant in which season.',
        'Soil preparation.',
        'Proper use of fertilizer and water.',
        'Disease and pest control.'
      ]
    }
  ]
};

// Category 8: Low Income, Elderly & Helpless Development (নিম্ন আয়, প্রবীণ ও অসহায় মানুষের উন্নয়ন)
const category8_socialWelfare: ManifestoCategory = {
  id: 'social-welfare',
  icon: FaHandsHelping,
  subtitle: 'নিম্ন আয়, প্রবীণ ও অসহায় মানুষের উন্নয়নে পরিকল্পনা ও বাস্তবায়ন',
  subtitleEn: 'Planning & Implementation for Development of Low Income, Elderly & Helpless People',
  title: 'প্রতিটি নাগরিকের জীবনযাত্রাকে উন্নত এবং প্রতিটি ওয়ার্ডকে সুষমভাবে আধুনিকায়ন করাই আমার লক্ষ্য। আমি ঢাকা-১৬ আসনে প্রবীণ ও অসহায়দের কল্যাণের জন্য সব ধরনের উদ্যোগ গ্রহণ করব।',
  titleEn: 'My goal is to improve the quality of life of every citizen and modernize every ward uniformly. I will take all kinds of initiatives for the welfare of the elderly and helpless in Dhaka-16 constituency.',
  color: 'from-pink-500 to-rose-600',
  sections: [
    {
      id: 'homeless-children-welfare',
      icon: FaChild,
      title: '১. অসহায় ও ছিন্নমূল শিশুদের কল্যাণ সাধন',
      titleEn: '1. Welfare of Helpless & Street Children',
      color: 'from-pink-500 to-rose-600',
      items: [
        'অসহায় মানুষ ও ছিন্নমূল শিশুদের জন্য আশ্রয় কেন্দ্র নির্মাণ করা হবে।',
        'অনাথ শিশুদের জন্য আবাসিক শিক্ষামূলক ব্যবস্থা করা হবে যাতে তারা সুরক্ষিত পরিবেশে বেড়ে উঠে এবং মানসম্মত শিক্ষা ও পরিচর্যা পায়।',
        'প্রবীণদের নিরাপদ জীবনযাপনের জন্য ভাতা প্রদান করা হবে।'
      ],
      itemsEn: [
        'Shelter centers will be constructed for helpless people and street children.',
        'Residential educational facilities will be provided for orphans so they can grow up in a safe environment and receive quality education and care.',
        'Allowances will be provided for elderly\'s safe living.'
      ]
    },
    {
      id: 'low-income-welfare',
      icon: FaHandHoldingHeart,
      title: '২. নিম্ন আয় মানুষের কল্যাণসাধন',
      titleEn: '2. Welfare of Low Income People',
      color: 'from-rose-500 to-pink-600',
      items: [
        'শিল্প প্রতিষ্ঠানে শ্রমিকদের সুষ্ঠু কর্মপরিবেশ নিশ্চিত করা করা হবে।',
        'বাউনিয়াবাদসহ বিভিন্ন এলাকায় দখলকৃত সরকারি টিনশেড প্লট সমূহকে স্থায়ীভাবে বন্দোবস্ত করার ব্যবস্থা গ্রহণ করা হবে।'
      ],
      itemsEn: [
        'Proper working environment for workers in industrial establishments will be ensured.',
        'Occupied government tin shed plots in Bauniadabad and other areas will be permanently settled.'
      ]
    },
    {
      id: 'elderly-support',
      icon: FaUsers,
      title: '৩. প্রবীণ নাগরিকদের জন্য বিশেষ ব্যবস্থা',
      titleEn: '3. Special Provisions for Elderly Citizens',
      color: 'from-amber-500 to-orange-600',
      items: [
        'প্রবীণদের নিরাপদ জীবনযাপনের জন্য ভাতা প্রদান করা হবে।',
        'প্রবীণদের যত্ন ও নিরাপত্তার জন্য প্রবীণ সেন্টার ও প্রবীণ নিবাস নির্মাণ করা হবে। প্রবীণ সদস্যদের জন্য বয়স্ক ভাতা নিশ্চিত করা হবে।'
      ],
      itemsEn: [
        'Allowances will be provided for elderly\'s safe living.',
        'Elderly centers and elderly homes will be built for elderly care and security. Old age allowance will be ensured for elderly members.'
      ]
    },
    {
      id: 'hijra-support',
      icon: FaUsers,
      title: '৪. হিজরা জনগোষ্ঠীর জন্য সহায়তা',
      titleEn: '4. Support for Hijra Community',
      color: 'from-violet-500 to-purple-600',
      items: [
        'হিজরা জনগোষ্ঠীর জন্য স্থায়ী চাকরী এবং নিরাপদ বসবাসের ব্যবস্থা করা হবে, যাতে তারা সমাজের সঙ্গে সম্পূর্ণভাবে একীভূত হতে পারে।'
      ],
      itemsEn: [
        'Permanent jobs and safe housing will be arranged for the hijra community so they can fully integrate with society.'
      ]
    },
    {
      id: 'widow-elderly-ration',
      icon: FaBoxOpen,
      title: '৫. প্রবীণ নারী ও বিধবাদের জন্য রেশন সুবিধা',
      titleEn: '5. Ration Facilities for Elderly Women & Widows',
      color: 'from-fuchsia-500 to-pink-600',
      items: [
        'প্রবীণ নারী সদস্য এবং বিধবাদের জন্য সাশ্রয়ী মূল্যে রেশন সরবরাহ নিশ্চিত করা হবে।'
      ],
      itemsEn: [
        'Ration supply at affordable prices will be ensured for elderly women members and widows.'
      ]
    },
    {
      id: 'social-welfare-harmony',
      icon: FaHandshake,
      title: '৬. অন্যান্য সামাজিক সুবিধা',
      titleEn: '6. Other Social Welfare & Communal Harmony',
      color: 'from-indigo-500 to-purple-600',
      items: [
        'সমাজের অনগ্র সুবিধা বঞ্চিত জনগোষ্ঠীর জন্য প্রয়োজন অনুযায়ী আশ্রয়কেন্দ্র, খাদ্য ও স্বাস্থ্যসেবা প্রদানের ব্যবস্থা করা হবে, যাতে কেউ পিছিয়ে না থাকে।',
        'ধর্ম, বর্ণ, দল মত নির্বিশেষে সাম্প্রদায়িক সম্প্রীতি নিশ্চিত করে ধর্মীয় উৎসব নির্বিঘ্নে পালনের লক্ষ্যে প্রতিটি ওয়ার্ডে মসজিদ, মাদ্রাসা, মন্দির ও গির্জাসহ অন্যান্য উপাসনালয় স্থাপন ও মেরামত করা হবে।',
        'আলেম ও ওলামাদের সম্মান রক্ষা করা হবে।',
        'মুক্তিযোদ্ধা, শিক্ষক, সাংবাদিক ও বিভিন্ন পেশাজীবীসহ গুণীজনদের সম্মান নিশ্চিত করা হবে।',
        'নাগরিক সমস্যা সমাধানের লক্ষ্যে সপ্তাহে ১ দিন এলাকাবাসীর সাথে মতবিনিময় করা হবে।'
      ],
      itemsEn: [
        'Shelter centers, food and healthcare will be provided as needed for the disadvantaged communities of society, so no one is left behind.',
        'Mosques, madrasas, temples, churches and other places of worship will be established and repaired in every ward to ensure communal harmony and peaceful celebration of religious festivals regardless of religion, caste or party.',
        'The honor of religious scholars (Ulema) will be protected.',
        'The honor of freedom fighters, teachers, journalists and other professionals and dignitaries will be ensured.',
        'Weekly dialogue sessions with residents will be held to solve civic problems.'
      ]
    }
  ]
};

// All manifesto categories combined
const manifestoCategories: ManifestoCategory[] = [
  category1_civicModernization,
  category2_utilities,
  category3_bangladeshiIdentity,
  category4_youthSkills,
  category5_sports,
  category6_publicSafety,
  category7_greenHealthy,
  category8_socialWelfare
];

export default function AminulManifestoPage() {
  const { language } = useTranslation();

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
              {language === 'bd' ? 'ঢাকা-১৬' : 'Dhaka-16'}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                {language === 'bd' ? 'আমিনুল হক' : 'Aminul Haque'}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-700 font-bold mb-6">
              {language === 'bd'
                ? 'বিএনপি মনোনীত ধানের শীষের প্রার্থী'
                : 'BNP Nominated Sheaf of Paddy Candidate'}
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 inline-block shadow-xl border border-emerald-100">
              <p className="text-3xl md:text-4xl font-black text-emerald-600 mb-2">
                {language === 'bd' ? '"আমি আপনাদেরই একজন"' : '"I am one of you"'}
              </p>
              <p className="text-lg text-slate-600">
                {language === 'bd'
                  ? 'আমি আপনাদের সন্তান এবং আপনাদেরই একজন'
                  : 'I am your child and one of you'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20 bg-gradient-to-r from-emerald-500 to-green-600"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
              <div className="text-center mb-8">
                <FaHeart className="text-5xl md:text-6xl text-emerald-600 mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                  {language === 'bd' ? 'প্রিয় পল্লবী ও রুপনগরবাসী' : 'Dear Residents of Pallabi & Rupnagar'}
                </h2>
                <p className="text-emerald-600 font-bold mt-2">
                  {language === 'bd' ? 'আসসালামুআলাইকুম। আন্তরিক শুভেচ্ছা গ্রহণ করুন।' : 'Assalamu Alaikum. Please accept my sincere greetings.'}
                </p>
              </div>
              <div className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed">
                <p>
                  {language === 'bd'
                    ? 'আমি, আমিনুল হক, আপনাদেরই একজন সন্তান। পল্লবী ও রুপনগর আমার ঘর ও আমার পরিবার। এ এলাকার ভবিষ্যৎ আমি নিজের মত করে অনুভব করি। বিগত ১৭ বছর আমরা সবাই একসাথে এক কঠিন সময় পার করেছি।'
                    : 'I, Aminul Haque, am one of your own children. Pallabi and Rupnagar are my home and my family. I feel the future of this area as my own. For the past 17 years, we have all gone through difficult times together.'}
                </p>
                <p>
                  {language === 'bd'
                    ? 'যানজট, পানি ও গ্যাসের ঘাটতি, চাঁদাবাজি, মাদক আর অব্যবস্থাপনার কারণে আমাদের প্রতিদিনের জীবন দুর্বিষহ হয়ে উঠেছে। আমাদের তরুণরা পথ হারাচ্ছে, মায়েরা নিরাপত্তাহীনতায় ভুগছে ও পরিবারগুলো স্বপ্ন হারাচ্ছে।'
                    : 'Traffic jams, water and gas shortages, extortion, drugs and mismanagement have made our daily lives unbearable. Our youth are losing their way, mothers are suffering from insecurity, and families are losing their dreams.'}
                </p>
                <p>
                  {language === 'bd'
                    ? 'আমি রাজনীতি করি ক্ষমতার জন্য না, মানুষের সেবা করার জন্য। সকল মত ও চিন্তার ঐক্যতান রচনার জন্য অব্যাহত আলোচনা, মতবিনিময় এবং পারস্পারিক বোঝাপড়ার সেতুবন্ধন রচনা করে সকল প্রকার বৈষম্য ও ভেদবুদ্ধির বেড়াজাল অতিক্রম করে ভবিষ্যতে সুখী এবং নতুন সংস্কৃতি চর্চার মাধ্যমে আধুনিক, সুস্থ ও আদর্শ নগর জীবন উপহার দেওয়াই আমার স্বপ্ন।'
                    : 'I do politics not for power, but to serve the people. My dream is to create a modern, healthy and ideal urban life through continuous dialogue, exchange of views and building bridges of mutual understanding to overcome all forms of discrimination.'}
                </p>
                <p>
                  {language === 'bd'
                    ? 'প্রবীণের অভিজ্ঞতা আর তারুণ্যের প্রাণশক্তি কাজে লাগিয়ে শুরু করতে চাই আমাদের পথচলা। আমি বিশ্বাস করি, আপনাদের সমর্থন ও আন্তরিক সহযোগিতা এবং নিষ্কলুষ সততা ও সমতার আদর্শে উজ্জীবিত হয়ে সকলে মিলে কাজ করলে এ স্বপ্ন বাস্তবায়ন অবশ্যই সম্ভব।'
                    : 'I want to start our journey by utilizing the experience of elders and the vitality of youth. I believe that with your support and sincere cooperation, and working together inspired by the ideals of pure honesty and equality, this dream can definitely be realized.'}
                </p>
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 mt-8">
                  <FaQuoteLeft className="text-3xl text-emerald-400 mb-4" />
                  <p className="text-xl md:text-2xl font-bold text-emerald-700 italic">
                    {language === 'bd'
                      ? 'আমি বিশ্বাস করি –পরিবর্তন সম্ভব, যদি আমরা সবাই চাই। আর সেই পরিবর্তনের পথ দেখাতে আমি আপনাদের কাছে এসেছি "পল্লবী ও রুপনগর গড়ার পরিকল্পনা" ও তার বাস্তবায়নের অঙ্গীকার নিয়ে।'
                      : 'I believe - change is possible, if we all want it. And to show you that path of change, I have come to you with the "Plan for Building Pallabi & Rupnagar" and a commitment to its implementation.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manifesto Title Section */}
      <section className="px-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-12 rounded-3xl bg-gradient-to-r from-emerald-600 to-green-700">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              {language === 'bd'
                ? 'আমাদের পল্লবী ও রুপনগর পরিবর্তনের পরিকল্পনা'
                : 'Our Plan for Transforming Pallabi & Rupnagar'}
            </h2>
            <p className="text-xl text-white/80">
              {language === 'bd' ? 'আমার নির্বাচনী ইশতেহার' : 'My Election Manifesto'}
            </p>
            <div className="mt-6 inline-block bg-white/20 backdrop-blur-sm rounded-full px-8 py-3">
              <span className="text-2xl font-black text-white">
                {language === 'bd' ? 'সবার আগে বাংলাদেশ' : 'Bangladesh First'}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Manifesto Categories */}
      {manifestoCategories.map((category, categoryIdx) => (
        <div key={category.id}>
          {/* Category Intro */}
          <section className={`py-16 px-4 ${categoryIdx % 2 === 0 ? 'bg-gradient-to-b from-white to-slate-50' : 'bg-gradient-to-b from-slate-50 to-white'}`}>
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${category.color} rounded-2xl mb-6 shadow-lg`}>
                  <category.icon className="text-4xl text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                  {language === 'bd' ? category.subtitle : category.subtitleEn}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {language === 'bd' ? category.title : category.titleEn}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Category Sections */}
          <section className="py-12 md:py-20 px-4">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.sections.map((section, idx) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group"
                  >
                    <div className={`h-full relative bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300`}>
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`inline-flex p-3 md:p-4 bg-gradient-to-br ${section.color} rounded-2xl flex-shrink-0 shadow-lg`}>
                          <section.icon className="text-2xl md:text-3xl text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                          {language === 'bd' ? section.title : section.titleEn}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {(language === 'bd' ? section.items : section.itemsEn).map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <FaCheck className={`text-sm mt-1 flex-shrink-0 ${section.color.includes('emerald') || section.color.includes('green') ? 'text-emerald-500' : section.color.includes('blue') ? 'text-blue-500' : section.color.includes('rose') || section.color.includes('red') || section.color.includes('pink') ? 'text-rose-500' : section.color.includes('amber') || section.color.includes('orange') || section.color.includes('yellow') ? 'text-amber-500' : section.color.includes('violet') || section.color.includes('purple') || section.color.includes('indigo') ? 'text-violet-500' : section.color.includes('cyan') || section.color.includes('teal') || section.color.includes('sky') ? 'text-cyan-500' : 'text-slate-500'}`} />
                            <span className="text-slate-700 text-sm md:text-base leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* Closing Message */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30 bg-gradient-to-r from-emerald-500 to-green-600"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center border border-slate-200">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                {language === 'bd'
                  ? 'শ্রদ্ধেয় মুরুব্বীগণ, প্রিয় সমবয়সী ও তরুণ বন্ধুগণ'
                  : 'Respected Elders, Dear Peers & Young Friends'}
              </h2>
              <div className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed text-left">
                <p>
                  {language === 'bd'
                    ? 'আমি পল্লবী ও রুপনগরের সন্তান। আপনাদেরই সন্তান। আপনাদের আপনজন। আপনাদের সুখ-দুঃখের সাথে আমার জীবন ওতপ্রোতভাবে জড়িয়ে আছে। এ এলাকা আমার আনন্দ-বেদনা, হাসি-কান্নার স্মৃতিমাখা গর্বের শহর।'
                    : 'I am a child of Pallabi and Rupnagar—your child. Your loved one. My life is deeply intertwined with your joys and sorrows. This area is my proud city filled with memories of joy and sorrow, laughter and tears.'}
                </p>
                <p>
                  {language === 'bd'
                    ? 'আমি জানি, যত সংকট, যত সীমাবদ্ধতা, নাগরিক-যন্ত্রণাসহ নানাবিধ সমস্যা আছে। এই এলাকার সন্তান হিসেবে আমার নির্বাচনী প্রতিশ্রুতি হচ্ছে ঐতিহ্য ও আধুনিকতার সমন্বয়ে বিশ্বমানের বাসযোগ্য অত্যাধুনিক পল্লবী ও রুপনগর গড়ে তোলা।'
                    : 'I know there are many crises, limitations, civic sufferings and various problems. As a child of this area, my electoral promise is to build a world-class livable, ultra-modern Pallabi and Rupnagar combining tradition and modernity.'}
                </p>
                <p>
                  {language === 'bd'
                    ? 'এ লক্ষ্যে আমার নিজস্ব চিন্তা চেতনা, স্বপ্ন-দাবনা ও প্রত্যাশার কথাগুলো আপনাদের সমীপে তুলে ধরলাম। আপনাদের সহযোগিতা পেলে তা আরও বাস্তব, প্রায়োগিক ও নাগরিকবান্ধব করে গড়ে তোলা সম্ভব হবে ইনশাআল্লাহ।'
                    : 'I have presented my own thoughts, dreams and expectations to you for this purpose. With your cooperation, it will be possible to make it more practical, applicable and citizen-friendly, Inshallah.'}
                </p>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 my-8">
                <p className="text-xl md:text-2xl font-bold text-emerald-700">
                  {language === 'bd'
                    ? 'আমি একান্তভাবে আশা করি, আসন্ন জাতীয় নির্বাচনে ঢাকা-১৬ আসনে ধানের শীষ প্রতীকে আপনার মূল্যবান ভোটটি দিয়ে আমাকে আপনাদের সেবা করার সুযোগ দিবেন।'
                    : 'I sincerely hope that in the upcoming national election, you will give me the opportunity to serve you by casting your valuable vote for the Sheaf of Paddy symbol in Dhaka-16 constituency.'}
                </p>
              </div>
              <div className="space-y-2 text-center">
                <p className="text-lg text-slate-600">
                  {language === 'bd' ? 'আল্লাহ আমাদের সহায় হোন।' : 'May Allah help us.'}
                </p>
                <p className="text-lg text-slate-600">
                  {language === 'bd' ? 'আল্লাহ হাফেজ।' : 'Allah Hafez.'}
                </p>
                <p className="text-2xl font-black text-emerald-600 mt-4">
                  {language === 'bd' ? 'বাংলাদেশ জিন্দাবাদ।' : 'Long Live Bangladesh.'}
                </p>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-3xl font-black text-emerald-600">
                    {language === 'bd' ? '- আমিনুল হক' : '- Aminul Haque'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
