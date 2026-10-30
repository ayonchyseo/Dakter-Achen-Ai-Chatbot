export interface DiagnosticTestItem {
  id: string;
  categoryBn: string;
  categoryEn: string;
  nameBn: string;
  nameEn: string;
  shortDescBn: string;
  shortDescEn: string;
  deliveryTimeBn: string;
  deliveryTimeEn: string;
  preparationBn?: string;
  preparationEn?: string;
  prices: {
    publicCmch: string; // Chittagong Medical College Hospital (CMCH)
    standardPrivate: string; // CSCR, Sheba, Popular, Chevron, Epic
    corporatePrivate: string; // Evercare, Imperial, Parkview
  };
}

export const DIAGNOSTIC_TESTS: DiagnosticTestItem[] = [
  {
    id: 'cbc',
    categoryBn: 'রক্ত পরীক্ষা (Hematology)',
    categoryEn: 'Blood Test (Hematology)',
    nameBn: 'সিবিসি (CBC with ESR)',
    nameEn: 'Complete Blood Count (CBC) with ESR',
    shortDescBn: 'রক্তস্বল্পতা, ইনফেকশন ও প্লাটিলেট (ডেঙ্গু) নির্ণয়ে প্রধান পরীক্ষা।',
    shortDescEn: 'Detects anemia, infections, and platelet levels (vital for Dengue).',
    deliveryTimeBn: '২-৪ ঘণ্টা',
    deliveryTimeEn: '2-4 Hours',
    preparationBn: 'কোনো উপবাসের প্রয়োজন নেই।',
    preparationEn: 'No fasting required.',
    prices: {
      publicCmch: '৳ ১৫০ – ৳ ২০০',
      standardPrivate: '৳ ৪০০ – ৳ ৫০০',
      corporatePrivate: '৳ ৮০০ – ৳ ১,২০০'
    }
  },
  {
    id: 'blood-sugar-fbs',
    categoryBn: 'ডায়াবেটিস (Biochemistry)',
    categoryEn: 'Diabetes (Biochemistry)',
    nameBn: 'ফাস্টিং ব্লাড সুগার (FBS)',
    nameEn: 'Fasting Blood Sugar (FBS)',
    shortDescBn: 'ডায়াবেটিস শনাক্তকরণ ও মনিটরিং করার মৌলিক টেস্ট।',
    shortDescEn: 'Fundamental test for diabetes diagnosis and monitoring.',
    deliveryTimeBn: '২-৩ ঘণ্টা',
    deliveryTimeEn: '2-3 Hours',
    preparationBn: 'রাত ১০টার পর থেকে ৮-১০ ঘণ্টা পানি ছাড়া কিছু না খেয়ে সকালে রক্ত দিন।',
    preparationEn: '8-10 hours overnight fasting required.',
    prices: {
      publicCmch: '৳ ৫০ – ৳ ৮০',
      standardPrivate: '৳ ১৫০ – ৳ ২০০',
      corporatePrivate: '৳ ৩৫০ – ৳ ৫০০'
    }
  },
  {
    id: 'hba1c',
    categoryBn: 'ডায়াবেটিস (Biochemistry)',
    categoryEn: 'Diabetes (Biochemistry)',
    nameBn: 'এইচবিএ১সি (HbA1c - ৩ মাসের গড় সুগার)',
    nameEn: 'Glycated Hemoglobin (HbA1c)',
    shortDescBn: 'বিগত ৯০ দিনের গড় রক্তে শর্করার মাত্রা ও ডায়াবেটিস নিয়ন্ত্রণ বিশ্লেষণ।',
    shortDescEn: 'Reflects average blood sugar control over the past 3 months.',
    deliveryTimeBn: '৪-৬ ঘণ্টা',
    deliveryTimeEn: '4-6 Hours',
    preparationBn: 'উপবাসের প্রয়োজন নেই। দিনের যেকোনো সময় করা যায়।',
    preparationEn: 'No fasting needed.',
    prices: {
      publicCmch: '৳ ৩০০ – ৳ ৪০০',
      standardPrivate: '৳ ৭৫০ – ৳ ৯০০',
      corporatePrivate: '৳ ১,৫০০ – ৳ ২,০০০'
    }
  },
  {
    id: 'serum-creatinine',
    categoryBn: 'কিডনি ফাংশন (Renal)',
    categoryEn: 'Kidney Function (Renal)',
    nameBn: 'সিরাম ক্রিয়েটিনিন (Serum Creatinine)',
    nameEn: 'Serum Creatinine (Kidney Health)',
    shortDescBn: 'কিডনির ফিল্ট্রেশন কার্যকারিতা ও স্বাস্থ্য যাচাইয়ের অতি জরুরি টেস্ট।',
    shortDescEn: 'Essential test measuring how well kidneys filter waste.',
    deliveryTimeBn: '২-৩ ঘণ্টা',
    deliveryTimeEn: '2-3 Hours',
    preparationBn: 'সাধারণত বিশেষ নিয়মের দরকার নেই।',
    preparationEn: 'Routine test, no special preparation.',
    prices: {
      publicCmch: '৳ ৮০ – ৳ ১০০',
      standardPrivate: '৳ ২৫০ – ৳ ৩৫০',
      corporatePrivate: '৳ ৬০০ – ৳ ৯০০'
    }
  },
  {
    id: 'lipid-profile',
    categoryBn: 'হৃদরোগ ও কোলেস্টেরল',
    categoryEn: 'Lipid & Heart Profile',
    nameBn: 'লিপিড প্রোফাইল (Lipid Profile - কোলেস্টেরল)',
    nameEn: 'Lipid Profile (Cholesterol, HDL, LDL, TG)',
    shortDescBn: 'রক্তনালীর চর্বি, ভালো ও ক্ষতিকর কোলেস্টেরলের মাত্রা পরিমাপ।',
    shortDescEn: 'Measures good/bad cholesterol to evaluate cardiovascular risk.',
    deliveryTimeBn: '৪-৬ ঘণ্টা',
    deliveryTimeEn: '4-6 Hours',
    preparationBn: '১০-১২ ঘণ্টা খালি পেটে রক্ত দিতে হবে।',
    preparationEn: '10-12 hours fasting required.',
    prices: {
      publicCmch: '৳ ২৫০ – ৳ ৩০০',
      standardPrivate: '৳ ৭০০ – ৳ ৯০০',
      corporatePrivate: '৳ ১,৮০০ – ৳ ২,৪০০'
    }
  },
  {
    id: 'ecg',
    categoryBn: 'হৃদরোগ পরীক্ষা (Cardiac)',
    categoryEn: 'Cardiology (Cardiac)',
    nameBn: 'ইসিজি (12-Lead ECG)',
    nameEn: 'Electrocardiogram (ECG)',
    shortDescBn: 'হার্টের স্পন্দন, রিদম ও হার্ট অ্যাটাকের লক্ষণ তৎক্ষণাৎ ধারণ করে।',
    shortDescEn: 'Instantly records heart electrical rhythm and acute ischemic changes.',
    deliveryTimeBn: '১০-১৫ মিনিট',
    deliveryTimeEn: '10-15 Minutes',
    preparationBn: 'কোনো প্রস্তুতি নেই, চেম্বারে তৎক্ষণাৎ করা হয়।',
    preparationEn: 'Instant reporting, no fasting required.',
    prices: {
      publicCmch: '৳ ৮০ – ৳ ১০০',
      standardPrivate: '৳ ২৫০ – ৳ ৪০০',
      corporatePrivate: '৳ ৭০০ – ৳ ১,২০০'
    }
  },
  {
    id: 'echocardiogram',
    categoryBn: 'হৃদরোগ পরীক্ষা (Cardiac)',
    categoryEn: 'Cardiology (Cardiac)',
    nameBn: '2D ইকোকার্ডিওগ্রাম (2D Echo with Doppler)',
    nameEn: '2D Echocardiography with Color Doppler',
    shortDescBn: 'আল্ট্রাসাউন্ডের মাধ্যমে হার্টের ভাল্ভ, পাম্পিং ক্ষমতা (EF%) দেখা।',
    shortDescEn: 'Ultrasound visualization of heart chambers, valves, and EF%.',
    deliveryTimeBn: '১-২ ঘণ্টা',
    deliveryTimeEn: '1-2 Hours',
    preparationBn: 'কার্ডিওলজিস্ট নিজে পরীক্ষা সম্পন্ন করেন।',
    preparationEn: 'Performed directly by a specialist cardiologist.',
    prices: {
      publicCmch: '৳ ৬০০ – ৳ ৮০০',
      standardPrivate: '৳ ১,৫০০ – ৳ ২,২০০',
      corporatePrivate: '৳ ৩,৫০০ – ৳ ৫,০০০'
    }
  },
  {
    id: 'usg-whole-abdomen',
    categoryBn: 'আল্ট্রাসনোগ্রাম (Imaging)',
    categoryEn: 'Ultrasound (Imaging)',
    nameBn: 'ইউএসজি হোল অ্যাবডোমেন (USG of Whole Abdomen)',
    nameEn: 'USG of Whole Abdomen',
    shortDescBn: 'লিভার, পিত্তথলির পাথর, কিডনি, মূত্রথলি ও জরায়ুর পূর্ণাঙ্গ আল্ট্রা।',
    shortDescEn: 'Examines liver, gallbladder stones, kidneys, and pelvic organs.',
    deliveryTimeBn: '২-৩ ঘণ্টা',
    deliveryTimeEn: '2-3 Hours',
    preparationBn: '৬ ঘণ্টা খালি পেটে এবং মূত্রথলি ভর্তি (প্রসাবের চাপ) থাকা আবশ্যক।',
    preparationEn: '6-hour fasting and full urinary bladder required.',
    prices: {
      publicCmch: '৳ ৩০০ – ৳ ৪০০',
      standardPrivate: '৳ ১,০০০ – ৳ ১,৪০০',
      corporatePrivate: '৳ ২,৫০০ – ৳ ৩,৫০০'
    }
  },
  {
    id: 'mri-brain',
    categoryBn: 'এমআরআই ও সিটি স্ক্যান (Radiology)',
    categoryEn: 'MRI & CT Scan (Radiology)',
    nameBn: 'এমআরআই ব্রেন (MRI of Brain)',
    nameEn: 'MRI of Brain (Plain)',
    shortDescBn: 'মাথাব্যথা, স্ট্রোক, টিউমার বা স্নায়ুবিক জটিলতার নিখুঁত থ্রিডি চিত্র।',
    shortDescEn: 'High-resolution imaging for stroke, migraines, and neurological disorders.',
    deliveryTimeBn: '১২-২৪ ঘণ্টা',
    deliveryTimeEn: '12-24 Hours',
    preparationBn: 'শরীরে কোনো ধাতব বস্তু, পেসমেকার বা ইমপ্ল্যান্ট থাকলে আগে জানান।',
    preparationEn: 'Remove all metallic objects. Disclose pacemakers/implants.',
    prices: {
      publicCmch: '৳ ৩,০০০ – ৳ ৪,০০০',
      standardPrivate: '৳ ৬,৫০০ – ৳ ৮,০০০',
      corporatePrivate: '৳ ১২,০০০ – ৳ ১৬,০০০'
    }
  },
  {
    id: 'ct-scan-chest',
    categoryBn: 'এমআরআই ও সিটি স্ক্যান (Radiology)',
    categoryEn: 'MRI & CT Scan (Radiology)',
    nameBn: 'সিটি স্ক্যান এইচআরসিটি চেস্ট (HRCT Chest)',
    nameEn: 'HRCT of Chest / Lungs',
    shortDescBn: 'ফুসফুসের সংক্রমণ, নিউমোনিয়া ও শ্বাসকষ্টের গভীর বিশ্লেষণ।',
    shortDescEn: 'Detailed lung tomography for pulmonary infections and chronic cough.',
    deliveryTimeBn: '৬-১২ ঘণ্টা',
    deliveryTimeEn: '6-12 Hours',
    preparationBn: 'কনট্রাস্টের ক্ষেত্রে ৪ ঘণ্টা খালি পেটে থাকতে হয়।',
    preparationEn: '4-hour fasting if IV contrast is required.',
    prices: {
      publicCmch: '৳ ২,০০০ – ৳ ৩,০০০',
      standardPrivate: '৳ ৫,০০০ – ৳ ৬,৫০০',
      corporatePrivate: '৳ ৯,৫০০ – ৳ ১৩,০০০'
    }
  }
];
