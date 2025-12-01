import React from 'react';
import { AlertTriangle, Truck, ShieldCheck, Car, Phone, MessageCircle } from 'lucide-react';

interface HeroProps {
  onScrollToForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToForm }) => {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Top Bar Logo */}
      <div className="bg-slate-900 text-white p-4 flex items-center justify-between shadow-md relative z-20">
        <div className="flex items-center gap-3">
          {/* Logo Box */}
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-slate-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
            <span className="font-black text-xl italic leading-none flex items-start translate-y-0.5">
              3T<span className="text-[0.65rem] -mt-1 not-italic font-bold">d</span>
            </span>
          </div>
          <span className="font-bold text-lg md:text-xl tracking-tight text-slate-100">ศูนย์ช่วยเหลือฉุกเฉิน</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
           <a href="tel:0633435534" className="flex items-center gap-2 hover:text-green-400 transition-colors bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
              <Phone size={14} /> 063-343-5534
           </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 text-center">
        {/* Urgent Badge */}
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-bold mb-8 animate-pulse border border-red-200 shadow-sm">
          <AlertTriangle size={16} />
          <span>บริการด่วน 24 ชม. พื้นที่หาดใหญ่-สงขลา</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.2] mb-6 tracking-tight">
          <span className="text-red-600 block mb-1">รถน้ำท่วม?</span>
          กู้รถ - เคลมประกัน - หารถใหม่
          <span className="block text-slate-700 text-3xl md:text-5xl mt-4 font-bold">
            จบในที่เดียว
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          บริการรถสไลด์ด่วนเข้าพื้นที่ พร้อมทีมงานช่วยดูหน้ากรมธรรม์ <br className="hidden md:block" />
          เพื่อรักษาสิทธิ์สูงสุดของคุณ ดูแลครบวงจร ไม่ต้องปวดหัวหลายที่
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onScrollToForm}
            className="w-full md:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xl font-bold py-4 px-10 rounded-xl shadow-lg shadow-red-200 transform hover:scale-105 transition-all flex items-center justify-center gap-2 animate-bounce-slow ring-4 ring-red-50"
          >
            🆘 แจ้งขอความช่วยเหลือทันที
          </button>
          
          <div className="flex gap-3 w-full md:w-auto">
             <a href="#" className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl shadow-md flex items-center justify-center gap-2 transition-transform hover:-translate-y-1">
                <MessageCircle size={20} /> Messenger
             </a>
             <a href="#" className="flex-1 md:flex-none bg-[#06C755] hover:bg-[#05b54d] text-white font-semibold py-4 px-6 rounded-xl shadow-md flex items-center justify-center gap-2 transition-transform hover:-translate-y-1">
                LINE: @somchok.com
             </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-red-200 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                <Truck size={24} />
              </div>
              บริการรถสไลด์
            </div>
            <p className="text-slate-600 leading-relaxed">เข้าพื้นที่ได้ทันที จัดการจราจรให้ แม้จุดรับยากลำบากเราพร้อมลุย</p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <ShieldCheck size={24} />
              </div>
              ผู้ช่วยเคลมประกัน
            </div>
            <p className="text-slate-600 leading-relaxed">เช็กสิทธิ์กรมธรรม์ เดินเรื่อง Fast Track ใช้แค่รูปถ่าย รักษาสิทธิ์สูงสุด</p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-green-200 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 text-slate-900 font-bold text-xl mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                <Car size={24} />
              </div>
              หารถใหม่ทันใจ
            </div>
            <p className="text-slate-600 leading-relaxed">ถ้ารถพังหนัก เราช่วยหารถมือ 1 หรือมือ 2 สภาพดี ให้คุณมีใช้ทำมาหากินต่อ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;