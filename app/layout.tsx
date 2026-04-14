import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/sections/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akshajbisht.me"),
  title: {
    default: "Akshaj Bisht | Full Stack Developer",
    template: "%s | Akshaj Bisht",
  },
  description:
    "Backend-leaning full stack developer building production-ready web apps with Next.js, TypeScript, PostgreSQL, and Bun.",
  keywords: [
    "Akshaj Bisht",
    "Full Stack Developer",
    "Backend Developer",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Bun",
    "Portfolio",
  ],
  authors: [{ name: "Akshaj Bisht", url: "https://akshajbisht.me" }],
  creator: "Akshaj Bisht",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/icons/favicon.ico" },
    ],
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/icons/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://akshajbisht.me",
    title: "Akshaj Bisht | Full Stack Developer",
    description:
      "Backend-leaning full stack developer building production-ready web apps.",
    siteName: "Akshaj Bisht Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Akshaj Bisht portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshaj Bisht | Full Stack Developer",
    description:
      "Backend-leaning full stack developer building production-ready web apps.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} min-h-screen bg-background text-foreground`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
