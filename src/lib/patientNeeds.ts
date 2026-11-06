import { Chamber, Doctor } from '../types/doctor';

export interface SymptomMapping {
  id: string;
  labelBn: string;
  labelEn: string;
  specialtyKey: string;
  deptBn: string;
  deptEn: string;
  keywords: string[];
}

export const SYMPTOM_MAPPINGS: SymptomMapping[] = [
  {
    id: 'breathing-chest-asthma',
    labelBn: 'শ্বাসকষ্ট, হাঁপানি বা কাশি',
    labelEn: 'Breathing, Asthma or Cough',
    specialtyKey: 'chest',
    deptBn: 'শ্বাসকষ্ট, অ্যাজমা ও বক্ষব্যাধি বিশেষজ্ঞ',
    deptEn: 'Pulmonology, Asthma & Chest Specialist',
    keywords: [
      'শ্বাসকষ্ট', 'হাঁপানি', 'কাশি', 'অ্যাজমা', 'বুকে ঘড়ঘড়', 'কফ', 'যক্ষ্মা', 'টিবি', 'সিওপিডি', 'ফুসফুস', 'বুকে কফ', 'ইনহেলার', 'ধূমপান', 'ব্রঙ্কাইটিস',
      'asthma', 'breathing', 'cough', 'chest', 'copd', 'tuberculosis', 'tb', 'lungs', 'inhaler', 'pulmonology', 'respiratory'
    ]
  },
  {
    id: 'gastric-liver-acidity',
    labelBn: 'গ্যাস্ট্রিক, পেটের সমস্যা বা লিভার',
    labelEn: 'Gastric, Liver or Acidity',
    specialtyKey: 'gastro',
    deptBn: 'গ্যাস্ট্রোএন্টারোলজি ও লিভার বিশেষজ্ঞ',
    deptEn: 'Gastroenterology & Hepatology Specialist',
    keywords: [
      'গ্যাস্ট্রিক', 'গ্যাস', 'এসিডিটি', 'বুক জ্বালাপোড়া', 'পেট ব্যথা', 'লিভার', 'জন্ডিস', 'ফ্যাটি লিভার', 'বমি', 'বদহজম', 'আলসার', 'আইবিএস', 'হেপাটাইটিস', 'এন্ডোস্কোপি',
      'gastric', 'gas', 'acidity', 'liver', 'jaundice', 'hepatitis', 'ulcer', 'ibs', 'endoscopy', 'colonoscopy', 'stomach'
    ]
  },
  {
    id: 'fever-general-medicine',
    labelBn: 'জ্বর, ক্লান্তি বা সাধারণ মেডিসিন',
    labelEn: 'Fever, Weakness or General Medicine',
    specialtyKey: 'medicine',
    deptBn: 'মেডিসিন বিশেষজ্ঞ',
    deptEn: 'Medicine Specialist',
    keywords: [
      'জ্বর', 'দুর্বলতা', 'গা ব্যথা', 'প্রেসার', 'উচ্চ রক্তচাপ', 'টাইফয়েড', 'ডেঙ্গু', 'রক্তশূন্যতা',
      'fever', 'weakness', 'general medicine', 'pressure', 'bp', 'dengue', 'typhoid'
    ]
  },
  {
    id: 'thyroid-diabetes-hormone',
    labelBn: 'থাইরয়েড, হরমোন বা ডায়াবেটিস',
    labelEn: 'Thyroid, Hormone or Diabetes',
    specialtyKey: 'endocrine',
    deptBn: 'ডায়াবেটিস, থাইরয়েড ও হরমোন বিশেষজ্ঞ',
    deptEn: 'Endocrinology, Thyroid & Hormone Specialist',
    keywords: [
      'থাইরয়েড', 'থাইরয়েড', 'হরমোন', 'ডায়াবেটিস', 'ডায়াবেটিস', 'সুগার', 'ওজন বৃদ্ধি', 'ইনসুলিন',
      'thyroid', 'hormone', 'diabetes', 'sugar', 'insulin', 'obesity', 'endocrine'
    ]
  },
  {
    id: 'cancer-tumor-care',
    labelBn: 'ক্যান্সার, টিউমার বা কেমোথেরাপি',
    labelEn: 'Cancer, Tumor or Chemotherapy',
    specialtyKey: 'cancer',
    deptBn: 'ক্যান্সার ও অনকোলজি বিশেষজ্ঞ',
    deptEn: 'Oncology & Cancer Specialist',
    keywords: [
      'ক্যান্সার', 'টিউমার', 'ব্রেস্ট লাম্প', 'কেমোথেরাপি', 'রেডিয়েশন', 'বায়োপসি', 'অঙ্কোলজি', 'অনকোলজি',
      'cancer', 'tumor', 'oncology', 'chemotherapy', 'biopsy', 'radiation'
    ]
  },
  {
    id: 'physical-medicine-pain',
    labelBn: 'বাতব্যথা, প্যারালাইসিস বা ফ্রোজেন শোল্ডার',
    labelEn: 'Arthritis, Paralysis or Pain Rehab',
    specialtyKey: 'physmed',
    deptBn: 'বাতব্যথা ও ফিজিক্যাল মেডিসিন বিশেষজ্ঞ',
    deptEn: 'Physical Medicine & Rehabilitation',
    keywords: [
      'বাতব্যথা', 'প্যারালাইসিস', 'ফ্রোজেন শোল্ডার', 'ফিজিওথেরাপি', 'আর্থ্রাইটিস', 'স্ট্রোক রিহ্যাব', 'কোমর ব্যথা',
      'pain', 'arthritis', 'paralysis', 'rehab', 'physiotherapy', 'frozen shoulder', 'physical medicine'
    ]
  },
  {
    id: 'mental-health-depression',
    labelBn: 'মানসিক রোগ, অনিদ্রা বা বিষণ্ণতা',
    labelEn: 'Mental Health, Insomnia or Depression',
    specialtyKey: 'psychiatry',
    deptBn: 'মানসিক রোগ ও সাইকিয়াট্রি বিশেষজ্ঞ',
    deptEn: 'Psychiatry & Behavioral Health',
    keywords: [
      'মানসিক রোগ', 'হতাশা', 'ডিপ্রেশন', 'ঘুম না হওয়া', 'অনিদ্রা', 'উদ্বেগ', 'প্যানিক', 'মানসিক চাপ', 'টেনশন', 'ওসিডি', 'মাদকাসক্তি',
      'depression', 'anxiety', 'insomnia', 'sleep problem', 'mental health', 'psychiatry', 'panic', 'stress'
    ]
  },
  {
    id: 'chest-pain-bp',
    labelBn: 'বুক ব্যথা, ধড়ফড় বা হাই প্রেসার',
    labelEn: 'Chest Pain, Palpitation or High BP',
    specialtyKey: 'heart',
    deptBn: 'হৃদরোগ (কার্ডিওলজি) বিশেষজ্ঞ',
    deptEn: 'Cardiology (Heart) Specialist',
    keywords: [
      'বুক ব্যথা', 'বুক ধড়ফড়', 'বুক ধড়ফড়', 'হার্ট', 'হৃদরোগ', 'হাই প্রেসার', 'রক্তচাপ', 'কোলেস্টেরল', 'ইসিজি', 'ইকো',
      'chest pain', 'palpitation', 'heart', 'blood pressure', 'high bp', 'hypertension', 'cholesterol', 'cardiac', 'block'
    ]
  },
  {
    id: 'headache-vertigo-nerve',
    labelBn: 'মাথা ঘোরা, মাইগ্রেন বা হাত-পা অবশ',
    labelEn: 'Vertigo, Migraine or Numbness',
    specialtyKey: 'neuro',
    deptBn: 'নিউরো মেডিসিন (ব্রেন ও নার্ভ) বিশেষজ্ঞ',
    deptEn: 'Neurology (Brain & Nerve) Specialist',
    keywords: [
      'মাথাব্যথা', 'মাথা ব্যথা', 'মাথা ঘোরা', 'মাথা ঘুরানো', 'মাইগ্রেন', 'হাত পা অবশ', 'অবশ', 'ঝিনঝিন', 'স্ট্রোক', 'প্যারালাইসিস', 'খিঁচুনি', 'নার্ভ', 'রগ টান', 'ঘুম না হওয়া',
      'headache', 'migraine', 'vertigo', 'dizziness', 'numbness', 'stroke', 'paralysis', 'seizure', 'nerve', 'brain'
    ]
  },
  {
    id: 'back-knee-joint',
    labelBn: 'কোমর, হাঁটু বা ঘাড় ব্যথা',
    labelEn: 'Back, Knee or Neck Pain',
    specialtyKey: 'ortho',
    deptBn: 'হাড় ও জোড়া (অর্থোপেডিক) বিশেষজ্ঞ',
    deptEn: 'Orthopedics (Bone & Joint) Specialist',
    keywords: [
      'কোমর ব্যথা', 'হাঁটু ব্যথা', 'ঘাড় ব্যথা', 'ঘাড় ব্যথা', 'গিরায় ব্যথা', 'বাত', 'আর্থ্রাইটিস', 'হাড় ভাঙ্গা', 'হাড় ক্ষয়', 'গোড়ালি ব্যথা', 'মেরুদণ্ড',
      'back pain', 'knee pain', 'neck pain', 'joint pain', 'arthritis', 'bone', 'fracture', 'spine', 'spondylosis', 'uric acid'
    ]
  },
  {
    id: 'pregnancy-period',
    labelBn: 'গর্ভকালীন সেবা বা মাসিকের সমস্যা',
    labelEn: 'Pregnancy Care or Period Issues',
    specialtyKey: 'gynae',
    deptBn: 'গাইনি ও প্রসূতি বিশেষজ্ঞ',
    deptEn: 'Gynae & Obstetrics Specialist',
    keywords: [
      'গর্ভবতী', 'প্রেগন্যান্সি', 'মাসিক', 'অনিয়মিত মাসিক', 'সাদাস্রাব', 'বন্ধ্যাত্ব', 'সন্তান না হওয়া', 'জরায়ু', 'ওভারিয়ান সিস্ট', 'পিসিওএস', 'সিজার',
      'pregnancy', 'maternity', 'period', 'menstruation', 'infertility', 'pcos', 'cyst', 'uterus', 'gynae'
    ]
  },
  {
    id: 'child-fever-growth',
    labelBn: 'শিশুর জ্বর, সর্দি-কাশি বা পুষ্টি',
    labelEn: 'Child Fever, Cold or Growth',
    specialtyKey: 'child',
    deptBn: 'শিশু ও নবজাতক বিশেষজ্ঞ',
    deptEn: 'Child & Newborn (Pediatrics) Specialist',
    keywords: [
      'শিশুর জ্বর', 'বাচ্চার জ্বর', 'বাচ্চার কাশি', 'নবজাতক', 'শিশুর ওজন', 'বাচ্চা খায় না', 'নিউমোনিয়া', 'শিশুর ডায়রিয়া', 'টিকা',
      'baby fever', 'child cough', 'newborn', 'pediatric', 'kid', 'pneumonia', 'baby food'
    ]
  },
  {
    id: 'skin-allergy-hair',
    labelBn: 'চুল পড়া, চুলকানি বা এলার্জি',
    labelEn: 'Hair Fall, Itching or Allergy',
    specialtyKey: 'skin',
    deptBn: 'চর্ম ও এলার্জি বিশেষজ্ঞ',
    deptEn: 'Skin, Hair & Allergy Specialist',
    keywords: [
      'চুল পড়া', 'চুল পড়া', 'খুশকি', 'চুলকানি', 'এলার্জি', 'অ্যালার্জি', 'ব্রণ', 'মেছতা', 'দাদ', 'একজিমা', 'সোরিয়াসিস', 'চামড়ায় দাগ', 'নখের সমস্যা',
      'hair fall', 'hair loss', 'itching', 'allergy', 'acne', 'pimples', 'eczema', 'fungal', 'ringworm', 'rash', 'skin'
    ]
  },
  {
    id: 'ear-nose-throat',
    labelBn: 'কানে ব্যথা, টনসিল বা সাইনাস',
    labelEn: 'Ear Pain, Tonsil or Sinus',
    specialtyKey: 'ent',
    deptBn: 'নাক-কান-গলা (ENT) বিশেষজ্ঞ',
    deptEn: 'ENT (Ear, Nose & Throat) Specialist',
    keywords: [
      'কানে কম শোনা', 'কান পাকা', 'কানে ব্যথা', 'কানে ভোঁ ভোঁ', 'টনসিল', 'গলা ব্যথা', 'সাইনাস', 'নাক বন্ধ', 'পলিপ', 'নাক দিয়ে রক্ত',
      'ear pain', 'hearing', 'tonsil', 'throat pain', 'sinus', 'nasal polyp', 'nose bleed', 'vertigo ent'
    ]
  },
  {
    id: 'kidney-urine',
    labelBn: 'প্রস্রাবে জ্বালাপোড়া বা পা ফোলা',
    labelEn: 'Urine Infection or Leg Swelling',
    specialtyKey: 'kidney',
    deptBn: 'কিডনি ও ইউরোলজি বিশেষজ্ঞ',
    deptEn: 'Kidney (Nephrology) Specialist',
    keywords: [
      'প্রস্রাবে জ্বালাপোড়া', 'প্রস্রাবে জ্বালাপোড়া', 'প্রস্রাবের ইনফেকশন', 'পা ফোলা', 'মুখ ফোলা', 'ক্রিয়েটিনিন', 'কিডনি পাথর', 'কিডনি',
      'urine infection', 'uti', 'burning urination', 'leg swelling', 'creatinine', 'kidney stone', 'dialysis', 'renal'
    ]
  },
  {
    id: 'eye-vision',
    labelBn: 'চোখে ঝাপসা দেখা বা ছানি',
    labelEn: 'Blurry Vision or Cataract',
    specialtyKey: 'eye',
    deptBn: 'চক্ষু রোগ বিশেষজ্ঞ',
    deptEn: 'Eye (Ophthalmology) Specialist',
    keywords: [
      'চোখে ঝাপসা', 'চোখ লাল', 'চোখ দিয়ে পানি', 'ছানি', 'চশমার পাওয়ার', 'চোখ চুলকানি', 'রেটিনা',
      'blurry vision', 'cataract', 'red eye', 'eye pain', 'glasses', 'retina', 'glaucoma'
    ]
  },
  {
    id: 'piles-hernia-stone',
    labelBn: 'পাইলস, হার্নিয়া বা পিত্তথলির পাথর',
    labelEn: 'Piles, Hernia or Gallstone',
    specialtyKey: 'surgery',
    deptBn: 'জেনারেল ও ল্যাপারোস্কোপিক সার্জন',
    deptEn: 'General & Laparoscopic Surgeon',
    keywords: [
      'পাইলস', 'ফিস্টুলা', 'অর্শ', 'হার্নিয়া', 'হার্নিয়া', 'পিত্তথলির পাথর', 'গলব্লাডার', 'অ্যাপেন্ডিসাইটিস', 'টিউমার', 'অপারেশন',
      'piles', 'fistula', 'fissure', 'hernia', 'gallstone', 'gallbladder', 'appendix', 'tumor', 'surgery'
    ]
  },
  {
    id: 'tooth-gum',
    labelBn: 'দাঁত ব্যথা বা মাড়ি দিয়ে রক্ত পড়া',
    labelEn: 'Toothache or Bleeding Gums',
    specialtyKey: 'dental',
    deptBn: 'দন্ত ও মাড়ি (ডেন্টাল) বিশেষজ্ঞ',
    deptEn: 'Dental & Maxillofacial Specialist',
    keywords: [
      'দাঁত ব্যথা', 'মাড়ি দিয়ে রক্ত', 'মাড়ি ফোলা', 'রুট ক্যানেল', 'আক্কেল দাঁত', 'দাঁতে গর্ত', 'স্কেলিং',
      'toothache', 'tooth pain', 'bleeding gum', 'root canal', 'rct', 'wisdom tooth', 'cavity', 'dental'
    ]
  }
];

/**
 * Matches a search query against patient symptom keywords and returns matching specialty keys + matched symptom info
 */
export function matchQueryToSymptoms(query: string): SymptomMapping | null {
  const q = query.toLowerCase().trim();
  if (q.length < 2) return null;

  for (const item of SYMPTOM_MAPPINGS) {
    if (
      item.labelBn.toLowerCase().includes(q) ||
      item.labelEn.toLowerCase().includes(q) ||
      item.keywords.some(k => k.toLowerCase().includes(q) || q.includes(k.toLowerCase()))
    ) {
      return item;
    }
  }
  return null;
}

export interface ChamberBookingGuide {
  serialRuleBn: string;
  serialRuleEn: string;
  serialBadgeBn: string;
  serialBadgeEn: string;
  reportRuleBn: string;
  reportRuleEn: string;
}

/**
 * Returns realistic serial booking window & report showing rule for a chamber in Chattogram
 */
export function getChamberBookingGuide(chamber: Chamber): ChamberBookingGuide {
  const nameLower = chamber.name.toLowerCase();
  const [startHourStr] = (chamber.start || '18:00').split(':');
  const startH = parseInt(startHourStr, 10) || 18;

  // Calculate report showing window (usually 1.5 - 2 hours after chamber starts)
  const reportH = Math.min(22, startH + 2);
  const reportH12 = reportH % 12 || 12;
  const reportPeriodBn = reportH >= 18 ? 'রাত' : reportH >= 15 ? 'বিকেল' : 'দুপুর';
  const reportPeriodEn = reportH >= 12 ? 'PM' : 'AM';

  // Hospital-specific realistic serial timing in Chattogram
  if (nameLower.includes('parkview') || nameLower.includes('পার্কভিউ') || nameLower.includes('cscr') || nameLower.includes('সিএসসিআর')) {
    return {
      serialBadgeBn: 'সকাল ৮:৩০ থেকে ফোনে সিরিয়াল',
      serialBadgeEn: 'Phone serial from 8:30 AM',
      serialRuleBn: 'সকাল ৮:৩০ – দুপুর ১২:০০টার মধ্যে ফোনে অথবা ১ দিন আগে রিসেপশনে সিরিয়াল বুক করুন।',
      serialRuleEn: 'Book by phone between 8:30 AM – 12:00 PM or 1 day ahead at reception.',
      reportRuleBn: `${reportPeriodBn} ${reportH12}:০০টার পর সরাসরি চেম্বার সহকারীকে রিপোর্ট দেখাতে পারবেন (নতুন সিরিয়াল লাগে না)।`,
      reportRuleEn: `Show test reports after ${reportH12}:00 ${reportPeriodEn} directly via chamber assistant.`
    };
  }

  if (nameLower.includes('chevron') || nameLower.includes('শেভরণ') || nameLower.includes('epic') || nameLower.includes('এপিক') || nameLower.includes('popular') || nameLower.includes('পপুলার')) {
    return {
      serialBadgeBn: 'সকাল ৮:০০ থেকে ফোনে সিরিয়াল',
      serialBadgeEn: 'Phone serial from 8:00 AM',
      serialRuleBn: 'সকাল ৮:০০ – ১১:৩০টার মধ্যে ফোনে অথবা হোয়াটসঅ্যাপে সিরিয়াল নিশ্চিত করুন।',
      serialRuleEn: 'Call between 8:00 AM – 11:30 AM or message on WhatsApp to confirm serial.',
      reportRuleBn: `চেম্বার চলাকালীন ${reportPeriodBn} ${reportH12}:০০টার পর রিপোর্ট দেখানো হয়।`,
      reportRuleEn: `Reports are checked after ${reportH12}:00 ${reportPeriodEn} during chamber hours.`
    };
  }

  if (nameLower.includes('evercare') || nameLower.includes('এভারকেয়ার') || nameLower.includes('imperial') || nameLower.includes('ইম্পেরিয়াল')) {
    return {
      serialBadgeBn: '১–২ দিন আগে অ্যাপয়েন্টমেন্ট',
      serialBadgeEn: 'Book 1–2 days ahead',
      serialRuleBn: 'হটলাইন নম্বরে কল করে অন্তত ১–২ দিন আগে অ্যাপয়েন্টমেন্ট স্লট বুক করা ভালো।',
      serialRuleEn: 'Call the hospital hotline 1–2 days in advance to reserve an appointment slot.',
      reportRuleBn: 'অ্যাপয়েন্টমেন্ট ডেস্কে জানিয়ে ফলো-আপ স্লটে রিপোর্ট দেখাতে পারবেন।',
      reportRuleEn: 'Inform the appointment desk for follow-up report review.'
    };
  }

  // Default for other chambers in Chattogram
  return {
    serialBadgeBn: 'সকাল ৯:০০ থেকে ফোনে সিরিয়াল',
    serialBadgeEn: 'Phone serial from 9:00 AM',
    serialRuleBn: 'চেম্বারের দিনে সকাল ৯:০০ – দুপুর ১:০০টার মধ্যে সিরিয়াল নম্বরে কল করে নাম লেখান।',
    serialRuleEn: 'Call the serial number between 9:00 AM – 1:00 PM on chamber days to book.',
    reportRuleBn: `${reportPeriodBn} ${reportH12}:০০টার পর চেম্বার সহকারীর মাধ্যমে রিপোর্ট দেখানো যায়।`,
    reportRuleEn: `Reports can be shown after ${reportH12}:00 ${reportPeriodEn} through the chamber assistant.`
  };
}

export interface DoctorFaqItem {
  questionBn: string;
  answerBn: string;
  questionEn: string;
  answerEn: string;
}

const BN_DAY_NAMES: Record<string, string> = {
  Sat: 'শনিবার',
  Sun: 'রবিবার',
  Mon: 'সোমবার',
  Tue: 'মঙ্গলবার',
  Wed: 'বুধবার',
  Thu: 'বৃহস্পতিবার',
  Fri: 'শুক্রবার'
};

function formatTimeReadable(time24: string, lang: 'bn' | 'en'): string {
  const [hStr, mStr] = (time24 || '18:00').split(':');
  const h = parseInt(hStr, 10);
  const m = mStr || '00';
  const h12 = h % 12 || 12;
  if (lang === 'bn') {
    const period = h < 12 ? 'সকাল' : h < 15 ? 'দুপুর' : h < 18 ? 'বিকেল' : 'সন্ধ্যা/রাত';
    return `${period} ${h12}:${m}`;
  }
  return `${h12}:${m} ${h >= 12 ? 'PM' : 'AM'}`;
}

/**
 * Generates Google "People Also Ask" (PAA) / FAQ items for a Doctor Profile + SEO Schema
 */
export function generateDoctorFaqs(doctor: Doctor): DoctorFaqItem[] {
  const primary = doctor.ch[0];
  if (!primary) return [];

  const guide = getChamberBookingGuide(primary);
  const daysBn = primary.days.map(d => BN_DAY_NAMES[d] || d).join(', ');
  const daysEn = primary.days.join(', ');
  const timeRangeBn = `${formatTimeReadable(primary.start, 'bn')} থেকে ${formatTimeReadable(primary.end, 'bn')}`;
  const timeRangeEn = `${formatTimeReadable(primary.start, 'en')} to ${formatTimeReadable(primary.end, 'en')}`;
  const isOpenFriday = doctor.ch.some(c => c.days.includes('Fri'));
  const symptomInfo = SYMPTOM_MAPPINGS.find(s => s.specialtyKey === doctor.specialtyKey);

  return [
    {
      questionBn: `${doctor.name} কোথায় বসেন এবং চেম্বারের সময়সূচি কী?`,
      answerBn: `${doctor.name} চট্টগ্রামের ${primary.name} (${primary.address}, ${primary.area})-এ নিয়মিত রোগী দেখেন। তিনি প্রতি সপ্তাহে ${daysBn} ${timeRangeBn} পর্যন্ত চেম্বার করেন।`,
      questionEn: `Where is ${doctor.nameEn}'s chamber and what are the visiting hours?`,
      answerEn: `${doctor.nameEn} practices at ${primary.name} (${primary.address}, ${primary.area}, Chattogram). Visiting days are ${daysEn} from ${timeRangeEn}.`
    },
    {
      questionBn: `${doctor.name}-এর সিরিয়াল কখন এবং কীভাবে দেবো?`,
      answerBn: `${primary.name}-এ ${doctor.name}-এর সিরিয়াল নিতে ${primary.serial.join(' অথবা ')} নম্বরে কল করুন। ${guide.serialRuleBn}`,
      questionEn: `When and how to book an appointment serial for ${doctor.nameEn}?`,
      answerEn: `To book a serial for ${doctor.nameEn} at ${primary.name}, call ${primary.serial.join(' or ')}. ${guide.serialRuleEn}`
    },
    {
      questionBn: `টেস্টের রিপোর্ট দেখাতে কি আবার নতুন সিরিয়াল নিতে হয়?`,
      answerBn: `${guide.reportRuleBn} তবে চেম্বারে আসার আগে সহকারীকে ফোনে (${primary.serial[0]}) একবার নিশ্চিত করে নেওয়া ভালো।`,
      questionEn: `Do I need a new serial to show diagnostic test reports?`,
      answerEn: `${guide.reportRuleEn} However, it is recommended to confirm with the chamber assistant at ${primary.serial[0]} before visiting.`
    },
    {
      questionBn: `${doctor.name} কোন কোন রোগের চিকিৎসা করেন?`,
      answerBn: `তিনি একজন অভিজ্ঞ ${doctor.specialtyBn} (${doctor.degrees})। ${
        symptomInfo
          ? `বিশেষ করে ${symptomInfo.keywords.slice(0, 7).join(', ')} সংক্রান্ত সমস্যার আধুনিক চিকিৎসা ও পরামর্শ দিয়ে থাকেন।`
          : `তিনি তাঁর বিভাগের সকল জটিল ও সাধারণ রোগের চিকিৎসা প্রদান করেন।`
      }`,
      questionEn: `What conditions and diseases does ${doctor.nameEn} treat?`,
      answerEn: `${doctor.nameEn} is a qualified ${doctor.specialtyEn} (${doctor.degrees}), providing specialized diagnosis and treatment for conditions related to ${doctor.specialtyEn}.`
    },
    {
      questionBn: `শুক্রবার কি ${doctor.name}-এর চেম্বার খোলা থাকে?`,
      answerBn: isOpenFriday
        ? `হ্যাঁ, শুক্রবার ${doctor.name}-এর চেম্বার খোলা থাকে। দূর-দূরান্তের রোগী ও চাকরিজীবীরা শুক্রবারে সহজেই দেখাতে পারবেন (আগে ফোনে সিরিয়াল নিশ্চিত করে নিন)।`
        : `না, সাধারণত শুক্রবার ${primary.name}-এ তাঁর চেম্বার বন্ধ থাকে। তিনি সপ্তাহে ${daysBn} রোগী দেখেন।`,
      questionEn: `Is ${doctor.nameEn}'s chamber open on Fridays?`,
      answerEn: isOpenFriday
        ? `Yes, ${doctor.nameEn} sees patients on Fridays. Please call the serial number in the morning to confirm your slot.`
        : `No, the chamber at ${primary.name} is closed on Fridays. Regular visiting days are ${daysEn}.`
    }
  ];
}
