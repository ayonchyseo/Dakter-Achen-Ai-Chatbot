import { Doctor } from '../../types/doctor';

interface DeptSeed {
  key: string;
  specialtyBn: string;
  specialtyEn: string;
  degreesList: string[];
  designationList: string[];
  doctors: Array<{
    slug: string;
    name: string;
    nameEn: string;
    ini: string;
    g: 'M' | 'F';
    rank: number;
  }>;
}

const CHAMBERS_POOL = [
  {
    name: 'পার্কভিউ হসপিটাল অ্যান্ড ডায়াগনস্টিক লিঃ',
    address: '৯৪/১০৩, কাতালগঞ্জ রোড, পাঁচলাইশ, চট্টগ্রাম',
    area: 'Panchlaish',
    serial: ['09610-818888', '01976-022333'],
    fee: '৮০০ – ১০০০ টাকা'
  },
  {
    name: 'শেভরণ ক্লিনিক্যাল ল্যাবরেটরি (প্রাঃ) লিঃ',
    address: '১২/১২, ও.আর. নিজাম রোড, পাঁচলাইশ, চট্টগ্রাম',
    area: 'O.R. Nizam Rd',
    serial: ['01755-666999', '09612-243876'],
    fee: '৮০০ – ১২০০ টাকা'
  },
  {
    name: 'সিএসসিআর (CSCR) হাসপাতাল',
    address: '১৬৭৫/এ, ও.আর. নিজাম রোড, গোলপাহাড় মোড়, চট্টগ্রাম',
    area: 'O.R. Nizam Rd',
    serial: ['01887-656565', '031-656565'],
    fee: '৮০০ – ১০০০ টাকা'
  },
  {
    name: 'এপিক হেলথকেয়ার (Epic Healthcare)',
    address: '১৯, কে.বি. ফজলুল কাদের রোড (চমেক মেইন গেটের বিপরীতে), পাঁচলাইশ, চট্টগ্রাম',
    area: 'Panchlaish',
    serial: ['01984-499600', '09666-710678'],
    fee: '৭০০ – ১০০০ টাকা'
  },
  {
    name: 'পপুলার ডায়াগনস্টিক সেন্টার লিঃ',
    address: '২০/বি, কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
    area: 'Panchlaish',
    serial: ['09613-787810', '01844-010203'],
    fee: '৮০০ – ১২০০ টাকা'
  },
  {
    name: 'ম্যাক্স হসপিটাল অ্যান্ড ডায়াগনস্টিক লিঃ',
    address: '৩৫/৩৬, মেহেদীবাগ রোড, চট্টগ্রাম',
    area: 'Mehedibag',
    serial: ['01713-998199', '031-622519'],
    fee: '৭০০ – ১০০০ টাকা'
  },
  {
    name: 'ন্যাশনাল হসপিটাল চট্টগ্রাম',
    address: '১৪/১৫, দামপাড়া লেন, মেহেদীবাগ, চট্টগ্রাম',
    area: 'Mehedibag',
    serial: ['01841-225225', '031-623713'],
    fee: '৭০০ – ৯০০ টাকা'
  },
  {
    name: 'মেট্রোপলিটন হাসপাতাল (প্রাঃ) লিঃ',
    address: '৬৯৮/৭৫২, ও.আর. নিজাম রোড, জিইসি মোড়, চট্টগ্রাম',
    area: 'GEC',
    serial: ['01814-651077', '031-651242'],
    fee: '৭০০ – ৯০০ টাকা'
  },
  {
    name: 'সেনসিভ ডায়াগনস্টিক সেন্টার',
    address: '১৫, জামাল খান রোড, চট্টগ্রাম',
    area: 'Jamal Khan',
    serial: ['01711-765432', '031-619388'],
    fee: '৬০০ – ৮০০ টাকা'
  },
  {
    name: 'ল্যানসেট ডায়াগনস্টিক অ্যান্ড রিসার্চ সেন্টার',
    address: '১০৬, কে.বি. ফজলুল কাদের রোড, চকবাজার, চট্টগ্রাম',
    area: 'Chawkbazar',
    serial: ['01819-319218', '031-653301'],
    fee: '৬০০ – ৮০০ টাকা'
  },
  {
    name: 'চট্টগ্রাম মা ও শিশু হাসপাতাল মেডিকেল কলেজ',
    address: 'আগ্রাবাদ বাণিজ্যিক এলাকা, চট্টগ্রাম',
    area: 'Agrabad',
    serial: ['01819-327788', '031-711236'],
    fee: '৫০০ – ৭০০ টাকা'
  },
  {
    name: 'এভারকেয়ার হসপিটাল চট্টগ্রাম',
    address: 'প্লট এইচ-১, অনন্যা আবাসিক এলাকা, অক্সিজেন-কুয়াইশ রোড, চট্টগ্রাম',
    area: 'Panchlaish',
    serial: ['10663', '09612-310663'],
    fee: '১২০০ – ১৫০০ টাকা'
  }
];

const INSTITUTIONS_POOL = [
  'চট্টগ্রাম মেডিকেল কলেজ ও হাসপাতাল (CMCH)',
  'চট্টগ্রাম মা ও শিশু হাসপাতাল মেডিকেল কলেজ',
  'বিআইটিআইডি (BITID) হাসপাতাল, ফৌজদারহাট, চট্টগ্রাম',
  'সাউদার্ন মেডিকেল কলেজ ও হাসপাতাল, চট্টগ্রাম',
  'মরিন সিটি মেডিকেল কলেজ ও হাসপাতাল, চট্টগ্রাম',
  'বিজিসি ট্রাস্ট মেডিকেল কলেজ ও হাসপাতাল, চট্টগ্রাম',
  'চট্টগ্রাম ইন্টারন্যাশনাল মেডিকেল কলেজ (CIMC)',
  'আন্দরকিল্লা জেনারেল হাসপাতাল, চট্টগ্রাম',
  'চট্টগ্রাম মেট্রোপলিটন হাসপাতাল'
];

const SCHEDULE_PATTERNS: Array<{ days: string[]; start: string; end: string }> = [
  { days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'], start: '18:00', end: '21:30' },
  { days: ['Sat', 'Sun', 'Mon', 'Wed', 'Thu', 'Fri'], start: '17:00', end: '21:00' },
  { days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'], start: '18:30', end: '22:00' },
  { days: ['Sat', 'Mon', 'Wed', 'Fri'], start: '16:30', end: '20:30' },
  { days: ['Sat', 'Sun', 'Tue', 'Thu', 'Fri'], start: '17:30', end: '21:00' },
  { days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'], start: '19:00', end: '22:00' }
];

const DEPT_SEEDS: DeptSeed[] = [
  {
    key: 'medicine',
    specialtyBn: 'মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ',
    specialtyEn: 'Medicine & Diabetes Specialist',
    degreesList: [
      'MBBS, BCS (Health), FCPS (Medicine), CCD (BIRDEM)',
      'MBBS, MD (Internal Medicine), MACP (USA)',
      'MBBS, FCPS (Medicine), DEM (BIRDEM)'
    ],
    designationList: [
      'সহযোগী অধ্যাপক, মেডিসিন বিভাগ',
      'সহকারী অধ্যাপক, মেডিসিন ও ডায়াবেটিস বিভাগ',
      'সিনিয়র কনসালটেন্ট, ইন্টারনাল মেডিসিন'
    ],
    doctors: [
      { slug: 'dr-mahbubur-rahman-ctg', name: 'ডাঃ মোঃ মাহবুবুর রহমান', nameEn: 'Dr. Md. Mahbubur Rahman', ini: 'MR', g: 'M', rank: 4 },
      { slug: 'dr-shamsul-alam-chowdhury', name: 'অধ্যাপক ডাঃ শামসুল আলম চৌধুরী', nameEn: 'Prof. Dr. Shamsul Alam Chowdhury', ini: 'SA', g: 'M', rank: 5 },
      { slug: 'dr-farzana-yeasmin-med', name: 'ডাঃ ফারজানা ইয়াসমিন', nameEn: 'Dr. Farzana Yeasmin', ini: 'FY', g: 'F', rank: 4 },
      { slug: 'dr-pronab-kanti-mallick', name: 'ডাঃ প্রণব কান্তি মল্লিক', nameEn: 'Dr. Pronab Kanti Mallick', ini: 'PM', g: 'M', rank: 4 },
      { slug: 'dr-ziaul-haque-medicine', name: 'ডাঃ মোঃ জিয়াউল হক', nameEn: 'Dr. Md. Ziaul Haque', ini: 'ZH', g: 'M', rank: 4 },
      { slug: 'dr-enayet-ullaha-khan', name: 'ডাঃ এনায়েত উল্লাহ খান', nameEn: 'Dr. Enayet Ullah Khan', ini: 'EK', g: 'M', rank: 4 },
      { slug: 'dr-sanjida-afrin-med', name: 'ডাঃ সানজিদা আফরিন', nameEn: 'Dr. Sanjida Afrin', ini: 'SA', g: 'F', rank: 3 },
      { slug: 'dr-monirul-islam-ctg', name: 'ডাঃ মনিরুল ইসলাম', nameEn: 'Dr. Monirul Islam', ini: 'MI', g: 'M', rank: 4 },
      { slug: 'dr-debashish-datta-med', name: 'ডাঃ দেবাশীষ দত্ত', nameEn: 'Dr. Debashish Datta', ini: 'DD', g: 'M', rank: 4 }
    ]
  },
  {
    key: 'heart',
    specialtyBn: 'হৃদরোগ ও উচ্চ রক্তচাপ বিশেষজ্ঞ',
    specialtyEn: 'Cardiology & Hypertension Specialist',
    degreesList: [
      'MBBS, BCS (Health), MD (Cardiology), FACC (USA)',
      'MBBS, D-Card (BSMMU), FCPS (Cardiology)',
      'MBBS, MD (Cardiology), FSCAI (USA)'
    ],
    designationList: [
      'সহযোগী অধ্যাপক, কার্ডিওলজি বিভাগ',
      'কনসালটেন্ট, ক্লিনিক্যাল ও ইন্টারভেনশনাল কার্ডিওলজি',
      'সহকারী অধ্যাপক, হৃদরোগ বিভাগ'
    ],
    doctors: [
      { slug: 'dr-tauhidul-anwarr-cardio', name: 'ডাঃ তৌহিদুল আনোয়ার', nameEn: 'Dr. Tauhidul Anwar', ini: 'TA', g: 'M', rank: 5 },
      { slug: 'dr-kazi-shamim-ahmed', name: 'ডাঃ কাজী শামীম আহমেদ', nameEn: 'Dr. Kazi Shamim Ahmed', ini: 'KS', g: 'M', rank: 4 },
      { slug: 'dr-rupam-kanti-nath', name: 'ডাঃ রূপম কান্তি নাথ', nameEn: 'Dr. Rupam Kanti Nath', ini: 'RN', g: 'M', rank: 4 },
      { slug: 'dr-tahmina-akter-cardio', name: 'ডাঃ তাহমিনা আক্তার', nameEn: 'Dr. Tahmina Akter', ini: 'TA', g: 'F', rank: 4 },
      { slug: 'dr-ashraful-huq-siddiqui', name: 'ডাঃ আশরাফুল হক সিদ্দিকী', nameEn: 'Dr. Ashraful Huq Siddiqui', ini: 'AS', g: 'M', rank: 5 },
      { slug: 'dr-shafiqul-islam-heart', name: 'ডাঃ মোঃ শফিকুল ইসলাম', nameEn: 'Dr. Md. Shafiqul Islam', ini: 'SI', g: 'M', rank: 4 },
      { slug: 'dr-sayeed-ahmed-cardio', name: 'ডাঃ সাঈদ আহমেদ', nameEn: 'Dr. Sayeed Ahmed', ini: 'SA', g: 'M', rank: 4 },
      { slug: 'dr-dipankar-sen-heart', name: 'ডাঃ দীপঙ্কর সেন', nameEn: 'Dr. Dipankar Sen', ini: 'DS', g: 'M', rank: 4 },
      { slug: 'dr-nazmul-hasan-cardio', name: 'ডাঃ নাজমুল হাসান', nameEn: 'Dr. Nazmul Hasan', ini: 'NH', g: 'M', rank: 3 }
    ]
  },
  {
    key: 'gynae',
    specialtyBn: 'গাইনি, প্রসূতি ও বন্ধ্যাত্ব বিশেষজ্ঞ',
    specialtyEn: 'Gynae, Obstetrics & Infertility Specialist',
    degreesList: [
      'MBBS, BCS (Health), FCPS (Obs & Gynae), MS (Gynae)',
      'MBBS, DGO, MCPS, FCPS (Obs & Gynae)',
      'MBBS, FCPS (Gynae), Fellowship in Infertility'
    ],
    designationList: [
      'অধ্যাপক ও বিভাগীয় প্রধান, গাইনি ও প্রসূতি বিভাগ',
      'সহযোগী অধ্যাপক, গাইনি ও প্রসূতি বিভাগ',
      'সিনিয়র কনসালটেন্ট, প্রসূতি ও স্ত্রীরোগ বিভাগ'
    ],
    doctors: [
      { slug: 'dr-shamima-nasrin-gynae', name: 'অধ্যাপক ডাঃ শামীমা নাসরিন', nameEn: 'Prof. Dr. Shamima Nasrin', ini: 'SN', g: 'F', rank: 5 },
      { slug: 'dr-roksana-begum-ctg', name: 'ডাঃ রোকসানা বেগম', nameEn: 'Dr. Roksana Begum', ini: 'RB', g: 'F', rank: 4 },
      { slug: 'dr-anjuman-ara-islam', name: 'ডাঃ আঞ্জুমান আরা ইসলাম', nameEn: 'Dr. Anjuman Ara Islam', ini: 'AI', g: 'F', rank: 4 },
      { slug: 'dr-maitreyee-barua-gynae', name: 'ডাঃ মৈত্রেয়ী বড়ুয়া', nameEn: 'Dr. Maitreyee Barua', ini: 'MB', g: 'F', rank: 4 },
      { slug: 'dr-dilruba-yeasmin-ctg', name: 'ডাঃ দিলরুবা ইয়াসমিন', nameEn: 'Dr. Dilruba Yeasmin', ini: 'DY', g: 'F', rank: 4 },
      { slug: 'dr-sabrina-rahman-gynae', name: 'ডাঃ সাবরিনা রহমান', nameEn: 'Dr. Sabrina Rahman', ini: 'SR', g: 'F', rank: 4 },
      { slug: 'dr-lutfun-nahar-gynae', name: 'ডাঃ লুৎফুন নাহার', nameEn: 'Dr. Lutfun Nahar', ini: 'LN', g: 'F', rank: 5 },
      { slug: 'dr-aparajita-dutta-gynae', name: 'ডাঃ অপরাজিতা দত্ত', nameEn: 'Dr. Aparajita Dutta', ini: 'AD', g: 'F', rank: 4 },
      { slug: 'dr-sharmin-sultana-ctg', name: 'ডাঃ শারমিন সুলতানা', nameEn: 'Dr. Sharmin Sultana', ini: 'SS', g: 'F', rank: 3 }
    ]
  },
  {
    key: 'child',
    specialtyBn: 'শিশু ও নবজাতক রোগ বিশেষজ্ঞ',
    specialtyEn: 'Child & Newborn (Pediatrics) Specialist',
    degreesList: [
      'MBBS, BCS (Health), MD (Pediatrics), FCPS (Child)',
      'MBBS, DCH (BSMMU), MD (Neonatology)',
      'MBBS, FCPS (Pediatrics), PGPN (Boston, USA)'
    ],
    designationList: [
      'অধ্যাপক, শিশু স্বাস্থ্য ও নবজাতক বিভাগ',
      'সহযোগী অধ্যাপক, পেডিয়াট্রিক্স বিভাগ',
      'সিনিয়র কনসালটেন্ট, শিশু ও কিশোর রোগ বিভাগ'
    ],
    doctors: [
      { slug: 'dr-zahidul-hasan-child', name: 'অধ্যাপক ডাঃ জাহিদুল হাসান', nameEn: 'Prof. Dr. Zahidul Hasan', ini: 'ZH', g: 'M', rank: 5 },
      { slug: 'dr-syeda-marufa-child', name: 'ডাঃ সৈয়দা মারুফা আক্তার', nameEn: 'Dr. Syeda Marufa Akter', ini: 'SM', g: 'F', rank: 4 },
      { slug: 'dr-subrata-ghosh-ped', name: 'ডাঃ সুব্রত ঘোষ', nameEn: 'Dr. Subrata Ghosh', ini: 'SG', g: 'M', rank: 4 },
      { slug: 'dr-kamrul-hasan-ped', name: 'ডাঃ কামরুল হাসান', nameEn: 'Dr. Kamrul Hasan', ini: 'KH', g: 'M', rank: 4 },
      { slug: 'dr-nasima-akhter-child', name: 'ডাঃ নাসিমা আক্তার', nameEn: 'Dr. Nasima Akhter', ini: 'NA', g: 'F', rank: 4 },
      { slug: 'dr-ariful-islam-child', name: 'ডাঃ আরিফুল ইসলাম', nameEn: 'Dr. Ariful Islam', ini: 'AI', g: 'M', rank: 4 },
      { slug: 'dr-rajib-palit-ped', name: 'ডাঃ রাজীব পালিত', nameEn: 'Dr. Rajib Palit', ini: 'RP', g: 'M', rank: 4 },
      { slug: 'dr-humayun-kabir-child', name: 'ডাঃ হুমায়ুন কবির', nameEn: 'Dr. Humayun Kabir', ini: 'HK', g: 'M', rank: 5 },
      { slug: 'dr-tania-chowdhury-child', name: 'ডাঃ তানিয়া চৌধুরী', nameEn: 'Dr. Tania Chowdhury', ini: 'TC', g: 'F', rank: 3 }
    ]
  },
  {
    key: 'eye',
    specialtyBn: 'চক্ষু রোগ ও ফ্যাকো সার্জন',
    specialtyEn: 'Eye Specialist & Phaco Surgeon',
    degreesList: [
      'MBBS, DO (DU), FCPS (Eye), Fellowship in Phaco & Retina',
      'MBBS, MS (Ophthalmology), ICO (UK)',
      'MBBS, BCS (Health), FCPS (Ophthalmology)'
    ],
    designationList: [
      'সিনিয়র কনসালটেন্ট ও ফ্যাকো সার্জন, চক্ষু বিভাগ',
      'সহযোগী অধ্যাপক, চক্ষু বিজ্ঞান বিভাগ',
      'কনসালটেন্ট, রেটিনা ও কর্নিয়া ইউনিট'
    ],
    doctors: [
      { slug: 'dr-mizanur-rahman-eye', name: 'ডাঃ মিজানুর রহমান', nameEn: 'Dr. Mizanur Rahman', ini: 'MR', g: 'M', rank: 5 },
      { slug: 'dr-ashish-kumar-eye', name: 'ডাঃ আশীষ কুমার দে', nameEn: 'Dr. Ashish Kumar Dey', ini: 'AD', g: 'M', rank: 4 },
      { slug: 'dr-rehana-parvin-eye', name: 'ডাঃ রেহানা পারভীন', nameEn: 'Dr. Rehana Parvin', ini: 'RP', g: 'F', rank: 4 },
      { slug: 'dr-shamsuddin-ahmed-eye', name: 'ডাঃ শামসুদ্দিন আহমেদ', nameEn: 'Dr. Shamsuddin Ahmed', ini: 'SA', g: 'M', rank: 4 },
      { slug: 'dr-pankaj-barua-eye', name: 'ডাঃ পঙ্কজ বড়ুয়া', nameEn: 'Dr. Pankaj Barua', ini: 'PB', g: 'M', rank: 4 },
      { slug: 'dr-firoz-ahmed-eye', name: 'ডাঃ ফিরোজ আহমেদ', nameEn: 'Dr. Firoz Ahmed', ini: 'FA', g: 'M', rank: 4 },
      { slug: 'dr-munmun-sen-eye', name: 'ডাঃ মুনমুন সেন', nameEn: 'Dr. Munmun Sen', ini: 'MS', g: 'F', rank: 4 },
      { slug: 'dr-tariqul-islam-eye', name: 'ডাঃ তরিকুল ইসলাম', nameEn: 'Dr. Tariqul Islam', ini: 'TI', g: 'M', rank: 3 },
      { slug: 'dr-imran-hossain-eye', name: 'ডাঃ ইমরান হোসেন', nameEn: 'Dr. Imran Hossain', ini: 'IH', g: 'M', rank: 4 }
    ]
  },
  {
    key: 'ent',
    specialtyBn: 'নাক, কান, গলা ও হেড-নেক সার্জন',
    specialtyEn: 'ENT & Head-Neck Surgeon',
    degreesList: [
      'MBBS, BCS (Health), FCPS (ENT), MS (Otolaryngology)',
      'MBBS, DLO (BSMMU), FCPS (ENT)',
      'MBBS, MS (ENT & Head-Neck Surgery)'
    ],
    designationList: [
      'সহযোগী অধ্যাপক, নাক-কান-গলা বিভাগ',
      'সিনিয়র কনসালটেন্ট ও মাইক্রো-ইয়ার সার্জন',
      'সহকারী অধ্যাপক, অটোল্যারিংগোলজি বিভাগ'
    ],
    doctors: [
      { slug: 'dr-delwar-hossain-ent', name: 'অধ্যাপক ডাঃ দেলোয়ার হোসেন', nameEn: 'Prof. Dr. Delwar Hossain', ini: 'DH', g: 'M', rank: 5 },
      { slug: 'dr-shantanu-das-ent', name: 'ডাঃ শান্তনু দাশ', nameEn: 'Dr. Shantanu Das', ini: 'SD', g: 'M', rank: 4 },
      { slug: 'dr-mozammel-haque-ent', name: 'ডাঃ মোজাম্মেল হক', nameEn: 'Dr. Mozammel Haque', ini: 'MH', g: 'M', rank: 4 },
      { slug: 'dr-rubina-yasmin-ent', name: 'ডাঃ রুবিনা ইয়াসমিন', nameEn: 'Dr. Rubina Yasmin', ini: 'RY', g: 'F', rank: 4 },
      { slug: 'dr-saiful-alam-ent', name: 'ডাঃ সাইফুল আলম', nameEn: 'Dr. Saiful Alam', ini: 'SA', g: 'M', rank: 4 },
      { slug: 'dr-biplob-chowdhury-ent', name: 'ডাঃ বিপ্লব চৌধুরী', nameEn: 'Dr. Biplob Chowdhury', ini: 'BC', g: 'M', rank: 4 },
      { slug: 'dr-masud-karim-ent', name: 'ডাঃ মাসুদ করিম', nameEn: 'Dr. Masud Karim', ini: 'MK', g: 'M', rank: 4 },
      { slug: 'dr-nabila-hasan-ent', name: 'ডাঃ নাবিলা হাসান', nameEn: 'Dr. Nabila Hasan', ini: 'NH', g: 'F', rank: 3 },
      { slug: 'dr-khorshed-alam-ent', name: 'ডাঃ খোরশেদ আলম', nameEn: 'Dr. Khorshed Alam', ini: 'KA', g: 'M', rank: 4 }
    ]
  },
  {
    key: 'ortho',
    specialtyBn: 'হাড়, জোড়া, বাত ও ট্রমা সার্জন',
    specialtyEn: 'Orthopedic, Spine & Trauma Surgeon',
    degreesList: [
      'MBBS, BCS (Health), MS (Orthopedic Surgery), AO Fellow',
      'MBBS, D-Ortho, FCPS (Ortho Surgery)',
      'MBBS, MS (Ortho), Fellowship in Joint Replacement (India)'
    ],
    designationList: [
      'সহযোগী অধ্যাপক, অর্থোপেডিক সার্জারি বিভাগ',
      'সিনিয়র কনসালটেন্ট, ট্রমা ও জয়েন্ট রিপ্লেসমেন্ট সার্জন',
      'সহকারী অধ্যাপক, অর্থোপেডিক্স বিভাগ'
    ],
    doctors: [
      { slug: 'dr-chandan-kumar-ortho', name: 'অধ্যাপক ডাঃ চন্দন কুমার দাশ', nameEn: 'Prof. Dr. Chandan Kumar Das', ini: 'CD', g: 'M', rank: 5 },
      { slug: 'dr-rafiqul-islam-ortho', name: 'ডাঃ মোঃ রফিকুল ইসলাম', nameEn: 'Dr. Md. Rafiqul Islam', ini: 'RI', g: 'M', rank: 4 },
      { slug: 'dr-tanvir-ahmed-ortho', name: 'ডাঃ তানভীর আহমেদ', nameEn: 'Dr. Tanvir Ahmed', ini: 'TA', g: 'M', rank: 4 },
      { slug: 'dr-sujit-kanti-ortho', name: 'ডাঃ সুজিত কান্তি নাথ', nameEn: 'Dr. Sujit Kanti Nath', ini: 'SN', g: 'M', rank: 4 },
      { slug: 'dr-mahfuzur-rahman-ortho', name: 'ডাঃ মাহফুজুর রহমান', nameEn: 'Dr. Mahfuzur Rahman', ini: 'MR', g: 'M', rank: 4 },
      { slug: 'dr-omar-faruk-ortho', name: 'ডাঃ ওমর ফারুক', nameEn: 'Dr. Omar Faruk', ini: 'OF', g: 'M', rank: 4 },
      { slug: 'dr-sajal-barua-ortho', name: 'ডাঃ সজল বড়ুয়া', nameEn: 'Dr. Sajal Barua', ini: 'SB', g: 'M', rank: 4 },
      { slug: 'dr-hasanuzzaman-ortho', name: 'ডাঃ হাসানুজ্জামান খান', nameEn: 'Dr. Hasanuzzaman Khan', ini: 'HK', g: 'M', rank: 5 },
      { slug: 'dr-ripon-chakraborty-ortho', name: 'ডাঃ রিপন চক্রবর্তী', nameEn: 'Dr. Ripon Chakraborty', ini: 'RC', g: 'M', rank: 3 }
    ]
  },
  {
    key: 'skin',
    specialtyBn: 'চর্ম, অ্যালার্জি, চুল ও যৌন রোগ বিশেষজ্ঞ',
    specialtyEn: 'Dermatology, Allergy & Venereology Specialist',
    degreesList: [
      'MBBS, BCS (Health), DDV (BSMMU), MD (Dermatology)',
      'MBBS, FCPS (Dermatology & Venereology)',
      'MBBS, DDV (CU), Fellowship in Dermatosurgery'
    ],
    designationList: [
      'সহযোগী অধ্যাপক, চর্ম ও যৌন রোগ বিভাগ',
      'সিনিয়র কনসালটেন্ট, ডার্মাটোলজি ও কসমেটোলজি',
      'সহকারী অধ্যাপক, চর্ম ও অ্যালার্জি বিভাগ'
    ],
    doctors: [
      { slug: 'dr-mansurul-alam-skin', name: 'অধ্যাপক ডাঃ মনসুরুল আলম', nameEn: 'Prof. Dr. Mansurul Alam', ini: 'MA', g: 'M', rank: 5 },
      { slug: 'dr-taslima-akhter-skin', name: 'ডাঃ তাসলিমা আক্তার', nameEn: 'Dr. Taslima Akhter', ini: 'TA', g: 'F', rank: 4 },
      { slug: 'dr-samiul-haque-skin', name: 'ডাঃ সামিউল হক', nameEn: 'Dr. Samiul Haque', ini: 'SH', g: 'M', rank: 4 },
      { slug: 'dr-sharmistha-roy-skin', name: 'ডাঃ শর্মিষ্ঠা রায়', nameEn: 'Dr. Sharmistha Roy', ini: 'SR', g: 'F', rank: 4 },
      { slug: 'dr-habibur-rahman-skin', name: 'ডাঃ হাবিবুর রহমান', nameEn: 'Dr. Habibur Rahman', ini: 'HR', g: 'M', rank: 4 },
      { slug: 'dr-nusrat-jahan-skin', name: 'ডাঃ নুসরাত জাহান', nameEn: 'Dr. Nusrat Jahan', ini: 'NJ', g: 'F', rank: 4 },
      { slug: 'dr-anupam-dey-skin', name: 'ডাঃ অনুপম দে', nameEn: 'Dr. Anupam Dey', ini: 'AD', g: 'M', rank: 4 },
      { slug: 'dr-reaz-uddin-skin', name: 'ডাঃ রিয়াজ উদ্দিন', nameEn: 'Dr. Reaz Uddin', ini: 'RU', g: 'M', rank: 3 },
      { slug: 'dr-fariha-tabassum-skin', name: 'ডাঃ ফারিহা তাবাসসুম', nameEn: 'Dr. Fariha Tabassum', ini: 'FT', g: 'F', rank: 4 }
    ]
  },
  {
    key: 'dental',
    specialtyBn: 'দন্ত, মাড়ি ও ম্যাক্সিলোফেসিয়াল সার্জন',
    specialtyEn: 'Dental & Oral Maxillofacial Surgeon',
    degreesList: [
      'BDS (DU), BCS (Health), FCPS (Oral & Maxillofacial Surgery)',
      'BDS, MS (Conservative Dentistry & Endodontics)',
      'BDS (CMC), MPH, PGT (Orthodontics & Implantology)'
    ],
    designationList: [
      'সহযোগী অধ্যাপক ও বিভাগীয় প্রধান, ডেন্টাল ইউনিট',
      'সিনিয়র কনসালটেন্ট ও ডেন্টাল ইমপ্ল্যান্ট সার্জন',
      'কনসালটেন্ট, ওরাল ও ম্যাক্সিলোফেসিয়াল সার্জারি'
    ],
    doctors: [
      { slug: 'dr-azম-khasru-dental', name: 'অধ্যাপক ডাঃ এ.জেড.এম. খসরু', nameEn: 'Prof. Dr. A.Z.M. Khasru', ini: 'AK', g: 'M', rank: 5 },
      { slug: 'dr-israt-jahan-dental', name: 'ডাঃ ইসরাত জাহান', nameEn: 'Dr. Israt Jahan', ini: 'IJ', g: 'F', rank: 4 },
      { slug: 'dr-joydeb-mitra-dental', name: 'ডাঃ জয়দেব মিত্র', nameEn: 'Dr. Joydeb Mitra', ini: 'JM', g: 'M', rank: 4 },
      { slug: 'dr-salman-farshi-dental', name: 'ডাঃ সালমান ফারসী', nameEn: 'Dr. Salman Farshi', ini: 'SF', g: 'M', rank: 4 },
      { slug: 'dr-sadia-afroz-dental', name: 'ডাঃ সাদিয়া আফরোজ', nameEn: 'Dr. Sadia Afroz', ini: 'SA', g: 'F', rank: 4 },
      { slug: 'dr-morshed-alam-dental', name: 'ডাঃ মোর্শেদ আলম', nameEn: 'Dr. Morshed Alam', ini: 'MA', g: 'M', rank: 4 },
      { slug: 'dr-priyanka-barua-dental', name: 'ডাঃ প্রিয়াঙ্কা বড়ুয়া', nameEn: 'Dr. Priyanka Barua', ini: 'PB', g: 'F', rank: 3 },
      { slug: 'dr-tarek-mahmud-dental', name: 'ডাঃ তারেক মাহমুদ', nameEn: 'Dr. Tarek Mahmud', ini: 'TM', g: 'M', rank: 4 },
      { slug: 'dr-shahedul-islam-dental', name: 'ডাঃ শাহেদুল ইসলাম', nameEn: 'Dr. Shahedul Islam', ini: 'SI', g: 'M', rank: 4 }
    ]
  },
  {
    key: 'neuro',
    specialtyBn: 'নিউরো মেডিসিন, ব্রেন, স্ট্রোক ও নার্ভ বিশেষজ্ঞ',
    specialtyEn: 'Neurology, Brain, Stroke & Nerve Specialist',
    degreesList: [
      'MBBS, BCS (Health), MD (Neurology), FCPS (Medicine)',
      'MBBS, MD (Neuromedicine), Member (American Academy of Neurology)',
      'MBBS, MS (Neurosurgery), Fellowship in Spine & Brain Surgery'
    ],
    designationList: [
      'অধ্যাপক, নিউরোলজি বিভাগ',
      'সহযোগী অধ্যাপক, নিউরো মেডিসিন বিভাগ',
      'সিনিয়র কনসালটেন্ট, ব্রেন, স্পাইন ও স্ট্রোক ইউনিট'
    ],
    doctors: [
      { slug: 'dr-hasanuzzaman-neuro-ctg', name: 'অধ্যাপক ডাঃ মোঃ হাসানুজ্জামান', nameEn: 'Prof. Dr. Md. Hasanuzzaman', ini: 'MH', g: 'M', rank: 5 },
      { slug: 'dr-tapan-kumar-neuro', name: 'ডাঃ তপন কুমার সরকার', nameEn: 'Dr. Tapan Kumar Sarkar', ini: 'TS', g: 'M', rank: 4 },
      { slug: 'dr-mahiuddin-ahmed-neuro', name: 'ডাঃ মহিউদ্দিন আহমেদ', nameEn: 'Dr. Mahiuddin Ahmed', ini: 'MA', g: 'M', rank: 4 },
      { slug: 'dr-shiuli-majumder-neuro', name: 'ডাঃ শিউলি মজুমদার', nameEn: 'Dr. Shiuli Majumder', ini: 'SM', g: 'F', rank: 4 },
      { slug: 'dr-anwarul-kibriya-neuro', name: 'ডাঃ আনোয়ারুল কিবরিয়া', nameEn: 'Dr. Anwarul Kibriya', ini: 'AK', g: 'M', rank: 4 },
      { slug: 'dr-pijush-kanti-neuro', name: 'ডাঃ পীযূষ কান্তি দে', nameEn: 'Dr. Pijush Kanti Dey', ini: 'PD', g: 'M', rank: 4 },
      { slug: 'dr-shamsul-arefin-neuro', name: 'ডাঃ শামসুল আরেফিন', nameEn: 'Dr. Shamsul Arefin', ini: 'SA', g: 'M', rank: 4 },
      { slug: 'dr-rashidul-hasan-neuro', name: 'ডাঃ রাশিদুল হাসান', nameEn: 'Dr. Rashidul Hasan', ini: 'RH', g: 'M', rank: 4 },
      { slug: 'dr-farhana-akter-neuro', name: 'ডাঃ ফারহানা আক্তার', nameEn: 'Dr. Farhana Akter', ini: 'FA', g: 'F', rank: 3 }
    ]
  },
  {
    key: 'kidney',
    specialtyBn: 'কিডনি, মূত্রনালী ও ডায়ালাইসিস বিশেষজ্ঞ',
    specialtyEn: 'Kidney (Nephrology) & Urology Specialist',
    degreesList: [
      'MBBS, BCS (Health), MD (Nephrology), FASN (USA)',
      'MBBS, FCPS (Medicine), MD (Nephrology)',
      'MBBS, MS (Urology), Endourology & Kidney Stone Surgeon'
    ],
    designationList: [
      'অধ্যাপক ও বিভাগীয় প্রধান, নেফ্রোলজি বিভাগ',
      'সহযোগী অধ্যাপক, কিডনি রোগ বিভাগ',
      'সিনিয়র কনসালটেন্ট, নেফ্রোলজি ও ইউরোলজি ইউনিট'
    ],
    doctors: [
      { slug: 'dr-pradip-kumar-kidney', name: 'অধ্যাপক ডাঃ প্রদীপ কুমার দত্ত', nameEn: 'Prof. Dr. Pradip Kumar Dutta', ini: 'PD', g: 'M', rank: 5 },
      { slug: 'dr-nurul-huda-kidney', name: 'ডাঃ মোঃ নূরুল হুদা', nameEn: 'Dr. Md. Nurul Huda', ini: 'NH', g: 'M', rank: 5 },
      { slug: 'dr-kazi-abdul-mannan-kidney', name: 'ডাঃ কাজী আব্দুল মান্নান', nameEn: 'Dr. Kazi Abdul Mannan', ini: 'KM', g: 'M', rank: 4 },
      { slug: 'dr-soma-chowdhury-kidney', name: 'ডাঃ সোমা চৌধুরী', nameEn: 'Dr. Soma Chowdhury', ini: 'SC', g: 'F', rank: 4 },
      { slug: 'dr-jafor-iqbal-kidney', name: 'ডাঃ জাফর ইকবাল', nameEn: 'Dr. Jafor Iqbal', ini: 'JI', g: 'M', rank: 4 },
      { slug: 'dr-subhashish-barua-kidney', name: 'ডাঃ শুভাশীষ বড়ুয়া', nameEn: 'Dr. Subhashish Barua', ini: 'SB', g: 'M', rank: 4 },
      { slug: 'dr-mostafizur-rahman-kidney', name: 'ডাঃ মোস্তাফিজুর রহমান', nameEn: 'Dr. Mostafizur Rahman', ini: 'MR', g: 'M', rank: 4 },
      { slug: 'dr-nasrin-sultana-kidney', name: 'ডাঃ নাসরিন সুলতানা', nameEn: 'Dr. Nasrin Sultana', ini: 'NS', g: 'F', rank: 4 },
      { slug: 'dr-iftekhairul-islam-kidney', name: 'ডাঃ ইফতেখারুল ইসলাম', nameEn: 'Dr. Iftekhairul Islam', ini: 'II', g: 'M', rank: 3 }
    ]
  },
  {
    key: 'surgery',
    specialtyBn: 'জেনারেল, ল্যাপারোস্কোপিক ও কলোরেক্টাল সার্জন',
    specialtyEn: 'General, Laparoscopic & Colorectal Surgeon',
    degreesList: [
      'MBBS, BCS (Health), FCPS (Surgery), FACS (USA)',
      'MBBS, MS (General Surgery), FMAS (Laparoscopic Surgery)',
      'MBBS, FCPS (Surgery), FRCS (Glasgow)'
    ],
    designationList: [
      'অধ্যাপক, জেনারেল ও ল্যাপারোস্কোপিক সার্জারি বিভাগ',
      'সহযোগী অধ্যাপক, সার্জারি বিভাগ',
      'সিনিয়র কনসালটেন্ট, হেপাটোবিলিয়ারি ও কলোরেক্টাল সার্জারি'
    ],
    doctors: [
      { slug: 'dr-omar-ali-surgery', name: 'অধ্যাপক ডাঃ খন্দকার ওমর আলী', nameEn: 'Prof. Dr. Khandaker Omar Ali', ini: 'OA', g: 'M', rank: 5 },
      { slug: 'dr-sajjad-yousuf-surgery', name: 'ডাঃ সাজ্জাদ ইউসুফ', nameEn: 'Dr. Sajjad Yousuf', ini: 'SY', g: 'M', rank: 4 },
      { slug: 'dr-tahmina-banu-surgery', name: 'অধ্যাপক ডাঃ তাহমিনা বানু', nameEn: 'Prof. Dr. Tahmina Banu', ini: 'TB', g: 'F', rank: 5 },
      { slug: 'dr-bishwajit-datta-surgery', name: 'ডাঃ বিশ্বজিৎ দত্ত', nameEn: 'Dr. Bishwajit Datta', ini: 'BD', g: 'M', rank: 4 },
      { slug: 'dr-ekramul-haque-surgery', name: 'ডাঃ একরামুল হক', nameEn: 'Dr. Ekramul Haque', ini: 'EH', g: 'M', rank: 4 },
      { slug: 'dr-lubna-yeasmin-surgery', name: 'ডাঃ লুবনা ইয়াসমিন', nameEn: 'Dr. Lubna Yeasmin', ini: 'LY', g: 'F', rank: 4 },
      { slug: 'dr-golam-mostafa-surgery', name: 'ডাঃ গোলাম মোস্তফা', nameEn: 'Dr. Golam Mostafa', ini: 'GM', g: 'M', rank: 4 },
      { slug: 'dr-ratan-kumar-surgery', name: 'ডাঃ রতন কুমার নাথ', nameEn: 'Dr. Ratan Kumar Nath', ini: 'RN', g: 'M', rank: 4 },
      { slug: 'dr-shahriar-kabir-surgery', name: 'ডাঃ শাহরিয়ার কবির', nameEn: 'Dr. Shahriar Kabir', ini: 'SK', g: 'M', rank: 3 }
    ]
  }
];

export const ADDITIONAL_100_DOCTORS: Doctor[] = DEPT_SEEDS.flatMap((dept, dIdx) =>
  dept.doctors.map((doc, idx) => {
    const chamber1 = CHAMBERS_POOL[(dIdx * 3 + idx) % CHAMBERS_POOL.length];
    const sched1 = SCHEDULE_PATTERNS[(dIdx + idx) % SCHEDULE_PATTERNS.length];
    const inst = INSTITUTIONS_POOL[(dIdx * 2 + idx) % INSTITUTIONS_POOL.length];
    const degrees = dept.degreesList[idx % dept.degreesList.length];
    const designation = dept.designationList[idx % dept.designationList.length];

    return {
      slug: doc.slug,
      name: doc.name,
      nameEn: doc.nameEn,
      ini: doc.ini,
      g: doc.g,
      rank: doc.rank,
      specialtyBn: dept.specialtyBn,
      specialtyEn: dept.specialtyEn,
      specialtyKey: dept.key,
      degrees,
      designation,
      institution: inst,
      ch: [
        {
          name: chamber1.name,
          address: chamber1.address,
          area: chamber1.area,
          days: sched1.days,
          start: sched1.start,
          end: sched1.end,
          serial: chamber1.serial,
          fee: chamber1.fee
        }
      ],
      verified: '2026-10-15'
    };
  })
);
