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
  title: "John Doe | UI/UX Designer & Developer",
  description:
    "Portfolio of John Doe - A UI/UX Designer and Developer crafting beautiful, user-centered digital experiences.",
  keywords: ["UI/UX Designer", "Developer", "Portfolio", "Web Design", "React", "Next.js"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe | UI/UX Designer & Developer",
    description:
      "Portfolio of John Doe - A UI/UX Designer and Developer crafting beautiful, user-centered digital experiences.",
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
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
