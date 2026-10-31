import React, { useEffect, useRef, useState, useMemo } from 'react';
import L from 'leaflet';
import { Doctor, Chamber } from '../types/doctor';
import { getChamberCoords, calculateDistanceKm, CHATTOGRAM_HUBS } from '../lib/geoDistance';
import { MapPin, Navigation, Phone, ExternalLink, ChevronRight, User, Clock, Hospital, RotateCcw, Compass } from 'lucide-react';

interface DoctorMapViewProps {
  doctors: Doctor[];
  userCoords: { lat: number; lng: number } | null;
  lang: 'bn' | 'en';
  onSelectDoctor: (slug: string) => void;
  selectedArea: string;
  onSelectArea?: (area: string) => void;
  onOpenLocationModal?: () => void;
}

interface ChamberCluster {
  id: string;
  name: string;
  area: string;
  address: string;
  lat: number;
  lng: number;
  doctors: Array<{
    doctor: Doctor;
    chamber: Chamber;
  }>;
}

// Format 24-hr time string to 12-hr AM/PM format
function formatTime12(timeStr: string, lang: 'bn' | 'en'): string {
  if (!timeStr) return '';
  const [hStr, mStr] = timeStr.split(':');
  const h = parseInt(hStr, 10);
  const m = parseInt(mStr || '0', 10);
  if (isNaN(h)) return timeStr;
  const ap = h >= 12 ? (lang === 'bn' ? 'সন্ধ্যা' : 'PM') : (lang === 'bn' ? 'সকাল' : 'AM');
  const h12 = h % 12 || 12;
  const mFmt = m > 0 ? `:${String(m).padStart(2, '0')}` : '';
  return `${h12}${mFmt} ${ap}`;
}

export const DoctorMapView: React.FC<DoctorMapViewProps> = ({
  doctors,
  userCoords,
  lang,
  onSelectDoctor,
  selectedArea,
  onSelectArea,
  onOpenLocationModal
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);

  const [selectedChamberId, setSelectedChamberId] = useState<string | null>(null);
  const [activeHub, setActiveHub] = useState<string>('all');

  // Group doctors by chamber location
  const chamberClusters = useMemo(() => {
    const map = new Map<string, ChamberCluster>();

    doctors.forEach(doc => {
      doc.ch.forEach(ch => {
        // If an area filter is active in parent, respect it
        if (selectedArea && selectedArea !== 'All' && ch.area !== selectedArea) {
          return;
        }

        const coords = getChamberCoords(ch.area, ch.name);
        // Round lat/lng slightly to group exact same address/hospital
        const key = `${ch.name.trim().toLowerCase()}_${ch.area.trim().toLowerCase()}`;

        if (!map.has(key)) {
          map.set(key, {
            id: key,
            name: ch.name,
            area: ch.area,
            address: ch.address,
            lat: coords.lat,
            lng: coords.lng,
            doctors: []
          });
        }

        const cluster = map.get(key)!;
        // Avoid duplicate entry of same doctor in same chamber
        if (!cluster.doctors.some(d => d.doctor.slug === doc.slug)) {
          cluster.doctors.push({ doctor: doc, chamber: ch });
        }
      });
    });

    return Array.from(map.values());
  }, [doctors, selectedArea]);

  // Selected chamber object
  const activeCluster = useMemo(() => {
    if (!selectedChamberId) return null;
    return chamberClusters.find(c => c.id === selectedChamberId) || null;
  }, [selectedChamberId, chamberClusters]);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const defaultCenter: [number, number] = userCoords
        ? [userCoords.lat, userCoords.lng]
        : [22.3596, 91.8286]; // Chattogram center

      const map = L.map(mapContainerRef.current, {
        center: defaultCenter,
        zoom: userCoords ? 14 : 13,
        zoomControl: false,
        attributionControl: true
      });

      // Add clean zoom control at bottom right
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // OpenStreetMap Tiles (Fast, high-contrast, free)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const markersLayer = L.layerGroup().addTo(map);
      markersLayerRef.current = markersLayer;
      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update User GPS Marker
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (userMarkerRef.current) {
      userMarkerRef.current.remove();
      userMarkerRef.current = null;
    }

    if (userCoords) {
      const userHtml = `
        <div class="relative flex items-center justify-center">
          <span class="absolute w-8 h-8 rounded-full bg-cyan-500/30 animate-ping"></span>
          <span class="w-4 h-4 rounded-full bg-[#0E7490] border-2 border-white shadow-md"></span>
        </div>
      `;
      const userIcon = L.divIcon({
        html: userHtml,
        className: 'user-location-marker',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const marker = L.marker([userCoords.lat, userCoords.lng], {
        icon: userIcon,
        zIndexOffset: 1000
      }).addTo(map);

      marker.bindPopup(`
        <div class="p-3 text-center">
          <div class="font-bold text-xs text-slate-800">
            ${lang === 'bn' ? '📍 আপনার বর্তমান অবস্থান' : '📍 Your Current Location'}
          </div>
          <div class="text-[11px] text-slate-500 mt-0.5">
            ${lang === 'bn' ? 'এই অবস্থান থেকে নিকটবর্তী চেম্বারের দূরত্ব পরিমাপ করা হয়েছে।' : 'Distances are measured from here.'}
          </div>
        </div>
      `);

      userMarkerRef.current = marker;
    }
  }, [userCoords, lang]);

  // Render Chamber Markers
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;
    if (!map || !markersLayer) return;

    markersLayer.clearLayers();

    chamberClusters.forEach(cluster => {
      const isSelected = selectedChamberId === cluster.id;
      const count = cluster.doctors.length;

      // Custom HTML Marker Icon styled with Tailwind colors
      const iconHtml = `
        <div class="relative group cursor-pointer transition-transform duration-200 ${isSelected ? 'scale-125 z-50' : 'hover:scale-110'}">
          <div class="flex items-center justify-center w-9 h-9 rounded-full ${isSelected ? 'bg-amber-600 ring-4 ring-amber-300' : 'bg-[#0E7490] ring-2 ring-white'} shadow-lg text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 10.5h-5.5V5h-3v5.5H5v3h5.5V19h3v-5.5H19v-3z"/>
            </svg>
          </div>
          ${count > 1 ? `
            <span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 bg-red-600 text-white text-[11px] font-bold rounded-full flex items-center justify-center ring-2 ring-white shadow-xs">
              ${count}
            </span>
          ` : ''}
          <div class="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 bg-slate-900/90 text-white text-[10px] font-semibold rounded-md whitespace-nowrap shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            ${cluster.name} (${count} ${lang === 'bn' ? 'ডাক্তার' : 'docs'})
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: iconHtml,
        className: 'custom-chamber-pin',
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -20]
      });

      const marker = L.marker([cluster.lat, cluster.lng], { icon: customIcon });

      // Click Marker handler
      marker.on('click', () => {
        setSelectedChamberId(cluster.id);
        map.flyTo([cluster.lat, cluster.lng], Math.max(map.getZoom(), 15), { duration: 0.6 });
      });

      markersLayer.addLayer(marker);
    });

    // Auto fit bounds if chambers exist
    if (chamberClusters.length > 0 && !selectedChamberId) {
      const bounds = L.latLngBounds(chamberClusters.map(c => [c.lat, c.lng]));
      if (userCoords) {
        bounds.extend([userCoords.lat, userCoords.lng]);
      }
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
    }
  }, [chamberClusters, selectedChamberId, userCoords, lang]);

  // Recenter to user location
  const handleRecenterUser = () => {
    if (!mapInstanceRef.current) return;
    if (userCoords) {
      mapInstanceRef.current.flyTo([userCoords.lat, userCoords.lng], 15, { duration: 0.8 });
    } else if (onOpenLocationModal) {
      onOpenLocationModal();
    }
  };

  // Switch to specific Chattogram hub
  const handleHubSelect = (hubKey: string) => {
    setActiveHub(hubKey);
    const hub = CHATTOGRAM_HUBS.find(h => h.key === hubKey);
    if (hub && mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([hub.lat, hub.lng], hub.zoom, { duration: 0.8 });
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col">
      {/* Top Controls: Area Hub Chips & Info */}
      <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-xs font-bold text-slate-500 shrink-0 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-cyan-700" />
            <span>{lang === 'bn' ? 'এলাকা হাব:' : 'Hubs:'}</span>
          </span>
          {CHATTOGRAM_HUBS.map(hub => {
            const isActive = activeHub === hub.key;
            return (
              <button
                key={hub.key}
                type="button"
                onClick={() => handleHubSelect(hub.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#0E7490] text-white shadow-2xs'
                    : 'bg-white border border-slate-200 hover:border-cyan-300 text-slate-700 hover:bg-cyan-50'
                }`}
              >
                {lang === 'bn' ? hub.nameBn : hub.nameEn}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
          <span className="text-xs font-medium text-slate-500 num">
            {lang === 'bn'
              ? `${chamberClusters.length}টি চেম্বার স্থান`
              : `${chamberClusters.length} chamber spots`}
          </span>

          <button
            type="button"
            onClick={handleRecenterUser}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-cyan-400 text-xs font-bold text-cyan-900 shadow-2xs hover:bg-cyan-50 transition-all cursor-pointer"
            title={lang === 'bn' ? 'আমার অবস্থানে জুম করুন' : 'Recenter on my location'}
          >
            <Navigation className="w-3.5 h-3.5 text-cyan-700" />
            <span>{userCoords ? (lang === 'bn' ? 'আমার অবস্থান' : 'My Location') : (lang === 'bn' ? 'লোকেশন চালু করুন' : 'Enable GPS')}</span>
          </button>
        </div>
      </div>

      {/* Main Map Canvas and Drawer Layout */}
      <div className="relative w-full h-[520px] sm:h-[600px] bg-slate-100">
        <div ref={mapContainerRef} className="w-full h-full z-0" />

        {/* Floating Quick Legend */}
        <div className="absolute top-3 right-3 z-10 bg-white/95 backdrop-blur-xs px-3 py-2 rounded-xl border border-slate-200/90 shadow-md text-[11px] font-semibold text-slate-700 hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#0E7490]"></span>
            <span>{lang === 'bn' ? 'ডাক্তার চেম্বার' : 'Chamber'}</span>
          </div>
          {userCoords && (
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-cyan-500 ring-2 ring-cyan-200"></span>
              <span>{lang === 'bn' ? 'আপনার লোকেশন' : 'Your GPS'}</span>
            </div>
          )}
        </div>

        {/* Selected Chamber Detail Card (Overlaid on Bottom/Right of Map) */}
        {activeCluster && (
          <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-md z-20 bg-white rounded-2xl border border-slate-200 shadow-2xl p-4 sm:p-5 max-h-[360px] overflow-y-auto animate-fade-in">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E7490] bg-cyan-50 px-2 py-0.5 rounded-md">
                  <Hospital className="w-3.5 h-3.5" />
                  <span>{activeCluster.area}</span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mt-1">
                  {activeCluster.name}
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 shrink-0 text-slate-400" />
                  <span>{activeCluster.address}</span>
                </p>
                {userCoords && (
                  <p className="text-xs font-bold text-cyan-800 mt-1 num">
                    📍 {calculateDistanceKm(userCoords, { lat: activeCluster.lat, lng: activeCluster.lng })} km {lang === 'bn' ? 'দূরত্বে' : 'away'}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-1">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${activeCluster.lat},${activeCluster.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 hover:bg-cyan-50 hover:text-cyan-800 text-slate-600 transition-colors"
                  title={lang === 'bn' ? 'গুগল ম্যাপে ডিরেকশন' : 'Google Maps Directions'}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedChamberId(null)}
                  className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Doctors Practicing at this Chamber */}
            <div className="mt-3 space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {lang === 'bn'
                  ? `এখানে রোগী দেখেন (${activeCluster.doctors.length} জন):`
                  : `Practicing Specialists (${activeCluster.doctors.length}):`}
              </div>

              {activeCluster.doctors.map(({ doctor, chamber }) => (
                <div
                  key={doctor.slug}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-cyan-50/50 border border-slate-200/80 transition-all flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm text-slate-900 truncate">
                        {lang === 'bn' ? doctor.name : doctor.nameEn}
                      </h4>
                      <p className="text-xs font-semibold text-[#0E7490]">
                        {lang === 'bn' ? doctor.specialtyBn : doctor.specialtyEn}
                      </p>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {doctor.degrees}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectDoctor(doctor.slug)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-cyan-400 text-xs font-bold text-slate-800 hover:text-[#0E7490] transition-colors shrink-0 shadow-2xs"
                    >
                      <span>{lang === 'bn' ? 'প্রোফাইল' : 'View'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-600 pt-1.5 border-t border-slate-200/60">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{formatTime12(chamber.start, lang)} – {formatTime12(chamber.end, lang)}</span>
                    </span>

                    {chamber.serial && chamber.serial[0] && (
                      <a
                        href={`tel:${chamber.serial[0].replace(/\D/g, '')}`}
                        className="inline-flex items-center gap-1 text-[#047857] font-bold hover:underline num"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{chamber.serial[0]}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Hint Banner */}
      <div className="p-3 bg-slate-50 text-xs text-slate-600 border-t border-slate-200 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#0E7490] shrink-0" />
          <span>
            {lang === 'bn'
              ? 'চেম্বারের যেকোনো মার্কার পিনে ক্লিক করে বিস্তারিত সময়সূচি ও ডাক্তারের তালিকা দেখুন।'
              : 'Click any chamber marker pin to view practicing specialists, timings, and serial numbers.'}
          </span>
        </div>
        {selectedArea !== 'All' && onSelectArea && (
          <button
            type="button"
            onClick={() => onSelectArea('All')}
            className="text-xs font-bold text-cyan-700 hover:underline inline-flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{lang === 'bn' ? 'সব এলাকা দেখুন' : 'Show all areas'}</span>
          </button>
        )}
      </div>
    </div>
  );
};
