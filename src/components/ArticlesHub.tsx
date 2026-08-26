import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, Search, Clock, User, ArrowRight, X, CheckCircle2, ChevronRight, ChevronLeft, LayoutGrid } from 'lucide-react';
import { ARTICLES, ArticleItem } from '../data/articles';

interface ArticlesHubProps {
  onOpenQuoteWithTopic?: (topic: string) => void;
}

const CATEGORIES = ["All", "Buyer's Guides", 'Prepress & Imaging', 'Packaging & Substrates', 'Press Optimization', 'Troubleshooting'];

export const ArticlesHub: React.FC<ArticlesHubProps> = ({ onOpenQuoteWithTopic }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [filteredArticles, viewMode]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = Math.max(320, carouselRef.current.clientWidth * 0.75);
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollability, 350);
    }
  };

  const ArticleCard = ({ art, isCarousel = false }: { art: ArticleItem; isCarousel?: boolean }) => (
    <article className={`group rounded-xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-white/10 hover:border-amber-500/40 dark:hover:border-flexo-yellow/40 overflow-hidden flex flex-col justify-between transition-colors duration-200 shadow-sm ${
      isCarousel ? 'w-[85vw] sm:w-[320px] md:w-[340px] flex-shrink-0 snap-start' : 'w-full'
    }`}>
      <div className="relative h-44 w-full overflow-hidden bg-slate-200 dark:bg-navy-950">
        <img
          src={art.imageUrl}
          alt={`${art.title} - Flexo Process Technical Guide`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 dark:opacity-80 group-hover:opacity-100"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-navy-950 dark:via-navy-950/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-semibold bg-white/95 dark:bg-navy-950/90 text-slate-900 dark:text-flexo-yellow border border-slate-200 dark:border-flexo-yellow/25 px-2.5 py-0.5 rounded-md shadow-sm">
            {art.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] text-slate-500 dark:text-slate-400 mb-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-500 dark:text-flexo-yellow" />
              {art.readTime}
            </span>
          </div>

          <h3 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-flexo-yellow transition-colors leading-snug mb-2 line-clamp-2">
            {art.title}
          </h3>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
            {art.summary}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 truncate max-w-[130px]">
            {art.author}
          </span>
          <button
            onClick={() => setActiveArticle(art)}
            className="text-xs font-bold text-amber-600 dark:text-flexo-yellow flex items-center gap-1 hover:underline"
          >
            <span>Read Guide</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <section id="knowledge-hub" className="py-16 lg:py-20 bg-slate-50 dark:bg-navy-950 border-t border-slate-200 dark:border-white/10 relative transition-colors duration-200">
      <div className="container-x relative z-10">

        {/* Section Header with Left / Right Scroll Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
          <div className="max-w-xl">
            <div className="eyebrow mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>From the Knowledge Hub</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight mb-2">
              Straight talk on flexo, plates &amp; packaging
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Practical guides for brand owners and technical deep-dives for prepress teams.
            </p>
          </div>

          {/* Action Tools: Left/Right Arrow Carousel Buttons + Grid Switcher */}
          <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
            {viewMode === 'carousel' && (
              <div className="flex items-center gap-2 bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-white/10 rounded-xl p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => handleScroll('left')}
                  disabled={!canScrollLeft}
                  className={`p-2 rounded-lg transition-colors ${
                    canScrollLeft
                      ? 'bg-slate-100 dark:bg-navy-950 text-slate-800 dark:text-white hover:text-amber-600 dark:hover:text-flexo-yellow hover:bg-slate-200 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10'
                      : 'text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-40'
                  }`}
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => handleScroll('right')}
                  disabled={!canScrollRight}
                  className={`p-2 rounded-lg transition-colors ${
                    canScrollRight
                      ? 'bg-slate-100 dark:bg-navy-950 text-slate-800 dark:text-white hover:text-amber-600 dark:hover:text-flexo-yellow hover:bg-slate-200 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10'
                      : 'text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-40'
                  }`}
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <button
              onClick={() => setViewMode(viewMode === 'carousel' ? 'grid' : 'carousel')}
              className="btn-ghost text-xs py-2 px-4 flex items-center gap-2"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-amber-500 dark:text-flexo-yellow" />
              <span>{viewMode === 'carousel' ? `View All Grid (${filteredArticles.length})` : 'Carousel View'}</span>
            </button>
          </div>
        </div>

        {/* Category Filters & Quick Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-flexo-yellow text-navy-950 font-bold'
                    : 'bg-white dark:bg-navy-900/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-64 shrink-0">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-white/15 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-amber-500 dark:focus:border-flexo-yellow focus:outline-none"
            />
          </div>
        </div>

        {/* CAROUSEL VIEW (Horizontal Scroll with Left & Right Buttons) */}
        {viewMode === 'carousel' ? (
          <div className="relative group">
            <div
              ref={carouselRef}
              onScroll={checkScrollability}
              className="flex gap-5 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredArticles.map((art) => (
                <ArticleCard key={art.id} art={art} isCarousel={true} />
              ))}
            </div>

            {/* Subtle mobile gesture indicator */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2 px-1">
              <span>Scroll or swipe to explore all {filteredArticles.length} guides</span>
              <span className="hidden sm:inline-flex items-center gap-1 font-mono text-slate-400">
                Use <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs">&larr;</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs">&rarr;</kbd> arrows above
              </span>
            </div>
          </div>
        ) : (
          /* GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {filteredArticles.map((art) => (
              <ArticleCard key={art.id} art={art} isCarousel={false} />
            ))}
          </div>
        )}

      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 dark:bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/15 rounded-2xl max-w-3xl w-full p-6 sm:p-9 shadow-2xl relative max-h-[90vh] overflow-y-auto">

            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 dark:hover:text-white p-1.5 rounded-lg bg-slate-100 dark:bg-white/5"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
              <span className="text-amber-700 dark:text-flexo-yellow font-semibold bg-amber-500/10 dark:bg-flexo-yellow/10 px-2.5 py-0.5 rounded border border-amber-500/30 dark:border-flexo-yellow/25">
                {activeArticle.category}
              </span>
              <span>{activeArticle.readTime}</span>
              <span>&bull;</span>
              <span>{activeArticle.publishedDate}</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-4 leading-tight">
              {activeArticle.title}
            </h2>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-white/10 mb-6 text-xs">
              <div className="w-9 h-9 rounded-full bg-amber-500/15 dark:bg-flexo-yellow/15 border border-amber-500/30 dark:border-flexo-yellow/30 flex items-center justify-center text-amber-700 dark:text-flexo-yellow font-bold">
                <User className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white block">{activeArticle.author}</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">{activeArticle.authorRole}</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-amber-500/[0.08] dark:bg-flexo-yellow/[0.07] border border-amber-500/20 dark:border-flexo-yellow/20 mb-7">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-flexo-yellow uppercase tracking-wide mb-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Key Takeaways</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-200">
                {activeArticle.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-flexo-yellow font-bold shrink-0">&bull;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {activeArticle.specsTable && (
              <div className="mb-7">
                <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-white mb-3">
                  Technical Benchmarks
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeArticle.specsTable.map((spec, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-white/10 flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">{spec.label}:</span>
                      <span className="text-amber-700 dark:text-flexo-yellow font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-4 mb-8">
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200 dark:border-white/10 mb-6">
              {activeArticle.tags.map((t, idx) => (
                <span key={idx} className="text-xs bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded border border-slate-200 dark:border-white/10">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
                Questions about applying this to your pressroom?
              </span>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-white/20 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white flex-1 sm:flex-none"
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
