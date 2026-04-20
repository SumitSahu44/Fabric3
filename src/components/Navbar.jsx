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
      setScrolled(window.scrollY > 20);
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
    { name: 'Media Gallery', path: '/media-events' },
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
    { name: 'Textile Associates', path: '/associates' },
  ];

  return (
    <>
      <nav className={`fixed w-full transition-all duration-300 z-[1001] bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 ${
        scrolled ? 'py-2 shadow-md' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* Logo Section */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-11 h-11 md:w-13 md:h-13 flex items-center justify-center rounded-lg overflow-hidden bg-slate-50 border border-slate-100">
              <img src="/8.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col leading-none">
              <div className="text-[18px] md:text-[21px] font-black tracking-tight uppercase text-slate-900">
                PAREKH <span className="text-orange-600">FABRICS</span>
              </div>
              <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-1 text-slate-500">
                Ahmedabad, GJ, India
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `text-[11px] font-black uppercase tracking-widest transition-all hover:text-orange-600 ${
                  isActive ? 'text-orange-600' : 'text-slate-700'
                }`}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Resources Dropdown */}
            <div
              className="relative py-2 group cursor-pointer"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest transition-all text-slate-700 group-hover:text-orange-600">
                Resources <ChevronDown size={12} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-full right-0 w-60 bg-white shadow-2xl rounded-b-lg border-t-4 border-orange-600 transition-all duration-300 ${
                isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
              }`}>
                <div className="py-2">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block px-6 py-3 text-[10px] font-black tracking-widest text-slate-600 hover:bg-slate-50 hover:text-orange-600 transition-all border-b border-slate-50 last:border-0"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Enquiry Button */}
            <Link to="/enquiry" className="px-6 py-2.5 text-[11px] font-black uppercase tracking-widest bg-blue-900 text-white hover:bg-orange-600 transition-all flex items-center gap-2 rounded-sm shadow-sm">
              <MessageSquare size={14} /> Enquiry
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-900"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 w-full h-screen bg-white z-[1000] lg:hidden transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex flex-col h-full pt-28 pb-10 px-8 overflow-y-auto">
          <div className="flex flex-col space-y-5">
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
            <p className="text-orange-600 text-[10px] font-black uppercase tracking-widest mb-6">Quick Resources</p>
            <div className="grid grid-cols-1 gap-4">
              {resourceLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-500 text-sm font-bold tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/enquiry"
            onClick={() => setIsOpen(false)}
            className="mt-10 w-full bg-blue-900 text-white py-4 font-black uppercase tracking-widest text-center shadow-lg"
          >
            Send Trade Enquiry
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;