import { getAllPosts } from "@/lib/mdx";
import BlogClientPage from "./BlogClientPage";

export default async function BlogPage() {
  const posts = getAllPosts();

  return <BlogClientPage posts={posts} />;
}