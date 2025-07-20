import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="page-container">
      <div className="max-w-6xl mx-auto page-content">
        {/* Hero Section */}
        <div className="page-hero">
          <h1>Blog</h1>
          <p>
            {`Welcome to my blog! I write about software engineering, language learning, creative projects, and personal reflections on technology and culture.`}
          </p>
        </div>

        {/* Blog Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{posts.length}</p>
                <p className="text-gray-600">Articles</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">5</p>
                <p className="text-gray-600">Topics</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">~5</p>
                <p className="text-gray-600">Min Read</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {posts.length > 0 && (
          <div className="content-section mb-8">
            <h2>Featured Post</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
              <Link href={`/blog/${posts[0].slug}`} className="group">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">
                    Latest
                  </span>
                  <span className="text-sm text-gray-500">{posts[0].date}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {posts[0].title}
                </h3>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  {posts[0].description}
                </p>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
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
        <div className="content-section mb-8">
          <h2>Topics</h2>
          <div className="flex flex-wrap gap-3">
            {['All', 'Software Engineering', 'Japanese Learning', 'Career', 'Projects', 'Personal'].map((topic) => (
              <button
                key={topic}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  topic === 'All' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div className="content-section">
          <h2>All Posts</h2>
          <div className="blog-grid">
            {posts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card group">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-sm text-gray-500">Article {index + 1}</span>
                  </div>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                
                <h3 className="group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="blog-description">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
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
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="cta-section">
          <h2>Stay Updated</h2>
          <p>
            {`Get notified when I publish new articles about software engineering, language learning, and technology.`}
          </p>
          <div className="cta-buttons">
            <Link href="/projects" className="cta-button primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Check Out My Projects
            </Link>
            <a href="mailto:mileshollifieldgfp@gmail.com" className="cta-button secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}