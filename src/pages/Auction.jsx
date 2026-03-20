import React from 'react';
import { Timer, Hammer, CheckCircle } from 'lucide-react';

const Auction = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 block mb-2">Inventory Liquidation</span>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">E-Auction <span className="text-slate-400">Portal.</span></h1>
          </div>
          <div className="flex gap-4">
            <div className="bg-green-100 text-green-700 px-4 py-2 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span> Live Now
            </div>
          </div>
        </div>

        {/* Auction Card */}
        <div className="bg-white border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-1 h-64 md:h-auto bg-slate-200">
              <img src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600" className="w-full h-full object-cover grayscale" alt="Auction Item" />
            </div>
            <div className="md:col-span-2 p-8 md:p-12">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900">Surplus Raw Cotton Batch #402</h3>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mt-1">Lot Size: 5000 KG • Grade: A+</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Current Bid</p>
                  <p className="text-2xl font-black text-orange-600 tracking-tighter">₹ 4,50,000</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6 border-y border-slate-100 mb-8">
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Time Remaining</p>
                  <div className="flex items-center gap-2 font-black text-slate-900 uppercase text-xs">
                    <Timer size={14} className="text-orange-600" /> 04h : 22m : 10s
                  </div>
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Bids</p>
                  <div className="font-black text-slate-900 uppercase text-xs">24 Active Bids</div>
                </div>
                <div className="hidden md:block">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Next Minimum Bid</p>
                  <div className="font-black text-slate-900 uppercase text-xs">₹ 4,55,000</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-900 text-white px-10 py-4 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-orange-600 transition-all flex items-center gap-3">
                  <Hammer size={16} /> Place Bid Now
                </button>
                <button className="border border-slate-200 text-slate-900 px-10 py-4 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-slate-100 transition-all">
                  Download Specs (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-8 flex items-center gap-3 text-slate-400">
           <CheckCircle size={16} className="text-green-600" />
           <p className="text-[9px] font-bold uppercase tracking-widest italic">All auctions are verified and secure under Parekh Fabrics B2B Terms.</p>
        </div>
      </div>
    </div>
  );
};

export default Auction;