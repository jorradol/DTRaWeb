export enum WaterLevel {
  RECEDED = 'น้ำลดแล้ว (รถกระบะเข้าได้)',
  HIGH = 'ยังท่วมสูง (ต้องใช้รถยกสูงพิเศษ)',
  SUBMERGED = 'ท่วมมิดคัน/เข้าถึงยาก'
}

export enum KeyStatus {
  WITH_OWNER = 'กุญแจอยู่ที่ตัว (พร้อมเปิดรถ)',
  MISSING = 'ไม่มีกุญแจ/กุญแจหาย (รถล็อกอยู่)'
}

export enum DamageLevel {
  LEVEL_A = 'Level A: ท่วมถึงพื้นรถ/พรม',
  LEVEL_B = 'Level B: ท่วมถึงเบาะนั่ง',
  LEVEL_C = 'Level C-D: ท่วมถึงคอนโซล/หน้าปัด',
  LEVEL_E = 'Level E: ท่วมมิดคัน'
}

export interface FormData {
  fullName: string;
  phoneNumber: string;
  lineId: string;
  locationUrl: string;
  locationNote: string;
  waterLevel: WaterLevel | '';
  carDetails: string; // Brand/Model/Year/Color
  licensePlate: string;
  keyStatus: KeyStatus | '';
  damageLevel: DamageLevel | '';
  needs: string[];
}