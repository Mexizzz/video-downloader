"use client";

import Link from "next/link";
import { DownloadCloud, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: "YouTube", href: "/youtube" },
        { name: "Instagram", href: "/instagram" },
        { name: "TikTok", href: "/tiktok" },
        { name: "Facebook", href: "/facebook" },
        { name: "YT to MP3", href: "/youtube-to-mp3" },
    ];

    return (
        <header className="sticky top-0 w-full z-50 glass border-b border-white/5">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-gradient-premium p-1.5 rounded-lg text-white">
                        <DownloadCloud size={20} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">
                        Fast<span className="text-primary text-gradient">Save</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-white",
                                pathname === link.href ? "text-white" : "text-zinc-400"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden glass absolute top-16 left-0 w-full border-b border-white/5 py-4 px-4 flex flex-col gap-4 shadow-xl">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "p-3 rounded-lg text-sm font-medium transition-colors",
                                pathname === link.href
                                    ? "bg-white/10 text-white"
                                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
