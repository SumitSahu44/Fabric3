import React from 'react';
import { Timer, Hammer, CheckCircle, Upload, Send, FileText } from 'lucide-react';

const Auction = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
    

     <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-6">
  <div className="max-w-4xl mx-auto">
    
    {/* Heading Centered */}
    <div className="text-center mb-12">
      <span className="text-[11px] font-black uppercase tracking-[0.4em] text-orange-600 block mb-2">Inventory Liquidation</span>
      <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">
        <span className="lowercase">e-</span>Auction <span className="text-slate-400">Portal.</span>
      </h1>
      <div className="flex justify-center">
        <div className="bg-green-100 text-green-700 px-4 py-2 text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span> Registration Live
        </div>
      </div>
    </div>

    {/* Form Centered with optimized width */}
    <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 shadow-2xl border border-slate-100 rounded-2xl">
      <div className="flex items-center justify-center gap-3 mb-10 border-b border-slate-100 pb-6">
        <Hammer size={20} className="text-orange-600" />
        <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900">Bidder Registration</h3>
      </div>

      <form className="space-y-7">
        {/* Row 1: Participant & Legal Name */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Name of the Participant</label>
            <input type="text" placeholder="Full Name" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
          </div>
          <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Legal Name of the Business</label>
            <input type="text" placeholder="Company Name" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
          </div>
        </div>

        {/* Row 2: Address */}
        <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Business Address with Pin code</label>
          <input type="text" placeholder="Complete Address & Pincode" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
        </div>

        {/* Row 3: GST & Mobile */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">GST No.</label>
            <input type="text" placeholder="GSTIN Number" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
          </div>
          <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mobile No.</label>
            <input type="tel" placeholder="+91 00000 00000" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
          </div>
        </div>

        {/* Row 4: Email */}
        <div className="border-b border-slate-200 pb-2 focus-within:border-orange-600 transition-all">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Id</label>
          <input type="email" placeholder="trade@company.com" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
        </div>

        {/* Row 5: Upload GST Certificate */}
        <div className="relative border-2 border-dashed border-slate-200 p-8 rounded-xl hover:border-orange-600 transition-all group flex flex-col items-center justify-center gap-3">
          <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
          <Upload size={24} className="text-slate-400 group-hover:text-orange-600" />
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Upload GST Certificate (PDF/JPG)</p>
        </div>

        <button className="w-full bg-slate-900 text-white py-5 font-black uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-xl rounded-lg">
          Register & Place Bid <Send size={14} />
        </button>
      </form>
    </div>

    {/* Security Note Centered */}
    <div className="mt-12 flex items-center justify-center gap-3 text-slate-400">
       <CheckCircle size={16} className="text-green-600" />
       <p className="text-[9px] font-bold uppercase tracking-widest italic">All auctions are verified and secure under Parekh Fabrics B2B Terms.</p>
    </div>
  </div>
</div>

      
      </div>
    </div>
  );
};

export default Auction;