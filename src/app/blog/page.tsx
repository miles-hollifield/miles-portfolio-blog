import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">{`Blog`}</h1>
      <p className="text-gray-700">
        {`Welcome to my blog! I write about software, language learning, creative projects, and personal reflections.`}
      </p>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-4 border rounded hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-700 mt-2">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
