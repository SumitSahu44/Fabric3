import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Enquiry from './pages/Enquiry';
import Products from './pages/Products';
import Auction from './pages/Auction';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Tender from './pages/Tender';
import LiveChat from './components/LiveChat';
import Footer from './components/Footer';
// Baki pages bhi aise hi import honge:
// import Products from './pages/Products';

function App() {
  const globalStyles = {
    fontFamily: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  };

  return (
    <Router>
      <div style={globalStyles} className="antialiased selection:bg-orange-500 selection:text-white min-h-screen flex flex-col">
        {/* Navbar hamesha top par rahega */}
        <Navbar />
        
        {/* Main Content Area */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/products" element={<Products />} />
            <Route path="/auction" element={<Auction />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tender-contracts" element={<Tender />} />
            {/* Jab Product page ban jayega: <Route path="/products" element={<Products />} /> */}
          </Routes>

          <Footer />
          <LiveChat />
        </div>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-8 h-8" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;