import { Metadata } from "next";
import DownloaderForm from "@/components/ui/DownloaderForm";
import PlatformCards from "@/components/ui/PlatformCards";
import { Youtube } from "lucide-react";

export const metadata: Metadata = {
    title: "YouTube Video Downloader | Download 1080p, 4K MP4 Free",
    description: "Free Universal YouTube Video downloader online. Save YT videos in HD 1080p, 4K MP4 formats directly to your PC, Mac, Android, or iPhone.",
    keywords: "youtube downloader, download youtube video, yt mp4 downloader, save youtube video free, youtube 1080p download",
};

export default function YouTubePage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <section className="text-center max-w-4xl mx-auto mb-16">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-red-500/10 text-red-500 mb-6">
                    <Youtube size={48} />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                    YouTube Video <span className="text-gradient">Downloader</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
                    Download YouTube videos in crisp 1080p, 2K, and 4K MP4 formats. Safe, fast, and 100% free with no limits.
                </p>

                <DownloaderForm defaultPlatform="YouTube Video" />
            </section>

            <section className="py-12 border-t border-white/5 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">How to Download YouTube Videos?</h2>
                <div className="space-y-6">
                    <div className="glass-card p-6 rounded-xl flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">1</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Copy the Video URL</h3>
                            <p className="text-zinc-400">Open YouTube, find the video you want to download, and copy its link from the address bar or the &quot;Share&quot; button.</p>
                        </div>
                    </div>
                    <div className="glass-card p-6 rounded-xl flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">2</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Paste and Fetch</h3>
                            <p className="text-zinc-400">Paste the copied link into the input box above and click the &quot;Download&quot; button. Our tool will process the link instantly.</p>
                        </div>
                    </div>
                    <div className="glass-card p-6 rounded-xl flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">3</div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Choose Quality & Save</h3>
                            <p className="text-zinc-400">Select your preferred video quality (e.g., MP4 1080p) and save the file directly to your device.</p>
                        </div>
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
