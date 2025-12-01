import { FormData } from '../types';

const STORAGE_KEY = 'somchok_emergency_data';

export interface VictimRecord extends FormData {
  id: string;
  timestamp: number;
  status: 'PENDING' | 'CONTACTED' | 'COMPLETED';
}

export const StorageService = {
  saveSubmission: (data: FormData): VictimRecord => {
    const records = StorageService.getSubmissions();
    const newRecord: VictimRecord = {
      ...data,
      id: Date.now().toString(),
      timestamp: Date.now(),
      status: 'PENDING'
    };
    
    records.unshift(newRecord); // Add to top
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    return newRecord;
  },

  getSubmissions: (): VictimRecord[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  updateStatus: (id: string, status: VictimRecord['status']) => {
    const records = StorageService.getSubmissions();
    const index = records.findIndex(r => r.id === id);
    if (index !== -1) {
      records[index].status = status;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    }
  },
  
  clearAll: () => {
      localStorage.removeItem(STORAGE_KEY);
  }
};