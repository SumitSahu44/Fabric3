import React, { useState, useEffect } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { blogApi, IMAGE_BASE_URL } from '../utils/api';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = "ParekhFabrics06";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogApi.getAll(siteId);
        if (response.data && response.data.success) {
          setBlogs(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const staticPosts = [
    { 
      title: "The Future of Sustainable Cotton in India", 
      date: "Mar 18, 2026", 
      tag: "Innovation",
      image: "https://plus.unsplash.com/premium_photo-1769958353118-297371a6c410?w=600&auto=format&fit=crop&q=60"
    },
    { 
      title: "Navigating Global Textile Supply Chain Challenges", 
      date: "Mar 10, 2026", 
      tag: "Logistics",
      image: "https://images.unsplash.com/photo-1558444479-27c49742fed2?w=600&auto=format&fit=crop&q=60"
    }
  ];

  const displayBlogs = blogs.length > 0 ? blogs : staticPosts;

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 leading-[0.85] mb-6">
              Textile <br /><span className="text-slate-200">Articles</span>
            </h2>
            <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-[0.2em] leading-relaxed border-l-4 border-orange-600 pl-8">
              Join and participate in our nation-wide campaign to digitalize the Textile 
              Sector, one of the largest sectors of India.
            </p>
          </div>
          {!loading && blogs.length > 0 && (
            <div className="bg-slate-900 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
              Live Feed: {blogs.length} Articles
            </div>
          )}
        </div>

        {/* Grid Section */}
        {loading ? (
          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2].map(i => (
              <div key={i} className="animate-pulse">
                <div className="aspect-video bg-slate-100 rounded-lg mb-6"></div>
                <div className="h-4 bg-slate-100 w-1/4 mb-4"></div>
                <div className="h-8 bg-slate-100 w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-16">
            {displayBlogs.map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-slate-100 mb-8 overflow-hidden rounded-2xl shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <img 
                    src={p.imageUrl || (p.thumbnail ? `${IMAGE_BASE_URL}/${p.thumbnail}` : staticPosts[0].image)} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                    alt={p.title}
                    onError={(e) => { e.target.src = staticPosts[0].image }}
                  />
                </div>
                <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em]">{p.tag || p.category || "Insight"}</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 mt-3 mb-6 group-hover:text-orange-600 transition-colors leading-tight">
                  {p.title}
                </h3>
                <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {p.date || new Date(p.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <div className="flex items-center gap-2 text-slate-900 group-hover:text-orange-600 transition-colors">
                    <span className="text-[9px] font-black uppercase tracking-widest">Read Article</span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;