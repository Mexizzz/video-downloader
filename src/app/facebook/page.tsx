import { Metadata } from "next";
import DownloaderForm from "@/components/ui/DownloaderForm";
import PlatformCards from "@/components/ui/PlatformCards";
import { Facebook } from "lucide-react";

export const metadata: Metadata = {
    title: "Facebook Video Downloader | Save FB Videos in HD Free",
    description: "Download Facebook videos, Reels, and watch content online for free. Save high quality 1080p FB videos directly to MP4 format.",
    keywords: "facebook video downloader, fb video download, download facebook reels, save facebook video, facebook to mp4",
};

export default function FacebookPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <section className="text-center max-w-4xl mx-auto mb-16">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-blue-500/10 text-blue-500 mb-6 border border-blue-500/20">
                    <Facebook size={48} />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                    Facebook Video <span className="text-gradient">Downloader</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
                    Save public Facebook Videos, Facebook Reels, and Watch clips instantly in HD MP4 quality. Fast and free FB downloader.
                </p>

                <DownloaderForm defaultPlatform="Facebook Video/Reel" />
            </section>

            <section className="py-12 border-t border-white/5 max-w-4xl mx-auto">
                <div className="glass-card p-8 rounded-2xl border-blue-500/20">
                    <h2 className="text-2xl font-bold mb-4">How to Download Facebook Videos</h2>
                    <ol className="list-decimal pl-5 space-y-4 text-zinc-300">
                        <li><strong>Find the Video:</strong> Open the Facebook app or website and locate the video or Reel you want to save.</li>
                        <li><strong>Copy the Link:</strong> Click the &quot;Share&quot; button beneath the video, then tap &quot;Copy Link&quot;. If you are on a browser, copy the URL from the address bar.</li>
                        <li><strong>Paste and Download:</strong> Return to this page, paste the copied link into the input box above, and click Download. You can then choose between HD (High Definition) or SD (Standard Definition) formats.</li>
                    </ol>
                    <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-lg text-sm">
                        <strong>Note:</strong> We can only download videos that are set to &quot;Public&quot;. Private group videos or videos restricted to friends only cannot be accessed by our servers.
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
