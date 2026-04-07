import React from 'react';
import { Mail, Phone, Upload, Send } from 'lucide-react';

const Enquiry = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-6">Trade Enquiry</h2>
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
                  <p className="text-xs font-black">trade@parekhfabrics.com</p>
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

          {/* Right Side: Updated Trade Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 shadow-2xl border border-slate-100 rounded-2xl">
            <form className="space-y-8">
              
              {/* Row 1: Names */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Name of the Trader</label>
                  <input type="text" className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="Enter full name" />
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Business Name</label>
                  <input type="text" className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="Company / Firm Name" />
                </div>
              </div>

              {/* Row 2: Address & GST */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Business Address with Pin code</label>
                  <input type="text" className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="Full Address & Pincode" />
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">GST No.</label>
                  <input type="text" className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="22AAAAA0000A1Z5" />
                </div>
              </div>

              {/* Row 3: Contact Details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Mobile No.</label>
                  <input type="tel" className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="+91 00000 00000" />
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Email Id</label>
                  <input type="email" className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="business@email.com" />
                </div>
              </div>

              {/* Row 4: Options (Dropdown) */}
              <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Purpose of Enquiry</label>
                <select className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest appearance-none cursor-pointer">
                  <option>Select Option</option>
                  <option>For Bulk Purchase</option>
                  <option>For Retail Purchase</option>
                  <option>For Job Work Contract</option>
                  <option>Others</option>
                </select>
              </div>

              {/* Row 5: File Upload */}
              <div className="relative border-2 border-dashed border-slate-200 p-6 rounded-xl hover:border-orange-600 transition-all group">
                <input type="file" id="gst-upload" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <div className="flex flex-col items-center justify-center gap-2">
                  <Upload size={20} className="text-slate-400 group-hover:text-orange-600 transition-colors" />
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-900">Upload GST Certificate</p>
                  <p className="text-[8px] text-slate-400 font-medium">PDF, JPG or PNG (Max 5MB)</p>
                </div>
              </div>

              <button type="submit" className="flex items-center justify-center gap-3 w-full bg-slate-900 text-white py-5 font-black uppercase text-[11px] tracking-[0.3em] hover:bg-orange-600 transition-all shadow-xl rounded-lg">
                Submit Trade Form <Send size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Enquiry;