import Link from "next/link";
import { DownloadCloud } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-zinc-950/50 mt-20 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="bg-gradient-premium p-1.5 rounded-lg text-white">
                                <DownloadCloud size={20} />
                            </div>
                            <span className="font-bold text-xl tracking-tight">
                                Fast<span className="text-primary text-gradient">Save</span>
                            </span>
                        </Link>
                        <p className="text-zinc-400 text-sm max-w-sm mb-6 leading-relaxed">
                            The ultimate free video downloader. Download high-quality MP4 and MP3 from YouTube, Instagram, TikTok, and Facebook instantly with no software required.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-white">Supported Platforms</h3>
                        <ul className="space-y-3">
                            <li><Link href="/youtube" className="text-zinc-400 hover:text-white text-sm transition-colors">YouTube Video Downloader</Link></li>
                            <li><Link href="/instagram" className="text-zinc-400 hover:text-white text-sm transition-colors">Instagram Downloader</Link></li>
                            <li><Link href="/tiktok" className="text-zinc-400 hover:text-white text-sm transition-colors">TikTok Video Downloader</Link></li>
                            <li><Link href="/facebook" className="text-zinc-400 hover:text-white text-sm transition-colors">Facebook Video Downloader</Link></li>
                            <li><Link href="/youtube-to-mp3" className="text-zinc-400 hover:text-white text-sm transition-colors">YouTube to MP3 Converter</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-white">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link href="/terms" className="text-zinc-400 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="text-zinc-400 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/copyright" className="text-zinc-400 hover:text-white text-sm transition-colors">Copyright / DMCA</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-500 text-sm">
                        © {new Date().getFullYear()} FastSave. All rights reserved. Do not download copyrighted materials.
                    </p>
                </div>
            </div>
        </footer>
    );
}
