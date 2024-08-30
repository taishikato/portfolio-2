import Link from "next/link";
import imageAer from "../../assets/stack/aer.webp";
import { MoveRight } from "lucide-react";

const stacks = [
  {
    title: "Travel Pack 3 Small X-Pac",
    image: imageAer,
    link: "https://aersf.com/collections/backpacks/products/travel-pack-3-small-x-pac",
  },
];

export default function StackPage() {
  return (
    <section>
      <div className="flex w-full">
        <Link
          href="/"
          className="text-secondary-foreground/60 border-b pb-3 mb-7 font-semibold w-[100px]"
        >
          My Work
        </Link>
        <Link
          href="/stack"
          className="text-secondary-foreground border-b pb-3 mb-7 font-semibold w-full"
        >
          Stack
        </Link>
      </div>
      <ul className="flex gap-x-5">
        {stacks.map((stack) => {
          const { title, image, link } = stack;

          return (
            <li key={stack.title} className="w-full max-w-[300px]">
              <a href={link} target="_blank">
                <img
                  src={image.src}
                  alt={title}
                  width={image.width}
                  height={image.height}
                  className="rounded-xl mb-3"
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
