import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Factory, Zap, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  const expertises = [
    { icon: Factory, title: "In-House Spinning", desc: "Advanced spinning units for high-tensile cotton yarn." },
    { icon: ShieldCheck, title: "Quality Assurance", desc: "4-point inspection system for every meter of fabric." },
    { icon: Truck, title: "Global Logistics", desc: "Seamless export documentation and port delivery." },
    { icon: Zap, title: "Fast Turnaround", desc: "Bulk production within tight industrial deadlines." },
  ];

  return (
    <main className="w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Industrial Expertise (Why Choose Us) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 block">Manufacturing Edge</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-none mb-6">
                Why B2B Leaders <br /> <span className="text-slate-400">Trust Us.</span>
              </h2>
              <p className="text-xs text-slate-500 uppercase tracking-widest leading-relaxed font-bold">
                From Ahmedabad to the World, we provide end-to-end textile solutions with zero compromise on quality.
              </p>
              <Link to="/about" className="mt-10 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 border-b-2 border-orange-600 pb-2 hover:text-orange-600 transition-colors">
                Learn Legacy <ArrowRight size={14} />
              </Link>
            </div>
            
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {expertises.map((item, idx) => (
                <div key={idx} className="p-8 border border-slate-50 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all group">
                  <item.icon className="text-slate-400 group-hover:text-orange-600 transition-colors mb-6" size={24} strokeWidth={1.5} />
                  <h4 className="text-sm font-black uppercase tracking-tight text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-loose">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Categories (Visual Preview) */}
      <section className="py-24 bg-slate-900 text-white px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter italic">Our Core Verticals</h2>
              <p className="text-[9px] font-bold text-orange-500 uppercase tracking-[0.3em] mt-2">Certified Industrial Grade Fabrics</p>
            </div>
            <Link to="/products" className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-8 py-3 hover:bg-white hover:text-black transition-all">
              Full Catalogue
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {/* Category 1 */}
            <div className="relative group h-[400px] overflow-hidden">
              <img src="/fabric.avif" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100" 
              onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600'} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-xl font-black uppercase tracking-tighter">Pure Organic Cotton</h3>
                <p className="text-[9px] uppercase tracking-widest text-orange-500 mt-2">Export Quality • GOTS Certified</p>
              </div>
            </div>
            {/* Category 2 */}
            <div className="relative group h-[400px] overflow-hidden">
              <img src="https://media.istockphoto.com/id/1180345900/photo/workers-on-factory-floor-of-mumbai-dyeing-and-printing-mill.webp?a=1&b=1&s=612x612&w=0&k=20&c=7wvpbXHt_XiQPZ7ZJk3mnb6jAp_7w3fCST10hHPSbpU=" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-xl font-black uppercase tracking-tighter">Industrial Canvas</h3>
                <p className="text-[9px] uppercase tracking-widest text-orange-500 mt-2">Heavy Duty • High Durability</p>
              </div>
            </div>
            {/* Category 3 */}
            <div className="relative group h-[400px] overflow-hidden md:mt-12">
              <img src="https://media.istockphoto.com/id/157639058/photo/silk-clothes-rolls.webp?a=1&b=1&s=612x612&w=0&k=20&c=y9DM4bk_Guwd3sphNCcnOmN6mFbnLwaVHTSTQik3cKA=" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-xl font-black uppercase tracking-tighter">Dyed & Printed</h3>
                <p className="text-[9px] uppercase tracking-widest text-orange-500 mt-2">Eco-Friendly Dyes • Custom Designs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Features Grid (The one you had, but styled better) */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 block">E-Service Hub</span>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-blue-900 mb-16">Digital Procurement.</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'e-Quotation', path: '/enquiry' },
              { name: 'e-Auction', path: '/auction' },
              { name: 'Tender & Contract', path: '/enquiry' },
              { name: 'Career Portal', path: '/career' }
            ].map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className="group p-10 bg-white border border-slate-100 hover:border-orange-500 transition-all shadow-sm hover:shadow-xl"
              >
                <p className="font-black uppercase text-[10px] tracking-[0.2em] group-hover:text-orange-600 transition-colors">{item.name}</p>
                <div className="mt-4 h-[1px] w-0 group-hover:w-full bg-orange-600 transition-all duration-500 mx-auto"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;