import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          // Ye working direct mp4 link hai
          className="w-full h-full object-cover"
        >
          <source src="https://www.pexels.com/download/video/7945836/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay - B2B Professional Look */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">
            Ahmedabad's Leading Cotton Hub
          </span>
          <h1 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
            Parekh <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Fabrics</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed italic">
            "Manufacturers & Supplier of Cotton Fabrics & its Products"
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/enquiry" className="bg-orange-600 text-white px-8 md:px-10 py-4 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-orange-600 transition-all shadow-2xl">
              Trade Enquiry
            </Link>
            <Link to="/products" className="border border-white/40 text-white px-8 md:px-10 py-4 font-black uppercase text-[10px] tracking-[0.2em] backdrop-blur-md hover:bg-white hover:text-black transition-all">
              Explore Products
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Features Strip */}
      {/* <div className="absolute bottom-0 w-full bg-white/5 backdrop-blur-md py-4 border-t border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-around text-white text-[9px] font-bold uppercase tracking-[0.3em] opacity-70">
          <span>Complete Mobile Responsive</span>
          <span className="text-orange-600">•</span>
          <span>All Browser Support</span>
          <span className="text-orange-600">•</span>
          <span>SEO Friendly</span>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;