import { getPostBySlug, getAllPosts, postExists } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import ShareButton from "@/app/components/ShareButton";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Await the params as required by Next.js 15
  const { slug } = await params;
  
  // Check if post exists before trying to read it
  if (!postExists(slug)) {
    notFound();
  }
  
  let post;
  try {
    post = getPostBySlug(slug);
  } catch (error) {
    console.error('Error loading post:', error);
    notFound();
  }

  // For navigation, we want chronological order (oldest -> newest)
  const allPostsDesc = getAllPosts(); // currently sorted newest first
  const allPostsChrono = [...allPostsDesc].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const currentIndex = allPostsChrono.findIndex(p => p.slug === slug);
  const previousPost = currentIndex > 0 ? allPostsChrono[currentIndex - 1] : null; // older
  const nextPost = currentIndex < allPostsChrono.length - 1 ? allPostsChrono[currentIndex + 1] : null; // newer

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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white font-medium">{post.title}</span>
          </div>
        </nav>

        {/* Article Header */}
        <div className="bg-gray-800/50 rounded-2xl p-5 sm:p-8 mb-8 shadow-lg border border-gray-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-gray-300">
              <div className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>5 min read</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span>Article</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="bg-gray-800/50 rounded-2xl p-5 sm:p-8 mb-8 shadow-lg border border-gray-700">
          <div className="prose prose-base sm:prose-lg prose-invert max-w-none
            prose-a:text-blue-300 hover:prose-a:text-blue-200
            prose-img:rounded-xl prose-img:border prose-img:border-gray-700 prose-img:shadow-md prose-img:mx-auto
            prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-code:text-blue-200 prose-code:bg-gray-900/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-hr:border-gray-700 prose-blockquote:border-l-blue-400">
            <MDXRemote source={post.content} />
          </div>
        </article>

        {/* Article Footer */}
        <div className="bg-gray-800/50 rounded-2xl p-5 sm:p-8 mb-8 shadow-lg border border-gray-700">
          <div className="flex items-center justify-between gap-4 border-b border-gray-600 pb-6 mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Miles</h3>
                <p className="text-gray-300">Software Engineer/AI Engineer</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ShareButton slug={post.slug} />
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 mb-4">
              {`Thanks for reading! If you enjoyed this article, you might also like my other posts.`}
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Read More Articles
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {previousPost && (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="group bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:border-blue-500/50"
            >
              <div className="flex items-center text-gray-300 mb-2">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm">Previous Post</span>
              </div>
              <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">
                {previousPost.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2">{previousPost.description}</p>
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:border-blue-500/50"
            >
              <div className="flex items-center justify-end text-gray-300 mb-2">
                <span className="text-sm">Next Post</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors text-right">
                {nextPost.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2 text-right">{nextPost.description}</p>
            </Link>
          )}
        </div>

        {/* CTA Section */}
  <div className="cta-section">
          <h2>{`Let's Connect!`}</h2>
          <p>
            {`Found this article helpful? I'd love to hear your thoughts and continue the conversation.`}
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
              View My Projects
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