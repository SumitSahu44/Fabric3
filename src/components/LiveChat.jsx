import React, { useState } from 'react';
import { MessageSquare, X, Send, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-24 z-[100]"> {/* Right side pe WhatsApp ke side mein space rakhi hai */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-80 bg-white shadow-2xl border border-slate-100 overflow-hidden rounded-sm"
          >
            {/* Header */}
            <div className="bg-slate-900 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white text-[10px] font-bold">PF</div>
                  <Circle className="absolute -bottom-0.5 -right-0.5 text-green-500 fill-green-500" size={10} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Parekh Support</h4>
                  <p className="text-[8px] text-slate-400 uppercase tracking-[0.2em]">Online • Response ~5m</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="h-64 p-4 bg-slate-50 overflow-y-auto">
              <div className="bg-white p-3 shadow-sm border border-slate-100 max-w-[85%] rounded-r-lg rounded-tl-lg mb-4">
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                  Welcome to Parekh Fabrics B2B Portal. How can we assist with your bulk requirement today?
                </p>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input 
                type="text" 
                placeholder="Type your query..." 
                className="flex-grow text-[11px] font-bold uppercase tracking-tight outline-none py-2 placeholder:text-slate-300"
              />
              <button className="text-orange-600 hover:text-orange-700 px-2">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button Icon - Tight Bottom */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-900 text-white w-14 h-14 flex items-center justify-center shadow-2xl hover:bg-orange-600 transition-all hover:-translate-y-1"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default LiveChat;