import React from 'react';
import { motion } from 'framer-motion';

const Management = () => {
  const team = [
    { name: "Rajesh Parekh", role: "Managing Director", bio: "30+ years in textile manufacturing & global trade.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" },
    { name: "Anil Parekh", role: "Head of Operations", bio: "Expert in sustainable cotton processing & quality control.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300" }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 block mb-4 text-center">Leadership</span>
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 text-center mb-16">Our Management.</h1>
        <div className="grid md:grid-cols-2 gap-12">
          {team.map((m, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 p-8 border border-slate-100">
              <img src={m.img} className="w-32 h-32 rounded-full object-cover grayscale border-4 border-white shadow-xl" alt={m.name} />
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">{m.name}</h3>
                <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest mt-1 mb-4">{m.role}</p>
                <p className="text-xs text-slate-500 uppercase tracking-tighter leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Management;