import { Card, CardDescription, CardHeader } from "@/components/ui/card";

const list = [
  {
    title: "Supavec",
    url: "https://github.com/supavec/supavec",
    description: "The open-source RAG platform.",
  },
  {
    title: "@supavec/mcp-server",
    url: "https://github.com/supavec/mcp-server",
    description: "MCP server for Supavec",
  },
  {
    title: "@supavec/supabase-ai",
    url: "https://github.com/supavec/supabase-ai",
    description:
      "TypeScript SDK for building RAG applications with Supabase + pgvector",
  },
  {
    title: "ChatSage",
    url: "https://github.com/taishikato/chatsage",
    description: "An OSS Chatbase alternative",
  },
  {
    title: "CiteAnalytics",
    url: "https://github.com/taishikato/citeanalytics",
    description: "Track citations of your website by AI",
  },
];

export const OssProjects = () => {
  return (
    <section>
      <h2 className="text-secondary-foreground w-full border-b pb-3 mb-7 font-semibold">
        OSS Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {list.map((project) => {
          return (
            <Card
              key={project.url}
              className="hover:border-secondary-foreground/80 transition-colors group"
            >
              <a href={project.url} target="_blank">
                <CardHeader>
                  <CardDescription className="group-hover:text-secondary-foreground/80 transition-colors font-medium">
                    {project.title}
                  </CardDescription>
                  <CardDescription className="text-muted-foreground text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </a>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
