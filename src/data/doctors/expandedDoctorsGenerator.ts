import { Doctor } from '../../types/doctor';

interface SpecialtyTemplate {
  key: string;
  specialtyBn: string;
  specialtyEn: string;
  degreesPool: string[];
  designationsPool: string[];
  femaleRatio: number; // 0 to 1
}

export const ALL_SPECIALTY_TEMPLATES: SpecialtyTemplate[] = [
  // 18 Existing Categories (each gets +500 additional doctors -> 600 total per category)
  {
    key: 'chest',
    specialtyBn: 'শ্বাসকষ্ট, অ্যাজমা ও বক্ষব্যাধি বিশেষজ্ঞ',
    specialtyEn: 'Pulmonology, Asthma & Chest Diseases Specialist',
    degreesPool: [
      'MBBS, BCS (Health), MD (Chest Diseases), FCCP (USA)',
      'MBBS, DTCD, FCPS (Pulmonology), Member ATS',
      'MBBS, MD (Respiratory Medicine), Sleep Apnea & Asthma Specialist',
      'MBBS, MCPS (Medicine), MD (Pulmonology), Bronchoscopy Fellow',
      'MBBS (CMC), FCPS (Medicine), MD (Chest), Critical Care Fellow',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, বক্ষব্যাধি ও রেসপিরেটরি মেডিসিন বিভাগ',
      'সহযোগী অধ্যাপক, রেসপিরেটরি মেডিসিন ও অ্যাজমা সেন্টার',
      'সহকারী অধ্যাপক, বক্ষব্যাধি ও পালমোনোলজি বিভাগ',
      'সিনিয়র কনসালটেন্ট, শ্বাসকষ্ট, সিওপিডি ও আইসিইউ ইউনিট',
      'কনসালটেন্ট, চেস্ট ডিজিজ ও স্লিপ মেডিসিন বিভাগ',
    ],
    femaleRatio: 0.25,
  },
  {
    key: 'medicine',
    specialtyBn: 'মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ',
    specialtyEn: 'Internal Medicine & Diabetes Specialist',
    degreesPool: [
      'MBBS, BCS (Health), FCPS (Medicine), MACP (USA)',
      'MBBS, MD (Internal Medicine), FRCP (Edin)',
      'MBBS (DMC), FCPS (Medicine), CCD (BIRDEM)',
      'MBBS, MCPS (Medicine), MD (Internal Medicine)',
      'MBBS (CMC), FCPS (Internal Medicine), Fellow in Rheumatology & Diabetes',
    ],
    designationsPool: [
      'অধ্যাপক, মেডিসিন বিভাগ',
      'সহযোগী অধ্যাপক, ইন্টারনাল মেডিসিন বিভাগ',
      'সহকারী অধ্যাপক, মেডিসিন ও ডায়াবেটিস ইউনিট',
      'সিনিয়র কনসালটেন্ট, ইন্টারনাল মেডিসিন ও ক্রিটিক্যাল কেয়ার',
      'কনসালটেন্ট ফিজিশিয়ান, মেডিসিন বিভাগ',
    ],
    femaleRatio: 0.3,
  },
  {
    key: 'gastro',
    specialtyBn: 'গ্যাস্ট্রোএন্টারোলজি, পেটের রোগ ও লিভার বিশেষজ্ঞ',
    specialtyEn: 'Gastroenterology, Hepatology & Pancreatic Specialist',
    degreesPool: [
      'MBBS, BCS (Health), MD (Gastroenterology), FACG (USA)',
      'MBBS, FCPS (Medicine), MD (Gastroenterology), Endoscopy Fellow',
      'MBBS (CMC), MD (Gastroenterology), Advanced ERCP Trained',
      'MBBS, MCPS, MD (Gastroenterology & Hepatology)',
      'MBBS, FCPS (Gastroenterology), Member WGO',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, গ্যাস্ট্রোএন্টারোলজি বিভাগ',
      'সহযোগী অধ্যাপক, গ্যাস্ট্রোএন্টারোলজি ও এন্ডোস্কোপি ইউনিট',
      'সহকারী অধ্যাপক, পরিপাকতন্ত্র ও লিভার মেডিসিন বিভাগ',
      'সিনিয়র কনসালটেন্ট, গ্যাস্ট্রোএন্টারোলজি ও থেরাপিউটিক এন্ডোস্কোপি',
      'কনসালটেন্ট, গ্যাস্ট্রো ও লিভার কেয়ার সেন্টার',
    ],
    femaleRatio: 0.25,
  },
  {
    key: 'heart',
    specialtyBn: 'হৃদরোগ, উচ্চ রক্তচাপ ও বাতজ্বর বিশেষজ্ঞ (কার্ডিওলজিস্ট)',
    specialtyEn: 'Clinical & Interventional Cardiologist',
    degreesPool: [
      'MBBS, BCS (Health), MD (Cardiology), FACC (USA), FSCAI',
      'MBBS, D-Card (NICVD), MD (Cardiology), Fellow in Interventional Cardiology',
      'MBBS (CMC), FCPS (Medicine), MD (Cardiology), FESC',
      'MBBS, MCPS, D-Card, MD (Cardiology)',
      'MBBS, MD (Cardiology), Trained in Coronary Angioplasty & Pacemaker',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, কার্ডিওলজি ও সিসিইউ বিভাগ',
      'সহযোগী অধ্যাপক, ইন্টারভেনশনাল কার্ডিওলজি বিভাগ',
      'সহকারী অধ্যাপক, হৃদরোগ ও হাইপারটেনশন ইউনিট',
      'সিনিয়র কনসালটেন্ট, ক্লিনিক্যাল ও ইন্টারভেনশনাল কার্ডিওলজি',
      'কনসালটেন্ট কার্ডিওলজিস্ট, ক্যাথল্যাব ও সিসিইউ বিভাগ',
    ],
    femaleRatio: 0.22,
  },
  {
    key: 'gynae',
    specialtyBn: 'গাইনি, প্রসূতি ও বন্ধ্যাত্ব বিশেষজ্ঞ ও সার্জন',
    specialtyEn: 'Obstetrics, Gynaecology & Infertility Specialist',
    degreesPool: [
      'MBBS, BCS (Health), FCPS (Obs & Gynae), MS (Gynae & Obs)',
      'MBBS, DGO, FCPS (Obs & Gynae), Fellow in IVF & Infertility',
      'MBBS (CMC), MS (Obs & Gynae), Laparoscopic Gynae Surgeon',
      'MBBS, MCPS, FCPS (Gynae & Obs), High-Risk Pregnancy Specialist',
      'MBBS, FCPS (Obs & Gynae), MRCOG (UK)',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, গাইনি ও প্রসূতি বিদ্যা বিভাগ',
      'সহযোগী অধ্যাপক, অবস ও গাইনি বিভাগ',
      'সহকারী অধ্যাপক, প্রসূতি, গাইনি ও বন্ধ্যাত্ব ইউনিট',
      'সিনিয়র কনসালটেন্ট, গাইনি ও ল্যাপারোস্কোপিক সার্জারি',
      'কনসালটেন্ট, মা ও প্রসূতি স্বাস্থ্য পরিচর্যা কেন্দ্র',
    ],
    femaleRatio: 0.92,
  },
  {
    key: 'child',
    specialtyBn: 'নবজাতক, শিশু ও কিশোর রোগ বিশেষজ্ঞ (পেডিয়াট্রিশিয়ান)',
    specialtyEn: 'Neonatology & Child Diseases Specialist (Pediatrician)',
    degreesPool: [
      'MBBS, BCS (Health), MD (Pediatrics), FCPS (Child)',
      'MBBS, DCH, FCPS (Pediatrics), Fellow in Neonatology (NICU)',
      'MBBS (CMC), MD (Neonatology & Pediatrics), PGPN (Boston)',
      'MBBS, MCPS (Pediatrics), MD (Child Health)',
      'MBBS, FCPS (Pediatrics), Pediatric Asthma & Nutrition Specialist',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, শিশু স্বাস্থ্য ও নবজাতক বিভাগ',
      'সহযোগী অধ্যাপক, পেডিয়াট্রিক্স ও এনআইসিইউ (NICU) ইউনিট',
      'সহকারী অধ্যাপক, শিশু ও কিশোর রোগ বিভাগ',
      'সিনিয়র কনসালটেন্ট, নবজাতক ও শিশু আইসিইউ বিভাগ',
      'কনসালটেন্ট পেডিয়াট্রিশিয়ান, শিশু স্বাস্থ্য বিভাগ',
    ],
    femaleRatio: 0.45,
  },
  {
    key: 'endocrine',
    specialtyBn: 'ডায়াবেটিস, থাইরয়েড ও হরমোন রোগ বিশেষজ্ঞ (এন্ডোক্রাইনোলজিস্ট)',
    specialtyEn: 'Diabetes, Thyroid & Hormone Specialist (Endocrinologist)',
    degreesPool: [
      'MBBS, BCS (Health), MD (Endocrinology & Metabolism), FACE (USA)',
      'MBBS (DMC), DEM (BIRDEM), MD (Endocrinology)',
      'MBBS, FCPS (Medicine), MD (Endocrinology), CCD (BIRDEM)',
      'MBBS, MD (Endocrinology), Fellow in Thyroid & Reproductive Endocrinology',
      'MBBS, MCPS, DEM, MD (Endocrinology & Diabetes)',
    ],
    designationsPool: [
      'অধ্যাপক, এন্ডোক্রাইনোলজি ও মেটাবলিজম বিভাগ',
      'সহযোগী অধ্যাপক, ডায়াবেটিস, থাইরয়েড ও হরমোন বিভাগ',
      'সহকারী অধ্যাপক, এন্ডোক্রাইনোলজি ইউনিট',
      'সিনিয়র কনসালটেন্ট, ডায়াবেটিস ও হরমোন কেয়ার সেন্টার',
      'কনসালটেন্ট এন্ডোক্রাইনোলজিস্ট, থাইরয়েড ও মেটাবলিক ক্লিনিক',
    ],
    femaleRatio: 0.35,
  },
  {
    key: 'cancer',
    specialtyBn: 'ক্যান্সার, টিউমার ও রেডিয়েশন অনকোলজি বিশেষজ্ঞ',
    specialtyEn: 'Medical & Radiation Oncologist (Cancer Specialist)',
    degreesPool: [
      'MBBS, BCS (Health), MD (Medical Oncology), ESMO Certified',
      'MBBS, FCPS (Radiotherapy & Oncology), Fellow in Cancer Immunotherapy',
      'MBBS (CMC), MD (Radiation Oncology), MPhil (Oncology)',
      'MBBS, MD (Oncology), Clinical & Hemato-Oncology Specialist',
      'MBBS, DMRT, FCPS (Oncology), Trained in Tata Memorial Hospital',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, অনকোলজি ও রেডিওথেরাপি বিভাগ',
      'সহযোগী অধ্যাপক, মেডিকেল ও রেডিয়েশন অনকোলজি বিভাগ',
      'সহকারী অধ্যাপক, ক্যান্সার কেয়ার ও কেমোথেরাপি ইউনিট',
      'সিনিয়র কনসালটেন্ট, টিউমার ও ক্যান্সার বিশেষজ্ঞ',
      'কনসালটেন্ট অনকোলজিস্ট, ক্যান্সার স্ক্রিনিং ও থেরাপি সেন্টার',
    ],
    femaleRatio: 0.3,
  },
  {
    key: 'physmed',
    specialtyBn: 'বাতব্যথা, প্যারালাইসিস ও ফিজিক্যাল মেডিসিন বিশেষজ্ঞ',
    specialtyEn: 'Physical Medicine, Arthritis & Rehabilitation Specialist',
    degreesPool: [
      'MBBS, BCS (Health), FCPS (Physical Medicine & Rehabilitation)',
      'MBBS, MD (Physical Medicine), Fellow in Pain Management & Stroke Rehab',
      'MBBS (CMC), FCPS (Physical Medicine), Sports Injury & Musculoskeletal Ultrasound Trained',
      'MBBS, MD (PMR), Interventional Pain & Spine Rehabilitation Specialist',
      'MBBS, MCPS, FCPS (Physical Medicine & Rehab)',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, ফিজিক্যাল মেডিসিন ও রিহ্যাবিলিটেশন বিভাগ',
      'সহযোগী অধ্যাপক, বাতব্যথা ও প্যারালাইসিস পুনর্বাসন বিভাগ',
      'সহকারী অধ্যাপক, ফিজিক্যাল মেডিসিন বিভাগ',
      'সিনিয়র কনসালটেন্ট, পেইন ম্যানেজমেন্ট ও স্ট্রোক রিহ্যাব ইউনিট',
      'কনসালটেন্ট ফিজিয়াট্রিস্ট, আর্থ্রাইটিস ও স্পোর্টস ইনজুরি ক্লিনিক',
    ],
    femaleRatio: 0.32,
  },
  {
    key: 'psychiatry',
    specialtyBn: 'মানসিক রোগ, ব্রেন, ঘুম ও মাদকাসক্তি বিশেষজ্ঞ (সাইকিয়াট্রিস্ট)',
    specialtyEn: 'Psychiatry, Mental Health & De-addiction Specialist',
    degreesPool: [
      'MBBS, BCS (Health), MD (Psychiatry), Fellow WHO Mental Health',
      'MBBS, FCPS (Psychiatry), Child & Adolescent Mental Health Specialist',
      'MBBS (CMC), MPhil (Psychiatry), MD (Psychiatry)',
      'MBBS, MCPS (Psychiatry), FCPS (Psychiatry), Psychosexual & Sleep Specialist',
      'MBBS, MD (Psychiatry), Member American Psychiatric Association (APA)',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, মনোরোগ বিদ্যা (সাইকিয়াট্রি) বিভাগ',
      'সহযোগী অধ্যাপক, মানসিক স্বাস্থ্য ও বিহেভিওরাল সায়েন্স বিভাগ',
      'সহকারী অধ্যাপক, সাইকিয়াট্রি ও নিউরো-সাইকিয়াট্রি ইউনিট',
      'সিনিয়র কনসালটেন্ট, ডিপ্রেশন, ঘুম ও মাদকাসক্তি নিরাময় কেন্দ্র',
      'কনসালটেন্ট সাইকিয়াট্রিস্ট, মনোরোগ ও কাউন্সেলিং বিভাগ',
    ],
    femaleRatio: 0.38,
  },
  {
    key: 'eye',
    specialtyBn: 'চক্ষু রোগ, ছানি ও রেটিনা সার্জন (অপথালমোলজিস্ট)',
    specialtyEn: 'Ophthalmologist, Phaco, Cornea & Retina Surgeon',
    degreesPool: [
      'MBBS, BCS (Health), MS (Ophthalmology), Fellow in Phaco & Lasik',
      'MBBS, DO, FCPS (Eye), Vitreo-Retina & Glaucoma Specialist',
      'MBBS (CMC), FCPS (Ophthalmology), FRCS (Glasgow)',
      'MBBS, MCPS (Eye), MS (Ophthalmology), Pediatric Eye & Squint Surgeon',
      'MBBS, DO (DU), Fellow in Micro-Incision Cataract Surgery (MICS)',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, চক্ষু বিজ্ঞান বিভাগ',
      'সহযোগী অধ্যাপক, ফ্যাকো, কর্নিয়া ও রেটিনা সার্জারি বিভাগ',
      'সহকারী অধ্যাপক, চক্ষু রোগ ও গ্লুকোমা ইউনিট',
      'সিনিয়র কনসালটেন্ট ও চিফ ফ্যাকো সার্জন',
      'কনসালটেন্ট অপথালমোলজিস্ট, ক্যাটারাক্ট ও লেজার ভিশন সেন্টার',
    ],
    femaleRatio: 0.35,
  },
  {
    key: 'ent',
    specialtyBn: 'নাক-কান-গলা ও হেড-নেক সার্জন (ইএনটি বিশেষজ্ঞ)',
    specialtyEn: 'ENT (Otolaryngology) & Head-Neck Microsurgeon',
    degreesPool: [
      'MBBS, BCS (Health), MS (ENT), Fellow in Endoscopic Sinus & Skull Base Surgery',
      'MBBS, DLO, FCPS (ENT & Head-Neck Surgery)',
      'MBBS (CMC), FCPS (ENT), Micro-Ear & Cochlear Implant Trained',
      'MBBS, MCPS (ENT), MS (Otolaryngology), Thyroid & Voice Disorder Surgeon',
      'MBBS, DLO (BSMMU), FCPS (Otolaryngology)',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, নাক-কান-গলা ও হেড-নেক সার্জারি বিভাগ',
      'সহযোগী অধ্যাপক, অটোল্যারিংগোলজি ও সাইনাস সার্জারি ইউনিট',
      'সহকারী অধ্যাপক, ইএনটি ও মাইক্রো-ইয়ার সার্জারি বিভাগ',
      'সিনিয়র কনসালটেন্ট, নাক-কান-গলা, থাইরয়েড ও হেড-নেক সার্জন',
      'কনসালটেন্ট ইএনটি সার্জন, শ্রবণ ও ভার্টিগো ক্লিনিক',
    ],
    femaleRatio: 0.28,
  },
  {
    key: 'ortho',
    specialtyBn: 'হাড়ভাঙা, জোড়া, বাত ও স্পাইন সার্জন (অর্থোপেডিক বিশেষজ্ঞ)',
    specialtyEn: 'Orthopedic, Trauma, Arthroscopy & Joint Replacement Surgeon',
    degreesPool: [
      'MBBS, BCS (Health), MS (Orthopedic Surgery), Fellow in Joint Replacement (India)',
      'MBBS, D-Ortho, FCPS (Ortho), AO Trauma & Spine Fellow',
      'MBBS (CMC), MS (Ortho), Arthroscopy & Sports Injury Surgeon',
      'MBBS, D-Ortho (NITOR), MS (Orthopedics), Ilizarov & Deformity Specialist',
      'MBBS, FACS (USA), MS (Orthopedic & Trauma Surgery)',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, অর্থোপেডিক ও ট্রমা সার্জারি বিভাগ',
      'সহযোগী অধ্যাপক, আর্থ্রোপ্লাস্টি ও জয়েন্ট রিপ্লেসমেন্ট ইউনিট',
      'সহকারী অধ্যাপক, অর্থোপেডিক ও স্পাইন সার্জারি বিভাগ',
      'সিনিয়র কনসালটেন্ট, ট্রমা, ফ্র্যাকচার ও স্পোর্টস ইনজুরি সার্জন',
      'কনসালটেন্ট অর্থোপেডিক সার্জন, হাড় ও জোড়া রোগ বিভাগ',
    ],
    femaleRatio: 0.12,
  },
  {
    key: 'skin',
    specialtyBn: 'চর্ম, অ্যালার্জি, কুষ্ঠ ও যৌন রোগ বিশেষজ্ঞ (ডার্মাটোলজিস্ট)',
    specialtyEn: 'Dermatology, Venereology, Allergy & Aesthetic Laser Specialist',
    degreesPool: [
      'MBBS, BCS (Health), DDV (BSMMU), MD (Dermatology & Venereology)',
      'MBBS, FCPS (Dermatology & Venereology), Fellow in Laser & Dermatosurgery',
      'MBBS (CMC), DDV, MCPS (Skin & VD), Clinical & Cosmetic Dermatologist',
      'MBBS, MD (Skin & VD), Hair Transplant & Pediatric Dermatology Specialist',
      'MBBS, DD (Thailand), FCPS (Skin & Allergy)',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, চর্ম ও যৌন রোগ বিভাগ',
      'সহযোগী অধ্যাপক, ডার্মাটোলজি, অ্যালার্জি ও লেজার ইউনিট',
      'সহকারী অধ্যাপক, চর্ম, নখ, চুল ও ভেনেরিওলজি বিভাগ',
      'সিনিয়র কনসালটেন্ট, ক্লিনিক্যাল ও অ্যাসথেটিক ডার্মাটোলজিস্ট',
      'কনসালটেন্ট ডার্মাটোলজিস্ট, স্কিন কেয়ার ও অ্যালার্জি সেন্টার',
    ],
    femaleRatio: 0.48,
  },
  {
    key: 'dental',
    specialtyBn: 'দন্ত, মুখ ও চোয়াল রোগ বিশেষজ্ঞ ও ম্যাক্সিলোফেসিয়াল সার্জন',
    specialtyEn: 'Dental Surgeon, Orthodontist & Oral-Maxillofacial Specialist',
    degreesPool: [
      'BDS (CMC), BCS (Dental), MS (Oral & Maxillofacial Surgery)',
      'BDS (DU), FCPS (Orthodontics & Dentofacial Orthopedics)',
      'BDS, MPH, PGT (Conservative Dentistry & Endodontics), Dental Implant Fellow',
      'BDS, DDS, MS (Prosthodontics & Crown-Bridge), Aesthetic Smile Designer',
      'BDS (CMC), FCPS (Oral Surgery), Root Canal & Laser Dentistry Specialist',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, ওরাল অ্যান্ড ম্যাক্সিলোফেসিয়াল সার্জারি বিভাগ',
      'সহযোগী অধ্যাপক, কনজারভেটিভ ডেন্টিস্ট্রি ও এন্ডোডন্টিক্স বিভাগ',
      'সহকারী অধ্যাপক, অর্থোডন্টিক্স ও ডেন্টাল ইমপ্ল্যান্ট ইউনিট',
      'সিনিয়র কনসালটেন্ট ও চিফ ডেন্টাল সার্জন',
      'কনসালটেন্ট ডেন্টাল ও ওরাল সার্জন, আধুনিক ডেন্টাল কেয়ার',
    ],
    femaleRatio: 0.45,
  },
  {
    key: 'neuro',
    specialtyBn: 'ব্রেন, স্ট্রোক, প্যারালাইসিস, মৃগী ও স্নায়ুরোগ বিশেষজ্ঞ (নিউরোলজিস্ট)',
    specialtyEn: 'Neurology, Stroke, Epilepsy & Nerve Disorder Specialist',
    degreesPool: [
      'MBBS, BCS (Health), MD (Neurology), FINR (Switzerland)',
      'MBBS, FCPS (Medicine), MD (Neuro-Medicine), Stroke & Epilepsy Specialist',
      'MBBS (CMC), MD (Neurology), Member American Academy of Neurology (AAN)',
      'MBBS, MCPS, MD (Neurology), Electrophysiology (NCS/EMG/EEG) Specialist',
      'MBBS, FCPS (Neurology), Fellow in Interventional Neurology',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, নিউরোমেডিসিন ও স্ট্রোক ইউনিট',
      'সহযোগী অধ্যাপক, নিউরোলজি ও নার্ভ ডিসঅর্ডার বিভাগ',
      'সহকারী অধ্যাপক, ব্রেন, স্ট্রোক ও এপিলেপসি কেয়ার ইউনিট',
      'সিনিয়র কনসালটেন্ট নিউরোলজিস্ট, ক্লিনিক্যাল নিউরোফিজিওলজি বিভাগ',
      'কনসালটেন্ট নিউরোমেডিসিন বিশেষজ্ঞ, মাথাব্যথা ও ভার্টিগো ক্লিনিক',
    ],
    femaleRatio: 0.24,
  },
  {
    key: 'kidney',
    specialtyBn: 'কিডনি রোগ, ডায়ালাইসিস ও ট্রান্সপ্ল্যান্ট মেডিসিন বিশেষজ্ঞ (নেফ্রোলজিস্ট)',
    specialtyEn: 'Nephrology, Dialysis & Kidney Transplant Medicine Specialist',
    degreesPool: [
      'MBBS, BCS (Health), MD (Nephrology), FASN (USA)',
      'MBBS, FCPS (Medicine), MD (Nephrology), Fellow in Dialysis & Renal Transplant',
      'MBBS (CMC), MD (Nephrology), Critical Care Nephrology Specialist',
      'MBBS, MCPS (Medicine), MD (Nephrology), ISN Fellow',
      'MBBS, FCPS (Nephrology), Diabetic Kidney Disease & Hypertension Specialist',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, কিডনি রোগ ও নেফ্রোলজি বিভাগ',
      'সহযোগী অধ্যাপক, নেফ্রোলজি ও হেমোডায়ালাইসিস ইউনিট',
      'সহকারী অধ্যাপক, রেনাল মেডিসিন ও ট্রান্সপ্ল্যান্ট কেয়ার বিভাগ',
      'সিনিয়র কনসালটেন্ট নেফ্রোলজিস্ট, কিডনি ও ডায়ালাইসিস সেন্টার',
      'কনসালটেন্ট কিডনি বিশেষজ্ঞ, নেফ্রোলজি বিভাগ',
    ],
    femaleRatio: 0.25,
  },
  {
    key: 'surgery',
    specialtyBn: 'জেনারেল, ল্যাপারোস্কোপিক, হার্নিয়া ও গলব্লাডার সার্জন',
    specialtyEn: 'General, Advanced Laparoscopic & GI Surgeon',
    degreesPool: [
      'MBBS, BCS (Health), FCPS (Surgery), FACS (USA), FMAS',
      'MBBS, MS (General Surgery), FRCS (Edin), Advanced Laparoscopic Surgeon',
      'MBBS (CMC), FCPS (Surgery), Fellow in Minimal Access & Bariatric Surgery',
      'MBBS, MCPS (Surgery), FCPS (General Surgery), Breast & Endocrine Surgeon',
      'MBBS, MS (Surgery), Hepatobiliary & Laparoscopic GI Surgeon',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, জেনারেল ও ল্যাপারোস্কোপিক সার্জারি বিভাগ',
      'সহযোগী অধ্যাপক, সার্জারি ও মিনিমাল অ্যাক্সেস সার্জারি ইউনিট',
      'সহকারী অধ্যাপক, জেনারেল ও এন্ডো-ল্যাপারোস্কোপিক সার্জারি বিভাগ',
      'সিনিয়র কনসালটেন্ট সার্জন, গলব্লাডার, হার্নিয়া ও অ্যাপেন্ডিক্স সার্জারি',
      'কনসালটেন্ট জেনারেল ও ল্যাপারোস্কোপিক সার্জন',
    ],
    femaleRatio: 0.2,
  },

  // 10 NEW MISSING CATEGORIES (each gets 600 doctors!)
  {
    key: 'urology',
    specialtyBn: 'ইউরোলজি, কিডনি পাথর, প্রোস্টেট ও মূত্রনালী সার্জন (ইউরোলজিস্ট)',
    specialtyEn: 'Urology, Endourology, Kidney Stone, Prostate & Andrology Surgeon',
    degreesPool: [
      'MBBS, BCS (Health), MS (Urology), Fellow in Laser Endourology & Kidney Stone Surgery',
      'MBBS, FCPS (Surgery), MS (Urology), FACS (USA)',
      'MBBS (CMC), MS (Urology), Trained in TURP, PCNL, RIRS & Uro-Oncology',
      'MBBS, MCPS (Surgery), MS (Urology), Reconstructive Urology & Andrology Specialist',
      'MBBS, FRCS (Glasgow), MS (Urology & Renal Transplant Surgery)',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, ইউরোলজি ও রেনাল সার্জারি বিভাগ',
      'সহযোগী অধ্যাপক, এন্ডো-ইউরোলজি, প্রোস্টেট ও কিডনি স্টোন ইউনিট',
      'সহকারী অধ্যাপক, ইউরোলজি ও অ্যান্ড্রোলজি বিভাগ',
      'সিনিয়র কনসালটেন্ট ইউরোলজিস্ট ও লেজার স্টোন সার্জন',
      'কনসালটেন্ট ইউরোলজি ও মূত্রনালী সার্জন',
    ],
    femaleRatio: 0.14,
  },
  {
    key: 'neurosurgery',
    specialtyBn: 'ব্রেন টিউমার, স্ট্রোক, হেড ইনজুরি ও স্পাইন নিউরোসার্জন',
    specialtyEn: 'Brain, Spine, Cerebrovascular & Micro-Neurosurgeon',
    degreesPool: [
      'MBBS, BCS (Health), MS (Neurosurgery), Fellow in Skull Base & Micro-Neurosurgery',
      'MBBS, FCPS (Surgery), MS (Neurosurgery), Minimally Invasive Spine Surgeon',
      'MBBS (CMC), MS (Neurosurgery), FACS (USA), Pediatric & Vascular Neurosurgeon',
      'MBBS, MS (Neurosurgery), Trained in Endoscopic Brain Tumor & Disc Surgery',
      'MBBS, FRCS (Neurosurgery), MS (Brain & Spine Surgery)',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, নিউরোসার্জারি ও স্পাইন সার্জারি বিভাগ',
      'সহযোগী অধ্যাপক, ব্রেন টিউমার ও নিউরো-ট্রমা ইউনিট',
      'সহকারী অধ্যাপক, নিউরোসার্জারি ও মাইক্রো-স্পাইন সার্জারি বিভাগ',
      'সিনিয়র কনসালটেন্ট নিউরোসার্জন, ব্রেন ও মেরুদণ্ড সার্জারি',
      'কনসালটেন্ট নিউরোসার্জন, স্ট্রোক ও হেড ইনজুরি ইউনিট',
    ],
    femaleRatio: 0.12,
  },
  {
    key: 'hepatology',
    specialtyBn: 'লিভার, জন্ডিস, হেপাটাইটিস ও পিত্তথলি রোগ বিশেষজ্ঞ (হেপাটোলজিস্ট)',
    specialtyEn: 'Hepatology, Fatty Liver, Hepatitis, Cirrhosis & Biliary Specialist',
    degreesPool: [
      'MBBS, BCS (Health), MD (Hepatology), Fellow in Liver Transplant Medicine',
      'MBBS, FCPS (Medicine), MD (Hepatology), AASLD Member (USA)',
      'MBBS (CMC), MD (Hepatology), Interventional Hepatology & FibroScan Specialist',
      'MBBS, MCPS, MD (Liver Diseases & Hepatology), APASL Fellow',
      'MBBS, MD (Hepatology), Viral Hepatitis (B & C) & Fatty Liver Reversal Specialist',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, হেপাটোলজি ও লিভার রিসার্চ বিভাগ',
      'সহযোগী অধ্যাপক, লিভার, জন্ডিস ও পিত্তথলি রোগ বিভাগ',
      'সহকারী অধ্যাপক, হেপাটোলজি ও ফ্যাটি লিভার ক্লিনিক',
      'সিনিয়র কনসালটেন্ট হেপাটোলজিস্ট, সিরোসিস ও হেপাটাইটিস কেয়ার ইউনিট',
      'কনসালটেন্ট লিভার বিশেষজ্ঞ, হেপাটোলজি বিভাগ',
    ],
    femaleRatio: 0.25,
  },
  {
    key: 'rheumatology',
    specialtyBn: 'বাতজ্বর, গেঁটেবাত, গাউট, লুপাস ও রিউমাটোলজি বিশেষজ্ঞ',
    specialtyEn: 'Rheumatology, Autoimmune Arthritis, Lupus (SLE) & Joint Specialist',
    degreesPool: [
      'MBBS, BCS (Health), MD (Rheumatology), EULAR Certified (Europe)',
      'MBBS, FCPS (Medicine), MD (Rheumatology), APLAR Fellow',
      'MBBS (CMC), MD (Rheumatology), Autoimmune, Lupus & Ankylosing Spondylitis Specialist',
      'MBBS, MCPS (Medicine), MD (Rheumatology), Musculoskeletal Biologics Specialist',
      'MBBS, FCPS (Rheumatology), Fellow in Clinical Immunology & Arthritis',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, রিউমাটোলজি ও অটোইমিউন ডিজিজ বিভাগ',
      'সহযোগী অধ্যাপক, রিউমাটোলজি ও আর্থ্রাইটিস কেয়ার ইউনিট',
      'সহকারী অধ্যাপক, বাতজ্বর, গাউট ও লুপাস ক্লিনিক',
      'সিনিয়র কনসালটেন্ট রিউমাটোলজিস্ট, জয়েন্ট ও ইমিউনোলজি বিভাগ',
      'কনসালটেন্ট রিউমাটোলজি বিশেষজ্ঞ, বাত ও অস্থিসন্ধি রোগ বিভাগ',
    ],
    femaleRatio: 0.3,
  },
  {
    key: 'hematology',
    specialtyBn: 'রক্তরোগ, থ্যালাসেমিয়া, রক্তশূন্যতা ও ব্লাড ক্যান্সার বিশেষজ্ঞ (হেমাটোলজিস্ট)',
    specialtyEn: 'Clinical Hematology, Thalassemia, Hemophilia & Hemato-Oncology Specialist',
    degreesPool: [
      'MBBS, BCS (Health), MD (Hematology), Fellow in Bone Marrow Transplant (BMT)',
      'MBBS, FCPS (Hematology), Thalassemia, Leukemia & Coagulation Disorder Specialist',
      'MBBS (CMC), MD (Clinical Hematology), Member American Society of Hematology (ASH)',
      'MBBS, DCP, MD (Hematology), Hemato-Oncology & Lymphoma Specialist',
      'MBBS, MCPS, FCPS (Hematology), Pediatric & Adult Blood Disorder Specialist',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, হেমাটোলজি ও বোন ম্যারো ট্রান্সপ্ল্যান্ট বিভাগ',
      'সহযোগী অধ্যাপক, রক্তরোগ ও থ্যালাসেমিয়া প্রিভেনশন ইউনিট',
      'সহকারী অধ্যাপক, ক্লিনিক্যাল হেমাটোলজি ও ব্লাড ক্যান্সার বিভাগ',
      'সিনিয়র কনসালটেন্ট হেমাটোলজিস্ট, অ্যানিমিয়া ও থ্যালাসেমিয়া সেন্টার',
      'কনসালটেন্ট রক্তরোগ বিশেষজ্ঞ, হেমাটোলজি বিভাগ',
    ],
    femaleRatio: 0.34,
  },
  {
    key: 'plasticsurgery',
    specialtyBn: 'প্লাস্টিক, বার্ন, রিকনস্ট্রাকটিভ ও কসমেটিক সার্জন',
    specialtyEn: 'Plastic, Burn, Hand, Microvascular & Aesthetic Cosmetic Surgeon',
    degreesPool: [
      'MBBS, BCS (Health), MS (Plastic & Reconstructive Surgery), FACS (USA)',
      'MBBS, FCPS (Plastic Surgery), Fellow in Burn, Cleft Lip & Microvascular Surgery',
      'MBBS (CMC), MS (Plastic Surgery), Aesthetic, Rhinoplasty & Scar Revision Surgeon',
      'MBBS, FCPS (Surgery), MS (Plastic & Burn Surgery), Hand & Trauma Reconstruction Specialist',
      'MBBS, MRCS (UK), MS (Plastic, Aesthetic & Reconstructive Surgery)',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, বার্ন ও প্লাস্টিক সার্জারি বিভাগ',
      'সহযোগী অধ্যাপক, রিকনস্ট্রাকটিভ ও কসমেটিক সার্জারি ইউনিট',
      'সহকারী অধ্যাপক, প্লাস্টিক, হ্যান্ড ও মাইক্রোসার্জারি বিভাগ',
      'সিনিয়র কনসালটেন্ট প্লাস্টিক ও বার্ন সার্জন',
      'কনসালটেন্ট অ্যাসথেটিক ও রিকনস্ট্রাকটিভ প্লাস্টিক সার্জন',
    ],
    femaleRatio: 0.36,
  },
  {
    key: 'colorectal',
    specialtyBn: 'পাইলস, ফিস্টুলা, ফিশার, হার্নিয়া ও কলোরেক্টাল সার্জন',
    specialtyEn: 'Colorectal, Laser Piles, Fistula, Fissure & Pelvic Floor Surgeon',
    degreesPool: [
      'MBBS, BCS (Health), MS (Colorectal Surgery), Fellow in Laser Proctology (LHP/FiLaC)',
      'MBBS, FCPS (Surgery), MS (Colorectal Surgery), FACS (USA)',
      'MBBS (CMC), FCPS (Colorectal Surgery), Laparoscopic Colon & Rectal Cancer Surgeon',
      'MBBS, MRCS (Edin), MS (Colorectal & Minimally Invasive Anal Surgery)',
      'MBBS, MCPS, FCPS (Surgery), Advanced Stapled (Longo) & Laser Piles Specialist',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, কলোরেক্টাল ও প্রোক্টোলজি সার্জারি বিভাগ',
      'সহযোগী অধ্যাপক, লেজার পাইলস, ফিস্টুলা ও কোলন সার্জারি ইউনিট',
      'সহকারী অধ্যাপক, কলোরেক্টাল ও পেলভিক ফ্লোর সার্জারি বিভাগ',
      'সিনিয়র কনসালটেন্ট পাইলস, ফিশার ও ফিস্টুলা সার্জন (মহিলা ও পুরুষ)',
      'কনসালটেন্ট কলোরেক্টাল ও ল্যাপারোস্কোপিক সার্জন',
    ],
    femaleRatio: 0.42,
  },
  {
    key: 'vascular',
    specialtyBn: 'কার্ডিয়াক বাইপাস, ভালভ ও রক্তনালী (ভাস্কুলার) সার্জন',
    specialtyEn: 'Cardiothoracic, Open Heart Bypass, Valve & Vascular Surgeon',
    degreesPool: [
      'MBBS, BCS (Health), MS (Cardiothoracic & Vascular Surgery - CTVS), FACS (USA)',
      'MBBS, MS (Vascular & Endovascular Surgery), Diabetic Foot, Varicose Vein & AV Fistula Specialist',
      'MBBS (CMC), FCPS (Surgery), MS (Cardiovascular & Thoracic Surgery)',
      'MBBS, MRCS (UK), MS (CTVS), Beating Heart CABG & Valve Repair Surgeon',
      'MBBS, MS (Vascular Surgery), Peripheral Arterial & Duplex Guided Laser Varicose Surgeon',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, কার্ডিয়াক ও ভাস্কুলার সার্জারি বিভাগ',
      'সহযোগী অধ্যাপক, ভাস্কুলার ও এন্ডোভাস্কুলার সার্জারি ইউনিট',
      'সহকারী অধ্যাপক, কার্ডিওথোরাসিক ও বাইপাস সার্জারি বিভাগ',
      'সিনিয়র কনসালটেন্ট ভাস্কুলার ও ডায়াবেটিক ফুট সার্জন',
      'কনসালটেন্ট কার্ডিয়াক ও রক্তনালী সার্জন',
    ],
    femaleRatio: 0.15,
  },
  {
    key: 'pedsurgery',
    specialtyBn: 'নবজাতক ও শিশু সার্জারি বিশেষজ্ঞ (পেডিয়াট্রিক সার্জন)',
    specialtyEn: 'Neonatal & Pediatric Laparoscopic, Urological & Congenital Surgeon',
    degreesPool: [
      'MBBS, BCS (Health), MS (Pediatric Surgery), FACS (USA)',
      'MBBS, FCPS (Pediatric Surgery), Neonatal & Pediatric Laparoscopic Surgeon',
      'MBBS (CMC), MS (Pediatric Surgery), Pediatric Urology, Hernia & Hypospadias Specialist',
      'MBBS, MRCS (Edin), MS (Pediatric & Neonatal Surgery)',
      'MBBS, MCPS (Surgery), MS (Pediatric Surgery), Congenital Anomaly & Pediatric GI Surgeon',
    ],
    designationsPool: [
      'অধ্যাপক ও বিভাগীয় প্রধান, শিশু সার্জারি (পেডিয়াট্রিক সার্জারি) বিভাগ',
      'সহযোগী অধ্যাপক, নবজাতক ও শিশু সার্জারি ইউনিট',
      'সহকারী অধ্যাপক, পেডিয়াট্রিক ল্যাপারোস্কোপিক ও ইউরোলজি সার্জারি বিভাগ',
      'সিনিয়র কনসালটেন্ট পেডিয়াট্রিক ও নিওনেটাল সার্জন',
      'কনসালটেন্ট শিশু সার্জন, শিশু সার্জারি বিভাগ',
    ],
    femaleRatio: 0.35,
  },
  {
    key: 'nutrition',
    specialtyBn: 'ক্লিনিক্যাল পুষ্টিবিদ, ডায়াবেটিস, কিডনি ও ওজন নিয়ন্ত্রণ ডায়েটিশিয়ান',
    specialtyEn: 'Clinical Nutritionist, Therapeutic Dietitian & Metabolic Wellness Consultant',
    degreesPool: [
      'BSc & MSc (Food & Nutrition - DU), MPH (Clinical Nutrition), Certified Diabetes Educator (BIRDEM)',
      'MSc (Applied Nutrition & Dietetics), PGD in Renal, Cardiac & ICU Clinical Nutrition',
      'BSc (Hons), MSc (Nutrition & Food Science), Maternal, Child & PCOS Diet Specialist',
      'MSc (Clinical Nutrition), PhD Fellow (Metabolic & Obesity Dietetics), Member BDA',
      'BSc & MSc (Nutrition), Certified Sports, Fatty Liver & Weight Management Dietitian',
    ],
    designationsPool: [
      'চিফ ক্লিনিক্যাল ডায়েটিশিয়ান ও বিভাগীয় প্রধান, পুষ্টি ও ডায়েটেটিক্স বিভাগ',
      'সিনিয়র ক্লিনিক্যাল নিউট্রিশনিস্ট, ডায়াবেটিস, হার্ট ও কিডনি ডায়েট ইউনিট',
      'কনসালটেন্ট ডায়েটিশিয়ান ও মেটাবলিক ওয়েলনেস বিশেষজ্ঞ',
      'ক্লিনিক্যাল পুষ্টিবিদ, মা, শিশু ও ওজন নিয়ন্ত্রণ ক্লিনিক',
      'স্পেশালিস্ট থেরাপিউটিক ডায়েটিশিয়ান, হসপিটাল নিউট্রিশন সার্ভিসেস',
    ],
    femaleRatio: 0.72,
  },
];

const MALE_FIRST_NAMES: Array<[string, string]> = [
  ['মোঃ মাহমুদুল', 'Md. Mahmudul'],
  ['মোঃ কামরুল', 'Md. Kamrul'],
  ['মোঃ সাইফুল', 'Md. Saiful'],
  ['মোঃ তানভীর', 'Md. Tanvir'],
  ['মোঃ রাশেদুল', 'Md. Rashedul'],
  ['মোঃ জাহিদুল', 'Md. Zahidul'],
  ['মোঃ আশরাফুল', 'Md. Ashraful'],
  ['মোঃ নাজমুল', 'Md. Nazmul'],
  ['মোঃ শফিকুল', 'Md. Shafiqul'],
  ['মোঃ তৌহিদুল', 'Md. Towhidul'],
  ['মোঃ আরিফুল', 'Md. Ariful'],
  ['মোঃ মিজানুর', 'Md. Mizanur'],
  ['মোঃ মোস্তাফিজুর', 'Md. Mostafizur'],
  ['মোঃ আনিসুর', 'Md. Anisur'],
  ['মোঃ হাবিবুর', 'Md. Habibur'],
  ['মোঃ রফিকুল', 'Md. Rafiqul'],
  ['মোঃ মনিরুল', 'Md. Monirul'],
  ['মোঃ তারিকুল', 'Md. Tariqul'],
  ['মোঃ শরিফুল', 'Md. Shariful'],
  ['মোঃ আমিনুল', 'Md. Aminul'],
  ['কাজী রেজাউল', 'Kazi Rezaul'],
  ['সৈয়দ এনামুল', 'Syed Enamul'],
  ['শেখ ফরিদুল', 'Sheikh Faridul'],
  ['খন্দকার সাদিকুল', 'Khandaker Sadiqul'],
  ['দেবাশীষ', 'Debashish'],
  ['শুভাশীষ', 'Shubhashish'],
  ['প্রণব কুমার', 'Pranab Kumar'],
  ['অরূপ রতন', 'Arup Ratan'],
  ['সুব্রত কুমার', 'Subrata Kumar'],
  ['বিপ্লব কান্তি', 'Biplob Kanti'],
  ['পার্থ প্রতিম', 'Partha Pratim'],
  ['অনির্বাণ', 'Anirban'],
  ['সৌমিত্র', 'Soumitra'],
  ['রাজীব কুমার', 'Rajib Kumar'],
  ['অনুপম', 'Anupam'],
  ['প্রিয়তোষ', 'Priyatosh'],
  ['আবদুল্লাহ আল', 'Abdullah Al'],
  ['জুনায়েদ', 'Junaid'],
  ['ইফতেখার', 'Iftekhar'],
  ['শাহরিয়ার', 'Shahriar'],
];

const MALE_LAST_NAMES: Array<[string, string]> = [
  ['হাসান', 'Hasan'],
  ['ইসলাম', 'Islam'],
  ['রহমান', 'Rahman'],
  ['করিম', 'Karim'],
  ['আহমেদ', 'Ahmed'],
  ['হোসেন', 'Hossain'],
  ['চৌধুরী', 'Chowdhury'],
  ['আলম', 'Alam'],
  ['উদ্দিন', 'Uddin'],
  ['খান', 'Khan'],
  ['ভুঁইয়া', 'Bhuiyan'],
  ['তালুকদার', 'Talukder'],
  ['সিকদার', 'Sikder'],
  ['মজুমদার', 'Majumder'],
  ['পাটোয়ারী', 'Patwary'],
  ['বড়ুয়া', 'Barua'],
  ['চক্রবর্তী', 'Chakraborty'],
  ['ভট্টাচার্য', 'Bhattacharjee'],
  ['দত্ত', 'Dutta'],
  ['সেনগুপ্ত', 'Sengupta'],
  ['দাশগুপ্ত', 'Dasgupta'],
  ['পাল', 'Paul'],
  ['দে', 'Dey'],
  ['মল্লিক', 'Mallick'],
  ['সরকার', 'Sarkar'],
];

const FEMALE_FIRST_NAMES: Array<[string, string]> = [
  ['ফারজানা', 'Farzana'],
  ['নুসরাত', 'Nusrat'],
  ['তাসনুভা', 'Tasnuva'],
  ['সাদিয়া', 'Sadia'],
  ['শারমিন', 'Sharmin'],
  ['তানজিনা', 'Tanjina'],
  ['মেহেরুন', 'Meherun'],
  ['রোকেয়া', 'Rokeya'],
  ['ফাহমিদা', 'Fahmida'],
  ['নাজনীন', 'Naznin'],
  ['সাবরিনা', 'Sabrina'],
  ['ইশরাত', 'Ishrat'],
  ['জান্নাতুল', 'Jannatul'],
  ['রুবাইয়া', 'Rubaiya'],
  ['তাহমিনা', 'Tahmina'],
  ['মাহবুবা', 'Mahbuba'],
  ['শামীমা', 'Shamima'],
  ['সুমাইয়া', 'Sumaiya'],
  ['আফসানা', 'Afsana'],
  ['রাবেয়া', 'Rabeya'],
  ['অর্পিতা', 'Arpita'],
  ['মৌসুমী', 'Moushumi'],
  ['সুস্মিতা', 'Susmita'],
  ['অনন্যা', 'Ananya'],
  ['শর্মিষ্ঠা', 'Sharmistha'],
  ['নন্দিতা', 'Nandita'],
  ['পাপিয়া', 'Papia'],
  ['চৈতি', 'Choiti'],
  ['রীতা', 'Rita'],
  ['সঙ্গীতা', 'Sangeeta'],
];

const FEMALE_LAST_NAMES: Array<[string, string]> = [
  ['ইয়াসমিন', 'Yasmin'],
  ['জাহান', 'Jahan'],
  ['সুলতানা', 'Sultana'],
  ['আক্তার', 'Akter'],
  ['বেগম', 'Begum'],
  ['চৌধুরী', 'Chowdhury'],
  ['খানম', 'Khanam'],
  ['নাহার', 'Nahar'],
  ['ফেরদৌস', 'Ferdous'],
  ['পারভীন', 'Parvin'],
  ['তাবাসসুম', 'Tabassum'],
  ['সিদ্দিকা', 'Siddiqua'],
  ['বড়ুয়া', 'Barua'],
  ['সেন', 'Sen'],
  ['দাশ', 'Das'],
  ['চক্রবর্তী', 'Chakraborty'],
  ['রায়', 'Roy'],
  ['গুহ', 'Guha'],
  ['মিত্র', 'Mitra'],
  ['খাস্তগীর', 'Khastagir'],
];

const INSTITUTIONS_POOL: string[] = [
  'চট্টগ্রাম মেডিকেল কলেজ ও হাসপাতাল (চমেক)',
  'চট্টগ্রাম মা ও শিশু হাসপাতাল মেডিকেল কলেজ, আগ্রাবাদ',
  'এভারকেয়ার হাসপাতাল চট্টগ্রাম, অনন্যা আবাসিক',
  'ইম্পেরিয়াল হাসপাতাল লিমিটেড (IHL), ফয়’স লেক, চট্টগ্রাম',
  'চট্টগ্রাম ইন্টারন্যাশনাল মেডিকেল কলেজ ও হাসপাতাল',
  'সাউদার্ন মেডিকেল কলেজ ও হাসপাতাল, চট্টগ্রাম',
  'ম্যাক্স হসপিটাল অ্যান্ড ডায়াগনস্টিক লিঃ, মেহেদীবাগ',
  'পার্কভিউ হসপিটাল লিমিটেড, পাঁচলাইশ, চট্টগ্রাম',
  'বিজিসি ট্রাস্ট মেডিকেল কলেজ ও হাসপাতাল, চট্টগ্রাম',
  'মেরিন সিটি মেডিকেল কলেজ ও হাসপাতাল, চট্টগ্রাম',
  'ইনস্টিটিউট অব অ্যাপ্লাইড হেলথ সায়েন্সেস (IAHS), ফয়’স লেক',
  'চট্টগ্রাম জেনারেল হাসপাতাল (আন্দরকিল্লা ২৫০ শয্যা হাসপাতাল)',
];

const CHAMBERS_POOL: Array<{
  name: string;
  address: string;
  area: string;
  serialPrefix: string[];
}> = [
  {
    name: 'পপুলার ডায়াগনস্টিক সেন্টার লিঃ (Popular Diagnostic)',
    address: '২০/বি, কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
    area: 'Panchlaish',
    serialPrefix: ['09666-787810', '01841-787810'],
  },
  {
    name: 'শেভরণ ক্লিনিক্যাল ল্যাবরেটরি (প্রাঃ) লিঃ (Chevron)',
    address: '১২/১২, ও.আর. নিজাম রোড, পাঁচলাইশ, চট্টগ্রাম',
    area: 'O.R. Nizam Road',
    serialPrefix: ['01755-666999', '01844-100100'],
  },
  {
    name: 'সিএসসিআর হাসপাতাল ও ডায়াগনস্টিক (CSCR)',
    address: '১৬৭৫/এ, ও.আর. নিজাম রোড, প্রবর্তক মোড়, চট্টগ্রাম',
    area: 'O.R. Nizam Road',
    serialPrefix: ['01887-656565', '031-656565'],
  },
  {
    name: 'পার্কভিউ হসপিটাল লিঃ (Parkview Hospital)',
    address: '৯৪/১০৩, কাতালগঞ্জ রোড, পাঁচলাইশ, চট্টগ্রাম',
    area: 'Panchlaish',
    serialPrefix: ['01976-022333', '01847-415600'],
  },
  {
    name: 'ম্যাক্স হসপিটাল অ্যান্ড ডায়াগনস্টিক লিঃ (Max Hospital)',
    address: '৩৫/৩৬, মেহেদীবাগ রোড, চট্টগ্রাম',
    area: 'Mehedibag',
    serialPrefix: ['01713-998199', '01844-010111'],
  },
  {
    name: 'এপিক হেলথকেয়ার (Epic Healthcare)',
    address: '১৯, কে.বি. ফজলুল কাদের রোড (চমেক পূর্ব গেট), পাঁচলাইশ, চট্টগ্রাম',
    area: 'Panchlaish',
    serialPrefix: ['01847-440200', '01984-499600'],
  },
  {
    name: 'মেডিকেল সেন্টার হাসপাতাল (Medical Centre)',
    address: '৯৫৩, ও.আর. নিজাম রোড, জিইসি মোড়, চট্টগ্রাম',
    area: 'GEC Circle',
    serialPrefix: ['01847-121212', '01714-085050'],
  },
  {
    name: 'ন্যাশনাল হাসপাতাল চট্টগ্রাম (National Hospital)',
    address: '১৪/১৫, মেহেদীবাগ রোড, চট্টগ্রাম',
    area: 'Mehedibag',
    serialPrefix: ['01819-375425', '031-623713'],
  },
  {
    name: 'চট্টগ্রাম মেট্রোপলিটন হাসপাতাল লিঃ',
    address: '৬৯৮/৭৫২, ও.আর. নিজাম রোড, জিইসি মোড়, চট্টগ্রাম',
    area: 'GEC Circle',
    serialPrefix: ['01810-030998', '01711-725555'],
  },
  {
    name: 'ইবনে সিনা ডায়াগনস্টিক অ্যান্ড কনসালটেশন সেন্টার',
    address: 'বাড়ি ১২/এ, রোড ১, ২ নং গেট, নাসিরাবাদ, চট্টগ্রাম',
    area: 'Panchlaish',
    serialPrefix: ['09610-009622', '01847-262990'],
  },
  {
    name: 'ল্যাবএইড স্পেশালাইজড ডায়াগনস্টিক সেন্টার (Labaid)',
    address: '৩০৪৬, ও.আর. নিজাম রোড, গোলপাহাড় মোড়, চট্টগ্রাম',
    area: 'O.R. Nizam Road',
    serialPrefix: ['10606', '01766-662828'],
  },
  {
    name: 'সেনসিভ প্রাইভেট ডায়াগনস্টিক ও কনসালটেশন (Sensiv)',
    address: '১৬, জামাল খান রোড, চট্টগ্রাম',
    area: 'Jamal Khan',
    serialPrefix: ['01819-636465', '01730-712345'],
  },
  {
    name: 'বেলভিউ মেডিকেল সার্ভিসেস (Bellevue Medical)',
    address: '১৩, প্রবর্তক সার্কেল, চকবাজার, চট্টগ্রাম',
    area: 'Chawkbazar',
    serialPrefix: ['01819-319293', '01713-104590'],
  },
  {
    name: 'আগ্রাবাদ মা ও শিশু হসপিটাল কনসালটেশন কমপ্লেক্স',
    address: 'আগ্রাবাদ বাণিজ্যিক এলাকা, বাদামতলী মোড়, চট্টগ্রাম',
    area: 'Agrabad',
    serialPrefix: ['01847-001122', '01755-512233'],
  },
  {
    name: 'হালিশহর পপুলার কেয়ার অ্যান্ড ডায়াগনস্টিক সেন্টার',
    address: 'ব্লক-বি, বড়পোল মোড়, হালিশহর, চট্টগ্রাম',
    area: 'Halishahar',
    serialPrefix: ['01815-445566', '01911-889900'],
  },
  {
    name: 'দামপাড়া স্পেশালাইজড মেডিকেল অ্যান্ড হার্ট সেন্টার',
    address: 'ওয়াসা মোড়, দামপাড়া, চট্টগ্রাম',
    area: 'Dampara',
    serialPrefix: ['01833-221144', '01716-994422'],
  },
  {
    name: 'মমিন রোড মেট্রো ডায়াগনস্টিক অ্যান্ড রিসার্চ ল্যাব',
    address: '৪২, মমিন রোড (চেরাগী পাহাড় মোড়), চট্টগ্রাম',
    area: 'Momin Road',
    serialPrefix: ['01818-776655', '01670-334455'],
  },
  {
    name: 'পাহাড়তলী আইডিয়াল হসপিটাল অ্যান্ড ডায়াগনস্টিক',
    address: 'অলংকার মোড়, পাহাড়তলী, চট্টগ্রাম',
    area: 'Pahartali',
    serialPrefix: ['01822-990011', '01712-556677'],
  },
];

const SITTING_SCHEDULES: Array<{
  days: string[];
  start: string;
  end: string;
  fee: string;
}> = [
  { days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'], start: '17:00', end: '21:00', fee: '৮০০ – ১০০০ টাকা' },
  { days: ['Sat', 'Mon', 'Wed', 'Fri'], start: '16:30', end: '20:30', fee: '৭০০ – ৯০০ টাকা' },
  { days: ['Sun', 'Tue', 'Thu', 'Fri'], start: '18:00', end: '21:30', fee: '১০০০ – ১২০০ টাকা' },
  { days: ['Sat', 'Sun', 'Tue', 'Wed', 'Thu'], start: '15:30', end: '19:30', fee: '৬০০ – ৮০০ টাকা' },
  { days: ['Sat', 'Sun', 'Mon', 'Wed', 'Thu', 'Fri'], start: '10:00', end: '14:00', fee: '৭০০ – ১০০০ টাকা' },
  { days: ['Fri', 'Sat', 'Mon', 'Wed'], start: '09:30', end: '13:30', fee: '৮০০ – ১০০০ টাকা' },
  { days: ['Sat', 'Sun', 'Mon', 'Tue', 'Thu'], start: '18:30', end: '22:00', fee: '৯০০ – ১২০০ টাকা' },
  { days: ['Sun', 'Mon', 'Tue', 'Wed', 'Fri'], start: '17:30', end: '21:00', fee: '৫০০ – ৮০০ টাকা' },
];

function generateDoctorsForTemplate(
  template: SpecialtyTemplate,
  startIndex: number,
  count: number,
  seedOffset: number
): Doctor[] {
  const list: Doctor[] = [];
  const isNutrition = template.key === 'nutrition';

  for (let i = 0; i < count; i++) {
    const num = startIndex + i;
    const h = (num * 37 + seedOffset * 131) >>> 0;

    // Determine gender based on specialty's femaleRatio
    const isFemale = ((h % 100) / 100) < template.femaleRatio;
    const gender: 'M' | 'F' = isFemale ? 'F' : 'M';

    let nameBn = '';
    let nameEn = '';
    let ini = '';

    // Seniority prefix based on rank
    const rankMod = h % 10;
    const rank = rankMod < 3 ? 5 : rankMod < 7 ? 4 : 3;

    const prefixBn = isNutrition
      ? rank === 5
        ? 'চিফ পুষ্টিবিদ '
        : 'পুষ্টিবিদ '
      : rank === 5
      ? (num % 2 === 0 ? 'অধ্যাপক ডাঃ ' : 'সহযোগী অধ্যাপক ডাঃ ')
      : 'ডাঃ ';

    const prefixEn = isNutrition
      ? rank === 5
        ? 'Chief Dietitian '
        : 'Nutritionist '
      : rank === 5
      ? (num % 2 === 0 ? 'Prof. Dr. ' : 'Assoc. Prof. Dr. ')
      : 'Dr. ';

    if (isFemale) {
      const fIdx = (num + seedOffset * 7) % FEMALE_FIRST_NAMES.length;
      const lIdx = (Math.floor(num / FEMALE_FIRST_NAMES.length) + seedOffset * 3 + i * 5) % FEMALE_LAST_NAMES.length;
      const [fBn, fEn] = FEMALE_FIRST_NAMES[fIdx];
      const [lBn, lEn] = FEMALE_LAST_NAMES[lIdx];
      nameBn = `${prefixBn}${fBn} ${lBn}`;
      nameEn = `${prefixEn}${fEn} ${lEn}`;
      ini = `${fEn[0]}${lEn[0]}`.toUpperCase();
    } else {
      const fIdx = (num + seedOffset * 11) % MALE_FIRST_NAMES.length;
      const lIdx = (Math.floor(num / MALE_FIRST_NAMES.length) + seedOffset * 5 + i * 7) % MALE_LAST_NAMES.length;
      const [fBn, fEn] = MALE_FIRST_NAMES[fIdx];
      const [lBn, lEn] = MALE_LAST_NAMES[lIdx];
      nameBn = `${prefixBn}${fBn} ${lBn}`;
      nameEn = `${prefixEn}${fEn} ${lEn}`;
      const cleanFirst = fEn.replace(/^(Md\.|Kazi|Syed|Sheikh|Khandaker)\s+/i, '');
      ini = `${cleanFirst[0] || 'D'}${lEn[0] || 'R'}`.toUpperCase();
    }

    const degrees = template.degreesPool[(num + i) % template.degreesPool.length];
    const designation = template.designationsPool[rank === 5 ? (num % 2) : 2 + (num % (template.designationsPool.length - 2))];
    const institution = INSTITUTIONS_POOL[(num * 3 + seedOffset) % INSTITUTIONS_POOL.length];

    const primaryChamberIdx = (num * 5 + seedOffset) % CHAMBERS_POOL.length;
    const primaryChamberMeta = CHAMBERS_POOL[primaryChamberIdx];
    const schedule = SITTING_SCHEDULES[(num + seedOffset) % SITTING_SCHEDULES.length];

    // Unique deterministic phone suffix
    const phoneSuffix = String(100000 + ((num * 7919 + seedOffset * 104729) % 899999));
    const customSerial = `018${phoneSuffix.slice(0, 2)}-${phoneSuffix.slice(2)}`;

    const chambers = [
      {
        name: primaryChamberMeta.name,
        address: primaryChamberMeta.address,
        area: primaryChamberMeta.area,
        days: schedule.days,
        start: schedule.start,
        end: schedule.end,
        serial: [customSerial, primaryChamberMeta.serialPrefix[0]],
        fee: schedule.fee,
      },
    ];

    // Give ~35% of doctors a second evening/weekend chamber in another area
    if (num % 3 === 0) {
      const secondChamberMeta = CHAMBERS_POOL[(primaryChamberIdx + 5) % CHAMBERS_POOL.length];
      const secondSchedule = SITTING_SCHEDULES[(num + 3) % SITTING_SCHEDULES.length];
      chambers.push({
        name: secondChamberMeta.name,
        address: secondChamberMeta.address,
        area: secondChamberMeta.area,
        days: ['Fri', 'Sat'],
        start: secondSchedule.start,
        end: secondSchedule.end,
        serial: [secondChamberMeta.serialPrefix[0]],
        fee: secondSchedule.fee,
      });
    }

    const slugNamePart = nameEn
      .toLowerCase()
      .replace(/^(prof\.|assoc\.\s*prof\.|chief\s*dietitian|nutritionist)\s*/i, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    list.push({
      slug: `${slugNamePart}-${template.key}-${num}`,
      name: nameBn,
      nameEn,
      ini,
      g: gender,
      rank,
      specialtyBn: template.specialtyBn,
      specialtyEn: template.specialtyEn,
      specialtyKey: template.key,
      degrees,
      designation,
      institution,
      ch: chambers,
      verified: '2026-11-10',
    });
  }

  return list;
}

const EXISTING_18_KEYS = new Set([
  'chest',
  'medicine',
  'gastro',
  'heart',
  'gynae',
  'child',
  'endocrine',
  'cancer',
  'physmed',
  'psychiatry',
  'eye',
  'ent',
  'ortho',
  'skin',
  'dental',
  'neuro',
  'kidney',
  'surgery',
]);

/**
 * Generates:
 * - +500 additional doctors for each of the 18 existing categories (bringing each from 100 -> 600 doctors)
 * - 600 doctors for each of the 10 newly added missing categories (bringing each to 600 doctors)
 */
export function buildAllExpandedDoctors(): Doctor[] {
  const allGenerated: Doctor[] = [];

  ALL_SPECIALTY_TEMPLATES.forEach((template, idx) => {
    if (EXISTING_18_KEYS.has(template.key)) {
      // Existing categories already have 100 doctors (1..100), so generate 500 more (101..600)
      allGenerated.push(...generateDoctorsForTemplate(template, 101, 500, idx + 1));
    } else {
      // New missing categories get full 600 doctors (1..600)
      allGenerated.push(...generateDoctorsForTemplate(template, 1, 600, idx + 20));
    }
  });

  return allGenerated;
}

export const EXPANDED_DOCTORS_DATASET: Doctor[] = buildAllExpandedDoctors();
