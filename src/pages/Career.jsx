import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, UserCheck, BarChart3, Binary, Mail } from 'lucide-react';
import { careerApi, careerHeaderApi } from '../utils/api';

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [headerData, setHeaderData] = useState({
    title: 'Careers at Parekh Fabrics',
    description: 'We provide a sophisticated environment for professionals dedicated to textile innovation.'
  });
  const siteId = "ParekhFabrics06";
  const defaultEmail = "career@parekhfabrics.com";

  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/\u00a0/g, ' ');
  };

  const getSnippet = (html, limit = 200) => {
    const text = stripHtml(html);
    if (text.length <= limit) return text;
    return text.substring(0, limit) + '...';
  };

  // Clean HTML from non-breaking spaces so browser can wrap words normally without mid-word breaks
  const cleanDescription = (html) => {
    if (!html) return "";
    return html.replace(/&nbsp;/g, ' ').replace(/\u00a0/g, ' ');
  };

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

    const fetchHeader = async () => {
      try {
        const res = await careerHeaderApi.get(siteId);
        if (res.data && res.data.success && res.data.data) {
          setHeaderData({
            title: res.data.data.title || 'Careers at Parekh Fabrics',
            description: res.data.data.description || 'We provide a sophisticated environment for professionals dedicated to textile innovation.'
          });
        }
      } catch (error) {
        console.error("Error fetching header:", error);
      }
    };

    fetchJobs();
    fetchHeader();
  }, []);

  const handleApply = (job) => {
    const email = job.contactEmail || job.email || defaultEmail;
    const subject = encodeURIComponent(`Application for ${job.title} - Parekh Fabrics`);
    const body = encodeURIComponent(`Hello Team,\n\nI am interested in applying for the position of ${job.title} at Parekh Fabrics.\n\nPlease find attached my CV/Resume and experience details.\n\nBest Regards,\n[My Name]`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24 px-6 selection:bg-orange-100 font-sans text-left">
      {/* Bulletproof local override for editor styles */}
      <style>{`
        .rich-text-content, 
        .rich-text-content * {
          white-space: normal !important;
          word-break: normal !important;
          overflow-wrap: break-word !important;
          max-width: 100% !important;
          text-align: left !important;
        }
      `}</style>

      <div className="max-w-6xl mx-auto text-left">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-left w-full border-b border-slate-200 pb-8"
        >
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight text-left">
            {headerData.title}
          </h1>
          {headerData.description && (
            <div 
              className="text-slate-600 font-semibold max-w-3xl text-sm md:text-base leading-relaxed rich-text-content pt-4 text-left"
              dangerouslySetInnerHTML={{ __html: cleanDescription(headerData.description) }}
            />
          )}
        </motion.div>

        {loading ? (
          <div className="py-20 flex justify-center">
            <div className="w-10 h-10 border-4 border-slate-200 border-t-orange-600 rounded-full animate-spin"></div>
          </div>
        ) : jobs.length > 0 ? (
          <div className="grid gap-6 text-left">
            {jobs.map((job) => {
              const isExpanded = expandedCards[job._id];
              const email = job.contactEmail || job.email || defaultEmail;
              return (
                <motion.div 
                  key={job._id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-left"
                >
                  <div className="flex flex-col gap-6 text-left">
                    {/* Top Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-50 px-3 py-1 rounded-full flex items-center gap-1.5">
                            <MapPin size={11} className="text-orange-500" /> {job.location || "On-site"}
                          </span>
                          {job.salary && (
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 bg-emerald-50 border border-emerald-100/50 px-3 py-1 rounded-full">
                              Salary: {job.salary}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-orange-600 transition-colors">
                          {job.title}
                        </h3>
                      </div>
                      
                      <div className="flex items-center gap-4 w-full md:w-auto self-stretch md:self-auto">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApply(job);
                          }}
                          className="w-full md:w-auto bg-slate-900 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-md"
                        >
                          Apply Now <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Description & Requirements Block */}
                    <div className="border-t border-slate-100 pt-6 space-y-4">
                      {isExpanded ? (
                        <div className="space-y-6">
                          {/* Technical Description */}
                          {job.description && (
                            <div className="space-y-2">
                              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Technical Description</h4>
                              <div 
                                className="rich-text-content text-slate-700 text-sm leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: cleanDescription(job.description) }}
                              />
                            </div>
                          )}

                          {/* Minimum Requirements */}
                          {job.experience && (
                            <div className="space-y-2 pt-4 border-t border-slate-50">
                              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Minimum Requirements</h4>
                              <div 
                                className="rich-text-content text-slate-700 text-sm leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: cleanDescription(job.experience) }}
                              />
                            </div>
                          )}

                          {/* HR contact row */}
                          <div className="pt-4 border-t border-slate-50 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500">
                            <span className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                              <Mail size={13} className="text-orange-500" />
                              Apply via: <a href={`mailto:${email}`} className="text-slate-800 hover:text-orange-600 underline font-black">{email}</a>
                            </span>
                          </div>

                          <button
                            onClick={() => toggleExpand(job._id)}
                            className="text-[10px] font-black uppercase tracking-widest text-orange-600 hover:text-slate-900 transition-colors pt-2 block"
                          >
                            Read Less ▲
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {job.description && (
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {getSnippet(job.description, 220)}
                            </p>
                          )}
                          <div className="flex justify-between items-center pt-2">
                            <button
                              onClick={() => toggleExpand(job._id)}
                              className="text-[10px] font-black uppercase tracking-widest text-orange-600 hover:text-slate-900 transition-colors"
                            >
                              Read More ▼
                            </button>
                            
                            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                              <Mail size={11} className="text-slate-400" /> {email}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-32 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-center bg-white/50 backdrop-blur-sm mx-auto w-full"
          >
            <div className="w-20 h-20 bg-white flex items-center justify-center text-slate-200 mb-8 rounded-full shadow-sm mx-auto">
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
