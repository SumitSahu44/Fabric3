import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const Enquiry = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg('');

    const formData = new FormData();
    formData.append("siteId", "ParekhFabrics06");
    formData.append("traderName", data.traderName);
    formData.append("businessName", data.businessName);
    formData.append("businessAddress", data.businessAddress);
    formData.append("gstNo", data.gstNo || "");
    formData.append("mobileNo", data.mobileNo);
    formData.append("email", data.email);
    formData.append("enquiryType", data.enquiryType);

    if (data.gstCertificate && data.gstCertificate.length > 0) {
      formData.append("gstCertificate", data.gstCertificate[0]);
    }

    try {
      const response = await fetch("http://localhost:5000/api/trade-enquiry", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(result.message || 'Failed to send enquiry. Please try again.');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMsg('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left Side: Contact Info */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-6">Trade Enquiry <span className="text-orange-600 block text-sm mt-2">(e-Form)</span></h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium uppercase tracking-tight">
                For bulk orders, business tie-ups, and job work contracts. Fill the trade e-form and our compliance team will review your details.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center text-orange-600 border border-slate-100">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Call Us</p>
                  <p className="text-xs font-black">6353778329</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center text-blue-900 border border-slate-100">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-xs font-black">trade-enquiry@parekhfabrics.com</p>
                </div>
              </div>
            </div>

            {/* B2B Status */}
            <div className="pt-10 border-t border-slate-200">
              <div className="p-6 bg-slate-900 text-white rounded-br-3xl">
                <p className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.2em] mb-2">Verification</p>
                <p className="text-sm font-medium leading-relaxed opacity-80">
                  GST verification is mandatory for all B2B trade contracts and wholesale pricing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Professional e-Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 shadow-2xl border border-slate-100">
            {isSubmitted ? (
               <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} 
               animate={{ opacity: 1, scale: 1 }} 
               transition={{ duration: 0.4 }}
               className="flex flex-col items-center justify-center h-full text-center py-12"
             >
               <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle size={40} className="text-orange-600" />
               </div>
               <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">Request Received</h3>
               <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed font-medium">
                 Thank you! Your trade inquiry has been submitted successfully. Our commercial team will contact you shortly.
               </p>
             </motion.div>
            ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" encType="multipart/form-data">
              {errorMsg && (
                <div className="p-4 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border-l-4 border-red-500">
                    {errorMsg}
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Name of the Trader *</label>
                  <input type="text" {...register("traderName", { required: true })} className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="Your Name" />
                  {errors.traderName && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Business Name *</label>
                  <input type="text" {...register("businessName", { required: true })} className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="Company Name" />
                  {errors.businessName && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
              </div>

              <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Business Address with Pin code *</label>
                <input type="text" {...register("businessAddress", { required: true })} className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="Complete Address with pin code" />
                {errors.businessAddress && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">GST No.</label>
                  <input type="text" {...register("gstNo")} className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="Optional" />
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Mobile No. *</label>
                  <input type="tel" {...register("mobileNo", { required: true })} className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="+91" />
                  {errors.mobileNo && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Email id *</label>
                  <input type="email" {...register("email", { required: true })} className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="email@address" />
                  {errors.email && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Options (Roll-down mode) *</label>
                  <select {...register("enquiryType", { required: true })} className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest appearance-none cursor-pointer">
                    <option value="">Select Option</option>
                    <option value="For Bulk Purchase">For Bulk Purchase</option>
                    <option value="For Retail Purchase">For Retail Purchase</option>
                    <option value="For Job Work Contract">For Job Work Contract</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.enquiryType && <span className="absolute right-0 bottom-2 text-[8px] text-red-500 font-bold uppercase">Required</span>}
                </div>
                <div className="relative pb-2 focus-within:border-orange-600 transition-all flex flex-col justify-end">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 leading-none">Upload GST Certificate</label>
                  <input type="file" {...register("gstCertificate")} className="w-full text-[10px] font-bold text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-sm file:border-0 file:text-[9px] file:uppercase file:font-black file:tracking-widest file:bg-slate-100 file:text-slate-900 hover:file:bg-orange-600 hover:file:text-white cursor-pointer transition-all" />
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" disabled={loading} className="flex items-center justify-center gap-3 w-full bg-slate-900 text-white py-5 font-black uppercase text-[11px] tracking-[0.3em] hover:bg-orange-600 transition-all shadow-xl disabled:opacity-70">
                    {loading ? "Submitting..." : "Submit"}
                    {!loading && <Send size={14} />}
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

export default Enquiry;