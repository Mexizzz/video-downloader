import { Metadata } from "next";
import DownloaderForm from "@/components/ui/DownloaderForm";
import PlatformCards from "@/components/ui/PlatformCards";
import { Music } from "lucide-react";

export const metadata: Metadata = {
    title: "YouTube to MP3 Converter | Fast & Free Online Converter",
    description: "Convert YouTube videos to MP3 audio online for free. Highest quality 320kbps MP3 extraction with no software installation required.",
    keywords: "youtube to mp3, yt mp3, convert youtube to mp3, youtube audio downloader, download mp3 youtube",
};

export default function YouTubeToMP3Page() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <section className="text-center max-w-4xl mx-auto mb-16">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-purple-500/10 text-purple-500 mb-6 border border-purple-500/20">
                    <Music size={48} />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                    YouTube to <span className="text-gradient">MP3 Converter</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
                    We convert your YouTube URLs to high-quality 320kbps MP3 audio files in seconds. Download music, podcasts, and audiobooks for offline listening.
                </p>

                <DownloaderForm defaultPlatform="YouTube Video" />
            </section>

            <section className="py-12 border-t border-white/5 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
                <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform border-purple-500/10">
                    <h3 className="text-xl font-bold mb-3 text-white">Lossless Quality</h3>
                    <p className="text-zinc-400 leading-relaxed">Most converters compress the audio to 128kbps to save bandwidth. We extract the original high-quality audio stream directly, giving you up to 320kbps crystal clear MP3s.</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform border-purple-500/10">
                    <h3 className="text-xl font-bold mb-3 text-white">Music & Podcasts</h3>
                    <p className="text-zinc-400 leading-relaxed">Perfect for grabbing that new unreleased track, long 2-hour podcast episodes, or ambient study sounds. No limitations on video length.</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform border-purple-500/10">
                    <h3 className="text-xl font-bold mb-3 text-white">Universal Support</h3>
                    <p className="text-zinc-400 leading-relaxed">The MP3 files generated are compatible with all devices (iPhone, iPad, Mac, Android, and Windows) and any standard music player.</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform border-purple-500/10">
                    <h3 className="text-xl font-bold mb-3 text-white">Safe & Secure</h3>
                    <p className="text-zinc-400 leading-relaxed">No required registrations, zero ads, no hidden malwares, and fully secure conversions. We never track your downloads.</p>
                </div>
            </section>

            <section className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-6">Explore Other Tools</h2>
                <PlatformCards />
            </section>
        </div>
    );
}
