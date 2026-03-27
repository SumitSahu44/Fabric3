import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Brand & Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter uppercase italic">
              Parekh <span className="text-orange-600">Fabrics.</span>
            </h2>
            <p className="text-[10px] leading-relaxed font-bold uppercase tracking-[0.2em] text-slate-500 max-w-xs">
              Manufacturers & Global Suppliers of Premium Cotton & Industrial Fabrics based in Ahmedabad, Gujarat.
            </p>
            <div className="flex gap-4 pt-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Business Links */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-600">Quick Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'E-Auction', path: '/auction' },
                { name: 'Enquiry', path: '/enquiry' },
                { name: 'Career', path: '/career' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white flex items-center gap-2 group">
                    <ArrowUpRight size={10} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    {item.name.toLowerCase().startsWith('e-') ? <><span className="lowercase">e-</span>{item.name.slice(2)}</> : item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-600">Contact Desk</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-slate-500 mt-1" />
                <p className="text-[10px] font-bold uppercase tracking-widest leading-loose text-slate-400">
                  GIDC Vatva, Phase IV, <br /> Ahmedabad, GJ 382445
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-slate-500" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">+91 79 2583 XXXX</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-slate-500" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">info@parekhfabrics.com</p>
              </div>
            </div>
          </div>

          {/* SEO / Trust Badge */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-600">Compliance</h4>
            <div className="bg-white/5 p-6 border border-white/10">
              <p className="text-[9px] font-black uppercase tracking-widest leading-relaxed text-slate-400 italic">
                "Complete Mobile Responsive, All Browser Support, SEO Friendly Infrastructure."
              </p>
              <div className="mt-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-[8px] font-bold uppercase tracking-widest text-white">Verified B2B Portal</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-600">
            © {currentYear} Parekh Fabrics Ahmedabad. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[8px] font-black uppercase tracking-[0.2em] text-slate-600">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Trade</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;