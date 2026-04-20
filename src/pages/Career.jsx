import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, UserCheck, BarChart3, Binary, Mail } from 'lucide-react';
import { careerApi } from '../utils/api';

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = "ParekhFabrics06";
  const defaultEmail = "career@parekhfabrics.com";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await careerApi.getAll(siteId);
        if (response.data && response.data.success) {
          setJobs(response.data.data.filter(job => job.status === 'Open' || job.status === 'active'));
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleApply = (job) => {
    const email = job.email || job.contactEmail || defaultEmail;
    window.location.href = `mailto:${email}?subject=Application for ${job.title} - ${siteId}`;
  };

  return (
<div className="bg-slate-50 min-h-screen pt-32 pb-24 px-6 selection:bg-orange-100 font-sans">
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
          <span className="text-transparent" style={{ color: '#f54a00' }}>Parekh Fabrics<span className="text-orange-600">.</span></span>
        </h1>
      </motion.div>
      <div className="md:col-span-1 text-right">
        <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed font-medium uppercase tracking-tight italic">
          "We provide a sophisticated environment for professionals dedicated to textile innovation."
        </p>
      </div>
    </div>

    {loading ? (
      <div className="py-20 flex justify-center">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-orange-600 rounded-full animate-spin"></div>
      </div>
    ) : jobs.length > 0 ? (
      <div className="grid gap-6">
        {jobs.map((job) => (
          <motion.div 
            key={job._id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                    {job.type || "Full-Time"} 
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    {job.location || "On-site"}
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 leading-none group-hover:text-orange-600 transition-colors">
                  {job.title}
                </h3>
              </div>
              
              <button 
                onClick={() => handleApply(job)}
                className="w-full md:w-auto bg-slate-900 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3"
              >
                Apply Now <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    ) : (
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
    )}
  </div>
</div>
  );
};

export default Career;
