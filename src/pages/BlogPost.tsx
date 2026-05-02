import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug } from "@/content/blogPosts";

// Tiny markdown renderer (handles ## h2, ### h3, lists, > blockquote, **bold**, [text](url), --- hr, paragraphs)
const renderMarkdown = (md: string) => {
  const lines = md.split("\n");
  const blocks: JSX.Element[] = [];
  let i = 0;
  let key = 0;

  const inline = (text: string) => {
    // links
    let html = text.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-primary hover:text-primary/80 underline underline-offset-4" target="_blank" rel="noopener noreferrer">$1</a>'
    );
    // bold
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>');
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={key++} className="text-xl md:text-2xl font-display font-bold text-foreground mt-8 mb-3">
          {inline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={key++} className="text-2xl md:text-3xl font-display font-bold text-foreground mt-12 mb-4">
          {inline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    if (line.trim() === "---") {
      blocks.push(<hr key={key++} className="my-10 border-border/40" />);
      i++;
      continue;
    }

    if (line.startsWith("> ")) {
      blocks.push(
        <blockquote key={key++} className="border-l-4 border-primary/60 pl-5 my-6 text-lg text-foreground/90 italic font-body">
          {inline(line.slice(2))}
        </blockquote>
      );
      i++;
      continue;
    }

    // unordered list
    if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) {
        items.push(lines[i].replace(/^[-*] /, ""));
        i++;
      }
      blocks.push(
        <ul key={key++} className="list-disc pl-6 space-y-2 my-5 text-muted-foreground font-body">
          {items.map((it, idx) => (
            <li key={idx}>{inline(it)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      blocks.push(
        <ol key={key++} className="list-decimal pl-6 space-y-2 my-5 text-muted-foreground font-body">
          {items.map((it, idx) => (
            <li key={idx}>{inline(it)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // paragraph (collect contiguous non-empty, non-special lines)
    const paragraph: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("> ") &&
      !/^[-*] /.test(lines[i]) &&
      !/^\d+\.\s/.test(lines[i]) &&
      lines[i].trim() !== "---"
    ) {
      paragraph.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={key++} className="text-muted-foreground font-body leading-relaxed my-5 text-base md:text-lg">
        {inline(paragraph.join(" "))}
      </p>
    );
  }

  return blocks;
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (!post) return;
    document.title = `${post.metaTitle} | PixelPlace.cloud`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", post.metaDescription);

    // canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://pixelplace.cloud/blog/${post.slug}`);

    // JSON-LD Article schema
    const existing = document.getElementById("blog-jsonld");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "blog-jsonld";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.date,
      author: { "@type": "Organization", name: "PixelPlace.cloud" },
      publisher: { "@type": "Organization", name: "PixelPlace.cloud" },
      keywords: post.keywords.join(", "),
    });
    document.head.appendChild(script);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-40 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-display font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary underline">
            Back to blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 font-body"
            >
              <ArrowLeft size={16} />
              Back to blog
            </Link>

            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 font-body">
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

            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground font-body mb-10 border-l-4 border-primary/50 pl-5">
              {post.excerpt}
            </p>

            <div className="prose-content">{renderMarkdown(post.body)}</div>

            <div className="glass glow-cyan rounded-2xl p-8 mt-12 text-center">
              <h3 className="text-2xl font-display font-bold mb-3">
                Ready to get more customers from your website?
              </h3>
              <p className="text-muted-foreground mb-6 font-body">
                Modern websites starting at $499. Built by senior developers — no outsourcing.
              </p>
              <button
                onClick={() => navigate("/#contact")}
                className="btn-glow px-8 py-3 rounded-lg font-semibold text-primary-foreground inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
