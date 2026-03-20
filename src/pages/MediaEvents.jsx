import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowUpRight, Newspaper, Image as ImageIcon, Video } from 'lucide-react';

const MediaEvents = () => {
  const [filter, setFilter] = useState('all');

 const events = [
  {
    id: 1,
    category: 'exhibition',
    title: 'India Textile & Garment Expo 2024',
    date: 'March 15-18, 2024',
    location: 'Pragati Maidan, New Delhi',
    image: 'https://images.unsplash.com/photo-1562869929-bda0650edb1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRleHRpbGV8ZW58MHx8MHx8fDA%3D',
    desc: 'Showcasing premium cotton, yarns, and sustainable fabric innovations to global buyers.'
  },
  {
    id: 2,
    category: 'news',
    title: 'Organic Cotton Certification Achieved',
    date: 'Feb 10, 2024',
    location: 'Ahmedabad Textile Hub',
    image: 'https://images.unsplash.com/photo-1601056639638-c53c50e13ead?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGV4dGlsZXxlbnwwfHwwfHx8MA%3D%3D',
    desc: 'Successfully achieved international certification for eco-friendly and organic textile production.'
  },
  {
    id: 3,
    category: 'event',
    title: 'Weaving Technology Workshop',
    date: 'Jan 25, 2024',
    location: 'Surat Textile Industry',
    image: 'https://media.istockphoto.com/id/1180345900/photo/workers-on-factory-floor-of-mumbai-dyeing-and-printing-mill.webp?a=1&b=1&s=612x612&w=0&k=20&c=7wvpbXHt_XiQPZ7ZJk3mnb6jAp_7w3fCST10hHPSbpU=',
    desc: 'Hands-on workshop on modern weaving machines and advanced textile manufacturing techniques.'
  },
  {
    id: 4,
    category: 'exhibition',
    title: 'International Fabric Fair 2023',
    date: 'July 2023',
    location: 'Mumbai Exhibition Center',
    image: 'https://media.istockphoto.com/id/171583308/photo/denim-textile-industry-big-weaving-room-hdr.webp?a=1&b=1&s=612x612&w=0&k=20&c=Twkye7uE4XNG9Qg5XkF_hLYsW3aGzM8WVrnRTTsgXkw=',
    desc: 'Connecting with fashion brands and exporters through a global textile networking platform.'
  }
];
  const filteredEvents = filter === 'all' ? events : events.filter(e => e.category === filter);

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-600 block mb-4 italic">Corporate Newsroom</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-[0.9]">
              Media & <br /> <span className="text-slate-300 italic" style={{ WebkitTextStroke: '1px #cbd5e1', color: 'transparent' }}>Live Events.</span>
            </h1>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {['all', 'exhibition', 'news', 'event'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === f ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <AnimatePresence mode='wait'>
            {filteredEvents.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative border-b border-slate-100 pb-8 cursor-pointer"
              >
                <div className="overflow-hidden bg-slate-100 aspect-video mb-6 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover  group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[8px] font-black uppercase tracking-[0.2em] text-orange-600">
                    {item.category}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-400 text-[9px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar size={12}/> {item.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={12}/> {item.location}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-orange-600 transition-colors flex justify-between items-center">
                    {item.title}
                    <ArrowUpRight size={20} className="text-slate-300 group-hover:text-orange-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  
                  <p className="text-slate-500 text-xs font-medium leading-relaxed max-w-lg uppercase tracking-tight">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Newsletter / CTA Section */}
        {/* <div className="mt-32 bg-slate-900 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
            <Newspaper size={400} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 relative z-10">
            Stay Updated with <br /> <span className="text-orange-600">Parekh Insights.</span>
          </h2>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-10 max-w-md mx-auto">
            Subscribe to our newsletter for exclusive event invites and industry updates.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto relative z-10">
            <input 
              type="email" 
              placeholder="YOUR BUSINESS EMAIL" 
              className="flex-grow bg-white/10 border border-white/20 px-6 py-4 text-white text-[10px] font-bold uppercase tracking-widest outline-none focus:border-orange-600 transition-all"
            />
            <button className="bg-orange-600 text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
              Subscribe
            </button>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default MediaEvents;