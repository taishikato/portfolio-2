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
      <nav className="mb-8">
        <Link 
          href="/letters"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← Back to Letters
        </Link>
      </nav>
      
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">{letter.title}</h1>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This letter is published on my Substack newsletter.
          </p>
          <a 
            href={letter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Read on Substack →
          </a>
        </div>
        
        <div className="prose dark:prose-invert">
          <p>
            Click the link above to read the full letter on Substack. This page serves as a 
            dedicated landing page for <strong>{letter.title}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}