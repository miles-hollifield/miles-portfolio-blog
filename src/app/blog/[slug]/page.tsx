import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <article className="prose prose-gray max-w-3xl mx-auto">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <MDXRemote source={post.content} />
    </article>
  );
}
