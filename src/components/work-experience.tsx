import SemiosIcon from "../assets/semios.webp";
import YahooIcon from "../assets/yahoo.webp";

const list = [
  {
    icon: SemiosIcon.src,
    company: "Semios",
    title: "Full Stack JS Developer (full-time)",
    years: "2020 - 2023",
  },
  {
    icon: YahooIcon.src,
    company: "Yahoo! Japan",
    title: "Software Developer (full-time)",
    years: "2015 - 2019",
  },
];

export const WorkExperience = () => {
  return (
    <div>
      <h2 className="text-secondary-foreground w-full border-b pb-3 mb-7 font-semibold">
        Work Experience
      </h2>
      <div className="space-y-4">
        {list.map((l) => {
          return (
            <div key={l.company} className="flex justify-between items-center">
              <div className="flex items-center">
                <img src={l.icon} className="rounded-full w-11 grayscale" />
                <div className="ml-4">
                  <div className="text-base">{l.company}</div>
                  <div className="text-sm font-normal">{l.title}</div>
                </div>
              </div>
              <div className="font-normal text-sm">{l.years}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
