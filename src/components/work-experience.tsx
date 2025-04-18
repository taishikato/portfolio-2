import WhisperitIcon from "../assets/whisperit.webp";
import SemiosIcon from "../assets/semios.webp";
import YahooIcon from "../assets/yahoo.webp";
import BtraxIcon from "../assets/btrax.webp";
import { FaBriefcase } from "react-icons/fa";

const list = [
  {
    icon: WhisperitIcon.src,
    company: "Whisperit",
    title: "Full Stack Developer (freelance)",
    years: "Aug 2024 - Jan 2025",
    place: "Switzerland (Remote)",
  },
  {
    icon: SemiosIcon.src,
    company: "Semios",
    title: "Full Stack JS Developer (full-time)",
    years: "2020 - 2023",
    place: "Vancouver",
  },
  {
    icon: YahooIcon.src,
    company: "Yahoo! Japan",
    title: "Software Developer (full-time)",
    years: "2015 - 2019",
    place: "Tokyo",
  },
  {
    icon: BtraxIcon.src,
    company: "btrax",
    title: "Software Developer (intern)",
    years: "Apr 2013 - Jun 2013",
    place: "San Francisco",
  },
];

export const WorkExperience = () => {
  return (
    <section>
      <h2 className="flex items-center gap-2 text-secondary-foreground w-full border-b pb-3 mb-7 font-semibold">
        <FaBriefcase className="text-amber-800" />
        Work Experience
      </h2>
      <div className="space-y-4">
        {list.map((l) => {
          return (
            <div key={l.company} className="flex justify-between items-center">
              <div className="flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  src={l.icon}
                  className="rounded-full w-11 grayscale"
                  width={44}
                  height={44}
                  alt={l.company}
                />
                <div className="ml-4">
                  <div className="text-base">{l.company}</div>
                  <div className="text-sm font-normal flex flex-col md:flex-row md:items-center gap-x-1">
                    <span>{l.title}</span>
                    <span className="hidden md:block">-</span>
                    <span className="text-xs md:text-sm">{l.place}</span>
                  </div>
                </div>
              </div>
              <div className="font-normal text-sm">{l.years}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
