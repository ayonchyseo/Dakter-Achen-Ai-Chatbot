import { Doctor } from '../../types/doctor';

export const CHILD_DOCTORS: Doctor[] = [
  {
    slug: 'prof-dr-pranab-kumar-chowdhury',
    name: 'অধ্যাপক ডাঃ প্রণব কুমার চৌধুরী',
    nameEn: 'Prof. Dr. Pranab Kumar Chowdhury',
    ini: 'PC',
    g: 'M',
    rank: 5,
    specialtyBn: 'শিশু রোগ ও নবজাতক বিশেষজ্ঞ',
    specialtyEn: 'Pediatrics & Neonatal Care Specialist',
    specialtyKey: 'child',
    degrees: 'MBBS, DCH, FCPS (Pediatrics), MD (Pediatrics)',
    designation: 'প্রাক্তন বিভাগীয় প্রধান, শিশু স্বাস্থ্য বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'সিএসসিআর (CSCR)',
        address: '১৬৭৫ ও.আর. নিজাম রোড, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '17:00',
        end: '20:30',
        serial: ['01711-135544', '01819-211440'],
        fee: '১২০০ টাকা'
      }
    ],
    verified: '2026-09-12'
  },
  {
    slug: 'prof-dr-mahmud-ahmed-chowdhury-arzu',
    name: 'অধ্যাপক ডাঃ মাহমুদ আহমেদ চৌধুরী আরজু',
    nameEn: 'Prof. Dr. Mahmud Ahmed Chowdhury Arzu',
    ini: 'MA',
    g: 'M',
    rank: 5,
    specialtyBn: 'শিশু স্বাস্থ্য ও নবজাতক নিবিড় পরিচর্যা (NICU)',
    specialtyEn: 'Pediatrics & Neonatology Specialist',
    specialtyKey: 'child',
    degrees: 'MBBS, DCH, FCPS (Pediatrics), Fellow Neonatology (UK)',
    designation: 'অধ্যাপক ও অধ্যক্ষ, শিশু বিভাগ',
    institution: 'চট্টগ্রাম মা ও শিশু হাসপাতাল মেডিকেল কলেজ',
    ch: [
      {
        name: 'পার্কভিউ হসপিটাল',
        address: '৯৪/১০৩ কাতালগঞ্জ রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '17:30',
        end: '21:00',
        serial: ['01976-022333'],
        fee: '১০০০ – ১২০০ টাকা'
      }
    ],
    verified: '2026-09-08'
  },
  {
    slug: 'prof-dr-md-rezaul-karim-child',
    name: 'অধ্যাপক ডাঃ মোঃ রেজাউল করিম',
    nameEn: 'Prof. Dr. Md. Rezaul Karim',
    ini: 'RK',
    g: 'M',
    rank: 5,
    specialtyBn: 'শিশু রোগ ও পেডিয়াট্রিক নেফ্রোলজি',
    specialtyEn: 'Pediatric Nephrology & Child Health',
    specialtyKey: 'child',
    degrees: 'MBBS, FCPS (Pediatrics), MD (Pediatric Nephrology)',
    designation: 'অধ্যাপক, শিশু রোগ বিভাগ',
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
    verified: '2026-09-10'
  },
  {
    slug: 'dr-mohammad-sakil-child',
    name: 'ডাঃ মোহাম্মদ শাকিল',
    nameEn: 'Dr. Mohammad Sakil',
    ini: 'MS',
    g: 'M',
    rank: 4,
    specialtyBn: 'শিশু রোগ, নিউট্রিলেশন ও অ্যাজমা বিশেষজ্ঞ',
    specialtyEn: 'Pediatric Pulmonology & Allergy',
    specialtyKey: 'child',
    degrees: 'MBBS, BCS (Health), MD (Pediatrics)',
    designation: 'সহযোগী অধ্যাপক, শিশু বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'এপিক হেলথ কেয়ার',
        address: '১৯ কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Tue', 'Wed', 'Thu'],
        start: '17:00',
        end: '20:30',
        serial: ['01984-499600'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-04'
  },
  {
    slug: 'dr-md-jahedul-islam-child',
    name: 'ডাঃ মোঃ জাহেদুল ইসলাম',
    nameEn: 'Dr. Md. Jahedul Islam',
    ini: 'JI',
    g: 'M',
    rank: 4,
    specialtyBn: 'নবজাতক ও শিশু বিশেষজ্ঞ',
    specialtyEn: 'Neonatologist & Child Specialist',
    specialtyKey: 'child',
    degrees: 'MBBS, DCH, FCPS (Pediatrics)',
    designation: 'সহকারী অধ্যাপক, নবজাতক বিভাগ',
    institution: 'চট্টগ্রাম মা ও শিশু হাসপাতাল',
    ch: [
      {
        name: 'শেভরন ক্লিনিক্যাল ল্যাবরেটরি',
        address: '১২/১২ ও.আর. নিজাম রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Mon', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01711-789012'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-08-27'
  },
  {
    slug: 'dr-anupam-sen-child',
    name: 'ডাঃ অনুপম সেন',
    nameEn: 'Dr. Anupam Sen',
    ini: 'AS',
    g: 'M',
    rank: 4,
    specialtyBn: 'শিশু নিউরোলজি ও বিকাশজনিত রোগ',
    specialtyEn: 'Pediatric Neurology & Child Development',
    specialtyKey: 'child',
    degrees: 'MBBS, MD (Pediatrics), Fellow Pediatric Neurology',
    designation: 'সহকারী অধ্যাপক, শিশু বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'ন্যাশনাল হাসপাতাল চট্টগ্রাম',
        address: '১৪/১৫ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '17:30',
        end: '20:30',
        serial: ['01827-556677'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-01'
  },
  {
    slug: 'dr-shaheen-akhter-child',
    name: 'ডাঃ শাহীন আক্তার',
    nameEn: 'Dr. Shaheen Akhter',
    ini: 'SA',
    g: 'F',
    rank: 4,
    specialtyBn: 'শিশু রোগ ও পুষ্টি বিশেষজ্ঞ',
    specialtyEn: 'Pediatrics & Child Nutrition',
    specialtyKey: 'child',
    degrees: 'MBBS, DCH (DU), FCPS (Pediatrics)',
    designation: 'কনসালটেন্ট, শিশু বিভাগ',
    institution: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
    ch: [
      {
        name: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
        address: 'জাকির হোসেন রোড, পাহাড়তলী, চট্টগ্রাম',
        area: 'Pahartali',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '09:00',
        end: '14:00',
        serial: ['09610847847'],
        fee: '১২০০ টাকা'
      }
    ],
    verified: '2026-08-20'
  },
  {
    slug: 'dr-md-nazmul-haque-child',
    name: 'ডাঃ মোঃ নাজমুল হক',
    nameEn: 'Dr. Md. Nazmul Haque',
    ini: 'NH',
    g: 'M',
    rank: 3,
    specialtyBn: 'শিশু ও কিশোর রোগ বিশেষজ্ঞ',
    specialtyEn: 'Child & Adolescent Care',
    specialtyKey: 'child',
    degrees: 'MBBS, BCS (Health), DCH, MD (Pediatrics)',
    designation: 'সহকারী অধ্যাপক, শিশু স্বাস্থ্য',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'ম্যাক্স হাসপাতাল চট্টগ্রাম',
        address: '৩৫/৩৬ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Sun', 'Tue', 'Thu'],
        start: '18:00',
        end: '20:30',
        serial: ['01713-998811'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-09-07'
  },
  {
    slug: 'dr-abu-sayeed-child',
    name: 'ডাঃ আবু সাঈদ',
    nameEn: 'Dr. Abu Sayeed',
    ini: 'AS',
    g: 'M',
    rank: 4,
    specialtyBn: 'শিশু কার্ডিওলজি (শিশুদের হৃদরোগ)',
    specialtyEn: 'Pediatric Cardiology',
    specialtyKey: 'child',
    degrees: 'MBBS, DCH, MD (Pediatrics), Fellow Pediatric Cardiology',
    designation: 'সহযোগী অধ্যাপক, শিশু কার্ডিওলজি',
    institution: 'চট্টগ্রাম মা ও শিশু হাসপাতাল',
    ch: [
      {
        name: 'সিএসসিআর (CSCR)',
        address: '১৬৭৫ ও.আর. নিজাম রোড, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01711-135544'],
        fee: '১২০০ টাকা'
      }
    ],
    verified: '2026-09-03'
  },
  {
    slug: 'dr-sanjoy-kumar-dey-child',
    name: 'ডাঃ সঞ্জয় কুমার দে',
    nameEn: 'Dr. Sanjoy Kumar Dey',
    ini: 'SD',
    g: 'M',
    rank: 3,
    specialtyBn: 'নবজাতক ও শিশু বিশেষজ্ঞ',
    specialtyEn: 'Neonatology & Child Health',
    specialtyKey: 'child',
    degrees: 'MBBS, MD (Pediatrics), Fellowship Neonatal Intensive Care',
    designation: 'কনসালটেন্ট, এনআইসিইউ (NICU)',
    institution: 'পার্কভিউ হসপিটাল, চট্টগ্রাম',
    ch: [
      {
        name: 'পার্কভিউ হসপিটাল',
        address: '৯৪/১০৩ কাতালগঞ্জ রোড, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Mon', 'Wed', 'Thu'],
        start: '17:00',
        end: '20:00',
        serial: ['01976-022333'],
        fee: '৮০০ – ১০০০ টাকা'
      }
    ],
    verified: '2026-08-31'
  },
  {
    slug: 'dr-selim-reza-child',
    name: 'ডাঃ সেলিম রেজা',
    nameEn: 'Dr. Selim Reza',
    ini: 'SR',
    g: 'M',
    rank: 3,
    specialtyBn: 'শিশুরোগ ও টিকাদান পরামর্শক',
    specialtyEn: 'Pediatric General Medicine',
    specialtyKey: 'child',
    degrees: 'MBBS, DCH (BSMMU), MCPS',
    designation: 'সিনিয়র কনসালটেন্ট, শিশু বিভাগ',
    institution: 'চট্টগ্রাম জেনারেল হাসপাতাল',
    ch: [
      {
        name: 'ইবনে সিনা ডায়াগনস্টিক সেন্টার',
        address: 'জিইসি মোড়, চট্টগ্রাম',
        area: 'GEC Circle',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '17:30',
        end: '20:30',
        serial: ['01886-383838'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-09-09'
  },
  {
    slug: 'dr-tahmina-begum-child',
    name: 'ডাঃ তাহমিনা বেগম',
    nameEn: 'Dr. Tahmina Begum',
    ini: 'TB',
    g: 'F',
    rank: 4,
    specialtyBn: 'শিশু গ্যাস্ট্রোএন্টারোলজি ও পুষ্টি',
    specialtyEn: 'Pediatric Gastroenterology',
    specialtyKey: 'child',
    degrees: 'MBBS, FCPS (Pediatrics), MD (Child Health)',
    designation: 'সহযোগী অধ্যাপক, শিশু বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'পপুলার ডায়াগনস্টিক সেন্টার',
        address: '২০/বি কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['09613-787810'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-08-25'
  },
  {
    slug: 'dr-kamrul-hasan-child',
    name: 'ডাঃ কামরুল হাসান',
    nameEn: 'Dr. Kamrul Hasan',
    ini: 'KH',
    g: 'M',
    rank: 3,
    specialtyBn: 'শিশু রোগ, নিউমোনিয়া ও শ্বাসকষ্ট',
    specialtyEn: 'Pediatrics & Pediatric Pulmonology',
    specialtyKey: 'child',
    degrees: 'MBBS, BCS (Health), MD (Pediatrics)',
    designation: 'সহকারী অধ্যাপক, শিশু বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'বেলভিউ ডায়াগনস্টিক সেন্টার',
        address: 'ও.আর. নিজাম রোড, গোলপাহাড় মোড়, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Mon', 'Tue', 'Wed'],
        start: '17:00',
        end: '20:00',
        serial: ['01711-223344'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-09-05'
  },
  {
    slug: 'dr-sharmin-afroze-child',
    name: 'ডাঃ শারমিন আফরোজ',
    nameEn: 'Dr. Sharmin Afroze',
    ini: 'SA',
    g: 'F',
    rank: 4,
    specialtyBn: 'নবজাতক নিবিড় পরিচর্যা ও শিশু বিশেষজ্ঞ',
    specialtyEn: 'Neonatal & Child Health Care',
    specialtyKey: 'child',
    degrees: 'MBBS, FCPS (Pediatrics), Fellow NICU',
    designation: 'কনসালটেন্ট, পেডিয়াট্রিক ইউনিট',
    institution: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
    ch: [
      {
        name: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
        address: 'জাকির হোসেন রোড, পাহাড়তলী, চট্টগ্রাম',
        area: 'Pahartali',
        days: ['Sat', 'Sun', 'Tue', 'Wed', 'Thu'],
        start: '10:00',
        end: '15:30',
        serial: ['09610847847'],
        fee: '১২০০ টাকা'
      }
    ],
    verified: '2026-09-02'
  },
  {
    slug: 'dr-iftekhar-alam-child',
    name: 'ডাঃ ইফতেখার আলম',
    nameEn: 'Dr. Iftekhar Alam',
    ini: 'IA',
    g: 'M',
    rank: 3,
    specialtyBn: 'শিশু রোগ ও এলার্জি বিশেষজ্ঞ',
    specialtyEn: 'Pediatrician & Child Allergy Care',
    specialtyKey: 'child',
    degrees: 'MBBS, DCH, FCPS (Part-II)',
    designation: 'রেজিস্ট্রার, শিশু স্বাস্থ্য',
    institution: 'মা ও শিশু হাসপাতাল চট্টগ্রাম',
    ch: [
      {
        name: 'আগ্রাবাদ শিশু নিরাময় কেন্দ্র',
        address: 'বাদামতলী মোড়, আগ্রাবাদ, চট্টগ্রাম',
        area: 'Agrabad',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '17:30',
        end: '20:30',
        serial: ['01817-554433'],
        fee: '৬০০ টাকা'
      }
    ],
    verified: '2026-08-18'
  },
  {
    slug: 'dr-mohammad-asaduzzaman-child',
    name: 'ডাঃ মোহাম্মদ আসাদুজ্জামান',
    nameEn: 'Dr. Mohammad Asaduzzaman',
    ini: 'MA',
    g: 'M',
    rank: 4,
    specialtyBn: 'শিশু বিশেষজ্ঞ ও হেমাটোলজি-অনকোলজি',
    specialtyEn: 'Pediatric Hematology & Oncology',
    specialtyKey: 'child',
    degrees: 'MBBS, FCPS (Pediatrics), MD (Pediatric Hematology)',
    designation: 'সহযোগী অধ্যাপক, শিশু রক্তরোগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'এপিক হেলথ কেয়ার',
        address: '১৯ কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Mon', 'Wed'],
        start: '18:00',
        end: '21:00',
        serial: ['01984-499600'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-11'
  },
  {
    slug: 'dr-nargis-sultana-child',
    name: 'ডাঃ নারগিস সুলতানা',
    nameEn: 'Dr. Nargis Sultana',
    ini: 'NS',
    g: 'F',
    rank: 3,
    specialtyBn: 'শিশুরোগ ও বৃদ্ধি-বিকাশ বিশেষজ্ঞ',
    specialtyEn: 'Child Health & Growth Monitoring',
    specialtyKey: 'child',
    degrees: 'MBBS, DCH (DU), MCPS (Pediatrics)',
    designation: 'কনসালটেন্ট, শিশু স্বাস্থ্য',
    institution: 'মেট্রোপলিটন হাসপাতাল চট্টগ্রাম',
    ch: [
      {
        name: 'মেট্রোপলিটন হাসপাতাল',
        address: '৬৯৮/বি ও.আর. নিজাম রোড, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sun', 'Tue', 'Wed', 'Thu'],
        start: '17:00',
        end: '20:00',
        serial: ['01814-652399'],
        fee: '৭০০ টাকা'
      }
    ],
    verified: '2026-08-23'
  },
  {
    slug: 'dr-biswajit-chowdhury-child',
    name: 'ডাঃ বিশ্বজিৎ চৌধুরী',
    nameEn: 'Dr. Biswajit Chowdhury',
    ini: 'BC',
    g: 'M',
    rank: 4,
    specialtyBn: 'শিশু সার্জারি ও শিশু ইউরোলজি বিশেষজ্ঞ',
    specialtyEn: 'Pediatric Surgery & Urology',
    specialtyKey: 'child',
    degrees: 'MBBS, MS (Pediatric Surgery)',
    designation: 'সহকারী অধ্যাপক, শিশু সার্জারি বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'সিএসসিআর (CSCR)',
        address: '১৬৭৫ ও.আর. নিজাম রোড, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Tue', 'Thu'],
        start: '18:00',
        end: '20:30',
        serial: ['01711-135544'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-06'
  },
  {
    slug: 'dr-md-mizanur-rahman-child',
    name: 'ডাঃ মোঃ মিজানুর রহমান',
    nameEn: 'Dr. Md. Mizanur Rahman',
    ini: 'MR',
    g: 'M',
    rank: 3,
    specialtyBn: 'শিশু রোগ ও সাধারণ স্বাস্থ্য সেবা',
    specialtyEn: 'General Pediatrics',
    specialtyKey: 'child',
    degrees: 'MBBS (CMC), DCH (BSMMU)',
    designation: 'আবাসিক শিশু চিকিৎসক',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'ন্যাশনাল হাসপাতাল চট্টগ্রাম',
        address: '১৪/১৫ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Sun', 'Mon', 'Wed'],
        start: '17:30',
        end: '20:00',
        serial: ['01827-556677'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-08-16'
  },
  {
    slug: 'dr-masud-rana-child',
    name: 'ডাঃ মাসুদ রানা',
    nameEn: 'Dr. Masud Rana',
    ini: 'MR',
    g: 'M',
    rank: 3,
    specialtyBn: 'নবজাতক পরিচর্যা ও শিশু বিশেষজ্ঞ',
    specialtyEn: 'Neonatal & Child Care',
    specialtyKey: 'child',
    degrees: 'MBBS, MD (Pediatrics)',
    designation: 'সহকারী অধ্যাপক, শিশু বিভাগ',
    institution: 'ইউএসটিসি মেডিকেল কলেজ',
    ch: [
      {
        name: 'পার্কভিউ হসপিটাল',
        address: '৯৪/১০৩ কাতালগঞ্জ রোড, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sun', 'Mon', 'Tue', 'Thu'],
        start: '18:00',
        end: '20:30',
        serial: ['01976-022333'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-09-13'
  },
  {
    slug: 'dr-shahida-sultana-child',
    name: 'ডাঃ শাহিদা সুলতানা',
    nameEn: 'Dr. Shahida Sultana',
    ini: 'SS',
    g: 'F',
    rank: 3,
    specialtyBn: 'শিশু বিকাশ ও অটিজম ব্যবস্থাপনা বিশেষজ্ঞ',
    specialtyEn: 'Child Development & Autism Specialist',
    specialtyKey: 'child',
    degrees: 'MBBS, DCH, Fellow Child Development',
    designation: 'কনসালটেন্ট, শিশু বিকাশ কেন্দ্র',
    institution: 'মা ও শিশু হাসপাতাল',
    ch: [
      {
        name: 'শেভরন ক্লিনিক্যাল ল্যাবরেটরি',
        address: '১২/১২ ও.আর. নিজাম রোড, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Tue', 'Wed'],
        start: '16:30',
        end: '19:30',
        serial: ['01711-789012'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-08-29'
  },
  {
    slug: 'dr-faruk-hossain-child',
    name: 'ডাঃ ফারুক হোসেন',
    nameEn: 'Dr. Faruk Hossain',
    ini: 'FH',
    g: 'M',
    rank: 3,
    specialtyBn: 'শিশু রোগ, ডায়রিয়া ও পানিশূন্যতা বিশেষজ্ঞ',
    specialtyEn: 'Pediatric Acute Care',
    specialtyKey: 'child',
    degrees: 'MBBS, DCH (DU)',
    designation: 'মেডিকেল অফিসার, শিশু বিভাগ',
    institution: 'চট্টগ্রাম জেনারেল হাসপাতাল',
    ch: [
      {
        name: 'হালিশহর শিশু ক্লিনিক',
        address: 'এইচ-ব্লক, হালিশহর হাউজিং এস্টেট, চট্টগ্রাম',
        area: 'Halishahar',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01819-776655'],
        fee: '৫০০ – ৭০০ টাকা'
      }
    ],
    verified: '2026-09-01'
  }
];
