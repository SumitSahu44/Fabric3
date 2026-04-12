import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { API_BASE_URL } from '../utils/api';

const Appointment = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg('');

    const formData = new FormData();
    formData.append("siteId", "ParekhFabrics06");
    formData.append("visitorName", data.visitorName);
    formData.append("businessName", data.businessName);
    formData.append("visitorAddress", data.visitorAddress);
    formData.append("mobileNo", data.mobileNo);
    formData.append("email", data.email);
    formData.append("proofType", data.proofType);
    formData.append("reasonForVisit", data.reasonForVisit);

    if (data.proofFile && data.proofFile.length > 0) {
      formData.append("proofFile", data.proofFile[0]);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/appointment`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(result.message || 'Failed to submit appointment request. Please try again.');
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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-orange-600 block mb-2">Corporate Office</span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Visit with <span className="text-slate-400">Appointment</span> <span className="text-orange-600 block text-xs mt-2 uppercase"></span></h1>
        </div>

        <div className="bg-white p-8 md:p-14 shadow-2xl border-t-4 border-orange-600">
          <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6">
            <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 leading-none">Book Appointment</h2>
            <div className="text-right flex items-center gap-2">
              <Mail size={14} className="text-orange-600" />
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest lowercase">appointment@parekhfabrics.com</span>
            </div>
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
              <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">Request Sent</h3>
              <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed font-medium">
                Thank you! Your appointment request has been submitted. Our team will review the details and confirm your visit shortly.
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
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Name of the Visitor *</label>
                  <input type="text" {...register("visitorName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="Enter full name" />
                  {errors.visitorName && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Name of the Business *</label>
                  <input type="text" {...register("businessName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="Enter company name" />
                  {errors.businessName && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
              </div>

              <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Visitor Address with Pin code *</label>
                <input type="text" {...register("visitorAddress", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="Complete address including pincode" />
                {errors.visitorAddress && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mobile No. *</label>
                  <input type="tel" {...register("mobileNo", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="+91" />
                  {errors.mobileNo && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Id *</label>
                  <input type="email" {...register("email", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="your@email.com" />
                  {errors.email && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Option</label>
                  <select {...register("proofType", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase appearance-none cursor-pointer border-l border-white pl-1">
                    <option value="">Select ID Proof</option>
                    <option value="Aadhaar Card">Aadhaar Card</option>
                    <option value="ECI Card">ECI Card</option>
                    <option value="DL">DL</option>
                  </select>
                  {errors.proofType && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
                <div className="relative pb-2 focus-within:border-orange-600 transition-all flex flex-col justify-end">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 leading-none">Upload Residential / Business Proof</label>
                  <input type="file" {...register("proofFile")} className="w-full text-[10px] font-bold text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-sm file:border-0 file:text-[9px] file:uppercase file:font-black file:tracking-widest file:bg-slate-100 file:text-slate-900 hover:file:bg-orange-600 hover:file:text-white cursor-pointer transition-all" />
                </div>
              </div>

              <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Describe the reason for Visit *</label>
                <textarea rows="4" {...register("reasonForVisit", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase resize-none" placeholder="Provide details here..."></textarea>
                {errors.reasonForVisit && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-5 font-black uppercase text-[11px] tracking-[0.3em] hover:bg-orange-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-xl"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
                <div className="mt-6 text-center">
                  <a href="mailto:appointment@parekhfabrics.com" className="text-[10px] font-bold text-blue-600 uppercase tracking-widest border-b border-blue-100 hover:border-blue-600 transition-all pb-1">
                    appointment@parekhfabrics.com
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;