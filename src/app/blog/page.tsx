import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author?: string;
  created_at: string;
  updated_at?: string;
  displayDate: string;
}

function getBlogPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), "src/content");

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  try {
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames
      .filter((filename) => filename.endsWith(".mdx"))
      .map((filename) => {
        const slug = filename.replace(".mdx", "");
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        // Use created_at as the base date
        const created_at = data.created_at || new Date().toISOString();
        // Use updated_at if available, otherwise use created_at
        const updated_at = data.updated_at || created_at;
        // Use updated_at for display if available, otherwise use created_at
        const displayDate = updated_at;

        return {
          slug,
          title: data.title || "Untitled Post",
          excerpt: data.excerpt || data.description || "",
          author: data.author,
          created_at,
          updated_at,
          displayDate,
        };
      })
      .sort(
        (a, b) =>
          new Date(b.displayDate).getTime() - new Date(a.displayDate).getTime()
      );

    return posts;
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export default function BlogPage() {
  const posts = getBlogPosts();

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-medium mb-4">No blog posts found</h2>
        <p className="text-secondary-foreground/60">
          Check back soon for new content!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <Card className="hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <CardDescription>
                {new Date(post.displayDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {post.author && ` • ${post.author}`}
              </CardDescription>
            </CardHeader>
            {post.excerpt && (
              <CardContent>
                <p className="text-secondary-foreground/60">{post.excerpt}</p>
                <div className="mt-4 text-xs text-secondary-foreground/40 flex flex-wrap gap-x-4">
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
              </CardContent>
            )}
          </Card>
        </Link>
      ))}
    </div>
  );
}
