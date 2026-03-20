import React from 'react';
import { Calendar, User, Building, Clock } from 'lucide-react';

const Appointment = () => (
  <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-6">
    <div className="max-w-2xl mx-auto bg-white p-12 shadow-2xl border-t-4 border-orange-600">
      <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-8">Visit with Appointment</h2>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-b border-slate-200 pb-2">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
            <input type="text" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="Enter Name" />
          </div>
          <div className="border-b border-slate-200 pb-2">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Company Name</label>
            <input type="text" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" placeholder="Enter Company" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-b border-slate-200 pb-2">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Preferred Date</label>
            <input type="date" className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase" />
          </div>
          <div className="border-b border-slate-200 pb-2">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Preferred Time</label>
            <select className="w-full bg-transparent outline-none py-2 text-xs font-bold uppercase appearance-none">
              <option>10:00 AM - 12:00 PM</option>
              <option>02:00 PM - 04:00 PM</option>
            </select>
          </div>
        </div>
        <button className="w-full bg-slate-900 text-white py-4 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-orange-600 transition-all">Schedule Visit</button>
      </form>
    </div>
  </div>
);
export default Appointment;