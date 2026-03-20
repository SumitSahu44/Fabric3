import React from 'react';
import { MapPin } from 'lucide-react';

const AssociatesMap = () => {
  const centers = ["Ahmedabad", "Surat", "Mumbai", "Bhiwandi", "Tirupur", "Coimbatore"];
  
  return (
    <section className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
          <span className="text-orange-500 font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">National Network</span>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Our Textile <br />Associates.</h2>
          <div className="grid grid-cols-2 gap-4">
            {centers.map(c => (
              <div key={c} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <MapPin size={14} className="text-orange-600" /> {c} Center
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 relative grayscale opacity-40">
           {/* Replace this with a real SVG Map of India */}
           <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/India_map.png" alt="India Map" className="w-full h-auto" />
           <div className="absolute top-1/4 left-1/4 animate-ping w-3 h-3 bg-orange-600 rounded-full"></div>
           <div className="absolute top-1/2 left-1/3 animate-ping w-3 h-3 bg-orange-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
export default AssociatesMap;