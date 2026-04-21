import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { ReadingProgressBar } from "@/components/shared/ReadingProgressBar";
import { BackToTopButton } from "@/components/shared/BackToTopButton";
import { Navbar } from "@/components/layout/Navbar";
import GradientOrbs from "@/components/shared/GradientOrbs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Ahmed | Creative Technologist & Web Developer",
  description: "Portfolio of Ahmed, a Senior Web Developer specializing in luxury, high-performance web experiences.",
  keywords: ["Web Developer", "UX Designer", "Creative Technologist", "Next.js", "React", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <Providers>
          <div className="relative min-h-screen flex flex-col custom-cursor-wrapper">
            <CustomCursor />
            <ReadingProgressBar />
            <Navbar />
            <GradientOrbs />
            
            <main className="flex-grow">
              {children}
            </main>
            <BackToTopButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
