// Proxy that accepts a direct CDN URL, fetches it server-side,
// and returns it with Content-Disposition: attachment to force download.
export const runtime = 'nodejs';
export const maxDuration = 300; // 5 min for large files

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const cdnUrl = searchParams.get('cdnUrl');
    const filename = searchParams.get('filename') || 'download.mp4';

    if (!cdnUrl) {
        return new Response('Missing cdnUrl parameter', { status: 400 });
    }

    try {
        // Forward range headers for resume support
        const fetchHeaders: Record<string, string> = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.9",
            "Accept-Encoding": "identity",
            "Referer": "https://www.youtube.com/",
            "Origin": "https://www.youtube.com",
        };

        const rangeHeader = request.headers.get('range');
        if (rangeHeader) {
            fetchHeaders["Range"] = rangeHeader;
        }

        const cdnResponse = await fetch(cdnUrl, { headers: fetchHeaders });

        if (!cdnResponse.ok && cdnResponse.status !== 206) {
            return new Response(`CDN error: ${cdnResponse.status} ${cdnResponse.statusText}`, { status: 502 });
        }

        // Build safe filename
        const safeFilename = filename.replace(/[^\w\s.\-()]/g, '_');

        const responseHeaders: Record<string, string> = {
            'Content-Disposition': `attachment; filename="${safeFilename}"`,
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Access-Control-Allow-Origin': '*',
        };

        // Forward important CDN headers
        const contentType = cdnResponse.headers.get('content-type');
        if (contentType) responseHeaders['Content-Type'] = contentType;
        else responseHeaders['Content-Type'] = 'application/octet-stream';

        const contentLength = cdnResponse.headers.get('content-length');
        if (contentLength) responseHeaders['Content-Length'] = contentLength;

        const contentRange = cdnResponse.headers.get('content-range');
        if (contentRange) responseHeaders['Content-Range'] = contentRange;

        const acceptRanges = cdnResponse.headers.get('accept-ranges');
        if (acceptRanges) responseHeaders['Accept-Ranges'] = acceptRanges;

        return new Response(cdnResponse.body, {
            status: cdnResponse.status,
            headers: responseHeaders,
        });

    } catch (error: unknown) {
        const msg = error instanceof Error ? error.message : 'Unknown error';
        console.error("Proxy error:", msg);
        return new Response(`Proxy error: ${msg}`, { status: 500 });
    }
}
