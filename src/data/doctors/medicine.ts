import { Doctor } from '../../types/doctor';

export const MEDICINE_DOCTORS: Doctor[] = [
  {
    slug: 'dr-soumitra-das',
    name: 'ডাঃ সৌমিত্র দাশ',
    nameEn: 'Dr. Soumitra Das',
    ini: 'SD',
    g: 'M',
    rank: 4,
    specialtyBn: 'মেডিসিন ও ডায়াবেটিস',
    specialtyEn: 'Medicine & Diabetes',
    specialtyKey: 'medicine',
    degrees: 'এম.বি.বি.এস (আর.ইউ), বিসিএস (স্বাস্থ্য), পি.জি.টি (মেডিসিন), সিসিডি (বারডেম), এম.ফিল (কোর্স)',
    designation: 'মেডিসিন, বাতব্যথা, শ্বাসকষ্ট, স্ট্রোক ও ডায়াবেটিস বিশেষজ্ঞ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ, চট্টগ্রাম (রেজিঃ নং এ-৯০২৩৬)',
    img: 'https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-9/86661808_138812060936433_3993841302016884736_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFkrKh2hLDuK0EPAGKTm2meWQ900zCyeCJZD3TTMLJ4Ihbab6eNV46zOyzYz1OJGeLz8L4L4RmuPjO7zVMryof2&_nc_ohc=uzwhq0fYg7oQ7kNvwEMedEy&_nc_oc=AdodPrENHsFCljQtIgnrooFdS1EsA5XDLQVuy2wLfmDgyKBg5cc1_7yMn2yixpYvzOc&_nc_zt=23&_nc_ht=scontent.fcgp3-1.fna&_nc_gid=G-SZa2UiJZFbwfk2k7BZGA&_nc_ss=7a3a8&oh=00_AfwcW3GVlVVm76DqGerES_HpjWcezF3-GAZ0F5HImiZpUA&oe=69F35B60',
    ch: [
      {
        name: 'মেসার্স চৌধুরী ফার্মসী',
        address: '১১৯৫, মুন্সী আবদুছ ছামাদ লেন, দামপাড়া, বেটারীগলি, চট্টগ্রাম',
        area: 'Dampara',
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '19:00',
        end: '22:00',
        serial: ['01864-070891'],
        fee: '৫০০ – ৮০০ টাকা'
      },
      {
        name: 'কসমোপলিটন হাসপাতাল',
        address: 'চট্টেশ্বরী মোড়, চট্টগ্রাম',
        area: 'Chawkbazar',
        days: ['Sat', 'Tue'],
        start: '17:00',
        end: '19:00',
        serial: ['01864-070891'],
        fee: '৫০০ – ৮০০ টাকা'
      }
    ],
    verified: '2026-09-15'
  },
  {
    slug: 'prof-dr-ashok-kumar-dutta',
    name: 'অধ্যাপক ডাঃ অশোক কুমার দত্ত',
    nameEn: 'Prof. Dr. Ashok Kumar Dutta',
    ini: 'AD',
    g: 'M',
    rank: 5,
    specialtyBn: 'মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ',
    specialtyEn: 'Medicine & Diabetes Specialist',
    specialtyKey: 'medicine',
    degrees: 'MBBS, FCPS (Medicine), FACP (USA), FRCP (Edin)',
    designation: 'প্রাক্তন বিভাগীয় প্রধান, মেডিসিন বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'পপুলার ডায়াগনস্টিক সেন্টার',
        address: '২০/বি কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '17:00',
        end: '21:00',
        serial: ['09613-787810', '01844-010203'],
        fee: '১২০০ – ১৫০০ টাকা'
      }
    ],
    verified: '2026-09-12'
  },
  {
    slug: 'dr-rezwanul-karim',
    name: 'ডাঃ রেজওয়ানুল করিম',
    nameEn: 'Dr. Rezwanul Karim',
    ini: 'RK',
    g: 'M',
    rank: 4,
    specialtyBn: 'মেডিসিন, বক্ষব্যাধি ও অ্যাজমা',
    specialtyEn: 'Medicine & Chest Specialist',
    specialtyKey: 'medicine',
    degrees: 'MBBS, DTCD, MD (Chest Diseases), FCCP (USA)',
    designation: 'বক্ষব্যাধি ও মেডিসিন বিশেষজ্ঞ',
    institution: 'চট্টগ্রাম বক্ষব্যাধি হাসপাতাল',
    ch: [
      {
        name: 'বেলভিউ ডায়াগনস্টিক সেন্টার',
        address: 'ও.আর. নিজাম রোড, গোলপাহাড় মোড়, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '17:00',
        end: '20:00',
        serial: ['01711-223344', '01819-556677'],
        fee: '৮০০ – ১২০০ টাকা'
      }
    ],
    verified: '2026-08-14'
  },
  {
    slug: 'prof-dr-aniruddha-ghose',
    name: 'অধ্যাপক ডাঃ অনিরুদ্ধ ঘোষ',
    nameEn: 'Prof. Dr. Aniruddha Ghose',
    ini: 'AG',
    g: 'M',
    rank: 5,
    specialtyBn: 'মেডিসিন ও রিউমাটোলজি বিশেষজ্ঞ',
    specialtyEn: 'Medicine & Rheumatology Specialist',
    specialtyKey: 'medicine',
    degrees: 'MBBS, FCPS (Medicine), MD (Medicine), Fellow Rheumatology',
    designation: 'অধ্যাপক, মেডিসিন বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ ও হাসপাতাল',
    ch: [
      {
        name: 'এপিক হেলথ কেয়ার',
        address: '১৯ কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Mon', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:30',
        serial: ['01984-499600'],
        fee: '১০০০ – ১২০০ টাকা'
      }
    ],
    verified: '2026-09-01'
  },
  {
    slug: 'dr-m-a-awal',
    name: 'ডাঃ এম. এ. আউয়াল',
    nameEn: 'Dr. M. A. Awal',
    ini: 'MA',
    g: 'M',
    rank: 4,
    specialtyBn: 'মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ',
    specialtyEn: 'Medicine & Diabetologist',
    specialtyKey: 'medicine',
    degrees: 'MBBS, BCS (Health), FCPS (Medicine), CCD (BIRDEM)',
    designation: 'সহযোগী অধ্যাপক, মেডিসিন',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'পার্কভিউ হসপিটাল',
        address: '৯৪/১০৩ ক্যাটলগ্রাউন্ড রোড, কাতালগঞ্জ, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Tue', 'Wed', 'Thu'],
        start: '17:30',
        end: '20:30',
        serial: ['01976-022333'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-08-28'
  },
  {
    slug: 'dr-rajat-sanker-roy-biswas',
    name: 'ডাঃ রজত শংকর রায় বিশ্বাস',
    nameEn: 'Dr. Rajat Sanker Roy Biswas',
    ini: 'RB',
    g: 'M',
    rank: 4,
    specialtyBn: 'মেডিসিন ও ইন্টারনাল মেডিসিন',
    specialtyEn: 'Medicine & Internal Medicine',
    specialtyKey: 'medicine',
    degrees: 'MBBS, MD (Medicine), FACP (USA), CCD (BIRDEM)',
    designation: 'সহযোগী অধ্যাপক, মেডিসিন বিভাগ',
    institution: 'চট্টগ্রাম মা ও শিশু হাসপাতাল মেডিকেল কলেজ',
    ch: [
      {
        name: 'সিএসসিআর হাসপাতাল (CSCR)',
        address: '১৬৭৫ ও.আর. নিজাম রোড, প্রবর্তক মোড়, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01711-135544', '01819-211440'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-05'
  },
  {
    slug: 'dr-sujat-paul',
    name: 'ডাঃ সুজাত পাল',
    nameEn: 'Dr. Sujat Paul',
    ini: 'SP',
    g: 'M',
    rank: 4,
    specialtyBn: 'মেডিসিন, লিভার ও পরিপাকতন্ত্র',
    specialtyEn: 'Medicine & Gastroenterology',
    specialtyKey: 'medicine',
    degrees: 'MBBS (CMC), BCS (Health), MD (Medicine), MACP (USA)',
    designation: 'কনসালটেন্ট, মেডিসিন বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'ন্যাশনাল হাসপাতাল চট্টগ্রাম',
        address: '১৪/১৫ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '17:00',
        end: '20:30',
        serial: ['01827-556677'],
        fee: '৮০০ – ১০০০ টাকা'
      }
    ],
    verified: '2026-08-20'
  },
  {
    slug: 'prof-dr-md-gofranul-hoque',
    name: 'অধ্যাপক ডাঃ মোঃ গোফরানুল হক',
    nameEn: 'Prof. Dr. Md. Gofranul Hoque',
    ini: 'GH',
    g: 'M',
    rank: 5,
    specialtyBn: 'মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ',
    specialtyEn: 'Medicine & Diabetologist',
    specialtyKey: 'medicine',
    degrees: 'MBBS, FCPS (Medicine), FACP (USA)',
    designation: 'সাবেক অধ্যাপক ও মেডিসিন বিশেষজ্ঞ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'ম্যাক্স হাসপাতাল অ্যান্ড ডায়াগনস্টিক',
        address: '৩৫/৩৬ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '16:30',
        end: '20:00',
        serial: ['01713-998811'],
        fee: '১২০০ টাকা'
      }
    ],
    verified: '2026-09-10'
  },
  {
    slug: 'dr-md-jahangir-alam-med',
    name: 'ডাঃ মোঃ জাহাঙ্গীর আলম',
    nameEn: 'Dr. Md. Jahangir Alam',
    ini: 'JA',
    g: 'M',
    rank: 4,
    specialtyBn: 'মেডিসিন ও বক্ষব্যাধি বিশেষজ্ঞ',
    specialtyEn: 'Medicine & Pulmonology',
    specialtyKey: 'medicine',
    degrees: 'MBBS (CMC), BCS (Health), FCPS (Medicine)',
    designation: 'সহযোগী অধ্যাপক, মেডিসিন',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'শেভরন ক্লিনিক্যাল ল্যাবরেটরি',
        address: '১২/১২ ও.আর. নিজাম রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Tue', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01711-789012'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-08-19'
  },
  {
    slug: 'dr-mohammad-ali-med',
    name: 'ডাঃ মোহাম্মদ আলী',
    nameEn: 'Dr. Mohammad Ali',
    ini: 'MA',
    g: 'M',
    rank: 3,
    specialtyBn: 'মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ',
    specialtyEn: 'Internal Medicine & Diabetes',
    specialtyKey: 'medicine',
    degrees: 'MBBS, BCS (Health), MD (Medicine)',
    designation: 'সহকারী অধ্যাপক, মেডিসিন',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'মেট্রোপলিটন হাসপাতাল',
        address: '৬৯৮/বি ও.আর. নিজাম রোড, গোলপাহাড়, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Mon', 'Wed', 'Thu'],
        start: '17:00',
        end: '20:00',
        serial: ['01814-652399'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-09-03'
  },
  {
    slug: 'dr-shahed-ahmad-iqbal',
    name: 'ডাঃ শাহেদ আহমদ ইকবাল',
    nameEn: 'Dr. Shahed Ahmad Iqbal',
    ini: 'SI',
    g: 'M',
    rank: 4,
    specialtyBn: 'মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ',
    specialtyEn: 'Medicine & Diabetes Specialist',
    specialtyKey: 'medicine',
    degrees: 'MBBS, FCPS (Medicine), Fellow Diabetes (UK)',
    designation: 'কনসালটেন্ট, ইন্টারনাল মেডিসিন',
    institution: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
    ch: [
      {
        name: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
        address: 'জাকির হোসেন রোড, পাহাড়তলী, চট্টগ্রাম',
        area: 'Pahartali',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '10:00',
        end: '16:00',
        serial: ['09610847847'],
        fee: '১৫০০ টাকা'
      }
    ],
    verified: '2026-08-25'
  },
  {
    slug: 'dr-farhad-mahmood',
    name: 'ডাঃ ফরহাদ মাহমুদ',
    nameEn: 'Dr. Farhad Mahmood',
    ini: 'FM',
    g: 'M',
    rank: 3,
    specialtyBn: 'মেডিসিন ও ইনফেকশাস ডিজিজ',
    specialtyEn: 'Medicine & Infectious Diseases',
    specialtyKey: 'medicine',
    degrees: 'MBBS, FCPS (Medicine), MRCP (UK)',
    designation: 'সহকারী অধ্যাপক, মেডিসিন',
    institution: 'ইউএসটিসি মেডিকেল কলেজ, চট্টগ্রাম',
    ch: [
      {
        name: 'ল্যাবএইড ডায়াগনস্টিক',
        address: 'কাতালগঞ্জ রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Tue', 'Wed', 'Thu'],
        start: '18:30',
        end: '21:00',
        serial: ['01766-663300'],
        fee: '৯০০ টাকা'
      }
    ],
    verified: '2026-09-08'
  },
  {
    slug: 'dr-ashis-kumar-dey',
    name: 'ডাঃ আশিষ কুমার দে',
    nameEn: 'Dr. Ashis Kumar Dey',
    ini: 'AD',
    g: 'M',
    rank: 4,
    specialtyBn: 'মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ',
    specialtyEn: 'Medicine & Diabetes',
    specialtyKey: 'medicine',
    degrees: 'MBBS, MD (Medicine), CCD (BIRDEM)',
    designation: 'কনসালটেন্ট, মেডিসিন',
    institution: 'চট্টগ্রাম জেনারেল হাসপাতাল',
    ch: [
      {
        name: 'ইবনে সিনা ডায়াগনস্টিক সেন্টার',
        address: 'হাজী বেলায়েত আলী রোড, জিইসি মোড়, চট্টগ্রাম',
        area: 'GEC Circle',
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '17:00',
        end: '20:30',
        serial: ['01886-383838'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-08-30'
  },
  {
    slug: 'dr-nasir-uddin-ahmed-med',
    name: 'ডাঃ নাসির উদ্দিন আহমেদ',
    nameEn: 'Dr. Nasir Uddin Ahmed',
    ini: 'NA',
    g: 'M',
    rank: 4,
    specialtyBn: 'মেডিসিন ও এলার্জি রোগ বিশেষজ্ঞ',
    specialtyEn: 'Medicine & Allergy Specialist',
    specialtyKey: 'medicine',
    degrees: 'MBBS, BCS (Health), FCPS (Medicine)',
    designation: 'সহকারী অধ্যাপক, মেডিসিন',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'শেভরন ক্লিনিক্যাল ল্যাবরেটরি',
        address: '১২/১২ ও.আর. নিজাম রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Mon', 'Wed', 'Thu'],
        start: '17:30',
        end: '20:30',
        serial: ['01711-234567'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-04'
  },
  {
    slug: 'dr-sheikh-md-hasan-mamun',
    name: 'ডাঃ শেখ মোঃ হাসান মামুন',
    nameEn: 'Dr. Sheikh Md. Hasan Mamun',
    ini: 'SM',
    g: 'M',
    rank: 4,
    specialtyBn: 'মেডিসিন ও গ্যাস্ট্রোএন্টারোলজি',
    specialtyEn: 'Internal Medicine & Liver Care',
    specialtyKey: 'medicine',
    degrees: 'MBBS, FCPS (Medicine), MD (Gastroenterology)',
    designation: 'সহযোগী অধ্যাপক, গ্যাস্ট্রোএন্টারোলজি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'সিএসসিআর (CSCR)',
        address: '১৬৭৫ ও.আর. নিজাম রোড, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '18:00',
        end: '21:00',
        serial: ['01711-135544'],
        fee: '১০০০ – ১২০০ টাকা'
      }
    ],
    verified: '2026-08-16'
  },
  {
    slug: 'dr-s-m-khorshed-alam',
    name: 'ডাঃ এস. এম. খোরশেদ আলম',
    nameEn: 'Dr. S. M. Khorshed Alam',
    ini: 'KA',
    g: 'M',
    rank: 3,
    specialtyBn: 'মেডিসিন ও ডায়াবেটোলজি',
    specialtyEn: 'Medicine & Diabetology',
    specialtyKey: 'medicine',
    degrees: 'MBBS, CCD (BIRDEM), PGT (Medicine)',
    designation: 'ডায়াবেটিস ও মেডিসিন চিকিৎসক',
    institution: 'চট্টগ্রাম ডায়াবেটিক জেনারেল হাসপাতাল',
    ch: [
      {
        name: 'ডায়াবেটিক হাসপাতাল চেম্বার',
        address: 'খুলশী রোড, জাকির হোসেন রোড, চট্টগ্রাম',
        area: 'Pahartali',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '09:00',
        end: '14:00',
        serial: ['01819-332211'],
        fee: '৫০০ – ৭০০ টাকা'
      }
    ],
    verified: '2026-09-02'
  },
  {
    slug: 'dr-pranab-sen-gupta',
    name: 'ডাঃ প্রণব সেনগুপ্ত',
    nameEn: 'Dr. Pranab Sen Gupta',
    ini: 'PS',
    g: 'M',
    rank: 4,
    specialtyBn: 'মেডিসিন ও বাতব্যাধি বিশেষজ্ঞ',
    specialtyEn: 'Medicine & Rheumatic Diseases',
    specialtyKey: 'medicine',
    degrees: 'MBBS, FCPS (Medicine)',
    designation: 'সিনিয়র কনসালটেন্ট, মেডিসিন বিভাগ',
    institution: 'ন্যাশনাল হাসপাতাল চট্টগ্রাম',
    ch: [
      {
        name: 'ন্যাশনাল হাসপাতাল চট্টগ্রাম',
        address: '১৪/১৫ মেহেদীবাগ, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01827-556688'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-08-22'
  },
  {
    slug: 'dr-tanjila-parvin-med',
    name: 'ডাঃ তানজিলা পারভীন',
    nameEn: 'Dr. Tanjila Parvin',
    ini: 'TP',
    g: 'F',
    rank: 3,
    specialtyBn: 'মেডিসিন ও হরমোন বিশেষজ্ঞ',
    specialtyEn: 'Medicine & Endocrine Care',
    specialtyKey: 'medicine',
    degrees: 'MBBS, BCS (Health), FCPS (Medicine)',
    designation: 'সহকারী অধ্যাপক, মেডিসিন বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'পার্কভিউ হসপিটাল',
        address: '৯৪/১০৩ ক্যাটলগ্রাউন্ড রোড, কাতালগঞ্জ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Mon', 'Wed', 'Thu'],
        start: '17:00',
        end: '19:30',
        serial: ['01976-022333'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-09-07'
  },
  {
    slug: 'dr-akm-monwarul-islam-med',
    name: 'ডাঃ এ. কে. এম. মনোয়ারুল ইসলাম',
    nameEn: 'Dr. A. K. M. Monwarul Islam',
    ini: 'MI',
    g: 'M',
    rank: 4,
    specialtyBn: 'মেডিসিন ও কার্ডিওভাসকুলার হেলথ',
    specialtyEn: 'Internal Medicine',
    specialtyKey: 'medicine',
    degrees: 'MBBS, FCPS (Medicine), MD (Internal Medicine)',
    designation: 'সহযোগী অধ্যাপক, মেডিসিন',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'এপিক হেলথ কেয়ার',
        address: '১৯ কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '18:30',
        end: '21:30',
        serial: ['01984-499600'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-14'
  },
  {
    slug: 'dr-tamanna-ferdous-med',
    name: 'ডাঃ তামান্না ফেরদৌস',
    nameEn: 'Dr. Tamanna Ferdous',
    ini: 'TF',
    g: 'F',
    rank: 3,
    specialtyBn: 'মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ',
    specialtyEn: 'Medicine & Diabetologist',
    specialtyKey: 'medicine',
    degrees: 'MBBS, CCD (BIRDEM), FCPS (Part-II)',
    designation: 'কনসালটেন্ট, মেডিসিন ও ডায়াবেটিস',
    institution: 'মা ও শিশু হাসপাতাল, চট্টগ্রাম',
    ch: [
      {
        name: 'মেডিসিন কেয়ার ফার্মেসি ও চেম্বার',
        address: 'আগ্রাবাদ সি/এ, চট্টগ্রাম',
        area: 'Agrabad',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '17:00',
        end: '20:00',
        serial: ['01833-221144'],
        fee: '৬০০ – ৮০০ টাকা'
      }
    ],
    verified: '2026-08-11'
  },
  {
    slug: 'dr-kamal-hossain-med',
    name: 'ডাঃ কামাল হোসেন',
    nameEn: 'Dr. Kamal Hossain',
    ini: 'KH',
    g: 'M',
    rank: 3,
    specialtyBn: 'মেডিসিন ও হেমাটোলজি (রক্তরোগ)',
    specialtyEn: 'Medicine & Clinical Hematology',
    specialtyKey: 'medicine',
    degrees: 'MBBS (CMC), FCPS (Medicine)',
    designation: 'সহকারী অধ্যাপক, মেডিসিন ইউনিট-২',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'পপুলার ডায়াগনস্টিক সেন্টার',
        address: '২০/বি কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sun', 'Tue', 'Thu'],
        start: '18:00',
        end: '20:30',
        serial: ['09613-787810'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-09'
  },
  {
    slug: 'dr-zahirul-islam-med',
    name: 'ডাঃ জহিরুল ইসলাম',
    nameEn: 'Dr. Zahirul Islam',
    ini: 'ZI',
    g: 'M',
    rank: 3,
    specialtyBn: 'মেডিসিন ও বাতজ্বর বিশেষজ্ঞ',
    specialtyEn: 'Medicine & Rheumatic Fever',
    specialtyKey: 'medicine',
    degrees: 'MBBS, DTM&H, MCPS (Medicine), CCD (BIRDEM)',
    designation: 'সিনিয়র মেডিকেল অফিসার',
    institution: 'চট্টগ্রাম বন্দর হাসপাতাল',
    ch: [
      {
        name: 'আল-আমিন ফার্মেসি ও ডক্টরস চেম্বার',
        address: 'বারিক বিল্ডিং মোড়, আগ্রাবাদ, চট্টগ্রাম',
        area: 'Agrabad',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '18:00',
        end: '21:00',
        serial: ['01817-909080'],
        fee: '৬০০ টাকা'
      }
    ],
    verified: '2026-08-18'
  }
];
