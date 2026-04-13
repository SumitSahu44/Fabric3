import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Products', path: '/products' },
    { name: 'Product Gallery', path: '/product-gallery' },
    { name: 'Our Management', path: '/management' },
  ];

  const resourceLinks = [
    { name: 'e-Quotation', path: '/equotation' },
    { name: 'e-Auction', path: '/auction' },
    { name: 'Tender & Contract', path: '/tender-contracts' },
    { name: 'Career', path: '/career' },
    { name: 'Circular', path: '/circular' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Customer Review', path: '/reviews' },
    { name: 'Visit Appointment', path: '/appointment' },
    { name: 'Media Gallery', path: '/media-events' },
    { name: 'Textile Associates', path: '/associates' },
  ];

  return (
    <>
      <nav className={`fixed w-full transition-all duration-500 z-[1001] ${scrolled || isOpen ? 'bg-white shadow-md py-3' : 'bg-slate-900/40 backdrop-blur-md border-b border-white/10 py-5'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className={`group flex items-center gap-3 transition-colors ${scrolled || isOpen ? 'text-blue-900' : 'text-white'}`}>
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl overflow-hidden bg-slate-100/10">
              <img src="/8.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="text-xl md:text-2xl font-black tracking-tighter uppercase italic leading-none">
                Parekh <span className="text-orange-600">Fabrics</span>
              </div>
              <p className={`text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.3em] ${scrolled || isOpen ? 'text-slate-600' : 'text-slate-300'}`}>
                Ahmedabad, GJ, India
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `text-[11px] font-black uppercase tracking-[0.15em] transition-all hover:text-orange-600 ${isActive ? 'text-orange-600' : scrolled ? 'text-slate-700' : 'text-white/90'
                  }`}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Desktop Resources Dropdown */}
            <div
              className="relative py-2 group cursor-pointer"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={`flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.15em] transition-all ${scrolled ? 'text-slate-700' : 'text-white/90'
                } group-hover:text-orange-600`}>
                Resources <ChevronDown size={12} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Box */}
              <div className={`absolute top-full right-0 w-56 bg-white shadow-2xl border-t-2 border-orange-600 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
                }`}>
                <div className="py-2">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block px-6 py-3 text-[10px] font-black  tracking-widest text-slate-600 hover:bg-slate-50 hover:text-orange-600 transition-all border-b border-slate-50 last:border-0"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/enquiry" className={`px-6 py-2.5 text-[11px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${scrolled ? 'bg-blue-900 text-white shadow-lg' : 'bg-white/10 text-white border border-white/20 hover:bg-white hover:text-slate-900'
              }`}>
              <MessageSquare size={14} /> Enquiry
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative z-[1002] p-2 ${scrolled || isOpen ? 'text-blue-900' : 'text-white'}`}
            >
              {isOpen ? <X size={30} className={isOpen ? 'text-blue-900' : ''} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 w-full h-screen bg-white z-[1000] lg:hidden transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
        <div className="flex flex-col h-full pt-32 pb-10 px-8 overflow-y-auto">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black text-slate-900 uppercase tracking-tighter"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-slate-100">
            <p className="text-orange-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Quick Resources</p>
            <div className="grid grid-cols-1 gap-4">
              {resourceLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-500 text-sm font-bold  tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/enquiry"
            onClick={() => setIsOpen(false)}
            className="mt-10 w-full bg-blue-900 text-white py-5 font-black uppercase tracking-widest text-center shadow-xl"
          >
            Send Trade Enquiry
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;