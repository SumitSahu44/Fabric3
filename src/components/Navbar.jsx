import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'E-Auction', path: '/auction' },
    { name: 'Tender & Contracts', path: '/tender' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled 
        ? 'bg-white shadow-md py-3' 
        : 'bg-slate-900/40 backdrop-blur-md border-b border-white/10 py-5' // Yahan change kiya hai: Light dark tint aur blur
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="group" onClick={() => setIsOpen(false)}>
          <div className={`text-2xl font-black tracking-tighter uppercase italic transition-colors ${
            scrolled ? 'text-blue-900' : 'text-white'
          }`}>
            Parekh <span className="text-orange-600 group-hover:text-orange-500">Fabrics</span>
          </div>
          <p className={`text-[8px] font-bold uppercase tracking-[0.3em] -mt-1 ${
            scrolled ? 'text-slate-500' : 'text-slate-300'
          }`}>Ahmedabad • India</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                text-[11px] font-black uppercase tracking-[0.15em] transition-all hover:text-orange-600
                ${isActive ? 'text-orange-600' : scrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'}
              `}
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* CTA Button */}
          <Link to="/enquiry" className={`px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
            scrolled 
              ? 'bg-blue-900 text-white hover:bg-orange-600 shadow-lg' 
              : 'bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white hover:text-slate-900'
          }`}>
            <MessageSquare size={14} />
            Trade Enquiry 
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`${scrolled ? 'text-blue-900' : 'text-white'} transition-colors`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-900 z-[-1] lg:hidden transition-all duration-500 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-screen space-y-8 px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl font-black uppercase tracking-tighter hover:text-orange-500 transition-colors"
            >
              {link.name}
            </NavLink>
          ))}
          <Link 
            to="/enquiry" 
            onClick={() => setIsOpen(false)}
            className="w-full max-w-xs bg-orange-600 text-white py-4 font-black uppercase tracking-widest mt-4 text-center shadow-2xl"
          >
            Send Trade Enquiry
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;