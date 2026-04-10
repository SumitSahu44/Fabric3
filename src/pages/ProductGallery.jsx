import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { productApi } from '../utils/api';
import { Loader2 } from 'lucide-react';

const staticGalleryData = [
  { id: 1, name: 'Premium Cotton Texture', cat: 'Texture', img: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=60' },
  { id: 2, name: 'Industrial Fabric Weave', cat: 'Industrial', img: 'https://images.unsplash.com/photo-1584184924103-e310d4d8fed7?w=800&auto=format&fit=crop&q=60' },
  { id: 3, name: 'Natural Fibre Close-up', cat: 'Raw Material', img: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800&auto=format&fit=crop&q=60' },
  { id: 4, name: 'Dyed Fabric Palette', cat: 'Colors', img: 'https://images.unsplash.com/photo-1590736934336-7c93e4339e83?w=800&auto=format&fit=crop&q=60' }
];

const ProductGallery = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await productApi.getAll('ParekhFabrics06');
        if (response.data.success && response.data.data.length > 0) {
          const dynamicItems = response.data.data.map(p => ({
            id: p._id,
            name: p.title,
            cat: p.category,
            img: `http://localhost:5000/${p.image}`
          }));
          setItems(dynamicItems);
          const uniqueCats = ['All', ...new Set(dynamicItems.map(i => i.cat))];
          setCategories(uniqueCats);
        } else {
          setItems(staticGalleryData);
          setCategories(['All', 'Texture', 'Industrial', 'Raw Material', 'Colors']);
        }
      } catch (error) {
        console.error("Gallery fetch error:", error);
        setItems(staticGalleryData);
        setCategories(['All', 'Texture', 'Industrial', 'Raw Material', 'Colors']);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const filteredItems = filter === 'All' 
    ? items 
    : items.filter(item => item.cat === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-20">
        <Loader2 className="animate-spin text-orange-600" size={40} />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-orange-600 mb-2 block">Visual Showcase</span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
            Product <span className="text-slate-400">Gallery.</span>
          </h1>
          <p className="mt-4 text-slate-500 max-w-2xl font-medium"> Explore our wide range of fabrics through our high-resolution visual gallery. From raw cotton to finished dyed textiles.</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-100 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[11px] font-black uppercase tracking-widest px-4 py-2 transition-all ${
                filter === cat ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry or Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode='wait'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="break-inside-avoid"
              >
                <div className="group relative overflow-hidden bg-slate-100 border border-slate-200">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[9px] font-bold text-orange-400 uppercase tracking-widest mb-1">{item.cat}</p>
                    <h3 className="text-xs font-black text-white uppercase tracking-tight">{item.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
