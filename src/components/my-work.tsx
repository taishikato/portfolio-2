import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const MyWork = () => {
  return (
    <section>
      <div className="flex justify-start border-b w-full pb-3 mb-7 gap-x-3">
        <Link
          href="/"
          className="text-secondary-foreground font-semibold pr-3 justify-start"
        >
          My Work
        </Link>
        <Link
          href="/stack"
          className="text-secondary-foreground/60 font-semibold pr-3 justify-start"
        >
          Stack
        </Link>
        <Link
          href="/blog"
          className="text-secondary-foreground/60 font-semibold"
        >
          Blog
        </Link>
      </div>

      {/* Featured Project Card */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="rounded-lg overflow-hidden border bg-card">
            <a href="https://www.supavec.com" target="_blank">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/supavec.png"
                alt="Supavec"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
          <div className="col-span-2 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Supavec</h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4">
              OSS RAG as a Service - spin up vector search + chat API in &lt;5
              min. 630▲ Product Hunt, 620⭐ GitHub.
            </p>
            <a
              href="https://www.supavec.com"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-primary justify-start p-0"
              )}
            >
              supavec.com →
            </a>
          </div>
        </div>
      </div>

      {/* AI Tooling & Infrastructure Section */}
      <section id="ai-tools" className="mb-8">
        <h2 className="text-xl font-semibold mb-6">
          AI Tooling & Infrastructure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Supavec Card */}
          <div className="rounded-2xl shadow-md border bg-card p-6 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">
                <a
                  href="https://www.supavec.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Supavec
                </a>
              </h3>
              <div className="flex flex-wrap gap-1">
                <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs">
                  #RAG
                </span>
                <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs">
                  #Supabase
                </span>
                <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs">
                  #OpenSource
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Open-source RAG platform using pgvector.
            </p>
          </div>

          {/* MCP Server Card */}
          <div className="rounded-2xl shadow-md border bg-card p-6 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">
                <a
                  href="https://www.supavec.com/blog/supavec-mcp-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  MCP Server
                </a>
              </h3>
              <div className="flex flex-wrap gap-1">
                <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs">
                  #MCP
                </span>
                <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs">
                  #RAG
                </span>
                <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs">
                  #OpenSource
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              MCP server streaming Supabase-secured RAG data to LLMs.
            </p>
          </div>

          {/* Launch Week 14 Winner Card */}
          <div className="rounded-2xl shadow-md border bg-card p-6 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">
                <a
                  href="https://x.com/supabase/status/1909552555333398630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  CiteAnalytics
                </a>
              </h3>
              <div className="flex flex-wrap gap-1">
                <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs">
                  #OpenSource
                </span>
                <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs">
                  #Hackathon
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Supabase hackathon winning AI citation analytics app.
            </p>
          </div>
        </div>
      </section>

      <iframe
        src="https://airtable.com/embed/appIrznU5cXdfKBMF/shrh5TKqd6RvcHOpv?layout=card"
        width="100%"
        height="533"
        className="airtable-embed bg-transparent border rounded-lg"
      ></iframe>
    </section>
  );
};
