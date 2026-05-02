import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/content/blogPosts";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog — Web Development Tips & Pricing | PixelPlace.cloud";
    const desc =
      "Honest guides on small business websites, pricing, web development, and getting more customers online. Tips from senior developers at PixelPlace.cloud.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              The <span className="text-gradient-primary">PixelPlace</span> Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Honest guides on websites, pricing, and getting more customers online —
              written by senior developers, not marketers.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 md:p-8 border border-border/50 card-glow group"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-body">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground font-body mb-5">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-display font-semibold text-sm">
                    Read article
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
