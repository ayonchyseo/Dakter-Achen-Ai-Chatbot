export interface Chamber {
  name: string;
  address: string;
  area: string;
  days: string[]; // ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  start: string;  // '18:00'
  end: string;    // '21:00'
  serial: string[];
  fee?: string;
}

export interface Doctor {
  slug: string;
  name: string;
  nameEn: string;
  ini: string;
  g: 'M' | 'F';
  rank: number;
  specialtyBn: string;
  specialtyEn: string;
  specialtyKey: string;
  degrees: string;
  designation: string;
  institution: string;
  img?: string;
  ch: Chamber[];
  verified: string;
}
