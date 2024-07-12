import {
  FaSquareXTwitter,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

const list = [
  {
    link: "https://x.com/taishik_",
    icon: FaSquareXTwitter,
  },
  {
    link: "https://github.com/taishikato",
    icon: FaGithub,
  },
  {
    link: "https://www.linkedin.com/in/takato0903/",
    icon: FaLinkedin,
  },
  {
    link: "https://www.youtube.com/@_taishi",
    icon: FaYoutube,
  },
  {
    link: "https://taishi.substack.com/",
    icon: SiSubstack,
  },
];

export const SocialIconList = () => {
  return (
    <div className="flex items-center gap-x-6 w-full justify-center mb-16">
      {list.map((l) => {
        return (
          <a key={l.link} href={l.link} target="_blank">
            <l.icon className="text-xl hover:text-secondary-foreground/80 transition-colors" />
          </a>
        );
      })}
    </div>
  );
};
