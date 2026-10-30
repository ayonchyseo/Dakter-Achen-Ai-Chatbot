export function getChamberCoords(area: string, chamberName: string): { lat: number; lng: number } {
  const normArea = (area || '').toLowerCase();
  const normName = (chamberName || '').toLowerCase();

  // Known major medical spots in Chattogram
  if (normName.includes('cmch') || normName.includes('মেডিকেল') || normName.includes('medical college')) {
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

  // Fallbacks by neighborhood in Chattogram
  if (normArea.includes('panchlaish') || normArea.includes('পাঁচলাইশ')) return { lat: 22.3620, lng: 91.8260 };
  if (normArea.includes('o.r. nizam') || normArea.includes('নিজাম')) return { lat: 22.3610, lng: 91.8235 };
  if (normArea.includes('chawkbazar') || normArea.includes('চকবাজার')) return { lat: 22.3585, lng: 91.8385 };
  if (normArea.includes('gec') || normArea.includes('জিইসি')) return { lat: 22.3615, lng: 91.8175 };
  if (normArea.includes('agrabad') || normArea.includes('আগ্রাবাদ')) return { lat: 22.3270, lng: 91.8125 };
  if (normArea.includes('mehedibag') || normArea.includes('মেহেদীবাগ')) return { lat: 22.3490, lng: 91.8245 };
  if (normArea.includes('jamal khan') || normArea.includes('জামাল খান')) return { lat: 22.3530, lng: 91.8340 };
  if (normArea.includes('momin road') || normArea.includes('মমিন রোড')) return { lat: 22.3450, lng: 91.8355 };
  if (normArea.includes('halishahar') || normArea.includes('হালিশহর')) return { lat: 22.3380, lng: 91.7760 };

  // Default Chattogram Medical Center Center
  return { lat: 22.3596, lng: 91.8286 };
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
