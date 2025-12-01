import React from 'react';
import { AlertOctagon, Zap, Ban, Truck } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section className="bg-amber-50 py-12 px-4 border-t border-b border-amber-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-900 mb-8 flex items-center justify-center gap-2">
          <AlertOctagon className="text-red-600" />
          ระหว่างรอเจ้าหน้าที่ ห้ามทำ 3 สิ่งนี้เด็ดขาด!
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
            <div className="flex items-center gap-2 mb-3 text-red-600 font-bold text-lg">
              <Ban size={24} /> ห้ามสตาร์ทเครื่องยนต์
            </div>
            <p className="text-slate-700">เสี่ยงก้านสูบหัก น้ำเข้าเครื่องยนต์เสียหายถาวร ค่าซ่อมหลักแสน</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
            <div className="flex items-center gap-2 mb-3 text-orange-600 font-bold text-lg">
              <Zap size={24} /> ห้ามบิดกุญแจเปิดไฟ
            </div>
            <p className="text-slate-700">ระบบไฟฟ้า ECU และกล่องควบคุมต่างๆ อาจลัดวงจรเสียหายทันที</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
            <div className="flex items-center gap-2 mb-3 text-yellow-600 font-bold text-lg">
              <Truck size={24} /> ห้ามลากรถผิดวิธี
            </div>
            <p className="text-slate-700">เกียร์ออโต้ / รถ EV ห้ามลากให้ล้อหมุนเด็ดขาด ต้องยกสไลด์เท่านั้น</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;