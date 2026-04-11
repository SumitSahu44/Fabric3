import React from 'react';
import { FileText } from 'lucide-react';

const Circular = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full text-center">

        <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-10 border-l-4 border-orange-600 pl-4 text-left">
          Official Circulars
        </h2>

        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">
          <div className="flex justify-center mb-6 text-slate-300">
            <FileText size={40} />
          </div>

          <p className="text-lg font-bold text-slate-500 italic">
            ( No Circular, at present )
          </p>
        </div>

      </div>
    </div>
  );
};

export default Circular;
