import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zentravo Labs | Premium Software Engineering & AI Solutions",
  description: "Zentravo Labs is a premium software engineering and AI solutions studio. We build production-grade web systems, custom mobile apps, cloud architectures, and intelligence networks.",
  keywords: [
    "Software Engineering",
    "AI integration",
    "Next.js Developer",
    "Cloud Architecture",
    "DevOps Engineering",
    "UI/UX Design Studio",
    "Custom Web Applications",
    "React Native Mobile Development"
  ],
  authors: [{ name: "Zentravo Labs Architect Squad" }],
  openGraph: {
    title: "Zentravo Labs | Premium Software Engineering",
    description: "Building high-performance digital products, custom web apps, cloud infrastructure, and intelligent AI models.",
    url: "https://zentravolabs.com",
    siteName: "Zentravo Labs",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-slate-950 text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
