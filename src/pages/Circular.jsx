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
          {notices.map((n, i) => (
            <div key={i} className="bg-white p-6 border border-slate-200 flex justify-between items-center group hover:border-orange-600 transition-all">
              <div className="flex gap-6 items-center">
                <div className="text-slate-300 group-hover:text-orange-600"><FileText size={24} /></div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-tight text-slate-900">{n.title}</h4>
                  <div className="flex gap-4 mt-2">
                    <span className="text-[9px] font-bold text-slate-400 uppercase flex items-center gap-1"><Calendar size={12} /> {n.date}</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic">{n.id}</span>
                  </div>
                </div>
              </div>
              <button className="p-3 bg-slate-50 hover:bg-slate-900 hover:text-white transition-all"><Download size={18} /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Circular;