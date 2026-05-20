import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ClipboardCheck, Mail, ShieldCheck, CheckCircle, Clock, Loader2, Inbox } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { API_BASE_URL, IMAGE_BASE_URL, equotationApi, equotationHeaderApi } from '../utils/api';

const Equotation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [quotations, setQuotations] = useState([]);
  const [loadingQuotations, setLoadingQuotations] = useState(true);
  const [headerData, setHeaderData] = useState({
    title: 'e-QUOTATION',
    description: 'Generate formal industrial quotations for Parekh Fabrics products. Our system will calculate rates based on current market standards and GST compliance.'
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
    const fetchQuotations = async () => {
      try {
        setLoadingQuotations(true);
        const res = await equotationApi.list(siteId);
        if (res.data && res.data.success) {
          setQuotations(res.data.data || []);
        }
      } catch (error) {
        console.error("Error fetching quotations:", error);
      } finally {
        setLoadingQuotations(false);
      }
    };

    const fetchHeader = async () => {
      try {
        const res = await equotationHeaderApi.get(siteId);
        if (res.data && res.data.success && res.data.data) {
          setHeaderData({
            title: res.data.data.title || 'e-QUOTATION',
            description: res.data.data.description || 'Generate formal industrial quotations for Parekh Fabrics products.'
          });
        }
      } catch (error) {
        console.error("Error fetching header:", error);
      }
    };

    fetchQuotations();
    fetchHeader();
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch(`${API_BASE_URL}/quotation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          siteId,
          traderName: data.traderName,
          businessName: data.businessName,
          businessAddress: data.businessAddress,
          gstNo: data.gstNo || "",
          mobileNo: data.mobileNo,
          email: data.email,
          quotationType: data.quotationType
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(result.message || 'Failed to request quotation. Please try again.');
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
            {headerData.title ? headerData.title.replace(/^E-/i, 'e-') : 'e-QUOTATION'}
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

        {/* --- ACTIVE REQUESTS SECTION --- */}
        <div className="space-y-8 text-left">
          <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 flex items-center gap-3 text-left">
            <ClipboardCheck className="text-orange-600" /> Active Quotation Requests
          </h2>

          {loadingQuotations ? (
            <div className="bg-white p-14 flex flex-col items-center justify-center rounded-3xl border border-slate-100 shadow-sm text-left">
              <Loader2 className="w-10 h-10 text-orange-500 animate-spin mb-4" />
              <p className="text-slate-400 font-black uppercase tracking-widest text-[10px] text-left">Syncing RFQs...</p>
            </div>
          ) : quotations.length === 0 ? (
            <div className="bg-white p-14 flex flex-col items-center justify-center rounded-3xl border border-slate-100 shadow-sm text-center">
              <Inbox className="w-16 h-16 text-slate-200 mb-6 mx-auto" strokeWidth={1} />
              <h3 className="text-xl font-black text-slate-900 uppercase">No Active Requests</h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">New quotation requests will appear here</p>
            </div>
          ) : (
            <div className="space-y-6 w-full text-left">
              {quotations.map((quote, index) => (
                <motion.div
                  key={quote._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row text-left"
                >
                  {/* Listing Image */}
                  {quote.image && (
                    <div className="w-full md:w-80 h-56 md:h-auto md:min-h-[220px] flex-shrink-0 relative overflow-hidden bg-slate-50">
                      <img 
                        src={quote.image.startsWith("http") ? quote.image : `${IMAGE_BASE_URL}/${quote.image}`}
                        alt={quote.title}
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
                      <div className="flex items-center justify-end gap-4 mb-2">
                        <span className="text-[10px] text-slate-400 font-bold uppercase">
                          Published: {new Date(quote.date || quote.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight tracking-tight break-words text-left">
                        {quote.title}
                      </h3>
                      
                      {/* Sanitized Listing Description */}
                      <div 
                        className="rich-text-content text-slate-600 text-sm leading-relaxed break-words pt-2 text-left"
                        dangerouslySetInnerHTML={{ __html: cleanDescription(quote.description) }}
                      />
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100 text-left">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">
                        Submit quotation using portal below
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 pt-8 text-left">

          {/* Left: Process Steps */}
          <div className="lg:col-span-1 space-y-8 text-left">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm border-l-4 border-l-orange-600 text-left">
              <h4 className="text-sm font-black uppercase tracking-tight text-slate-900 mb-4 text-left">Contact Detail</h4>

              <div className="space-y-6 mt-6 text-left">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-10 h-10 flex items-center justify-center text-orange-600 bg-orange-50 rounded-xl shadow-sm">
                    <Mail size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-left">Email enquiries directly</p>
                    <p className="text-xs font-black lowercase text-slate-800 text-left">trade-enquiry@parekhfabrics.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-sm text-left">
              <ShieldCheck className="mb-4 text-orange-500 text-left" size={28} />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed text-slate-300 text-left">
                All generated quotes are valid for 7 business days as per market cotton rates.
              </p>
            </div>
          </div>

          {/* Right: The Quotation Form */}
          <div className="lg:col-span-2 bg-white border border-slate-100 shadow-xl rounded-3xl p-8 md:p-14 relative text-left">
            <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6 text-left">
              <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900 flex items-center gap-3 text-left">
                <Calculator size={20} className="text-orange-600" /> Request a Quotation
              </h3>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-orange-600" />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">Quotation Initialized</h3>
                <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed font-medium">
                  Thank you! Our automated system has received your request. The official quotation will be generated and emailed to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-left">
                {errorMsg && (
                  <div className="p-4 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border-l-4 border-red-500 text-left">
                    {errorMsg}
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-10 text-left">
                  <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all text-left">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Name of the Trader *</label>
                    <input type="text" {...register("traderName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase text-left" placeholder="Your Name" />
                    {errors.traderName && <span className="text-red-500 text-[9px] uppercase tracking-widest font-black absolute bottom-0 right-0 py-2">Required</span>}
                  </div>
                  <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all text-left">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Business Name *</label>
                    <input type="text" {...register("businessName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase text-left" placeholder="Company Name" />
                    {errors.businessName && <span className="text-red-500 text-[9px] uppercase tracking-widest font-black absolute bottom-0 right-0 py-2">Required</span>}
                  </div>
                </div>

                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all text-left">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Business Address with Pin Code *</label>
                  <input type="text" {...register("businessAddress", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase text-left" placeholder="Complete Address" />
                  {errors.businessAddress && <span className="text-red-500 text-[9px] uppercase tracking-widest font-black absolute bottom-0 right-0 py-2">Required</span>}
                </div>

                <div className="grid md:grid-cols-3 gap-10 text-left">
                  <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all text-left">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">GST No.</label>
                    <input type="text" {...register("gstNo")} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase text-left" placeholder="Optional" />
                  </div>
                  <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all text-left">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Mobile No. *</label>
                    <input type="tel" {...register("mobileNo", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase text-left" placeholder="+91" />
                    {errors.mobileNo && <span className="text-red-500 text-[9px] uppercase tracking-widest font-black absolute bottom-0 right-0 py-2">Required</span>}
                  </div>
                  <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all text-left">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Email id *</label>
                    <input type="email" {...register("email", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase text-left" placeholder="email@address" />
                    {errors.email && <span className="text-red-500 text-[9px] uppercase tracking-widest font-black absolute bottom-0 right-0 py-2">Required</span>}
                  </div>
                </div>

                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all text-left">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Options</label>
                  <select {...register("quotationType", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase cursor-pointer appearance-none border-l border-white pl-1 text-left">
                    <option value="">Select Option</option>
                    <option value="Quotation for Finished Fabric Products">Quotation for Finished Fabric Products</option>
                    <option value="Quotation for Raw Fabrics Products">Quotation for Raw Fabrics Products</option>
                    <option value="Particulars of the Products">Particulars of the Products</option>
                  </select>
                  {errors.quotationType && <span className="text-red-500 text-[9px] uppercase tracking-widest font-black absolute bottom-0 right-0 py-2">Required</span>}
                </div>

                <div className="pt-4 text-left">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-600 text-white py-5 font-black uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-orange-600/20 disabled:opacity-70 disabled:cursor-not-allowed rounded-2xl"
                  >
                    {loading ? "Generating..." : "Submit"}
                    {!loading && <ClipboardCheck size={14} />}
                  </button>
                  <div className="mt-6 text-center">
                    <a href="mailto:trade-enquiry@parekhfabrics.com" className="text-[10px] font-bold text-blue-600 uppercase tracking-widest border-b border-blue-100 hover:border-blue-600 transition-all pb-1">
                      trade-enquiry@parekhfabrics.com
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equotation;
