import { MyWork } from "@/components/my-work";
import ProfileImage from "../assets/profile.webp";
import { WorkExperience } from "@/components/work-experience";
import { OssContributions } from "@/components/oss-contributions";

export default function Home() {
  return (
    <div className="space-y-14">
      <div>
        <img
          src={ProfileImage.src}
          className="w-14 rounded-3xl"
          alt="profile image"
          loading="eager"
        />
        <h1 className="w-[90%] md:w-2/5 mt-3 mb-6">
          <span className="mb-5 block">
            I&apos;m <span className="text-secondary-foreground">Taishi</span>,
            a fullstack developer and solofounder based in Japan and Canada.
          </span>
          <p>
            I&apos;ve built and shipped AI/non-AI products with over 18K users.
            One of them was ranked as the{" "}
            <a
              href="https://www.producthunt.com/products/autorepurpose#autorepurpose"
              target="_blank"
              className="text-secondary-foreground underline"
            >
              #1 Product of the day on Product Hunt
            </a>
            .
          </p>
        </h1>

        <a
          href="mailto:taishi.k0903@gmail.com"
          className="text-violet-400 hover:text-violet-600 text-base font-semibold transition-colors"
        >
          Hire me
        </a>
      </div>

      <MyWork />

      <WorkExperience />

      <OssContributions />
    </div>
  );
}
