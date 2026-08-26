import React, { useState } from 'react';
import { BookOpen, Search, Tag, Calendar, Clock, User, ArrowRight, X, CheckCircle2, FileText, ChevronRight, Share2 } from 'lucide-react';
import { ARTICLES, ArticleItem } from '../data/articles';

interface ArticlesHubProps {
  onOpenQuoteWithTopic?: (topic: string) => void;
}

export const ArticlesHub: React.FC<ArticlesHubProps> = ({ onOpenQuoteWithTopic }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  const categories = ['All', 'Prepress & Imaging', 'Packaging & Substrates', 'Press Optimization', 'Troubleshooting'];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="knowledge-hub" className="py-20 lg:py-28 bg-navy-950 border-t border-white/10 relative">
      <div className="container-x relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="eyebrow mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Knowledge &amp; Research</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            B2B Flexographic Engineering &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-flexo-yellow to-flexo-orange">
              Prepress Resource Hub
            </span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            In-depth engineering analyses, pressroom diagnostic guides, and material benchmarks curated by our prepress engineers and flexographic consultants.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-flexo-yellow text-navy-950 font-bold shadow-md'
                    : 'bg-navy-900/80 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles, LPI, defects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-900/90 border border-white/15 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:border-flexo-yellow focus:outline-none"
            />
          </div>

        </div>

        {/* Articles Count Status */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-400">
          <span>Showing <strong className="text-white">{filteredArticles.length}</strong> Technical Guides</span>
          <span>Category: <strong className="text-flexo-yellow">{selectedCategory}</strong></span>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="group rounded-2xl bg-navy-900/70 border border-white/10 hover:border-flexo-yellow/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.5)] backdrop-blur-sm"
            >
              {/* Header Image */}
              <div className="relative h-44 w-full overflow-hidden bg-navy-950">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono font-bold bg-navy-950/90 text-flexo-yellow border border-flexo-yellow/30 px-2.5 py-0.5 rounded-full">
                    {art.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-flexo-yellow" />
                      {art.readTime}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.publishedDate}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-flexo-yellow transition-colors leading-snug mb-2.5">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {art.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {art.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono bg-white/[0.04] text-slate-400 px-2 py-0.5 rounded border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 truncate max-w-[150px]">
                    By {art.author}
                  </span>
                  <button
                    onClick={() => setActiveArticle(art)}
                    className="text-xs font-bold text-flexo-yellow group-hover:translate-x-1 transition-transform flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-navy-900 border border-white/20 rounded-2xl max-w-3xl w-full p-6 sm:p-9 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-lg bg-white/5 hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Eyebrow & Meta */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-3">
              <span className="text-flexo-yellow font-bold bg-flexo-yellow/10 px-2.5 py-0.5 rounded border border-flexo-yellow/30">
                {activeArticle.category}
              </span>
              <span>{activeArticle.readTime}</span>
              <span>&bull;</span>
              <span>Published {activeArticle.publishedDate}</span>
            </div>

            {/* Title */}
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4 leading-tight">
              {activeArticle.title}
            </h2>

            {/* Author Credential */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-950/80 border border-white/10 mb-6 text-xs">
              <div className="w-9 h-9 rounded-full bg-flexo-yellow/20 border border-flexo-yellow/40 flex items-center justify-center text-flexo-yellow font-bold">
                <User className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block">{activeArticle.author}</span>
                <span className="text-[11px] text-slate-400">{activeArticle.authorRole}</span>
              </div>
            </div>

            {/* Key Engineering Takeaways Box */}
            <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 mb-7">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 font-mono uppercase tracking-wider mb-2.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Key Engineering Takeaways</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-200">
                {activeArticle.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">&bull;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications Matrix (If Present) */}
            {activeArticle.specsTable && (
              <div className="mb-7">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 font-mono">
                  Technical Benchmark Parameters:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  {activeArticle.specsTable.map((spec, i) => (
                    <div key={i} className="p-3 rounded-lg bg-navy-950 border border-white/10 flex justify-between">
                      <span className="text-slate-400">{spec.label}:</span>
                      <span className="text-flexo-yellow font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Full Body Content */}
            <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-4 mb-8">
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10 mb-6">
              <span className="text-xs font-mono text-slate-400">Tags:</span>
              {activeArticle.tags.map((t, idx) => (
                <span key={idx} className="text-xs font-mono bg-white/[0.04] text-slate-300 px-2.5 py-1 rounded border border-white/10">
                  #{t}
                </span>
              ))}
            </div>

            {/* Bottom Action Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-slate-400 text-center sm:text-left">
                Have questions about applying this in your pressroom?
              </span>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2.5 rounded-xl border border-white/20 text-xs text-slate-300 hover:text-white flex-1 sm:flex-none"
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
                  <span>Inquire Regarding This Topic</span>
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
