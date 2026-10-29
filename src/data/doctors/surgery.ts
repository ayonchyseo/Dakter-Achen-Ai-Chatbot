import { Doctor } from '../../types/doctor';

export const SURGERY_DOCTORS: Doctor[] = [
  {
    slug: 'prof-dr-md-sanaullah-surgery',
    name: 'অধ্যাপক ডাঃ মোঃ সানাউল্লাহ',
    nameEn: 'Prof. Dr. Md. Sanaullah',
    ini: 'MS',
    g: 'M',
    rank: 5,
    specialtyBn: 'জেনারেল, কলোরেক্টাল ও ল্যাপারোস্কোপিক সার্জন',
    specialtyEn: 'General, Colorectal & Laparoscopic Surgery',
    specialtyKey: 'surgery',
    degrees: 'MBBS, FCPS (Surgery), FICS (USA), Fellow Colorectal Surgery',
    designation: 'প্রাক্তন বিভাগীয় প্রধান, সার্জারি বিভাগ',
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
    slug: 'prof-dr-kazi-mahfuzul-alam-surgery',
    name: 'অধ্যাপক ডাঃ কাজী মাহফুজুল আলম',
    nameEn: 'Prof. Dr. Kazi Mahfuzul Alam',
    ini: 'KM',
    g: 'M',
    rank: 5,
    specialtyBn: 'জেনারেল সার্জারি ও ক্যান্সার সার্জন',
    specialtyEn: 'General & Surgical Oncology',
    specialtyKey: 'surgery',
    degrees: 'MBBS, FCPS (Surgery), MS (General Surgery)',
    designation: 'অধ্যাপক ও সার্জারি প্রধান',
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
    slug: 'prof-dr-md-mostaque-hossain-surgery',
    name: 'অধ্যাপক ডাঃ মোঃ মোস্তাক হোসেন',
    nameEn: 'Prof. Dr. Md. Mostaque Hossain',
    ini: 'MH',
    g: 'M',
    rank: 5,
    specialtyBn: 'ল্যাপারোস্কোপিক, হার্নিয়া ও গলব্লাডার সার্জন',
    specialtyEn: 'Laparoscopic, Hernia & Gallbladder Specialist',
    specialtyKey: 'surgery',
    degrees: 'MBBS, FCPS (Surgery), Fellow Advanced Laparoscopy (India)',
    designation: 'অধ্যাপক, সার্জারি বিভাগ',
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
    slug: 'dr-mohammad-saiful-islam-surgery',
    name: 'ডাঃ মোহাম্মদ সাইফুল ইসলাম',
    nameEn: 'Dr. Mohammad Saiful Islam',
    ini: 'SI',
    g: 'M',
    rank: 4,
    specialtyBn: 'ব্রেস্ট, থাইরয়েড ও জেনারেল সার্জারি বিশেষজ্ঞ',
    specialtyEn: 'Breast, Thyroid & General Surgeon',
    specialtyKey: 'surgery',
    degrees: 'MBBS, BCS (Health), FCPS (Surgery)',
    designation: 'সহযোগী অধ্যাপক, সার্জারি',
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
    verified: '2026-09-02'
  },
  {
    slug: 'dr-md-nurul-amin-surgery',
    name: 'ডাঃ মোঃ নুরুল আমিন',
    nameEn: 'Dr. Md. Nurul Amin',
    ini: 'NA',
    g: 'M',
    rank: 4,
    specialtyBn: 'পাইলস, ফিশার ও ফিস্টুলা বিশেষজ্ঞ সার্জন',
    specialtyEn: 'Colorectal Surgery & Proctology Specialist',
    specialtyKey: 'surgery',
    degrees: 'MBBS, FCPS (Surgery), MS (Surgery), Fellow Coloproctology',
    designation: 'সহকারী অধ্যাপক, সার্জারি বিভাগ',
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
    slug: 'dr-md-shariful-islam-surgery',
    name: 'ডাঃ মোঃ শরিফুল ইসলাম',
    nameEn: 'Dr. Md. Shariful Islam',
    ini: 'SI',
    g: 'M',
    rank: 4,
    specialtyBn: 'হেপাটোবিলিয়ারি ও প্যানক্রিয়াটিক সার্জারি বিশেষজ্ঞ',
    specialtyEn: 'Hepatobiliary & Pancreatic (HPB) Surgeon',
    specialtyKey: 'surgery',
    degrees: 'MBBS, FCPS (Surgery), Fellow HPB Surgery',
    designation: 'কনসালটেন্ট, সার্জারি বিভাগ',
    institution: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
    ch: [
      {
        name: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
        address: 'জাকির হোসেন রোড, পাহাড়তলী, চট্টগ্রাম',
        area: 'Pahartali',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '09:30',
        end: '15:00',
        serial: ['09610847847'],
        fee: '১২০০ – ১৫০০ টাকা'
      }
    ],
    verified: '2026-09-08'
  },
  {
    slug: 'dr-ashraful-hoque-surgery',
    name: 'ডাঃ আশরাফুল হক',
    nameEn: 'Dr. Ashraful Hoque',
    ini: 'AH',
    g: 'M',
    rank: 4,
    specialtyBn: 'ল্যাপারোস্কোপিক ও জেনারেল সার্জন',
    specialtyEn: 'Laparoscopic & Minimal Access Surgeon',
    specialtyKey: 'surgery',
    degrees: 'MBBS, MS (General Surgery), FMAS',
    designation: 'সহকারী অধ্যাপক, সার্জারি',
    institution: 'চট্টগ্রাম মা ও শিশু হাসপাতাল মেডিকেল কলেজ',
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
    verified: '2026-09-04'
  },
  {
    slug: 'dr-md-tariqul-alam-surgery',
    name: 'ডাঃ মোঃ তারিকুল আলম',
    nameEn: 'Dr. Md. Tariqul Alam',
    ini: 'TA',
    g: 'M',
    rank: 4,
    specialtyBn: 'সার্জিকেল গ্যাস্ট্রোএন্টারোলজি ও লেজার সার্জন',
    specialtyEn: 'Surgical Gastroenterology & Laser Proctology',
    specialtyKey: 'surgery',
    degrees: 'MBBS, FCPS (Surgery), FACS (USA)',
    designation: 'সহকারী অধ্যাপক, সার্জারি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
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
    slug: 'dr-farhana-ahmed-surgery',
    name: 'ডাঃ ফারহানা আহমেদ',
    nameEn: 'Dr. Farhana Ahmed',
    ini: 'FA',
    g: 'F',
    rank: 4,
    specialtyBn: 'মহিলা জেনারেল ও ব্রেস্ট ক্যান্সার সার্জন',
    specialtyEn: 'Female General & Oncoplastic Breast Surgeon',
    specialtyKey: 'surgery',
    degrees: 'MBBS, FCPS (Surgery), Fellow Breast Surgery',
    designation: 'কনসালটেন্ট, সার্জারি বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'পার্কভিউ হসপিটাল',
        address: '৯৪/১০৩ কাতালগঞ্জ রোড, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sun', 'Tue', 'Wed', 'Thu'],
        start: '17:30',
        end: '20:30',
        serial: ['01976-022333'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-07'
  },
  {
    slug: 'dr-s-m-ali-reza-surgery',
    name: 'ডাঃ এস. এম. আলী রেজা',
    nameEn: 'Dr. S. M. Ali Reza',
    ini: 'AR',
    g: 'M',
    rank: 4,
    specialtyBn: 'বার্ন, প্লাস্টিক ও রিকনস্ট্রাক্টিভ সার্জন',
    specialtyEn: 'Burn, Plastic & Reconstructive Surgery',
    specialtyKey: 'surgery',
    degrees: 'MBBS, FCPS (Plastic Surgery), MS',
    designation: 'সহযোগী অধ্যাপক, বার্ন ও প্লাস্টিক সার্জারি বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'সিএসসিআর (CSCR)',
        address: '১৬৭৫ ও.আর. নিজাম রোড, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Tue', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01711-135544'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-01'
  },
  {
    slug: 'dr-kazi-tanvir-ahmed-surgery',
    name: 'ডাঃ কাজী তানভীর আহমেদ',
    nameEn: 'Dr. Kazi Tanvir Ahmed',
    ini: 'TA',
    g: 'M',
    rank: 3,
    specialtyBn: 'হার্নিয়া, অ্যাপেন্ডিক্স ও জরুরি সার্জারি বিশেষজ্ঞ',
    specialtyEn: 'Emergency & General Surgery',
    specialtyKey: 'surgery',
    degrees: 'MBBS, BCS (Health), FCPS (Surgery)',
    designation: 'রেজিস্ট্রার, সার্জারি ইউনিট',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'মেট্রোপলিটন হাসপাতাল',
        address: '৬৯৮/বি ও.আর. নিজাম রোড, গোলপাহাড়, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Sun', 'Mon', 'Wed', 'Thu'],
        start: '17:30',
        end: '20:30',
        serial: ['01814-652399'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-08-20'
  },
  {
    slug: 'dr-md-jahangir-kabir-surgery',
    name: 'ডাঃ মোঃ জাহাঙ্গীর কবির',
    nameEn: 'Dr. Md. Jahangir Kabir',
    ini: 'JK',
    g: 'M',
    rank: 4,
    specialtyBn: 'ক্যান্সার ও অনকোলজি সার্জারি বিশেষজ্ঞ',
    specialtyEn: 'Surgical Oncology Specialist',
    specialtyKey: 'surgery',
    degrees: 'MBBS, FCPS (Surgery), MS (Surgical Oncology)',
    designation: 'সহকারী অধ্যাপক, অনকোলজি সার্জারি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'পপুলার ডায়াগনস্টিক সেন্টার',
        address: '২০/বি কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Wed', 'Thu'],
        start: '18:30',
        end: '21:00',
        serial: ['09613-787810'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-10'
  },
  {
    slug: 'dr-mohammad-mohiuddin-surgery',
    name: 'ডাঃ মোহাম্মদ মহিউদ্দিন',
    nameEn: 'Dr. Mohammad Mohiuddin',
    ini: 'MM',
    g: 'M',
    rank: 3,
    specialtyBn: 'জেনারেল ও মাইনর সার্জারি বিশেষজ্ঞ',
    specialtyEn: 'General & Day Care Surgery',
    specialtyKey: 'surgery',
    degrees: 'MBBS, MCPS (Surgery)',
    designation: 'কনসালটেন্ট, সার্জারি বিভাগ',
    institution: 'চট্টগ্রাম জেনারেল হাসপাতাল',
    ch: [
      {
        name: 'বেলভিউ ডায়াগনস্টিক সেন্টার',
        address: 'ও.আর. নিজাম রোড, গোলপাহাড় মোড়, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sat', 'Sun', 'Tue', 'Wed'],
        start: '18:00',
        end: '20:30',
        serial: ['01711-223344'],
        fee: '৮০০ টাকা'
      }
    ],
    verified: '2026-08-15'
  },
  {
    slug: 'dr-rubel-barua-surgery',
    name: 'ডাঃ রুবেল বড়ুয়া',
    nameEn: 'Dr. Rubel Barua',
    ini: 'RB',
    g: 'M',
    rank: 3,
    specialtyBn: 'ল্যাপারোস্কোপিক সার্জারি ও গলব্লাডার স্টোন',
    specialtyEn: 'Laparoscopic Cholecystectomy Specialist',
    specialtyKey: 'surgery',
    degrees: 'MBBS, MS (General Surgery Part-II)',
    designation: 'আবাসিক সার্জন',
    institution: 'চট্টগ্রাম মা ও শিশু হাসপাতাল',
    ch: [
      {
        name: 'ইবনে সিনা ডায়াগনস্টিক সেন্টার',
        address: 'জিইসি মোড়, চট্টগ্রাম',
        area: 'GEC Circle',
        days: ['Sat', 'Mon', 'Wed', 'Thu'],
        start: '17:00',
        end: '19:30',
        serial: ['01886-383838'],
        fee: '৭০০ টাকা'
      }
    ],
    verified: '2026-09-03'
  },
  {
    slug: 'dr-md-monzurul-hoque-surgery',
    name: 'ডাঃ মোঃ মনজুরুল হক',
    nameEn: 'Dr. Md. Monzurul Hoque',
    ini: 'MH',
    g: 'M',
    rank: 4,
    specialtyBn: 'থোরাসিক ও বক্ষ সার্জারি বিশেষজ্ঞ সার্জন',
    specialtyEn: 'Thoracic & Chest Surgery Specialist',
    specialtyKey: 'surgery',
    degrees: 'MBBS, MS (Thoracic Surgery)',
    designation: 'সহকারী অধ্যাপক, থোরাসিক সার্জারি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
    ch: [
      {
        name: 'ন্যাশনাল হাসপাতাল চট্টগ্রাম',
        address: '১৪/১৫ মেহেদীবাগ রোড, চট্টগ্রাম',
        area: 'Mehedibag',
        days: ['Sun', 'Mon', 'Wed', 'Thu'],
        start: '17:30',
        end: '20:30',
        serial: ['01827-556677'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-11'
  },
  {
    slug: 'dr-mahbubul-alam-surgery',
    name: 'ডাঃ মাহবুবুল আলম',
    nameEn: 'Dr. Mahbubul Alam',
    ini: 'MA',
    g: 'M',
    rank: 3,
    specialtyBn: 'জেনারেল সার্জারি ও কাটাছেঁড়া ইনফেকশন কেয়ার',
    specialtyEn: 'General Surgery & Wound Management',
    specialtyKey: 'surgery',
    degrees: 'MBBS, FCPS (Surgery Part-II)',
    designation: 'মেডিকেল অফিসার, সার্জারি',
    institution: 'চট্টগ্রাম পোর্ট ট্রাস্ট হাসপাতাল',
    ch: [
      {
        name: 'আগ্রাবাদ সার্জিকেল কেয়ার',
        address: 'বাদামতলী মোড়, আগ্রাবাদ, চট্টগ্রাম',
        area: 'Agrabad',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '18:00',
        end: '21:00',
        serial: ['01817-334411'],
        fee: '৬০০ টাকা'
      }
    ],
    verified: '2026-08-18'
  },
  {
    slug: 'dr-md-zakir-hossain-surgery',
    name: 'ডাঃ মোঃ জাকির হোসেন',
    nameEn: 'Dr. Md. Zakir Hossain',
    ini: 'ZH',
    g: 'M',
    rank: 4,
    specialtyBn: 'পাইলস, ভগন্দর ও রেকটাম রোগ লেজার সার্জন',
    specialtyEn: 'Laser Proctology & Colorectal Surgeon',
    specialtyKey: 'surgery',
    degrees: 'MBBS, FCPS (Surgery), Fellow Laser Surgery (Austria)',
    designation: 'কনসালটেন্ট, সার্জারি বিভাগ',
    institution: 'এপিক হেলথ কেয়ার',
    ch: [
      {
        name: 'এপিক হেলথ কেয়ার',
        address: '১৯ কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'Panchlaish',
        days: ['Sat', 'Sun', 'Mon', 'Wed'],
        start: '17:30',
        end: '20:30',
        serial: ['01984-499600'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-09-06'
  },
  {
    slug: 'dr-shamim-ara-begum-surgery',
    name: 'ডাঃ শামীম আরা বেগম',
    nameEn: 'Dr. Shamim Ara Begum',
    ini: 'SB',
    g: 'F',
    rank: 3,
    specialtyBn: 'মহিলাদের স্তন রোগ, টিউমার ও জেনারেল সার্জারি',
    specialtyEn: 'Female Breast Diseases & General Surgery',
    specialtyKey: 'surgery',
    degrees: 'MBBS, FCPS (Surgery)',
    designation: 'সহকারী অধ্যাপক, সার্জারি',
    institution: 'মা ও শিশু হাসপাতাল চট্টগ্রাম',
    ch: [
      {
        name: 'শেভরন ক্লিনিক্যাল ল্যাবরেটরি',
        address: '১২/১২ ও.আর. নিজাম রোড, পাঁচলাইশ, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sat', 'Mon', 'Wed', 'Thu'],
        start: '17:00',
        end: '20:00',
        serial: ['01711-789012'],
        fee: '১০০০ টাকা'
      }
    ],
    verified: '2026-08-28'
  },
  {
    slug: 'dr-anisur-rahman-surgery',
    name: 'ডাঃ আনিসুর রহমান',
    nameEn: 'Dr. Anisur Rahman',
    ini: 'AR',
    g: 'M',
    rank: 4,
    specialtyBn: 'জেনারেল ও গ্যাস্ট্রিক আলসার পারফোরেশন সার্জন',
    specialtyEn: 'Abdominal & General Surgery',
    specialtyKey: 'surgery',
    degrees: 'MBBS, MS (General Surgery)',
    designation: 'সহযোগী অধ্যাপক, সার্জারি বিভাগ',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ',
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
    verified: '2026-09-02'
  },
  {
    slug: 'dr-kamrul-islam-surgery',
    name: 'ডাঃ কামরুল ইসলাম',
    nameEn: 'Dr. Kamrul Islam',
    ini: 'KI',
    g: 'M',
    rank: 4,
    specialtyBn: 'ভাস্কুলার সার্জারি ও রক্তনালী রোগ সার্জন',
    specialtyEn: 'Vascular Surgery & Varicose Vein Specialist',
    specialtyKey: 'surgery',
    degrees: 'MBBS, MS (Vascular Surgery)',
    designation: 'সহকারী অধ্যাপক, ভাস্কুলার সার্জারি',
    institution: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল',
    ch: [
      {
        name: 'সিএসসিআর (CSCR)',
        address: '১৬৭৫ ও.আর. নিজাম রোড, চট্টগ্রাম',
        area: 'O.R. Nizam Road',
        days: ['Sun', 'Mon', 'Tue', 'Wed'],
        start: '18:00',
        end: '20:30',
        serial: ['01711-135544'],
        fee: '১২০০ টাকা'
      }
    ],
    verified: '2026-09-13'
  },
  {
    slug: 'dr-mohammad-masud-surgery',
    name: 'ডাঃ মোহাম্মদ মাসুদ',
    nameEn: 'Dr. Mohammad Masud',
    ini: 'MM',
    g: 'M',
    rank: 3,
    specialtyBn: 'জেনারেল সার্জন ও ট্রমা বিশেষজ্ঞ',
    specialtyEn: 'General & Acute Trauma Surgery',
    specialtyKey: 'surgery',
    degrees: 'MBBS (CMC), FCPS (Surgery)',
    designation: 'কনসালটেন্ট, সার্জারি বিভাগ',
    institution: 'রেলওয়ে হাসপাতাল চট্টগ্রাম',
    ch: [
      {
        name: 'হালিশহর সার্জিকেল ক্লিনিক',
        address: 'আর্টিলারি মোড়, হালিশহর, চট্টগ্রাম',
        area: 'Halishahar',
        days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
        start: '18:00',
        end: '21:00',
        serial: ['01815-443322'],
        fee: '৫০০ – ৭০০ টাকা'
      }
    ],
    verified: '2026-08-22'
  },
  {
    slug: 'dr-arif-hossain-surgery',
    name: 'ডাঃ আরিফ হোসেন',
    nameEn: 'Dr. Arif Hossain',
    ini: 'AH',
    g: 'M',
    rank: 4,
    specialtyBn: 'ল্যাপারোস্কোপিক বেরিয়াট্রিক ও ওবেসিটি সার্জন',
    specialtyEn: 'Bariatric & Advanced Laparoscopic Surgeon',
    specialtyKey: 'surgery',
    degrees: 'MBBS, MS (Surgery), Fellow Bariatric Surgery',
    designation: 'স্পেশালিস্ট সার্জন',
    institution: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
    ch: [
      {
        name: 'অ্যাপোলো ইমপেরিয়াল হসপিটালস',
        address: 'জাকির হোসেন রোড, পাহাড়তলী, চট্টগ্রাম',
        area: 'Pahartali',
        days: ['Sat', 'Mon', 'Tue', 'Wed', 'Thu'],
        start: '10:00',
        end: '15:30',
        serial: ['09610847847'],
        fee: '১৫০০ টাকা'
      }
    ],
    verified: '2026-09-08'
  }
];
