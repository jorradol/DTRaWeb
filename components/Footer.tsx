import React from 'react';
import { Phone, MapPin, ExternalLink, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-10">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center gap-3">
           <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-slate-900 shadow-inner">
                <span className="font-black text-xl italic leading-none flex items-start translate-y-0.5">
                  3T<span className="text-[0.65rem] -mt-1 not-italic font-bold">d</span>
                </span>
            </div>
             <h3 className="text-white text-2xl font-bold tracking-wide">Somchok Emergency Assist</h3>
           </div>
           <p className="text-sm text-slate-400 font-light">บริการด่วนด้วยใจ เพื่อคนไทยผู้ประสบภัยน้ำท่วม</p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-xl justify-center items-stretch">
          <a href="tel:0633435534" className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-xl font-bold flex flex-col items-center justify-center gap-1 transition-colors min-h-[80px] group shadow-lg shadow-red-900/20">
            <div className="flex items-center gap-2 text-sm opacity-90 group-hover:opacity-100">
                <Phone size={16} /> โทรสายด่วน
            </div>
            <span className="text-xl md:text-2xl leading-none">063-343-5534</span>
          </a>
          
          <a href="#" className="flex-1 bg-[#06C755] hover:bg-[#05b54d] text-white py-3 px-6 rounded-xl font-bold flex flex-col items-center justify-center gap-1 transition-colors min-h-[80px] shadow-lg shadow-green-900/20">
            <div className="flex items-center gap-2 text-sm opacity-90">
                <ExternalLink size={16} /> ติดต่อผ่านไลน์
            </div>
            <span className="text-lg md:text-xl leading-none">@somchok.com</span>
          </a>
        </div>

        {/* Location & Copyright */}
        <div className="w-full border-t border-slate-800 pt-8 flex flex-col items-center gap-4 relative">
          <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full text-sm">
            <MapPin size={16} className="text-red-500" />
            <span>พื้นที่ให้บริการ: หาดใหญ่, สงขลา และพื้นที่ใกล้เคียง</span>
          </div>
          
          <div className="text-xs text-slate-600 mt-2 font-medium">
              &copy; {new Date().getFullYear()} somchok.com. All rights reserved.
          </div>

          {/* Admin Login Trigger (Hidden/Discreet) */}
          <a href="#admin" className="absolute bottom-0 right-0 p-4 text-slate-800 hover:text-slate-700">
              <Lock size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;