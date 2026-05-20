import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Clock, Loader2 } from 'lucide-react';
import { blogApi, IMAGE_BASE_URL } from '../utils/api';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Clean HTML from non-breaking spaces so browser can wrap words normally without mid-word breaks
  const cleanDescription = (html) => {
    if (!html) return "";
    return html.replace(/&nbsp;/g, ' ').replace(/\u00a0/g, ' ');
  };

  const staticPosts = [
    { 
      title: "The Future of Sustainable Cotton in India", 
      date: "Mar 18, 2026", 
      tag: "Innovation",
      image: "https://plus.unsplash.com/premium_photo-1769958353118-297371a6c410?w=600&auto=format&fit=crop&q=60",
      author: "HC Parekh",
      content: `
        <p>The textile industry is undergoing a massive shift towards sustainability. Organic cotton farming is taking the lead, driven by both ecological necessity and consumer choice. Indian manufacturers are adopting advanced crop rotations and eco-friendly dyes to minimize their water footprint.</p>
        <blockquote>"Sustainability is no longer an option—it is the baseline for the future of textiles in India and globally."</blockquote>
        <p>As technology and traditional methods converge, the output shows enhanced durability and soft, luxurious texture. FABRIC - 3 takes this legacy forward, providing the best organic materials sourced from eco-certified farmlands across Gujarat and Maharashtra.</p>
        <h3>The Rise of Organic Farming Methods</h3>
        <p>Traditional chemical fertilizers are being replaced by bio-rational nutrients that restore soil biodiversity. This results in longer fibers, cleaner cotton strands, and a significantly reduced environmental footprint.</p>
        <ul>
          <li>100% Organic Soil prep processes</li>
          <li>Zero harsh chemicals used during harvesting</li>
          <li>Eco-friendly low-impact fiber dye processing</li>
        </ul>
      `
    },
    { 
      title: "Navigating Global Textile Supply Chain Challenges", 
      date: "Mar 10, 2026", 
      tag: "Logistics",
      image: "https://images.unsplash.com/photo-1558444479-27c49742fed2?w=600&auto=format&fit=crop&q=60",
      author: "Admin Team",
      content: `
        <p>Supply chain constraints have rewritten the rules of international shipping and distribution. Port congestion and varying fuel indexes require intelligent solutions for manufacturers who export premium fabrics. Parekh Fabrics addresses these bottlenecks with specialized direct route partnerships and warehousing configurations.</p>
        <blockquote>"Efficiency and clear traceability across the shipping pipelines ensure our international clients remain fully satisfied."</blockquote>
        <p>By maintaining strong relations and end-to-end trace tracking, we ensure that bulk supplies arrive at their destinations safely, on schedule, and in perfect pristine state.</p>
        <h3>Strategic Logistics Redefined</h3>
        <p>Our digital shipping dashboards help predict weather patterns, custom clearances times, and route optimized freight networks. Here is how we maintain a 99.8% on-time dispatch rate:</p>
        <ol>
          <li>Direct cargo partnerships bypassing middle nodes</li>
          <li>24/7 temperature and humidity controlled containers</li>
          <li>Automated shipping documentation and manifest checks</li>
        </ol>
      `
    }
  ];

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        if (id && id.startsWith('static-')) {
          const index = parseInt(id.split('-')[1]);
          if (!isNaN(index) && staticPosts[index]) {
            setBlog(staticPosts[index]);
          } else {
            setBlog(staticPosts[0]);
          }
        } else {
          const response = await blogApi.getById(id);
          if (response.data && response.data.success) {
            setBlog(response.data.data);
          } else {
            // Fallback just in case
            setBlog(staticPosts[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching single blog details:", error);
        // Fallback to static post 0 on error
        setBlog(staticPosts[0]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-32">
        <Loader2 className="w-12 h-12 animate-spin text-orange-600 mb-4" />
        <p className="text-sm font-black uppercase tracking-widest text-slate-400">Loading Article payload...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-32 px-6">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">Article Not Found</h2>
        <button 
          onClick={() => navigate('/blogs')}
          className="flex items-center gap-2 text-sm font-black text-orange-600 uppercase tracking-wider hover:text-slate-900 transition-colors"
        >
          <ArrowLeft size={16} /> Return to Articles
        </button>
      </div>
    );
  }

  const blogImage = blog.imageUrl || 
    (blog.thumbnail ? (blog.thumbnail.startsWith("http") ? blog.thumbnail : `${IMAGE_BASE_URL}/${blog.thumbnail}`) : 
    (blog.image ? (blog.image.startsWith("http") ? blog.image : `${IMAGE_BASE_URL}/${blog.image}`) : 
    null));

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation / Breadcrumb trail */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
          <button 
            onClick={() => navigate('/blogs')}
            className="group flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest hover:text-orange-600 transition-colors duration-300"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform" />
            Back to Articles
          </button>
          
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <span>Home</span>
            <span className="text-slate-200">/</span>
            <span>Blogs</span>
            <span className="text-slate-200">/</span>
            <span className="text-orange-600 truncate max-w-[150px]">{blog.title}</span>
          </div>
        </div>

        {/* Category Tag */}
        <span className="inline-block text-[11px] font-black text-orange-600 uppercase tracking-[0.3em] mb-4">
          {blog.tag || blog.category || "Insight"}
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-[1.05] mb-8">
          {blog.title}
        </h1>

        {/* Meta Info Row */}
        <div className="flex flex-wrap items-center gap-6 text-slate-500 text-xs border-b border-slate-100 pb-8 mb-10">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-orange-500" />
            <span className="font-bold uppercase tracking-wider">
              {blog.date ? new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 
               (blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 
               new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }))}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <User size={14} className="text-orange-500" />
            <span className="font-bold uppercase tracking-wider">
              BY {blog.author || "HC Parekh"}
            </span>
          </div>
        </div>

        {/* Premium Banner Image - Rendered at a balanced medium size, centered */}
        {blogImage && (
          <div className="max-w-2xl mx-auto bg-slate-50/50 overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl mb-12 group flex justify-center items-center">
            <img 
              src={blogImage} 
              alt={blog.title}
              className="w-full h-auto max-h-[450px] object-contain transition-all duration-700"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        )}

        {/* Rich Text Body Content with complete scope reset for Quill layout styling */}
        <article className="blog-content-body max-w-3xl mx-auto text-slate-700 leading-relaxed text-base md:text-lg w-full max-w-full overflow-hidden">
          <div 
            dangerouslySetInnerHTML={{ __html: cleanDescription(blog.content) }}
            className="prose prose-orange max-w-none"
          />
        </article>

        {/* Page Footer back button */}
        <div className="border-t border-slate-100 pt-10 mt-16 flex justify-center">
          <button 
            onClick={() => navigate('/blogs')}
            className="group inline-flex items-center gap-3 bg-slate-900 text-white hover:bg-orange-600 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest shadow-lg hover:shadow-orange-600/30 transition-all duration-300 active:scale-[0.98]"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform" />
            Return to Articles List
          </button>
        </div>

      </div>

      {/* Embedded CSS style tags for styling safety to render rich texts without breaking */}
      <style>{`
        .blog-content-body,
        .blog-content-body * {
          word-break: normal !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
        }
        .blog-content-body {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        .blog-content-body p {
          margin-bottom: 1.5rem;
          font-weight: 500;
          color: #475569;
          line-height: 1.85;
        }
        .blog-content-body h2,
        .blog-content-body h3,
        .blog-content-body h4 {
          color: #0f172a;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.025em;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.25;
        }
        .blog-content-body h2 {
          font-size: 1.75rem;
          border-bottom: 2px solid #f1f5f9;
          padding-bottom: 0.5rem;
        }
        .blog-content-body h3 {
          font-size: 1.4rem;
        }
        .blog-content-body strong {
          color: #0f172a;
          font-weight: 700;
        }
        .blog-content-body blockquote {
          border-left: 4px solid #ea580c;
          padding: 1rem 1.5rem;
          margin: 2rem 0;
          background-color: #fff7ed;
          border-radius: 0.5rem 1.5rem 1.5rem 0.5rem;
          font-style: italic;
          font-weight: 600;
          color: #ea580c;
          font-size: 1.125rem;
        }
        .blog-content-body ul,
        .blog-content-body ol {
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .blog-content-body ul li {
          list-style-type: disc;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #475569;
        }
        .blog-content-body ol li {
          list-style-type: decimal;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #475569;
        }
        .blog-content-body a {
          color: #ea580c;
          text-decoration: underline;
          font-weight: 700;
          transition: color 0.2s;
        }
        .blog-content-body a:hover {
          color: #0f172a;
        }
        .blog-content-body img {
          max-width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 1.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
          margin: 2.5rem 0;
          border: 1px solid #f1f5f9;
        }
      `}</style>
    </div>
  );
};

export default BlogDetails;
