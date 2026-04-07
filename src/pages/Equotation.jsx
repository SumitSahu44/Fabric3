import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ClipboardCheck, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

const Equotation = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 selection:bg-orange-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-orange-600 block mb-4">Smart Pricing Portal</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-none">
            Digital <br /> <span className="text-slate-400 italic" style={{ WebkitTextStroke: '1px #94a3b8', color: 'transparent' }}>e-Quotation.</span>
          </h1>
          <p className="mt-6 text-xs text-slate-600 uppercase tracking-widest font-bold max-w-xl leading-relaxed">
            Generate formal industrial quotations for Parekh Fabrics products. Our system will calculate rates based on current market standards and GST compliance.
          </p>
        </div>

    {/* Form Container: Width ko 'max-w-2xl' karke center kiya gaya hai */}
<div className="max-w-2xl mx-auto bg-white border border-slate-100 shadow-2xl p-8 md:p-12 relative rounded-xl">
  
  <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6">
    <h3 className="text-lg font-black uppercase tracking-tighter text-slate-900 flex items-center gap-3">
      <FileText size={18} className="text-orange-600" /> Quotation Request
    </h3>
  </div>

  <form className="space-y-7">
    {/* 1. Name of the Trader & Business Name */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Name of the Trader</label>
        <input type="text" placeholder="Full Name" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
      </div>
      <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Business Name</label>
        <input type="text" placeholder="Company Name" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
      </div>
    </div>

    {/* 2. Business Address with Pin Code */}
    <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Business Address with Pin Code</label>
      <input type="text" placeholder="Full Office/Factory Address with Pincode" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
    </div>

    {/* 3. GST No. & Mobile No. */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">GST No.</label>
        <input type="text" placeholder="15-Digit GSTIN" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
      </div>
      <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mobile No.</label>
        <input type="tel" placeholder="+91 00000 00000" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
      </div>
    </div>

    {/* 4. Email id */}
    <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Id</label>
      <input type="email" placeholder="business@email.com" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
    </div>

    {/* 5. Options (Roll-down mode) */}
    <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Quotation For</label>
      <select className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase tracking-widest cursor-pointer appearance-none">
        <option>Select Option</option>
        <option>Quotation for Finished Fabric Products</option>
        <option>Quotation for Raw Fabrics Products</option>
      </select>
    </div>

    {/* 6. Particulars of the Products */}
    <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Particulars of the Products</label>
      <textarea rows="3" placeholder="Mention product details..." className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase resize-none"></textarea>
    </div>

    {/* Submit Button */}
    <button 
      type="submit" 
      className="w-full bg-slate-900 text-white py-4 font-black uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-lg rounded-lg"
    >
      Generate Quote <ClipboardCheck size={14} />
    </button>
  </form>
</div>
      </div>
    </div>
  );
};

export default Equotation;