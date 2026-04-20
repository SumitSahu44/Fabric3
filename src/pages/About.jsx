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

          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-tight">
            Our Legacy in <br />
            <span className="text-orange-600">Cotton Manufacturing.</span>
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
              Parekh Fabrics is the trusted Manufacturers & Supplier of the high standard
              quality of the Cotton Fabrics and its Products, from lower range to higher range
              with different TC at reasonable and low price range with best and premium
              quality, with Quality Assurance and a Quality Seal.

            </p>



          </div>
        </div>
      </section>


    </div>
  );
};

export default About;