"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
}

interface BlogClientPageProps {
  posts: Post[];
}

export default function BlogClientPage({ posts }: BlogClientPageProps) {
  // Ensure posts are displayed newest first (defensive sort in case upstream changes)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [heroVisible, setHeroVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [featuredVisible, setFeaturedVisible] = useState(false);
  const [topicsVisible, setTopicsVisible] = useState(false);
  const [postsVisible, setPostsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const topicsRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createObserver = (setVisible: (visible: boolean) => void) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        { threshold: 0.1, rootMargin: "-10% 0px" }
      );
    };

    const heroObserver = createObserver(setHeroVisible);
    const statsObserver = createObserver(setStatsVisible);
    const featuredObserver = createObserver(setFeaturedVisible);
    const topicsObserver = createObserver(setTopicsVisible);
    const postsObserver = createObserver(setPostsVisible);
    const ctaObserver = createObserver(setCtaVisible);

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (statsRef.current) statsObserver.observe(statsRef.current);
    if (featuredRef.current) featuredObserver.observe(featuredRef.current);
    if (topicsRef.current) topicsObserver.observe(topicsRef.current);
    if (postsRef.current) postsObserver.observe(postsRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);

    return () => {
      heroObserver.disconnect();
      statsObserver.disconnect();
      featuredObserver.disconnect();
      topicsObserver.disconnect();
      postsObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  // Prepare topic list from posts
  const topicsFromPosts = Array.from(
    new Set(
      sortedPosts.flatMap(p => p.tags ?? [])
    )
  ).sort();
  const topics = ['All', ...topicsFromPosts.length ? topicsFromPosts : ['Software Engineering', 'AI Development', 'Japanese Learning', 'Career', 'Projects', 'Personal']];
  const topicsCount = Math.max(0, topics.length - 1);

  // Filter posts by selected topic
  const visiblePosts = selectedTopic === 'All'
    ? sortedPosts
    : sortedPosts.filter(p => (p.tags ?? []).includes(selectedTopic));

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div 
          ref={heroRef}
          className={`cta-section transition-all duration-1000 ${
            heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`} 
          style={{ marginTop: 0, marginBottom: '3rem' }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Blog</h1>
          <p>
            {`Welcome to my blog! I write about software engineering, AI development, language learning, and personal reflections on technology and culture.`}
          </p>
        </div>

        {/* Blog Stats */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-1000 delay-200 ${
            statsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{visiblePosts.length}</p>
                <p className="text-gray-300">Articles</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{topicsCount}</p>
                <p className="text-gray-300">Topics</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-700">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">~5</p>
                <p className="text-gray-300">Min Read</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
  {sortedPosts.length > 0 && (
          <div 
            ref={featuredRef}
            className={`mb-8 transition-all duration-1000 delay-400 ${
              featuredVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Featured Post</h2>
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
              <Link href={`/blog/${sortedPosts[0].slug}`} className="group">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                    Latest
                  </span>
                  <span className="text-sm text-gray-400">{sortedPosts[0].date}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {sortedPosts[0].title}
                </h3>
                <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                  {sortedPosts[0].description}
                </p>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="font-medium">Read More</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* Topics Filter */}
        <div 
          ref={topicsRef}
          className={`mb-8 transition-all duration-1000 delay-600 ${
            topicsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Topics</h2>
          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  topic === selectedTopic 
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                    : 'bg-gray-700/50 text-gray-300 border border-gray-600 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/30'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div 
          ref={postsRef}
          className={`mb-16 transition-all duration-1000 delay-800 ${
            postsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl font-bold text-white mb-6">All Posts</h2>
          <div className="grid gap-6">
            {visiblePosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="bg-gray-800/50 rounded-xl shadow-lg border border-gray-700 p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-sm text-gray-400">Article {index + 1}</span>
                    </div>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span className="text-sm font-medium">Read Article</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">5 min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div 
          ref={ctaRef}
          className={`cta-section transition-all duration-1000 delay-1000 ${
            ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2>Keep Exploring</h2>
          <p>
            {`Browse more of my writing and projects, or reach out if you'd like to collaborate or chat about ideas.`}
          </p>
          <div className="cta-buttons">
            <Link href="/about" className="cta-button secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Learn About Me
            </Link>
            <Link href="/projects" className="cta-button secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Check Out My Projects
            </Link>
            <Link href="/contact" className="cta-button secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
