// Shared options for volunteer registration and update-profile forms

export const districts = [
  { id: 'dhaka', name: 'ঢাকা', nameEn: 'Dhaka' },
  { id: 'chittagong', name: 'চট্টগ্রাম', nameEn: 'Chittagong' },
  { id: 'sylhet', name: 'সিলেট', nameEn: 'Sylhet' },
  { id: 'rajshahi', name: 'রাজশাহী', nameEn: 'Rajshahi' },
  { id: 'khulna', name: 'খুলনা', nameEn: 'Khulna' },
  { id: 'barisal', name: 'বরিশাল', nameEn: 'Barisal' },
  { id: 'rangpur', name: 'রংপুর', nameEn: 'Rangpur' },
  { id: 'mymensingh', name: 'ময়মনসিংহ', nameEn: 'Mymensingh' },
];

export const upazilasByDistrict: { [key: string]: { bd: string[]; en: string[] } } = {
  dhaka: {
    bd: ['গুলশান', 'ধানমন্ডি', 'মিরপুর', 'উত্তরা', 'ঢাকা সদর', 'সাভার', 'কেরানীগঞ্জ'],
    en: ['Gulshan', 'Dhanmondi', 'Mirpur', 'Uttara', 'Dhaka Sadar', 'Savar', 'Keraniganj'],
  },
  chittagong: {
    bd: ['কক্সবাজার', 'চট্টগ্রাম সদর', 'হাটহাজারী', 'রাউজান', 'ফটিকছড়ি'],
    en: ["Cox's Bazar", 'Chittagong Sadar', 'Hathazari', 'Raozan', 'Fatikchhari'],
  },
  sylhet: {
    bd: ['সিলেট সদর', 'বালাগঞ্জ', 'বিয়ানীবাজার', 'বিশ্বনাথ', 'বালাগঞ্জ'],
    en: ['Sylhet Sadar', 'Balaganj', 'Beanibazar', 'Bishwanath', 'Balaganj'],
  },
  rajshahi: {
    bd: ['রাজশাহী সদর', 'বোয়ালিয়া', 'পবা', 'দুপচাঁচিয়া'],
    en: ['Rajshahi Sadar', 'Boalia', 'Paba', 'Durgapur'],
  },
  khulna: {
    bd: ['খুলনা সদর', 'দাকোপ', 'ডুমুরিয়া', 'দিঘলিয়া'],
    en: ['Khulna Sadar', 'Dakop', 'Dumuria', 'Dighulia'],
  },
  barisal: {
    bd: ['বরিশাল সদর', 'বাবুগঞ্জ', 'বাকেরগঞ্জ', 'বানারীপাড়া'],
    en: ['Barisal Sadar', 'Babuganj', 'Bakerganj', 'Banaripara'],
  },
  rangpur: {
    bd: ['রংপুর সদর', 'বদরগঞ্জ', 'গঙ্গাচড়া', 'কাউনিয়া'],
    en: ['Rangpur Sadar', 'Badarganj', 'Gangachara', 'Kaunia'],
  },
  mymensingh: {
    bd: ['ময়মনসিংহ সদর', 'গফরগাঁও', 'গৌরীপুর', 'ঈশ্বরগঞ্জ'],
    en: ['Mymensingh Sadar', 'Gafargaon', 'Gouripur', 'Ishwarganj'],
  },
};

export const skillsData = {
  bd: [
    'কম্পিউটার/প্রযুক্তি',
    'শিক্ষা/প্রশিক্ষণ',
    'স্বাস্থ্যসেবা',
    'সামাজিক কাজ',
    'মিডিয়া/প্রচারণা',
    'ইভেন্ট ব্যবস্থাপনা',
    'অনুবাদ',
    'গ্রাফিক ডিজাইন',
    'ফটোগ্রাফি',
    'ভিডিও সম্পাদনা',
    'লেখালেখি',
    'অন্যান্য',
  ],
  en: [
    'Computer/Technology',
    'Education/Training',
    'Healthcare',
    'Social Work',
    'Media/Promotion',
    'Event Management',
    'Translation',
    'Graphic Design',
    'Photography',
    'Video Editing',
    'Writing',
    'Others',
  ],
};

export const preferredTasksData = {
  bd: [
    'ক্যাম্পেইন সহায়তা',
    'ইভেন্ট আয়োজন',
    'সামাজিক যোগাযোগ',
    'ডেটা এন্ট্রি',
    'ফোন কল',
    'দরজায় দরজায় প্রচারণা',
    'সামাজিক মিডিয়া ব্যবস্থাপনা',
    'সামগ্রিক সহায়তা',
    'অন্যান্য',
  ],
  en: [
    'Campaign Support',
    'Event Organization',
    'Social Communication',
    'Data Entry',
    'Phone Calls',
    'Door-to-Door Canvassing',
    'Social Media Management',
    'General Support',
    'Others',
  ],
};

export const availabilityOptionsData = {
  bd: [
    { id: 'weekday-morning', label: 'সপ্তাহের দিন (সকাল ৯টা-১২টা)' },
    { id: 'weekday-afternoon', label: 'সপ্তাহের দিন (দুপুর ১২টা-৫টা)' },
    { id: 'weekday-evening', label: 'সপ্তাহের দিন (সন্ধ্যা ৫টা-৮টা)' },
    { id: 'weekend-morning', label: 'সপ্তাহান্তে (সকাল ৯টা-১২টা)' },
    { id: 'weekend-afternoon', label: 'সপ্তাহান্তে (দুপুর ১২টা-৫টা)' },
    { id: 'weekend-evening', label: 'সপ্তাহান্তে (সন্ধ্যা ৫টা-৮টা)' },
    { id: 'flexible', label: 'নমনীয় সময়' },
  ],
  en: [
    { id: 'weekday-morning', label: 'Weekdays (9 AM - 12 PM)' },
    { id: 'weekday-afternoon', label: 'Weekdays (12 PM - 5 PM)' },
    { id: 'weekday-evening', label: 'Weekdays (5 PM - 8 PM)' },
    { id: 'weekend-morning', label: 'Weekends (9 AM - 12 PM)' },
    { id: 'weekend-afternoon', label: 'Weekends (12 PM - 5 PM)' },
    { id: 'weekend-evening', label: 'Weekends (5 PM - 8 PM)' },
    { id: 'flexible', label: 'Flexible Hours' },
  ],
};
