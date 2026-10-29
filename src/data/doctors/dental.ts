import { Doctor } from '../../types/doctor';

export const DENTAL_DOCTORS: Doctor[] = [
  {
    slug: 'dr-maruf-bin-habib',
    name: 'ডাঃ মারুফ বিন হাবিব',
    nameEn: 'Dr. Maruf Bin Habib',
    ini: 'MH',
    g: 'M',
    rank: 4,
    specialtyBn: 'দন্ত চিকিৎসা ও মুখগহ্বর সার্জন',
    specialtyEn: 'Dental Surgery & Implantology',
    specialtyKey: 'dental',
    degrees: 'BDS (DU), PGT (Oral Surgery), Advanced Implantology (Korea)',
    designation: 'চিফ ডেন্টাল সার্জন ও ইমপ্ল্যান্টোলজিস্ট',
    institution: 'শেভরন ডেন্টাল সেন্টার, চট্টগ্রাম',
    ch: [
      {
        name: 'শেভরন ক্লিনিক্যাল ল্যাবরেটরি (ডেন্টাল ইউনিট)',
        address: '১২/১২ ও.আর. নিজাম রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '16:00',
        end: '21:00',
        serial: ['01841-889900', '01712-445566'],
        fee: '৫০০ – ৮০০ টাকা'
      }
    ],
    verified: '2026-09-08'
  },
  {
    slug: 'prof-dr-shamsul-alam-dental',
    name: 'অধ্যাপক ডাঃ শামসুল আলম',
    nameEn: 'Prof. Dr. Shamsul Alam',
    ini: 'SA',
    g: 'M',
    rank: 5,
    specialtyBn: 'ওরাল অ্যান্ড ম্যাক্সিলোফেসিয়াল সার্জারি বিশেষজ্ঞ',
    specialtyEn: 'Oral & Maxillofacial Surgery Specialist',
    specialtyKey: 'dental',
    degrees: 'BDS, FCPS (Oral & Maxillofacial Surgery), FICS',
    designation: 'প্রাক্তন বিভাগীয় প্রধান, ওরাল অ্যান্ড ম্যাক্সিলোফেসিয়াল সার্জারি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ ডেন্টাল ইউনিট',
    ch: [
      {
        name: 'সিএসসিআর (CSCR)',
        address: '১৬৭৫ ও.আর. নিজাম রোড, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '17:00',
        end: '20:30',
        serial: ['01711-135544', '01819-211440'],
        fee: '১০০০ – ১২০০ টাকা'
      }
    ],
    verified: '2026-09-12'
  },
  {
    slug: 'dr-nasir-uddin-dental',
    name: 'ডাঃ নাসির উদ্দিন',
    nameEn: 'Dr. Nasir Uddin',
    ini: 'NU',
    g: 'M',
    rank: 4,
    specialtyBn: 'অর্থোডন্টিক্স (দাঁত বাঁকা ও ফাঁকা সোজা করা) বিশেষজ্ঞ',
    specialtyEn: 'Orthodontics & Dentofacial Orthopedics',
    specialtyKey: 'dental',
    degrees: 'BDS, FCPS (Orthodontics), MS (Ortho)',
    designation: 'সহযোগী অধ্যাপক, অর্থোডন্টিক্স',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'পপুলার ডায়াগনস্টিক সেন্টার',
        address: '২০/বি কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Mon', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:30',
        serial: ['09613-787810'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-05'
  },
  {
    slug: 'dr-md-mahbubur-rahman-dental',
    name: 'ডাঃ মোঃ মাহবুবুর রহমান',
    nameEn: 'Dr. Md. Mahbubur Rahman',
    ini: 'MR',
    g: 'M',
    rank: 4,
    specialtyBn: 'কনজারভেটিভ ডেন্টিস্ট্রি ও রুট ক্যানেল বিশেষজ্ঞ',
    specialtyEn: 'Endodontics & Root Canal Specialist',
    specialtyKey: 'dental',
    degrees: 'BDS, FCPS (Conservative Dentistry & Endodontics)',
    designation: 'সহকারী অধ্যাপক, ডেন্টাল ইউনিট',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'পার্কভিউ হসপিটাল',
        address: '৯৪/১০৩ কাতালগঞ্জ রোড, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Tue', 'Wed', 'Thu'],
        start: '17:30',
        end: '20:30',
        serial: ['01976-022333'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-09-01'
  },
  {
    slug: 'dr-tanveer-ahmed-dental',
    name: 'ডাঃ তানভীর আহমেদ',
    nameEn: 'Dr. Tanveer Ahmed',
    ini: 'TA',
    g: 'M',
    rank: 4,
    specialtyBn: 'প্রস্থোডন্টিক্স (কৃত্রিম দাঁত ও ক্রাউন ব্রিজ) বিশেষজ্ঞ',
    specialtyEn: 'Prosthodontics & Crown-Bridge Specialist',
    specialtyKey: 'dental',
    degrees: 'BDS, MS (Prosthodontics), Fellow Dental Implant',
    designation: 'সহকারী অধ্যাপক, প্রস্থোডন্টিক্স',
    institution: 'চট্টগ্রাম মা ও শিশু হাসপাতাল মেডিকেল কলেজ',
    ch: [
      {
        name: 'এপিক হেলথ কেয়ার',
        address: '১৯ কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Mon', 'Wed', 'Thu'],
        start: '17:00',
        end: '20:30',
        serial: ['01984-499600'],
        fee: '৮০০ – ১০০০ টাকা'
      }
    ],
    verified: '2026-08-28'
  },
  {
    slug: 'dr-sharmin-akter-dental',
    name: 'ডাঃ শারমিন আক্তার',
    nameEn: 'Dr. Sharmin Akter',
    ini: 'SA',
    g: 'F',
    rank: 3,
    specialtyBn: 'শিশু দন্ত চিকিৎসা ও কসমেটিক ফিলিং',
    specialtyEn: 'Pediatric Dentistry & Cosmetic Filling',
    specialtyKey: 'dental',
    degrees: 'BDS, PGT (Pediatric Dentistry), MPH',
    designation: 'কনসালটেন্ট ডেন্টাল সার্জন',
    institution: 'ন্যাশনাল হাসপাতাল চট্টগ্রাম',
    ch: [
      {
        name: 'ন্যাশনাল হাসপাতাল চট্টগ্রাম',
        address: '১৪/১৫ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Sun', 'Tue', 'Thu'],
        start: '17:30',
        end: '20:30',
        serial: ['01827-556677'],
        fee: '৭০০ টাকা'
      }
    ],
    verified: '2026-09-10'
  },
  {
    slug: 'dr-farzana-chowdhury-dental',
    name: 'ডাঃ ফারজানা চৌধুরী',
    nameEn: 'Dr. Farzana Chowdhury',
    ini: 'FC',
    g: 'F',
    rank: 4,
    specialtyBn: 'পেরিওডন্টোলজি (মাড়ির রোগ ও রক্ত পড়া) বিশেষজ্ঞ',
    specialtyEn: 'Periodontology & Gum Specialist',
    specialtyKey: 'dental',
    degrees: 'BDS, FCPS (Periodontology)',
    designation: 'সহকারী অধ্যাপক, ডেন্টাল ইউনিট',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'ম্যাক্স হাসপাতাল চট্টগ্রাম',
        address: '৩৫/৩৬ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Sun', 'Mon', 'Wed'],
        start: '18:00',
        end: '21:00',
        serial: ['01713-998811'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-09-02'
  },
  {
    slug: 'dr-imran-hossain-dental',
    name: 'ডাঃ ইমরান হোসেন',
    nameEn: 'Dr. Imran Hossain',
    ini: 'IH',
    g: 'M',
    rank: 4,
    specialtyBn: 'ডেন্টাল ইমপ্ল্যান্ট ও ম্যাক্সিলোফেসিয়াল সার্জন',
    specialtyEn: 'Dental Implants & Maxillofacial Care',
    specialtyKey: 'dental',
    degrees: 'BDS, MS (Oral & Maxillofacial Surgery)',
    designation: 'কনসালটেন্ট, ওরাল সার্জারি বিভাগ',
    institution: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
    ch: [
      {
        name: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
        address: 'জাকির হোসেন রোড, পাহাড়তলী, চট্টগ্রাম',
        area: 'Pahartali',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '09:30',
        end: '14:30',
        serial: ['09610847847'],
        fee: '১২০০ টাকা'
      }
    ],
    verified: '2026-08-25'
  },
  {
    slug: 'dr-ashikur-rahman-dental',
    name: 'ডাঃ আশিকুর রহমান',
    nameEn: 'Dr. Ashikur Rahman',
    ini: 'AR',
    g: 'M',
    rank: 3,
    specialtyBn: 'স্মাইল ডিজাইন ও লেজার ডেন্টিস্ট্রি',
    specialtyEn: 'Aesthetic Dentistry & Smile Designing',
    specialtyKey: 'dental',
    degrees: 'BDS (CU), Fellow Cosmetic Dentistry (India)',
    designation: 'চিফ ডেন্টিস্ট',
    institution: 'মেট্রোপলিটন হাসপাতাল চট্টগ্রাম',
    ch: [
      {
        name: 'মেট্রোপলিটন হাসপাতাল',
        address: '৬৯৮/বি ও.আর. নিজাম রোড, গোলপাহাড়, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Mon', 'Wed', 'Thu'],
        start: '17:30',
        end: '20:30',
        serial: ['01814-652399'],
        fee: '৬০০ – ৮০০ টাকা'
      }
    ],
    verified: '2026-09-06'
  },
  {
    slug: 'dr-nazmul-hasan-dental',
    name: 'ডাঃ নাজমুল হাসান',
    nameEn: 'Dr. Nazmul Hasan',
    ini: 'NH',
    g: 'M',
    rank: 3,
    specialtyBn: 'রুট ক্যানেল ও ডেন্টাল ক্রাউন বিশেষজ্ঞ',
    specialtyEn: 'Single-sitting Root Canal Specialist',
    specialtyKey: 'dental',
    degrees: 'BDS, PGT (Endodontics)',
    designation: 'কনসালটেন্ট, দন্ত বিভাগ',
    institution: 'ইবনে সিনা ডায়াগনস্টিক সেন্টার',
    ch: [
      {
        name: 'ইবনে সিনা ডায়াগনস্টিক সেন্টার',
        address: 'জিইসি মোড়, চট্টগ্রাম',
        area: 'GEC Circle',
        days: ['Sat', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '17:00',
        end: '20:00',
        serial: ['01886-383838'],
        fee: '৬০০ টাকা'
      }
    ],
    verified: '2026-08-20'
  },
  {
    slug: 'dr-salma-khatun-dental',
    name: 'ডাঃ সালমা খাতুন',
    nameEn: 'Dr. Salma Khatun',
    ini: 'SK',
    g: 'F',
    rank: 3,
    specialtyBn: 'মহিলা ও শিশুদের দাঁতের স্কেলিং ও পলিশিং',
    specialtyEn: 'General Dental Surgeon & Prophylaxis',
    specialtyKey: 'dental',
    degrees: 'BDS (DU), MPH',
    designation: 'ডেন্টাল সার্জন',
    institution: 'মা ও শিশু হাসপাতাল',
    ch: [
      {
        name: 'বেলভিউ ডায়াগনস্টিক সেন্টার',
        address: 'ও.আর. নিজাম রোড, গোলপাহাড় মোড়, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Sun', 'Tue', 'Thu'],
        start: '17:30',
        end: '20:00',
        serial: ['01711-223344'],
        fee: '৬০০ টাকা'
      }
    ],
    verified: '2026-09-03'
  },
  {
    slug: 'dr-rashed-chowdhury-dental',
    name: 'ডাঃ রাশেদ চৌধুরী',
    nameEn: 'Dr. Rashed Chowdhury',
    ini: 'RC',
    g: 'M',
    rank: 4,
    specialtyBn: 'মুখের ক্যান্সার স্ক্রিনিং ও মুখমণ্ডল সার্জারি',
    specialtyEn: 'Oral Oncology & Maxillofacial Trauma',
    specialtyKey: 'dental',
    degrees: 'BDS, FCPS (Oral Surgery)',
    designation: 'সহকারী অধ্যাপক, ওরাল সার্জারি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'সিএসসিআর (CSCR)',
        address: '১৬৭৫ ও.আর. নিজাম রোড, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Tue', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01711-135544'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-09'
  },
  {
    slug: 'dr-faisal-karim-dental',
    name: 'ডাঃ ফয়সাল করিম',
    nameEn: 'Dr. Faisal Karim',
    ini: 'FK',
    g: 'M',
    rank: 3,
    specialtyBn: 'দাঁত তোলা, আক্কেল দাঁত ও রুট ক্যানেল সার্জন',
    specialtyEn: 'Impacted Wisdom Tooth & Dental Surgery',
    specialtyKey: 'dental',
    degrees: 'BDS (CMC), PGT (Oral Surgery)',
    designation: 'মেডিকেল অফিসার, ডেন্টাল ইউনিট',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'পপুলার ডায়াগনস্টিক সেন্টার',
        address: '২০/বি কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sun', 'Mon', 'Wed', 'Thu'],
        start: '18:00',
        end: '20:30',
        serial: ['09613-787810'],
        fee: '৭০০ টাকা'
      }
    ],
    verified: '2026-08-18'
  },
  {
    slug: 'dr-nusrat-jahan-shimu-dental',
    name: 'ডাঃ নুসরাত জাহান শিমু',
    nameEn: 'Dr. Nusrat Jahan Shimu',
    ini: 'NS',
    g: 'F',
    rank: 3,
    specialtyBn: 'অর্থোডন্টিক্স ও আঁকাবাঁকা দাঁতের ক্লিপ চিকিৎসা',
    specialtyEn: 'Clear Aligners & Orthodontic Braces',
    specialtyKey: 'dental',
    degrees: 'BDS, MS (Orthodontics Part-II)',
    designation: 'কনসালটেন্ট, অর্থোডন্টিক্স',
    institution: 'পার্কভিউ হসপিটাল',
    ch: [
      {
        name: 'পার্কভিউ হসপিটাল',
        address: '৯৪/১০৩ কাতালগঞ্জ রোড, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Mon', 'Wed', 'Thu'],
        start: '17:30',
        end: '20:30',
        serial: ['01976-022333'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-09-07'
  },
  {
    slug: 'dr-mahmudul-hasan-dental',
    name: 'ডাঃ মাহমুদুল হাসান',
    nameEn: 'Dr. Mahmudul Hasan',
    ini: 'MH',
    g: 'M',
    rank: 3,
    specialtyBn: 'লেজার ব্লিচিং ও আধুনিক ফিলিং বিশেষজ্ঞ',
    specialtyEn: 'Cosmetic Dentistry & Teeth Whitening',
    specialtyKey: 'dental',
    degrees: 'BDS, Diploma in Laser Dentistry',
    designation: 'সিনিয়র ডেন্টাল সার্জন',
    institution: 'এপিক হেলথ কেয়ার',
    ch: [
      {
        name: 'এপিক হেলথ কেয়ার',
        address: '১৯ কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Tue', 'Wed'],
        start: '18:00',
        end: '21:00',
        serial: ['01984-499600'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-09-04'
  },
  {
    slug: 'dr-rubayet-hossain-dental',
    name: 'ডাঃ রুবায়েত হোসেন',
    nameEn: 'Dr. Rubayet Hossain',
    ini: 'RH',
    g: 'M',
    rank: 4,
    specialtyBn: 'দাঁত প্রতিস্থাপন ও ফুল মাউথ রিহ্যাবিলিটেশন',
    specialtyEn: 'Full Mouth Rehabilitation & Implants',
    specialtyKey: 'dental',
    degrees: 'BDS, FCPS (Prosthodontics)',
    designation: 'সহকারী অধ্যাপক, ডেন্টাল',
    institution: 'মা ও শিশু হাসপাতাল চট্টগ্রাম',
    ch: [
      {
        name: 'শেভরন ক্লিনিক্যাল ল্যাবরেটরি',
        address: '১২/১২ ও.আর. নিজাম রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Mon', 'Thu'],
        start: '17:00',
        end: '20:00',
        serial: ['01711-789012'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-08-30'
  },
  {
    slug: 'dr-sadia-afrin-dental',
    name: 'ডাঃ সাদিয়া আফরিন',
    nameEn: 'Dr. Sadia Afrin',
    ini: 'SA',
    g: 'F',
    rank: 3,
    specialtyBn: 'দন্ত রোগ ও মাড়ির যত্ন বিশেষজ্ঞ',
    specialtyEn: 'Periodontics & Preventive Dentistry',
    specialtyKey: 'dental',
    degrees: 'BDS (DU), PGT',
    designation: 'ডেন্টাল সার্জন',
    institution: 'চট্টগ্রাম বন্দর ট্রাস্ট হাসপাতাল',
    ch: [
      {
        name: 'আগ্রাবাদ ডেন্টাল কেয়ার',
        address: 'কমার্স কলেজ রোড, আগ্রাবাদ, চট্টগ্রাম',
        area: 'Agrabad',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01817-112233'],
        fee: '৫০০ – ৭০০ টাকা'
      }
    ],
    verified: '2026-08-15'
  },
  {
    slug: 'dr-saikat-barua-dental',
    name: 'ডাঃ সৈকত বড়ুয়া',
    nameEn: 'Dr. Saikat Barua',
    ini: 'SB',
    g: 'M',
    rank: 4,
    specialtyBn: 'মুখমণ্ডল ফ্র্যাকচার ও ওরাল প্যাথলজি সার্জন',
    specialtyEn: 'Maxillofacial Trauma & Oral Surgery',
    specialtyKey: 'dental',
    degrees: 'BDS, MS (Oral & Maxillofacial Surgery)',
    designation: 'সহকারী অধ্যাপক, ওরাল সার্জারি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'ন্যাশনাল হাসপাতাল চট্টগ্রাম',
        address: '১৪/১৫ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Mon', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01827-556677'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-11'
  },
  {
    slug: 'dr-arifur-rahman-dental',
    name: 'ডাঃ আরিফুর রহমান',
    nameEn: 'Dr. Arifur Rahman',
    ini: 'AR',
    g: 'M',
    rank: 3,
    specialtyBn: 'সাধারণ দন্ত চিকিৎসা ও ক্যাভিটি ফিলিং',
    specialtyEn: 'General Dental Practice',
    specialtyKey: 'dental',
    degrees: 'BDS (CMC)',
    designation: 'সিনিয়র মেডিকেল অফিসার',
    institution: 'রেলওয়ে হাসপাতাল চট্টগ্রাম',
    ch: [
      {
        name: 'হালিশহর ডেন্টাল ক্লিনিক',
        address: 'কে-ব্লক, হালিশহর, চট্টগ্রাম',
        area: 'Halishahar',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '17:30',
        end: '20:30',
        serial: ['01819-446688'],
        fee: '৫০০ টাকা'
      }
    ],
    verified: '2026-08-21'
  },
  {
    slug: 'dr-jannatul-ferdous-dental',
    name: 'ডাঃ জান্নাতুল ফেরদৌস',
    nameEn: 'Dr. Jannatul Ferdous',
    ini: 'JF',
    g: 'F',
    rank: 3,
    specialtyBn: 'দাঁতের ব্যথা উপশম ও শিশু দন্তরোগ পরামর্শক',
    specialtyEn: 'Pediatric & Restorative Dentistry',
    specialtyKey: 'dental',
    degrees: 'BDS, PGT (CMC)',
    designation: 'কনসালটেন্ট ডেন্টাল সার্জন',
    institution: 'মা ও শিশু হাসপাতাল',
    ch: [
      {
        name: 'ম্যাক্স হাসপাতাল চট্টগ্রাম',
        address: '৩৫/৩৬ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sun', 'Tue', 'Wed', 'Thu'],
        start: '17:00',
        end: '19:30',
        serial: ['01713-998811'],
        fee: '৭০০ টাকা'
      }
    ],
    verified: '2026-09-02'
  },
  {
    slug: 'dr-kazi-mominul-islam-dental',
    name: 'ডাঃ কাজী মোমিনুল ইসলাম',
    nameEn: 'Dr. Kazi Mominul Islam',
    ini: 'MI',
    g: 'M',
    rank: 4,
    specialtyBn: 'ওরাল সার্জারি ও চোয়ালের টিউমার বিশেষজ্ঞ',
    specialtyEn: 'Oral Surgery & Jaw Cyst Removal',
    specialtyKey: 'dental',
    degrees: 'BDS, FCPS (Oral & Maxillofacial Surgery)',
    designation: 'কনসালটেন্ট, ওরাল সার্জারি',
    institution: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
    ch: [
      {
        name: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
        address: 'জাকির হোসেন রোড, পাহাড়তলী, চট্টগ্রাম',
        area: 'Pahartali',
        days: ['Sat', 'Sun', 'Mon', 'Wed', 'Thu'],
        start: '10:00',
        end: '15:00',
        serial: ['09610847847'],
        fee: '১২০০ টাকা'
      }
    ],
    verified: '2026-09-09'
  },
  {
    slug: 'dr-wahidur-rahman-dental',
    name: 'ডাঃ ওয়াহিদুর রহমান',
    nameEn: 'Dr. Wahidur Rahman',
    ini: 'WR',
    g: 'M',
    rank: 3,
    specialtyBn: 'লেজার রুট ক্যানেল ও দাঁতের ক্যাপ বসানো',
    specialtyEn: 'Laser Endodontics & Zirconia Crown',
    specialtyKey: 'dental',
    degrees: 'BDS, PGT (Dental Implantology)',
    designation: 'চিফ ডেন্টাল সার্জন',
    institution: 'পার্কভিউ ডেন্টাল উইং',
    ch: [
      {
        name: 'পার্কভিউ হসপিটাল',
        address: '৯৪/১০৩ কাতালগঞ্জ রোড, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Mon', 'Tue'],
        start: '18:00',
        end: '21:00',
        serial: ['01976-022333'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-08-26'
  }
];
