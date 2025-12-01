import React, { useEffect, useState } from 'react';
import { StorageService, VictimRecord } from '../services/storage';
import { Phone, MapPin, CheckCircle, Clock, Trash2, ArrowLeft, RefreshCw } from 'lucide-react';

interface AdminDashboardProps {
  onBack: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const [submissions, setSubmissions] = useState<VictimRecord[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setSubmissions(StorageService.getSubmissions());
  };

  const handleStatusUpdate = (id: string) => {
    StorageService.updateStatus(id, 'CONTACTED');
    loadData();
  };
  
  const handleClearAll = () => {
      if(confirm('ต้องการลบข้อมูลทั้งหมดใช่หรือไม่?')) {
          StorageService.clearAll();
          loadData();
      }
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white p-4 shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
             <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                <ArrowLeft />
             </button>
             <h1 className="text-xl font-bold flex items-center gap-2">
               <span className="bg-red-600 px-2 py-0.5 rounded text-sm">ADMIN</span> 
               ระบบจัดการผู้ประสบภัย
             </h1>
          </div>
          <button onClick={loadData} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-sm transition-colors">
            <RefreshCw size={16} /> รีเฟรชข้อมูล
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-500">
                <div className="text-slate-500 text-sm">เคสทั้งหมด</div>
                <div className="text-2xl font-bold">{submissions.length}</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-red-500">
                <div className="text-slate-500 text-sm">รอการติดต่อ</div>
                <div className="text-2xl font-bold text-red-600">
                    {submissions.filter(r => r.status === 'PENDING').length}
                </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-500">
                <div className="text-slate-500 text-sm">ติดต่อแล้ว</div>
                <div className="text-2xl font-bold text-green-600">
                    {submissions.filter(r => r.status === 'CONTACTED').length}
                </div>
            </div>
             <button onClick={handleClearAll} className="bg-red-50 hover:bg-red-100 p-4 rounded-xl shadow-sm border border-red-200 flex flex-col items-center justify-center text-red-700 transition-colors">
                <Trash2 size={20} className="mb-1"/>
                <span className="text-sm font-bold">ล้างข้อมูลทั้งหมด</span>
            </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 text-slate-700 uppercase text-xs font-bold tracking-wider">
                        <tr>
                            <th className="p-4 border-b">เวลาแจ้ง</th>
                            <th className="p-4 border-b">สถานะ</th>
                            <th className="p-4 border-b">ผู้แจ้ง / เบอร์โทร</th>
                            <th className="p-4 border-b">รถ / ทะเบียน</th>
                            <th className="p-4 border-b">ระดับความเสียหาย</th>
                            <th className="p-4 border-b w-40">จัดการ</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-600 text-sm divide-y divide-slate-100">
                        {submissions.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="p-10 text-center text-slate-400">ยังไม่มีข้อมูลการแจ้งเหตุเข้ามา</td>
                            </tr>
                        ) : (
                            submissions.map((record) => (
                                <tr key={record.id} className={`hover:bg-slate-50 transition-colors ${record.status === 'PENDING' ? 'bg-red-50/30' : ''}`}>
                                    <td className="p-4 whitespace-nowrap">
                                        {new Date(record.timestamp).toLocaleTimeString('th-TH', { hour: '2-digit', minute:'2-digit' })} น.
                                        <div className="text-xs text-slate-400">{new Date(record.timestamp).toLocaleDateString('th-TH')}</div>
                                    </td>
                                    <td className="p-4">
                                        {record.status === 'PENDING' ? (
                                            <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">
                                                <Clock size={12} /> รอติดต่อ
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">
                                                <CheckCircle size={12} /> ติดต่อแล้ว
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        <div className="font-bold text-slate-900">{record.fullName}</div>
                                        <div className="flex items-center gap-1 text-slate-500 mt-1">
                                            <Phone size={14} /> <a href={`tel:${record.phoneNumber}`} className="hover:text-red-600 hover:underline">{record.phoneNumber}</a>
                                        </div>
                                        {record.lineId && <div className="text-xs text-green-600 mt-0.5">Line: {record.lineId}</div>}
                                        {record.locationUrl && (
                                            <a href={record.locationUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-blue-600 mt-1 hover:underline">
                                                <MapPin size={12} /> ดูแผนที่
                                            </a>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        <div className="font-medium">{record.carDetails}</div>
                                        <div className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs inline-block mt-1 border border-slate-300">
                                            {record.licensePlate}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="text-red-600 font-medium text-xs">{record.damageLevel}</div>
                                        <div className="text-slate-500 text-xs mt-1">{record.waterLevel}</div>
                                        {record.keyStatus === 'ไม่มีกุญแจ/กุญแจหาย (รถล็อกอยู่)' && (
                                            <div className="text-orange-600 text-xs font-bold mt-1">⚠️ ไม่มีกุญแจ</div>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        {record.status === 'PENDING' && (
                                            <button 
                                                onClick={() => handleStatusUpdate(record.id)}
                                                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-3 rounded shadow-sm transition-colors flex items-center justify-center gap-1"
                                            >
                                                <Phone size={14} /> โทรหาลูกค้า
                                            </button>
                                        )}
                                        {record.status === 'CONTACTED' && (
                                            <span className="text-slate-400 text-xs flex items-center justify-center">
                                                - ดำเนินการแล้ว -
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;