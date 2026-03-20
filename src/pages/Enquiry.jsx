import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Enquiry = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-6">Trade Enquiry</h2>
              <p className="text-xs text-slate-500 leading-relaxed font-medium uppercase tracking-tight">
                For bulk orders, export inquiries, and industrial contracts. Fill the e-form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center text-orange-600">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Call Us</p>
                  <p className="text-xs font-black">+91 79 XXXX XXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center text-blue-900">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-xs font-black">trade@parekhfabrics.com</p>
                </div>
              </div>
            </div>

            {/* B2B Badges */}
            <div className="pt-10 border-t border-slate-200 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white text-center">
                <p className="text-lg font-black tracking-tighter">e-Auction</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Live Now</p>
              </div>
              <div className="p-4 bg-white text-center border-b-2 border-orange-600">
                <p className="text-lg font-black tracking-tighter">Tender</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Open Batch</p>
              </div>
            </div>
          </div>

          {/* Right Side: Professional e-Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 shadow-2xl border border-slate-100">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="John Doe" />
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Company Name</label>
                  <input type="text" className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="Textile Corp" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Requirement Type</label>
                  <select className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest appearance-none cursor-pointer">
                    <option>Cotton Fabric (Bulk)</option>
                    <option>Yarn Export</option>
                    <option>Industrial Canvas</option>
                  </select>
                </div>
                <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Quantity (Mtrs)</label>
                  <input type="number" className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest" placeholder="5000" />
                </div>
              </div>

              <div className="relative border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Message / Specifications</label>
                <textarea rows="3" className="w-full bg-transparent border-none outline-none py-2 text-xs font-bold uppercase tracking-widest resize-none" placeholder="Enter details..."></textarea>
              </div>

              <button className="flex items-center justify-center gap-3 w-full bg-slate-900 text-white py-5 font-black uppercase text-[11px] tracking-[0.3em] hover:bg-orange-600 transition-all shadow-xl">
                Submit Enquiry <Send size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Enquiry;