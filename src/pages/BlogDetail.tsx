import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { getBlogDetail, type Blog } from "@/lib/microcms";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;
    getBlogDetail(id)
      .then((res) => setBlog(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-beige">
        <div className="container flex items-center justify-between h-16 md:h-18">
          <Link to="/">
            <img src="/images/movicre-logo.png" alt="movicre" className="h-12 md:h-14" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/" className="text-warm-gray hover:text-coral transition-colors">トップ</Link>
            <Link to="/blog" className="text-warm-gray hover:text-coral transition-colors">ブログ</Link>
          </nav>
        </div>
      </header>

      <article className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container">
          {/* Loading */}
          {loading && (
            <div className="text-center text-warm-gray py-12">読み込み中...</div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center py-12">
              <p className="text-warm-gray mb-4">記事が見つかりませんでした。</p>
              <Link to="/blog" className="text-coral hover:underline">
                ブログ一覧に戻る
              </Link>
            </div>
          )}

          {/* Article */}
          {blog && (
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-warm-gray hover:text-coral transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                ブログ一覧に戻る
              </Link>

              {/* Category + Date */}
              <div className="flex items-center gap-3 mb-4">
                {blog.category && (
                  <span className="text-xs text-coral bg-coral/10 px-3 py-1 rounded-full">
                    {blog.category.name}
                  </span>
                )}
                <div className="flex items-center gap-1 text-xs text-warm-gray">
                  <Calendar className="h-3 w-3" />
                  <time>{new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('ja-JP')}</time>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl text-warm-brown font-medium mb-8 leading-tight">
                {blog.title}
              </h1>

              {/* Eyecatch */}
              {blog.eyecatch && (
                <div className="rounded-2xl overflow-hidden shadow-soft-lg mb-10">
                  <img
                    src={blog.eyecatch.url}
                    alt={blog.title}
                    className="w-full h-auto"
                  />
                </div>
              )}

              {/* Body */}
              <div
                className="blog-body text-warm-brown leading-loose"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Bottom navigation */}
              <div className="mt-12 pt-8 border-t border-beige flex justify-between items-center">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-warm-gray hover:text-coral transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  ブログ一覧に戻る
                </Link>
                <Link
                  to="/"
                  className="text-warm-gray hover:text-coral transition-colors text-sm"
                >
                  トップに戻る
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </article>
    </div>
  );
}
