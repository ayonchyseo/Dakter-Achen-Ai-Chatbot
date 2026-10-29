import { BlogPost } from '../types/blog';

export const BLOGS_BATCH_4: BlogPost[] = [
  {
    slug: 'sleep-hygiene-protocol-chronic-insomnia',
    titleBn: 'অনিদ্রা বা ইনসোমনিয়ার বিরুদ্ধে বৈজ্ঞানিক স্লিপ হাইজিন: ঘুমের ওষুধের বিকল্প রুটিন',
    titleEn: 'Sleep Hygiene Protocol: Overcoming Chronic Insomnia Without Sedative Dependence',
    excerptBn: 'বিছানায় শুয়ে এপাশ-ওপাশ করা ও গভীর রাতের মোবাইল ব্রাউজিং মস্তিষ্কের মেলাটোনিন হরমোন ধ্বংস করে। সিবিটি-আই (CBT-I) এর প্রমাণিত বৈজ্ঞানিক ঘুমের অভ্যাস।',
    excerptEn: 'Prolonged tossing in bed and nocturnal blue light suppress natural melatonin surges. Master stimulus control and circadian sleep architecture.',
    categoryKey: 'mental',
    categoryBn: 'মানসিক সুস্থতা',
    categoryEn: 'Mental Wellbeing',
    readTimeMin: 6,
    publishedDate: '২১ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'মানসিক স্বাস্থ্য ও স্লিপ ইউনিট',
      nameEn: 'Sleep Psychology & Mental Health Wing',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'neuro',
    tags: ['অনিদ্রা', 'ঘুম', 'মেলাটোনিন', 'স্লিপ হাইজিন', 'Insomnia', 'Sleep Hygiene', 'Mental Health'],
    keyTakeawaysBn: [
      'বিছানা শুধুমাত্র ঘুম এবং দাম্পত্য জীবনের জন্য রাখুন; বিছানায় বসে ল্যাপটপ বা মোবাইলে অফিসের কাজ করবেন না।',
      'বিছানায় শোয়ার ২০ মিনিটের মধ্যে ঘুম না আসলে উঠে অন্য ঘরে গিয়ে অনুজ্জ্বল আলোতে মৃদু বই পড়ুন; ঘুম আসলে বিছানায় ফিরুন।',
      'প্রতিদিন ছুটির দিনেও একই নির্দিষ্ট সময়ে ঘুম থেকে ওঠার অভ্যাস রাখুন; এটি সারকাডিয়ান ছন্দ স্থির করে।'
    ],
    keyTakeawaysEn: [
      'Condition your brain to associate the mattress exclusively with sleep by avoiding bed desk-work.',
      'If wakefulness exceeds 20 minutes, vacate the bedroom and engage in low-stimulus reading until drowsiness returns.',
      'Maintain an unvarying morning wake-up time 7 days a week to anchor the suprachiasmatic circadian oscillator.'
    ],
    contentSections: [
      {
        titleBn: '১. মেলাটোনিন ও নীল আলোর প্রভাব',
        titleEn: '1. Blue Light Spectrum & Melatonin',
        paragraphsBn: [
          'মোবাইল বা টিভির স্ক্রিন থেকে নির্গত ৪৫০-৪৮০ ন্যানোমিটারের নীল আলো মস্তিষ্কের পিনিয়াল গ্রন্থিকে দিন মনে করিয়ে মেলাটোনিন ক্ষরণ বন্ধ রাখে। ঘুমানোর অন্তত ১ ঘণ্টা আগে সকল ডিজিটাল স্ক্রিন বন্ধ রাখুন।'
        ],
        paragraphsEn: [
          'High-energy visible blue light stimulates melanopsin retinal ganglion cells, acutely suppressing pineal melatonin secretion.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'ঘুমের ওষুধ কি দীর্ঘদিন খাওয়া নিরাপদ?',
        questionEn: 'Are benzodiazepine sleeping pills safe for long-term daily use?',
        answerBn: 'না! ক্লোনাজিপাম বা ডায়াজেপাম জাতীয় ওষুধে ২-৪ সপ্তাহের মধ্যেই শারীরিক নির্ভরতা ও সহনশীলতা তৈরি হয় এবং বন্ধ করলে রিবাউন্ড অনিদ্রা দেখা দেয়।',
        answerEn: 'Sedative hypnotics carry high risk of physiological tolerance, daytime ataxia, and severe withdrawal insomnia if used past 4 weeks.'
      }
    ]
  },
  {
    slug: 'postpartum-depression-baby-blues-awareness',
    titleBn: 'পোস্টপার্টাম ডিপ্রেশন: সন্তান প্রসবের পর মায়ের কান্না, অপরাধবোধ ও মানসিক যত্ন',
    titleEn: 'Postpartum Depression vs Baby Blues: Recognizing Maternal Mood Disorders Early',
    excerptBn: 'সন্তান জন্মের পর অনেকেরই মন খারাপ বা বিষণ্নতা হতে পারে। এটি কোনো ব্যর্থতা নয়, বরং হরমোনের তীব্র পতনের ফল। পরিবার ও চিকিৎসকের সহায়তায় স্বাভাবিক জীবনে প্রত্যাবর্তন।',
    excerptEn: 'Sharp drops in gestational estrogen and progesterone precipitate post-delivery emotional turmoil. Distinguish transient baby blues from severe PPD.',
    categoryKey: 'mental',
    categoryBn: 'মানসিক সুস্থতা',
    categoryEn: 'Mental Wellbeing',
    readTimeMin: 5,
    publishedDate: '২১ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'ডাঃ মেহরীন সুলতানা',
      nameEn: 'Dr. Mehreen Sultana',
      roleBn: 'গাইনী ও প্রসূতিরোগ বিশেষজ্ঞ',
      roleEn: 'Gynecologist & Obstetrician'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'gynae',
    tags: ['পোস্টপার্টাম', 'ডিপ্রেশন', 'প্রসবোত্তর যত্ন', 'মা ও শিশু', 'Postpartum Depression', 'Mental Health'],
    keyTakeawaysBn: [
      'বেবি ব্লুজ প্রসবের ৩-৫ দিনের মাথায় হয়ে ২ সপ্তাহের মধ্যে ঠিক হয়ে যায়; পোস্টপার্টাম ডিপ্রেশন মাসের পর মাস চলতে পারে।',
      'শিশুর সাথে বন্ধন তৈরি না হওয়া, শিশুকে নিজের ক্ষতি করার ভয় বা গভীর অপরাধবোধ হলে মনোরোগ বিশেষজ্ঞের পরামর্শ নিন।',
      'পরিবারের সদস্যদের পক্ষ থেকে মাকে শিশুর যত্নে সক্রিয় শারীরিক সহায়তা ও পর্যাপ্ত ঘুমের সুযোগ করে দেওয়া জরুরি।'
    ],
    keyTakeawaysEn: [
      'Baby blues resolves spontaneously within 10-14 days; persistent pervasive despair beyond two weeks indicates clinical PPD.',
      'Difficulty bonding with the infant, overwhelming inadequacy feelings, and intrusive thoughts mandate clinical review.',
      'Partner involvement in night feedings to protect continuous maternal sleep cycles is foundational for recovery.'
    ],
    contentSections: [
      {
        titleBn: '১. এডিনবরা পোস্টনেটাল ডিপ্রেশন স্কেল (EPDS)',
        titleEn: '1. EPDS Screening Utility',
        paragraphsBn: [
          'এটি ১০টি প্রশ্নের একটি আন্তর্জাতিক বৈজ্ঞানিক প্রশ্নমালা যার মাধ্যমে প্রসবোত্তর প্রথম ৬ সপ্তাহের মধ্যে মায়ের মানসিক অবস্থার মাত্রা সহজেই নিরূপণ করা যায়।'
        ],
        paragraphsEn: [
          'The Edinburgh Postnatal Depression Scale (EPDS) is a standardized self-report tool identifying mothers requiring clinical psychiatric support.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'বুকের দুধ খাওয়ানো অবস্থায় কি অ্যান্টিডিপ্রেসেন্ট ওষুধ খাওয়া যায়?',
        questionEn: 'Are selective serotonin reuptake inhibitors safe during active lactation?',
        answerBn: 'হ্যাঁ, সেরট্রালিনের মতো নিরাপদ এসএসআরআই (SSRI) ওষুধ বুকের দুধে খুব নগণ্য পরিমাণে যায় যা শিশুর কোনো ক্ষতি করে না এবং মায়ের সুস্থতা নিশ্চিত করে।',
        answerEn: 'SSRIs such as sertraline have low relative infant doses in breast milk and are standard first-line therapies in lactating mothers.'
      }
    ]
  },
  {
    slug: 'obsessive-compulsive-disorder-erp-therapy',
    titleBn: 'ওসিডি (OCD): বারবার হাত ধোয়া ও একই চিন্তা ঘুরপাক খাওয়া দূর করার বৈজ্ঞানিক থেরাপি',
    titleEn: 'Obsessive-Compulsive Disorder: Intrusive Thoughts & Exposure Response Prevention (ERP)',
    excerptBn: 'জীবাণুর ভয়ে বারবার হাত ধোয়া বা তালার লক বারবার পরীক্ষা করা ওসিডির প্রকাশ। শুধুমাত্র ইচ্ছা দিয়ে এটি দূর করা যায় না; এক্সপোজার অ্যান্ড রেসপন্স প্রিভেনশন (ERP)।',
    excerptEn: 'Ego-dystonic intrusive fears triggering repetitive neutralizing rituals characterize OCD. Break the feedback loop via targeted ERP psychotherapy.',
    categoryKey: 'mental',
    categoryBn: 'মানসিক সুস্থতা',
    categoryEn: 'Mental Wellbeing',
    readTimeMin: 5,
    publishedDate: '২০ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'মনোরোগ ও সাইকোথেরাপি সেল',
      nameEn: 'Psychotherapy & Behavioral Wing',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'neuro',
    tags: ['ওসিডি', 'মানসিক স্বাস্থ্য', 'সাইকোথেরাপি', 'OCD', 'ERP Therapy', 'Psychiatry'],
    keyTakeawaysBn: [
      'অবসেশন (Obsession) হলো অবাঞ্ছিত ভয় বা চিন্তা; আর কম্পালশন (Compulsion) হলো সেই উদ্বেগ কমাতে বাধ্য হয়ে বারবার করা আচরণ।',
      'ইআরপি থেরাপিতে রোগীকে নিয়ন্ত্রিতভাবে ভয়ের সংস্পর্শে আনা হয় এবং হাত ধোয়া বা চেক করার আচরণটি বিলম্বিত করা শেখানো হয়।',
      'মস্তিষ্কের সেরোটোনিন সার্কিট স্বাভাবিক করতে আধুনিক ওষুধ ও থেরাপির সমন্বয়ে ৯০% রোগী স্বাভাবিক জীবন পান।'
    ],
    keyTakeawaysEn: [
      'Obsessions are involuntary distressing cognitions; compulsions are repetitive behavioral rituals deployed to neutralize anxiety.',
      'Exposure and Response Prevention (ERP) systematically habituates individuals to triggers while withholding ritualistic compulsions.',
      'High-dose SSRIs combined with structured CBT rewire dysfunctional cortico-striato-thalamo-cortical loops.'
    ],
    contentSections: [
      {
        titleBn: '১. ওসিডির দুশ্চিন্তা সহ্য করার ক্ষমতা বাড়ানো',
        titleEn: '1. Distress Tolerance & Habituation Curve',
        paragraphsBn: [
          'যখন রোগী হাত না ধুয়ে অস্বস্তি নিয়ে ২০ মিনিট বসে থাকেন, তখন মস্তিষ্কের উদ্বেগ স্বাভাবিকভাবেই শীর্ষবিন্দুতে পৌঁছে ধীরে ধীরে নিজে থেকেই নেমে আসে।'
        ],
        paragraphsEn: [
          'Withholding compulsions allows the sympathetic spike to peak and naturally decay via biological autonomic habituation.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'ওসিডি কি মানুষের দুর্বল ইচ্ছা শক্তির লক্ষণ?',
        questionEn: 'Is OCD a personal character weakness or lack of willpower?',
        answerBn: 'একেবারেই না! ওসিডি মস্তিষ্কের অরবিটোফ্রন্টাল কর্টেক্সের স্নায়বিক রাসায়নিক ভারসাম্যের তারতম্যের কারণে ঘটে। চিকিৎসার মাধ্যমে এটি নিরাময়যোগ্য।',
        answerEn: 'OCD is a biological neurochemical disorder involving specific basal ganglia networks, entirely distinct from willpower.'
      }
    ]
  },
  {
    slug: 'alzheimers-dementia-early-memory-stimulation',
    titleBn: 'আলঝেইমার্স ডিমেনশিয়া: চাবি হারিয়ে ফেলা বনাম স্মৃতিভ্রম, প্রবীণদের যত্ন ও ব্রেন এক্সারসাইজ',
    titleEn: 'Alzheimer’s Dementia: Normal Aging vs Pathological Memory Loss & Cognitive Stimulation',
    excerptBn: 'পরিচিত পথ ভুলে যাওয়া, তারিখ ও মাস মনে রাখতে না পারা এবং ব্যক্তিত্বের পরিবর্তন ডিমেনশিয়ার লক্ষণ। শব্দছক, সামাজিক মেলামেশা ও স্মৃতি ধরে রাখার কৌশল।',
    excerptEn: 'Forgetting familiar routes and disorientation to time distinguish Alzheimer’s amyloid pathology from benign senescent forgetfulness. Early neuroprotection.',
    categoryKey: 'chronic',
    categoryBn: 'দীর্ঘস্থায়ী রোগ',
    categoryEn: 'Chronic Illness',
    readTimeMin: 5,
    publishedDate: '২০ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'জেরিয়াট্রিক ও নিউরোলজি উইং',
      nameEn: 'Geriatric Neurology Wing',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'neuro',
    tags: ['ডিমেনশিয়া', 'আলঝেইমার্স', 'স্মৃতিভ্রম', 'প্রবীণ স্বাস্থ্য', 'Dementia', 'Alzheimers', 'Geriatrics'],
    keyTakeawaysBn: [
      'স্বাভাবিক বার্ধক্যে চশমা কোথায় রেখেছেন ভুলে যান কিন্তু পরে মনে পড়ে; আলঝেইমার্সে পুরো ঘটনার স্মৃতিই মুছে যায়।',
      'প্রবীণদের প্রতিদিন সুডোকু মেলানো, লুডু খেলা, বই পড়া বা নতুন ভাষা শেখা মস্তিষ্কের কগনিটিভ রিজার্ভ মজবুত করে।',
      'রক্তচাপ, কোলেস্টেরল ও রক্তে শর্করা স্বাভাবিক রাখলে রক্তনালীজনিত ভাস্কুলার ডিমেনশিয়া প্রতিরোধ হয়।'
    ],
    keyTakeawaysEn: [
      'Normal aging misplaces items momentarily; cortical dementia erases the episodic memory of having ever owned them.',
      'Cognitive cross-training through word puzzles, musical instruments, and active reading builds neuroplastic cognitive reserve.',
      'Controlling midlife hypertension and diabetes preserves cerebral white matter integrity against vascular cognitive decline.'
    ],
    contentSections: [
      {
        titleBn: '১. ডিমেনশিয়া রোগীর ঘরের নিরাপত্তা',
        titleEn: '1. Home Safety Adaptations',
        paragraphsBn: [
          'রোগী যাতে বাইরে হারিয়ে না যান সেজন্য দরজায় সুরক্ষা লক রাখুন, বাথরুমের পিচ্ছিল মেঝেতে অ্যান্টি-স্কিড ম্যাট বিছিয়ে দিন এবং পকেটে নাম-ঠিকানা লেখা পরিচয়পত্র রাখুন।'
        ],
        paragraphsEn: [
          'Install wander-prevention door alarms, slip-resistant bathroom grab bars, and GPS location identification pendants.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'ডিমেনশিয়া কি পুরোপুরি নিরাময় করা যায়?',
        questionEn: 'Can Alzheimer’s neurodegeneration be reversed completely?',
        answerBn: 'বর্তমানে নষ্ট মস্তিষ্কের কোষ ফিরিয়ে আনা যায় না, তবে আধুনিক কোলিনস্টেরেজ ইনহিবিটর ওষুধের মাধ্যমে স্মৃতিভ্রমের গতি বহু বছর মন্থর করা সম্ভব।',
        answerEn: 'While disease-modifying therapies continue evolving, acetylcholinesterase inhibitors preserve daily functional autonomy.'
      }
    ]
  },
  {
    slug: 'low-back-pain-lumbar-disc-prolapse-ergonomics',
    titleBn: 'কোমর ব্যথা ও পিএলআইডি (PLID): ডিস্ক প্রল্যাপস, সায়াটিকা ও ভারী বস্তু তোলার সঠিক নিয়ম',
    titleEn: 'Low Back Pain & Lumbar Disc Herniation: Sciatica, Core Bracing & Lifting Ergonomics',
    excerptBn: 'কোমর থেকে ব্যথা পায়ের পাতা পর্যন্ত ইলেকট্রিক শকের মতো নেমে আসা সায়াটিকার লক্ষণ। পিঠ না ঝুঁকিয়ে হাঁটু ভেঙে ভারী জিনিস তোলার বৈজ্ঞানিক কৌশল।',
    excerptEn: 'Sharp radicular pain shooting from lumbar lumbosacral roots down the posterior calf marks sciatica. Master abdominal bracing and hip hinge mechanics.',
    categoryKey: 'chronic',
    categoryBn: 'দীর্ঘস্থায়ী রোগ',
    categoryEn: 'Chronic Illness',
    readTimeMin: 5,
    publishedDate: '১৯ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'স্পাইন ও অর্থোপেডিক টিম',
      nameEn: 'Spine & Orthopedic Team',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'ortho',
    tags: ['কোমর ব্যথা', 'সায়াটিকা', 'পিএলআইডি', 'অর্থোপেডিক', 'Back Pain', 'Sciatica', 'Ergonomics'],
    keyTakeawaysBn: [
      'মেঝে থেকে কোনো বস্তু তোলার সময় কোমর সোজা রেখে হাঁটু ভেঙে বসে বস্তুটিকে শরীরের কাছে এনে তুলুন।',
      'অতিরিক্ত নরম ফোমের তোশক পরিহার করে সমতল শক্ত তোশক বা জাজিমে ঘুমানো মেরুদণ্ডের স্বাভাবিক কার্ভ রক্ষা করে।',
      'কোমর ব্যথার সাথে যদি প্রস্রাব-পায়খানার নিয়ন্ত্রণ চলে যায় (কডা ইকুইনা সিন্ড্রোম), তবে ২৪ ঘণ্টার মধ্যে ইমার্জেন্সি সার্জারি জরুরি।'
    ],
    keyTakeawaysEn: [
      'Lift heavy loads via a deep hip hinge and knee flexion, keeping the object anchored flush to the center of gravity.',
      'Sleep on a medium-firm supportive mattress to maintain natural neutral lordotic lumbar alignment.',
      'Sudden loss of bowel or bladder sphincter control alongside perineal numbness defines Cauda Equina Syndrome requiring urgent decompression.'
    ],
    contentSections: [
      {
        titleBn: '১. ম্যাককেঞ্জি ব্যাক এক্সটেনশন ব্যায়াম',
        titleEn: '1. McKenzie Spinal Extension Regimen',
        paragraphsBn: [
          'উপুড় হয়ে শুয়ে হাতের ওপর ভর দিয়ে বুকের অংশ ধীরে ধীরে উপরের দিকে তোলা ডিস্কের ভেতরে থাকা জেলিকে (নিউক্লিয়াস পালপোসাস) কেন্দ্রে ফিরিয়ে আনতে সহায়তা করে।'
        ],
        paragraphsEn: [
          'Prone press-up extension exercises promote central migration of displaced nucleus pulposus material away from exiting spinal roots.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'কোমর ব্যথায় কি একটানা সম্পূর্ণ বিছানায় শুয়ে থাকা উচিত?',
        questionEn: 'Is strict prolonged bed rest advisable for acute back spasms?',
        answerBn: 'না! ২ দিনের বেশি একটানা শুয়ে থাকলে পিঠের মাংসপেশি দুর্বল হয়ে ব্যথা আরও বাড়ে। হালকা হাঁটাচলা ও গতিশীল থাকা দ্রুত আরোগ্য নিশ্চিত করে।',
        answerEn: 'Bed rest exceeding 48 hours accelerates paraspinal atrophy. Early light mobilization speeds recovery.'
      }
    ]
  },
  {
    slug: 'dash-diet-hypertension-blood-pressure-control',
    titleBn: 'ড্যাশ (DASH) ডায়েট: ওষুধ ছাড়াই উচ্চ রক্তচাপ ও ফ্যাটি লিভার নিয়ন্ত্রণের আন্তর্জাতিক খাদ্যতালিকা',
    titleEn: 'The DASH Diet: Clinically Proven Nutrition for Lowering Blood Pressure & Liver Fat',
    excerptBn: 'ডায়াটারি অ্যাপ্রোচেস টু স্টপ হাইপারটেনশন (DASH)। খাবারে পটাসিয়াম, ম্যাগনেসিয়াম ও ফাইবারের অনুপাত বাড়িয়ে মাত্র ২ সপ্তাহে প্রেশার ৮-১১ পয়েন্ট কমান।',
    excerptEn: 'Dietary Approaches to Stop Hypertension (DASH) slashes systolic pressure within 14 days through micronutrient balancing. Scientific food portions.',
    categoryKey: 'lifestyle',
    categoryBn: 'জীবনযাত্রা ও খাদ্যাভ্যাস',
    categoryEn: 'Lifestyle & Diet',
    readTimeMin: 5,
    publishedDate: '১৯ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'প্রিভেন্টিভ কার্ডিওলজি ও ডায়েট সেল',
      nameEn: 'Preventive Cardiology & Nutrition Desk',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'heart',
    tags: ['ড্যাশ ডায়েট', 'উচ্চ রক্তচাপ', 'হৃদরোগ', 'খাদ্যাভ্যাস', 'DASH Diet', 'Hypertension', 'Diet'],
    keyTakeawaysBn: [
      'প্রতিদিন খাবারে সোডিয়ামের পরিমাণ ১৫০০ মিলিগ্রামের নিচে (আধা চা চামচ লবণ) সীমাবদ্ধ রাখুন।',
      'কলা, পালংশাক, টমেটো ও ডাবের পানিতে থাকা পটাসিয়াম শরীর থেকে অতিরিক্ত সোডিয়াম প্রস্রাবের মাধ্যমে বের করে দেয়।',
      'দৈনিক ৪-৫ সার্ভিং তাজা ফলমূল ও শাকসবজি এবং এক মুঠো কাঁচা কাঠবাদাম বা আখরোট খান।'
    ],
    keyTakeawaysEn: [
      'Restrict total daily sodium intake below 1500 to 2300 mg to lower peripheral vascular resistance.',
      'High dietary potassium in spinach, bananas, and coconut water activates renal natriuresis.',
      'Incorporate 4-5 servings of whole vegetables, fruits, and raw tree nuts into regular meals daily.'
    ],
    contentSections: [
      {
        titleBn: '১. কেন প্রসেসড খাবার বাদ দেবেন?',
        titleEn: '1. Eliminating Ultra-Processed Sodium Bombs',
        paragraphsBn: [
          'ইনস্ট্যান্ট নুডলস, চিপস, ক্যানের স্যুপ এবং সসেজে উচ্চমাত্রার প্রিজারভেটিভ সোডিয়াম থাকে যা রক্তনালীগুলোকে শক্ত করে রক্তচাপ বাড়িয়ে দেয়।'
        ],
        paragraphsEn: [
          'Commercial instant bouillons, chips, and processed meats pack massive hidden sodium loads that stiffen arterial compliances.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'কিডনি রোগীরা কি পটাসিয়াম সমৃদ্ধ খাবার বেশি খেতে পারবেন?',
        questionEn: 'Is high-potassium DASH safe for chronic kidney disease patients?',
        answerBn: 'যাদের রক্তে ক্রিয়েটিনিন বেশি বা কিডনি দুর্বল, তাদের ক্ষেত্রে অতিরিক্ত পটাসিয়াম হার্ট বন্ধ হওয়ার কারণ হতে পারে; তাই চিকিৎসকের নির্দিষ্ট তালিকা মানা জরুরি।',
        answerEn: 'Patients with advanced renal failure cannot clear potassium, making high-potassium diets hazardous without nephrologist approval.'
      }
    ]
  },
  {
    slug: 'intermittent-fasting-metabolic-benefits-warnings',
    titleBn: 'ইন্টারমিটেন্ট ফাস্টিং: ১৬:৮ পদ্ধতির বৈজ্ঞানিক অটোফেজি ও কাদের জন্য সম্পূর্ণ নিষেধ',
    titleEn: 'Intermittent Fasting: The 16:8 Protocol, Cellular Autophagy & Contraindications',
    excerptBn: '১৬ ঘণ্টা না খেয়ে ৮ ঘণ্টার উইন্ডোতে খাওয়া অটোফেজি প্রক্রিয়া সক্রিয় করে পুরানো ক্ষতিগ্রস্ত কোষ নিষ্কাশন করে। ইনসুলিন সেন্সিটিভিটি বৃদ্ধি ও নিরাপদ গাইড।',
    excerptEn: 'Time-restricted feeding promotes lysosomal autophagy, clearing senescent mitochondrial debris. Learn proper fasting intervals and safety boundaries.',
    categoryKey: 'lifestyle',
    categoryBn: 'জীবনযাত্রা ও খাদ্যাভ্যাস',
    categoryEn: 'Lifestyle & Diet',
    readTimeMin: 5,
    publishedDate: '১৮ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'মেটাবলিক ও লাইফস্টাইল মেডিসিন উইং',
      nameEn: 'Metabolic & Lifestyle Wing',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'medicine',
    tags: ['ফাস্টিং', 'ওজন কমানো', 'অটোফেজি', 'Intermittent Fasting', 'Autophagy', 'Diet'],
    keyTakeawaysBn: [
      '১৬:৮ পদ্ধতিতে রাত ৮টার মধ্যে রাতের খাবার শেষ করে পরদিন দুপুর ১২টায় প্রথম আহার গ্রহণ করা হয়।',
      'ফাস্টিং চলাকালীন পানি, চিনি ছাড়া গ্রিন টি বা ব্ল্যাক কফি পান করা সম্পূর্ণ অনুমোদিত।',
      'গর্ভবতী নারী, দুগ্ধদানকারী মা এবং টাইপ ১ ডায়াবেটিস রোগীদের জন্য ইন্টারমিটেন্ট ফাস্টিং কঠোরভাবে নিষিদ্ধ।'
    ],
    keyTakeawaysEn: [
      'The classic 16:8 protocol involves closing eating windows by 8 PM and breaking fast at 12 PM the subsequent day.',
      'Zero-calorie fluids such as water, unsweetened green tea, and black coffee do not break metabolic ketosis.',
      'Pregnant women, nursing mothers, underweight individuals, and type 1 diabetics should avoid fasting.'
    ],
    contentSections: [
      {
        titleBn: '১. অটোফেজি (Autophagy) কী?',
        titleEn: '1. Cellular Housekeeping: Autophagy',
        paragraphsBn: [
          '২০১৬ সালে নোবেল পুরস্কারপ্রাপ্ত এই গবেষণায় প্রমাণিত হয় যে দীর্ঘ উপবাসের সময় শরীর সুস্থ কোষ টিকিয়ে রাখতে পুরানো ও ক্যান্সারপ্রবণ প্রোটিন ভেঙে রিসাইকেল করে শক্তি তৈরি করে।'
        ],
        paragraphsEn: [
          'Prolonged energy depletion activates AMPK and downregulates mTOR, accelerating lysosomal recycling of misfolded proteins.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'ফাস্টিং ভাঙার সময় কি অতিরিক্ত খাবার খাওয়া যাবে?',
        questionEn: 'Can you binge on junk food during the eating window?',
        answerBn: 'একেবারেই না! উচ্চ প্রোটিন ও ফাইবারযুক্ত পরিমিত সুষম খাবার না খেলে ফাস্টিংয়ের সমস্ত মেটাবলিক সুফল নষ্ট হয়ে যায়।',
        answerEn: 'Binging on processed calories during the feeding window reverses all caloric and insulin-sensitizing benefits.'
      }
    ]
  },
  {
    slug: 'hair-loss-alopecia-and-dandruff-treatment',
    titleBn: 'অতিরিক্ত চুল পড়া ও খুশকি: টেলোজেন এফ্লুভিয়াম, অ্যান্ড্রোজেনেটিক অ্যালোপেসিয়ার চিকিৎসা',
    titleEn: 'Hair Loss & Dandruff: Telogen Effluvium, Androgenetic Alopecia & Scalp Health',
    excerptBn: 'দিনে ৫০-১০০টি চুল পড়া স্বাভাবিক হলেও গুচ্ছ গুচ্ছ চুল উঠে যাওয়া হরমোন, আয়রনের ঘাটতি বা ছত্রাক সংক্রমণের লক্ষণ। মিনোক্সিডিল ও কিটোকোনাজল শ্যাম্পু।',
    excerptEn: 'Shedding exceeding 100 hairs daily coupled with scalp erythema warrants clinical trichology evaluation. Learn DHT blockers and ketoconazole therapy.',
    categoryKey: 'lifestyle',
    categoryBn: 'জীবনযাত্রা ও খাদ্যাভ্যাস',
    categoryEn: 'Lifestyle & Diet',
    readTimeMin: 5,
    publishedDate: '১৮ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'ডার্মাটোলজি ও ট্রাইকোলজি ডেস্ক',
      nameEn: 'Dermatology & Scalp Clinic',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'skin',
    tags: ['চুল পড়া', 'খুশকি', 'অ্যালোপেসিয়া', 'চর্মরোগ', 'Hair Loss', 'Dandruff', 'Dermatology'],
    keyTakeawaysBn: [
      'টাইফয়েড, ডেঙ্গু বা তীব্র মানসিক চাপের ২-৩ মাস পর হঠাৎ প্রচুর চুল পড়া (টেলোজেন এফ্লুভিয়াম) সাধারণ এবং স্ব-নিরাময়যোগ্য।',
      'মাথার ত্বকের তেলের গ্রন্থিতে মেলাসেসিয়া ছত্রাকের সংক্রমণে খুশকি হয়; ২% কিটোকোনাজল শ্যাম্পু সপ্তাহে ২ দিন ৫ মিনিট রেখে ধুয়ে ফেলুন।',
      'ছেলেদের বংশগত টাক পড়া রোধে ৫% মিনোক্সিডিল লোশন চিকিৎসকের তত্ত্বাবধানে অত্যন্ত কার্যকর।'
    ],
    keyTakeawaysEn: [
      'Post-febrile or stress-induced shedding reflects telogen effluvium, resolving spontaneously within 6 months.',
      'Seborrheic dandruff driven by Malassezia yeast clears effectively with 2% ketoconazole lathered for 5 minutes.',
      'Topical 5% minoxidil solution combined with oral finasteride counteracts androgenetic follicular miniaturization.'
    ],
    contentSections: [
      {
        titleBn: '১. রক্তস্বল্পতা ও থাইরয়েডের সাথে সম্পর্ক',
        titleEn: '1. Systemic Blood Panels for Alopecia',
        paragraphsBn: [
          'চুল পড়ার কারণ অনুসন্ধানে সিরাম ফেরিটিন (আয়রন সঞ্চয়), থাইরয়েড টিএসএইচ এবং ভিটামিন ডি টেস্ট করে কোনো ঘাটতি থাকলে তা পূরণ করা অপরিহার্য।'
        ],
        paragraphsEn: [
          'Serum ferritin <40 ng/mL, subclinical hypothyroidism, and zinc deficiencies directly truncate follicular anagen growth phases.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'ভেজা চুল আঁচড়ালে কি চুল বেশি পড়ে?',
        questionEn: 'Does brushing damp hair exacerbate breakage?',
        answerBn: 'হ্যাঁ! চুল ভেজা থাকলে চুলের কিউটিকল আলগা ও ভঙ্গুর থাকে। তাই মোটা দাঁতের চিরুনি দিয়ে চুল কিছুটা শুকানোর পর আলতো করে আঁচড়ানো উচিত।',
        answerEn: 'Yes! Water breaks hydrogen bonds in keratin fibers, doubling mechanical breakage during damp detangling.'
      }
    ]
  },
  {
    slug: 'eczema-and-psoriasis-emollient-steroid-rules',
    titleBn: 'একজিমা ও সোরিয়াসিস: ত্বকে শুষ্কতা ও চুলকানি নিয়ন্ত্রণে সঠিক ইমোলিয়েন্ট ব্যবহার',
    titleEn: 'Eczema & Psoriasis Management: Scaly Plaques, Emollient Protocols & Safe Steroids',
    excerptBn: 'ত্বকে রুপালী আঁশের মতো খোসা ওঠা ও চুলকানি অটোইমিউন সোরিয়াসিসের লক্ষণ। গোসলের ৩ মিনিটের মধ্যে ঘন ময়েশ্চারাইজার ব্যবহারের ৩-মিনিট রুল।',
    excerptEn: 'Eczematous pruritus and psoriatic silvery plaques demand skin barrier repair. Master the vital 3-minute soaking and sealing emollient protocol.',
    categoryKey: 'lifestyle',
    categoryBn: 'জীবনযাত্রা ও খাদ্যাভ্যাস',
    categoryEn: 'Lifestyle & Diet',
    readTimeMin: 5,
    publishedDate: '১৭ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'ডার্মাটোলজি ও স্কিন কেয়ার সেল',
      nameEn: 'Dermatology & Skin Science Wing',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'skin',
    tags: ['একজিমা', 'সোরিয়াসিস', 'চুলকানি', 'ময়েশ্চারাইজার', 'Eczema', 'Psoriasis', 'Skin Care'],
    keyTakeawaysBn: [
      'গোসল থেকে ওঠার ৩ মিনিটের মধ্যে ত্বক হালকা ভেজা থাকতেই পেট্রোলিয়াম জেলি বা ঘন সেরামাইড ক্রিম সারা গায়ে মাখুন।',
      'তীব্র গরম পানি দিয়ে দীর্ঘ সময় গোসল করবেন না; এতে ত্বকের প্রাকৃতিক তেল ধুয়ে শুষ্কতা ও চুলকানি বৃদ্ধি পায়।',
      'স্টেরয়েড ক্রিম কোনো অবস্থাতেই চিকিৎসকের পরামর্শ ছাড়া টানা ২ সপ্তাহের বেশি ব্যবহার করবেন না।'
    ],
    keyTakeawaysEn: [
      'Apply thick lipid-rich ceramides within 3 minutes of stepping out of the shower to trap stratum corneum water.',
      'Avoid hot baths; scalding water strips epidermal lipids and triggers mast cell histamine degranulation.',
      'Limit topical corticosteroid applications to short intermittent bursts to prevent skin atrophy and tachyphylaxis.'
    ],
    contentSections: [
      {
        titleBn: '১. একজিমা বনাম সোরিয়াসিস',
        titleEn: '1. Diagnostic Delineation',
        paragraphsBn: [
          'একজিমা প্রধানত ত্বকের ভাঁজে (কনুইয়ের ভেতরের ভাঁজ, হাঁটুর পেছনে) তীব্র লালচে চুলকানিযুক্ত হয়; আর সোরিয়াসিস কনুই বা হাঁটুর বাইরের দিকে পুরু রুপালী আঁশযুক্ত প্লাক তৈরি করে।'
        ],
        paragraphsEn: [
          'Atopic dermatitis favors flexural creases with lichenification; plaque psoriasis characteristically affects extensor surfaces.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'সোরিয়াসিস কি কোনো ছোঁয়াচে রোগ?',
        questionEn: 'Is psoriasis an infectious communicable disease?',
        answerBn: 'একেবারেই না! সোরিয়াসিস ত্বকের একটি নন-ইনফেকশাস অটোইমিউন রোগ যা স্পর্শ বা মেলামেশায় কখনোই ছড়ায় না।',
        answerEn: 'Psoriasis is mediated by T-lymphocyte hyperproliferation and cannot be transmitted through touch or intimacy.'
      }
    ]
  },
  {
    slug: 'fungal-ringworm-tinea-hygiene-antifungal-rules',
    titleBn: 'দাদ ও ছত্রাক সংক্রমণ (Ringworm / Tinea): ক্ষতিকর স্টেরয়েড মলম বন্ধের জরুরি বার্তা',
    titleEn: 'Fungal Dermatophytosis (Tinea): The Steroid Cream Hazard & Oral Antifungals',
    excerptBn: 'দাদ হলে ফার্মেসি থেকে স্টেরয়েড মেশানো ক্রিম (যেমন ক্লোবেটাসল) মাখলে সাময়িক চুলকানি কমে কিন্তু ছত্রাক চামড়ার গভীরে স্থায়ী হয়ে ছড়িয়ে পড়ে (টিনিয়া ইনকগনিটো)।',
    excerptEn: 'Applying over-the-counter steroid creams to dermatophyte infections induces extensive refractory Tinea Incognito. Master proper antifungal protocols.',
    categoryKey: 'lifestyle',
    categoryBn: 'জীবনযাত্রা ও খাদ্যাভ্যাস',
    categoryEn: 'Lifestyle & Diet',
    readTimeMin: 5,
    publishedDate: '১৭ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'ডার্মাটোলজি ও মাইকোলজি ডেস্ক',
      nameEn: 'Mycology & Cutaneous Infections Wing',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'skin',
    tags: ['দাদ', 'টিনিয়া', 'ছত্রাক', 'চুলকানি', 'Ringworm', 'Tinea', 'Antifungals'],
    keyTakeawaysBn: [
      'দাদযুক্ত স্থানে কখনোই মিশ্র স্টেরয়েড মলম লাগাবেন না; শুধুমাত্র বিশুদ্ধ অ্যান্টিফাঙ্গাল (যেমন টারবিনাফিন বা লুলিকোনাজল) মাখুন।',
      'আন্ডারওয়্যার ও ভেতরের পোশাক প্রতিদিন ধুয়ে কড়া রোদে শুকাতে হবে এবং সম্ভব হলে ইস্ত্রি করে পরুন।',
      'পরিবারের একজন আক্রান্ত হলে সকলের তোয়ালে, বিছানার চাদর ও সাবান আলাদা রাখা আবশ্যক।'
    ],
    keyTakeawaysEn: [
      'Strictly avoid combination topical steroid creams; use pure topical antifungals (terbinafine or luliconazole).',
      'Wash inner garments in hot water, dry thoroughly under sunlight, and hot-iron seams to kill fungal spores.',
      'Segregate household towels, bedding, and toiletries to prevent cyclical intrafamilial reinfection.'
    ],
    contentSections: [
      {
        titleBn: '১. কেন চুলকানি সারার পরও ২ সপ্তাহ ওষুধ চালাতে হয়?',
        titleEn: '1. Eradication of Dormant Hyphe',
        paragraphsBn: [
          'চুলকানি বন্ধ হয়ে দাগ মিলিয়ে যাওয়ার পরও চামড়ার গভীরে ছত্রাকের স্পোর থেকে যায়। তাই দৃশ্যমান দাগ মিলিয়ে যাওয়ার পরও অতিরিক্ত ২ সপ্তাহ মলম মাখা চালিয়ে যেতে হয়।'
        ],
        paragraphsEn: [
          'Subclinical fungal hyphae survive in the stratum corneum; continuing topical therapy 2 weeks past symptom resolution prevents relapse.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'দাদ হলে কি মিষ্টি বা গরুর মাংস খাওয়া বন্ধ রাখতে হবে?',
        questionEn: 'Do foods like beef, prawns, or sweets cause fungal ringworm?',
        answerBn: 'না! দাদ কোনো খাবারের অ্যালার্জি নয়; এটি ত্বকে ডার্মাটোফাইট ছত্রাকের আক্রমণ যা আর্দ্রতা ও অপরিচ্ছন্নতায় বাড়ে। খাবারের সাথে এর সম্পর্ক নেই।',
        answerEn: 'Ringworm is an exogenous fungal colonization thriving on moisture and friction, entirely unrelated to dietary intake.'
      }
    ]
  },
  {
    slug: 'halitosis-bad-breath-dental-scaling-tongue-hygiene',
    titleBn: 'মুখের দুর্গন্ধ (Halitosis): জিহ্বা পরিষ্কার ও ডেন্টাল স্কেলিংয়ের বৈজ্ঞানিক উপকারিতা',
    titleEn: 'Chronic Halitosis: Tongue Scraping, Anaerobic Bacteria & Ultrasonic Scaling',
    excerptBn: 'শতকরা ৮৫ ভাগ মুখের দুর্গন্ধের উৎপত্তি জিহ্বার পেছনের সালফার গ্যাস তৈরিকারী ব্যাকটেরিয়া ও মাড়ির পাথরে। ফ্লসিং ও মাড়ি সুরক্ষার নিয়ম।',
    excerptEn: 'Volatile sulfur compounds produced by anaerobic bacteria on the posterior tongue dorsum drive halitosis. Master tongue scraping and professional scaling.',
    categoryKey: 'preventive',
    categoryBn: 'প্রতিরোধমূলক স্বাস্থ্য',
    categoryEn: 'Preventive Care',
    readTimeMin: 4,
    publishedDate: '১৬ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'ডেন্টাল ও ওরাল হাইজিন ডেস্ক',
      nameEn: 'Oral Hygiene & Periodontology Desk',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'dental',
    tags: ['মুখের দুর্গন্ধ', 'স্কেলিং', 'দাঁত পরিষ্কার', 'Halitosis', 'Dental Scaling', 'Periodontics'],
    keyTakeawaysBn: [
      'প্রতিদিন ব্রাশ করার পর একটি টাং স্ক্র্যাপার (Tongue Scraper) দিয়ে জিহ্বার পেছনের সাদা আবরণ আলতো করে চেঁছে পরিষ্কার করুন।',
      'দাঁতের ফাঁকে আটকে থাকা পচা খাবার বের করতে প্রতিদিন রাতে ডেন্টাল ফ্লস (সুতা) ব্যবহার করুন।',
      'বছরে অন্তত একবার ডেন্টাল সার্জনের কাছে আল্ট্রাসনিক স্কেলিং করিয়ে মাড়ির ভেতরের টারটার পাথর পরিষ্কার করান।'
    ],
    keyTakeawaysEn: [
      'Scrape the posterior third of the tongue dorsum with a mechanical scraper to eliminate sulfur-generating bacterial coatings.',
      'Daily interdental flossing removes rotting food remnants inaccessible to standard toothbrush bristles.',
      'Annual professional ultrasonic scaling eradicates calcified subgingival calculus, preventing destructive periodontitis.'
    ],
    contentSections: [
      {
        titleBn: '১. স্কেলিং করলে কি দাঁত ফাঁকা বা আলগা হয়?',
        titleEn: '1. Dispelling the Scaling Tooth-Loosening Myth',
        paragraphsBn: [
          'এটি সম্পূর্ণ একটি ভুল ধারণা! স্কেলিং দাঁতের কোনো এনামেল ক্ষয় করে না; বরং মাড়ির রক্তনালী নষ্ট করা বিষাক্ত পাথরগুলো আল্ট্রাসনিক কম্পনে পরিষ্কার করে দাঁতের মাড়িকে সুস্থ ও শক্ত করে।'
        ],
        paragraphsEn: [
          'Scaling removes pathological calculus collaring the roots; removing this toxic biofilm allows inflamed gingiva to reattach securely.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'মাউথওয়াশ কি প্রতিদিন ব্যবহার করা ভালো?',
        questionEn: 'Should antiseptic mouthwash be used indefinitely every single day?',
        answerBn: 'অ্যালকোহলযুক্ত মাউথওয়াশ টানা ব্যবহার করলে মুখের স্বাভাবিক ভালো ব্যাকটেরিয়া ধ্বংস হয়ে মুখ শুষ্ক হতে পারে। এটি স্বল্পমেয়াদী ব্যবহার করা উচিত।',
        answerEn: 'Chronic alcohol-based rinses desiccate oral mucosa and alter oral microbiome ecology; warm saline is superior for daily maintenance.'
      }
    ]
  },
  {
    slug: 'tonsil-stones-causes-symptoms-removal',
    titleBn: 'টনসিলে পাথর (Tonsil Stones): গলায় আটকে থাকার অনুভূতি ও সাদা দুর্গন্ধযুক্ত গুটি',
    titleEn: 'Tonsilloliths (Tonsil Stones): Causes, Bad Breath & Safe Extraction Protocols',
    excerptBn: 'গলায় ঢোক গিলতে খচখচ করা ও কাশির সাথে দুর্গন্ধযুক্ত সাদা-হলুদ গুটি টনসিল ক্রিপ্টসে আটকে থাকা পাথর। কুসুম গরম লবণ পানির গার্গল ও ইএনটি যত্ন।',
    excerptEn: 'Calcified debris, food entrapment, and dead cellular material inside tonsillar crypts create foul-smelling tonsilloliths. Learn safe irrigation methods.',
    categoryKey: 'preventive',
    categoryBn: 'প্রতিরোধমূলক স্বাস্থ্য',
    categoryEn: 'Preventive Care',
    readTimeMin: 4,
    publishedDate: '১৬ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'ইএনটি ও হেড-নেক সার্জারি সেল',
      nameEn: 'Pediatric ENT Care Desk',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'ent',
    tags: ['টনসিল স্টোন', 'গলা ব্যথা', 'ইএনটি', 'Tonsil Stones', 'Tonsilloliths', 'ENT'],
    keyTakeawaysBn: [
      'টনসিলের গর্তে খাবার কণা ও ব্যাকটেরিয়া জমে ক্যালসিফাইড হয়ে দুর্গন্ধযুক্ত টনসিল স্টোন তৈরি করে।',
      'ধারালো কাঠি বা আঙুল দিয়ে টনসিলে খোঁচা দেবেন না; এতে টনসিলের রক্তনালী ফেটে মারাত্মক রক্তক্ষরণ হতে পারে।',
      'খাওয়ার পর কুসুম গরম পানিতে লবণ দিয়ে গভীর গার্গল করলে ছোট ছোট স্টোন প্রাকৃতিকভাবে বের হয়ে আসে।'
    ],
    keyTakeawaysEn: [
      'Trapped anaerobic biofilm and food residues in crypts calcify into cheese-like, sulfur-emitting tonsilloliths.',
      'Never poke tonsils with sharp instruments or cotton swabs; tonsillar vascular arcades easily hemorrhage.',
      'Vigorous warm saline gargles generate hydro-acoustic pressure that dislodges superficial stones safely.'
    ],
    contentSections: [
      {
        titleBn: '১. তীব্র টনসিল স্টোনে স্থায়ী চিকিৎসা',
        titleEn: '1. Definitive Surgical Options',
        paragraphsBn: [
          'বারবার বড় আকারের পাথর জমে চরম অস্বস্তি বা কানে ব্যথা ছড়ালে ইএনটি সার্জনরা কোব্লেশন ক্রিপ্টোলাইসিস বা সম্পূর্ণ টনসিলেক্টমির মাধ্যমে এর স্থায়ী সমাধান দেন।'
        ],
        paragraphsEn: [
          'Recurrent large symptomatic tonsilloliths unresponsive to conservative gargling are treated with coblation cryptolysis or tonsillectomy.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'টনসিল স্টোন কি ক্যান্সারের লক্ষণ হতে পারে?',
        questionEn: 'Are tonsil stones a sign of throat malignancy?',
        answerBn: 'না, এটি সম্পূর্ণ নিরীহ একটি ক্যালসিফিকেশন। তবে একপাশের টনসিল অন্যটির চেয়ে অস্বাভাবিক বড় হলে বায়োপসি করে নিশ্চিত হতে হয়।',
        answerEn: 'Tonsilloliths are entirely benign. However, marked asymmetrical tonsillar enlargement requires histology to rule out lymphoma.'
      }
    ]
  },
  {
    slug: 'enlarged-prostate-bph-senior-men-symptoms',
    titleBn: 'প্রস্টেট বৃদ্ধি (BPH): বয়স্ক পুরুষদের রাতে বারবার প্রস্রাব, ধীর গতি ও লেজার অপারেশন',
    titleEn: 'Benign Prostatic Hyperplasia (BPH): Nocturia, Weak Stream & Modern Holmium Laser',
    excerptBn: '৫০ পেরোলে প্রস্রাব শুরু করতে দেরি হওয়া, ফোঁটায় ফোঁটায় প্রস্রাব ও রাতে ঘুমের মধ্যে ঘন ঘন ওঠা প্রস্টেট গ্রন্থি বৃদ্ধির লক্ষণ। ইউরোফ্লোমেট্রি ও পিএসএ (PSA) টেস্ট।',
    excerptEn: 'Progressive bladder outlet obstruction from age-related prostate enlargement causes nocturia and urinary hesitancy. Learn medical and laser (HoLEP) options.',
    categoryKey: 'chronic',
    categoryBn: 'দীর্ঘস্থায়ী রোগ',
    categoryEn: 'Chronic Illness',
    readTimeMin: 5,
    publishedDate: '১৫ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'ইউরোলজি ক্লিনিক্যাল টিম',
      nameEn: 'Urology Clinical Team',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'urology',
    tags: ['প্রস্টেট', 'BPH', 'প্রস্রাবের সমস্যা', 'ইউরোলজি', 'PSA', 'Prostate'],
    keyTakeawaysBn: [
      'রাতে ৩ বারের বেশি প্রস্রাবের জন্য ঘুম ভাঙা এবং প্রস্রাবের ধার চিকন হয়ে যাওয়া বিপিএইচের ক্লাসিক লক্ষণ।',
      'প্রস্টেট ক্যান্সার স্ক্রিনিংয়ের জন্য ৫০ বছর বয়স থেকে রক্তে পিএসএ (PSA) পরীক্ষা করানো বাঞ্ছনীয়।',
      'ঘুমানোর ২ ঘণ্টা আগে তরল পানীয় সীমিত রাখুন এবং অ্যালকোহল ও ক্যাফেইন পরিহার করুন।'
    ],
    keyTakeawaysEn: [
      'Nocturia exceeding 3 times nightly, urinary hesitancy, and terminal dribbling are classic obstructive symptoms.',
      'Baseline serum Prostate Specific Antigen (PSA) testing past 50 stratifies risk between BPH and prostate cancer.',
      'Taper fluid intake 2 hours before bedtime and avoid nocturnal caffeine to decrease bladder irritability.'
    ],
    contentSections: [
      {
        titleBn: '১. ওষুধ ও আধুনিক লেজার সার্জারি (HoLEP)',
        titleEn: '1. Medical Therapy & Minimally Invasive Laser Surgery',
        paragraphsBn: [
          'প্রাথমিক পর্যায়ে ট্যামসুলোসিন ও ফিনাস্টারাইড ওষুধে প্রস্রাবের পথ প্রশস্ত হয়। ওষুধে কাজ না হলে সম্পূর্ণ সেলাইবিহীন হোলমিয়াম লেজার এনিউক্লিয়েশন (HoLEP) এর মাধ্যমে গ্রন্থি কেটে বের করা হয়।'
        ],
        paragraphsEn: [
          'Alpha-blockers relax prostatic smooth muscles. In refractory cases, Holmium Laser Enucleation of the Prostate (HoLEP) yields superior outcomes.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'প্রস্টেট হঠাৎ সম্পূর্ণ আটকে গেলে কী করণীয়?',
        questionEn: 'What should be done if acute urinary retention develops suddenly?',
        answerBn: 'প্রস্রাব সম্পূর্ণ আটকে গেলে পেট ফুলে তীব্র ব্যথা হয়। সাথে সাথে হাসপাতালে গিয়ে ক্যাথেটার দিয়ে মূত্রথলি খালি করতে হবে। এটি একটি জরুরি ইউরোলজিক্যাল অবস্থা।',
        answerEn: 'Acute urinary retention requires immediate urethral catheterization to relieve vesical distension and protect renal function.'
      }
    ]
  },
  {
    slug: 'urinary-tract-infection-uti-water-prevention-women',
    titleBn: 'মূত্রনালীর সংক্রমণ (UTI): প্রস্রাবে জ্বালাপোড়া, ঘন ঘন বেগ ও নারীদের সতর্কতা',
    titleEn: 'Urinary Tract Infection (UTI): Dysuria, Urgency & Recurrence Prevention in Women',
    excerptBn: 'নারীদের মূত্রনালী ছোট হওয়ায় ব্যাকটেরিয়াল ইনফেকশনের ঝুঁকি বেশি। পানি কম খাওয়া বা প্রস্রাব চেপে রাখা থেকে ইউটিআই সৃষ্টি। প্রস্রাবের রুটিন ও কালচার টেস্ট।',
    excerptEn: 'Shorter female urethral anatomy facilitates ascending E. coli colonization. Master post-coital voiding, hydration metrics, and urine culture protocols.',
    categoryKey: 'preventive',
    categoryBn: 'প্রতিরোধমূলক স্বাস্থ্য',
    categoryEn: 'Preventive Care',
    readTimeMin: 5,
    publishedDate: '১৫ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'ইউরোলজি ক্লিনিক্যাল টিম',
      nameEn: 'Urology Clinical Team',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'urology',
    tags: ['ইউটিআই', 'প্রস্রাবে জ্বালা', 'ইনফেকশন', 'পানি', 'UTI', 'Dysuria', 'Urology'],
    keyTakeawaysBn: [
      'টয়লেট ব্যবহারের পর সর্বদা সামনে থেকে পেছনের দিকে (Front to Back) পরিষ্কার করুন যাতে মলদ্বারের জীবাণু মূত্রনালীতে না আসে।',
      'প্রস্রাবের বেগ আটকে রাখবেন না; দীর্ঘক্ষণ প্রস্রাব জমিয়ে রাখলে মূত্রথলিতে ব্যাকটেরিয়া দ্রুত বংশবৃদ্ধি করে।',
      'জ্বর ও পিঠের একপাশে তীব্র ব্যথা হলে সংক্রমণ কিডনিতে (পাইলোনেফ্রাইটিস) ছড়িয়ে পড়ার আশঙ্কা থাকে।'
    ],
    keyTakeawaysEn: [
      'Wipe strictly front-to-back following toileting to prevent cross-contamination of coliform flora into the vestibule.',
      'Never hold urine for prolonged hours; frequent voiding mechanically clears ascending pathogens from uroepithelium.',
      'High fever with unilateral costovertebral flank pain signals ascending acute pyelonephritis requiring hospitalization.'
    ],
    contentSections: [
      {
        titleBn: '১. ক্র্যানবেরি জুস ও ডি-ম্যানোজ (D-Mannose)',
        titleEn: '1. Cranberry & D-Mannose Mechanisms',
        paragraphsBn: [
          'ক্র্যানবেরিতে থাকা প্রোহ্যান্থোসায়ানিডিন এবং ডি-ম্যানোজ ই. কোলাই ব্যাকটেরিয়ার চুলের মতো ফিমব্রিয়া মূত্রনালীর দেয়ালে আটকে যেতে বাধা দেয়, ফলে প্রস্রাবের সাথে ব্যাকটেরিয়া ধুয়ে বেরিয়ে যায়।'
        ],
        paragraphsEn: [
          'Proanthocyanidins in cranberries competitively bind type-1 fimbriae of uropathogenic E. coli, preventing urothelial adhesion.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'ফার্মেসি থেকে ইউটিআই-এর জন্য নিজের ইচ্ছামতো অ্যান্টিবায়োটিক খাওয়া কি ঠিক?',
        questionEn: 'Should over-the-counter antibiotics be taken without a urine culture?',
        answerBn: 'কখনোই না! মনগড়া অ্যান্টিবায়োটিকে ব্যাকটেরিয়ার রেজিস্ট্যান্স তৈরি হয়। ইউরিন কালচার অ্যান্ড সেন্সিটিভিটি টেস্ট করিয়ে নির্দিষ্ট ওষুধ গ্রহণ আবশ্যক।',
        answerEn: 'Indiscriminate antibiotic use breeds multi-drug-resistant superbugs. Always base antimicrobial therapy on quantitative urine culture sensitivities.'
      }
    ]
  },
  {
    slug: 'gallbladder-stones-cholecystectomy-indications',
    titleBn: 'পিত্তথলির পাথর (Gallstones): পেটের ডানপাশে তীব্র ব্যথা ও ল্যাপারোস্কোপিক সার্জারি',
    titleEn: 'Gallbladder Stones: Biliary Colic, Pancreatitis Risks & Laparoscopic Cholecystectomy',
    excerptBn: 'তৈলাক্ত খাবার খাওয়ার পর পেটের ডানপাশে ওপরের অংশে মোচড় দিয়ে তীব্র ব্যথা পিত্তথলির পাথরের লক্ষণ। পাথর গলানোর ওষুধ কি আসলেই কার্যকর?',
    excerptEn: 'Fatty meal ingestion triggering right upper quadrant colic radiating to the right scapula indicates cholelithiasis. Discover gold-standard laparoscopic surgery.',
    categoryKey: 'chronic',
    categoryBn: 'দীর্ঘস্থায়ী রোগ',
    categoryEn: 'Chronic Illness',
    readTimeMin: 5,
    publishedDate: '১৪ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'হেপাটোবিলিয়ারি ও ল্যাপারোস্কোপিক সার্জারি ইউনিট',
      nameEn: 'Hepatobiliary Surgery Wing',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'gastrology',
    tags: ['গলস্টোন', 'পিত্তথলি', 'ল্যাপারোস্কোপি', 'Gallstones', 'Cholecystectomy', 'Surgery'],
    keyTakeawaysBn: [
      'পিত্তথলির পাথর কোনো ওষুধ দিয়ে প্রাকৃতিকভাবে গালিয়ে প্রস্রাব বা পায়খানার সাথে ফেলা বৈজ্ঞানিকভাবে অসম্ভব।',
      'ছোট পাথরগুলো পিত্তনালীতে (CBD) নেমে গিয়ে অবস্ট্রাকটিভ জন্ডিস বা মারাত্মক প্যানক্রিয়াটাইটিস ঘটাতে পারে।',
      'ল্যাপারোস্কোপিক কোলেসিস্টেক্টমিতে পেটে মাত্র ৩-৪টি ছোট ছিদ্র দিয়ে ক্যামেরা ঢুকিয়ে পাথরসহ পিত্তথলি নিরাপদে অপসারণ করা হয়।'
    ],
    keyTakeawaysEn: [
      'Gallbladder calculi cannot be chemically dissolved or passed safely via non-invasive herbal treatments.',
      'Small micro-calculi can migrate into the common bile duct, precipitating choledocholithiasis and gallstone pancreatitis.',
      'Four-port laparoscopic cholecystectomy is the worldwide gold standard, permitting normal walking within 24 hours.'
    ],
    contentSections: [
      {
        titleBn: '১. পিত্তথলি কেটে ফেললে কি হজমে সমস্যা হয়?',
        titleEn: '1. Digestion After Gallbladder Removal',
        paragraphsBn: [
          'পিত্তথলি শুধু পিত্তরস জমা করে রাখে, কিন্তু পিত্তরস তৈরি করে লিভার। পিত্তথলি অপসারণের পর লিভারের পিত্ত সরাসরি অন্ত্রে গিয়ে স্বাভাবিক হজম সম্পন্ন করে; তাই ভয়ের কোনো কারণ নেই।'
        ],
        paragraphsEn: [
          'Bile is continuously synthesized by hepatocytes; after cholecystectomy, the biliary tree adapts to drip bile directly into the duodenum without impairing digestion.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'লক্ষণবিহীন পাথর থাকলে কি অপারেশন জরুরি?',
        questionEn: 'Do asymptomatic incidentally discovered gallstones require surgery?',
        answerBn: 'যদি কোনো ব্যথা বা প্রদাহ না থাকে এবং পাথর খুব বড় না হয়, তবে সাধারণত পর্যবেক্ষণ করা হয়। তবে ডায়াবেটিস রোগী বা পাথরের আকার ৩ সেমির বেশি হলে অপারেশন বাঞ্ছনীয়।',
        answerEn: 'Silent asymptomatic gallstones generally warrant watchful waiting unless associated with calcified porcelain gallbladder or diabetes.'
      }
    ]
  },
  {
    slug: 'vertigo-bppv-epley-maneuver-inner-ear',
    titleBn: 'ভার্টিগো বা মাথা ঘোরা: বিছানায় শুতে গেলে পৃথিবী ঘুরে ওঠা ও অ্যাপলি ম্যানুভারের ম্যাজিক',
    titleEn: 'Benign Paroxysmal Positional Vertigo (BPPV): Otolith Crystals & The Epley Maneuver',
    excerptBn: 'বিছানায় পাশ ফিরলে বা ওপরের দিকে তাকালে চারপাশের সবকিছু বনবন করে ঘোরা ভেতরের কানের অটোবিল ক্রিস্টালের স্থানচ্যুতির লক্ষণ। ওষুধ ছাড়াই বিশেষ ব্যায়ামে নিরাময়।',
    excerptEn: 'Sudden brief spinning sensations triggered by head position changes characterize BPPV. Reposition canalith calcium carbonate particles via the Epley maneuver.',
    categoryKey: 'chronic',
    categoryBn: 'দীর্ঘস্থায়ী রোগ',
    categoryEn: 'Chronic Illness',
    readTimeMin: 5,
    publishedDate: '১৪ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'ইএনটি ও নিউরো-ওটোলজি সেল',
      nameEn: 'Neurotology & Vestibular Wing',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'ent',
    tags: ['ভার্টিগো', 'মাথা ঘোরা', 'BPPV', 'অ্যাপলি ম্যানুভার', 'Vertigo', 'Epley Maneuver', 'ENT'],
    keyTakeawaysBn: [
      'বিপিপিভি (BPPV) ভার্টিগোতে মাথা ঘোরার তীব্র পর্বটি সাধারণত ৩০ সেকেন্ড থেকে ১ মিনিটের কম সময় স্থায়ী হয়।',
      'ভেতরের কানের সেমি-সার্কুলার ক্যানালে আটকে থাকা ক্যালসিয়াম কার্বনেট কণাগুলোকে অ্যাপলি ম্যানুভারের মাধ্যমে মূল স্থানে ফিরিয়ে আনা হয়।',
      'মাথা ঘোরার সাথে কথা জড়িয়ে যাওয়া, হাত-পা অবশ হওয়া বা দৃষ্টি দ্বিগুণ হলে তা স্ট্রোকের লক্ষণ; দ্রুত ইমার্জেন্সিতে যান।'
    ],
    keyTakeawaysEn: [
      'BPPV spinning episodes are transient, typically lasting under 60 seconds after sudden head tilts or rolling in bed.',
      'The canalith repositioning (Epley) maneuver uses gravity to guide dislodged otoconia back into the utricle.',
      'Vertigo accompanied by dysarthria, limb weakness, or diplopia suggests central posterior circulation stroke.'
    ],
    contentSections: [
      {
        titleBn: '১. ডিক্স-হলপাইক (Dix-Hallpike) টেস্ট',
        titleEn: '1. Diagnostic Dix-Hallpike Maneuver',
        paragraphsBn: [
          'চিকিৎসক রোগীকে দ্রুত শুইয়ে মাথা ৪৫ ডিগ্রি একদিকে ঘুরিয়ে চোখের অনৈচ্ছিক ঘূর্ণন (Nystagmus) পর্যবেক্ষণ করে নিশ্চিত করেন কানের কোন পাশে সমস্যা।'
        ],
        paragraphsEn: [
          'Eliciting characteristic torsional, upbeating nystagmus confirms posterior canalithiasis definitively.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'মাথা ঘোরার ওষুধ কি টানা চালিয়ে যাওয়া উচিত?',
        questionEn: 'Should vestibular suppressants (betahistine/dimenhydrinate) be taken long-term?',
        answerBn: 'না! এই ওষুধগুলো মস্তিষ্কের প্রাকৃতিক ভারসাম্য পুনর্গঠন প্রক্রিয়াকে (Central Compensation) বিলম্বিত করে। তীব্র অবস্থায় ১-৩ দিন সেবনই যথেষ্ট।',
        answerEn: 'Prolonged vestibular suppressants retard central vestibular adaptation; canalith repositioning maneuvers provide definitive cure.'
      }
    ]
  },
  {
    slug: 'sinusitis-deviated-nasal-septum-heavy-head',
    titleBn: 'সাইনোসাইটিস ও নাকের হাড় বাঁকা (DNS): কপালে ভারী ভাব, মাথা নিচু করলে তীব্র চাপ',
    titleEn: 'Chronic Sinusitis & Deviated Septum: Facial Fullness, Halitosis & FESS Surgery',
    excerptBn: 'নাকের দুই পাশে বা চোখের ওপরে সার্বক্ষণিক চাপ, হলুদ কফ ও ঘ্রাণশক্তি কমে যাওয়া ক্রনিক সাইনোসাইটিসের লক্ষণ। নেবুলাইজেশন, স্যালাইন ডাউচ ও ফাংশনাল এন্ডোস্কোপিক সার্জারি।',
    excerptEn: 'Ostium blockage from deviated nasal septa traps sinus mucus, breeding chronic microbial biofilm. Learn nasal steroid sprays and modern FESS techniques.',
    categoryKey: 'preventive',
    categoryBn: 'প্রতিরোধমূলক স্বাস্থ্য',
    categoryEn: 'Preventive Care',
    readTimeMin: 5,
    publishedDate: '১৩ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'ইএনটি ও হেড-নেক সার্জারি সেল',
      nameEn: 'Pediatric ENT Care Desk',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'ent',
    tags: ['সাইনোসাইটিস', 'নাকের হাড় বাঁকা', 'DNS', 'মাথা ব্যথা', 'Sinusitis', 'FESS', 'ENT'],
    keyTakeawaysBn: [
      'নামাজে সেজদা দিতে গেলে বা মাথা নিচু করলে কপাল ও চোখের চারপাশে তীব্র চাপ বেড়ে যাওয়া সাইনোসাইটিসের প্রধান বৈশিষ্ট্য।',
      'দিনে দুইবার কুসুম গরম পানির বাষ্প (Steam Inhalation) নিলে সাইনাসের ছিদ্রগুলো খুলে গিয়ে জমে থাকা শ্লেষ্মা দ্রুত বের হয়।',
      'নাকের হাড় মারাত্মক বাঁকা থাকলে ও ওষুধে সাইনোসাইটিস না সারলে সেপটোপ্লাস্টি বা এফইএসএস (FESS) অপারেশন দীর্ঘমেয়াদী সমাধান দেয়।'
    ],
    keyTakeawaysEn: [
      'Facial pain and throbbing exacerbated by bending forward or dependent postures denote acute maxillary/frontal sinusitis.',
      'Steam inhalation loosens tenacious mucosal secretions and restores physiologic mucociliary escalator clearance.',
      'Significant anatomical septal deviation refractory to medical sprays benefits from septoplasty and Functional Endoscopic Sinus Surgery.'
    ],
    contentSections: [
      {
        titleBn: '১. সাইনাসের সিটি স্ক্যান (PNS CT Scan)',
        titleEn: '1. Coronal PNS CT Evaluation',
        paragraphsBn: [
          'ক্রনিক সাইনোসাইটিসে নাকের ভেতরের মিউকোসা কতটা পুরু হয়েছে এবং কোনো নাকের পলিপ (Polyp) আছে কিনা তা দেখতে পিএনএস সিটি স্ক্যান অত্যন্ত নিখুঁত তথ্য প্রদান করে।'
        ],
        paragraphsEn: [
          'High-resolution coronal sinus CT scans delineate osteomeatal complex patency and map surgical corridors before endoscopic interventions.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'সাইনাসের জন্য কি সারাজীবন অ্যান্টিবায়োটিক খেতে হয়?',
        questionEn: 'Do sinus sufferers require continuous antibiotic therapy?',
        answerBn: 'অধিকাংশ সাইনোসাইটিস অ্যালার্জি বা ভাইরাল কারণে হয়, যাতে অ্যান্টিবায়োটিকের প্রয়োজন নেই। স্যালাইন স্প্রে ও নেজাল কর্টিকোস্টেরয়েডই প্রধান চিকিৎসা।',
        answerEn: 'Most presentations are allergic or viral; intranasal corticosteroids and saline flushes form the mainstay of guideline therapy.'
      }
    ]
  },
  {
    slug: 'smoking-cessation-timeline-lung-regeneration',
    titleBn: 'ধূমপান ত্যাগের বৈজ্ঞানিক ধাপ: শেষ সিগারেট ফেলে দেওয়ার ২০ মিনিট পর থেকে ফুসফুসের পুনরুদ্ধার',
    titleEn: 'Smoking Cessation Timeline: What Happens to Your Body From 20 Minutes to 10 Years',
    excerptBn: 'ধূমপান বন্ধের মাত্র ২০ মিনিটের মধ্যে হার্ট রেট স্বাভাবিক হয় এবং ৭২ ঘণ্টার মধ্যে ব্রঙ্কিয়াল টিউব শিথিল হয়ে শ্বাস নেওয়া সহজ হয়। নিকোটিন উইথড্রয়াল জয়ের উপায়।',
    excerptEn: 'Cardiovascular parameters stabilize within 20 minutes of your final puff. Track systemic pulmonary cilia restoration across days, months, and decades.',
    categoryKey: 'lifestyle',
    categoryBn: 'জীবনযাত্রা ও খাদ্যাভ্যাস',
    categoryEn: 'Lifestyle & Diet',
    readTimeMin: 5,
    publishedDate: '১৩ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'পালমোনোলজি ও অ্যাডিকশন কেয়ার ইউনিট',
      nameEn: 'Addiction Medicine & Pulmonology Wing',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'medicine',
    tags: ['ধূমপান ত্যাগ', 'ফুসফুস', 'নিকোটিন', 'Smoking Cessation', 'Pulmonology', 'Nicotine'],
    keyTakeawaysBn: [
      'ধূমপান ছাড়ার ২৪ ঘণ্টার মধ্যে রক্তে কার্বন মনোক্সাইডের মাত্রা স্বাভাবিক হয় এবং অক্সিজেন ধারণক্ষমতা বাড়ে।',
      '১ থেকে ৯ মাসের মধ্যে ফুসফুসের সিলিয়া পুনরায় জীবন্ত হয়ে শ্লেষ্মা ও জীবাণু পরিষ্কার করা শুরু করে, ফলে কাশি কমে যায়।',
      'ধূমপান ত্যাগের ৫ বছরের মাথায় হার্ট অ্যাটাকের ঝুঁকি প্রায় একজন অধূমপায়ীর কাছাকাছি নেমে আসে।'
    ],
    keyTakeawaysEn: [
      'At 24 hours, carbon monoxide levels plummet to normal ranges, boosting oxygen saturation.',
      'Between 1 and 9 months, pulmonary respiratory cilia regenerate, dramatically reducing cough and dyspnea.',
      'At 5 years post-cessation, myocardial infarction risk falls to that of a non-smoker.'
    ],
    contentSections: [
      {
        titleBn: '১. নিকোটিন উইথড্রয়াল সামলানোর ৪D টেকনিক',
        titleEn: '1. The 4 D’s Craving Control Protocol',
        paragraphsBn: [
          'যখন তীব্র সিগারেটের টান আসে: Delay (৫ মিনিট দেরি করুন), Deep breath (গভীর শ্বাস নিন), Drink water (এক চুমুক ঠান্ডা পানি পান করুন), Distract (অন্য কোনো কাজে ব্যস্ত হন)।'
        ],
        paragraphsEn: [
          'Conquer sudden nicotine urge spikes using: Delay, Deep breathing, Drinking cold water, and Distraction maneuvers.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'ভেপিং বা ই-সিগারেট কি ধূমপানের নিরাপদ বিকল্প?',
        questionEn: 'Are e-cigarettes or vapes safe non-toxic alternatives?',
        answerBn: 'কখনোই না! ই-সিগারেটের ধোঁয়ায় বিষাক্ত ভারী ধাতু এবং ডাইঅ্যাসিটাইল থাকে যা পপকর্ন লাং (বপকর্ন ব্রঙ্কিওলাইটিস) সহ ফুসফুসের মারাত্মক ক্ষতি করে।',
        answerEn: 'Vaping aerosols contain volatile carcinogens and diacetyl, causing bronchiolitis obliterans and severe cardiovascular stress.'
      }
    ]
  },
  {
    slug: 'screen-time-infant-speech-delay-virtual-autism',
    titleBn: 'শিশুদের অতিরিক্ত মোবাইল স্ক্রিন ও দেরিতে কথা বলা: ভার্চুয়াল অটিজমের ঝুঁকি',
    titleEn: 'Early Screen Exposure & Speech Delay: Countering Virtual Autism in Toddlers',
    excerptBn: 'খাওয়ানোর সময় মোবাইল ধরিয়ে দিলে শিশুর মস্তিষ্ক দ্বি-মুখী সামাজিক যোগাযোগ শেখে না। ২ বছরের নিচে স্ক্রিন মুক্ত শৈশব ও ভাষা বিকাশের ঘরোয়া খেলাধুলা।',
    excerptEn: 'Unidirectional fast-paced digital streaming desensitizes developing infant neural synapses, delaying speech milestones. Reclaim conversational interactions.',
    categoryKey: 'maternal_child',
    categoryBn: 'মা ও শিশু স্বাস্থ্য',
    categoryEn: 'Mother & Child',
    readTimeMin: 5,
    publishedDate: '১২ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'চাইল্ড ডেভেলপমেন্ট ও স্পিচ থেরাপি ইউনিট',
      nameEn: 'Child Development & Speech Therapy Wing',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'child',
    tags: ['স্ক্রিন টাইম', 'কথা বলতে দেরি', 'ভার্চুয়াল অটিজম', 'শিশু বিকাশ', 'Speech Delay', 'Screen Time', 'Pediatrics'],
    keyTakeawaysBn: [
      'মোবাইল বা টিভির দ্রুত পরিবর্তনশীল রঙ ও শব্দ শিশুর মস্তিষ্কে অতিরিক্ত ডোপামিন ক্ষরণ করে বাস্তব জগতের মানুষের চেহারার প্রতি অনাগ্রহ তৈরি করে।',
      'শিশুকে খাওয়ানোর সময় মোবাইল দেওয়ার অভ্যাস বন্ধ করে গল্প করুন ও খাবারের নাম বলুন।',
      'দৈনিক মাত্র ১ মাস মোবাইল সম্পূর্ণ বন্ধ রেখে শিশুর সাথে সরাসরি চোখে চোখ রেখে কথা বললে ভাষা দ্রুত ফিরে আসে।'
    ],
    keyTakeawaysEn: [
      'Rapid sensory-stimulating screen sequences hijack dopamine cascades, eroding real-world human eye gaze orientation.',
      'Eliminate feeding screens; engage in sensory tactile dining by naming foods, textures, and tastes.',
      'A complete digital detox for just 30 days combined with active face-to-face vocal interactions sparks rapid linguistic catch-up.'
    ],
    contentSections: [
      {
        titleBn: '১. ভাষা বিকাশের স্বাভাবিক মাইলফলক',
        titleEn: '1. Standard Language Milestones',
        paragraphsBn: [
          '১ বছর বয়সে শিশুর অন্তত একটি অর্থপূর্ণ শব্দ (যেমন মা, বাবা) বলা উচিত; এবং ২ বছর বয়সে দুটি শব্দের বাক্য (যেমন দুধ খাব) বলা স্বাভাবিক মাইলফলক।'
        ],
        paragraphsEn: [
          'Single words by 12 months and 2-word spontaneous communicative phrases by 24 months are foundational developmental hallmarks.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'কার্টুন দেখে কি বাচ্চার ইংরেজি ভাষা শেখা ভালো?',
        questionEn: 'Do English educational cartoons genuinely foster healthy bilingualism?',
        answerBn: 'স্ক্রিন থেকে মুখস্থ ইংরেজি শব্দ আওড়ানো আসল যোগাযোগ নয় (Echolalia)। মানুষে মানুষে বাস্তব ভাব বিনিময়ের মাধ্যমেই কেবল কার্যকর ভাষার বিকাশ ঘটে।',
        answerEn: 'Rote cartoon recitation represents hollow echolalia rather than functional communicative competence.'
      }
    ]
  },
  {
    slug: 'blue-zone-habits-longevity-secrets',
    titleBn: 'দীর্ঘজীবী ও নিরোগ জীবনের ৫টি ব্লু-জোন অভ্যাস: শতবর্ষী মানুষদের বৈজ্ঞানিক জীবনধারা',
    titleEn: 'Blue Zone Longevity Secrets: 5 Evidence-Based Habits of Centenarians Worldwide',
    excerptBn: 'ওকিনাওয়া থেকে সার্ডিনিয়া—যেসব অঞ্চলে মানুষ শত বছর সুস্থভাবে বেঁচে থাকেন তাদের জীবনযাত্রার রহস্য: উদ্ভিজ্জ খাবার, স্বাভাবিক নড়াচড়া ও গভীর সামাজিক বন্ধন।',
    excerptEn: 'Centenarians across global Blue Zones share lifestyle genetics: plant-slanted Mediterranean habits, natural daily locomotion, and robust community ties.',
    categoryKey: 'lifestyle',
    categoryBn: 'জীবনযাত্রা ও খাদ্যাভ্যাস',
    categoryEn: 'Lifestyle & Diet',
    readTimeMin: 5,
    publishedDate: '১২ সেপ্টেম্বর, ২০২৬',
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    author: {
      nameBn: 'প্রিভেন্টিভ মেডিসিন ও জেরিয়াট্রিক রিসার্চ',
      nameEn: 'Preventive Medicine & Longevity Desk',
      roleBn: 'ডাক্তার আছেন প্ল্যাটফর্ম',
      roleEn: 'Dakter Achen Platform'
    },
    reviewedBy: {
      nameBn: 'ডাঃ সৌমিত্র দাশ',
      nameEn: 'Dr. Soumitra Das',
      degreesBn: 'এমবিবিএস, বিসিএস, পিজিটি (মেডিসিন), সিসিডি',
      degreesEn: 'MBBS, BCS, PGT (Medicine), CCD'
    },
    recommendedSpecialty: 'medicine',
    tags: ['দীর্ঘায়ু', 'ব্লু জোন', 'সুস্থ জীবন', 'Longevity', 'Blue Zones', 'Healthy Living'],
    keyTakeawaysBn: [
      'হারা হাচি বু (Hara Hachi Bu): জাপানি শতবর্ষীদের নিয়ম অনুযায়ী পেট ৮০ ভাগ ভরলেই খাওয়া থামিয়ে দিন।',
      'খাদ্যতালিকায় ৯৫% খাবার শাকসবজি, ফলমূল, ডাল, বাদাম ও শস্যদানা রাখুন; রেড মিট মাসে ১-২ দিন সীমিত।',
      'একাকীত্ব ধূমপানের মতোই ক্ষতিকর; প্রতিদিন পরিবার ও বন্ধুবান্ধবের সাথে অর্থপূর্ণ আড্ডা আয়ু বৃদ্ধি করে।'
    ],
    keyTakeawaysEn: [
      'Hara Hachi Bu: The Confucian adage to cease eating when stomach capacity reaches 80 percent.',
      'A 95% whole-food plant-forward dietary matrix loaded with beans, legumes, and nuts preserves telomere length.',
      'Chronic social isolation equals the cardiovascular toxicity of smoking 15 cigarettes daily.'
    ],
    contentSections: [
      {
        titleBn: '১. প্রাকৃতিক শরীরচর্চা (Natural Movement)',
        titleEn: '1. Inbuilt Physical Movement',
        paragraphsBn: [
          'ব্লু জোনের মানুষেরা জিমে গিয়ে লোহার ওজন তোলেন না; তারা বাগান করা, হাঁটা ও ঘরের কাজে সারাদিন শারীরিকভাবে সচল থাকেন।'
        ],
        paragraphsEn: [
          'Longevity populations nudge their musculoskeletal systems via gardening, walking, and baking rather than episodic gym workouts.'
        ]
      }
    ],
    faqs: [
      {
        questionBn: 'দীর্ঘায়ুর জন্য জেনেটিক্স কতটা দায়ী?',
        questionEn: 'How much does genetics dictate longevity compared to lifestyle?',
        answerBn: 'গবেষণায় দেখা গেছে দীর্ঘায়ুর মাত্র ২০-২৫ শতাংশ জিনগত, আর বাকি ৭৫-৮০ শতাংশ নির্ভর করে আপনার খাদ্যাভ্যাস, নড়াচড়া ও মানসিক প্রশান্তির ওপর।',
        answerEn: 'Twin studies reveal genetics account for merely 20-25% of lifespan; lifestyle and environmental factors govern the remaining 75-80%.'
      }
    ]
  }
];
