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
              The open-source alternative to Carbon.ai. Build powerful RAG
              applications with any data source, at any scale.
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

      <iframe
        src="https://airtable.com/embed/appIrznU5cXdfKBMF/shrFTwEVvE6uQpVE5?layout=card"
        width="100%"
        height="533"
        className="airtable-embed bg-transparent border rounded-lg"
      ></iframe>
    </section>
  );
};
