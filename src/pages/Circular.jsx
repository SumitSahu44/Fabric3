import React from 'react';
import { FileText, Download, Calendar } from 'lucide-react';

const Circular = () => {
  const notices = [
    { date: "20 Mar 2026", title: "Revised Export Tariffs - Q2 2026", id: "CIR/2026/012" },
    { date: "15 Mar 2026", title: "New GOTS Certification Compliance for Organic Cotton", id: "CIR/2026/011" },
    { date: "05 Mar 2026", title: "Holiday Schedule - Ahmedabad Manufacturing Unit", id: "CIR/2026/010" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-10 border-l-4 border-orange-600 pl-4">Official Circulars</h2>
<div className="space-y-4">
  <div className="bg-white p-16 border-2 border-dashed border-slate-100 flex flex-col items-center justify-center rounded-xl group transition-all">
    <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-slate-200 mb-6 rounded-full group-hover:text-orange-600 transition-colors">
      <FileText size={32} strokeWidth={1} />
    </div>
    
    <h4 className="text-lg font-black uppercase tracking-[0.1em] text-slate-400 italic">
      No Circular, at present
    </h4>
    
    <p className="mt-2 text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
      Official updates will be listed here
    </p>
  </div>
</div>
      </div>
    </div>
  );
};
export default Circular;