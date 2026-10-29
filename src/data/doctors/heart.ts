import { Doctor } from '../../types/doctor';

export const HEART_DOCTORS: Doctor[] = [
  {
    slug: 'dr-abu-sayem-omar-faroque',
    name: 'ডাঃ আবু সায়েম মোহাম্মদ ওমর ফারুক',
    nameEn: 'Dr. Abu Sayem Mohammed Omar Faroque',
    ini: 'OF',
    g: 'M',
    rank: 4,
    specialtyBn: 'হৃদরোগ ও মেডিসিন বিশেষজ্ঞ',
    specialtyEn: 'Cardiology & Medicine',
    specialtyKey: 'heart',
    degrees: 'MBBS, BCS (Health), MD (Cardiology), Certified in Diabetology (BIRDEM)',
    designation: 'হৃদরোগ ও ডায়াবেটিস বিশেষজ্ঞ (১৬ বছরের অভিজ্ঞতা, BMDC Reg: A-49145)',
    institution: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস, চট্টগ্রাম',
    img: 'https://scontent.fcgp4-1.fna.fbcdn.net/v/t39.30808-6/477222783_1167028001448162_1549106124207562596_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeE8G746hKBZ15-kc5Ct8tgp1V6Um6-tUAnVXpSbr61QCUsvWN95Qp0eQxp4JlIi5jGNNWwsTr9rB61tItHcbNVs&_nc_ohc=17NrB5yrqTgQ7kNvwEYnObb&_nc_oc=AdpA3xV7MgQX5vGcOoV2NIsx40nnC0qDoHXmgoEA3Zr7op6yg8SzX9Tzq-hSvOoRsjZ-ZA2WcT0o9okTFRZ8u41j&_nc_zt=23&_nc_ht=scontent.fcgp4-1.fna&_nc_gid=6akkTgiYGsuM7Ov759XY4w&_nc_ss=7a3a8&oh=00_Afz0KnSVuWspmu7cVAreFPdOqzc3xHgryDKgPIe5Dqzyww&oe=69D19341',
    ch: [
      {
        name: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
        address: 'জাকির হোসেন রোড, পাহাড়তলী, চট্টগ্রাম-৪২০২',
        area: 'Pahartali',
        days: ['Sat', 'Sun', 'Mon', 'Wed', 'Thu'],
        start: '09:00',
        end: '13:00',
        serial: ['09610847847', '01844-332211'],
        fee: '১০০০ – ১৫০০ টাকা'
      },
      {
        name: 'শেভরন ক্লিনিক্যাল ল্যাবরেটরি',
        address: '১২/১২ ও.আর. নিজাম রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Mon', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01711-789012', '01844-332211'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-15'
  },
  {
    slug: 'prof-dr-prabir-kumar-das',
    name: 'অধ্যাপক ডাঃ প্রবীর কুমার দাশ',
    nameEn: 'Prof. Dr. Prabir Kumar Das',
    ini: 'PD',
    g: 'M',
    rank: 5,
    specialtyBn: 'ইন্টারভেনশনাল কার্ডিওলজি ও হৃদরোগ',
    specialtyEn: 'Interventional Cardiology',
    specialtyKey: 'heart',
    degrees: 'MBBS, MD (Cardiology), FCPS, FACC (USA), FSCAI (USA)',
    designation: 'অধ্যাপক ও বিভাগীয় প্রধান, হৃদরোগ বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ ও হাসপাতাল',
    ch: [
      {
        name: 'সিএসসিআর (CSCR)',
        address: '১৬৭৫ প্রবর্তক মোড়, ও.আর. নিজাম রোড, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '17:00',
        end: '20:30',
        serial: ['01711-135544', '01819-211440'],
        fee: '১২০০ – ১৫০০ টাকা'
      }
    ],
    verified: '2026-09-10'
  },
  {
    slug: 'dr-nuruddin-tareq',
    name: 'ডাঃ নুরুদ্দীন তারেক',
    nameEn: 'Dr. Nuruddin Tareq',
    ini: 'NT',
    g: 'M',
    rank: 4,
    specialtyBn: 'হৃদরোগ ও ইন্টারভেনশনাল কার্ডিওলজিস্ট',
    specialtyEn: 'Cardiology & Interventionalist',
    specialtyKey: 'heart',
    degrees: 'MBBS, MD (Cardiology), FESC (Europe)',
    designation: 'সহযোগী অধ্যাপক, কার্ডিওলজি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'পার্কভিউ হসপিটাল',
        address: '৯৪/১০৩ কাতালগঞ্জ রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Tue', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01976-022333'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-02'
  },
  {
    slug: 'prof-dr-md-mokhlesur-rahman-card',
    name: 'অধ্যাপক ডাঃ মোঃ মোখলেসুর রহমান',
    nameEn: 'Prof. Dr. Md. Mokhlesur Rahman',
    ini: 'MR',
    g: 'M',
    rank: 5,
    specialtyBn: 'কার্ডিওলজি ও হৃদরোগ বিশেষজ্ঞ',
    specialtyEn: 'Clinical & Preventive Cardiology',
    specialtyKey: 'heart',
    degrees: 'MBBS, FCPS (Medicine), MD (Cardiology)',
    designation: 'সিনিয়র কনসালটেন্ট, কার্ডিওলজি',
    institution: 'ন্যাশনাল হাসপাতাল চট্টগ্রাম',
    ch: [
      {
        name: 'ন্যাশনাল হাসপাতাল চট্টগ্রাম',
        address: '১৪/১৫ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '17:30',
        end: '21:00',
        serial: ['01827-556677'],
        fee: '১২০০ টাকা'
      }
    ],
    verified: '2026-08-29'
  },
  {
    slug: 'dr-mohammad-ibrahim-card',
    name: 'ডাঃ মোহাম্মদ ইব্রাহিম',
    nameEn: 'Dr. Mohammad Ibrahim',
    ini: 'MI',
    g: 'M',
    rank: 4,
    specialtyBn: 'হৃদরোগ, উচ্চ রক্তচাপ ও বাতজ্বর',
    specialtyEn: 'Cardiology & Hypertension Specialist',
    specialtyKey: 'heart',
    degrees: 'MBBS, D-Card (DU), FCPS (Medicine)',
    designation: 'সহকারী অধ্যাপক, হৃদরোগ বিভাগ',
    institution: 'চট্টগ্রাম মা ও শিশু হাসপাতাল মেডিকেল কলেজ',
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
    verified: '2026-09-08'
  },
  {
    slug: 'dr-md-rezaul-karim-card',
    name: 'ডাঃ মোঃ রেজাউল করিম',
    nameEn: 'Dr. Md. Rezaul Karim',
    ini: 'RK',
    g: 'M',
    rank: 4,
    specialtyBn: 'হৃদরোগ ও ইকোকার্ডিওগ্রাফি বিশেষজ্ঞ',
    specialtyEn: 'Cardiologist & Echocardiographer',
    specialtyKey: 'heart',
    degrees: 'MBBS, D-Card (NICVD), Fellow Non-Invasive Cardiology (India)',
    designation: 'কনসালটেন্ট, কার্ডিওলজি ইউনিট',
    institution: 'এপিক হেলথ কেয়ার, চট্টগ্রাম',
    ch: [
      {
        name: 'এপিক হেলথ কেয়ার',
        address: '১৯ কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '17:00',
        end: '20:30',
        serial: ['01984-499600'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-03'
  },
  {
    slug: 'dr-anisul-awal',
    name: 'ডাঃ আনিসুল আউয়াল',
    nameEn: 'Dr. Anisul Awal',
    ini: 'AA',
    g: 'M',
    rank: 4,
    specialtyBn: 'হৃদরোগ ও এনজিওপ্লাস্টি বিশেষজ্ঞ',
    specialtyEn: 'Interventional Cardiologist',
    specialtyKey: 'heart',
    degrees: 'MBBS, BCS (Health), MD (Cardiology)',
    designation: 'সহযোগী অধ্যাপক, কার্ডিওলজি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'ম্যাক্স হাসপাতাল চট্টগ্রাম',
        address: '৩৫/৩৬ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Mon', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01713-998811'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-08-25'
  },
  {
    slug: 'prof-dr-jamal-ahmed-card',
    name: 'অধ্যাপক ডাঃ জামাল আহমেদ',
    nameEn: 'Prof. Dr. Jamal Ahmed',
    ini: 'JA',
    g: 'M',
    rank: 5,
    specialtyBn: 'কার্ডিওভাসকুলার রোগ বিশেষজ্ঞ',
    specialtyEn: 'Cardiovascular Specialist',
    specialtyKey: 'heart',
    degrees: 'MBBS, FCPS (Medicine), MD (Cardiology), FACC',
    designation: 'অধ্যাপক, কার্ডিওলজি বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'শেভরন ক্লিনিক্যাল ল্যাবরেটরি',
        address: '১২/১২ ও.আর. নিজাম রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Tue', 'Wed'],
        start: '17:30',
        end: '20:30',
        serial: ['01711-789012'],
        fee: '১২০০ টাকা'
      }
    ],
    verified: '2026-09-12'
  },
  {
    slug: 'dr-md-ashraful-islam-card',
    name: 'ডাঃ মোঃ আশরাফুল ইসলাম',
    nameEn: 'Dr. Md. Ashraful Islam',
    ini: 'AI',
    g: 'M',
    rank: 4,
    specialtyBn: 'হৃদরোগ ও পেসমেকার বিশেষজ্ঞ',
    specialtyEn: 'Cardiology & Pacemaker Specialist',
    specialtyKey: 'heart',
    degrees: 'MBBS, MD (Cardiology), Fellow Cardiac Electrophysiology',
    designation: 'কনসালটেন্ট, কার্ডিওলজি',
    institution: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
    ch: [
      {
        name: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
        address: 'জাকির হোসেন রোড, পাহাড়তলী, চট্টগ্রাম',
        area: 'Pahartali',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '10:00',
        end: '15:00',
        serial: ['09610847847'],
        fee: '১৫০০ টাকা'
      }
    ],
    verified: '2026-08-30'
  },
  {
    slug: 'dr-shahedur-rahman-card',
    name: 'ডাঃ শাহেদুর রহমান',
    nameEn: 'Dr. Shahedur Rahman',
    ini: 'SR',
    g: 'M',
    rank: 3,
    specialtyBn: 'হৃদরোগ ও মেডিসিন বিশেষজ্ঞ',
    specialtyEn: 'Cardiology & Hypertension',
    specialtyKey: 'heart',
    degrees: 'MBBS, D-Card, MCPS (Medicine)',
    designation: 'সহকারী অধ্যাপক, কার্ডিওলজি',
    institution: 'বিজিসি ট্রাস্ট মেডিকেল কলেজ',
    ch: [
      {
        name: 'মেট্রোপলিটন হাসপাতাল',
        address: '৬৯৮/বি ও.আর. নিজাম রোড, গোলপাহাড়, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Mon', 'Wed', 'Thu'],
        start: '18:00',
        end: '20:30',
        serial: ['01814-652399'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-09-06'
  },
  {
    slug: 'dr-s-m-moinuddin-card',
    name: 'ডাঃ এস. এম. মঈনুদ্দিন',
    nameEn: 'Dr. S. M. Moinuddin',
    ini: 'MM',
    g: 'M',
    rank: 4,
    specialtyBn: 'হৃদরোগ ও রক্তচাপ বিশেষজ্ঞ',
    specialtyEn: 'Cardiology & Blood Pressure',
    specialtyKey: 'heart',
    degrees: 'MBBS, FCPS (Medicine), MD (Cardiology)',
    designation: 'সহযোগী অধ্যাপক, কার্ডিওলজি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'সিএসসিআর (CSCR)',
        address: '১৬৭৫ প্রবর্তক মোড়, ও.আর. নিজাম রোড, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '18:30',
        end: '21:30',
        serial: ['01711-135544'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-01'
  },
  {
    slug: 'dr-asif-ahmed-card',
    name: 'ডাঃ আসিফ আহমেদ',
    nameEn: 'Dr. Asif Ahmed',
    ini: 'AA',
    g: 'M',
    rank: 3,
    specialtyBn: 'হৃদরোগ বিশেষজ্ঞ ও কার্ডিয়াক রিহ্যাব',
    specialtyEn: 'Cardiology & Cardiac Rehabilitation',
    specialtyKey: 'heart',
    degrees: 'MBBS, BCS (Health), MD (Cardiology)',
    designation: 'সহকারী অধ্যাপক, কার্ডিওলজি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'ইবনে সিনা ডায়াগনস্টিক সেন্টার',
        address: 'হাজী বেলায়েত আলী রোড, জিইসি মোড়, চট্টগ্রাম',
        area: 'GEC Circle',
        days: ['Sat', 'Mon', 'Tue', 'Thu'],
        start: '17:00',
        end: '19:30',
        serial: ['01886-383838'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-08-20'
  },
  {
    slug: 'dr-manjur-morshed-card',
    name: 'ডাঃ মঞ্জুর মোরশেদ',
    nameEn: 'Dr. Manjur Morshed',
    ini: 'MM',
    g: 'M',
    rank: 4,
    specialtyBn: 'হৃদরোগ ও ইন্টারভেনশন সার্জন',
    specialtyEn: 'Cardiology & Catheterization',
    specialtyKey: 'heart',
    degrees: 'MBBS, MD (Cardiology), FSCAI',
    designation: 'কনসালটেন্ট, কার্ডিওলজি',
    institution: 'পার্কভিউ হসপিটাল, চট্টগ্রাম',
    ch: [
      {
        name: 'পার্কভিউ হসপিটাল',
        address: '৯৪/১০৩ কাতালগঞ্জ, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Mon', 'Wed', 'Thu'],
        start: '17:30',
        end: '20:30',
        serial: ['01976-022333'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-09'
  },
  {
    slug: 'dr-taimur-khan-card',
    name: 'ডাঃ তাইমুর খান',
    nameEn: 'Dr. Taimur Khan',
    ini: 'TK',
    g: 'M',
    rank: 3,
    specialtyBn: 'ক্লিনিক্যাল কার্ডিওলজি ও ইকো',
    specialtyEn: 'Clinical Cardiology & Echo',
    specialtyKey: 'heart',
    degrees: 'MBBS, D-Card (DU), CCD (BIRDEM)',
    designation: 'কনসালটেন্ট, হৃদরোগ বিভাগ',
    institution: 'চট্টগ্রাম বন্দর হাসপাতাল',
    ch: [
      {
        name: 'আগ্রাবাদ ডায়াগনস্টিক কমপ্লেক্স',
        address: 'কমার্স কলেজ রোড, আগ্রাবাদ, চট্টগ্রাম',
        area: 'Agrabad',
        days: ['Sat', 'Sun', 'Tue', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01819-887766'],
        fee: '৭০০ টাকা'
      }
    ],
    verified: '2026-08-15'
  },
  {
    slug: 'dr-md-salahuddin-card',
    name: 'ডাঃ মোঃ সালাহউদ্দিন',
    nameEn: 'Dr. Md. Salahuddin',
    ini: 'MS',
    g: 'M',
    rank: 4,
    specialtyBn: 'হৃদরোগ, রিউম্যাটিক ফিভার ও মেডিসিন',
    specialtyEn: 'Cardiology & Rheumatic Fever',
    specialtyKey: 'heart',
    degrees: 'MBBS, FCPS (Medicine), MD (Cardiology)',
    designation: 'সহযোগী অধ্যাপক, কার্ডিওলজি',
    institution: 'চট্টগ্রাম মা ও শিশু হাসপাতাল মেডিকেল কলেজ',
    ch: [
      {
        name: 'পপুলার ডায়াগনস্টিক সেন্টার',
        address: '২০/বি কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Tue', 'Wed', 'Thu'],
        start: '18:30',
        end: '21:30',
        serial: ['09613-787810'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-13'
  },
  {
    slug: 'dr-kazi-arifur-rahman-card',
    name: 'ডাঃ কাজী আরিফুর রহমান',
    nameEn: 'Dr. Kazi Arifur Rahman',
    ini: 'AR',
    g: 'M',
    rank: 3,
    specialtyBn: 'হৃদরোগ ও ইন্টারভেনশনাল ফেলো',
    specialtyEn: 'Cardiologist',
    specialtyKey: 'heart',
    degrees: 'MBBS, BCS (Health), MD (Cardiology)',
    designation: 'সহকারী অধ্যাপক, কার্ডিওলজি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'ন্যাশনাল হাসপাতাল চট্টগ্রাম',
        address: '১৪/১৫ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sun', 'Mon', 'Tue', 'Thu'],
        start: '17:00',
        end: '20:00',
        serial: ['01827-556677'],
        fee: '৯০০ টাকা'
      }
    ],
    verified: '2026-08-27'
  },
  {
    slug: 'dr-subir-biswas-card',
    name: 'ডাঃ সুবীর বিশ্বাস',
    nameEn: 'Dr. Subir Biswas',
    ini: 'SB',
    g: 'M',
    rank: 4,
    specialtyBn: 'হৃদরোগ ও হার্ট ফেইলিউর বিশেষজ্ঞ',
    specialtyEn: 'Cardiology & Heart Failure Specialist',
    specialtyKey: 'heart',
    degrees: 'MBBS, MD (Cardiology), FCPS',
    designation: 'কনসালটেন্ট, কার্ডিওলজি বিভাগ',
    institution: 'এপিক হেলথ কেয়ার',
    ch: [
      {
        name: 'এপিক হেলথ কেয়ার',
        address: '১৯ কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01984-499600'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-04'
  },
  {
    slug: 'dr-mahfuzur-rahman-card',
    name: 'ডাঃ মাহফুজুর রহমান',
    nameEn: 'Dr. Mahfuzur Rahman',
    ini: 'MR',
    g: 'M',
    rank: 3,
    specialtyBn: 'হৃদরোগ ও সিসিইউ বিশেষজ্ঞ',
    specialtyEn: 'Cardiology & Critical Care',
    specialtyKey: 'heart',
    degrees: 'MBBS, D-Card, CCD',
    designation: 'সিসিইউ ইনচার্জ ও কার্ডিওলজিস্ট',
    institution: 'ম্যাক্স হাসপাতাল চট্টগ্রাম',
    ch: [
      {
        name: 'ম্যাক্স হাসপাতাল অ্যান্ড ডায়াগনস্টিক',
        address: '৩৫/৩৬ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '17:00',
        end: '20:00',
        serial: ['01713-998811'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-08-17'
  },
  {
    slug: 'dr-sanjoy-barua-card',
    name: 'ডাঃ সঞ্জয় বড়ুয়া',
    nameEn: 'Dr. Sanjoy Barua',
    ini: 'SB',
    g: 'M',
    rank: 4,
    specialtyBn: 'হৃদরোগ ও হার্ট ভালভ বিশেষজ্ঞ',
    specialtyEn: 'Cardiology & Valvular Heart Disease',
    specialtyKey: 'heart',
    degrees: 'MBBS, MD (Cardiology)',
    designation: 'সহকারী অধ্যাপক, কার্ডিওলজি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'শেভরন ক্লিনিক্যাল ল্যাবরেটরি',
        address: '১২/১২ ও.আর. নিজাম রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01711-789012'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-07'
  },
  {
    slug: 'dr-farhan-ishraq-card',
    name: 'ডাঃ ফারহান ইশরাক',
    nameEn: 'Dr. Farhan Ishraq',
    ini: 'FI',
    g: 'M',
    rank: 3,
    specialtyBn: 'ক্লিনিক্যাল কার্ডিওলজি ও প্রিভেন্টিভ কেয়ার',
    specialtyEn: 'Preventive Cardiology',
    specialtyKey: 'heart',
    degrees: 'MBBS, MD (Cardiology), Fellow Non-Invasive Echo',
    designation: 'স্পেশালিস্ট, কার্ডিওলজি সেন্টার',
    institution: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
    ch: [
      {
        name: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
        address: 'জাকির হোসেন রোড, পাহাড়তলী, চট্টগ্রাম',
        area: 'Pahartali',
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '11:00',
        end: '17:00',
        serial: ['09610847847'],
        fee: '১২০০ টাকা'
      }
    ],
    verified: '2026-09-05'
  },
  {
    slug: 'dr-moniruzzaman-card',
    name: 'ডাঃ মোঃ মনিরুজ্জামান',
    nameEn: 'Dr. Md. Moniruzzaman',
    ini: 'MM',
    g: 'M',
    rank: 4,
    specialtyBn: 'হৃদরোগ ও এনজিওগ্রাম বিশেষজ্ঞ',
    specialtyEn: 'Cardiology & Angiography',
    specialtyKey: 'heart',
    degrees: 'MBBS, FCPS (Medicine), MD (Cardiology)',
    designation: 'সহযোগী অধ্যাপক, কার্ডিওলজি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'সিএসসিআর (CSCR)',
        address: '১৬৭৫ প্রবর্তক মোড়, ও.আর. নিজাম রোড, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Tue', 'Wed', 'Thu'],
        start: '17:30',
        end: '20:30',
        serial: ['01711-135544'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-08-31'
  },
  {
    slug: 'dr-sharmin-sultana-card',
    name: 'ডাঃ শারমিন সুলতানা',
    nameEn: 'Dr. Sharmin Sultana',
    ini: 'SS',
    g: 'F',
    rank: 3,
    specialtyBn: 'মহিলাদের হৃদরোগ ও কার্ডিয়াক কনসালটেন্ট',
    specialtyEn: 'Cardiology & Women Heart Health',
    specialtyKey: 'heart',
    degrees: 'MBBS, MD (Cardiology), Certified Echo Specialist',
    designation: 'কনসালটেন্ট, কার্ডিওলজি',
    institution: 'মা ও শিশু হাসপাতাল চট্টগ্রাম',
    ch: [
      {
        name: 'বেলভিউ ডায়াগনস্টিক সেন্টার',
        address: 'ও.আর. নিজাম রোড, গোলপাহাড় মোড়, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Mon', 'Wed'],
        start: '17:00',
        end: '19:30',
        serial: ['01711-223344'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-09-11'
  }
];
