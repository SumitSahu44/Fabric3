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

            {/* Logo + Title */}
            <div className="flex items-center gap-1">
              <img
                src="/8.png"
                alt="Logo"
                className="w-12 h-12 object-contain"
              />
              <h2 className="text-2xl font-black tracking-tighter uppercase italic">
                Parekh <span className="text-orange-600">Fabrics.</span>
              </h2>
            </div>

            <p className="text-[11px] leading-relaxed font-bold uppercase tracking-[0.2em] text-slate-600 max-w-xs">
              Manufacturers & Global Suppliers of Premium Cotton & Industrial Fabrics based in Ahmedabad, Gujarat.
            </p>

            <div className="flex gap-4 pt-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
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
                { name: 'e-Auction', path: '/auction' },
                { name: 'Enquiry', path: '/enquiry' },
                { name: 'Career', path: '/career' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-[11px] font-bold tracking-widest text-slate-400 hover:text-white flex items-center gap-2 group">
                    <ArrowUpRight size={10} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            {/* Header */}
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-600">
              Contact Desk
            </h4>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-slate-500 mt-1" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 mb-1 opacity-60">Location</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed text-slate-400">
                    Ahmedabad, GJ, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone size={16} className="text-slate-500 mt-1" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 mb-1 opacity-60">Direct Line</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    +91 63537 78329
                  </p>
                </div>
              </div>

              {/* Trade Enquiry */}
              <div className="flex items-start gap-4">
                <Mail size={16} className="text-slate-500 mt-1" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 mb-1 opacity-60">Trade Enquiry</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 break-all">
                    trade-enquiry@parekhfabrics.com
                  </p>
                </div>
              </div>

              {/* Customer Care */}
              <div className="flex items-start gap-4">
                <Mail size={16} className="text-slate-500 mt-1" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 mb-1 opacity-60">Customer Care</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 break-all">
                    customer-care@parekhfabrics.com
                  </p>
                </div>
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