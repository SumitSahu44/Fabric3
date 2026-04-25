import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-[#0d1b2a] flex items-center justify-center z-[9999] overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="text-center relative z-10 px-6">

        {/* 1. ICON BOX (Image instead of P) */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="h-16 w-16 md:h-20 md:w-20 mx-auto flex items-center justify-center rounded-[18px] overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.25)] bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <img
            src="/8.png"
            alt="Logo"
            className="h-full w-full object-cover p-2"
          />
        </motion.div>

        {/* 2. TEXT BRANDING */}
        <div className="space-y-1 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-row items-center justify-center gap-2 md:gap-3 font-sans text-center"
          >
            <span className="text-white text-2xl md:text-5xl font-black tracking-tighter">
              PAREKH
            </span>
            <span className="text-orange-600 text-2xl md:text-5xl font-black tracking-tighter">
              FABRICS
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 text-[10px] md:text-sm font-bold tracking-[0.4em] uppercase mt-4"
          >
            Ahmedabad • GJ • India
          </motion.div>
        </div>

        {/* 3. PROGRESS TRACK */}
        <div className="w-48 md:w-64 h-[2px] bg-white/10 mx-auto mt-10 md:mt-12 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-orange-600"
          />
        </div>
      </div>

      {/* 4. BOTTOM ACCENT LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="absolute bottom-0 left-0 w-full h-2 bg-orange-600"
      />
    </motion.div>
  );
}
