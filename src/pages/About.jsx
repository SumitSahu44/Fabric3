import React from 'react';
import { motion } from 'framer-motion';
// 'factory' ko hata kar 'Factory' (Capital F) kar diya hai
import { ShieldCheck, Factory, Globe, Users } from 'lucide-react';
const About = () => {
  // Stats data - kept minimal
  const stats = [
    { label: 'Experience', value: '25+ Years' },
    { label: 'Global Exports', value: '30+ Countries' },
    { label: 'Daily Capacity', value: '50k Meters' },
    { label: 'Cotton Quality', value: '100% Organic' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Small Header Section */}
      <section className="pt-32 pb-16 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] font-bold uppercase tracking-[0.4em] text-orange-600 block mb-3"
          >
            Since 1999 • Ahmedabad
          </motion.span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-tight">
            Our Legacy in <br /> 
            <span className="text-slate-400">Cotton Manufacturing.</span>
          </h1>
        </div>
      </section>

      {/* Main Content with fabric.avif */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section - Balanced Size */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden bg-slate-100 transition-all duration-1000">
              {/* Image usage as requested */}
              <img 
                src="/fabric.avif" 
                alt="Premium Fabric Texture" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1584184924103-e310d9dc85fc?auto=format&fit=crop&q=80&w=800' }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 hidden md:block">
              <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">
                Trusted by <br /> 500+ B2B <br /> Partners.
              </p>
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold uppercase tracking-tight text-slate-900">
              Manufacturing Excellence
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Parekh Fabrics is dedicated to the production of high-grade cotton materials. We specialize in industrial-scale supplies, ensuring that every meter of fabric meets international durability and texture standards.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed italic">
              "Based in Ahmedabad, the textile heart of India, we combine traditional spinning techniques with modern automated looms."
            </p>
            
            {/* Minimal Stats Grid */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 pt-8 border-t border-slate-100">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-lg font-black text-slate-900 tracking-tighter">{stat.value}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management - Clean Cards */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-orange-600 mb-2">Leadership</h2>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900">Our Management</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 flex items-center gap-6 shadow-sm border border-slate-100">
              <div className="w-16 h-16 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden grayscale">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" alt="MD" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-tight">Rajesh Parekh</h4>
                <p className="text-[9px] font-bold text-orange-600 uppercase tracking-widest">Managing Director</p>
              </div>
            </div>

            <div className="bg-white p-8 flex items-center gap-6 shadow-sm border border-slate-100">
              <div className="w-16 h-16 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden grayscale">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" alt="Head" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-tight">Anil Parekh</h4>
                <p className="text-[9px] font-bold text-blue-900 uppercase tracking-widest">Head of Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;