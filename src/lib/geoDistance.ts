export interface MedicalHub {
  key: string;
  nameBn: string;
  nameEn: string;
  lat: number;
  lng: number;
  zoom: number;
}

export const CHATTOGRAM_HUBS: MedicalHub[] = [
  { key: 'all', nameBn: 'সব এলাকা', nameEn: 'All Hubs', lat: 22.3596, lng: 91.8286, zoom: 13 },
  { key: 'panchlaish', nameBn: 'পাঁচলাইশ ও ও.আর. নিজাম', nameEn: 'Panchlaish & OR Nizam', lat: 22.3620, lng: 91.8260, zoom: 15 },
  { key: 'chawkbazar', nameBn: 'চকবাজার ও মেডিকেল', nameEn: 'Chawkbazar & CMCH', lat: 22.3590, lng: 91.8340, zoom: 15 },
  { key: 'gec', nameBn: 'জিইসি মোড়', nameEn: 'GEC Circle', lat: 22.3615, lng: 91.8175, zoom: 15 },
  { key: 'mehedibag', nameBn: 'মেহেদীবাগ ও গোলপাহাড়', nameEn: 'Mehedibag & Golpahar', lat: 22.3490, lng: 91.8245, zoom: 15 },
  { key: 'agrabad', nameBn: 'আগ্রাবাদ ও হালিশহর', nameEn: 'Agrabad & Halishahar', lat: 22.3270, lng: 91.8125, zoom: 14 },
  { key: 'jamal_khan', nameBn: 'জামাল খান ও কোতোয়ালী', nameEn: 'Jamal Khan & Kotwali', lat: 22.3510, lng: 91.8350, zoom: 15 }
];

export function getChamberCoords(area: string, chamberName: string): { lat: number; lng: number } {
  const normArea = (area || '').toLowerCase();
  const normName = (chamberName || '').toLowerCase();

  // Known major medical spots in Chattogram
  if (normName.includes('cmch') || normName.includes('চট্টগ্রাম মেডিকেল') || normName.includes('medical college')) {
    return { lat: 22.3596, lng: 91.8286 };
  }
  if (normName.includes('parkview') || normName.includes('পার্কভিউ')) {
    return { lat: 22.3618, lng: 91.8265 };
  }
  if (normName.includes('cscr') || normName.includes('সিএসসিআর')) {
    return { lat: 22.3602, lng: 91.8239 };
  }
  if (normName.includes('chevron') || normName.includes('শেভরণ')) {
    return { lat: 22.3627, lng: 91.8248 };
  }
  if (normName.includes('epic') || normName.includes('এপিক')) {
    return { lat: 22.3642, lng: 91.8252 };
  }
  if (normName.includes('evercare') || normName.includes('এভারকেয়ার')) {
    return { lat: 22.4042, lng: 91.8488 };
  }
  if (normName.includes('imperial') || normName.includes('ইম্পেরিয়াল')) {
    return { lat: 22.3705, lng: 91.7915 };
  }
  if (normName.includes('max') || normName.includes('ম্যাক্স')) {
    return { lat: 22.3488, lng: 91.8242 };
  }
  if (normName.includes('national') || normName.includes('ন্যাশনাল')) {
    return { lat: 22.3495, lng: 91.8240 };
  }
  if (normName.includes('metropolitan') || normName.includes('মেট্রোপলিটন')) {
    return { lat: 22.3615, lng: 91.8245 };
  }
  if (normName.includes('medical centre') || normName.includes('মেডিকেল সেন্টার')) {
    return { lat: 22.3612, lng: 91.8228 };
  }
  if (normName.includes('popular') || normName.includes('পপুলার')) {
    return { lat: 22.3625, lng: 91.8255 };
  }
  if (normName.includes('treatment') || normName.includes('ট্রিটমেন্ট')) {
    return { lat: 22.3622, lng: 91.8250 };
  }
  if (normName.includes('sensiv') || normName.includes('সেনসিভ')) {
    return { lat: 22.3525, lng: 91.8345 };
  }
  if (normName.includes('maa-o-shishu') || normName.includes('মা ও শিশু')) {
    return { lat: 22.3255, lng: 91.8080 };
  }
  if (normName.includes('lions eye') || normName.includes('লায়ন্স')) {
    return { lat: 22.3645, lng: 91.8150 };
  }
  if (normName.includes('al-amin') || normName.includes('আল আমিন')) {
    return { lat: 22.3635, lng: 91.8262 };
  }
  if (normName.includes('delta') || normName.includes('ডেল্টা')) {
    return { lat: 22.3605, lng: 91.8310 };
  }

  // Fallbacks by neighborhood in Chattogram with small deterministic dispersion
  let base = { lat: 22.3596, lng: 91.8286 };
  if (normArea.includes('panchlaish') || normArea.includes('পাঁচলাইশ')) base = { lat: 22.3620, lng: 91.8260 };
  else if (normArea.includes('o.r. nizam') || normArea.includes('নিজাম')) base = { lat: 22.3610, lng: 91.8235 };
  else if (normArea.includes('chawkbazar') || normArea.includes('চকবাজার')) base = { lat: 22.3585, lng: 91.8385 };
  else if (normArea.includes('gec') || normArea.includes('জিইসি')) base = { lat: 22.3615, lng: 91.8175 };
  else if (normArea.includes('agrabad') || normArea.includes('আগ্রাবাদ')) base = { lat: 22.3270, lng: 91.8125 };
  else if (normArea.includes('mehedibag') || normArea.includes('মেহেদীবাগ')) base = { lat: 22.3490, lng: 91.8245 };
  else if (normArea.includes('jamal khan') || normArea.includes('জামাল খান')) base = { lat: 22.3530, lng: 91.8340 };
  else if (normArea.includes('momin road') || normArea.includes('মমিন রোড')) base = { lat: 22.3450, lng: 91.8355 };
  else if (normArea.includes('halishahar') || normArea.includes('হালিশহর')) base = { lat: 22.3380, lng: 91.7760 };
  else if (normArea.includes('nasirabad') || normArea.includes('নাসিরাবাদ')) base = { lat: 22.3670, lng: 91.8200 };

  // Apply slight deterministic offset so multiple unmapped clinics don't stack directly on single pixel
  let hash = 0;
  for (let i = 0; i < normName.length; i++) {
    hash = (hash << 5) - hash + normName.charCodeAt(i);
    hash |= 0;
  }
  const latOffset = ((Math.abs(hash) % 15) - 7) * 0.0003;
  const lngOffset = ((Math.abs(hash >> 3) % 15) - 7) * 0.0003;

  return { lat: base.lat + latOffset, lng: base.lng + lngOffset };
}

export function calculateDistanceKm(
  p1OrLat1: { lat: number; lng: number } | number,
  p2OrLon1: { lat: number; lng: number } | number,
  lat2?: number,
  lon2?: number
): number {
  let lat1Num: number;
  let lon1Num: number;
  let lat2Num: number;
  let lon2Num: number;

  if (typeof p1OrLat1 === 'object' && typeof p2OrLon1 === 'object') {
    lat1Num = p1OrLat1.lat;
    lon1Num = p1OrLat1.lng;
    lat2Num = p2OrLon1.lat;
    lon2Num = p2OrLon1.lng;
  } else {
    lat1Num = p1OrLat1 as number;
    lon1Num = p2OrLon1 as number;
    lat2Num = lat2 ?? 0;
    lon2Num = lon2 ?? 0;
  }

  const R = 6371; // Earth radius in km
  const dLat = ((lat2Num - lat1Num) * Math.PI) / 180;
  const dLon = ((lon2Num - lon1Num) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1Num * Math.PI) / 180) *
      Math.cos((lat2Num * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Number((R * c).toFixed(1));
}
