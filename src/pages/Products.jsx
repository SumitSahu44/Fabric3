import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search } from 'lucide-react';

const Products = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Pure Cotton', 'Industrial', 'Yarn', 'Dyed'];
  
  const productData = [
    { id: 1, name: 'Premium Organic Cotton', cat: 'Pure Cotton', img: 'https://plus.unsplash.com/premium_photo-1770294856128-b4325ae5c7f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJlbWl1bSUyME9yZ2FuaWMlMjBDb3R0b24lMjBmYWJyaWN8ZW58MHx8MHx8fDA%3D' },
    { id: 2, name: 'Heavy Duty Canvas', cat: 'Industrial', img: 'https://images.unsplash.com/photo-1619459075136-2b53c6153d4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGVhdnklMjBEdXR5JTIwQ2FudmFzJTIwZmFicmljfGVufDB8fDB8fHww' },
    { id: 3, name: 'Cotton Slub Yarn', cat: 'Yarn', img: 'https://images.unsplash.com/photo-1757382603782-839864de55d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENvdHRvbiUyMFNsdWIlMjBZYXJuJTIwZmFicmljfGVufDB8fDB8fHww' },
    { id: 4, name: 'Indigo Dyed Fabric', cat: 'Dyed', img: 'https://images.unsplash.com/photo-1761808070278-dd73772be230?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEluZGlnbyUyMER5ZWQlMjBGYWJyaWN8ZW58MHx8MHx8fDA%3D' },
  ];

  const filteredProducts = filter === 'All' 
    ? productData 
    : productData.filter(p => p.cat === filter);

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-600 mb-2 block">Our Collection</span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
            Cotton & <span className="text-slate-400">Products.</span>
          </h1>
        </div>

        {/* Filter Bar - Professional & Small */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-100 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 transition-all ${
                filter === cat ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='wait'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group border border-slate-100 p-3 hover:shadow-xl transition-all"
              >
                <div className="aspect-square overflow-hidden bg-slate-50 relative">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={16} className="text-slate-900" />
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <p className="text-[9px] font-bold text-orange-600 uppercase tracking-widest mb-1">{product.cat}</p>
                    <h3 className="text-sm font-black uppercase tracking-tight text-slate-900">{product.name}</h3>
                  </div>
                  <button className="text-[10px] font-bold uppercase border-b border-slate-900 pb-1">Enquire</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Products;