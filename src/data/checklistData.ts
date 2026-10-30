export interface ChecklistItem {
  id: string;
  categoryBn: string;
  categoryEn: string;
  titleBn: string;
  titleEn: string;
  tipBn: string;
  tipEn: string;
  recommended: boolean;
}

export const DOCTOR_VISIT_CHECKLIST: ChecklistItem[] = [
  {
    id: 'past-prescriptions',
    categoryBn: 'কাগজপত্র ও রেকর্ড',
    categoryEn: 'Documents & Records',
    titleBn: 'পূর্বের প্রেসক্রিপশন ও ব্যবস্থাপত্র',
    titleEn: 'Previous Doctor Prescriptions',
    tipBn: 'বিগত ৬ মাস বা ১ বছরের সকল ব্যবস্থাপত্র তারিখ অনুসারে সাজিয়ে সাথে নিন।',
    tipEn: 'Organize prescriptions chronologically for the doctor to review.',
    recommended: true
  },
  {
    id: 'recent-lab-reports',
    categoryBn: 'কাগজপত্র ও রেকর্ড',
    categoryEn: 'Documents & Records',
    titleBn: 'সাম্প্রতিক সকল রক্ত ও ল্যাব রিপোর্ট',
    titleEn: 'Recent Diagnostic Lab Reports',
    tipBn: 'সিবিসি, সুগার, ইউএসজি বা এক্স-রে রিপোর্ট মূল ফাইলসহ সাথে রাখা ভালো।',
    tipEn: 'Bring recent CBC, Blood Sugar, USG, and X-ray films.',
    recommended: true
  },
  {
    id: 'current-medicines',
    categoryBn: 'ওষুধের তালিকা',
    categoryEn: 'Current Medications',
    titleBn: 'বর্তমানে যে ওষুধগুলো নিয়মিত খাচ্ছেন তার তালিকা/পাতা',
    titleEn: 'List or Strips of Current Medicines',
    tipBn: 'ডায়াবেটিস, প্রেসার বা থাইরয়েডের ওষুধের ডোজ জানা অত্যন্ত জরুরি। পাতার ছবি তুলে বা ওষুধ সাথে রাখতে পারেন।',
    tipEn: 'Keep current dosages of BP, diabetes, or blood thinners handy.',
    recommended: true
  },
  {
    id: 'symptom-notes',
    categoryBn: 'রোগীর প্রস্তুতি',
    categoryEn: 'Patient Preparation',
    titleBn: 'সমস্যা কতদিন ধরে এবং কোন সময়ে বাড়ে তার নোট',
    titleEn: 'Notes on Symptom Timeline & Triggers',
    tipBn: 'ডাক্তারের চেম্বারে তাড়াহুড়োয় লক্ষণ ভুলে যাওয়ার প্রবণতা থাকে। মোবাইলে ৩-৪টি প্রধান উপসর্গ লিখে রাখুন।',
    tipEn: 'Write down key symptoms and when they worsen to ensure you cover them.',
    recommended: true
  },
  {
    id: 'fasting-check',
    categoryBn: 'রোগীর প্রস্তুতি',
    categoryEn: 'Patient Preparation',
    titleBn: 'নতুন কোনো রক্ত পরীক্ষার প্রয়োজন হলে খালি পেট প্রস্তুতি',
    titleEn: 'Fasting Preparation for Lab Tests',
    tipBn: 'যদি ডাক্তার দেখে তাৎক্ষণিক সুগার বা লিপিড প্রোফাইল দেন, সকালে খালি পেটে যাওয়া সুবিধাজনক হতে পারে।',
    tipEn: 'Helpful if the doctor orders immediate fasting lab tests.',
    recommended: false
  },
  {
    id: 'serial-confirmation',
    categoryBn: 'চেম্বার তথ্য',
    categoryEn: 'Chamber Logistics',
    titleBn: 'সিরিয়াল নম্বর ও পৌঁছানোর সময় যাচাই',
    titleEn: 'Chamber Serial & Arrival Timing',
    tipBn: 'চেম্বারের সহকারীর দেওয়া সময় অনুযায়ী কমপক্ষে ১৫-২০ মিনিট আগে উপস্থিত থাকুন।',
    tipEn: 'Arrive 15-20 minutes before your allocated serial window.',
    recommended: true
  }
];
