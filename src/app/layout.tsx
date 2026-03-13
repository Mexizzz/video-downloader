import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "FastSave | Free Video Downloader for YouTube, Instagram, TikTok",
  description: "Download high-quality MP4 videos and MP3 audio from YouTube, Instagram, TikTok, and Facebook for free. Fast, secure, and no installation required.",
  keywords: "video downloader, youtube downloader, instagram downloader, tiktok video download, facebook video downloader, youtube to mp3, free download",
  openGraph: {
    title: "FastSave | Ultimate Free Video Downloader",
    description: "Download high-quality videos from YouTube, Instagram, TikTok & more.",
    type: "website",
    siteName: "FastSave",
  },
  twitter: {
    card: "summary_large_image",
    title: "FastSave | Ultimate Free Video Downloader",
    description: "Download high-quality videos from YouTube, Instagram, TikTok & more.",
  },
  metadataBase: new URL("https://fastsave.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col relative overflow-x-hidden bg-zinc-950`}>
        {/* Background ambient blobs */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600 rounded-full blur-[120px] animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-pink-600 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-indigo-600 rounded-full blur-[120px] animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
