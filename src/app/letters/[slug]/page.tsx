import { notFound } from "next/navigation";
import Link from "next/link";
import { letters } from "@/lib/letters";

interface LetterPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return letters.map((letter) => ({
    slug: letter.slug,
  }));
}

export default async function LetterPage({ params }: LetterPageProps) {
  const { slug } = await params;
  const letter = letters.find((l) => l.slug === slug);

  if (!letter) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">{letter.title}</h1>

        <a
          href={letter.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white mb-8 px-4 py-2 rounded-md transition-colors hover:opacity-90 bg-[#ff5900]"
        >
          Read Full Letter →
        </a>

        <div className="prose dark:prose-invert">
          <p>
            Click the link above to read the full letter. This page serves as a
            dedicated landing page for <strong>{letter.title}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
