import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, MapPin, Building2, Eye } from 'lucide-react';
import { Chamber } from '../types/doctor';

import hospitalExteriorImg from '../assets/images/hospital_exterior_1793700713304.jpg';
import diagnosticExteriorImg from '../assets/images/diagnostic_exterior_1793700713907.jpg';
import receptionWaitingImg from '../assets/images/reception_waiting_1793700714225.jpg';
import consultationRoomImg from '../assets/images/consultation_room_1793700715942.jpg';
import diagnosticCorridorImg from '../assets/images/diagnostic_corridor_1793700716980.jpg';

export interface ChamberPhotoItem {
  url: string;
  titleBn: string;
  titleEn: string;
  captionBn: string;
  captionEn: string;
  tagBn: string;
  tagEn: string;
}

/**
 * Selects appropriate exterior & interior photos for a given chamber in Chattogram
 */
export function getChamberPhotos(chamber: Chamber): ChamberPhotoItem[] {
  const nameLower = chamber.name.toLowerCase();
  const isHospital =
    nameLower.includes('hospital') ||
    nameLower.includes('হসপিটাল') ||
    nameLower.includes('হাসপাতাল') ||
    nameLower.includes('medical centre') ||
    nameLower.includes('মেডিকেল সেন্টার') ||
    nameLower.includes('evercare') ||
    nameLower.includes('এভারকেয়ার') ||
    nameLower.includes('imperial') ||
    nameLower.includes('ইম্পেরিয়াল') ||
    nameLower.includes('parkview') ||
    nameLower.includes('পার্কভিউ') ||
    nameLower.includes('cscr') ||
    nameLower.includes('সিএসসিআর') ||
    nameLower.includes('max') ||
    nameLower.includes('ম্যাক্স') ||
    nameLower.includes('national') ||
    nameLower.includes('ন্যাশনাল');

  const exteriorImg = isHospital ? hospitalExteriorImg : diagnosticExteriorImg;
  const interiorSecondaryImg = isHospital ? consultationRoomImg : diagnosticCorridorImg;

  return [
    {
      url: exteriorImg,
      tagBn: 'বাইরের দৃশ্য (Exterior)',
      tagEn: 'Building Exterior',
      titleBn: `${chamber.name} — প্রধান ভবন ও প্রবেশপথ`,
      titleEn: `${chamber.name} — Main Building & Entrance`,
      captionBn: `${chamber.address} (${chamber.area})। রিকশা বা গাড়ি থেকে নেমে সরাসরি এই প্রধান গেট দিয়ে প্রবেশ করুন।`,
      captionEn: `Located at ${chamber.address} (${chamber.area}). Enter through the main ground-floor entrance.`
    },
    {
      url: receptionWaitingImg,
      tagBn: 'রিসেপশন ও ওয়েটিং',
      tagEn: 'Reception & Waiting',
      titleBn: `রিসেপশন ডেস্ক ও সিরিয়াল ওয়েটিং লাউঞ্জ`,
      titleEn: `Reception Desk & Patient Waiting Lounge`,
      captionBn: `চেম্বারে পৌঁছে নিচতলায় রিসেপশন বা তথ্যানুসন্ধান ডেস্কে ডাক্তারের রুম নম্বর ও সিরিয়াল টোকেন যাচাই করে নিন।`,
      captionEn: `Check the doctor's room number and serial token display at the reception desk upon arrival.`
    },
    {
      url: interiorSecondaryImg,
      tagBn: 'চেম্বার ও করিডোর',
      tagEn: 'Chamber Interior',
      titleBn: isHospital ? `বিশেষজ্ঞ কনসালটেশন চেম্বার কক্ষ` : `ডাক্তার চেম্বার করিডোর ও সহকারী কাউন্টার`,
      titleEn: isHospital ? `Specialist Consultation Room` : `Chamber Corridor & Assistant Counter`,
      captionBn: `চেম্বারের সামনে থাকা সিরিয়াল সহকারীর কাছে আপনার নাম ও পূর্বের প্রেসক্রিপশন/রিপোর্ট জমা দিন।`,
      captionEn: `Register your arrival and submit previous prescriptions or reports to the chamber assistant outside the room.`
    },
    {
      url: isHospital ? diagnosticCorridorImg : consultationRoomImg,
      tagBn: isHospital ? 'চেম্বার করিডোর' : 'কনসালটেশন কক্ষ',
      tagEn: isHospital ? 'Clinic Corridor' : 'Consultation Room',
      titleBn: isHospital ? `বহির্বিভাগ চেম্বার ফ্লোর ও সিরিয়াল ডেস্ক` : `বিশেষজ্ঞ চিকিৎসকের পরামর্শ কক্ষ`,
      titleEn: isHospital ? `Outpatient Chamber Floor & Serial Desk` : `Doctor Consultation Chamber`,
      captionBn: `${chamber.name}-এ শীতাতপ নিয়ন্ত্রিত ও পরিচ্ছন্ন পরিবেশে রোগীদের সেবা প্রদান করা হয়।`,
      captionEn: `Clean, air-conditioned consultation environment at ${chamber.name}.`
    }
  ];
}

interface ChamberPhotoGalleryProps {
  chamber: Chamber;
  lang: 'bn' | 'en';
  compact?: boolean;
}

export const ChamberPhotoGallery: React.FC<ChamberPhotoGalleryProps> = ({
  chamber,
  lang,
  compact = false
}) => {
  const photos = getChamberPhotos(chamber);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % photos.length);
  };

  return (
    <div className="pt-3 border-t border-slate-100">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-1.5">
          <Camera className="w-4 h-4 text-[#0E7490]" />
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
            {lang === 'bn'
              ? 'চেম্বার চেনার ফটো গ্যালারি (বাইরের ও ভেতরের দৃশ্য)'
              : 'Chamber Location Photo Gallery (Exterior & Interior)'}
          </h4>
        </div>
        <button
          type="button"
          onClick={() => openLightbox(0)}
          className="text-xs font-bold text-[#0E7490] hover:underline inline-flex items-center gap-1 cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{lang === 'bn' ? 'বড় করে দেখুন' : 'View Fullscreen'}</span>
        </button>
      </div>

      {/* Thumbnail Grid */}
      <div className={`grid ${compact ? 'grid-cols-3 gap-2' : 'grid-cols-2 sm:grid-cols-4 gap-2.5'}`}>
        {photos.slice(0, compact ? 3 : 4).map((photo, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => openLightbox(idx)}
            className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-4/3 text-left focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer shadow-2xs hover:shadow-md transition-all"
          >
            <img
              src={photo.url}
              alt={lang === 'bn' ? photo.titleBn : photo.titleEn}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/15 to-transparent" />
            <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md bg-slate-900/75 backdrop-blur-xs text-white text-[10px] font-bold">
              {lang === 'bn' ? photo.tagBn : photo.tagEn}
            </span>
            <div className="absolute bottom-1.5 left-2 right-2 text-white text-[11px] font-semibold leading-tight line-clamp-1">
              {lang === 'bn' ? photo.titleBn : photo.titleEn}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs text-cyan-300 font-bold">
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{chamber.name}</span>
                  <span>·</span>
                  <span>{lightboxIndex + 1} / {photos.length}</span>
                </div>
                <p className="text-xs text-slate-300 truncate flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>{chamber.address}, {chamber.area}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer"
                aria-label="Close gallery"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Active Image */}
            <div className="relative bg-slate-950 aspect-4/3 max-h-[65vh] w-full flex items-center justify-center overflow-hidden">
              <img
                src={photos[lightboxIndex].url}
                alt={lang === 'bn' ? photos[lightboxIndex].titleBn : photos[lightboxIndex].titleEn}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />

              {/* Prev / Next Controls */}
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#0E7490] text-white text-xs font-bold shadow-md">
                {lang === 'bn' ? photos[lightboxIndex].tagBn : photos[lightboxIndex].tagEn}
              </span>
            </div>

            {/* Caption & Thumbnails Strip */}
            <div className="p-4 bg-white space-y-3">
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {lang === 'bn' ? photos[lightboxIndex].titleBn : photos[lightboxIndex].titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {lang === 'bn' ? photos[lightboxIndex].captionBn : photos[lightboxIndex].captionEn}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-100 overflow-x-auto">
                {photos.map((thumb, tIdx) => (
                  <button
                    key={tIdx}
                    type="button"
                    onClick={() => setLightboxIndex(tIdx)}
                    className={`relative w-20 aspect-4/3 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                      tIdx === lightboxIndex ? 'border-[#0E7490] ring-2 ring-cyan-200 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={thumb.url}
                      alt={thumb.tagEn}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
