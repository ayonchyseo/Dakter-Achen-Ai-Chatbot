import { Doctor } from '../../types/doctor';
import { MEDICINE_DOCTORS } from './medicine';
import { HEART_DOCTORS } from './heart';
import { GYNAE_DOCTORS } from './gynae';
import { CHILD_DOCTORS } from './child';
import { EYE_DOCTORS } from './eye';
import { ENT_DOCTORS } from './ent';
import { ORTHO_DOCTORS } from './ortho';
import { SKIN_DOCTORS } from './skin';
import { DENTAL_DOCTORS } from './dental';
import { NEURO_DOCTORS } from './neuro';
import { KIDNEY_DOCTORS } from './kidney';
import { SURGERY_DOCTORS } from './surgery';

export const INITIAL_DOCTORS: Doctor[] = [
  ...MEDICINE_DOCTORS,
  ...HEART_DOCTORS,
  ...GYNAE_DOCTORS,
  ...CHILD_DOCTORS,
  ...EYE_DOCTORS,
  ...ENT_DOCTORS,
  ...ORTHO_DOCTORS,
  ...SKIN_DOCTORS,
  ...DENTAL_DOCTORS,
  ...NEURO_DOCTORS,
  ...KIDNEY_DOCTORS,
  ...SURGERY_DOCTORS
];

export {
  MEDICINE_DOCTORS,
  HEART_DOCTORS,
  GYNAE_DOCTORS,
  CHILD_DOCTORS,
  EYE_DOCTORS,
  ENT_DOCTORS,
  ORTHO_DOCTORS,
  SKIN_DOCTORS,
  DENTAL_DOCTORS,
  NEURO_DOCTORS,
  KIDNEY_DOCTORS,
  SURGERY_DOCTORS
};
