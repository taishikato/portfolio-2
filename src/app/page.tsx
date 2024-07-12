import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>
        I'm <span className="text-primary">Taishi</span>, a designer, developer,
        and serial maker. As a 🦄 I've built and shipped 12+ products (with over
        160K users), been 2 times a Product Hunt Maker of The Year finalist, and
        much more ✌
      </h1>

      <iframe
        src="https://airtable.com/embed/appIrznU5cXdfKBMF/shrFTwEVvE6uQpVE5?layout=card"
        width="100%"
        height="533"
        className="airtable-embed bg-transparent border"
      ></iframe>
    </>
  );
}
