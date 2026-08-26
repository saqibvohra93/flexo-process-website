import React, { useState } from 'react';
import { BookOpen, Search, Calendar, Clock, User, ArrowRight, X, CheckCircle2, ChevronRight, LayoutGrid } from 'lucide-react';
import { ARTICLES, ArticleItem } from '../data/articles';

interface ArticlesHubProps {
  onOpenQuoteWithTopic?: (topic: string) => void;
}

const CATEGORIES = ["All", "Buyer's Guides", 'Prepress & Imaging', 'Packaging & Substrates', 'Press Optimization', 'Troubleshooting'];

export const ArticlesHub: React.FC<ArticlesHubProps> = ({ onOpenQuoteWithTopic }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);
  const [browsingAll, setBrowsingAll] = useState(false);

  const featuredArticles = ARTICLES.filter((a) => a.featured);

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const ArticleCard = ({ art }: { art: ArticleItem }) => (
    <article className="group rounded-xl bg-navy-900/60 border border-white/10 hover:border-flexo-yellow/40 overflow-hidden flex flex-col justify-between transition-colors duration-200">
      <div className="relative h-40 w-full overflow-hidden bg-navy-950">
        <img
          src={art.imageUrl}
          alt={art.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-semibold bg-navy-950/90 text-flexo-yellow border border-flexo-yellow/25 px-2.5 py-0.5 rounded-md">
            {art.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] text-slate-400 mb-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-flexo-yellow" />
              {art.readTime}
            </span>
          </div>

          <h3 className="font-display font-bold text-base text-white group-hover:text-flexo-yellow transition-colors leading-snug mb-2">
            {art.title}
          </h3>

          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
            {art.summary}
          </p>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 truncate max-w-[130px]">
            {art.author}
          </span>
          <button
            onClick={() => setActiveArticle(art)}
            className="text-xs font-bold text-flexo-yellow flex items-center gap-1"
          >
            <span>Read</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <section id="knowledge-hub" className="py-16 lg:py-20 bg-navy-950 border-t border-white/10 relative">
      <div className="container-x relative z-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <div className="eyebrow mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>From the Knowledge Hub</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-2">
              Straight talk on flexo, plates &amp; packaging
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Practical guides for brand owners and technical deep-dives for prepress teams.
            </p>
          </div>

          {!browsingAll && (
            <button
              onClick={() => setBrowsingAll(true)}
              className="btn-ghost text-xs py-2.5 px-5 shrink-0 self-start sm:self-auto"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-flexo-yellow" />
              <span>Browse All {ARTICLES.length} Guides</span>
            </button>
          )}
        </div>

        {!browsingAll ? (
          /* Homepage-friendly: featured articles only, max 4 */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredArticles.slice(0, 4).map((art) => (
              <ArticleCard key={art.id} art={art} />
            ))}
          </div>
        ) : (
          <>
            {/* Filter Controls & Search Bar */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-flexo-yellow text-navy-950'
                        : 'bg-navy-900/80 text-slate-300 hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full lg:w-64 shrink-0">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-navy-900/90 border border-white/15 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-flexo-yellow focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredArticles.map((art) => (
                <ArticleCard key={art.id} art={art} />
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={() => setBrowsingAll(false)}
                className="text-xs font-semibold text-slate-400 hover:text-white"
              >
                Show fewer guides
              </button>
            </div>
          </>
        )}

      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md">
          <div className="bg-navy-900 border border-white/15 rounded-2xl max-w-3xl w-full p-6 sm:p-9 shadow-2xl relative max-h-[90vh] overflow-y-auto">

            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-lg bg-white/5 hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3">
              <span className="text-flexo-yellow font-semibold bg-flexo-yellow/10 px-2.5 py-0.5 rounded border border-flexo-yellow/25">
                {activeArticle.category}
              </span>
              <span>{activeArticle.readTime}</span>
              <span>&bull;</span>
              <span>{activeArticle.publishedDate}</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4 leading-tight">
              {activeArticle.title}
            </h2>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-950/80 border border-white/10 mb-6 text-xs">
              <div className="w-9 h-9 rounded-full bg-flexo-yellow/15 border border-flexo-yellow/30 flex items-center justify-center text-flexo-yellow font-bold">
                <User className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block">{activeArticle.author}</span>
                <span className="text-[11px] text-slate-400">{activeArticle.authorRole}</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-flexo-yellow/[0.07] border border-flexo-yellow/20 mb-7">
              <div className="flex items-center gap-2 text-xs font-bold text-flexo-yellow uppercase tracking-wide mb-2.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Key Takeaways</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-200">
                {activeArticle.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-flexo-yellow font-bold shrink-0">&bull;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {activeArticle.specsTable && (
              <div className="mb-7">
                <h4 className="text-xs font-bold uppercase tracking-wide text-white mb-3">
                  Technical Benchmarks
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeArticle.specsTable.map((spec, i) => (
                    <div key={i} className="p-3 rounded-lg bg-navy-950 border border-white/10 flex justify-between">
                      <span className="text-slate-400">{spec.label}:</span>
                      <span className="text-flexo-yellow font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-4 mb-8">
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10 mb-6">
              {activeArticle.tags.map((t, idx) => (
                <span key={idx} className="text-xs bg-white/[0.04] text-slate-300 px-2.5 py-1 rounded border border-white/10">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-slate-400 text-center sm:text-left">
                Questions about applying this to your pressroom?
              </span>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2.5 rounded-lg border border-white/20 text-xs text-slate-300 hover:text-white flex-1 sm:flex-none"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeArticle.title;
                    setActiveArticle(null);
                    if (onOpenQuoteWithTopic) onOpenQuoteWithTopic(title);
                  }}
                  className="btn-primary text-xs py-2.5 px-5 flex-1 sm:flex-none justify-center"
                >
                  <span>Ask About This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
