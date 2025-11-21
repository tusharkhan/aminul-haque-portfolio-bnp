"use client";
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaClock, FaFacebook, FaWhatsapp, FaLink, FaArrowLeft, FaVideo, FaImage } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { useState } from 'react';

// Sample data - In production, this would come from a CMS or API
const pressReleasesData: { [key: string]: any } = {
  'aminul-bnp-appointment': {
    title: 'আমিনুল হক বিএনপির ঢাকা উত্তর সিটি ইউনিটের সদস্য সচিব হিসেবে নিযুক্ত',
    summary: 'বিশিষ্ট ফুটবলার ও সামাজিক ব্যক্তিত্ব আমিনুল হক বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি) এর ঢাকা উত্তর সিটি ইউনিটের সদস্য সচিব হিসেবে দায়িত্ব গ্রহণ করেছেন।',
    date: '১৫ নভেম্বর ২০২৫',
    fullDescription: `
      <p>ঢাকা, নভেম্বর ১৫, ২০২৫ - বাংলাদেশের কিংবদন্তি গোলরক্ষক এবং খেলাধুলার আইকন আমিনুল হক আনুষ্ঠানিকভাবে বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি) এর ঢাকা উত্তর সিটি ইউনিটের সদস্য সচিব হিসেবে নিযুক্ত হয়েছেন।</p>

      <h2>নতুন দায়িত্ব</h2>
      <p>এই নিয়োগ বাংলাদেশের রাজনীতিতে খেলাধুলার ব্যক্তিত্বদের ক্রমবর্ধমান ভূমিকার প্রতিনিধিত্ব করে। আমিনুল হক, যিনি বাংলাদেশের সর্বশ্রেষ্ঠ গোলরক্ষকদের একজন হিসেবে স্বীকৃত, এখন তার অভিজ্ঞতা এবং জনপ্রিয়তা জনসেবায় নিয়োজিত করবেন।</p>

      <h2>আমিনুল হকের বক্তব্য</h2>
      <p>"আমি এই দায়িত্ব গ্রহণ করে গর্বিত এবং সম্মানিত বোধ করছি। যেমনটি আমি ফুটবল মাঠে আমার দলের জন্য লড়াই করেছি, তেমনি আমি ঢাকার মানুষের জন্য এবং আমাদের দেশের গণতন্ত্রের জন্য লড়াই চালিয়ে যাব," আমিনুল হক তার নিয়োগের পর বলেন।</p>

      <h2>ভবিষ্যৎ পরিকল্পনা</h2>
      <p>সদস্য সচিব হিসেবে, আমিনুল হক ঢাকা উত্তরের যুব উন্নয়ন, খেলাধুলা প্রচার, শিক্ষা এবং সম্প্রদায় কল্যাণ কর্মসূচিতে মনোনিবেশ করার পরিকল্পনা করছেন। তিনি ইতিমধ্যে তার এলাকায় বিভিন্ন সামাজিক উদ্যোগে জড়িত থেকেছেন এবং এই দায়িত্ব তাকে আরও বিস্তৃত প্রভাব ফেলতে সক্ষম করবে।</p>

      <h2>দলীয় নেতৃবৃন্দের প্রতিক্রিয়া</h2>
      <p>বিএনপির ঊর্ধ্বতন নেতারা এই নিয়োগকে স্বাগত জানিয়েছেন এবং বলেছেন যে আমিনুল হকের নেতৃত্ব এবং জনগণের সাথে সংযোগ স্থাপনের ক্ষমতা দলের জন্য একটি মূল্যবান সম্পদ হবে।</p>

      <h2>সম্প্রদায়ের প্রতিক্রিয়া</h2>
      <p>ঢাকা উত্তরের বাসিন্দারা এই নিয়োগে উৎসাহিত হয়েছেন। অনেকে বিশ্বাস করেন যে আমিনুল হকের সততা, কঠোর পরিশ্রম এবং সেবার প্রতি অঙ্গীকার - যা তার ফুটবল ক্যারিয়ারে প্রদর্শিত হয়েছে - রাজনৈতিক ক্ষেত্রে ইতিবাচক পরিবর্তন আনবে।</p>
    `,
    images: [
      '/aminul_nomination_post.webp',
      '/aminul_haque.jpg'
    ],
    videos: [],
  },
  'youth-football-program': {
    title: 'স্থানীয় যুব ফুটবল উন্নয়ন প্রোগ্রাম উদ্বোধন',
    summary: 'আমিনুল হক ঢাকার বিভিন্ন এলাকায় তরুণ প্রতিভা বিকাশের জন্য একটি বিস্তৃত ফুটবল প্রশিক্ষণ কর্মসূচি চালু করেছেন যা প্রতিবছর ৫০০+ যুবকদের উপকৃত করবে।',
    date: '৩ নভেম্বর ২০২৫',
    fullDescription: `
      <p>ঢাকা, নভেম্বর ৩, ২০২৫ - বাংলাদেশের কিংবদন্তি গোলরক্ষক আমিনুল হক আজ একটি যুগান্তকারী যুব ফুটবল উন্নয়ন কর্মসূচি চালু করেছেন যার লক্ষ্য ঢাকা শহর জুড়ে প্রতিবছর ৫০০ এরও বেশি তরুণকে প্রশিক্ষণ দেওয়া এবং তৈরি করা।</p>

      <h2>কর্মসূচির বিবরণ</h2>
      <p>এই বিস্তৃত উদ্যোগে অন্তর্ভুক্ত থাকবে:</p>
      <ul>
        <li>সপ্তাহে তিন বার বিনামূল্যে কোচিং সেশন</li>
        <li>পেশাদার কোচ এবং প্রাক্তন খেলোয়াড়দের প্রশিক্ষণ</li>
        <li>যোগ্য তরুণদের জন্য বিনামূল্যে খেলার সরঞ্জাম</li>
        <li>বার্ষিক টুর্নামেন্ট এবং প্রতিযোগিতা</li>
        <li>প্রতিভাবান খেলোয়াড়দের জন্য বৃত্তির সুযোগ</li>
      </ul>

      <h2>অবস্থান</h2>
      <p>এই কর্মসূচি ঢাকার ৮টি বিভিন্ন এলাকায় পরিচালিত হবে, যাতে সব পটভূমির তরুণদের জন্য সহজে প্রবেশযোগ্যতা নিশ্চিত করা যায়। প্রতিটি প্রশিক্ষণ কেন্দ্র অভিজ্ঞ কোচ এবং খেলার সুবিধা দিয়ে সজ্জিত থাকবে।</p>

      <h2>আমিনুল হকের দৃষ্টিভঙ্গি</h2>
      <p>"প্রতিটি তরুণের তাদের স্বপ্ন অনুসরণ করার সুযোগ পাওয়া উচিত। ফুটবল কেবল একটি খেলা নয় - এটি জীবনের পাঠ শেখায়, শৃঙ্খলা তৈরি করে এবং চরিত্র গঠন করে। আমরা এখানে শুধু ফুটবলারই তৈরি করছি না, আমরা ভবিষ্যত নেতা তৈরি করছি," আমিনুল হক উদ্বোধনী অনুষ্ঠানে বলেন।</p>

      <h2>সম্প্রদায়ের প্রভাব</h2>
      <p>এই কর্মসূচি শুধু ফুটবল দক্ষতা উন্নয়নে নয়, বরং যুবকদের রাস্তার অপরাধ থেকে দূরে রাখতে এবং তাদের ইতিবাচক রোল মডেল প্রদান করতেও সহায়ক হবে। স্থানীয় সম্প্রদায়ের নেতারা এই উদ্যোগকে স্বাগত জানিয়েছেন।</p>

      <h2>নিবন্ধন তথ্য</h2>
      <p>আগ্রহী তরুণরা (বয়স ৮-১৮) স্থানীয় প্রশিক্ষণ কেন্দ্রে বা অনলাইনে নিবন্ধন করতে পারেন। কোন অংশগ্রহণ ফি নেই এবং সকল সুবিধা সম্পূর্ণ বিনামূল্যে প্রদান করা হবে।</p>
    `,
    images: [
      '/aminul_haque.jpg',
    ],
    videos: [
      { 
        title: 'কর্মসূচির উদ্বোধনী অনুষ্ঠান',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/aminul_haque.jpg'
      }
    ],
  },
  'rural-education-initiative': {
    title: 'গ্রামীণ শিক্ষা উদ্যোগে আমিনুল হক এর অবদান',
    summary: 'প্রত্যন্ত অঞ্চলে শিক্ষার মান উন্নয়নে একটি নতুন উদ্যোগ ঘোষণা করেছেন আমিনুল হক। এই কর্মসূচির মাধ্যমে ১০টি গ্রামে স্কুল সুবিধা উন্নত করা হবে।',
    date: '২২ অক্টোবর ২০২৫',
    fullDescription: `
      <p>ঢাকা, অক্টোবর ২২, ২০২৫ - আমিনুল হক একটি উচ্চাভিলাষী গ্রামীণ শিক্ষা উদ্যোগ ঘোষণা করেছেন যার লক্ষ্য ঢাকা বিভাগের ১০টি গ্রামে শিক্ষার গুণমান এবং অ্যাক্সেস উন্নত করা।</p>

      <h2>উদ্যোগের মূল উপাদান</h2>
      <p>এই বিস্তৃত কর্মসূচিতে অন্তর্ভুক্ত থাকবে:</p>
      <ul>
        <li>স্কুল অবকাঠামো সংস্কার ও আধুনিকীকরণ</li>
        <li>ডিজিটাল শিক্ষা সরঞ্জাম ও কম্পিউটার ল্যাব স্থাপন</li>
        <li>শিক্ষকদের জন্য প্রশিক্ষণ কর্মসূচি</li>
        <li>মেধাবী শিক্ষার্থীদের জন্য বৃত্তি</li>
        <li>বিনামূল্যে শিক্ষা উপকরণ বিতরণ</li>
      </ul>

      <h2>আমিনুল হকের বক্তব্য</h2>
      <p>"শিক্ষা হল উন্নয়নের মূল ভিত্তি। প্রতিটি শিশুর, তারা যেখানেই থাকুক না কেন, মানসম্পন্ন শিক্ষা পাওয়ার অধিকার রয়েছে। এই কর্মসূচি শহর ও গ্রামের মধ্যকার শিক্ষার ব্যবধান কমাতে সাহায্য করবে," আমিনুল হক বলেন।</p>

      <h2>বাস্তবায়ন পরিকল্পনা</h2>
      <p>কর্মসূচি পরবর্তী মাসে শুরু হবে এবং তিন পর্যায়ে সম্পন্ন হবে:</p>
      <ul>
        <li><strong>পর্যায় ১:</strong> অবকাঠামো মূল্যায়ন এবং মেরামত</li>
        <li><strong>পর্যায় ২:</strong> ডিজিটাল সরঞ্জাম ইনস্টলেশন</li>
        <li><strong>পর্যায় ৩:</strong> শিক্ষক প্রশিক্ষণ এবং চলমান সহায়তা</li>
      </ul>

      <h2>প্রত্যাশিত প্রভাব</h2>
      <p>এই উদ্যোগ আনুমানিক ২,০০০ শিক্ষার্থীকে সরাসরি উপকৃত করবে এবং তাদের পরিবার ও সম্প্রদায়ের উপর ইতিবাচক প্রভাব ফেলবে। দীর্ঘমেয়াদী লক্ষ্য হল এই মডেল সফল হলে আরও বেশি গ্রামে সম্প্রসারণ করা।</p>
    `,
    images: [
      '/aminul_haque.jpg',
    ],
    videos: [],
  },
  'health-awareness-campaign': {
    title: 'সম্প্রদায়ের স্বাস্থ্য সচেতনতা ক্যাম্পেইন শুরু',
    summary: 'স্থানীয় সম্প্রদায়ে স্বাস্থ্য সেবা এবং সচেতনতা বৃদ্ধির জন্য একটি বিনামূল্যে স্বাস্থ্য পরীক্ষা এবং শিক্ষা কর্মসূচি চালু করা হয়েছে।',
    date: '১০ অক্টোবর ২০২৫',
    fullDescription: `
      <p>ঢাকা, অক্টোবর ১০, ২০২৫ - একটি সুস্থ সম্প্রদায় গঠনের প্রচেষ্টায়, আমিনুল হক একটি বিস্তৃত স্বাস্থ্য সচেতনতা ক্যাম্পেইন শুরু করেছেন যা বিনামূল্যে স্বাস্থ্য পরীক্ষা এবং শিক্ষামূলক কর্মসূচি প্রদান করবে।</p>

      <h2>ক্যাম্পেইনের মূল বৈশিষ্ট্য</h2>
      <ul>
        <li>মাসিক বিনামূল্যে স্বাস্থ্য পরীক্ষা শিবির</li>
        <li>রোগ প্রতিরোধ সম্পর্কে সচেতনতা সেশন</li>
        <li>পুষ্টি এবং স্বাস্থ্যকর জীবনযাপন কর্মশালা</li>
        <li>মানসিক স্বাস্থ্য সহায়তা পরিষেবা</li>
        <li>বিশেষজ্ঞ ডাক্তারদের সাথে বিনামূল্যে পরামর্শ</li>
      </ul>

      <h2>সেবা প্রদান</h2>
      <p>স্বাস্থ্য পরীক্ষা শিবিরগুলি বিভিন্ন এলাকায় মাসের প্রতিটি শনিবার পরিচালিত হবে। পরিষেবাগুলি অন্তর্ভুক্ত:</p>
      <ul>
        <li>রক্তচাপ এবং ডায়াবেটিস স্ক্রিনিং</li>
        <li>সাধারণ স্বাস্থ্য পরীক্ষা</li>
        <li>চোখ ও দাঁতের পরীক্ষা</li>
        <li>শিশু স্বাস্থ্য মূল্যায়ন</li>
        <li>মহিলা স্বাস্থ্য পরামর্শ</li>
      </ul>

      <h2>সম্প্রদায়ের সাড়া</h2>
      <p>প্রথম শিবিরেই ৩০০+ মানুষ স্বাস্থ্য পরীক্ষার জন্য অংশগ্রহণ করেছেন। অনেক অংশগ্রহণকারী এই ধরনের বিনামূল্যে এবং অ্যাক্সেসযোগ্য স্বাস্থ্য সেবার জন্য কৃতজ্ঞতা প্রকাশ করেছেন।</p>

      <h2>ভবিষ্যৎ পরিকল্পনা</h2>
      <p>সফলতার উপর ভিত্তি করে, আমিনুল হক আরও বিশেষায়িত স্বাস্থ্য সেবা এবং মোবাইল ক্লিনিক প্রবর্তনের পরিকল্পনা করছেন যা দূরবর্তী এলাকায় পৌঁছাবে।</p>
    `,
    images: [
      '/aminul_haque.jpg',
    ],
    videos: [],
  },
  'farmer-welfare-program': {
    title: 'কৃষক কল্যাণ কর্মসূচির নতুন পর্যায়',
    summary: 'স্থানীয় কৃষকদের সহায়তা করার জন্য একটি বিস্তৃত কৃষি সহায়তা কর্মসূচি ঘোষণা করা হয়েছে যা আধুনিক কৃষি পদ্ধতি এবং সম্পদে অ্যাক্সেস প্রদান করবে।',
    date: '২৮ সেপ্টেম্বর ২০২৫',
    fullDescription: `
      <p>ঢাকা, সেপ্টেম্বর ২৮, ২০২৫ - স্থানীয় কৃষকদের সমর্থন ও ক্ষমতায়নের জন্য আমিনুল হক একটি ব্যাপক কৃষক কল্যাণ কর্মসূচি চালু করেছেন।</p>

      <h2>কর্মসূচির উদ্দেশ্য</h2>
      <p>এই উদ্যোগের লক্ষ্য হল:</p>
      <ul>
        <li>আধুনিক কৃষি প্রযুক্তিতে প্রশিক্ষণ প্রদান</li>
        <li>উন্নত বীজ ও সার সরবরাহ</li>
        <li>সেচ সুবিধার উন্নতি</li>
        <li>ন্যায্যমূল্য বাজার সংযোগ</li>
        <li>ফসল বীমা সহায়তা</li>
      </ul>

      <h2>আমিনুল হকের দৃষ্টিভঙ্গি</h2>
      <p>"আমাদের কৃষকরা দেশের মেরুদণ্ড। তাদের সমৃদ্ধি মানে দেশের সমৃদ্ধি। এই কর্মসূচি কৃষকদের আধুনিক সরঞ্জাম ও জ্ঞান দিয়ে সজ্জিত করবে, যাতে তারা আরও ভালো ফসল উৎপাদন করতে এবং তাদের জীবিকা উন্নত করতে পারে," আমিনুল হক বলেন।</p>

      <h2>বাস্তবায়ন কৌশল</h2>
      <p>কর্মসূচিটি তিনটি প্রধান এলাকায় কাজ করবে:</p>
      <ul>
        <li><strong>প্রশিক্ষণ:</strong> কৃষি বিশেষজ্ঞদের দ্বারা নিয়মিত কর্মশালা</li>
        <li><strong>সম্পদ:</strong> ভর্তুকি মূল্যে কৃষি উপকরণ</li>
        <li><strong>বাজার:</strong> সরাসরি ক্রেতার সাথে সংযোগ</li>
      </ul>

      <h2>প্রত্যাশিত সুবিধা</h2>
      <p>প্রথম বছরে, এই কর্মসূচি আনুমানিক ১,০০০ কৃষক পরিবারকে উপকৃত করবে, ফসলের ফলন ৩০% পর্যন্ত বৃদ্ধি করবে এবং কৃষকদের আয় উল্লেখযোগ্যভাবে উন্নত করবে।</p>
    `,
    images: [
      '/aminul_haque.jpg',
    ],
    videos: [
      { 
        title: 'কৃষক প্রশিক্ষণ সেশন',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: '/aminul_haque.jpg'
      }
    ],
  },
  'women-empowerment-workshop': {
    title: 'মহিলা ক্ষমতায়ন ওয়ার্কশপ সিরিজ',
    summary: 'স্থানীয় মহিলাদের দক্ষতা উন্নয়ন এবং অর্থনৈতিক স্বাধীনতার জন্য একটি নতুন প্রশিক্ষণ কর্মসূচি শুরু হয়েছে।',
    date: '১৫ সেপ্টেম্বর ২০২৫',
    fullDescription: `
      <p>ঢাকা, সেপ্টেম্বর ১৫, ২০২৫ - মহিলাদের অর্থনৈতিক ক্ষমতায়ন এবং দক্ষতা উন্নয়নের লক্ষ্যে আমিনুল হক একটি বিশেষ ওয়ার্কশপ সিরিজ উদ্বোধন করেছেন।</p>

      <h2>ওয়ার্কশপের বিষয়বস্তু</h2>
      <p>এই ব্যাপক প্রশিক্ষণ কর্মসূচিতে রয়েছে:</p>
      <ul>
        <li>সেলাই এবং পোশাক তৈরি</li>
        <li>হস্তশিল্প এবং কুটির শিল্প</li>
        <li>ডিজিটাল সাক্ষরতা এবং কম্পিউটার দক্ষতা</li>
        <li>ক্ষুদ্র ব্যবসা ব্যবস্থাপনা</li>
        <li>আর্থিক পরিকল্পনা ও সঞ্চয়</li>
      </ul>

      <h2>প্রোগ্রামের বৈশিষ্ট্য</h2>
      <ul>
        <li>সম্পূর্ণ বিনামূল্যে প্রশিক্ষণ</li>
        <li>বিনামূল্যে প্রশিক্ষণ সামগ্রী</li>
        <li>অভিজ্ঞ প্রশিক্ষক</li>
        <li>সার্টিফিকেট প্রদান</li>
        <li>বাজার সংযোগ সহায়তা</li>
      </ul>

      <h2>আমিনুল হকের বার্তা</h2>
      <p>"একজন মহিলার ক্ষমতায়ন মানে পুরো পরিবারের ক্ষমতায়ন। এই কর্মসূচি মহিলাদের আর্থিকভাবে স্বাধীন হতে এবং তাদের পরিবারে অবদান রাখতে সক্ষম করবে। আমরা শুধু দক্ষতাই শেখাচ্ছি না, আমরা স্বপ্ন পূরণের পথ তৈরি করছি," আমিনুল হক বলেন।</p>

      <h2>সাফল্যের গল্প</h2>
      <p>প্রথম ব্যাচের অংশগ্রহণকারীদের মধ্যে অনেকে ইতিমধ্যে তাদের নিজস্ব ক্ষুদ্র ব্যবসা শুরু করেছেন এবং আয় উৎপাদন করছেন। তাদের সাফল্য অন্যদের জন্য অনুপ্রেরণা হিসেবে কাজ করছে।</p>

      <h2>নিবন্ধন তথ্য</h2>
      <p>আগ্রহী মহিলারা স্থানীয় কমিউনিটি সেন্টারে বা অনলাইনে নিবন্ধন করতে পারেন। পরবর্তী ব্যাচ পরের মাসে শুরু হবে।</p>
    `,
    images: [
      '/aminul_haque.jpg',
    ],
    videos: [],
  },
};

export default function PressReleaseDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const pressRelease = pressReleasesData[slug];
  const [copied, setCopied] = useState(false);

  if (!pressRelease) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">প্রেস রিলিজ পাওয়া যায়নি</h1>
          <Link href="/press-release" className="text-blue-600 hover:underline">
            প্রেস রিলিজ পেজে ফিরে যান
          </Link>
        </div>
      </main>
    );
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform: string) => {
    const title = encodeURIComponent(pressRelease.title);
    const url = encodeURIComponent(currentUrl);
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${title}%20${url}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Back Button */}
      <section className="py-8 px-4">
        <div className="mx-auto max-w-4xl">
          <Link 
            href="/press-release"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold transition-colors"
          >
            <FaArrowLeft />
            সব প্রেস রিলিজে ফিরে যান
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Date */}
            <div className="flex items-center gap-2 text-slate-600 mb-6">
              <FaClock />
              <span className="font-medium">{pressRelease.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              {pressRelease.title}
            </h1>

            {/* Summary */}
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
              {pressRelease.summary}
            </p>

            {/* Share Buttons */}
            <div className="flex flex-wrap items-center gap-4 py-6 border-y border-slate-200">
              <span className="font-bold text-slate-700">শেয়ার করুন:</span>
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-all transform hover:scale-105 font-medium"
              >
                <FaFacebook />
                Facebook
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 font-medium"
              >
                <FaXTwitter />
                X
              </button>
              <button
                onClick={() => handleShare('whatsapp')}
                className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#22C55E] transition-all transform hover:scale-105 font-medium"
              >
                <FaWhatsapp />
                WhatsApp
              </button>
              <button
                onClick={copyLink}
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-all transform hover:scale-105 font-medium"
              >
                <FaLink />
                {copied ? 'কপি হয়েছে!' : 'লিংক কপি'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      {pressRelease.images && pressRelease.images.length > 0 && (
        <section className="py-8 px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={pressRelease.images[0]}
                alt={pressRelease.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Full Description */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200"
          >
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: pressRelease.fullDescription }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: '#334155'
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Additional Images */}
      {pressRelease.images && pressRelease.images.length > 1 && (
        <section className="py-12 px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <FaImage className="text-blue-600" />
              আরও ছবি
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pressRelease.images.slice(1).map((image: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={image}
                    alt={`${pressRelease.title} - Image ${idx + 2}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos */}
      {pressRelease.videos && pressRelease.videos.length > 0 && (
        <section className="py-12 px-4 bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <FaVideo className="text-red-600" />
              ভিডিও
            </h2>
            <div className="space-y-8">
              {pressRelease.videos.map((video: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200"
                >
                  {video.title && (
                    <div className="p-4 bg-slate-50 border-b border-slate-200">
                      <h3 className="text-xl font-bold text-slate-900">{video.title}</h3>
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
          </div>
        </section>
      )}

      {/* Share Again Section */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center border border-slate-200">
              <h3 className="text-3xl font-black text-slate-900 mb-6">
                এই প্রেস রিলিজ শেয়ার করুন
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <button
                  onClick={() => handleShare('facebook')}
                  className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-xl hover:bg-[#166FE5] transition-all transform hover:scale-105 font-bold shadow-lg"
                >
                  <FaFacebook className="text-xl" />
                  Facebook
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105 font-bold shadow-lg"
                >
                  <FaXTwitter className="text-xl" />
                  X
                </button>
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#22C55E] transition-all transform hover:scale-105 font-bold shadow-lg"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp
                </button>
                <button
                  onClick={copyLink}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-800 transition-all transform hover:scale-105 font-bold shadow-lg"
                >
                  <FaLink className="text-xl" />
                  {copied ? 'কপি হয়েছে!' : 'লিংক কপি'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to List */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Link 
            href="/press-release"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105"
          >
            <FaArrowLeft />
            সব প্রেস রিলিজ দেখুন
          </Link>
        </div>
      </section>
    </main>
  );
}

