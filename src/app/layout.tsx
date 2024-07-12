import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { SocialIconList } from "@/components/social-icon-list";
import { Footer } from "@/components/footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taishi",
  description:
    "I'm Taishi, a fullstack developer and solofounder based in Japan and Canada. I've built and shipped AI/non-AI products (with over 18K users).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(manrope.className, "text-base font-medium")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-h-screen flex-col mt-5 max-w-[90%] md:max-w-5xl mx-auto text-secondary-foreground/60">
            <SocialIconList />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
