import React, { useState, useEffect } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { blogApi, IMAGE_BASE_URL } from '../utils/api';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [header, setHeader] = useState({
    title: 'Textile Articles',
    description: 'Join and participate in our nation-wide campaign to digitalize the Textile Sector, one of the largest sectors of India.',
    authorName: 'HC Parekh',
    authorRole: 'Textile Manufacturer & Entrepreneur',
    country: 'India'
  });
  const navigate = useNavigate();
  const siteId = "ParekhFabrics06";

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        const [blogsRes, headerRes] = await Promise.allSettled([
          blogApi.getAll(siteId),
          blogApi.getHeader(siteId)
        ]);

        if (blogsRes.status === 'fulfilled' && blogsRes.value.data && blogsRes.value.data.success) {
          const allBlogs = blogsRes.value.data.data || [];
          const publishedBlogs = allBlogs.filter(b => b.status === 'published' || b.status === 'Published');
          setBlogs(publishedBlogs);
        }

        if (headerRes.status === 'fulfilled' && headerRes.value.data && headerRes.value.data.success) {
          const headerData = headerRes.value.data.data;
          if (headerData) {
            setHeader({
              title: headerData.title || 'Textile Articles',
              description: headerData.description || 'Join and participate in our nation-wide campaign to digitalize the Textile Sector, one of the largest sectors of India.',
              authorName: headerData.authorName || 'HC Parekh',
              authorRole: headerData.authorRole || 'Textile Manufacturer & Entrepreneur',
              country: headerData.country || 'India'
            });
          }
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, []);

  const staticPosts = [
    { 
      title: "The Future of Sustainable Cotton in India", 
      date: "Mar 18, 2026", 
      tag: "Innovation",
      image: "https://plus.unsplash.com/premium_photo-1769958353118-297371a6c410?w=600&auto=format&fit=crop&q=60",
      content: "<p>The textile industry is undergoing a massive shift towards sustainability. Organic cotton farming is taking the lead, driven by both ecological necessity and consumer choice. Indian manufacturers are adopting advanced crop rotations and eco-friendly dyes to minimize their water footprint.</p><p>As technology and traditional methods converge, the output shows enhanced durability and soft, luxurious texture. FABRIC - 3 takes this legacy forward, providing the best organic materials sourced from eco-certified farmlands across Gujarat and Maharashtra.</p>"
    },
    { 
      title: "Navigating Global Textile Supply Chain Challenges", 
      date: "Mar 10, 2026", 
      tag: "Logistics",
      image: "https://images.unsplash.com/photo-1558444479-27c49742fed2?w=600&auto=format&fit=crop&q=60",
      content: "<p>Supply chain constraints have rewritten the rules of international shipping and distribution. Port congestion and varying fuel indexes require intelligent solutions for manufacturers who export premium fabrics. Parekh Fabrics addresses these bottlenecks with specialized direct route partnerships and warehousing configurations.</p><p>By maintaining strong relations and end-to-end trace tracking, we ensure that bulk supplies arrive at their destinations safely, on schedule, and in perfect pristine state.</p>"
    }
  ];

  const displayBlogs = blogs.length > 0 ? blogs : staticPosts;

  const titleParts = (header.title || 'Textile Articles').trim().split(' ');
  const highlightTitle = titleParts.pop();
  const mainTitle = titleParts.join(' ');

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 leading-[0.95] mb-8">
              {mainTitle} <br />
              <span className="text-orange-600">{highlightTitle}</span>
            </h2>

            <div className="relative bg-white/60 backdrop-blur-md border border-slate-200 rounded-3xl p-8 shadow-xl">
              {/* Quote Icon */}
              <div className="absolute -top-5 -left-4 text-6xl text-orange-400 font-serif">
                “
              </div>

              {/* Quote Text */}
              <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-6">
                {header.description}
              </p>

              {/* Author */}
              <div className="border-t border-slate-200 pt-4">
                <p className="text-sm font-semibold text-slate-800">
                  {header.authorName}
                </p>
                <p className="text-sm text-slate-500">
                  {header.authorRole}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-orange-600 font-bold mt-1">
                  {header.country}
                </p>
              </div>
            </div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {displayBlogs.map((p, i) => (
              <div 
                key={p._id || i} 
                onClick={() => navigate(p._id ? `/blogs/${p._id}` : `/blogs/static-${i}`)}
                className="group cursor-pointer max-w-md mx-auto w-full flex flex-col"
              >
                <div className="aspect-video bg-slate-100 mb-8 overflow-hidden rounded-2xl shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <img 
                    src={p.imageUrl || 
                         (p.thumbnail ? (p.thumbnail.startsWith("http") ? p.thumbnail : `${IMAGE_BASE_URL}/${p.thumbnail}`) : 
                         (p.image ? (p.image.startsWith("http") ? p.image : `${IMAGE_BASE_URL}/${p.image}`) : 
                         staticPosts[0].image))} 
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
                    {p.date || (p.createdAt ? new Date(p.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '')}
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
