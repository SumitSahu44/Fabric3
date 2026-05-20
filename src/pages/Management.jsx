import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { managementApi, IMAGE_BASE_URL } from '../utils/api';

const Management = () => {
  const [headerData, setHeaderData] = useState({ title: 'OUR MANAGEMENT', description: '' });
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = "ParekhFabrics06";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch Header Content
        const contentRes = await managementApi.getContent(siteId);
        if (contentRes.data && contentRes.data.success && contentRes.data.data) {
          setHeaderData(contentRes.data.data);
        }

        // Fetch Members
        const membersRes = await managementApi.getMembers(siteId);
        if (membersRes.data && membersRes.data.success) {
          setMembers(membersRes.data.data);
        }
      } catch (error) {
        console.error("Error fetching management data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300";
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }
    return `${IMAGE_BASE_URL}/${imagePath}`;
  };

  // Clean HTML from non-breaking spaces so browser can wrap words normally without mid-word breaks
  const cleanDescription = (html) => {
    if (!html) return "";
    return html.replace(/&nbsp;/g, ' ').replace(/\u00a0/g, ' ');
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-24 font-sans selection:bg-orange-500 selection:text-white">
      {/* Bulletproof local override for editor styles */}
      <style>{`
        .rich-text-content, 
        .rich-text-content * {
          color: #ffffff !important;
          background-color: transparent !important;
          white-space: normal !important;
          word-break: normal !important;
          overflow-wrap: break-word !important;
          max-width: 100% !important;
        }
      `}</style>
      
      {/* Dynamic Header Section */}
      <section className="relative bg-slate-900 pt-20 pb-40 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            {headerData.title || "Our Management"}
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          
          {/* Properly render HTML description to support Rich Text editor outputs */}
          {headerData.description ? (
            <div 
              className="text-white font-semibold max-w-2xl mx-auto text-sm md:text-base leading-relaxed rich-text-content"
              dangerouslySetInnerHTML={{ __html: cleanDescription(headerData.description) }}
            />
          ) : (
            <p className="text-white font-semibold max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Parekh Fabrics is administered and governed by a highly skilled, experienced, and qualified management team.
            </p>
          )}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto px-6 -mt-20 relative z-20">
        
        {loading ? (
          <div className="flex flex-col items-center justify-center bg-white border border-slate-100 rounded-3xl p-16 shadow-xl space-y-4">
            <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
            <p className="text-sm font-bold text-slate-500 tracking-wider uppercase">Loading Management Data...</p>
          </div>
        ) : (
          <div className="space-y-16">
            
            {/* Team Grid (Only shows data coming from the backend - compact design) */}
            {members.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {members.map((member, index) => (
                  <motion.div
                    key={member._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 group transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative aspect-square overflow-hidden bg-slate-50">
                      {/* Portrait Image */}
                      <img 
                        src={getImageUrl(member.image)} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300";
                        }}
                      />
                    </div>

                    {/* Compact Body Info */}
                    <div className="p-4 text-center flex-grow flex flex-col justify-center bg-white">
                      <h3 className="text-xs md:text-sm font-black tracking-tight text-slate-800 group-hover:text-orange-600 transition-colors duration-300 truncate">
                        {member.name}
                      </h3>
                      <p className="text-[9px] md:text-[10px] font-bold tracking-wider text-slate-400 mt-1 truncate">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-slate-100 rounded-3xl p-16 text-center shadow-md">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">No management members available at present.</p>
              </div>
            )}

          </div>
        )}

      </section>

    </div>
  );
};

export default Management;
