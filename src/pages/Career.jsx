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
        <div className="grid md:grid-cols-3 gap-12 items-end mb-24 pb-8 border-b border-slate-100">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 block mb-4">
              Building the Future of Cotton
            </span>
            <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-tight">
              Careers at <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #94a3b8' }}>Parekh Fabrics<span className="text-slate-400">.</span></span>
            </h1>
          </motion.div>
          <div className="md:col-span-1 text-right">
            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed font-medium uppercase tracking-tight italic">
              "We provide a sophisticated environment for professionals dedicated to textile innovation."
            </p>
          </div>
        </div>

        {/* Professional Core Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((item, i) => (
            <div key={i} className="bg-white p-8 border border-slate-100 group transition-all hover:shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-blue-900 group-hover:bg-orange-600 group-hover:text-white transition-colors mb-6">
                <item.icon size={20} strokeWidth={1.5}/>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-tight text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed uppercase tracking-wide font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section Title with Divider */}
        <div className="mb-12 flex items-center justify-between gap-6">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Open Positions</h2>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mt-1">Join the Legacy.</h3>
          </div>
          <div className="h-[2px] flex-grow bg-slate-100 hidden md:block"></div>
        </div>

        {/* Balanced Job Listings */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <motion.div 
              whileHover={{ x: 8 }}
              key={job.id} 
              className="bg-white border border-slate-100 p-8 flex flex-col md:flex-row justify-between md:items-center hover:border-slate-200 transition-all cursor-pointer group"
            >
              <div className="space-y-2">
                <p className="text-[9px] font-bold text-orange-600 uppercase tracking-widest">{job.dept}</p>
                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
                  {job.title}
                </h3>
                <div className="flex gap-6 pt-2">
                  <span className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest"><MapPin size={12}/> {job.loc}</span>
                  <span className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest"><Clock size={12}/> {job.type}</span>
                </div>
              </div>
              <div className="mt-8 md:mt-0 flex items-center gap-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">Apply</span>
                <button className="bg-slate-900 text-white p-4 rounded-sm shadow-xl group-hover:bg-orange-600 transition-all">
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sophisticated CTA */}
        <div className="mt-24 p-12 bg-white border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
          <div>
            <h4 className="text-2xl font-black uppercase mb-3 tracking-tighter text-slate-900">Spontaneous Application</h4>
            <p className="text-xs text-slate-500 max-w-md uppercase tracking-widest leading-relaxed">Submit your profile to our talent database for future opportunities.</p>
          </div>
          <button className="bg-transparent border border-slate-900 text-slate-900 px-10 py-5 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all shadow-md">
            Upload Resume
          </button>
        </div>

        {/* Global SEO Info - Balanced Text */}
        <footer className="mt-20 pt-10 border-t border-slate-100 text-center">
          <p className="text-[10px] uppercase tracking-widest text-slate-400 opacity-60">Parekh Fabrics Careers Ahmedabad | Equal Opportunity Employer | Mobile Responsive & All Browser Support</p>
        </footer>
      </div>
    </div>
  );
};

export default Career;