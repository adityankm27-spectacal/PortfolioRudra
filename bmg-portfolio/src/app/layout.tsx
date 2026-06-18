import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.intro,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.intro,
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
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${archivoBlack.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-ink text-bone">{children}</body>
    </html>
  );
}
