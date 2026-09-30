import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lucasbragancadev.vercel.app"),
  title: "Lucas Bragança Gonçalves | Full Stack Developer",
  description:
    "Full stack developer (TypeScript, React, Next.js, Node.js/NestJS) building production products and LLM features. Projects: FireSafe, LLM features at Vend, English Lyrics.",
  openGraph: {
    title: "Lucas Bragança Gonçalves | Full Stack Developer",
    description: "TypeScript, React, Next.js, Node.js/NestJS and applied AI. Open to remote roles.",
    type: "website",
    url: "https://lucasbragancadev.vercel.app",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
