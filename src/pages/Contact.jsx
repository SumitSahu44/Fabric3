import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Globe, Linkedin, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Head Office",
      detail: "Phase IV, GIDC Vatva, Ahmedabad, Gujarat 382445",
      color: "text-orange-600"
    },
    {
      icon: Phone,
      title: "Direct Line",
      detail: "+91 79 2583 XXXX / +91 98XXX XXXXX",
      color: "text-blue-900"
    },
    {
      icon: Mail,
      title: "Official Email",
      detail: "info@parekhfabrics.com",
      color: "text-orange-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Mon - Sat: 09:00 AM - 07:00 PM",
      color: "text-blue-900"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16 pb-12 border-b border-slate-100">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 block mb-4">Global Connect</span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-none">
              Get in <br /> <span className="text-slate-400 italic" style={{ WebkitTextStroke: '1px #94a3b8', color: 'transparent' }}>Touch.</span>
            </h1>
          </motion.div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold leading-relaxed max-w-sm md:ml-auto md:text-right">
              Whether you are looking for bulk export or industrial supply contracts, our team in Ahmedabad is ready to assist.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Left: Contact Details Cards */}
          <div className="lg:col-span-1 space-y-8">
            {contactDetails.map((item, i) => (
              <div key={i} className="group flex gap-6 items-start">
                <div className={`w-12 h-12 flex-shrink-0 bg-slate-50 flex items-center justify-center transition-all group-hover:bg-slate-900 group-hover:text-white`}>
                  <item.icon size={20} className={item.color + " group-hover:text-white"} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{item.title}</h4>
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-tight leading-snug">{item.detail}</p>
                </div>
              </div>
            ))}

            {/* Social Media Integration */}
            <div className="pt-8 border-t border-slate-100">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Follow Our Network</h4>
              <div className="flex gap-4">
                {[Linkedin, Facebook, Twitter].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-600 transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Google Map & Associates Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Map Placeholder with Proper Aspect Ratio */}
            <div className="relative w-full h-[400px] bg-slate-100 overflow-hidden shadow-2xl border border-slate-200">
              {/* Actual Google Map Embed (Replace URL with your GMB link) */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.31505374439!2d72.50207572624412!3d23.020181514467142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd11674fd049a!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1711111111111" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>

            {/* Textile Associates Info */}
            <div className="bg-slate-900 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="text-white font-black uppercase text-sm tracking-widest">Our Textile Associates</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] mt-1 italic">Strategically located across Pan-India Cotton Belts.</p>
              </div>
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[8px] font-bold text-white uppercase">
                    GJ
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-orange-600 flex items-center justify-center text-[8px] font-bold text-white uppercase">
                  +12
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;