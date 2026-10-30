export interface BloodBank {
  id: string;
  nameBn: string;
  nameEn: string;
  areaBn: string;
  areaEn: string;
  addressBn: string;
  addressEn: string;
  phone: string;
  availableHoursBn: string;
  availableHoursEn: string;
  is24x7: boolean;
  type: 'blood_bank' | 'volunteer' | 'hospital';
}

export interface AmbulanceService {
  id: string;
  nameBn: string;
  nameEn: string;
  typeBn: string;
  typeEn: string;
  phone: string;
  altPhone?: string;
  locationBn: string;
  locationEn: string;
  serviceType: 'icu' | 'nicu' | 'ac' | 'freezing';
  is24x7: boolean;
}

export interface EmergencyHospital {
  nameBn: string;
  nameEn: string;
  typeBn: string;
  typeEn: string;
  emergencyPhone: string;
  hotline: string;
  locationBn: string;
  locationEn: string;
  googleMapsQuery: string;
}

export const CHATTAGRAM_BLOOD_BANKS: BloodBank[] = [
  {
    id: 'sandhani-cmch',
    nameBn: 'সন্ধানী (চট্টগ্রাম মেডিকেল কলেজ ইউনিট)',
    nameEn: 'Sandhani (Chittagong Medical College Unit)',
    areaBn: 'পাঁচলাইশ',
    areaEn: 'Panchlaish',
    addressBn: 'চমেক হাসপাতাল প্রাঙ্গণ, পাঁচলাইশ, চট্টগ্রাম',
    addressEn: 'CMCH Hospital Premises, Panchlaish, Chattogram',
    phone: '01819-383726',
    availableHoursBn: '২৪ ঘণ্টা উন্মুক্ত',
    availableHoursEn: '24 Hours Open',
    is24x7: true,
    type: 'volunteer'
  },
  {
    id: 'red-crescent-ctg',
    nameBn: 'বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি রক্ত কেন্দ্র',
    nameEn: 'Bangladesh Red Crescent Blood Center',
    areaBn: 'আন্দরকিল্লা',
    areaEn: 'Anderkilla',
    addressBn: 'জেমিসন রেড ক্রিসেন্ট মাতৃসদন হাসপাতাল, আন্দরকিল্লা, চট্টগ্রাম',
    addressEn: 'Jemison Red Crescent Maternity Hospital, Anderkilla, Chattogram',
    phone: '01711-396558',
    availableHoursBn: 'সকাল ৮:০০ – রাত ১০:০০',
    availableHoursEn: '8:00 AM – 10:00 PM',
    is24x7: false,
    type: 'blood_bank'
  },
  {
    id: 'quantum-ctg',
    nameBn: 'কোয়ান্টাম রক্ত সেবা চট্টগ্রাম',
    nameEn: 'Quantum Voluntary Blood Bank Chattogram',
    areaBn: 'চকবাজার',
    areaEn: 'Chawkbazar',
    addressBn: 'রোড-২, ও আর নিজাম রোড সংলগ্ন / চকবাজার, চট্টগ্রাম',
    addressEn: 'O.R. Nizam Rd / Chawkbazar Area, Chattogram',
    phone: '01714-010869',
    availableHoursBn: '২৪ ঘণ্টা জরুরি সেবা',
    availableHoursEn: '24/7 Emergency Service',
    is24x7: true,
    type: 'volunteer'
  },
  {
    id: 'fatema-begum-blood',
    nameBn: 'ফাতেমা বেগম রেড ক্রিসেন্ট রক্ত কেন্দ্র',
    nameEn: 'Fatema Begum Red Crescent Blood Center',
    areaBn: 'পাঁচলাইশ',
    areaEn: 'Panchlaish',
    addressBn: 'পাঁচলাইশ আবাসিক এলাকা, চট্টগ্রাম',
    addressEn: 'Panchlaish R/A, Chattogram',
    phone: '01815-564344',
    availableHoursBn: '২৪ ঘণ্টা উন্মুক্ত',
    availableHoursEn: '24 Hours Open',
    is24x7: true,
    type: 'blood_bank'
  }
];

export const CHATTAGRAM_AMBULANCES: AmbulanceService[] = [
  {
    id: 'al-sheba-icu',
    nameBn: 'আল শেবা আইসিইউ ও লাইফ সাপোর্ট অ্যাম্বুলেন্স',
    nameEn: 'Al Sheba ICU & Life Support Ambulance',
    typeBn: 'আইসিইউ / ভেন্টিলেটর অ্যাম্বুলেন্স',
    typeEn: 'ICU & Ventilator Ambulance',
    phone: '01819-317180',
    altPhone: '01711-748950',
    locationBn: 'পাঁচলাইশ ও প্রবর্তক মোড়',
    locationEn: 'Panchlaish & Probartak Circle',
    serviceType: 'icu',
    is24x7: true
  },
  {
    id: 'ctg-icu-service',
    nameBn: 'চট্টগ্রাম সেন্ট্রাল আইসিইউ অ্যাম্বুলেন্স সার্ভিস',
    nameEn: 'Chattogram Central ICU Ambulance',
    typeBn: 'এসি / নন-এসি / আইসিইউ',
    typeEn: 'AC / Non-AC / ICU Support',
    phone: '01814-722271',
    altPhone: '01974-722271',
    locationBn: 'জিইসি ও মেডিকেল গেট',
    locationEn: 'GEC Circle & Medical Gate',
    serviceType: 'icu',
    is24x7: true
  },
  {
    id: 'red-crescent-ambulance',
    nameBn: 'রেড ক্রিসেন্ট জরুরি অ্যাম্বুলেন্স',
    nameEn: 'Red Crescent Emergency Ambulance',
    typeBn: 'স্ট্যান্ডার্ড জরুরি অ্যাম্বুলেন্স',
    typeEn: 'Standard Emergency Ambulance',
    phone: '01819-383726',
    locationBn: 'আন্দরকিল্লা ও চমেক',
    locationEn: 'Anderkilla & CMCH',
    serviceType: 'ac',
    is24x7: true
  },
  {
    id: 'anzuman-mufidul',
    nameBn: 'আঞ্জুমান মুফিদুল ইসলাম চট্টগ্রাম ফ্রিজিং ও অ্যাম্বুলেন্স',
    nameEn: 'Anjuman Mufidul Islam Ambulance & Freezing',
    typeBn: 'ফ্রিজিং ভ্যান ও অ্যাম্বুলেন্স',
    typeEn: 'Freezing Van & Transport',
    phone: '01819-310329',
    locationBn: 'চকবাজার',
    locationEn: 'Chawkbazar',
    serviceType: 'freezing',
    is24x7: true
  }
];

export const CHATTAGRAM_EMERGENCY_HOSPITALS: EmergencyHospital[] = [
  {
    nameBn: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল (চমেক) জরুরি বিভাগ',
    nameEn: 'Chittagong Medical College Hospital (CMCH) Emergency',
    typeBn: 'সরকারি বিশেষায়িত মেডিকেল কলেজ হাসপাতাল (২৪/৭ জরুরি ও ট্রমা)',
    typeEn: 'Public Tertiary Care Hospital & Trauma Center (24/7)',
    emergencyPhone: '01713-998399',
    hotline: '031-616891',
    locationBn: 'কে.বি. ফজলুল কাদের রোড, পাঁচলাইশ, চট্টগ্রাম',
    locationEn: 'K.B. Fazlul Kader Road, Panchlaish, Chattogram',
    googleMapsQuery: 'Chittagong+Medical+College+Hospital+Emergency'
  },
  {
    nameBn: 'পার্কভিউ হাসপাতাল জরুরি ও ট্রমা সেন্টার',
    nameEn: 'Parkview Hospital Emergency & Trauma Care',
    typeBn: 'বেসরকারি মাল্টি-স্পেশালিটি হাসপাতাল (২৪/৭ ক্যাথল্যাব ও আইসিইউ)',
    typeEn: 'Private Multi-specialty Hospital (24/7 Cathlab & ICU)',
    emergencyPhone: '01976-022333',
    hotline: '01844-183300',
    locationBn: '৯৪/১০৩ কাতালগঞ্জ রোড, পাঁচলাইশ, চট্টগ্রাম',
    locationEn: '94/103 Katalganj Road, Panchlaish, Chattogram',
    googleMapsQuery: 'Parkview+Hospital+Chattogram'
  },
  {
    nameBn: 'এভারকেয়ার হাসপাতাল চট্টগ্রাম (Evercare Hospital)',
    nameEn: 'Evercare Hospital Chattogram Emergency',
    typeBn: 'টারশিয়ারি কেয়ার ও আন্তর্জাতিক মানের ট্রমা সেন্টার (২৪/৭)',
    typeEn: 'Tertiary Care & International Standard Trauma Center',
    emergencyPhone: '10663',
    hotline: '09612-310663',
    locationBn: 'প্লট নং এইচ১, অনন্যা আবাসিক এলাকা, অক্সিজেন-কুয়াইশ রোড, চট্টগ্রাম',
    locationEn: 'Plot H1, Ananya R/A, Oxygen-Kuwaish Road, Chattogram',
    googleMapsQuery: 'Evercare+Hospital+Chattogram'
  },
  {
    nameBn: 'ইম্পেরিয়াল হাসপাতাল লিমিটেড (Imperial Hospital)',
    nameEn: 'Imperial Hospital Limited Emergency',
    typeBn: 'বিশ্বমানের হৃদরোগ ও মাল্টি-স্পেশালিটি জরুরি সেবা (২৪/৭)',
    typeEn: 'World Class Cardiac & Multi-specialty Emergency (24/7)',
    emergencyPhone: '09612-222444',
    hotline: '09612-222444',
    locationBn: 'জাকির হোসেন রোড, পাহাড়তলী, চট্টগ্রাম',
    locationEn: 'Zakir Hossain Road, Pahartali, Chattogram',
    googleMapsQuery: 'Imperial+Hospital+Chattogram'
  },
  {
    nameBn: 'ম্যাক্স হসপিটাল ও ডায়াগনস্টিক',
    nameEn: 'Max Hospital & Diagnostic Emergency',
    typeBn: 'বেসরকারি হাসপাতাল ও ক্রিটিক্যাল কেয়ার ইউনিট (২৪/৭)',
    typeEn: 'Private Hospital & Critical Care Unit',
    emergencyPhone: '01713-998199',
    hotline: '031-622514',
    locationBn: '৩৫/৩৬ মেহেদীবাগ রোড, চট্টগ্রাম',
    locationEn: '35/36 Mehedibag Road, Chattogram',
    googleMapsQuery: 'Max+Hospital+Mehedibag+Chattogram'
  }
];
