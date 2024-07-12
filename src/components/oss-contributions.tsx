import { Card, CardDescription, CardHeader } from "@/components/ui/card";

const list = [
  {
    title: "Pull Request #340 · modal-labs/modal-examples",
    url: "https://github.com/modal-labs/modal-examples/pull/340",
  },
  {
    title: "Pull Request #1799 · nuxt/docs",
    url: "https://github.com/nuxt/docs/pull/1799",
  },
  {
    title: "Pull Request #1797 · nuxt/docs",
    url: "https://github.com/nuxt/docs/pull/1797",
  },
  {
    title: "Pull Request #24589 · nodejs/node",
    url: "https://github.com/nodejs/node/pull/24589",
  },
];

export const OssContributions = () => {
  return (
    <div>
      <h2 className="text-secondary-foreground w-full border-b pb-3 mb-7 font-semibold">
        OSS Contributions
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {list.map((l) => {
          return (
            <Card
              key={l.url}
              className="hover:border-secondary-foreground/80 transition-colors group"
            >
              <a href={l.url} target="_blank">
                <CardHeader>
                  <CardDescription className="group-hover:text-secondary-foreground/80 transition-colors">
                    {l.title}
                  </CardDescription>
                </CardHeader>
              </a>
            </Card>
          );
        })}
      </div>
    </div>
  );
};