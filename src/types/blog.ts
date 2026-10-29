export type BlogCategoryKey =
  | 'preventive'
  | 'chronic'
  | 'maternal_child'
  | 'emergency'
  | 'lifestyle'
  | 'mental';

export interface BlogSection {
  titleBn: string;
  titleEn: string;
  paragraphsBn: string[];
  paragraphsEn: string[];
  tipsListBn?: string[];
  tipsListEn?: string[];
  warningCalloutBn?: string;
  warningCalloutEn?: string;
}

export interface BlogFAQ {
  questionBn: string;
  questionEn: string;
  answerBn: string;
  answerEn: string;
}

export interface BlogPost {
  slug: string;
  titleBn: string;
  titleEn: string;
  excerptBn: string;
  excerptEn: string;
  categoryKey: BlogCategoryKey;
  categoryBn: string;
  categoryEn: string;
  readTimeMin: number;
  publishedDate: string;
  coverImage: string;
  author: {
    nameBn: string;
    nameEn: string;
    roleBn: string;
    roleEn: string;
  };
  reviewedBy: {
    nameBn: string;
    nameEn: string;
    degreesBn: string;
    degreesEn: string;
  };
  keyTakeawaysBn: string[];
  keyTakeawaysEn: string[];
  contentSections: BlogSection[];
  faqs?: BlogFAQ[];
  recommendedSpecialty: string; // matches Doctor specialtyKey (e.g. 'medicine', 'heart', 'child', 'gynae')
  tags: string[];
  featured?: boolean;
}

export interface DailyHealthTip {
  id: string;
  dayIndex: number;
  categoryBn: string;
  categoryEn: string;
  titleBn: string;
  titleEn: string;
  tipBn: string;
  tipEn: string;
  actionStepBn: string;
  actionStepEn: string;
  scientificFactBn: string;
  scientificFactEn: string;
  iconType: 'water' | 'heart' | 'apple' | 'moon' | 'walk' | 'shield' | 'smile' | 'brain';
}
