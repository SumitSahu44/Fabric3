import React from 'react';
import { FileText, Calendar, Download, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Tender = () => {
  const activeTenders = [
    { id: 'PF/2026/08', title: 'Bulk Supply of Combed Cotton Yarn', deadline: 'April 15, 2026', status: 'Open' },
    { id: 'PF/2026/09', title: 'Industrial Canvas for Export Units', deadline: 'April 20, 2026', status: 'Open' },
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 selection:bg-blue-50">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 block mb-4">Official Procurement</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-none">
            Tenders & <br /> <span className="text-slate-400">Contracts.</span>
          </h1>
          <p className="mt-8 text-xs text-slate-500 uppercase tracking-widest font-bold max-w-lg leading-relaxed">
            Parekh Fabrics invites verified vendors and industrial partners for official bulk contracts. All documents are digitally encrypted.
          </p>
        </div>

        {/* Active Tenders List */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 pb-4">Active Notifications</h3>
          
          {activeTenders.map((tender) => (
            <motion.div 
              whileHover={{ scale: 1.01 }}
              key={tender.id} 
              className="group border border-slate-100 p-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-xl transition-all bg-slate-50/50"
            >
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-1">{tender.id}</p>
                  <h4 className="text-lg font-black uppercase tracking-tight text-slate-900">{tender.title}</h4>
                  <div className="flex gap-4 mt-3">
                    <span className="flex items-center gap-1.5 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      <Calendar size={12} /> Deadline: {tender.deadline}
                    </span>
                    <span className="flex items-center gap-1.5 text-[9px] font-bold text-green-600 uppercase tracking-widest">
                      <ShieldCheck size={12} /> Verified Tender
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex gap-3">
                <button className="bg-slate-900 text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all flex items-center gap-2">
                  Apply Now <ChevronRight size={14} />
                </button>
                <button className="border border-slate-200 p-3 hover:bg-white transition-all text-slate-400 hover:text-slate-900">
                  <Download size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note Section */}
        <div className="mt-16 p-8 bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-sm font-black uppercase tracking-widest">Vendor Registration</h4>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Register your company to receive future tender alerts.</p>
          </div>
          <button className="border border-white/20 px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tender;