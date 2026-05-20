import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Calendar, Search, Loader2, RefreshCw, Printer, Eye } from 'lucide-react';
import { circularApi } from '../utils/api';

const Circular = () => {
  const [headerData, setHeaderData] = useState({ title: 'OFFICIAL CIRCULARS', description: '' });
  const [circulars, setCirculars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const siteId = "ParekhFabrics06";

  const fetchCircularData = async () => {
    try {
      setLoading(true);
      // Fetch Header
      const headerRes = await circularApi.getHeader(siteId);
      if (headerRes.data && headerRes.data.success && headerRes.data.data) {
        setHeaderData(headerRes.data.data);
      }

      // Fetch Circulars
      const circularsRes = await circularApi.getAll(siteId);
      if (circularsRes.data && circularsRes.data.success) {
        setCirculars(circularsRes.data.data);
      }
    } catch (error) {
      console.error("Error fetching circular data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCircularData();
  }, []);

  const filteredCirculars = circulars.filter(c => 
    c.subject && c.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Fix "Invalid Date" for arbitrary strings entered by the user
  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    
    // Check if the standard date parsing succeeded
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    }
    
    // Fallback: If it's a custom text date format, return the raw string exactly as-is!
    return dateStr;
  };

  // Clean HTML from non-breaking spaces so browser can wrap words normally without mid-word breaks
  const cleanDescription = (html) => {
    if (!html) return "";
    return html.replace(/&nbsp;/g, ' ').replace(/\u00a0/g, ' ');
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-24 font-sans selection:bg-orange-500 selection:text-white">
      {/* Bulletproof local override for editor styles */}
      <style>{`
        .rich-text-content, 
        .rich-text-content * {
          color: #ffffff !important;
          background-color: transparent !important;
          white-space: normal !important;
          word-break: normal !important;
          overflow-wrap: break-word !important;
          max-width: 100% !important;
        }
      `}</style>
      
      {/* Header section with rich dark backdrop matching management page style */}
      <section className="relative bg-slate-900 pt-20 pb-40 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
            {headerData.title || "Official Circulars"}
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          
          {/* Properly render HTML description to support Rich Text editor outputs */}
          {headerData.description ? (
            <div 
              className="text-white font-semibold max-w-2xl mx-auto text-sm md:text-base leading-relaxed rich-text-content"
              dangerouslySetInnerHTML={{ __html: cleanDescription(headerData.description) }}
            />
          ) : (
            <p className="text-white font-semibold max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Stay informed with the latest alerts, statutory circulars, and compliance notices.
            </p>
          )}
        </div>
      </section>

      {/* Main content grid */}
      <section className="max-w-5xl mx-auto px-6 -mt-20 relative z-20">
        
        {/* Search and control bar */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search circulars by subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder:text-slate-400"
            />
          </div>
          
          <div className="flex gap-3 w-full md:w-auto justify-end">
            <button 
              onClick={fetchCircularData}
              className="flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl text-xs font-black uppercase tracking-wider text-slate-700 transition-all active:scale-95 shadow-sm"
            >
              <RefreshCw className="w-4 h-4" /> Refresh
            </button>
          </div>
        </div>

        {/* Dynamic State Loading */}
        {loading ? (
          <div className="flex flex-col items-center justify-center bg-white border border-slate-100 rounded-3xl p-20 shadow-xl space-y-4">
            <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
            <p className="text-sm font-bold text-slate-500 tracking-widest uppercase">Loading Circular Documents...</p>
          </div>
        ) : (
          <div className="space-y-6">
            
            <AnimatePresence mode="popLayout">
              {filteredCirculars.length > 0 ? (
                filteredCirculars.map((circular, index) => (
                  <motion.div
                    key={circular._id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
                  >
                    <div className="flex items-start gap-5 flex-grow">
                      {/* PDF Icon styling */}
                      <div className="bg-red-50 text-red-500 p-4 rounded-2xl group-hover:bg-red-500 group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
                        <FileText className="w-8 h-8" />
                      </div>

                      {/* Text info */}
                      <div className="space-y-2">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(circular.publishDate)}
                        </span>
                        
                        <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-slate-800 group-hover:text-orange-600 transition-colors leading-tight">
                          {circular.subject}
                        </h3>
                      </div>
                    </div>

                    {/* CTA Actions - Highly Responsive Double Button */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto border-t md:border-t-0 border-slate-100 pt-4 md:pt-0">
                      {/* View Circular */}
                      <a 
                        href={circular.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm border border-slate-200/50"
                      >
                        <Eye className="w-4 h-4 text-slate-600" /> View Circular
                      </a>

                      {/* Print Circular */}
                      <button 
                        onClick={() => {
                          const printWindow = window.open(circular.pdfUrl, '_blank');
                          if (printWindow) {
                            printWindow.focus();
                            setTimeout(() => {
                              try {
                                printWindow.print();
                              } catch (e) {
                                console.log("Printing PDF handled by standard browser preview page.");
                              }
                            }, 500);
                          }
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-orange-600 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md"
                      >
                        <Printer className="w-4 h-4" /> Print Circular
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white border border-slate-200 rounded-3xl p-16 text-center shadow-sm"
                >
                  <div className="flex justify-center mb-6 text-slate-300">
                    <FileText size={64} className="stroke-[1.5]" />
                  </div>
                  <h4 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-2">No Circulars Available</h4>
                  <p className="text-sm font-semibold text-slate-400 max-w-md mx-auto">
                    There are no circulars currently posted. Please check back later.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        )}

      </section>

    </div>
  );
};

export default Circular;
