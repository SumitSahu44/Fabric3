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

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'E-Auction', path: '/auction' },
    { name: 'trade & contracts', path: '/tender-contracts' },
    { name: 'Career', path: '/career' },
  ];

  const resourceLinks = [
    { name: 'Management', path: '/management' },
    { name: 'Media & Events', path: '/media-events' },
    { name: 'E-Quotation', path: '/equotation' },
    { name: 'Customer Reviews', path: '/reviews' },
    { name: 'Circulars', path: '/circular' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled 
        ? 'bg-white shadow-md py-3' 
        : 'bg-slate-900/40 backdrop-blur-md border-b border-white/10 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="group">
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
        <div className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                text-[10px] font-black uppercase tracking-[0.15em] transition-all hover:text-orange-600
                ${isActive ? 'text-orange-600' : scrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'}
              `}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Resources Dropdown */}
          <div 
            className="relative group h-full py-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
              scrolled ? 'text-slate-700' : 'text-white/90'
            } group-hover:text-orange-600`}>
              Resources <ChevronDown size={12} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full right-0 w-48 bg-white shadow-2xl border-t-2 border-orange-600 transition-all duration-300 ${
              isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
            }`}>
              <div className="py-2">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-orange-600 transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <Link to="/enquiry" className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
            scrolled 
              ? 'bg-blue-900 text-white hover:bg-orange-600 shadow-lg' 
              : 'bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white hover:text-slate-900'
          }`}>
            <MessageSquare size={14} />
            Enquiry 
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
      <div className={`fixed inset-0 bg-slate-950 z-[-1] lg:hidden transition-all duration-500 overflow-y-auto ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col items-center pt-32 pb-12 space-y-6 px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-black uppercase tracking-tighter hover:text-orange-500 transition-colors"
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* Mobile Resource Section */}
          <div className="w-full border-t border-white/10 pt-6 flex flex-col items-center space-y-4">
            <p className="text-orange-600 text-[10px] font-black uppercase tracking-[0.3em]">Quick Resources</p>
            {resourceLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link 
            to="/enquiry" 
            onClick={() => setIsOpen(false)}
            className="w-full max-w-xs bg-orange-600 text-white py-4 font-black uppercase tracking-widest mt-6 text-center shadow-2xl"
          >
            Trade Enquiry
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;