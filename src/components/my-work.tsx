import Link from "next/link";

export const MyWork = () => {
  return (
    <section>
      <div className="flex w-full">
        <Link
          href="/"
          className="text-secondary-foreground border-b pb-3 mb-7 font-semibold w-[100px]"
        >
          My Work
        </Link>
        <Link
          href="/stack"
          className="text-secondary-foreground/60 border-b pb-3 mb-7 font-semibold w-full"
        >
          Stack
        </Link>
      </div>
      <iframe
        src="https://airtable.com/embed/appIrznU5cXdfKBMF/shrFTwEVvE6uQpVE5?layout=card"
        width="100%"
        height="533"
        className="airtable-embed bg-transparent border rounded-lg"
      ></iframe>
    </section>
  );
};
