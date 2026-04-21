import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ClipboardCheck, Mail, ShieldCheck, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { API_BASE_URL } from '../utils/api';

const Equotation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch(`${API_BASE_URL}/quotation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          siteId: "ParekhFabrics06",
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
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 selection:bg-orange-50">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-orange-600 block mb-4">Smart Pricing Portal</span>
          <h1 className="text-4xl md:text-6xl font-black  tracking-tighter text-slate-900 leading-none">
            Digital <br /> <span className="text-slate-400 italic" style={{ color: '#f54a00' }}>e-Quotation.</span>
          </h1>
          <p className="mt-6 text-xs text-slate-600 uppercase tracking-widest font-bold max-w-xl leading-relaxed">
            Generate formal industrial quotations for Parekh Fabrics products. Our system will calculate rates based on current market standards and GST compliance.
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left: Process Steps */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-50 p-8 border-l-4 border-orange-600">
              <h4 className="text-sm font-black uppercase tracking-tight text-slate-900 mb-4">Contact Detail</h4>

              <div className="space-y-6 mt-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center text-orange-600 bg-white shadow-sm">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Email enquiries directly</p>
                    <p className="text-xs font-black lowercase">trade-enquiry@parekhfabrics.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-900 text-white rounded-sm">
              <ShieldCheck className="mb-4 text-orange-500" size={24} />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed">
                All generated quotes are valid for 7 business days as per market cotton rates.
              </p>
            </div>
          </div>

          {/* Right: The Quotation Form */}
          <div className="lg:col-span-2 bg-white border border-slate-100 shadow-2xl p-8 md:p-14 relative">
            <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6">
              <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900 flex items-center gap-3">
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {errorMsg && (
                  <div className="p-4 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border-l-4 border-red-500">
                    {errorMsg}
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Name of the Trader *</label>
                    <input type="text" {...register("traderName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="Your Name" />
                    {errors.traderName && <span className="text-red-500 text-[9px] uppercase tracking-widest font-black absolute bottom-0 right-0 py-2">Required</span>}
                  </div>
                  <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Business Name *</label>
                    <input type="text" {...register("businessName", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="Company Name" />
                    {errors.businessName && <span className="text-red-500 text-[9px] uppercase tracking-widest font-black absolute bottom-0 right-0 py-2">Required</span>}
                  </div>
                </div>

                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Business Address with Pin Code *</label>
                  <input type="text" {...register("businessAddress", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="Complete Address" />
                  {errors.businessAddress && <span className="text-red-500 text-[9px] uppercase tracking-widest font-black absolute bottom-0 right-0 py-2">Required</span>}
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                  <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">GST No.</label>
                    <input type="text" {...register("gstNo")} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="Optional" />
                  </div>
                  <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mobile No. *</label>
                    <input type="tel" {...register("mobileNo", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="+91" />
                    {errors.mobileNo && <span className="text-red-500 text-[9px] uppercase tracking-widest font-black absolute bottom-0 right-0 py-2">Required</span>}
                  </div>
                  <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email id *</label>
                    <input type="email" {...register("email", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="email@address" />
                    {errors.email && <span className="text-red-500 text-[9px] uppercase tracking-widest font-black absolute bottom-0 right-0 py-2">Required</span>}
                  </div>
                </div>

                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Options</label>
                  <select {...register("quotationType", { required: true })} className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase cursor-pointer appearance-none border-l border-white pl-1">
                    <option value="">Select Option</option>
                    <option value="Quotation for Finished Fabric Products">Quotation for Finished Fabric Products</option>
                    <option value="Quotation for Raw Fabrics Products">Quotation for Raw Fabrics Products</option>
                    <option value="Particulars of the Products">Particulars of the Products</option>
                  </select>
                  {errors.quotationType && <span className="text-red-500 text-[9px] uppercase tracking-widest font-black absolute bottom-0 right-0 py-2">Required</span>}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-600 text-white py-5 font-black uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-orange-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
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