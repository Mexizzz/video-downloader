import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { url } = body;

        if (!url) {
            return NextResponse.json(
                { error: "URL is required" },
                { status: 400 }
            );
        }

        // Determine platform roughly for UI presentation
        let platform = "unknown";
        if (url.includes("youtube.com") || url.includes("youtu.be")) platform = "youtube";
        else if (url.includes("instagram.com")) platform = "instagram";
        else if (url.includes("tiktok.com")) platform = "tiktok";
        else if (url.includes("facebook.com") || url.includes("fb.watch")) platform = "facebook";

        // Call RapidAPI
        const apiKey = "ec68d1b7c8msh049680bcefd54e5p152371jsnd6c2ddafaa5d"; // Provided by user
        const apiHost = "social-download-all-in-one.p.rapidapi.com";

        const options = {
            method: 'POST',
            url: `https://${apiHost}/v1/social/autolink`,
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': apiHost,
                'x-rapidapi-key': apiKey
            },
            data: { url: url }
        };

        const response = await axios.request(options);
        const result = response.data;

        if (!result || !result.title) {
            throw new Error("Invalid response from downloader API");
        }

        // Map API Response formats to our UI's expected FormatType
        const mappedFormats: Array<{ quality: string, format: string, size: string, url: string }> = [];

        // Most video download APIs return an array of 'medias' or 'links'
        if (Array.isArray(result.medias)) {
            result.medias.forEach((media: any) => {
                mappedFormats.push({
                    quality: media.quality || "Standard",
                    format: media.extension || "mp4",
                    size: media.size || "Unknown",
                    url: media.url
                });
            });
        } else {
            // Fallback mapping if standard formats aren't present
            mappedFormats.push({ quality: "HD", format: "mp4", size: "Unknown", url: result.url || result.video || "" });
        }

        // Filter out invalid formats
        const validFormats = mappedFormats.filter(f => f.url && f.url.startsWith("http"));

        // Format duration if it's a number (seconds)
        let formattedDuration = "00:00";
        if (typeof result.duration === 'number') {
            const minutes = Math.floor(result.duration / 60);
            const seconds = Math.floor(result.duration % 60);
            formattedDuration = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else if (typeof result.duration === 'string') {
            formattedDuration = result.duration;
        }

        return NextResponse.json({
            success: true,
            data: {
                platform,
                title: result.title || `Video from ${platform}`,
                thumbnail: result.thumbnail || result.picture || "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
                duration: formattedDuration,
                formats: validFormats.length > 0 ? validFormats : [
                    { quality: "Web", format: "link", size: "Unknown", url: url }
                ]
            }
        });

    } catch (error: unknown) {
        let errorMessage = "Internal server error processing the video.";

        if (axios.isAxiosError(error) && error.response) {
            if (error.response.status === 403) {
                errorMessage = "RAPIDAPI_UNSUBSCRIBED: You need to subscribe to 'Social Download All in One' on RapidAPI to use this key.";
            } else {
                errorMessage = error.response.data?.message || `API Error: ${error.response.status}`;
            }
            console.error("Download API Error:", error.response.status, error.response.data);
        } else if (error instanceof Error) {
            console.error("Download Runtime error:", error.message);
            errorMessage = error.message;
        }

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
