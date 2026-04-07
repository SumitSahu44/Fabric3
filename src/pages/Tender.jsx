import React from 'react';
import { FileText, Calendar, Download, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Tender = () => {


  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 selection:bg-blue-50">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-orange-600 block mb-4">Official Procurement</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-none">
            Tenders & <br /> <span className="text-slate-400">Contracts.</span>
          </h1>
          <p className="mt-8 text-xs text-slate-600 uppercase tracking-widest font-bold max-w-lg leading-relaxed">
            Parekh Fabrics invites verified vendors and industrial partners for official bulk contracts. All documents are digitally encrypted.
          </p>
        </div>

    {/* Active Tenders List - Updated with No Data State */}
<div className="space-y-6">
  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 pb-4">
    Active Notifications
  </h3>
  
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="border-2 border-dashed border-slate-100 p-16 flex flex-col items-center justify-center text-center bg-slate-50/30 rounded-xl"
  >
    <div className="w-16 h-16 bg-white flex items-center justify-center shadow-sm text-slate-300 mb-6 rounded-full">
      <FileText size={24} />
    </div>
    
    <h4 className="text-lg font-black uppercase tracking-tight text-slate-400 italic">
      At present, no EOI published
    </h4>
    
    <p className="mt-2 text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
      Please check back later for new opportunities.
    </p>
  </motion.div>
</div>

   
      </div>
    </div>
  );
};

export default Tender;