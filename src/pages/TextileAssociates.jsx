import React from 'react';
import MapPointerPolished from '../components/Map';
import { MapPin, Target, Globe2 } from 'lucide-react';

const TextileAssociates = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 block mb-2">Network & Reach</span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-6">
            Our Textile <span className="text-slate-400">Associates</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Parekh Fabrics has a vast network of textile associates across India. Explore our wide reach and connected network of trusted partners spanning multiple major cities for all your textile needs.
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden p-6 md:p-12 mb-16 border border-slate-100 flex justify-center items-center">
          <div className="w-full max-w-4xl">
            <MapPointerPolished />
          </div>
        </div>

        {/* Features Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-all group">
             <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Globe2 size={24} />
             </div>
             <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-3">Nationwide Reach</h3>
             <p className="text-slate-500 text-sm leading-relaxed">Our associates are spread across key cities in India, ensuring prompt delivery and top-notch services no matter your location.</p>
           </div>
           
           <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-all group">
             <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Target size={24} />
             </div>
             <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-3">Quality Partners</h3>
             <p className="text-slate-500 text-sm leading-relaxed">We partner with the best in the industry to bring you unparalleled fabric quality, expert craftsmanship, and reliable output consistently.</p>
           </div>
           
           <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-all group">
             <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <MapPin size={24} />
             </div>
             <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-3">Seamless <span className="lowercase">e-</span>Trade</h3>
             <p className="text-slate-500 text-sm leading-relaxed">Leverage our <span className="lowercase">e-</span>trade capabilities across our associate network for quick, transparent, and hassle-free transactions.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TextileAssociates;
