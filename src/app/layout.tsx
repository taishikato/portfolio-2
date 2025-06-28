import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { SocialIconList } from "@/components/social-icon-list";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { WorkExperience } from "@/components/work-experience";
import { OssContributions } from "@/components/oss-contributions";
import { FaLocationArrow } from "react-icons/fa";
import ProfileImage from "../assets/profile.webp";
import Script from "next/script";
import { HackathonWins } from "@/components/hackathon-wins";

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
    <html lang="en" suppressHydrationWarning>
      <body className={cn(manrope.className, "text-base font-medium")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Script
            async
            defer
            src="https://ai-citations-web.vercel.app/api/tracker"
          />
          <main className="flex min-h-screen flex-col mt-5 max-w-[90%] md:max-w-5xl mx-auto text-secondary-foreground/60">
            <SocialIconList />

            <article className="space-y-14">
              <section>
                <img
                  src={ProfileImage.src}
                  className="w-14 rounded-3xl"
                  alt="profile image"
                  loading="eager"
                />
                <h1 className="w-[90%] md:w-2/5 mt-3 mb-6">
                  <span className="mb-5 block">
                    I&apos;m{" "}
                    <span className="text-secondary-foreground">Taishi</span>, a
                    fullstack developer and solofounder based in Japan and
                    Canada.
                  </span>
                  <p>
                    Full-stack dev shipping AI infrastructure & tools to 18K+
                    users (Supabase hackathon winner). Two of them were ranked
                    as the{" "}
                    <a
                      href="https://www.producthunt.com/products/supavec#supavec"
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
                  className="text-violet-400 hover:text-violet-600 group text-base font-semibold transition-colors flex items-center"
                >
                  Hire me
                  <span className="transition-transform group-hover:translate-x-1 block ml-2">
                    <FaLocationArrow className="size-3" />
                  </span>
                </a>
              </section>

              {children}

              <WorkExperience />

              <HackathonWins />

              <OssContributions />
            </article>
            <Footer />
          </main>
        </ThemeProvider>
        <GoogleAnalytics gaId="UA-27648393-1" />
      </body>
    </html>
  );
}
