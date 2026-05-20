import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Loader2, Inbox, ShieldCheck, CheckCircle } from 'lucide-react';
import { tenderApi, tenderHeaderApi } from '../utils/api';

const Tender = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [headerData, setHeaderData] = useState({
    title: 'Tender & Contract',
    description: ''
  });
  
  const siteId = "ParekhFabrics06";

  // Clean HTML from non-breaking spaces so browser can wrap words normally without mid-word breaks
  const cleanDescription = (html) => {
    if (!html) return "";
    return html.replace(/&nbsp;/g, ' ').replace(/\u00a0/g, ' ');
  };

  useEffect(() => {
    const fetchTendersData = async () => {
      try {
        setLoading(true);
        const [headerRes, listRes] = await Promise.all([
          tenderHeaderApi.get(siteId),
          tenderApi.list(siteId)
        ]);

        if (headerRes.data && headerRes.data.success && headerRes.data.data) {
          setHeaderData({
            title: headerRes.data.data.title || 'Tender & Contract',
            description: headerRes.data.data.description || ''
          });
        }

        if (listRes.data && listRes.data.success) {
          setTenders(listRes.data.data || []);
        }
      } catch (error) {
        console.error("Error fetching tenders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTendersData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-36 pb-24 px-6 font-sans text-left">
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

        {/* --- TENDERS LIST / FALLBACK --- */}
        {loading ? (
          <div className="bg-white p-14 flex flex-col items-center justify-center rounded-3xl border border-slate-100 shadow-sm text-left">
            <Loader2 className="w-10 h-10 text-orange-600 animate-spin mb-4" />
            <p className="text-slate-400 font-black uppercase tracking-widest text-[10px] text-left">Syncing Procurement Files...</p>
          </div>
        ) : tenders.length > 0 ? (
          <div className="space-y-6 w-full text-left">
            {tenders.map((tender, index) => (
              <motion.div
                key={tender._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-slate-100 p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 text-left">
                  <div className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-[9px] font-black uppercase tracking-widest text-blue-700">
                    {tender.status || 'Active'}
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    Closing Date: {new Date(tender.date || tender.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight break-words text-left">
                  {tender.title}
                </h3>

                <div 
                  className="rich-text-content text-slate-600 text-sm leading-relaxed break-words pt-2 text-left"
                  dangerouslySetInnerHTML={{ __html: cleanDescription(tender.description) }}
                />

                {tender.keyPoints && tender.keyPoints.length > 0 && (
                  <div className="space-y-3 pt-6 mt-6 border-t border-slate-100 text-left">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Specifications / Requirements:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tender.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-slate-600 text-sm font-semibold">
                          <CheckCircle className="text-orange-600 w-4 h-4 shrink-0 mt-0.5" />
                          <span className="break-words">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          /* --- FALLBACK MESSAGE --- */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[2rem] shadow-xl p-10 md:p-14 border border-slate-100 text-center max-w-3xl mx-auto mt-12"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-slate-100 p-5 rounded-full mx-auto">
                <FileText size={40} className="text-slate-400" />
              </div>
            </div>

            <p className="text-lg md:text-xl font-semibold text-slate-600 bg-slate-100 inline-block px-6 py-3 rounded-full mx-auto">
              ( At present, no EOI published )
            </p>

            <p className="text-slate-400 mt-6 text-sm md:text-base">
              Please check back later for updates.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Tender;
