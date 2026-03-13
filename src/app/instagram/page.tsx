import { Metadata } from "next";
import DownloaderForm from "@/components/ui/DownloaderForm";
import PlatformCards from "@/components/ui/PlatformCards";
import { Instagram } from "lucide-react";

export const metadata: Metadata = {
    title: "Instagram Downloader | Save Reels, Stories & Photos Free",
    description: "Download Instagram Reels, Stories, videos, and photos in HD. Free, fast, secure online Instagram downloader.",
    keywords: "instagram downloader, instagram video download, ig save, instagram reels downloader, download story instagram",
};

export default function InstagramPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <section className="text-center max-w-4xl mx-auto mb-16">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-pink-500/10 text-pink-500 mb-6 border border-pink-500/20">
                    <Instagram size={48} />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                    Instagram <span className="text-gradient">Downloader</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
                    Save Reels, IGTV, Post Videos, and Photo Carousels directly to your phone or computer in original HD quality.
                </p>

                <DownloaderForm defaultPlatform="Instagram Reel/Post" />
            </section>

            <section className="py-12 border-t border-white/5 max-w-4xl mx-auto prose prose-invert">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">Why use our Instagram Downloader?</h2>
                <p className="text-zinc-400 text-center mb-8">
                    Instagram doesn&apos;t allow users to download content directly. FastSave solves this by offering a lightning-fast web app to grab anything from IG.
                </p>
                <div className="grid md:grid-cols-2 gap-6 not-prose">
                    <div className="glass-card p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-colors">
                        <h3 className="font-bold text-lg mb-2 text-white">Reels Downloader</h3>
                        <p className="text-zinc-400 text-sm">Download viral Instagram Reels with audio in crisp MP4 format to share with friends outside the app.</p>
                    </div>
                    <div className="glass-card p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-colors">
                        <h3 className="font-bold text-lg mb-2 text-white">Story & Highlights</h3>
                        <p className="text-zinc-400 text-sm">Save expiring Stories or Highlights anonymously without the creator knowing you viewed them.</p>
                    </div>
                    <div className="glass-card p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-colors">
                        <h3 className="font-bold text-lg mb-2 text-white">Photo Carousels</h3>
                        <p className="text-zinc-400 text-sm">Download individual photos or entire multi-photo album posts in maximum resolution.</p>
                    </div>
                    <div className="glass-card p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/30 transition-colors">
                        <h3 className="font-bold text-lg mb-2 text-white">No Login Required</h3>
                        <p className="text-zinc-400 text-sm">We never ask for your Instagram password. Just paste the public link and download instantly.</p>
                    </div>
                </div>
            </section>

            <section className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-6">Explore Other Tools</h2>
                <PlatformCards />
            </section>
        </div>
    );
}
