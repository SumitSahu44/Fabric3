import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hammer, CheckCircle, Mail, Clock, Loader2, Inbox, ShieldCheck } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { API_BASE_URL, IMAGE_BASE_URL, eauctionApi, eauctionHeaderApi } from '../utils/api';

const Auction = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [auctions, setAuctions] = useState([]);
  const [loadingAuctions, setLoadingAuctions] = useState(true);
  const [headerData, setHeaderData] = useState({
    title: 'e-AUCTION PARTICIPATION',
    description: 'Access premium textile production contracts and procurement opportunities through our secure e-trade portal.'
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const siteId = "ParekhFabrics06";

  // Clean HTML from non-breaking spaces so browser can wrap words normally without mid-word breaks
  const cleanDescription = (html) => {
    if (!html) return "";
    return html.replace(/&nbsp;/g, ' ').replace(/\u00a0/g, ' ');
  };

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        setLoadingAuctions(true);
        const res = await eauctionApi.list(siteId);
        if (res.data && res.data.success) {
          setAuctions(res.data.data || []);
        }
      } catch (error) {
        console.error("Error fetching auctions:", error);
      } finally {
        setLoadingAuctions(false);
      }
    };

    const fetchHeader = async () => {
      try {
        const res = await eauctionHeaderApi.get(siteId);
        if (res.data && res.data.success && res.data.data) {
          setHeaderData({
            title: res.data.data.title || 'e-AUCTION PARTICIPATION',
            description: res.data.data.description || 'Access premium textile production contracts and procurement opportunities.'
          });
        }
      } catch (error) {
        console.error("Error fetching header:", error);
      }
    };

    fetchAuctions();
    fetchHeader();
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg('');

    const formData = new FormData();
    formData.append("siteId", siteId);
    formData.append("participantName", data.participantName);
    formData.append("legalBusinessName", data.legalBusinessName);
    formData.append("businessAddress", data.businessAddress);
    formData.append("gstNo", data.gstNo || "");
    formData.append("mobileNo", data.mobileNo);
    formData.append("email", data.email);

    if (data.gstCertificate && data.gstCertificate.length > 0) {
      formData.append("gstCertificate", data.gstCertificate[0]);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/auction`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(result.message || 'Failed to submit participation request.');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMsg('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans selection:bg-orange-500 selection:text-white text-left">
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

      {/* --- DYNAMIC PREMIUM LIGHT HEADER LAYOUT --- */}
      <section className="relative bg-white pt-36 pb-20 px-6 border-b border-slate-200/60 overflow-hidden text-left">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-left space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight text-left">
            {headerData.title ? headerData.title.replace(/^E-/i, 'e-') : 'e-AUCTION PARTICIPATION'}
          </h1>
          
          {/* Properly render HTML description exactly as uploaded from admin panel with perfect wrapping and alignment */}
          {headerData.description && (
            <div 
              className="text-slate-600 font-semibold max-w-3xl text-sm md:text-base leading-relaxed rich-text-content pt-2 text-left"
              dangerouslySetInnerHTML={{ __html: cleanDescription(headerData.description) }}
            />
          )}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-16 space-y-16 text-left">

        {/* --- ACTIVE AUCTIONS LIST --- */}
        <div className="space-y-8 text-left">
          <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 flex items-center gap-3 text-left">
            <Hammer className="text-orange-600 text-left" /> Active Auctions
          </h2>

          {loadingAuctions ? (
            <div className="bg-white p-14 flex flex-col items-center justify-center rounded-3xl border border-slate-100 shadow-sm text-left">
              <Loader2 className="w-10 h-10 text-orange-500 animate-spin mb-4" />
              <p className="text-slate-400 font-black uppercase tracking-widest text-[10px] text-left">Syncing Auctions...</p>
            </div>
          ) : auctions.length === 0 ? (
            <div className="py-6 text-left">
              <p className="text-slate-500 font-bold text-xs tracking-widest">
                ( AT PRESENT, NO e-AUCTION PUBLISHED )
              </p>
            </div>
          ) : (
            <div className="space-y-6 w-full text-left">
              {auctions.map((auction, index) => (
                <motion.div
                  key={auction._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row text-left"
                >
                  {/* Listing Image */}
                  {auction.image && (
                    <div className="w-full md:w-80 h-56 md:h-auto md:min-h-[220px] flex-shrink-0 relative overflow-hidden bg-slate-50">
                      <img 
                        src={auction.image.startsWith("http") ? auction.image : `${IMAGE_BASE_URL}/${auction.image}`}
                        alt={auction.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=400";
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Listing Details */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4 text-left">
                    <div className="text-left">
                      <div className="flex items-center justify-end gap-4 mb-2 text-left">
                        <span className="text-[10px] text-slate-400 font-bold uppercase">
                          End Date: {new Date(auction.date || auction.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight tracking-tight break-words text-left">
                        {auction.title}
                      </h3>
                      
                      {/* Sanitized Listing Description */}
                      <div 
                        className="rich-text-content text-slate-600 text-sm leading-relaxed break-words pt-2 text-left"
                        dangerouslySetInnerHTML={{ __html: cleanDescription(auction.description) }}
                      />
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100 text-left">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">
                        Submit participation form below to bid
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Form Container */}
        <div className="bg-white border border-slate-200 overflow-hidden shadow-xl rounded-3xl p-8 md:p-14 text-left">
          <div className="flex justify-between items-start mb-10 border-b border-slate-100 pb-6 text-left">
            <div className="text-left">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 flex items-center gap-2 text-left">
                <Hammer size={24} className="text-orange-600" /> Participation Request
              </h3>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mt-2 text-left">Register your interest for upcoming batches.</p>
            </div>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">Registration Successful</h3>
              <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed font-medium">
                You have been registered for upcoming e-Auctions. We will notify your registered email when new batches are published.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-left" encType="multipart/form-data">
              {errorMsg && (
                <div className="p-4 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border-l-4 border-red-500 text-left">
                  {errorMsg}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-10 text-left">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all text-left">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Name of the Participant *</label>
                  <input type="text" {...register("participantName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase text-left" placeholder="Your Name" />
                  {errors.participantName && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all text-left">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Legal Name of the Business *</label>
                  <input type="text" {...register("legalBusinessName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase text-left" placeholder="Company Name" />
                  {errors.legalBusinessName && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
              </div>

              <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all text-left">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Business Address with Pin code *</label>
                <input type="text" {...register("businessAddress", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase text-left" placeholder="Complete Address" />
                {errors.businessAddress && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
              </div>

              <div className="grid md:grid-cols-3 gap-10 text-left">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all text-left">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">GST No.</label>
                  <input type="text" {...register("gstNo")} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase text-left" placeholder="Optional" />
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all text-left">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Mobile No. *</label>
                  <input type="tel" {...register("mobileNo", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase text-left" placeholder="+91" />
                  {errors.mobileNo && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all text-left">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Email id *</label>
                  <input type="email" {...register("email", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase text-left" placeholder="email@address" />
                  {errors.email && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
              </div>

              <div className="relative pb-2 focus-within:border-orange-600 transition-all flex flex-col justify-end text-left">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 leading-none text-left">Upload GST Certificate</label>
                <input type="file" {...register("gstCertificate")} className="w-full text-xs font-bold text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-[9px] file:uppercase file:font-black file:tracking-widest file:bg-slate-900 file:text-white hover:file:bg-orange-600 cursor-pointer transition-all text-left" />
              </div>

              <div className="pt-6 text-left">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-5 font-black uppercase text-[11px] tracking-[0.3em] hover:bg-orange-600 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl rounded-2xl text-left animate-none"
                >
                  {loading ? "Submitting..." : "Submit"} <Hammer size={16} />
                </button>
                <div className="mt-8 text-center border-t border-slate-50 pt-8">
                  <a href="mailto:services@parekhfabrics.com" className="text-[10px] font-bold text-blue-600 uppercase tracking-widest border-b border-blue-100 hover:border-blue-600 transition-all pb-1 text-center">
                    services@parekhfabrics.com
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Security Note */}
        <div className="mt-8 flex items-center gap-3 text-slate-400 text-left">
          <CheckCircle size={16} className="text-green-600" />
          <p className="text-[9px] font-bold uppercase tracking-widest italic text-left">All auctions are verified and secure under Parekh Fabrics B2B Terms.</p>
        </div>
      </div>
    </div>
  );
};

export default Auction;
