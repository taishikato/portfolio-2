import Link from "next/link";
import { MoveRight } from "lucide-react";
import imageAer from "../../assets/stack/aer.webp";
import imagemacbookAir from "../../assets/stack/mackbook-air.png";
import imageAirpodsPro2 from "../../assets/stack/airpods-pro2.webp";
import imageAppleWatch6 from "../../assets/stack/apple-watch-6.webp";

const stacks = [
  {
    title: "Travel Pack 3 Small X-Pac",
    image: imageAer,
    link: "https://aersf.com/collections/backpacks/products/travel-pack-3-small-x-pac",
  },
  {
    title: "MacBook Air (M1, 2020)",
    image: imagemacbookAir,
    link: "https://support.apple.com/en-us/111883",
  },
  {
    title: "AirPods Pro (2nd generation)",
    image: imageAirpodsPro2,
    link: "https://www.apple.com/airpods-pro/",
  },
  {
    title: "Apple Watch Series 6",
    image: imageAppleWatch6,
    link: "https://support.apple.com/en-us/111918",
  },
];

export default function StackPage() {
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
          className="text-secondary-foreground font-semibold pr-3 justify-start"
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

      <ul className="flex gap-5 flex-wrap">
        {stacks.map((stack) => {
          const { title, image, link } = stack;

          return (
            <li
              key={stack.title}
              className="w-1/2 max-w-1/2 flex-1 md:w-full md:max-w-[300px]"
            >
              <a href={link} target="_blank">
                <img
                  src={image.src}
                  alt={title}
                  width={image.width}
                  height={image.height}
                  className="rounded-xl mb-3 w-full"
                />
              </a>
              <div className="text-secondary-foreground mb-5">{title}</div>
              <a
                href={link}
                target="_blank"
                className="text-secondary-foreground text-sm flex items-center hover:underline"
              >
                {new URL(link).hostname}
                <MoveRight className="ml-2 size-4" />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
