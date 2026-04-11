import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Tender = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tight">
            Tender & <span className="text-slate-400">Contract</span>
          </h1>
        </motion.div>

        {/* No Tender Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[2rem] shadow-2xl p-10 md:p-14 border border-slate-100"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-slate-100 p-5 rounded-full">
              <FileText size={40} className="text-slate-400" />
            </div>
          </div>



          <p className="text-lg md:text-xl font-semibold text-slate-600 bg-slate-100 inline-block px-6 py-3 rounded-full">
            ( At present, no EOI published )
          </p>

          <p className="text-slate-400 mt-6 text-sm md:text-base">
            Please check back later for updates.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Tender;