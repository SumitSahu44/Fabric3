import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowUpRight, Newspaper, Image as ImageIcon, Video, Loader2 } from 'lucide-react';
import { mediaApi, IMAGE_BASE_URL } from '../utils/api';

const MediaEvents = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const siteId = "ParekhFabrics06";

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await mediaApi.getAll(siteId);
        if (response.data && response.data.success) {
          setMedia(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching media:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  const staticEvents = [
    {
      id: "s1",
      category: 'exhibition',
      title: 'India Textile & Garment Expo',
      date: 'March 15-18, 2024',
      location: 'Pragati Maidan, New Delhi',
      image: 'https://images.unsplash.com/photo-1562869929-bda0650edb1f?w=600&auto=format&fit=crop&q=60',
      description: 'Showcasing premium cotton, yarns, and sustainable fabric innovations to global buyers.'
    },
    {
      id: "s2",
      category: 'news',
      title: 'Organic Cotton Certification',
      date: 'Feb 10, 2024',
      location: 'Ahmedabad Textile Hub',
      image: 'https://images.unsplash.com/photo-1601056639638-c53c50e13ead?w=600&auto=format&fit=crop&q=60',
      description: 'Successfully achieved international certification for eco-friendly and organic textile production.'
    },
    {
      id: "s3",
      category: 'event',
      title: 'Weaving Technology Workshop',
      date: 'Jan 25, 2024',
      location: 'Surat Textile Industry',
      image: 'https://media.istockphoto.com/id/1180345900/photo/workers-on-factory-floor-of-mumbai-dyeing-and-printing-mill.webp?a=1&b=1&s=612x612&w=0&k=20&c=7wvpbXHt_XiQPZ7ZJk3mnb6jAp_7w3fCST10hHPSbpU=',
      description: 'Hands-on workshop on modern weaving machines and advanced textile manufacturing techniques.'
    }
  ];

  const displayMedia = media.length > 0 ? media : staticEvents;
  const filteredEvents = filter === 'all' ? displayMedia : displayMedia.filter(e => (e.category || e.type || '').toLowerCase() === filter.toLowerCase());

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-orange-600 block mb-4 italic">Corporate Newsroom</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-[0.9]">
              Media & <br /> <span className="text-slate-300 italic" style={{ color: '#f54a00' }}>Live Events.</span>
            </h1>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {['all', 'exhibition', 'news', 'event'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 text-[11px] font-black uppercase tracking-widest transition-all ${
                  filter === f ? 'bg-orange-600 text-white shadow-xl shadow-orange-200' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map(i => (
              <div key={i} className="animate-pulse">
                <div className="aspect-video bg-slate-100 rounded-3xl mb-6"></div>
                <div className="h-4 bg-slate-100 w-1/4 mb-4"></div>
                <div className="h-8 bg-slate-100 w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <AnimatePresence mode='wait'>
              {filteredEvents.map((item, idx) => (
                <motion.div
                  layout
                  key={item._id || item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative border-b border-slate-100 pb-12 cursor-pointer"
                >
                  <div className="overflow-hidden bg-slate-100 aspect-video mb-8 relative rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-700">
                    <img 
                      src={item.imageUrl || (item.image ? `${IMAGE_BASE_URL}/${item.image}` : staticEvents[0].image)} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-700"
                      onError={(e) => { e.target.src = staticEvents[0].image }}
                    />
                    <div className="absolute top-6 left-6 bg-white px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.3em] text-orange-600 shadow-xl">
                      {item.category || item.type || "Exhibition"}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-6 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                      <span className="flex items-center gap-2 text-slate-900 bg-slate-50 px-3 py-1 rounded-full border border-slate-100"><Calendar size={12} className="text-orange-600"/> {item.date || new Date(item.createdAt).toLocaleDateString()}</span>
                      <span className="flex items-center gap-2"><MapPin size={12} className="text-orange-600"/> {item.location || "Corporate Office"}</span>
                    </div>
                    
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-orange-600 transition-colors flex justify-between items-center leading-none">
                      {item.title}
                      <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 transition-all">
                        <ArrowUpRight size={20} className="text-slate-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                    </h3>
                    
                    <p className="text-slate-500 text-xs font-bold leading-relaxed max-w-lg uppercase tracking-tight opacity-70">
                      {item.description || item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {filteredEvents.length === 0 && !loading && (
          <div className="py-32 text-center border-2 border-dashed border-slate-100 rounded-[3rem]">
            <ImageIcon size={48} className="mx-auto text-slate-200 mb-6" />
            <h3 className="text-2xl font-black text-slate-300 uppercase tracking-tighter">No items found in this category</h3>
          </div>
        )}

      </div>
    </div>
  );
};

export default MediaEvents;
