import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Hammer, CheckCircle, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';

const Auction = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg('');

    const formData = new FormData();
    formData.append("siteId", "ParekhFabrics06");
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
      const response = await fetch("http://localhost:5000/api/auction", {
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
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-orange-600 block mb-2">Inventory Liquidation</span>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900"><span className="lowercase">e-</span>Auction <span className="text-slate-400">Portal.</span></h1>
            <p className="text-slate-500 font-bold tracking-widest text-xs mt-4">( At Present, No e-Auction published )</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-slate-200 text-slate-600 px-4 py-2 text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
              Closed
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white border border-slate-200 overflow-hidden shadow-sm p-8 md:p-14">
          <div className="flex justify-between items-start mb-10 border-b border-slate-100 pb-6">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900">Participation Request <span className="text-orange-600 block text-xs mt-1"></span></h3>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mt-2">Register your interest for upcoming batches.</p>
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" encType="multipart/form-data">
              {errorMsg && (
                <div className="p-4 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border-l-4 border-red-500">
                  {errorMsg}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Name of the Participant *</label>
                  <input type="text" {...register("participantName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="Your Name" />
                  {errors.participantName && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Legal Name of the Business *</label>
                  <input type="text" {...register("legalBusinessName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="Company Name" />
                  {errors.legalBusinessName && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
              </div>

              <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Business Address with Pin code *</label>
                <input type="text" {...register("businessAddress", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="Complete Address" />
                {errors.businessAddress && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
              </div>

              <div className="grid md:grid-cols-3 gap-10">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">GST No.</label>
                  <input type="text" {...register("gstNo")} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="Optional" />
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mobile No. *</label>
                  <input type="tel" {...register("mobileNo", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="+91" />
                  {errors.mobileNo && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email id *</label>
                  <input type="email" {...register("email", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="email@address" />
                  {errors.email && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
              </div>

              <div className="relative pb-2 focus-within:border-orange-600 transition-all flex flex-col justify-end">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 leading-none">Upload GST Certificate</label>
                <input type="file" {...register("gstCertificate")} className="w-full text-xs font-bold text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-[9px] file:uppercase file:font-black file:tracking-widest file:bg-slate-900 file:text-white hover:file:bg-orange-600 cursor-pointer transition-all" />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-5 font-black uppercase text-[11px] tracking-[0.3em] hover:bg-orange-600 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl"
                >
                  {loading ? "Submitting..." : "Submit"} <Hammer size={16} />
                </button>
                <div className="mt-8 text-center border-t border-slate-50 pt-8">
                  <a href="mailto:services@parekhfabrics.com" className="text-[10px] font-bold text-blue-600 uppercase tracking-widest border-b border-blue-100 hover:border-blue-600 transition-all pb-1">
                    services@parekhfabrics.com
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Security Note */}
        <div className="mt-8 flex items-center gap-3 text-slate-400">
          <CheckCircle size={16} className="text-green-600" />
          <p className="text-[9px] font-bold uppercase tracking-widest italic">All auctions are verified and secure under Parekh Fabrics B2B Terms.</p>
        </div>
      </div>
    </div>
  );
};

export default Auction;