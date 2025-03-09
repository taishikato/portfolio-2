import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import "highlight.js/styles/github-dark.css";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

function getBlogPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), "src/content");
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Use created_at as the base date
    const created_at = data.created_at || new Date().toISOString();
    // Use updated_at if available, otherwise use created_at
    const updated_at = data.updated_at || created_at;
    // Use updated_at for display if available, otherwise use created_at
    const displayDate = updated_at;

    return {
      slug,
      title: data.title || "Untitled Post",
      displayDate,
      excerpt: data.excerpt || data.description || "",
      author: data.author || "Anonymous",
      content,
      created_at,
      updated_at,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="mx-auto">
      <div className="mb-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Blog
        </Link>
      </div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-secondary-foreground">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-xl text-muted-foreground italic">{post.excerpt}</p>
        )}
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-4 flex flex-wrap gap-x-4">
          <span>
            Created:{" "}
            {new Date(post.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          {post.updated_at && post.updated_at !== post.created_at && (
            <span>
              Updated:{" "}
              {new Date(post.updated_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          )}
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeRaw]}
          components={{
            code(props) {
              const { children, className, ...rest } = props;
              return (
                <code
                  className={cn("break-words hyphens-auto", className)}
                  {...rest}
                >
                  {children}
                </code>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/content");

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  try {
    const filenames = fs.readdirSync(postsDirectory);

    return filenames
      .filter((filename) => filename.endsWith(".mdx"))
      .map((filename) => ({
        slug: filename.replace(".mdx", ""),
      }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = getBlogPost((await params).slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.created_at,
      modifiedTime: post.updated_at,
      authors: post.author ? [post.author] : undefined,
    },
  };
}
