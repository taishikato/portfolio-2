import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Taishi",
  description:
    "Articles and thoughts on web development, AI, and product building.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="flex justify-start border-b w-full pb-3 mb-7 gap-x-3">
        <Link
          href="/"
          className="text-secondary-foreground/60 font-semibold pr-3 justify-start"
        >
          My Work
        </Link>
        <Link
          href="/stack"
          className="text-secondary-foreground/60 font-semibold pr-3 justify-start"
        >
          Stack
        </Link>
        <Link href="/blog" className="text-secondary-foreground font-semibold">
          Blog
        </Link>
      </div>
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-foreground mb-4">
          Blog
        </h1>
        <p className="text-secondary-foreground/60">
          Thoughts and articles on web development, AI, and product building.
        </p>
      </div>

      {children}
    </section>
  );
}
