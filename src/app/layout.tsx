import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Austin Do | Software Engineer",
  description:
    "Portfolio of Austin Do - A Software Engineer working on backend and frontend development.",
  keywords: ["Software Engineer", "Portfolio", "Web Design", ".NET", "C#", "C++", "Qt", "PostgreSQL", "Docker", "AWS", "React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript", "Git"],
  authors: [{ name: "Austin Do" }],
  openGraph: {
    title: "Austin Do | Software Engineer",
    description:
      "Portfolio of Austin Do - A Software Engineer working on backend and frontend development.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
