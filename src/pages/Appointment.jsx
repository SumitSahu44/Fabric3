import React from 'react';
import { motion } from 'framer-motion';
// Ye imports zaroori hain error hatane ke liye
import { Calendar, Upload, ArrowRight } from 'lucide-react'; 

const Appointment = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 shadow-2xl border-t-4 border-orange-600 rounded-b-xl">
        <div className="flex items-center gap-3 mb-10">
          <Calendar size={24} className="text-orange-600" />
          <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900">
            Visit with Appointment
          </h2>
        </div>

        <form className="space-y-7">
          {/* Visitor & Business Name */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Name of the Visitor</label>
              <input type="text" placeholder="Full Name" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
            </div>
            <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Name of the Business</label>
              <input type="text" placeholder="Company Name" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
            </div>
          </div>

          {/* Visitor Address */}
          <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Visitor Address with Pin code</label>
            <input type="text" placeholder="Full Address & Pincode" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
          </div>

          {/* Mobile & Email */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mobile No.</label>
              <input type="tel" placeholder="+91 00000 00000" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
            </div>
            <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Id</label>
              <input type="email" placeholder="visitor@email.com" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
            </div>
          </div>

          {/* ID Selection */}
          <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Select ID Proof Type</label>
            <select className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase tracking-widest cursor-pointer appearance-none">
              <option value="">Choose ID Type</option>
              <option value="aadhaar">Aadhaar Card</option>
              <option value="eci">ECI Card</option>
              <option value="dl">DL (Driving License)</option>
            </select>
          </div>

          {/* Describe Reason */}
          <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Describe the reason for Visit</label>
            <textarea rows="2" placeholder="Purpose of your visit..." className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase resize-none"></textarea>
          </div>

          {/* Upload Proof */}
          <div className="relative border-2 border-dashed border-slate-100 p-8 rounded-xl hover:border-orange-600 transition-all group flex flex-col items-center justify-center gap-3 bg-slate-50/50">
            <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            <Upload size={20} className="text-slate-400 group-hover:text-orange-600 transition-colors" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Upload Residential / Business Proof</p>
          </div>

          <button type="submit" className="w-full bg-slate-900 text-white py-5 font-black uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-xl">
            Schedule Visit <ArrowRight size={14} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;