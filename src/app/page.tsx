import DownloaderForm from "@/components/ui/DownloaderForm";
import PlatformCards from "@/components/ui/PlatformCards";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          The Ultimate <span className="text-gradient">Video</span> Downloader
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
          Download high-quality MP4 and MP3 from YouTube, Instagram, TikTok, and Facebook instantly. Free, secure, and no software required.
        </p>

        <DownloaderForm defaultPlatform="Video URL" />
      </section>

      {/* Supported Platforms */}
      <section className="mb-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Supported Platforms</h2>
          <p className="text-zinc-400">Choose a dedicated tool for better options</p>
        </div>
        <PlatformCards />
      </section>

      {/* Features Section */}
      <section className="py-16 border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
            <p className="text-zinc-400">Our powerful scraping servers fetch and process videos in milliseconds. No waiting in queues.</p>
          </div>
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-full bg-pink-500/20 flex items-center justify-center mb-6 text-pink-500">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Highest Quality</h3>
            <p className="text-zinc-400">Download native 1080p, 4K MP4 videos, or extract crystal clear 320kbps MP3 audio easily.</p>
          </div>
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-500">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">100% Secure</h3>
            <p className="text-zinc-400">No software to install, no annoying ads, and entirely private. We do not store your downloads.</p>
          </div>
        </div>
      </section>

      {/* SEO Text content at bottom for ranking */}
      <section className="mt-16 prose prose-invert max-w-none px-4">
        <h2>Free Universal Video Downloader Online</h2>
        <p>
          FastSave is the best free online video downloader that allows you to save videos and audio from all major social media platforms. Whether you want to download a YouTube tutorial, a funny Instagram Reel, a viral TikTok without a watermark, or a Facebook video, our web-based tool handles it all in premium quality.
        </p>
        <p>
          Simply paste the link into the box above and hit download. It&apos;s completely free, requires no signup, and works on PC, Mac, Android, and iOS devices.
        </p>
      </section>
    </div>
  );
}
