import { Metadata } from "next";
import DownloaderForm from "@/components/ui/DownloaderForm";
import PlatformCards from "@/components/ui/PlatformCards";
import { Video } from "lucide-react";

export const metadata: Metadata = {
    title: "TikTok Video Downloader Without Watermark | FastSave",
    description: "Download TikTok videos without watermark in HD MP4 for free. No app required, fast online TT video saver tool.",
    keywords: "tiktok downloader, download tiktok without watermark, tiktok video download, tt save, save tiktok video",
};

export default function TikTokPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <section className="text-center max-w-4xl mx-auto mb-16">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-cyan-400/10 text-cyan-400 mb-6 border border-cyan-400/20">
                    <Video size={48} />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                    TikTok <span className="text-gradient">Downloader</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
                    Download TikTok videos in HD <strong className="text-white relative">without watermark<div className="absolute -bottom-1 left-0 w-full h-1 bg-cyan-400/50 blur-sm rounded-full"></div></strong>. The ultimate free TikTok saver.
                </p>

                <DownloaderForm defaultPlatform="TikTok" />
            </section>

            <section className="py-12 border-t border-white/5 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">The Best TikTok Saver Online</h2>
                <p className="text-zinc-400 mb-12 max-w-2xl mx-auto">
                    Tired of downloading TikToks only to have the bouncing logo ruin the video? FastSave automatically strips the watermark and provides you with the raw, clean MP4 file.
                </p>

                <div className="grid sm:grid-cols-3 gap-6 text-left">
                    <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform">
                        <h3 className="font-bold text-white mb-2">No Watermark</h3>
                        <p className="text-sm text-zinc-400">Save clean videos perfect for reposting or editing for your own compilations.</p>
                    </div>
                    <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform">
                        <h3 className="font-bold text-white mb-2">MP3 Extraction</h3>
                        <p className="text-sm text-zinc-400">Found a trending sound? Simply select MP3 to download just the audio track.</p>
                    </div>
                    <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform">
                        <h3 className="font-bold text-white mb-2">HD Quality</h3>
                        <p className="text-sm text-zinc-400">We fetch the highest resolution available directly from TikTok&apos;s CDN servers.</p>
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
