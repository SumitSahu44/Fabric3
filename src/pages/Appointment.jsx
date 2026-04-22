import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail } from 'lucide-react';
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
    <div className="bg-slate-50 min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-orange-600 block mb-2">
            Corporate Office
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-tight">
            Visit with <span className="text-slate-600">Appointment</span>
            <span className="text-orange-600 block text-[10px] sm:text-xs mt-2 uppercase"></span>
          </h1>
        </div>

        {/* Card */}
        <div className="bg-white p-5 sm:p-8 md:p-14 shadow-2xl border-t-4 border-orange-600">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 sm:mb-10 border-b border-slate-100 pb-4 sm:pb-6">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tighter text-slate-900 leading-none">
              Book Appointment
            </h2>

            <div className="text-left sm:text-right flex items-center gap-2">
              <Mail size={14} className="text-orange-600" />
              <span className="text-[8px] sm:text-[12px] font-black text-slate-600 uppercase tracking-widest lowercase break-all">
                appointment@parekhfabrics.com
              </span>
            </div>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center text-center py-10 sm:py-12"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-50 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                <CheckCircle size={32} className="sm:w-10 sm:h-10 text-orange-600" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-slate-900 mb-3 sm:mb-4">
                Request Sent
              </h3>

              <p className="text-slate-500 max-w-sm mx-auto text-xs sm:text-sm leading-relaxed font-medium">
                Thank you! Your appointment request has been submitted. Our team will review the details and confirm your visit shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8" encType="multipart/form-data">

              {errorMsg && (
                <div className="p-3 sm:p-4 bg-red-50 text-red-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest border-l-4 border-red-500">
                  {errorMsg}
                </div>
              )}

              {/* Grid 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[8px] sm:text-[12px] font-black text-slate-600 uppercase tracking-widest">
                    Name of the Visitor *
                  </label>
                  <input type="text" {...register("visitorName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
                  {errors.visitorName && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>

                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[8px] sm:text-[12px] font-black text-slate-600 uppercase tracking-widest">
                    Name of the Business *
                  </label>
                  <input type="text" {...register("businessName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
                  {errors.businessName && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
              </div>

              {/* Address */}
              <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                <label className="text-[8px] sm:text-[12px] font-black text-slate-600 uppercase tracking-widest">
                  Visitor Address with Pin code *
                </label>
                <input type="text" {...register("visitorAddress", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
                {errors.visitorAddress && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
              </div>

              {/* Grid 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[8px] sm:text-[12px] font-black text-slate-600 uppercase tracking-widest">
                    Mobile No. *
                  </label>
                  <input type="tel" {...register("mobileNo", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
                  {errors.mobileNo && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>

                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[8px] sm:text-[12px] font-black text-slate-600 uppercase tracking-widest">
                    Email Id *
                  </label>
                  <input type="email" {...register("email", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
                  {errors.email && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
              </div>

              {/* Grid 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[8px] sm:text-[12px] font-black text-slate-600 uppercase tracking-widest">
                    Option
                  </label>
                  <select {...register("proofType", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase">
                    <option value="">Select ID Proof</option>
                    <option value="Aadhaar Card">Aadhaar Card</option>
                    <option value="ECI Card">ECI Card</option>
                    <option value="DL">DL</option>
                  </select>
                  {errors.proofType && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>

                <div className="flex flex-col justify-end">
                  <label className="text-[8px] sm:text-[12px] font-bold text-slate-600 uppercase tracking-widest mb-1">
                    Upload Residential / Business Proof
                  </label>
                  <input type="file" {...register("proofFile")} className="w-full text-[10px] font-bold text-slate-500" />
                </div>
              </div>

              {/* Reason */}
              <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                <label className="text-[8px] sm:text-[12px] font-black text-slate-600 uppercase tracking-widest">
                  Describe the reason for Visit *
                </label>
                <textarea rows="4" {...register("reasonForVisit", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase resize-none"></textarea>
                {errors.reasonForVisit && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
              </div>

              {/* Button */}
              <div className="pt-4 sm:pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-4 sm:py-5 font-black uppercase text-[10px] sm:text-[11px] tracking-[0.3em] hover:bg-orange-600 transition-all disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>

                <div className="mt-5 sm:mt-6 text-center">
                  <a href="mailto:appointment@parekhfabrics.com" className="text-[9px] sm:text-[10px] font-bold text-blue-600 uppercase tracking-widest border-b border-blue-100 hover:border-blue-600 pb-1">
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