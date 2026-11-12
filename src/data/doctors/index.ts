import { Doctor } from '../../types/doctor';
import { MEDICINE_DOCTORS } from './medicine';
import { CHEST_DOCTORS } from './chest';
import { GASTRO_DOCTORS } from './gastro';
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
import { CANCER_DOCTORS } from './cancer';
import { ENDOCRINE_DOCTORS } from './endocrine';
import { PHYSMED_DOCTORS } from './physmed';
import { PSYCHIATRY_DOCTORS } from './psychiatry';
import { SURGERY_DOCTORS } from './surgery';
import { ADDITIONAL_100_DOCTORS } from './additional100Doctors';
import { EXPANDED_DOCTORS_DATASET } from './expandedDoctorsGenerator';

export const INITIAL_DOCTORS: Doctor[] = [
  ...MEDICINE_DOCTORS,
  ...CHEST_DOCTORS,
  ...GASTRO_DOCTORS,
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
  ...CANCER_DOCTORS,
  ...ENDOCRINE_DOCTORS,
  ...PHYSMED_DOCTORS,
  ...PSYCHIATRY_DOCTORS,
  ...SURGERY_DOCTORS,
  ...EXPANDED_DOCTORS_DATASET
];

export {
  MEDICINE_DOCTORS,
  CHEST_DOCTORS,
  GASTRO_DOCTORS,
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
  CANCER_DOCTORS,
  ENDOCRINE_DOCTORS,
  PHYSMED_DOCTORS,
  PSYCHIATRY_DOCTORS,
  SURGERY_DOCTORS,
  ADDITIONAL_100_DOCTORS,
  EXPANDED_DOCTORS_DATASET
};
