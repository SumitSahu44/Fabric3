import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, UserCheck, BarChart3, Binary } from 'lucide-react';

const Career = () => {
  // Balanced Open Positions Data
  const jobs = [
    { id: 1, title: 'Lead Textile Engineer', loc: 'Ahmedabad Plant', type: 'Full-Time', dept: 'Production & R&D' },
    { id: 2, title: 'B2B Regional Sales Manager', loc: 'Gujarat (Remote/Field)', type: 'Full-Time', dept: 'Global Sales' },
    { id: 3, title: 'Process Quality Analyst', loc: 'Ahmedabad Plant', type: 'Full-Time', dept: 'QC & Logistics' },
  ];

  // Visual features list
  const features = [
    { icon: UserCheck, title: 'Collaborative Culture', desc: 'Work with the best minds in Ahmedabad’s textile hub.' },
    { icon: BarChart3, title: 'Career Growth', desc: 'Structured professional development paths.' },
    { icon: Binary, title: 'Modern Technology', desc: 'Leverage automated looms & ERP systems.' },
  ];

  return (
<div className="bg-slate-50 min-h-screen pt-32 pb-24 px-6 selection:bg-orange-100">
  <div className="max-w-6xl mx-auto">
    
    {/* Minimalist Header */}
    <div className="grid md:grid-cols-3 gap-12 items-end mb-16 pb-8 border-b border-slate-100">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:col-span-2"
      >
        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-orange-600 block mb-4">
          Building the Future of Cotton
        </span>
        <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-tight">
          Careers at <br /> 
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #94a3b8' }}>Parekh Fabrics<span className="text-slate-400">.</span></span>
        </h1>
      </motion.div>
      <div className="md:col-span-1 text-right">
        <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed font-medium uppercase tracking-tight italic">
          "We provide a sophisticated environment for professionals dedicated to textile innovation."
        </p>
      </div>
    </div>

    {/* Center Placeholder: At present, No Vacancy */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-32 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-center bg-white/50 backdrop-blur-sm"
    >
      <div className="w-20 h-20 bg-white flex items-center justify-center text-slate-200 mb-8 rounded-full shadow-sm">
        <Briefcase size={32} strokeWidth={1} />
      </div>
      
      <h4 className="text-2xl font-black uppercase tracking-[0.1em] text-slate-400 italic">
        At present, No Vacancy
      </h4>
      
      <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] max-w-xs leading-loose opacity-70">
        Our recruitment portal is currently closed. <br /> Check back for future openings.
      </p>
    </motion.div>


  </div>
</div>
  );
};

export default Career;