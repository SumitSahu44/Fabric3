import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle2 } from 'lucide-react';

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      name: "Arjun Mehta",
      // Chota circular profile pic placeholder
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&q=60",
      company: "Mehta Garments Export",
      text: "Parekh Fabrics has been our primary cotton supplier for 5 years. Their consistency in GSM and texture is unmatched in the Ahmedabad market.",
      rating: 5,
      location: "Mumbai, India"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&fit=crop&q=60",
      company: "EcoTextile UK",
      text: "The GOTS certified organic cotton we source from Parekh is of the highest grade. Their export documentation process is incredibly smooth.",
      rating: 5,
      location: "Manchester, UK"
    },
    {
      id: 3,
      name: "Rajesh Iyer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&auto=format&fit=crop&q=60",
      company: "Indo-Canvas Industrial",
      text: "We use their heavy-duty canvas for industrial applications. Highly durable and cost-effective for bulk requirements.",
      rating: 5,
      location: "Chennai, India"
    }
  ];

  const partners = ["Reliance", "Arvind", "Raymond", "Welspun", "Vardhman"];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 selections:bg-orange-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Minimalist */}
        <div className="text-center mb-20">
          <span className="text-[11px] font-black uppercase tracking-[0.5em] text-orange-600 block mb-4 italic">Global Trust</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-none">
            Client <span className="text-slate-300italic" style={{ WebkitTextStroke: '1px #cbd5e1', color: 'transparent' }}>Testimonials.</span>
          </h1>
          <p className="mt-6 text-xs text-slate-600 uppercase tracking-widest font-bold max-w-lg mx-auto leading-relaxed">
            Reliability and quality standards that empower global textile supply chains.
          </p>
        </div>

        {/* Brand Bar */}
        <div className="border-y border-slate-100 py-12 mb-20 overflow-hidden bg-slate-50/50">
          <p className="text-center text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] mb-10">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale">
            {partners.map(p => (
              <span key={p} className="text-2xl font-black uppercase tracking-tighter text-slate-900">{p}</span>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={item.id} 
              className="bg-white p-10 border border-slate-100 relative group transition-all hover:border-slate-200 hover:shadow-2xl"
            >
              <Quote className="absolute top-6 right-6 text-slate-100 group-hover:text-orange-100 transition-colors" size={40} />
              
              {/* Rating */}
              <div className="flex gap-1 mb-8 pb-6 border-b border-slate-100">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={10} className="fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xs font-medium text-slate-600 leading-relaxed uppercase tracking-tight mb-10 min-h-[80px]">
                "{item.text}"
              </p>

              {/* Client Info with Avatar */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                    {item.name} <CheckCircle2 size={12} className="text-blue-900" />
                  </h4>
                  <p className="text-[9px] font-bold text-orange-600 uppercase tracking-[0.2em] mt-1">
                    {item.company}
                  </p>
                  <p className="text-[8px] text-slate-400 uppercase mt-1.5 tracking-wider">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* B2B Stats */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-slate-100 pt-20">
          {[
            { label: 'Client Retention', val: '98%' },
            { label: 'Quality Rating', val: '4.9/5' },
            { label: 'Global Partners', val: '500+' },
            { label: 'Export Countries', val: '30+' }
          ].map((s, i) => (
            <div key={i}>
              <h5 className="text-3xl font-black text-slate-900 tracking-tighter mb-1">{s.val}</h5>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;