import Link from "next/link";
import { Youtube, Instagram, Facebook, Music, Video } from "lucide-react";

export default function PlatformCards() {
    const platforms = [
        {
            name: "YouTube",
            desc: "Download MP4 up to 4K",
            icon: <Youtube size={32} className="mb-4 text-red-500" />,
            href: "/youtube",
            gradient: "from-red-500/20 to-zinc-900",
        },
        {
            name: "Instagram",
            desc: "Reels, Stories, TV",
            icon: <Instagram size={32} className="mb-4 text-pink-500" />,
            href: "/instagram",
            gradient: "from-pink-500/20 to-zinc-900",
        },
        {
            name: "TikTok",
            desc: "Without Watermark",
            icon: <Video size={32} className="mb-4 text-cyan-400" />,
            href: "/tiktok",
            gradient: "from-cyan-400/20 to-zinc-900",
        },
        {
            name: "Facebook",
            desc: "HD Videos & Reels",
            icon: <Facebook size={32} className="mb-4 text-blue-500" />,
            href: "/facebook",
            gradient: "from-blue-500/20 to-zinc-900",
        },
        {
            name: "YT to MP3",
            desc: "High Quality 320kbps",
            icon: <Music size={32} className="mb-4 text-purple-500" />,
            href: "/youtube-to-mp3",
            gradient: "from-purple-500/20 to-zinc-900",
        },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {platforms.map((platform) => (
                <Link
                    key={platform.name}
                    href={platform.href}
                    className={`relative group overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-6 flex flex-col items-center text-center transition-all hover:border-white/20 hover:-translate-y-1 hover:shadow-xl bg-gradient-to-b ${platform.gradient}`}
                >
                    {platform.icon}
                    <h3 className="font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {platform.name}
                    </h3>
                    <p className="text-xs text-zinc-400">{platform.desc}</p>
                </Link>
            ))}
        </div>
    );
}
