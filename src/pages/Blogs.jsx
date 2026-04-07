import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blogs = () => {
  const posts = [
    { title: "The Future of Sustainable Cotton in India", date: "Mar 18, 2026", tag: "Innovation" },
    { title: "Navigating Global Textile Supply Chain Challenges", date: "Mar 10, 2026", tag: "Logistics" }
  ];

  return (
   <div className="bg-white min-h-screen pt-32 pb-20 px-6">
  <div className="max-w-6xl mx-auto">
    
    {/* Header Section with New P-Tag */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 leading-none mb-6">
          Textile <br /><span className="text-slate-400">Insights.</span>
        </h2>
        <p className="text-sm md:text-base text-slate-600 font-medium uppercase tracking-wider leading-relaxed border-l-2 border-orange-600 pl-6">
          Join and participate in our nation-wide campaign to digitalize the Textile 
          Sector, one of the largest sectors of India.
        </p>
      </div>
    </div>

    {/* Grid Section */}
    <div className="grid md:grid-cols-2 gap-12">
      {posts.map((p, i) => (
        <div key={i} className="group cursor-pointer">
          <div className="aspect-video bg-slate-100 mb-6 overflow-hidden">
            <img 
              src={`https://plus.unsplash.com/premium_photo-1769958353118-297371a6c410?w=600&auto=format&fit=crop&q=60`} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              alt={p.title}
            />
          </div>
          <span className="text-[9px] font-black text-orange-600 uppercase tracking-[0.2em]">{p.tag}</span>
          <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mt-2 mb-4 group-hover:text-blue-900 transition-colors">
            {p.title}
          </h3>
          <div className="flex items-center gap-4">
             <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{p.date}</span>
             <ArrowRight size={14} className="text-slate-300 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};
export default Blogs;