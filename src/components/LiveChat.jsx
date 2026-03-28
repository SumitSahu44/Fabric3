import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Circle, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to Parekh Fabrics. How can we assist with your bulk requirement today?", sender: 'bot' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll to bottom when new message arrives
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // User Message
    const userMsg = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Simulate Bot Response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botMsg = { 
        id: Date.now() + 1, 
        text: "Thank you for your query. Our B2B export department will review your request. For urgent trade matters, please call +91 79 2583 XXXX.", 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-24 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.9, originY: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 md:w-96 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-100 overflow-hidden rounded-sm"
          >
            {/* Header */}
            <div className="bg-slate-900 p-5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-orange-600 flex items-center justify-center text-white text-xs font-black italic">PF</div>
                  <Circle className="absolute -bottom-0.5 -right-0.5 text-green-500 fill-green-500 animate-pulse" size={10} />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-white uppercase tracking-widest leading-none">B2B Support Desk</h4>
                  <p className="text-[8px] text-slate-400 uppercase tracking-[0.2em] mt-1 italic">Online • Ahmedabad Hub</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="h-80 p-5 bg-slate-50 overflow-y-auto space-y-4 scroll-smooth">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 text-[11px] leading-relaxed uppercase tracking-tight font-bold shadow-sm ${
                    msg.sender === 'user' 
                    ? 'bg-blue-900 text-white rounded-l-md rounded-tr-md' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-r-md rounded-tl-md'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 border border-slate-200 rounded-r-md rounded-tl-md">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100 flex gap-3">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="TYPE BULK ENQUIRY..." 
                className="flex-grow text-[11px] font-black uppercase tracking-widest outline-none py-2 border-none placeholder:text-slate-300"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="text-orange-600 disabled:text-slate-200 transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-slate-900 text-white w-14 h-14 flex items-center justify-center shadow-2xl hover:bg-orange-600 transition-all hover:-translate-y-1 relative"
      >
        {isOpen ? <X size={24} /> : (
          <>
            <MessageSquare size={24} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-black">1</span>
          </>
        )}
      </button>
    </div>
  );
};

export default LiveChat;