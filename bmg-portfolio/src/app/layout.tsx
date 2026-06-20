import type { Metadata } from "next";
import { Geist, Archivo_Black, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/content";
import MotionProvider from "@/components/MotionProvider";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const pressStart2P = Press_Start_2P({
  variable: "--font-retro",
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
      className={`${geist.variable} ${archivoBlack.variable} ${pressStart2P.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-ink text-bone">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
