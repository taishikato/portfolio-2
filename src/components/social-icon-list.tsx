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
    <nav className="inline-flex items-center gap-x-6 w-[300px] mx-auto rounded-3xl justify-center mb-16 py-5 sticky top-5 bg-background/75 backdrop-blur">
      {list.map((l) => {
        return (
          <a key={l.link} href={l.link} target="_blank">
            <l.icon className="text-xl text-secondary-foreground/50 hover:text-secondary-foreground/80 transition-colors" />
          </a>
        );
      })}
    </nav>
  );
};
