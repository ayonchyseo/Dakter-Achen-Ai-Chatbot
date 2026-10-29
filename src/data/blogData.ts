import { BlogPost, DailyHealthTip, BlogCategoryKey } from '../types/blog';
import { BLOGS_BATCH_1 } from './blogsBatch1';
import { BLOGS_BATCH_2 } from './blogsBatch2';
import { BLOGS_BATCH_3 } from './blogsBatch3';
import { BLOGS_BATCH_4 } from './blogsBatch4';
import { BLOGS_BATCH_5 } from './blogsBatch5';

export const BLOG_CATEGORIES: Array<{ key: BlogCategoryKey | 'all'; bn: string; en: string }> = [
  { key: 'all', bn: 'সকল নিবন্ধ', en: 'All Articles' },
  { key: 'preventive', bn: 'প্রতিরোধমূলক স্বাস্থ্য', en: 'Preventive Care' },
  { key: 'chronic', bn: 'দীর্ঘস্থায়ী রোগ', en: 'Chronic Illness' },
  { key: 'maternal_child', bn: 'মা ও শিশু স্বাস্থ্য', en: 'Mother & Child' },
  { key: 'emergency', bn: 'জরুরি ফার্স্ট এইড', en: 'Emergency Aid' },
  { key: 'lifestyle', bn: 'জীবনযাত্রা ও খাদ্যাভ্যাস', en: 'Lifestyle & Diet' },
  { key: 'mental', bn: 'মানসিক সুস্থতা', en: 'Mental Wellbeing' }
];

export const DAILY_HEALTH_TIPS: DailyHealthTip[] = [
  {
    id: 'tip-1',
    dayIndex: 0,
    categoryBn: 'জলীয় পুষ্টি ও হাইড্রেশন',
    categoryEn: 'Hydration',
    titleBn: 'প্রতিদিন পরিমিত পানি ও লবণাক্ততার ভারসাম্য রক্ষা করুন',
    titleEn: 'Maintain Proper Hydration & Electrolyte Balance',
    tipBn: 'আমাদের দেশে আর্দ্র আবহাওয়ায় প্রতিদিন অন্তত ২.৫ থেকে ৩ লিটার বিশুদ্ধ পানি পান করা উচিত। প্রস্রাবের হালকা খড়ের মতো রং পর্যাপ্ত হাইড্রেশনের অন্যতম সূচক।',
    tipEn: 'In humid weather, drink at least 2.5 to 3 liters of purified water daily. Pale straw-colored urine is an accurate sign of optimal hydration.',
    actionStepBn: 'কাজের টেবিলে বা ব্যাগে ১ লিটারের পানির বোতল রাখুন এবং দুপুর ১টার আগেই অন্তত দেড় লিটার পানি শেষ করার অভ্যাস করুন।',
    actionStepEn: 'Keep a 1L water bottle beside your workstation and aim to finish the first bottle before 1 PM.',
    scientificFactBn: 'শরীরের মোট ওজনের মাত্র ২% পানিশূন্যতা মস্তিষ্কের মনোযোগ এবং শারীরিক কার্যক্ষমতা প্রায় ২০% কমিয়ে দিতে পারে।',
    scientificFactEn: 'Even a 2% drop in body water can decrease concentration and physical stamina by nearly 20%.',
    iconType: 'water'
  },
  {
    id: 'tip-2',
    dayIndex: 1,
    categoryBn: 'হৃদরোগ ও রক্তচাপ',
    categoryEn: 'Heart Health',
    titleBn: 'খাবারে বাড়তি কাঁচা লবণ বর্জন করুন',
    titleEn: 'Avoid Adding Raw Salt to Meals',
    tipBn: 'ভাতের সাথে বা সালাদে বাড়তি কাঁচা লবণ খাওয়া রক্তনালীর চাপ বাড়িয়ে উচ্চ রক্তচাপের ঝুঁকি দ্বিগুণ করে। রান্নায় দেওয়া স্বাভাবিক লবণই দৈনিক সোডিয়ামের চাহিদার জন্য যথেষ্ট।',
    tipEn: 'Adding extra table salt to rice or salads stresses arterial walls and significantly elevates hypertension risk. Salt used during standard cooking is usually sufficient.',
    actionStepBn: 'ডাইনিং টেবিল থেকে লবণের পাত্র সরিয়ে রাখুন এবং লেবুর রস বা গোলমরিচ দিয়ে স্বাদ বাড়ান।',
    actionStepEn: 'Remove the salt shaker from your dining table and use fresh lemon juice or herbs for flavor instead.',
    scientificFactBn: 'দৈনিক লবণ গ্রহণ ৫ গ্রামের নিচে সীমিত রাখলে স্ট্রোকের আশঙ্কা প্রায় ২৩% পর্যন্ত হ্রাস পায়।',
    scientificFactEn: 'Restricting salt intake below 5g daily lowers the lifetime risk of stroke by up to 23%.',
    iconType: 'heart'
  },
  {
    id: 'tip-3',
    dayIndex: 2,
    categoryBn: 'শারীরিক সক্রিয়তা',
    categoryEn: 'Physical Activity',
    titleBn: 'প্রতিদিন অন্তত ৩০ মিনিট দ্রুত হাঁটার অভ্যাস',
    titleEn: 'Brisk Walking for At Least 30 Minutes Daily',
    tipBn: 'একটানা বসে কাজ করা রক্ত সঞ্চালন মন্থর করে। সকালে বা বিকেলে ৩০ মিনিট মাঝারি গতিতে হাঁটলে ইনসুলিনের কার্যক্ষমতা বাড়ে এবং হৃদপিণ্ড সুস্থ থাকে।',
    tipEn: 'Prolonged sitting slows circulation. A 30-minute brisk walk daily sharpens insulin sensitivity and strengthens cardiovascular resilience.',
    actionStepBn: 'অফিস বা দোকানে লিফটের বদলে সিঁড়ি ব্যবহার করুন এবং প্রতি ১ ঘণ্টা বসার পর ২ মিনিট দাঁড়িয়ে স্ট্রেচ করুন।',
    actionStepEn: 'Take stairs instead of lifts when possible, and stand to stretch for 2 minutes every hour of seated desk work.',
    scientificFactBn: 'নিয়মিত হাঁটা খারাপ কোলেস্টেরল (LDL) কমিয়ে ভালো কোলেস্টেরল (HDL) বাড়াতে সাহায্য করে।',
    scientificFactEn: 'Regular brisk walking elevates beneficial HDL cholesterol while bringing down LDL particles.',
    iconType: 'walk'
  },
  {
    id: 'tip-4',
    dayIndex: 3,
    categoryBn: 'গ্যাস্ট্রিক ও হজম',
    categoryEn: 'Digestive Health',
    titleBn: 'রাতের খাবারের ঠিক পরপরই ঘুমাতে যাবেন না',
    titleEn: 'Avoid Going to Bed Immediately After Dinner',
    tipBn: 'ভারী রাতের খাবার খেয়ে অবিলম্বে শুয়ে পড়লে পাকস্থলীর এসিড খাদ্যনালীতে উঠে আসে (GERD), যা বুকজ্বালা ও দীর্ঘস্থায়ী কাশির কারণ হয়।',
    tipEn: 'Lying flat directly after a heavy dinner triggers acid reflux (GERD), causing nighttime chest burning, sour throat, and chronic cough.',
    actionStepBn: 'ঘুমানোর অন্তত ২ থেকে ৩ ঘণ্টা আগে রাতের খাবার শেষ করুন এবং রাতে তৈলাক্ত খাবার পরিহার করুন।',
    actionStepEn: 'Finish dinner at least 2 to 3 hours prior to sleep and avoid oily, deep-fried snacks late at night.',
    scientificFactBn: 'হজম প্রক্রিয়া চলাকালীন মাধ্যাকর্ষণ শক্তি পাকস্থলীর গ্যাস্ট্রিক জুসকে খাদ্যনালীর নিচের ভালভে আটকে রাখতে সাহায্য করে।',
    scientificFactEn: 'Gravity helps keep acidic gastric enzymes safely inside the stomach while resting in an upright position.',
    iconType: 'apple'
  },
  {
    id: 'tip-5',
    dayIndex: 4,
    categoryBn: 'ঘুম ও পুনরুজ্জীবন',
    categoryEn: 'Sleep & Recovery',
    titleBn: 'প্রতি রাতে ৭-৮ ঘণ্টার নিরবচ্ছিন্ন ঘুম নিশ্চিত করুন',
    titleEn: 'Prioritize 7-8 Hours of Uninterrupted Sleep',
    tipBn: 'পর্যাপ্ত গভীর ঘুম শরীরের রোগ প্রতিরোধ কোষ (টি-সেল) পুনর্গঠন করে এবং রক্তে কর্টিসল নামক স্ট্রেস হরমোনের মাত্রা নিয়ন্ত্রণে রাখে।',
    tipEn: 'Quality sleep revitalizes vital T-cell immune defenses and moderates cortisol stress hormone spikes.',
    actionStepBn: 'ঘুমানোর ৩০ মিনিট আগে মোবাইল ও ল্যাপটপের নীল আলো বন্ধ রাখুন এবং ঘরের আলো মৃদু করুন।',
    actionStepEn: 'Turn off smartphones and bright laptop displays 30 minutes before sleep to trigger natural melatonin release.',
    scientificFactBn: 'দীর্ঘদিন ঘুমের ঘাটতি টাইপ-২ ডায়াবেটিস এবং দীর্ঘমেয়াদী ওজন বৃদ্ধির ঝুঁকি বহুগুণ বৃদ্ধি করে।',
    scientificFactEn: 'Chronic sleep deprivation disrupts hunger hormones leptin and ghrelin, accelerating weight gain and insulin resistance.',
    iconType: 'moon'
  },
  {
    id: 'tip-6',
    dayIndex: 5,
    categoryBn: 'চক্ষু যত্ন ও স্ক্রিন টাইম',
    categoryEn: 'Eye Care & Screen Health',
    titleBn: '২০-২০-২০ নিয়ম মেনে চোখের ক্লান্তি দূর করুন',
    titleEn: 'Follow the 20-20-20 Rule to Relieve Eye Strain',
    tipBn: 'কম্পিউটার বা মোবাইলে টানা কাজ করলে চোখ শুষ্ক হয়ে যায় এবং দৃষ্টি ঝাপসা হতে পারে। প্রতি ২০ মিনিট পর ২০ ফুট দূরত্বের কোনো বস্তুর দিকে ২০ সেকেন্ড তাকান।',
    tipEn: 'Staring continuously at digital screens reduces blinking rate by half. Glance at an object 20 feet away for 20 seconds every 20 minutes.',
    actionStepBn: 'পর্দার উজ্জ্বলতা ঘরের আলোর সাথে সামঞ্জস্য রাখুন এবং সচেতনভাবে মাঝে মাঝে চোখের পলক ফেলুন।',
    actionStepEn: 'Match screen brightness to room lighting and consciously blink to keep the cornea lubricated.',
    scientificFactBn: 'নিয়মিত চোখের বিরতি সিলিয়ারি পেশীর টান কমিয়ে ডিজিটাল আই স্ট্রেন ও মাইগ্রেনের তীব্রতা হ্রাস করে।',
    scientificFactEn: 'Brief focal shifts relax the ciliary muscle of the eye lens, preventing strain-induced headaches.',
    iconType: 'shield'
  },
  {
    id: 'tip-7',
    dayIndex: 6,
    categoryBn: 'মানসিক সুস্থতা',
    categoryEn: 'Mental Wellbeing',
    titleBn: 'প্রতিদিন ৫ মিনিটের নিয়ন্ত্রিত গভীর শ্বাসক্রিয়া',
    titleEn: '5 Minutes of Controlled Deep Breathing Daily',
    tipBn: 'উদ্বেগ বা অতিরিক্ত কাজের চাপে ৪ সেকেন্ড নাক দিয়ে শ্বাস নিন, ৪ সেকেন্ড ধরে রাখুন এবং ৬ সেকেন্ড ধীরে ধীরে মুখ দিয়ে ছাড়ুন। এতে হৃদস্পন্দন শান্ত হয়।',
    tipEn: 'When feeling overwhelmed, inhale for 4 seconds, hold for 4, and gently exhale through the mouth for 6. This activates parasympathetic calming.',
    actionStepBn: 'সকালে ঘুম থেকে উঠে অথবা কাজের মাঝে কোনো বিরতিতে ৫টি ধীর গভীর শ্বাস নিন।',
    actionStepEn: 'Take 5 mindful deep breaths first thing in the morning or between demanding meetings.',
    scientificFactBn: 'ধীর শ্বাস-প্রশ্বাস ভেগাস নার্ভকে উদ্দীপিত করে তাৎক্ষণিকভাবে রক্তচাপ ও মানসিক অস্থিরতা কমায়।',
    scientificFactEn: 'Prolonged exhalation stimulates the vagus nerve, initiating heart rate variability and mental calm.',
    iconType: 'brain'
  }
];

const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    slug: 'dengue-fever-warning-signs-chattogram',
    titleBn: 'ডেঙ্গু জ্বর: কখন তাৎক্ষণিক হাসপাতালে ভর্তি করাবেন? বিপদচিহ্ন ও যত্ন',
    titleEn: 'Dengue Fever: When to Rush to Hospital? Warning Signs & Platelet Care',
    excerptBn: 'ডেঙ্গুতে জ্বর কমে যাওয়ার সময়টাই সবচেয়ে ঝুঁকিপূর্ণ (ক্রিটিক্যাল ফেজ)। পেটে তীব্র ব্যথা, ঘন ঘন বমি বা মাড়ি থেকে রক্তক্ষরণ হলে দেরি না করে হাসপাতালে নিন।',
    excerptEn: 'The critical phase of dengue begins right as fever subsides. Severe abdominal pain, repeated vomiting, or bleeding gums require emergency hospitalization.',
    categoryKey: 'emergency',
    categoryBn: 'জরুরি ফার্স্ট এইড',
    categoryEn: 'Emergency Aid',
    readTimeMin: 5,
    publishedDate: '২৪ অক্টোবর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    author: {
      nameBn: 'স্বাস্থ্য সম্পাদকীয় ডেস্ক',
      nameEn: 'Editorial Medical Desk',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি (বারডেম)',
      degreesEn: 'MBBS, BCS, PGT (Med), CCD (BIRDEM)'
    },
    recommendedSpecialty: 'medicine',
    tags: ['ডেঙ্গু', 'জ্বর', 'রক্তচাপ', 'প্লেটলেট', 'হাসপাতাল', 'Dengue', 'Fever', 'Emergency'],
    keyTakeawaysBn: [
      'জ্বর নেমে যাওয়ার পর ৩য় থেকে ৬ষ্ঠ দিনটি হলো ডেঙ্গুর সবচেয়ে সতর্ক থাকার সময় (ক্রিটিক্যাল ফেজ)।',
      'প্যারাসিটামল ছাড়া অ্যাসপিরিন বা ডাইক্লোফেনাক জাতীয় ব্যথানাশক ঔষধ কোনোভাবেই খাবেন না (রক্তক্ষরণ বাড়ায়)।',
      'স্যালাইন, ডাবের পানি, ভাতের মাড় ও লেবুর শরবতের মাধ্যমে প্রচুর তরল গ্রহণ করতে হবে।',
      'তীব্র পেটে ব্যথা, ক্রমাগত বমি, বা মাড়ি/নাক দিয়ে রক্তপাত হলে তাৎক্ষণিক হাসপাতালে নিতে হবে।'
    ],
    keyTakeawaysEn: [
      'Days 3 to 6, when high fever begins to break, mark the high-risk critical phase.',
      'Never take Aspirin, Ibuprofen, or Diclofenac painkillers as they precipitate severe internal bleeding.',
      'Maintain aggressive oral hydration with ORS, coconut water, soup, and fresh lemon water.',
      'Severe abdominal pain, persistent vomiting, or mucosal bleeding require immediate emergency room admission.'
    ],
    contentSections: [
      {
        titleBn: '১. ডেঙ্গুর তিনটি পর্যায় ও মারাত্মক ভুল ধারণা',
        titleEn: '1. The Three Phases of Dengue & Common Misconceptions',
        paragraphsBn: [
          'ডেঙ্গু ভাইরাসজনিত জ্বরের তিনটি প্রধান স্তর রয়েছে: ফেব্রাইল বা তীব্র জ্বরের ধাপ (১-৩ দিন), ক্রিটিক্যাল ফেজ (৩-৬ দিন) এবং রিকভারি বা সুস্থ হওয়ার ধাপ। অনেকেই মনে করেন জ্বর ছেড়ে গেছে মানেই রোগী ঝুঁকিমুক্ত, যা সবচেয়ে বড় ভুল।',
          'প্রকৃতপক্ষে ডেঙ্গু শক সিন্ড্রোম এবং রক্তনালী থেকে প্লাজমা লিকেজের জটিলতা দেখা দেয় সাধারণত জ্বর কমার ঠিক পরেই। এই সময় রক্তচাপ ও প্রস্রাবের পরিমাণের ওপর কড়া নজর রাখতে হবে।'
        ],
        paragraphsEn: [
          'Dengue evolves through three distinct clinical phases: the febrile phase (days 1-3), the critical capillary leak phase (days 3-6), and the convalescent recovery phase. Patients frequently assume that when fever drops, the danger has passed.',
          'In reality, Dengue Shock Syndrome (DSS) and sudden plasma leakage into the pleural and peritoneal cavities occur primarily right as the fever subsides.'
        ]
      },
      {
        titleBn: '২. ডেঙ্গুর বিপদচিহ্ন (Warning Signs) — অবিলম্বে হাসপাতালে নিন',
        titleEn: '2. Critical Warning Signs — Rush to Hospital Immediately',
        paragraphsBn: [
          'বিশ্ব স্বাস্থ্য সংস্থা (WHO) ও জাতীয় ডেঙ্গু গাইডলাইন অনুযায়ী নিচের যেকোনো একটি লক্ষণ দেখা দিলে কোনো বিলম্ব না করে রোগীকে নিকটস্থ হাসপাতালে ভর্তি করাতে হবে:'
        ],
        paragraphsEn: [
          'According to WHO and national clinical management guidelines, the presence of even a single one of the following red flags warrants prompt hospitalization:'
        ],
        tipsListBn: [
          'তীব্র ও অবিরাম পেটে ব্যথা (Severe abdominal pain)',
          '২৪ ঘণ্টায় ৩ বারের বেশি ক্রমাগত বমি হওয়া',
          'মাড়ি, দাঁতের গোড়া, নাক দিয়ে রক্ত পড়া বা কালো পায়খানা',
          'অতিরিক্ত দুর্বলতা, অস্থিরতা বা হাত-পা বরফের মতো ঠান্ডা ও নীলচে হয়ে যাওয়া',
          'প্রস্রাবের পরিমাণ স্বাভাবিকের চেয়ে উল্লেখযোগ্যভাবে কমে যাওয়া (৬ ঘণ্টার বেশি প্রস্রাব না হওয়া)'
        ],
        tipsListEn: [
          'Severe and persistent abdominal tenderness',
          'Persistent vomiting (more than 3 episodes within 24 hours)',
          'Mucosal bleeding (bleeding gums, epistaxis, or dark tarry stool)',
          'Extreme lethargy, confusion, or cold clammy extremities',
          'Oliguria (no urination for more than 6 consecutive hours)'
        ],
        warningCalloutBn: 'সতর্কতা: ডেঙ্গু সন্দেহে কোনো অবস্থাতেই ফার্মেসি থেকে ব্যথানাশক ইনজেকশন বা সাপোজিটরি (Diclofenac/Ketorolac) নেবেন না। এটি প্লেটলেট আরও দ্রুত নষ্ট করে ভয়াবহ গ্যাস্ট্রিক রক্তক্ষরণ ঘটাতে পারে।',
        warningCalloutEn: 'Warning: Under no circumstances should NSAID painkillers or suppositories (Diclofenac, Ibuprofen, Ketorolac) be administered. They trigger lethal gastric hemorrhage.'
      },
      {
        titleBn: '৩. বাসায় চিকিৎসাধীন রোগীর সঠিক খাদ্য ও পরিচর্যা',
        titleEn: '3. Home Care & Hydration Protocol',
        paragraphsBn: [
          'বিপদচিহ্ন না থাকলে বাসায় বিশ্রাম ও সঠিক তরল গ্রহণই মূল চিকিৎসা। প্রাপ্তবয়স্ক রোগীর ক্ষেত্রে দৈনিক আড়াই থেকে তিন লিটার তরল নিশ্চিত করা জরুরি। ওরস্যালাইন, ডাবের পানি, ঘরে তৈরি পাতলা স্যুপ এবং টাটকা ফলের রস দিন।',
          'রক্তের সিবিসি (CBC) ও প্লেটলেট কাউন্ট চিকিৎসকের পরামর্শ অনুযায়ী নিয়মিত পরীক্ষা করান। প্লেটলেট সংখ্যার চেয়ে প্যাকড সেল ভলিউম (PCV বা Hematocrit) বৃদ্ধি পাওয়া প্লাজমা লিকেজের জরুরি সংকেত।'
        ],
        paragraphsEn: [
          'If no warning signs exist, bed rest and strict oral fluid balance constitute the cornerstone of outpatient care. Ensure 2.5 to 3 liters of fluids daily for adults.',
          'Serial Complete Blood Count (CBC) monitoring is essential. A sudden spike in Hematocrit (PCV) is often an earlier and more critical warning of plasma leakage than the platelet count alone.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'প্লেটলেট কত নিচে নামলে রক্ত বা প্লেটলেট দিতে হয়?',
        questionEn: 'At what platelet count is a transfusion required?',
        answerBn: 'সাধারণত প্লেটলেট ২০,০০০-এর নিচে নামলে এবং সক্রিয় রক্তক্ষরণ (Active Bleeding) থাকলে চিকিৎসকের পর্যবেক্ষণে ট্রান্সফিউশন বিবেচনা করা হয়। রক্তক্ষরণ না থাকলে শুধু সংখ্যা কমলেই প্লেটলেট দেওয়ার প্রয়োজন হয় না; হাইড্রেশনই মূল।',
        answerEn: 'Transfusions are generally reserved for counts below 20,000 with active clinical bleeding. In the absence of hemorrhage, conservative fluid management is the international standard.'
      },
      {
        questionBn: 'ডেঙ্গু হলে কোন পরীক্ষাটি প্রথম দিনেই করা উচিত?',
        questionEn: 'Which diagnostic test should be performed on day 1?',
        answerBn: 'জ্বরের প্রথম ২৪ থেকে ৭২ ঘণ্টার মধ্যে ডেঙ্গু এনএস১ অ্যান্টিজেন (Dengue NS1 Ag) এবং সিবিসি (CBC) পরীক্ষা করা সবচেয়ে নির্ভরযোগ্য।',
        answerEn: 'Within the first 24 to 72 hours of fever onset, the Dengue NS1 Antigen test along with a baseline CBC is the standard test.'
      }
    ]
  },
  {
    slug: 'diabetes-diet-and-exercise-bangladesh',
    titleBn: 'ডায়াবেটিস নিয়ন্ত্রণে দেশীয় খাদ্যাভ্যাস ও শারীরিক ব্যায়াম: সম্পূর্ণ নির্দেশিকা',
    titleEn: 'Managing Diabetes with Bangladeshi Diet & Exercise: Practical Guide',
    excerptBn: 'ভাত ও মিষ্টি পুরোপুরি বাদ না দিয়েও সঠিক প্লেট মডেল ও সময়মতো হাঁটার মাধ্যমে রক্তে শর্করা চমৎকার নিয়ন্ত্রণে রাখা সম্ভব। জেনে নিন বিশেষজ্ঞ চিকিৎসকদের পরামর্শ।',
    excerptEn: 'You do not need to starve or entirely eliminate rice to manage diabetes. Master the Bangladeshi Plate Model, meal timing, and post-meal walking.',
    categoryKey: 'chronic',
    categoryBn: 'দীর্ঘস্থায়ী রোগ',
    categoryEn: 'Chronic Illness',
    readTimeMin: 6,
    publishedDate: '২২ অক্টোবর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      nameBn: 'পুষ্টি ও লাইফস্টাইল বিভাগ',
      nameEn: 'Nutrition & Lifestyle Desk',
      roleBn: 'ডাক্তার আছেন মেডিকেল টিম',
      roleEn: 'Dakter Achen Medical Team'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস (স্বাস্থ্য), সিসিডি (বারডেম)',
      degreesEn: 'MBBS, BCS, CCD (BIRDEM)'
    },
    recommendedSpecialty: 'medicine',
    tags: ['ডায়াবেটিস', 'খাদ্যাভ্যাস', 'ইনসুলিন', 'বারডেম', 'রক্তে শর্করা', 'Diabetes', 'Diet', 'HbA1c'],
    keyTakeawaysBn: [
      'প্লেট মডেল মেনে চলুন: অর্ধেক প্লেট শাকসবজি, এক-চতুর্থাংশ মাছ/মাংস/ডাল এবং বাকি এক-চতুর্থাংশ লাল চালের ভাত।',
      'খাবারের ঠিক পরপরই অন্তত ১০-১৫ মিনিট হাঁটলে খাবারের পরবর্তী সুগার স্পাইক (Postprandial Glucose) নাটকীয়ভাবে কমে।',
      'দৈনিক ৬ থেকে ৮ ঘণ্টা পর্যাপ্ত ঘুম ও মানসিক চাপ নিয়ন্ত্রণ ইনসুলিন রেজিসট্যান্স কমাতে সরাসরি সাহায্য করে।',
      'প্রতি তিন মাস পরপর HbA1c পরীক্ষা করে গড় শর্করা ৭%-এর নিচে রাখার লক্ষ্য রাখুন।'
    ],
    keyTakeawaysEn: [
      'Adopt the balanced plate method: half plate vegetables/greens, one-quarter lean protein, one-quarter unrefined carbohydrates.',
      'A 10-15 minute gentle walk immediately following major meals flattens postprandial glucose surges.',
      'Quality sleep and stress reduction directly alleviate cortisol-driven insulin resistance.',
      'Target an HbA1c below 7.0% checked systematically every 3 months.'
    ],
    contentSections: [
      {
        titleBn: '১. দেশীয় খাবারে "হাফ-প্লেট" সবজির নিয়ম',
        titleEn: '1. The Half-Plate Vegetable Rule in Everyday Meals',
        paragraphsBn: [
          'আমাদের দেশের প্রধান সমস্যা হলো প্লেটের তিন-চতুর্থাংশই থাকে সাদা ভাত। এতে রক্তে গ্লুকোজ দ্রুত বেড়ে যায় এবং অগ্ন্যাশয়ের ওপর অতিরিক্ত চাপ পড়ে।',
          'সহজ সমাধান হলো একটি মাঝারি মাপের প্লেটকে চার ভাগে ভাগ করা। দুই ভাগ বা অর্ধেক জুড়ে থাকবে রান্না করা বা কাঁচা শাকসবজি (যেমন: লাউ, পটল, ঝিঙে, করলা, শসা, পালং বা লাল শাক)। এক ভাগে থাকবে প্রোটিন (মাছ, চামড়া ছাড়া মুরগির মাংস বা ডিম) এবং মাত্র এক ভাগে থাকবে ভাত।'
        ],
        paragraphsEn: [
          'In traditional dining, white refined rice dominates three-quarters of the plate, precipitating sharp post-meal glycemic spikes and taxing pancreatic beta cells.',
          'The clinical solution is the quarter-plate protocol: allocate 50% to high-fiber non-starchy vegetables (gourd, pointed gourd, bitter melon, cucumbers, spinach), 25% to protein (fish, skinless chicken, egg), and only 25% to complex carbohydrates.'
        ]
      },
      {
        titleBn: '২. ফল ও মিষ্টি খাওয়ার সঠিক নিয়ম',
        titleEn: '2. Fruit Intake & Glycemic Index Truths',
        paragraphsBn: [
          'ডায়াবেটিস রোগীদের সব মিষ্টি ফল খাওয়া সম্পূর্ণ নিষেধ — এটি একটি ভুল ধারণা। পেয়ারা, আমলকী, জাম্বুরা, কামরাঙ্গা, আপেল ও মাল্টা পরিমিত পরিমাণে খাওয়া সম্পূর্ণ নিরাপদ।',
          'তবে পাকা আম, কাঁঠাল, কলা ও পাকা পেঁপে খাওয়ার সময় পরিমাণের দিকে সতর্ক থাকতে হবে। কোনো অবস্থাতেই জুস বা ফলের রস করে খাবেন না, কারণ এতে ফাইবার নষ্ট হয়ে দ্রুত ফ্রুক্টোজ রক্তে মিশে যায়।'
        ],
        paragraphsEn: [
          'The notion that individuals with diabetes can consume zero fruit is outdated. Low glycemic index fruits like green guava, amla, pomelo, and apples can be safely enjoyed in portion-controlled servings.',
          'Avoid fruit juices or smoothies where natural fibers are pulverized, leading to swift fructose absorption.'
        ],
        warningCalloutBn: 'জরুরি সতর্কতা: চিকিৎসকের পরামর্শ ব্যতীত নিজে থেকে ইনসুলিন বা ডায়াবেটিসের ওষুধের মাত্রা পরিবর্তন করবেন না। বুক ধড়ফড়, অতিরিক্ত ঘাম ও মাথা ঘোরা হাইপোগ্লাইসেমিয়ার (চিনির মাত্রা কমে যাওয়া) লক্ষণ — তখন সাথে সাথে চিনির শরবত বা মিষ্টি কিছু মুখে দিন।',
        warningCalloutEn: 'Emergency Caution: Never self-adjust insulin dosages. Sweating, trembling, and heart palpitations are signs of acute hypoglycemia — consume sugar or sweet syrup immediately.'
      }
    ],
    faqs: [
      {
        questionBn: 'ডায়াবেটিস কি একেবারে নিরাময় করা সম্ভব?',
        questionEn: 'Can diabetes be completely cured?',
        answerBn: 'টাইপ-২ ডায়াবেটিস বেশিরভাগ ক্ষেত্রে নিরাময়যোগ্য নয়, তবে ওজন কমিয়ে, স্বাস্থ্যকর খাদ্যাভ্যাস ও ব্যায়ামের মাধ্যমে "রেমিশন" বা ঔষধ ছাড়া স্বাভাবিক নিয়ন্ত্রণে রাখা সম্ভব।',
        answerEn: 'Type 2 diabetes cannot be permanently cured, but significant weight optimization and disciplined low-carb nutrition can bring about long-term drug-free remission.'
      }
    ]
  },
  {
    slug: 'hypertension-silent-killer-chattogram',
    titleBn: 'উচ্চ রক্তচাপ (High BP): কেন একে নীরব ঘাতক বলা হয় এবং কীভাবে নিয়ন্ত্রণে রাখবেন?',
    titleEn: 'Hypertension: Why is it Called the Silent Killer & How to Control It?',
    excerptBn: 'উচ্চ রক্তচাপের প্রায়শই কোনো স্পষ্ট লক্ষণ থাকে না। অথচ সময়মতো নিয়ন্ত্রণে না রাখলে এটি স্ট্রোক, হার্ট অ্যাটাক ও কিডনি বিকল হওয়ার প্রধান কারণ হয়ে দাঁড়ায়।',
    excerptEn: 'Hypertension frequently presents zero warning symptoms. Left untreated, it remains the leading driver of hemorrhagic strokes, heart failure, and chronic kidney disease.',
    categoryKey: 'chronic',
    categoryBn: 'দীর্ঘস্থায়ী রোগ',
    categoryEn: 'Chronic Illness',
    readTimeMin: 5,
    publishedDate: '১৯ অক্টোবর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'মেডিসিন ও কার্ডিওলজি ডেস্ক',
      nameEn: 'Cardiovascular Health Desk',
      roleBn: 'ডাক্তার আছেন মেডিকেল টিম',
      roleEn: 'Dakter Achen Medical Team'
    },
    reviewedBy: {
      nameBn: 'ডাঃ এস. কে. চৌধুরী',
      nameEn: 'Dr. S. K. Chowdhury',
      degreesBn: 'এমবিবিএস, এফসিপিএস (কার্ডিওলজি)',
      degreesEn: 'MBBS, FCPS (Cardiology)'
    },
    recommendedSpecialty: 'heart',
    tags: ['উচ্চ রক্তচাপ', 'হার্ট', 'স্ট্রোক', 'লবণ', 'কিডনি', 'Hypertension', 'Blood Pressure', 'Stroke'],
    keyTakeawaysBn: [
      'লক্ষণ না থাকলেও ৪০ ঊর্ধ্ব প্রত্যেকের বছরে অন্তত দুইবার রক্তচাপ মেপে দেখা উচিত।',
      'স্বাভাবিক রক্তচাপ সাধারণত ১২০/৮০ mmHg এর কাছাকাছি। ১৪০/৯০ বা তার বেশি হলে তা চিকিৎসার আওতাভুক্ত।',
      'ধূমপান ও তামাকজাত পণ্য ত্যাগ রক্তনালী শক্ত হয়ে যাওয়া রোধ করতে সাহায্য করে।',
      'একবার উচ্চ রক্তচাপের ওষুধ শুরু করলে চিকিৎসকের পরামর্শ ছাড়া কখনোই বন্ধ করবেন না।'
    ],
    keyTakeawaysEn: [
      'Adults over 40 must monitor blood pressure at least twice annually even without visible symptoms.',
      'Optimal reading is around 120/80 mmHg. Consistent readings of 140/90 or higher signify clinical hypertension.',
      'Cessation of tobacco and smoking stops the acceleration of arterial hardening.',
      'Never discontinue antihypertensive medication when feeling well without physician consent.'
    ],
    contentSections: [
      {
        titleBn: '১. কেন উচ্চ রক্তচাপের কোনো লক্ষণ থাকে না?',
        titleEn: '1. Why Hypertension Has No Obvious Symptoms',
        paragraphsBn: [
          'অনেকে ভাবেন মাথা ঘোরা বা ঘাড় ব্যথা না হলে প্রেসার বাড়ে না। এটি সম্পূর্ণ ভিত্তিহীন। বেশিরভাগ ক্ষেত্রেই রক্তনালী ধীরে ধীরে ক্ষতির শিকার হয় এবং কোনো ব্যথা বা অনুভূতি ছাড়াই হৃদপিণ্ডের ওপর চাপ বৃদ্ধি পেতে থাকে।',
          'এ কারণেই উচ্চ রক্তচাপকে চিকিৎসা বিজ্ঞানে "সাইলেন্ট কিলার" বা নীরব ঘাতক বলা হয়।'
        ],
        paragraphsEn: [
          'Many believe high blood pressure always triggers neck stiffness or dizziness. In clinical reality, vascular damage progresses silently over years without sensation until an acute vascular crisis occurs.',
          'This silent progression is why global cardiology bodies term it the silent killer.'
        ]
      },
      {
        titleBn: '২. রক্তচাপ কমানোর DASH ডায়েট ও দেশীয় প্রয়োগ',
        titleEn: '2. Applying the DASH Diet Locally',
        paragraphsBn: [
          'DASH (Dietary Approaches to Stop Hypertension) ডায়েট রক্তচাপ কমাতে আন্তর্জাতিকভাবে স্বীকৃত। এতে পটাশিয়াম, ম্যাগনেসিয়াম ও ক্যালসিয়াম সমৃদ্ধ খাবারের ওপর জোর দেওয়া হয়।',
          'আমাদের দেশে সহজলভ্য কলা, ডাবের পানি, ডালিম, শসা, ছোট মাছ এবং বাদাম রক্তচাপ নিয়ন্ত্রণে চমৎকার ভূমিকা পালন করে। পাশাপাশি শুঁটকি ও অতিরিক্ত তেল-মসলাযুক্ত ভুনা খাবার পরিহার করুন।'
        ],
        paragraphsEn: [
          'The clinically proven DASH dietary regimen relies heavily on potassium and magnesium-rich whole foods.',
          'Locally accessible foods like green coconut water, bananas, pomegranate, cucumbers, small indigenous fish with bones, and unsalted nuts work synergistically to soothe arterial resistance.'
        ]
      }
    ]
  },
  {
    slug: 'heart-attack-emergency-first-aid-response',
    titleBn: 'হঠাৎ তীব্র বুকে ব্যথা: হার্ট অ্যাটাক চেনার উপায় ও প্রথম ১০ মিনিটের করণীয়',
    titleEn: 'Sudden Chest Pain: Recognizing Heart Attack & The Crucial First 10 Minutes',
    excerptBn: 'বুকে পাথর চেপে বসার মতো ব্যথা এবং বাম হাত বা চোয়ালে ছড়িয়ে পড়া হার্ট অ্যাটাকের লক্ষণ হতে পারে। জেনে নিন হাসপাতালে পৌঁছানোর আগ পর্যন্ত জরুরি ফার্স্ট এইড পদক্ষেপ।',
    excerptEn: 'Crushing central chest heaviness radiating to the left arm or jaw requires urgent recognition. Learn the immediate life-saving first aid steps.',
    categoryKey: 'emergency',
    categoryBn: 'জরুরি ফার্স্ট এইড',
    categoryEn: 'Emergency Aid',
    readTimeMin: 5,
    publishedDate: '১৬ অক্টোবর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'জরুরি স্বাস্থ্য বিভাগ',
      nameEn: 'Emergency Medical Care Desk',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৈয়দ আশরাফ',
      nameEn: 'Dr. Syed Ashraf',
      degreesBn: 'এমবিবিএস, ডি-কার্ড, কনসালট্যান্ট কার্ডিওলজি',
      degreesEn: 'MBBS, D-Card, Consultant Cardiology'
    },
    recommendedSpecialty: 'heart',
    tags: ['হার্ট অ্যাটাক', 'জরুরি', 'অ্যাম্বুলেন্স', 'বুকে ব্যথা', 'ইসিজি', 'Heart Attack', 'First Aid', 'Emergency'],
    keyTakeawaysBn: [
      'বুকে তীব্র চাপ, অতিরিক্ত ঘাম ও শ্বাসকষ্টকে কখনোই সাধারণ গ্যাস্ট্রিক ভেবে অবহেলা করবেন না।',
      'হার্ট অ্যাটাক সন্দেহ হলে রোগীকে শান্ত রেখে আধা-শোয়া বা আরামদায়ক অবস্থানে বসিয়ে দিন।',
      'অ্যাসপিরিন (৩০০ মিগ্রা চিবিয়ে খাওয়া) এবং নাইট্রোগ্লিসারিন স্প্রে জিহ্বার নিচে ব্যবহার রক্ত জমাট বাঁধা কমাতে সাহায্য করে।',
      'অবিলম্বে অ্যাম্বুলেন্স ডাকুন বা নিকটস্থ কার্ডিয়াক সুবিধাসম্পন্ন হাসপাতালে নিয়ে যান।'
    ],
    keyTakeawaysEn: [
      'Never dismiss retrosternal squeezing, cold diaphoresis, and shortness of breath as plain acidity.',
      'Keep the patient sitting upright or semi-reclined; avoid strenuous movement.',
      'Chewing a 300mg Soluble Aspirin table helps mitigate coronary clot progression while awaiting transit.',
      'Call emergency ambulance dispatch immediately and route directly to a center with primary PCI capability.'
    ],
    contentSections: [
      {
        titleBn: '১. হার্ট অ্যাটাক বনাম সাধারণ গ্যাস্ট্রিকের ব্যথা',
        titleEn: '1. Differentiating Heart Attack from Acidity',
        paragraphsBn: [
          'গ্যাস্ট্রিকের ব্যথা সাধারণত খাবার খাওয়ার সাথে সম্পর্কিত এবং অ্যান্টাসিড খেলে কিছুটা কমে।',
          'অন্যদিকে হার্ট অ্যাটাকের ব্যথা বুকের মাঝখানে প্রচন্ড ভারী পাথরের মতো মনে হয়। এই ব্যথা বাম কাঁধ, বাম হাত, ঘাড় বা নিচের চোয়ালে ছড়িয়ে পড়ে। সাথে প্রচুর ঠান্ডা ঘাম ও মৃত্যুর ভয় বা চরম অস্থিরতা দেখা দেয়।'
        ],
        paragraphsEn: [
          'Acid reflux or peptic burning is typically associated with empty stomach intervals and subsides upon antacid intake.',
          'In contrast, myocardial infarction manifests as profound central retrosternal constriction radiating to the left arm, jaw, or shoulder, frequently accompanied by diaphoresis and acute sense of doom.'
        ]
      },
      {
        titleBn: '২. জরুরি মুহূর্তে প্রথম ১০ মিনিটের পদক্ষেপ',
        titleEn: '2. Immediate Life-Saving Steps in the First 10 Minutes',
        paragraphsBn: [
          'রোগীকে কোনোভাবেই হাঁটাহাঁটি বা সিঁড়ি ভাঙতে দেবেন না। বাতাস আসার জন্য জানলা খুলে দিন এবং পোশাক ঢিলে করে দিন।'
        ],
        paragraphsEn: [
          'Do not permit the patient to walk or climb stairs. Loosen tight neck collars and ensure cross ventilation.'
        ],
        tipsListBn: [
          'একটি অ্যাসপিরিন (যেমন: Ecosprin 300mg / Disprin) দ্রুত চিবিয়ে পানি দিয়ে গিলতে দিন।',
          'যদি পূর্বে প্রেসক্রিপশন থাকে, তবে নাইট্রোগ্লিসারিন স্প্রে (Nitromint Spray) জিহ্বার নিচে ১-২ চাপ দিন।',
          'রোগী জ্ঞান হারালে এবং নাড়ি না পাওয়া গেলে অবিলম্বে সিপিআর (CPR) শুরু করুন।'
        ],
        tipsListEn: [
          'Administer 300mg dispersible Aspirin chewed immediately.',
          'If previously prescribed, dispense sublingual Nitroglycerin spray.',
          'Initiate chest compressions (CPR) without hesitation if consciousness and carotid pulse vanish.'
        ]
      }
    ]
  },
  {
    slug: 'pregnancy-first-trimester-care-nutrition-bangladesh',
    titleBn: 'গর্ভাবস্থায় প্রথম ৩ মাসের জরুরি যত্ন, পুষ্টি ও লাল পতাকা লক্ষণ',
    titleEn: 'First Trimester Pregnancy Care: Nutrition, Dos & Red Flag Signs',
    excerptBn: 'গর্ভধারণের প্রথম ১২ সপ্তাহ শিশুর অঙ্গপ্রত্যঙ্গ গঠনের মূল সময়। ফলিক অ্যাসিডের প্রয়োজনীয়তা, খাবারের বমি বমি ভাব মোকাবিলা ও গর্ভপাত প্রতিরোধে চিকিৎসকের পরামর্শ।',
    excerptEn: 'The first 12 weeks shape the structural foundation of your baby. Essential guidance on folic acid, handling morning sickness, and early warning signs.',
    categoryKey: 'maternal_child',
    categoryBn: 'মা ও শিশু স্বাস্থ্য',
    categoryEn: 'Mother & Child',
    readTimeMin: 6,
    publishedDate: '১৫ অক্টোবর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'প্রসূতি ও শিশু স্বাস্থ্য ডেস্ক',
      nameEn: 'Obstetrics & Neonatal Desk',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ নাসরীন জাহান',
      nameEn: 'Dr. Nasreen Jahan',
      degreesBn: 'এমবিবিএস, এফসিপিএস (গাইনি ও অবস)',
      degreesEn: 'MBBS, FCPS (Gynae & Obs)'
    },
    recommendedSpecialty: 'gynae',
    tags: ['গর্ভাবস্থা', 'গাইনি', 'ফলিক এসিড', 'পুষ্টি', 'আল্ট্রাসনোগ্রাম', 'Pregnancy', 'Gynae', 'Antenatal'],
    keyTakeawaysBn: [
      'গর্ভধারণ নিশ্চিত হওয়ার সাথে সাথেই প্রতিদিন ৫ মিগ্রা ফলিক অ্যাসিড গ্রহণ শুরু করুন (জন্মগত ত্রুটি রোধে)।',
      'হালকা রক্তপাত বা পেটে তীব্র খিঁচুনি দেখা দিলে দেরি না করে তাৎক্ষণিক গাইনি বিশেষজ্ঞের শরণাপন্ন হন।',
      'একবারে বেশি না খেয়ে অল্প অল্প করে দিনে ৫-৬ বার শুকনো ও পুষ্টিকর খাবার গ্রহণ করুন।',
      'চিকিৎসকের পরামর্শ ছাড়া যেকোনো সাধারণ সর্দি বা কাশির ওষুধ খাওয়া সম্পূর্ণরূপে নিষিদ্ধ।'
    ],
    keyTakeawaysEn: [
      'Begin daily folic acid immediately upon confirmation to prevent neural tube defects.',
      'Any vaginal spotting or severe lower abdominal cramping requires urgent evaluation.',
      'Eat small, frequent meals throughout the day rather than two or three heavy sittings to manage nausea.',
      'Never consume over-the-counter pharmaceuticals without obstetrician sanction.'
    ],
    contentSections: [
      {
        titleBn: '১. ফলিক এসিড কেন অপরিহার্য?',
        titleEn: '1. The Absolute Role of Folic Acid',
        paragraphsBn: [
          'ভ্রূণের মস্তিষ্ক ও মেরুদণ্ডের স্নায়ুনালী গঠনের জন্য ফলিক অ্যাসিড আবশ্যক। এর অভাবে স্পাইনা বাইফিডার মতো মারাত্মক জন্মগত বিকলাঙ্গতা হতে পারে।',
          'গর্ভধারণের পরিকল্পনা করার সময় থেকেই বা গর্ভ নিশ্চিত হওয়ার সাথে সাথে প্রতিদিন নির্ধারিত মাত্রায় ফলিক অ্যাসিড ট্যাবলেট খাওয়া জরুরি।'
        ],
        paragraphsEn: [
          'Folate is crucial for neural tube closure within the first 28 days of conception, shielding against spina bifida and anencephaly.',
          'Start daily supplementation immediately upon planning conception or receiving a positive pregnancy test.'
        ]
      },
      {
        titleBn: '২. সকালের বমি বমি ভাব (Morning Sickness) মোকাবিলার উপায়',
        titleEn: '2. Taming Morning Sickness Naturally',
        paragraphsBn: [
          'সকালে বিছানা ছাড়ার আগেই শুকনো টোস্ট বিস্কুট বা মুড়ি খেলে বমির প্রবণতা অনেকাংশেই কমে যায়। আদা চা বা সামান্য লেবুযুক্ত পানিও আরামদায়ক। তৈলাক্ত বা অতিরিক্ত মসলাযুক্ত খাবার থেকে দূরে থাকুন।'
        ],
        paragraphsEn: [
          'Keep dry crackers or puffed rice on your nightstand to nibble before getting out of bed. Ginger infusions and chilled lemon slices also dampen hyperemesis symptoms.'
        ]
      }
    ]
  },
  {
    slug: 'gastric-acid-reflux-gerd-management',
    titleBn: 'গ্যাস্ট্রিক ও এসিডিটি সমস্যা থেকে স্থায়ী মুক্তির বৈজ্ঞানিক উপায়',
    titleEn: 'Scientific Solutions to Chronic Acidity & Acid Reflux (GERD)',
    excerptBn: 'বছরের পর বছর এন্টাসিড বা ওমিপ্রাজল খেয়ে যাওয়া দীর্ঘমেয়াদে কিডনি ও হাড়ের জন্য ক্ষতিকর। জেনে নিন খাদ্যাভ্যাস ও লাইফস্টাইল পরিবর্তনের মাধ্যমে গ্যাস্ট্রিক নিরাময়ের উপায়।',
    excerptEn: 'Indiscriminate long-term consumption of PPI antacids damages renal and bone health. Discover evidence-backed dietary adjustments to manage acid reflux sustainably.',
    categoryKey: 'lifestyle',
    categoryBn: 'জীবনযাত্রা ও খাদ্যাভ্যাস',
    categoryEn: 'Lifestyle & Diet',
    readTimeMin: 5,
    publishedDate: '১২ অক্টোবর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'গ্যাস্ট্রোএন্টারোলজি ডেস্ক',
      nameEn: 'Gastroenterology Desk',
      roleBn: 'ডাক্তার আছেন মেডিকেল টিম',
      roleEn: 'Dakter Achen Medical Team'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন)',
      degreesEn: 'MBBS, BCS, PGT (Med)'
    },
    recommendedSpecialty: 'medicine',
    tags: ['গ্যাস্ট্রিক', 'এসিডিটি', 'ওমিপ্রাজল', 'হজম', 'পাকস্থলী', 'Gastric', 'GERD', 'Acidity'],
    keyTakeawaysBn: [
      'নিয়মিত খাবার খাওয়ার সময় ঠিক রাখুন; দীর্ঘক্ষণ না খেয়ে থাকলে পাকস্থলীতে হাইড্রোক্লোরিক এসিড জমে ক্ষত তৈরি করে।',
      'ভাজা-পোড়া, অতিরিক্ত লাল মরিচের ঝাল ও কোমল পানীয় (সফট ড্রিংকস) খাদ্যনালীর নিচের ভালভকে শিথিল করে দেয়।',
      'খাওয়ার পরপরই শুয়ে না পড়ে অন্তত ২ ঘণ্টা হালকা চলাফেরা করুন।',
      'প্রয়োজনের অতিরিক্ত গ্যাসের ওষুধ দিনের পর দিন খাওয়া থেকে বিরত থাকুন।'
    ],
    keyTakeawaysEn: [
      'Maintain disciplined meal intervals; long fasting intervals cause unbuffered gastric acid to erode mucosal lining.',
      'Deep-fried items, high capsaicin spices, and carbonated beverages slacken the lower esophageal sphincter.',
      'Refrain from recumbency for at least 2 hours following a meal.',
      'Avoid unmonitored long-term reliance on proton-pump inhibitors (PPIs).'
    ],
    contentSections: [
      {
        titleBn: '১. কেন আমরা কথায় কথায় গ্যাস্ট্রিকের ওষুধ খাই?',
        titleEn: '1. The Rampant Abuse of PPI Medications',
        paragraphsBn: [
          'বাংলাদেশে বুক একটু ভার হলেই ফার্মেসি থেকে ওমিপ্রাজল বা প্যান্টোপ্রাজল কিনে খাওয়া একটি মারাত্মক বদভ্যাসে পরিণত হয়েছে। টানা কয়েক বছর এগুলো খেলে ম্যাগনেসিয়াম ও ভিটামিন বি-১২ এর ঘাটতি হয় এবং কিডনি রোগের ঝুঁকি তৈরি হয়।'
        ],
        paragraphsEn: [
          'Self-prescribing proton pump inhibitors at the slightest discomfort has become a public health hazard, causing micro-nutrient malabsorption and renal vulnerabilities.'
        ]
      },
      {
        titleBn: '২. গ্যাস্ট্রিকমুক্ত থাকার ৫টি সোনালী নিয়ম',
        titleEn: '2. Five Golden Rules for Long-Term Relief',
        paragraphsBn: [
          'খাবারের মাঝে বারবার পানি না খেয়ে খাবার শেষ করার আধা ঘণ্টা পর পানি পান করুন। রাতে ঘুমানোর সময় মাথার দিকটি কিছুটা উঁচু রাখুন।'
        ],
        paragraphsEn: [
          'Sip fluids between meals rather than gulping glasses during swallowing to prevent gastric distension. Elevate your bedhead slightly at night.'
        ]
      }
    ]
  },
  {
    slug: 'childhood-vaccination-schedule-bangladesh',
    titleBn: 'নবজাতক ও শিশুর টিকাদান সূচি (EPI): কোন বয়সে কোন টিকা দেবেন?',
    titleEn: 'Childhood Vaccination Schedule in Bangladesh (EPI Guidelines)',
    excerptBn: 'শিশুকে মারাত্মক ১০টি সংক্রামক রোগ থেকে সুরক্ষিত রাখতে সরকারি ইপিআই টিকা বিনামূল্যে পাওয়া যায়। টিকা দেওয়ার সঠিক সময় ও হালকা জ্বরের পরিচর্যা জেনে নিন।',
    excerptEn: 'Bangladesh EPI provides free vaccines against 10 life-threatening preventable diseases. Master the exact age timeline, post-vaccine fever care, and catch-up rules.',
    categoryKey: 'maternal_child',
    categoryBn: 'মা ও শিশু স্বাস্থ্য',
    categoryEn: 'Mother & Child',
    readTimeMin: 5,
    publishedDate: '১০ অক্টোবর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'শিশু স্বাস্থ্য ও টিকাদান ডেস্ক',
      nameEn: 'Pediatric Immunization Desk',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ কামরুল হাসান',
      nameEn: 'Dr. Kamrul Hasan',
      degreesBn: 'এমবিবিএস, ডিসিএইচ, শিশু বিশেষজ্ঞ',
      degreesEn: 'MBBS, DCH, Child Specialist'
    },
    recommendedSpecialty: 'child',
    tags: ['শিশু', 'টিকা', 'ইপিআই', 'পোলিও', 'হাম', 'Vaccination', 'Pediatrics', 'Baby Care'],
    keyTakeawaysBn: [
      'জন্মের পরপরই শিশুকে বিসিজি (BCG) যক্ষ্মার টিকা দিতে হবে।',
      'দেড় মাস (৬ সপ্তাহ), আড়াই মাস (১০ সপ্তাহ) ও সাড়ে তিন মাস (১৪ সপ্তাহ) বয়সে পেন্টাভ্যালেন্ট ও পোলিও টিকা দেওয়া হয়।',
      'টিকার পর হালকা জ্বর ও ব্যথার জন্য সাধারণ প্যারাসিটামল ড্রপ চিকিৎসকের পরামর্শ অনুযায়ী দেওয়া যায়।',
      'টিকাদান কার্ডটি নিরাপদে সংরক্ষণ করুন, ভবিষ্যতে স্কুল ও বিদেশ গমনে এটি আবশ্যক।'
    ],
    keyTakeawaysEn: [
      'Administer the BCG tuberculosis vaccine shortly after birth.',
      'Pentavalent and Polio doses follow at 6, 10, and 14 weeks of age.',
      'Mild fever following immunization is normal; pediatric paracetamol drops soothe discomfort.',
      'Safeguard the immunization card securely for pediatric medical milestones.'
    ],
    contentSections: [
      {
        titleBn: '১. জাতীয় টিকাদান কর্মসূচির (EPI) ধাপসমূহ',
        titleEn: '1. National EPI Schedule Milestones',
        paragraphsBn: [
          'বাংলাদেশ সরকারের সম্প্রসারিত টিকাদান কর্মসূচি (EPI) বিশ্বজুড়ে প্রশংসিত। এর মাধ্যমে ডিপথেরিয়া, হুপিং কাশি, ধনুষ্টংকার, হেপাটাইটিস-বি, হিমোফাইলাস ইনফ্লুয়েঞ্জা, পোলিও, নিউমোনিয়া ও হাম-রুবেলা থেকে সম্পূর্ণ সুরক্ষা পাওয়া যায়।'
        ],
        paragraphsEn: [
          'Bangladesh Expanded Program on Immunization covers diphtheria, pertussis, tetanus, hepatitis B, Hib, polio, pneumococcus, and measles-rubella.'
        ]
      }
    ]
  },
  {
    slug: 'mental-health-anxiety-stress-relief-guide',
    titleBn: 'উদ্বেগ, অতিরিক্ত দুশ্চিন্তা ও প্যানিক অ্যাটাক: মানসিক স্বাস্থ্যের যত্ন',
    titleEn: 'Managing Chronic Anxiety, Work Burnout & Panic Attacks',
    excerptBn: 'শারীরিক অসুস্থতার মতোই মানসিক স্বাস্থ্যের চিকিৎসা গ্রহণ অত্যন্ত স্বাভাবিক ও প্রয়োজনীয়। উদ্বেগ দূর করার বৈজ্ঞানিক পদ্ধতি ও কখন মনোরোগ বিশেষজ্ঞের কাছে যাবেন?',
    excerptEn: 'Seeking mental healthcare is just as vital as treating physical illness. Practical grounding techniques for anxiety and recognizing when to consult a psychiatrist.',
    categoryKey: 'mental',
    categoryBn: 'মানসিক সুস্থতা',
    categoryEn: 'Mental Wellbeing',
    readTimeMin: 5,
    publishedDate: '০৬ অক্টোবর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'মানসিক স্বাস্থ্য সেল',
      nameEn: 'Mental Wellbeing Desk',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ তানভীর আহমেদ',
      nameEn: 'Dr. Tanvir Ahmed',
      degreesBn: 'এমবিবিএস, এমডি (সাইকিয়াট্রি)',
      degreesEn: 'MBBS, MD (Psychiatry)'
    },
    recommendedSpecialty: 'neuro',
    tags: ['মানসিক স্বাস্থ্য', 'উদ্বেগ', 'ডিপ্রেশন', 'ঘুম', 'Mental Health', 'Anxiety', 'Stress'],
    keyTakeawaysBn: [
      'প্যানিক অ্যাটাক হলে মনে হতে পারে হার্ট অ্যাটাক হচ্ছে; ৫-৪-৩-২-১ গ্রাউন্ডিং টেকনিক ব্যবহার করুন।',
      'টানা দুই সপ্তাহের বেশি বিষণ্নতা, ঘুমের ব্যাঘাত বা কাজে অরুচি থাকলে পেশাদার মনোরোগ বিশেষজ্ঞের পরামর্শ নিন।',
      'দৈনিক ব্যায়াম ও সামাজিক যোগাযোগ মস্তিষ্কে ডোপামিন ও সেরোটোনিন ক্ষরণে সহায়তা করে।'
    ],
    keyTakeawaysEn: [
      'Panic attacks mimic cardiovascular symptoms; employ 5-4-3-2-1 sensory grounding.',
      'Persistent depression or insomnia exceeding 2 weeks warrants consultation with a licensed psychiatrist.',
      'Physical workouts and meaningful interpersonal connections restore healthy neurotransmitter activity.'
    ],
    contentSections: [
      {
        titleBn: '১. প্যানিক অ্যাটাক নিয়ন্ত্রণের ৫-৪-৩-২-১ পদ্ধতি',
        titleEn: '1. The 5-4-3-2-1 Sensory Grounding Technique',
        paragraphsBn: [
          'হঠাৎ চরম ভীতি বা বুক ধড়ফড় শুরু হলে চারপাশের ৫টি জিনিস দেখুন, ৪টি জিনিস স্পর্শ করুন, ৩টি শব্দ শুনুন, ২টি গন্ধ অনুভব করুন এবং ১টি সুন্দর স্বাদের কথা ভাবুন। এতে মস্তিষ্ক বর্তমান বাস্তবতায় ফিরে আসে।'
        ],
        paragraphsEn: [
          'During sudden panic escalation, anchor your senses: name 5 visual objects, 4 touch sensations, 3 sounds, 2 scents, and 1 taste to deactivate the fight-or-flight overdrive.'
        ]
      }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  ...INITIAL_BLOG_POSTS,
  ...BLOGS_BATCH_1,
  ...BLOGS_BATCH_2,
  ...BLOGS_BATCH_3,
  ...BLOGS_BATCH_4,
  ...BLOGS_BATCH_5
];
