import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, Search, Clock, User, ArrowRight, X, CheckCircle2, ChevronRight, ChevronLeft, LayoutGrid } from 'lucide-react';
import { ARTICLES, ArticleItem } from '../data/articles';

interface ArticlesHubProps {
  onOpenQuoteWithTopic?: (topic: string) => void;
}

const CATEGORIES = ["All", "Buyer's Guides", 'Prepress & Imaging', 'Packaging & Substrates', 'Press Optimization', 'Troubleshooting'];

const articleImageBase = (imageUrl: string) => imageUrl.replace(/\.jpe?g$/i, '');

const ArticleImage: React.FC<{
  imageUrl: string;
  alt: string;
  className?: string;
  sizes: string;
  loading?: 'lazy' | 'eager';
}> = ({ imageUrl, alt, className, sizes, loading = 'lazy' }) => {
  const base = articleImageBase(imageUrl);
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${base}-sm.webp 768w, ${base}.webp 1280w`}
        sizes={sizes}
      />
      <img
        src={`${base}.jpg`}
        srcSet={`${base}.jpg 1280w`}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        width={1280}
        height={854}
      />
    </picture>
  );
};

export const ArticlesHub: React.FC<ArticlesHubProps> = ({ onOpenQuoteWithTopic }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mouse drag-to-scroll states
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

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

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftRef.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag sensitivity
    if (Math.abs(walk) > 5) {
      hasDraggedRef.current = true;
    }
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
    checkScrollability();
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  const ArticleCard = ({ art, isCarousel = false }: { art: ArticleItem; isCarousel?: boolean }) => (
    <article
      onClick={() => {
        if (!hasDraggedRef.current) {
          setActiveArticle(art);
        }
      }}
      className={`group rounded-xl bg-white  border border-slate-200  hover:border-amber-500/40  overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer select-none ${
        isCarousel ? 'w-[85vw] sm:w-[320px] md:w-[340px] flex-shrink-0 snap-start' : 'w-full'
      }`}
    >
      <div className="relative h-44 w-full overflow-hidden bg-slate-200 ">
        <ArticleImage
          imageUrl={art.imageUrl}
          alt={`${art.title} - Flexo Process Technical Guide`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95  group-hover:opacity-100 pointer-events-none"
          sizes="(min-width: 768px) 340px, 85vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60   to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3 pointer-events-none">
          <span className="text-[10px] font-semibold bg-white/95  text-slate-900  border border-slate-200  px-2.5 py-0.5 rounded-md shadow-sm">
            {art.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] text-slate-500  mb-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-500 " />
              {art.readTime}
            </span>
          </div>

          <h3 className="font-display font-bold text-base text-slate-900  group-hover:text-amber-600  transition-colors leading-snug mb-2 line-clamp-2">
            {art.title}
          </h3>

          <p className="text-xs text-slate-600  leading-relaxed line-clamp-2 mb-4">
            {art.summary}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-200  flex items-center justify-between">
          <span className="text-[11px] text-slate-500 truncate max-w-[130px]">
            {art.author}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveArticle(art);
            }}
            className="text-xs font-bold text-amber-600  flex items-center gap-1 hover:underline"
          >
            <span>Read Guide</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <section id="knowledge-hub" className="py-16 lg:py-20 bg-slate-50  border-t border-slate-200  relative transition-colors duration-200">
      <div className="container-x relative z-10">

        {/* Section Header with View Mode Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
          <div className="max-w-xl">
            <div className="eyebrow mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>From the Knowledge Hub</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900  tracking-tight mb-2">
              Straight talk on flexo, plates &amp; packaging
            </h2>
            <p className="text-slate-600  text-sm leading-relaxed">
              Practical guides for brand owners and technical deep-dives for prepress teams.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setViewMode(viewMode === 'carousel' ? 'grid' : 'carousel')}
              className="btn-ghost text-xs py-2 px-4 flex items-center gap-2 shadow-sm"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-amber-500 " />
              <span>{viewMode === 'carousel' ? `View All Grid (${filteredArticles.length})` : 'Carousel View'}</span>
            </button>
          </div>
        </div>

        {/* Category Filters & Quick Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200 ">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-flexo-yellow text-navy-950 font-bold'
                    : 'bg-white  text-slate-700  hover:bg-slate-100  border border-slate-200 '
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
              className="w-full bg-white  border border-slate-200  rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-900  placeholder-slate-400  focus:border-amber-500  focus:outline-none"
            />
          </div>
        </div>

        {/* CAROUSEL VIEW (Side-mounted floating Left & Right Navigation Buttons + Touch/Mouse Drag Scroll) */}
        {viewMode === 'carousel' ? (
          <div className="relative">
            {/* Left Side Floating Arrow Button */}
            {canScrollLeft && (
              <button
                type="button"
                onClick={() => handleScroll('left')}
                className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white  text-slate-900  border border-slate-200  shadow-xl flex items-center justify-center hover:scale-110 hover:text-amber-600  hover:border-amber-500/50 transition-all duration-200"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {/* Right Side Floating Arrow Button */}
            {canScrollRight && (
              <button
                type="button"
                onClick={() => handleScroll('right')}
                className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white  text-slate-900  border border-slate-200  shadow-xl flex items-center justify-center hover:scale-110 hover:text-amber-600  hover:border-amber-500/50 transition-all duration-200"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {/* Horizontal Scroll Track (Mouse drag + Touch swipe + Keyboard arrow keys) */}
            <div
              ref={carouselRef}
              onScroll={checkScrollability}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              className="flex gap-5 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-none cursor-grab active:cursor-grabbing px-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredArticles.map((art) => (
                <ArticleCard key={art.id} art={art} isCarousel={true} />
              ))}
            </div>

            {/* Clean bottom guidance */}
            <div className="flex items-center justify-between text-[11px] text-slate-500  mt-2 px-1">
              <span>Swipe, click &amp; drag, or use side arrows to browse all {filteredArticles.length} guides</span>
              <span>Showing {filteredArticles.length} articles</span>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70  backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white  border border-slate-200  rounded-2xl max-w-3xl w-full p-6 sm:p-9 shadow-2xl relative max-h-[90vh] overflow-y-auto">

            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-900  p-1.5 rounded-lg bg-slate-100 "
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500  mb-3">
              <span className="text-amber-700  font-semibold bg-amber-500/10  px-2.5 py-0.5 rounded border border-amber-500/30 ">
                {activeArticle.category}
              </span>
              <span>{activeArticle.readTime}</span>
              <span>&bull;</span>
              <span>{activeArticle.publishedDate}</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900  mb-4 leading-tight">
              {activeArticle.title}
            </h2>

            <div className="relative h-44 sm:h-56 w-full overflow-hidden rounded-xl mb-6 bg-slate-200">
              <ArticleImage
                imageUrl={activeArticle.imageUrl}
                alt={`${activeArticle.title} - Flexo Process Technical Guide`}
                className="w-full h-full object-cover"
                sizes="(min-width: 768px) 720px, 92vw"
                loading="eager"
              />
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50  border border-slate-200  mb-6 text-xs">
              <div className="w-9 h-9 rounded-full bg-amber-500/15  border border-amber-500/30  flex items-center justify-center text-amber-700  font-bold">
                <User className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900  block">{activeArticle.author}</span>
                <span className="text-[11px] text-slate-500 ">{activeArticle.authorRole}</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-amber-500/[0.08] [0.07] border border-amber-500/20  mb-7">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800  uppercase tracking-wide mb-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Key Takeaways</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 ">
                {activeArticle.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-600  font-bold shrink-0">&bull;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {activeArticle.specsTable && (
              <div className="mb-7">
                <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900  mb-3">
                  Technical Benchmarks
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeArticle.specsTable.map((spec, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-50  border border-slate-200  flex justify-between">
                      <span className="text-slate-500 ">{spec.label}:</span>
                      <span className="text-amber-700  font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="prose prose-slate  max-w-none text-slate-700  text-sm leading-relaxed space-y-4 mb-8">
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200  mb-6">
              {activeArticle.tags.map((t, idx) => (
                <span key={idx} className="text-xs bg-slate-100 [0.04] text-slate-700  px-2.5 py-1 rounded border border-slate-200 ">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-slate-500  text-center sm:text-left">
                Questions about applying this to your pressroom?
              </span>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2.5 rounded-lg border border-slate-300  text-xs text-slate-700  hover:text-slate-950  flex-1 sm:flex-none"
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
