import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getAllPosts(): Array<{
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
}> {
  // Check if posts directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  // Filter to only include .mdx files
  const mdxFiles = fileNames.filter(fileName => fileName.endsWith('.mdx'));

  const posts = mdxFiles.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    
    try {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString().split('T')[0],
        description: data.description || "",
        tags: Array.isArray(data.tags) ? data.tags : undefined,
      };
    } catch (error) {
      console.error(`Error reading post ${fileName}:`, error);
      return null;
    }
  }).filter((post): post is NonNullable<typeof post> => post !== null);

  // Sort posts by date in descending order (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): {
  slug: string;
  content: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
} {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }
  
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title || slug,
      date: data.date || new Date().toISOString().split('T')[0],
      description: data.description || "",
      tags: Array.isArray(data.tags) ? data.tags : undefined,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    throw new Error(`Failed to read post: ${slug}`);
  }
}

export function postExists(slug: string): boolean {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  return fs.existsSync(fullPath);
}