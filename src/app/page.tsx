import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-secondary-foreground/70">
        I'm <span className="text-primary">Taishi</span>, a designer, developer,
        and serial maker. As a 🦄 I've built and shipped 12+ products (with over
        160K users), been 2 times a Product Hunt Maker of The Year finalist, and
        much more ✌
      </h1>
    </main>
  );
}
