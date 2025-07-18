import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="max-w-3xl mx-auto text-center py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
      <p className="text-gray-600 mb-8">
        {`Sorry, the blog post you're looking for doesn't exist.`}
      </p>
      <div className="space-x-4">
        <Link
          href="/blog"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          ← Back to Blog
        </Link>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
        >
          Home
        </Link>
      </div>
    </div>
  );
}