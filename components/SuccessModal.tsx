import React from 'react';
import { Heart, CheckCircle, Phone, X } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  victimName: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, victimName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden transform scale-100 animate-in zoom-in-95 duration-200 relative">
        
        {/* Header with Warm Color */}
        <div className="bg-gradient-to-r from-orange-100 to-red-50 p-6 text-center border-b border-orange-200 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm relative">
             <Heart className="text-red-500 fill-red-500 animate-pulse" size={40} />
             <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1.5 border-2 border-white">
                <CheckCircle size={16} className="text-white" />
             </div>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-800">
            ขอให้คุณอุ่นใจ...<br/>เราได้รับข้อมูลแล้ว
          </h3>
        </div>

        {/* Content */}
        <div className="p-8 text-center space-y-6">
          <div>
            <p className="text-slate-600 leading-relaxed text-lg">
              สวัสดีคุณ <span className="font-bold text-slate-900 underline decoration-red-300 decoration-2 underline-offset-2">{victimName}</span>
            </p>
            <p className="text-slate-600 mt-4 leading-relaxed">
              ในนาทีวิกฤตแบบนี้ เราเข้าใจถึงความกังวลใจของคุณดีที่สุด ข้อมูลของคุณถูกส่งถึงมือทีมงาน 3T ผู้เชี่ยวชาญเรียบร้อยแล้ว
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100 flex items-start gap-4 text-left">
            <div className="bg-green-100 p-2 rounded-full text-green-700 shrink-0">
                <Phone size={24} />
            </div>
            <div>
                <h4 className="font-bold text-green-800 text-lg">กำลังประสานงานด่วน!</h4>
                <p className="text-green-700 text-sm mt-1">
                    เจ้าหน้าที่กำลังจัดลำดับคิวและจะรีบติดต่อกลับหาคุณ ภายในเวลา <span className="font-bold underline">5 - 10 นาที</span>
                </p>
            </div>
          </div>

          <p className="text-slate-400 text-sm">
             *กรุณารับสายโทรศัพท์จากเจ้าหน้าที่ หรือตรวจสอบ Line ของคุณ
          </p>

          <button
            onClick={onClose}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.02]"
          >
            รับทราบและรอดำเนินการ
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;