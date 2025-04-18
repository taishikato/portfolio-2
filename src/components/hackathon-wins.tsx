import { Card, CardDescription, CardHeader } from "@/components/ui/card";

interface HackathonWin {
  title: string;
  position: string;
  date: string;
  link: string;
}

const hackathonWins: HackathonWin[] = [
  {
    title: "Supabase Hackathon for Launch Week 14",
    position: "Winner",
    date: "Apr 2025",
    link: "https://x.com/supabase/status/1909552555333398630",
  },
  {
    title: "Supabase Hackathon for Launch Week 6",
    position: "Runner Up - Best Storage Project",
    date: "Jan 2023",
    link: "https://supabase.com/blog/launch-week-6-hackathon-winners#runner-up-2",
  },
  {
    title: "Supabase Hackathon for Launch Week 5",
    position: "Winner - Most Visually Pleasing",
    date: "Aug 2022",
    link: "https://supabase.com/blog/launch-week-5-hackathon-winners#winner-1",
  },
  // Add more hackathon wins here
];

export function HackathonWins() {
  return (
    <section className="space-y-6">
      <h2 className="text-secondary-foreground w-full border-b pb-3 mb-7 font-semibold">
        Hackathon Wins
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {hackathonWins.map((win) => (
          <Card
            key={win.link}
            className="hover:border-secondary-foreground/80 transition-colors group"
          >
            <a href={win.link} target="_blank" rel="noopener noreferrer">
              <CardHeader>
                <CardDescription className="group-hover:text-secondary-foreground/80 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-secondary-foreground">
                        {win.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {win.position}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {win.date}
                    </span>
                  </div>
                </CardDescription>
              </CardHeader>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
