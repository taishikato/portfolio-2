import { MyWork } from "@/components/my-work";
import ProfileImage from "../assets/profile.webp";

export default function Home() {
  return (
    <div className="space-y-10">
      <div>
        <img
          src={ProfileImage.src}
          className="w-14 rounded-3xl"
          alt="profile image"
        />
        <h1 className="w-[90%] md:w-2/5 mt-3">
          <span className="mb-5 block">
            I'm <span className="text-secondary-foreground">Taishi</span>, a
            fullstack developer and solofounder based in Japan and Canada.
          </span>
          <p>
            I've built and shipped AI/non-AI products (with over 18K users).
          </p>
        </h1>
      </div>

      <MyWork />
    </div>
  );
}
