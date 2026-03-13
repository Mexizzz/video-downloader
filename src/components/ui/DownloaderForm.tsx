"use client";

import { useState } from "react";
import { DownloadCloud, Loader2, Link as LinkIcon, AlertCircle, Video, Music, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";

interface FormatType {
    url: string;
    format: string;
    quality: string;
    size: string;
}

interface ResultType {
    title: string;
    thumbnail: string;
    duration: string;
    formats: FormatType[];
}

export default function DownloaderForm({ defaultPlatform = "Any URL" }: { defaultPlatform?: string }) {
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<ResultType | null>(null);

    const handleDownload = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url.trim()) return;

        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await axios.post("/api/download", { url });
            setResult(response.data.data);
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.error || err.message || "Failed to fetch video. Please check the URL.");
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Failed to fetch video. Please check the URL.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    // Build a proxy URL that passes the generic video URL to our new Railway proxy
    // This circumvents Vercel IP blocks on YouTube/TikTok CDNs
    const getProxyUrl = (format: FormatType, title: string) => {
        const filename = `${title.replace(/[^a-zA-Z0-9 ]/g, "").substring(0, 50)}_${format.quality}.${format.format}`;
        return `https://video-downloader-production-85f5.up.railway.app/download?url=${encodeURIComponent(url)}&quality=${encodeURIComponent(format.quality)}&format=${encodeURIComponent(format.format)}&filename=${encodeURIComponent(filename)}`;
    };

    return (
        <div className="w-full max-w-3xl mx-auto mt-12 mb-8">
            <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all">
                {/* Glow effect behind the card */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/20 blur-[80px] -z-10 rounded-full" />

                {/* Input Form */}
                <form onSubmit={handleDownload} className="relative z-10 w-full mb-2">
                    <label htmlFor="url-input" className="block text-sm font-medium text-zinc-300 mb-3 text-left">
                        Paste {defaultPlatform} link here
                    </label>
                    <div className="relative flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <LinkIcon className="h-5 w-5 text-zinc-500" />
                            </div>
                            <input
                                id="url-input"
                                type="url"
                                required
                                placeholder="https://..."
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                className="block w-full pl-11 pr-4 py-4 md:py-5 bg-zinc-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-zinc-600 outline-none text-white text-base md:text-lg"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading || !url}
                            className={cn(
                                "flex items-center justify-center gap-2 px-8 py-4 md:py-5 rounded-xl font-bold text-white transition-all shadow-lg text-base md:text-lg whitespace-nowrap",
                                isLoading || !url
                                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-white/5"
                                    : "bg-gradient-premium hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                            )}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} /> Fetching
                                </>
                            ) : (
                                <>
                                    <DownloadCloud size={20} /> Start
                                </>
                            )}
                        </button>
                    </div>
                </form>

                {/* Error Alert */}
                {error && (
                    <div className="mt-4 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive-foreground flex items-center gap-3 animate-in slide-in-from-top-2">
                        <AlertCircle size={20} className="text-destructive flex-shrink-0" />
                        <p className="text-sm font-medium">{error}</p>
                    </div>
                )}

                {/* Success Results Card */}
                {result && (
                    <div className="mt-8 pt-6 border-t border-white/10 animate-in fade-in zoom-in duration-300">
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Thumbnail */}
                            <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-zinc-900 rounded-xl overflow-hidden relative border border-white/5">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={result.thumbnail} alt={result.title} className="w-full h-full object-cover" />
                                <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur px-2 py-1 rounded text-xs font-mono text-white">
                                    {result.duration}
                                </div>
                            </div>

                            {/* Info & Formats */}
                            <div className="w-full md:w-2/3 flex flex-col text-left">
                                <h3 className="font-bold text-lg text-white mb-2 line-clamp-2">{result.title}</h3>
                                <div className="flex items-center gap-2 text-sm text-green-400 mb-6 bg-green-400/10 w-fit px-3 py-1.5 rounded-full border border-green-400/20">
                                    <CheckCircle2 size={16} /> Ready to download
                                </div>

                                <div className="space-y-3 mt-auto">
                                    {result.formats.map((format: FormatType, idx: number) => (
                                        <a
                                            key={idx}
                                            href={getProxyUrl(format, result.title)}
                                            className="group flex flex-wrap items-center justify-between gap-4 p-3 rounded-lg bg-zinc-900 border border-white/5 hover:border-primary/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                {format.format === "mp4" ? (
                                                    <Video size={18} className="text-zinc-400 group-hover:text-primary transition-colors" />
                                                ) : (
                                                    <Music size={18} className="text-zinc-400 group-hover:text-primary transition-colors" />
                                                )}
                                                <span className="font-medium text-white px-2 py-1 bg-white/5 rounded text-sm uppercase">
                                                    {format.format}
                                                </span>
                                                <span className="font-bold text-primary">{format.quality}</span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="text-sm text-zinc-500">{format.size}</span>
                                                <span className="px-4 py-1.5 rounded-md bg-white/5 text-sm font-medium text-white group-hover:bg-primary group-hover:text-white transition-colors">
                                                    Download
                                                </span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-6 text-center">
                    <p className="text-xs text-zinc-500">
                        By downloading, you agree to our Terms of Service. Do not download copyrighted materials.
                    </p>
                </div>
            </div>
        </div>
    );
}
