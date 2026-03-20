import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ClipboardCheck, ArrowRight, ShieldCheck } from 'lucide-react';

const Equotation = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 selection:bg-orange-50">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 block mb-4">Smart Pricing Portal</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-none">
            Digital <br /> <span className="text-slate-400 italic" style={{ WebkitTextStroke: '1px #94a3b8', color: 'transparent' }}>e-Quotation.</span>
          </h1>
          <p className="mt-6 text-xs text-slate-500 uppercase tracking-widest font-bold max-w-xl leading-relaxed">
            Generate industrial-grade quotations for bulk cotton orders. Our automated system processes specifications for global export standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left: Process Steps */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-50 p-8 border-l-4 border-orange-600">
              <h4 className="text-sm font-black uppercase tracking-tight text-slate-900 mb-4">How it works</h4>
              <ul className="space-y-6">
                {[
                  { n: '01', t: 'Select Fabric Type', d: 'Choose from Pure Cotton, Canvas, or Yarn.' },
                  { n: '02', t: 'Specify Metrics', d: 'Enter GSM, Width, and Quantity.' },
                  { n: '03', t: 'Get Quote', d: 'Receive digital PDF quote via email.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-orange-600 font-black text-xs">{item.n}</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-900">{item.t}</p>
                      <p className="text-[9px] text-slate-500 uppercase mt-1 leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 bg-blue-900 text-white rounded-sm">
              <ShieldCheck className="mb-4 text-orange-500" size={24} />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">
                All generated quotes are valid for 7 business days as per market cotton rates.
              </p>
            </div>
          </div>

          {/* Right: The Quotation Form */}
          <div className="lg:col-span-2 bg-white border border-slate-100 shadow-2xl p-10 md:p-14 relative">
             <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6">
                <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900 flex items-center gap-3">
                  <Calculator size={20} className="text-orange-600" /> Request Details
                </h3>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Step {step} of 2</span>
             </div>

             <form className="space-y-10">
                {step === 1 ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="border-b border-slate-200 pb-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Fabric Quality</label>
                        <select className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase tracking-widest cursor-pointer">
                          <option>GOTS Certified Organic Cotton</option>
                          <option>Industrial Grade Canvas</option>
                          <option>Combed Yarn 40s/60s</option>
                        </select>
                      </div>
                      <div className="border-b border-slate-200 pb-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">GSM Requirement</label>
                        <input type="text" placeholder="Ex: 120 - 450 GSM" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="border-b border-slate-200 pb-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Width (Inches)</label>
                        <input type="text" placeholder="Ex: 44 / 58 / 62 Inches" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
                      </div>
                      <div className="border-b border-slate-200 pb-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Order Volume</label>
                        <input type="text" placeholder="Quantity in Meters" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
                      </div>
                    </div>
                    <button 
                      onClick={() => setStep(2)}
                      type="button" 
                      className="w-full bg-slate-900 text-white py-5 font-black uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-orange-600 transition-all"
                    >
                      Next Step <ArrowRight size={14} />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="border-b border-slate-200 pb-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Business Email</label>
                        <input type="email" placeholder="trade@company.com" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
                      </div>
                      <div className="border-b border-slate-200 pb-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Destination Port</label>
                        <input type="text" placeholder="City / Country" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setStep(1)}
                        type="button" 
                        className="w-1/3 border border-slate-200 py-5 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-slate-50 transition-all"
                      >
                        Back
                      </button>
                      <button 
                        type="submit" 
                        className="w-2/3 bg-orange-600 text-white py-5 font-black uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-orange-600/20"
                      >
                        Generate Quote <ClipboardCheck size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equotation;