import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { getBlogs, type Blog } from "@/lib/microcms";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs({ limit: 20 })
      .then((res) => setBlogs(res.contents))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-beige">
        <div className="container flex items-center justify-between h-16 md:h-18">
          <Link to="/" className="text-lg md:text-xl text-warm-brown font-medium">
            動画編集スクール
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/" className="text-warm-gray hover:text-coral transition-colors">トップ</Link>
            <span className="text-coral font-medium">ブログ</span>
          </nav>
        </div>
      </header>

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container">
          {/* Page title */}
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="font-accent text-xl text-coral mb-2">Blog</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-warm-brown font-medium">
              ブログ
            </h1>
          </motion.div>

          {/* Loading */}
          {loading && (
            <div className="text-center text-warm-gray py-12">読み込み中...</div>
          )}

          {/* Blog grid */}
          {!loading && blogs.length > 0 && (
            <motion.div {...fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {blogs.map((blog) => (
                <Link key={blog.id} to={`/blog/${blog.id}`} className="group">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow">
                    {blog.eyecatch ? (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={blog.eyecatch.url}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-beige flex items-center justify-center">
                        <span className="text-warm-gray text-sm">No Image</span>
                      </div>
                    )}
                    <div className="p-5">
                      {blog.category && (
                        <span className="text-xs text-coral bg-coral/10 px-2 py-1 rounded-full">
                          {blog.category.name}
                        </span>
                      )}
                      <h2 className="text-warm-brown font-medium mt-2 mb-2 line-clamp-2 group-hover:text-coral transition-colors">
                        {blog.title}
                      </h2>
                      <div className="flex items-center gap-1 text-xs text-warm-gray">
                        <Calendar className="h-3 w-3" />
                        <time>{new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('ja-JP')}</time>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </motion.div>
          )}

          {/* Empty */}
          {!loading && blogs.length === 0 && (
            <div className="text-center text-warm-gray py-12">
              記事はまだありません。
            </div>
          )}

          {/* Back to home */}
          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-warm-gray hover:text-coral transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              トップに戻る
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
