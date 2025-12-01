import React, { useState, FormEvent } from 'react';
import { FormData, WaterLevel, KeyStatus, DamageLevel } from '../types';
import { MapPin, Camera, Send, Loader2 } from 'lucide-react';
import { StorageService } from '../services/storage';
import SuccessModal from './SuccessModal';

const AssistanceForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [lastSubmittedName, setLastSubmittedName] = useState('');
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    lineId: '',
    locationUrl: '',
    locationNote: '',
    waterLevel: '',
    carDetails: '',
    licensePlate: '',
    keyStatus: '',
    damageLevel: '',
    needs: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const newNeeds = checked
        ? [...prev.needs, value]
        : prev.needs.filter(n => n !== value);
      return { ...prev, needs: newNeeds };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate Network Delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Save Data to "Backend"
    StorageService.saveSubmission(formData);
    setLastSubmittedName(formData.fullName);
    
    setLoading(false);
    setShowModal(true);
    
    // Optional: Clear form here or keep it
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Reset form after closing modal
    setFormData({
      fullName: '',
      phoneNumber: '',
      lineId: '',
      locationUrl: '',
      locationNote: '',
      waterLevel: '',
      carDetails: '',
      licensePlate: '',
      keyStatus: '',
      damageLevel: '',
      needs: []
    });
    // Scroll to top or do other cleanup
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SuccessModal 
        isOpen={showModal} 
        onClose={handleCloseModal} 
        victimName={lastSubmittedName} 
      />

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-slate-900 p-6 text-white text-center">
          <h2 className="text-2xl font-bold">กรอกข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับ</h2>
          <p className="text-slate-300 text-sm mt-1">เราจะประเมินสถานการณ์และจัดเตรียมเครื่องมือให้เหมาะสม</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
          
          {/* Section A: Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 border-l-4 border-red-600 pl-3">A. ข้อมูลการติดต่อ</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">ชื่อ-นามสกุล</label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="สมชาย ใจดี"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">เบอร์โทรศัพท์ (สำคัญมาก)</label>
                <input
                  required
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="08x-xxx-xxxx"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Line ID (เพื่อส่งรูปเพิ่มเติม)</label>
                <input
                  type="text"
                  name="lineId"
                  value={formData.lineId}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="@userid"
                />
              </div>
            </div>
          </div>

          {/* Section B: Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 border-l-4 border-red-600 pl-3">B. พิกัดและสถานการณ์</h3>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1">
                <MapPin size={16}/> ลิงก์ตำแหน่งจาก Google Maps
              </label>
              <input
                required
                type="url"
                name="locationUrl"
                value={formData.locationUrl}
                onChange={handleChange}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none bg-slate-50"
                placeholder="https://maps.app.goo.gl/..."
              />
              <p className="text-xs text-slate-500 mt-1">*เปิด Google Maps {'>'} กดแชร์ตำแหน่ง {'>'} คัดลอกลิงก์</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">จุดสังเกตใกล้เคียง</label>
              <textarea
                rows={2}
                name="locationNote"
                value={formData.locationNote}
                onChange={handleChange}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="เช่น ตรงข้ามเซเว่น, ปากซอยมีร้านยา..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">ระดับน้ำปัจจุบัน</label>
              <select
                required
                name="waterLevel"
                value={formData.waterLevel}
                onChange={handleChange}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none bg-white"
              >
                <option value="">-- กรุณาระบุระดับน้ำ --</option>
                {Object.values(WaterLevel).map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Section C: Car Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 border-l-4 border-red-600 pl-3">C. ข้อมูลรถและความเสียหาย</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">รุ่น / ปี / สี</label>
                <input
                  required
                  type="text"
                  name="carDetails"
                  value={formData.carDetails}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="Toyota Altis 2020 สีขาว"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">ทะเบียนรถ</label>
                <input
                  required
                  type="text"
                  name="licensePlate"
                  value={formData.licensePlate}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="กข 1234 สงขลา"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">สถานะกุญแจรถ</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.values(KeyStatus).map((status) => (
                  <label key={status} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${formData.keyStatus === status ? 'bg-red-50 border-red-500' : 'hover:bg-slate-50'}`}>
                    <input
                      type="radio"
                      name="keyStatus"
                      value={status}
                      checked={formData.keyStatus === status}
                      onChange={handleChange}
                      className="w-4 h-4 text-red-600 focus:ring-red-500"
                    />
                    <span className="ml-2 text-sm text-slate-700">{status}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">ระดับความเสียหาย (ประเมินด้วยสายตา)</label>
              <div className="space-y-2">
                {Object.values(DamageLevel).map((level) => (
                  <label key={level} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${formData.damageLevel === level ? 'bg-red-50 border-red-500' : 'hover:bg-slate-50'}`}>
                    <input
                      type="radio"
                      name="damageLevel"
                      value={level}
                      checked={formData.damageLevel === level}
                      onChange={handleChange}
                      className="w-4 h-4 text-red-600 focus:ring-red-500"
                    />
                    <span className="ml-2 text-sm text-slate-700">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Image Upload Simulation */}
            <div className="bg-slate-50 p-4 rounded-lg border border-dashed border-slate-300">
              <div className="flex flex-col items-center justify-center text-slate-500 gap-2">
                  <Camera size={32} />
                  <span className="text-sm font-medium">รูปทะเบียนรถ / สภาพรถภายนอก / กรมธรรม์</span>
                  <input type="file" multiple className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100 mt-2"/>
              </div>
            </div>
          </div>

          {/* Section D: Needs */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 border-l-4 border-red-600 pl-3">D. สิ่งที่ต้องการให้ช่วยด่วนที่สุด</h3>
            <div className="space-y-3">
              {[
                "ต้องการรถสไลด์ยกรถออกด่วน",
                "ต้องการทีมงานช่วยเคลมประกัน (Fast Track)",
                "ต้องการหารถคันใหม่มาใช้ทำงานทันที",
                "ปรึกษาเรื่องซ่อม vs คืนซาก"
              ].map((need, index) => (
                <label key={index} className="flex items-start p-2 cursor-pointer">
                  <input
                      type="checkbox"
                      value={need}
                      checked={formData.needs.includes(need)}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-5 h-5 text-red-600 rounded focus:ring-red-500 border-gray-300"
                  />
                  <span className="ml-3 text-slate-700">{need}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <><Loader2 className="animate-spin" /> กำลังส่งข้อมูล...</>
            ) : (
              <><Send size={24} /> ส่งแจ้งเหตุทันที</>
            )}
          </button>

        </form>
      </div>
    </>
  );
};

export default AssistanceForm;