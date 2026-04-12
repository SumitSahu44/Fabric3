import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, Loader2, ShoppingBag } from 'lucide-react';
import { productApi, IMAGE_BASE_URL } from '../utils/api';

const staticProductData = [
  { id: 's1', name: 'Premium Organic Cotton', cat: 'Pure Cotton', img: 'https://plus.unsplash.com/premium_photo-1770294856128-b4325ae5c7f6?w=600&auto=format&fit=crop&q=60' },
  { id: 's2', name: 'Heavy Duty Canvas', cat: 'Industrial', img: 'https://images.unsplash.com/photo-1619459075136-2b53c6153d4f?w=600&auto=format&fit=crop&q=60' },
  { id: 's3', name: 'Cotton Slub Yarn', cat: 'Yarn', img: 'https://images.unsplash.com/photo-1757382603782-839864de55d7?w=600&auto=format&fit=crop&q=60' },
  { id: 's4', name: 'Indigo Dyed Fabric', cat: 'Dyed', img: 'https://images.unsplash.com/photo-1761808070278-dd73772be230?w=600&auto=format&fit=crop&q=60' },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const siteId = "ParekhFabrics06";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productApi.getAll(siteId);
        if (response.data && response.data.success && response.data.data.length > 0) {
          const dynamicProducts = response.data.data.map(p => ({
            id: p._id,
            name: p.title || p.name,
            cat: p.category || "General",
            img: p.imageUrl || (p.image ? `${IMAGE_BASE_URL}/${p.image}` : staticProductData[0].img)
          }));
          setProducts(dynamicProducts);
          const uniqueCats = ['All', ...new Set(dynamicProducts.map(i => i.cat))];
          setCategories(uniqueCats);
        } else {
          setProducts(staticProductData);
          setCategories(['All', 'Pure Cotton', 'Industrial', 'Yarn', 'Dyed']);
        }
      } catch (error) {
        console.error("Products fetch error:", error);
        setProducts(staticProductData);
        setCategories(['All', 'Pure Cotton', 'Industrial', 'Yarn', 'Dyed']);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.cat === filter);

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 block">Textile Marketplace</span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-none">
              Cotton & <span className="text-slate-200">Products.</span>
            </h1>
          </div>
          {!loading && products.length > 0 && (
            <div className="flex items-center gap-3 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100">
              <ShoppingBag size={14} className="text-orange-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{products.length} Products Available</span>
            </div>
          )}
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`whitespace-nowrap px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-full ${
                filter === cat 
                ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' 
                : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[4/5] bg-slate-50 rounded-3xl mb-4"></div>
                <div className="h-3 bg-slate-50 w-1/4 mb-2"></div>
                <div className="h-5 bg-slate-50 w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode='wait'>
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-slate-50 rounded-[2rem] relative shadow-sm hover:shadow-2xl transition-all duration-700">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                      onError={(e) => { e.target.src = staticProductData[0].img }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                      <button className="w-full bg-white text-slate-900 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 px-4">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[9px] font-black text-orange-600 uppercase tracking-[0.2em]">{product.cat}</span>
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors leading-tight">
                      {product.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {filteredProducts.length === 0 && !loading && (
          <div className="py-40 text-center border-2 border-dashed border-slate-100 rounded-[3rem]">
            <ShoppingBag size={48} className="mx-auto text-slate-100 mb-6" />
            <h3 className="text-xl font-black text-slate-300 uppercase tracking-tighter">No products found in this category</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;