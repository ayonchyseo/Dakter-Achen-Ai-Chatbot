import { Doctor } from '../../types/doctor';

export const KIDNEY_DOCTORS: Doctor[] = [
  {
    slug: 'prof-dr-pradip-kumar-dutta-kidney',
    name: 'অধ্যাপক ডাঃ প্রদীপ কুমার দত্ত',
    nameEn: 'Prof. Dr. Pradip Kumar Dutta',
    ini: 'PD',
    g: 'M',
    rank: 5,
    specialtyBn: 'কিডনি রোগ ও ডায়ালাইসিস বিশেষজ্ঞ',
    specialtyEn: 'Nephrology, Dialysis & Kidney Transplant',
    specialtyKey: 'kidney',
    degrees: 'MBBS, FCPS (Medicine), MD (Nephrology), FRCP (Edin)',
    designation: 'প্রাক্তন বিভাগীয় প্রধান, নেফ্রোলজি বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'সিএসসিআর (CSCR)',
        address: '১৬৭৫ ও.আর. নিজাম রোড, প্রবর্তক মোড়, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '17:00',
        end: '20:30',
        serial: ['01711-135544', '01819-211440'],
        fee: '১২০০ – ১৫০০ টাকা'
      }
    ],
    verified: '2026-09-12'
  },
  {
    slug: 'prof-dr-md-nurul-huda-kidney',
    name: 'অধ্যাপক ডাঃ মোঃ নুরুল হুদা',
    nameEn: 'Prof. Dr. Md. Nurul Huda',
    ini: 'NH',
    g: 'M',
    rank: 5,
    specialtyBn: 'কিডনি ও মূত্রনালীর রোগ বিশেষজ্ঞ',
    specialtyEn: 'Nephrology & Renal Care',
    specialtyKey: 'kidney',
    degrees: 'MBBS, MD (Nephrology), FCPS',
    designation: 'অধ্যাপক ও বিভাগীয় প্রধান, কিডনি বিভাগ',
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
    verified: '2026-09-09'
  },
  {
    slug: 'dr-mohammad-omar-faruk-kidney',
    name: 'ডাঃ মোহাম্মদ ওমর ফারুক',
    nameEn: 'Dr. Mohammad Omar Faruk',
    ini: 'OF',
    g: 'M',
    rank: 4,
    specialtyBn: 'ইউরোলজি ও প্রস্টেট সার্জন',
    specialtyEn: 'Urology & Laser Prostate Surgeon',
    specialtyKey: 'kidney',
    degrees: 'MBBS, MS (Urology), Fellow Endourology',
    designation: 'সহযোগী অধ্যাপক, ইউরোলজি বিভাগ',
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
    verified: '2026-09-04'
  },
  {
    slug: 'dr-md-emran-hossain-kidney',
    name: 'ডাঃ মোঃ এমরান হোসেন',
    nameEn: 'Dr. Md. Emran Hossain',
    ini: 'EH',
    g: 'M',
    rank: 4,
    specialtyBn: 'কিডনি রোগ ও উচ্চ রক্তচাপ বিশেষজ্ঞ',
    specialtyEn: 'Nephrology & Renal Hypertension',
    specialtyKey: 'kidney',
    degrees: 'MBBS, BCS (Health), MD (Nephrology)',
    designation: 'সহযোগী অধ্যাপক, নেফ্রোলজি',
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
    verified: '2026-09-01'
  },
  {
    slug: 'dr-md-shahnewaz-kidney',
    name: 'ডাঃ মোঃ শাহনেওয়াজ',
    nameEn: 'Dr. Md. Shahnewaz',
    ini: 'SN',
    g: 'M',
    rank: 4,
    specialtyBn: 'ইউরোলজি, কিডনি পাথর ও লেজার সার্জন',
    specialtyEn: 'Endourology & Kidney Stone Specialist',
    specialtyKey: 'kidney',
    degrees: 'MBBS, FCPS (Surgery), MS (Urology)',
    designation: 'সহকারী অধ্যাপক, ইউরোলজি',
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
    verified: '2026-08-30'
  },
  {
    slug: 'dr-mohammad-farhad-kidney',
    name: 'ডাঃ মোহাম্মদ ফরহাদ',
    nameEn: 'Dr. Mohammad Farhad',
    ini: 'MF',
    g: 'M',
    rank: 4,
    specialtyBn: 'কিডনি ফেইলিউর ও একিউট নেফ্রোলজি বিশেষজ্ঞ',
    specialtyEn: 'Acute Kidney Injury & Hemodialysis',
    specialtyKey: 'kidney',
    degrees: 'MBBS, MD (Nephrology)',
    designation: 'কনসালটেন্ট, নেফ্রোলজি',
    institution: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
    ch: [
      {
        name: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
        address: 'জাকির হোসেন রোড, পাহাড়তলী, চট্টগ্রাম',
        area: 'Pahartali',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '10:00',
        end: '15:30',
        serial: ['09610847847'],
        fee: '১২০০ – ১৫০০ টাকা'
      }
    ],
    verified: '2026-09-08'
  },
  {
    slug: 'dr-kazi-shahnoor-alam-kidney',
    name: 'ডাঃ কাজী শাহনূর আলম',
    nameEn: 'Dr. Kazi Shahnoor Alam',
    ini: 'SA',
    g: 'M',
    rank: 4,
    specialtyBn: 'কিডনি সংযোজন ও ট্রান্সপ্লান্ট বিশেষজ্ঞ',
    specialtyEn: 'Renal Transplant & Nephrology',
    specialtyKey: 'kidney',
    degrees: 'MBBS, MD (Nephrology), Fellow Kidney Transplant',
    designation: 'সহকারী অধ্যাপক, কিডনি বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
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
    verified: '2026-09-05'
  },
  {
    slug: 'dr-md-nazmul-hasan-kidney',
    name: 'ডাঃ মোঃ নাজমুল হাসান',
    nameEn: 'Dr. Md. Nazmul Hasan',
    ini: 'NH',
    g: 'M',
    rank: 4,
    specialtyBn: 'ইউরোলজি ও পুরুষ বন্ধ্যাত্ব সার্জন',
    specialtyEn: 'Urology & Andrology Specialist',
    specialtyKey: 'kidney',
    degrees: 'MBBS, MS (Urology)',
    designation: 'সহকারী অধ্যাপক, ইউরোলজি',
    institution: 'মা ও শিশু হাসপাতাল চট্টগ্রাম',
    ch: [
      {
        name: 'ম্যাক্স হাসপাতাল চট্টগ্রাম',
        address: '৩৫/৩৬ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Sun', 'Mon', 'Wed', 'Thu'],
        start: '18:00',
        end: '20:30',
        serial: ['01713-998811'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-08-25'
  },
  {
    slug: 'dr-syeda-fahmida-kidney',
    name: 'ডাঃ সৈয়দা ফাহমিদা',
    nameEn: 'Dr. Syeda Fahmida',
    ini: 'SF',
    g: 'F',
    rank: 3,
    specialtyBn: 'মহিলাদের ইউরিনারি ইনফেকশন ও কিডনি রোগ',
    specialtyEn: 'Female Nephrology & UTI Specialist',
    specialtyKey: 'kidney',
    degrees: 'MBBS, MD (Nephrology)',
    designation: 'কনসালটেন্ট, কিডনি বিভাগ',
    institution: 'মেট্রোপলিটন হাসপাতাল চট্টগ্রাম',
    ch: [
      {
        name: 'মেট্রোপলিটন হাসপাতাল',
        address: '৬৯৮/বি ও.আর. নিজাম রোড, গোলপাহাড়, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Tue', 'Wed', 'Thu'],
        start: '17:30',
        end: '20:30',
        serial: ['01814-652399'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-09-02'
  },
  {
    slug: 'dr-ashfaque-ahmed-kidney',
    name: 'ডাঃ আশফাক আহমেদ',
    nameEn: 'Dr. Ashfaque Ahmed',
    ini: 'AA',
    g: 'M',
    rank: 3,
    specialtyBn: 'গ্লোমেরুলোনেফ্রাইটিস ও ডায়াবেটিক নেফ্রোপ্যাথি',
    specialtyEn: 'Diabetic Kidney Disease & Glomerular Care',
    specialtyKey: 'kidney',
    degrees: 'MBBS, MD (Nephrology Part-II)',
    designation: 'রেজিস্ট্রার, কিডনি ইউনিট',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'বেলভিউ ডায়াগনস্টিক সেন্টার',
        address: 'ও.আর. নিজাম রোড, গোলপাহাড় মোড়, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Sun', 'Tue', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01711-223344'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-08-22'
  },
  {
    slug: 'dr-shariful-alam-kidney',
    name: 'ডাঃ শরিফুল আলম',
    nameEn: 'Dr. Shariful Alam',
    ini: 'SA',
    g: 'M',
    rank: 4,
    specialtyBn: 'ল্যাপারোস্কোপিক ইউরোলজি সার্জন',
    specialtyEn: 'Laparoscopic Urological Surgeon',
    specialtyKey: 'kidney',
    degrees: 'MBBS, MS (Urology), Fellow Laparoscopy',
    designation: 'কনসালটেন্ট, ইউরোলজি',
    institution: 'পার্কভিউ হসপিটাল, চট্টগ্রাম',
    ch: [
      {
        name: 'পার্কভিউ হসপিটাল',
        address: '৯৪/১০৩ কাতালগঞ্জ রোড, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Mon', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01976-022333'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-07'
  },
  {
    slug: 'dr-mahfuzur-rahman-kidney',
    name: 'ডাঃ মাহফুজুর রহমান',
    nameEn: 'Dr. Mahfuzur Rahman',
    ini: 'MR',
    g: 'M',
    rank: 3,
    specialtyBn: 'কিডনি রোগ ও সিকেডি (CKD) বিশেষজ্ঞ',
    specialtyEn: 'Chronic Kidney Disease Care',
    specialtyKey: 'kidney',
    degrees: 'MBBS, BCS (Health), MD (Nephrology)',
    designation: 'মেডিকেল অফিসার, নেফ্রোলজি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'ইবনে সিনা ডায়াগনস্টিক সেন্টার',
        address: 'জিইসি মোড়, চট্টগ্রাম',
        area: 'GEC Circle',
        days: ['Sat', 'Mon', 'Wed', 'Thu'],
        start: '17:00',
        end: '19:30',
        serial: ['01886-383838'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-09-01'
  },
  {
    slug: 'dr-kamrul-hasan-kidney',
    name: 'ডাঃ কামরুল হাসান',
    nameEn: 'Dr. Kamrul Hasan',
    ini: 'KH',
    g: 'M',
    rank: 4,
    specialtyBn: 'কিডনি স্টোন ও ইউরেটারোস্কোপি (URS) বিশেষজ্ঞ',
    specialtyEn: 'Kidney Stone & Ureteroscopy Specialist',
    specialtyKey: 'kidney',
    degrees: 'MBBS, FCPS (Surgery), MS (Urology)',
    designation: 'সহকারী অধ্যাপক, ইউরোলজি',
    institution: 'চট্টগ্রাম মা ও শিশু হাসপাতাল মেডিকেল কলেজ',
    ch: [
      {
        name: 'সিএসসিআর (CSCR)',
        address: '১৬৭৫ ও.আর. নিজাম রোড, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01711-135544'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-08-16'
  },
  {
    slug: 'dr-tariqul-islam-kidney',
    name: 'ডাঃ তারিকুল ইসলাম',
    nameEn: 'Dr. Tariqul Islam',
    ini: 'TI',
    g: 'M',
    rank: 4,
    specialtyBn: 'হিমোডায়ালাইসিস ও পেরিটোনিয়াল ডায়ালাইসিস বিশেষজ্ঞ',
    specialtyEn: 'Dialysis & Renal Failure Management',
    specialtyKey: 'kidney',
    degrees: 'MBBS, MD (Nephrology)',
    designation: 'সহযোগী অধ্যাপক, নেফ্রোলজি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'পপুলার ডায়াগনস্টিক সেন্টার',
        address: '২০/বি কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Tue', 'Thu'],
        start: '18:30',
        end: '21:00',
        serial: ['09613-787810'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-11'
  },
  {
    slug: 'dr-morshedul-alam-kidney',
    name: 'ডাঃ মোরশেদুল আলম',
    nameEn: 'Dr. Morshedul Alam',
    ini: 'MA',
    g: 'M',
    rank: 3,
    specialtyBn: 'কিডনি ইনফেকশন ও প্রোটিনুরিয়া বিশেষজ্ঞ',
    specialtyEn: 'Kidney Infection & Proteinuria Care',
    specialtyKey: 'kidney',
    degrees: 'MBBS, MD (Nephrology)',
    designation: 'কনসালটেন্ট, নেফ্রোলজি',
    institution: 'চট্টগ্রাম জেনারেল হাসপাতাল',
    ch: [
      {
        name: 'ন্যাশনাল হাসপাতাল চট্টগ্রাম',
        address: '১৪/১৫ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sun', 'Mon', 'Tue', 'Wed'],
        start: '17:00',
        end: '20:00',
        serial: ['01827-556677'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-08-27'
  },
  {
    slug: 'dr-afroza-sultana-kidney',
    name: 'ডাঃ আফরোজা সুলতানা',
    nameEn: 'Dr. Afroza Sultana',
    ini: 'AS',
    g: 'F',
    rank: 3,
    specialtyBn: 'নেফ্রোলজি ও প্রিভেন্টিভ কিডনি কেয়ার',
    specialtyEn: 'Preventive Nephrology',
    specialtyKey: 'kidney',
    degrees: 'MBBS, MD (Nephrology)',
    designation: 'মেডিকেল অফিসার, কিডনি ইউনিট',
    institution: 'মা ও শিশু হাসপাতাল',
    ch: [
      {
        name: 'এপিক হেলথ কেয়ার',
        address: '১৯ কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Mon', 'Wed', 'Thu'],
        start: '18:00',
        end: '20:30',
        serial: ['01984-499600'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-09-06'
  },
  {
    slug: 'dr-s-m-iqbal-kidney',
    name: 'ডাঃ এস. এম. ইকবাল',
    nameEn: 'Dr. S. M. Iqbal',
    ini: 'SI',
    g: 'M',
    rank: 4,
    specialtyBn: 'ইউরোলজি ও মূত্রথলির টিউমার বিশেষজ্ঞ',
    specialtyEn: 'Bladder Tumor & Uro-Oncology',
    specialtyKey: 'kidney',
    degrees: 'MBBS, MS (Urology), Fellow Uro-Oncology',
    designation: 'সহকারী অধ্যাপক, ইউরোলজি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'ম্যাক্স হাসপাতাল চট্টগ্রাম',
        address: '৩৫/৩৬ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Sun', 'Tue', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01713-998811'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-03'
  },
  {
    slug: 'dr-mohammad-saifuddin-kidney',
    name: 'ডাঃ মোহাম্মদ সাইফুদ্দিন',
    nameEn: 'Dr. Mohammad Saifuddin',
    ini: 'MS',
    g: 'M',
    rank: 3,
    specialtyBn: 'কিডনি ও রেনাল বায়োপসি বিশেষজ্ঞ',
    specialtyEn: 'Renal Biopsy & Clinical Nephrology',
    specialtyKey: 'kidney',
    degrees: 'MBBS, MD (Nephrology)',
    designation: 'স্পেশালিস্ট, নেফ্রোলজি',
    institution: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
    ch: [
      {
        name: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
        address: 'জাকির হোসেন রোড, পাহাড়তলী, চট্টগ্রাম',
        area: 'Pahartali',
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '11:00',
        end: '16:00',
        serial: ['09610847847'],
        fee: '১২০০ টাকা'
      }
    ],
    verified: '2026-08-31'
  },
  {
    slug: 'dr-anisur-rahman-kidney',
    name: 'ডাঃ আনিসুর রহমান',
    nameEn: 'Dr. Anisur Rahman',
    ini: 'AR',
    g: 'M',
    rank: 3,
    specialtyBn: 'কিডনি রোগ ও প্রস্রাবের জ্বালাপোড়া বিশেষজ্ঞ',
    specialtyEn: 'General Nephrology & UTI Care',
    specialtyKey: 'kidney',
    degrees: 'MBBS, D-Neph, MCPS',
    designation: 'সিনিয়র মেডিকেল অফিসার',
    institution: 'চট্টগ্রাম বন্দর ট্রাস্ট হাসপাতাল',
    ch: [
      {
        name: 'আগ্রাবাদ কিডনি সেন্টার',
        address: 'কমার্স কলেজ রোড, আগ্রাবাদ, চট্টগ্রাম',
        area: 'Agrabad',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01817-664422'],
        fee: '৬০০ টাকা'
      }
    ],
    verified: '2026-08-14'
  },
  {
    slug: 'dr-tanvirul-islam-kidney',
    name: 'ডাঃ তানভীরুল ইসলাম',
    nameEn: 'Dr. Tanvirul Islam',
    ini: 'TI',
    g: 'M',
    rank: 4,
    specialtyBn: 'ইউরোলজি ও প্রস্টেট প্রসারণ সার্জন',
    specialtyEn: 'Urology & Benign Prostate Hyperplasia (BPH)',
    specialtyKey: 'kidney',
    degrees: 'MBBS, MS (Urology)',
    designation: 'সহকারী অধ্যাপক, ইউরোলজি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'শেভরন ক্লিনিক্যাল ল্যাবরেটরি',
        address: '১২/১২ ও.আর. নিজাম রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Wed', 'Thu'],
        start: '17:30',
        end: '20:30',
        serial: ['01711-789012'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-10'
  },
  {
    slug: 'dr-rezaul-karim-kidney',
    name: 'ডাঃ রেজাউল করিম',
    nameEn: 'Dr. Rezaul Karim',
    ini: 'RK',
    g: 'M',
    rank: 3,
    specialtyBn: 'কিডনি ফেইলিউর ও ডায়ালাইসিস সেবা',
    specialtyEn: 'Hemodialysis Unit Incharge & Nephrology',
    specialtyKey: 'kidney',
    degrees: 'MBBS, MD (Nephrology Part-II)',
    designation: 'মেডিকেল অফিসার, ডায়ালাইসিস ইউনিট',
    institution: 'মা ও শিশু হাসপাতাল',
    ch: [
      {
        name: 'হালিশহর রেনাল ক্লিনিক',
        address: 'বড়পুল মোড়, হালিশহর, চট্টগ্রাম',
        area: 'Halishahar',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '18:00',
        end: '21:00',
        serial: ['01819-557799'],
        fee: '৫০০ – ৭০০ টাকা'
      }
    ],
    verified: '2026-08-20'
  },
  {
    slug: 'dr-nurun-nabi-kidney',
    name: 'ডাঃ নুরুন নবী',
    nameEn: 'Dr. Nurun Nabi',
    ini: 'NN',
    g: 'M',
    rank: 4,
    specialtyBn: 'কিডনি রোগ ও মেটাবলিক এসিডোসিস বিশেষজ্ঞ',
    specialtyEn: 'Clinical Nephrology & Hypertension',
    specialtyKey: 'kidney',
    degrees: 'MBBS, FCPS (Medicine), MD (Nephrology)',
    designation: 'সহকারী অধ্যাপক, নেফ্রোলজি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'পার্কভিউ হসপিটাল',
        address: '৯৪/১০৩ কাতালগঞ্জ রোড, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sun', 'Mon', 'Tue', 'Wed'],
        start: '18:00',
        end: '21:00',
        serial: ['01976-022333'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-05'
  }
];
