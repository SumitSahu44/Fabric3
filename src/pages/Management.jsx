import React from 'react';
import { motion } from 'framer-motion';

const Management = () => {
  const team = [
    { name: "Rajesh Parekh", role: "Managing Director", bio: "30+ years in textile manufacturing & global trade.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" },
    { name: "Anil Parekh", role: "Head of Operations", bio: "Expert in sustainable cotton processing & quality control.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300" }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6">
    <div className="max-w-6xl mx-auto px-6 py-16">
  {/* Header Section */}
  <div className="text-center mb-20">
    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-orange-600 block mb-3">
      Leadership
    </span>
    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 mb-6">
      Our <span className="text-slate-400">Management.</span>
    </h1>
    <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
    <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-600 font-medium leading-relaxed">
      Parekh Fabrics is administered and governed by a highly skilled, experienced, and qualified 
      management team dedicated to excellence in the textile industry.
    </p>
  </div>


</div>
    </div>
  );
};
export default Management;