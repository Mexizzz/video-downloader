// Test whether passing our own X-Forwarded-For header to RapidAPI
// changes the IP embedded in the CDN download URL
const axios = require('axios');

async function testServerSideUrls() {
    const key = 'ec68d1b7c8msh049680bcefd54e5p152371jsnd6c2ddafaa5d';
    const testUrl = 'https://www.youtube.com/watch?v=gsTHF00RFgA';
    const apiHost = 'social-download-all-in-one.p.rapidapi.com';

    // First, get a fresh set of download URLs from the RapidAPI
    const res = await axios.request({
        method: 'POST',
        url: `https://${apiHost}/v1/social/autolink`,
        headers: {
            'x-rapidapi-key': key,
            'x-rapidapi-host': apiHost,
            'Content-Type': 'application/json'
        },
        data: { url: testUrl }
    });

    const firstMedia = res.data.medias[0];
    const url = firstMedia.url;

    // Extract the IP embedded in the CDN URL
    const ipMatch = url.match(/ip=([^&]+)/);
    console.log("IP locked in CDN URL:", ipMatch ? ipMatch[1] : "Not found");

    // Now try to fetch that URL directly from Node (which has a specific IP)
    try {
        const fetchRes = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            }
        });
        console.log("Fetch Status:", fetchRes.status);
        if (fetchRes.ok) {
            console.log("Content-Length:", fetchRes.headers.get('content-length'));
            console.log("Content-Type:", fetchRes.headers.get('content-type'));
        }
    } catch (e) {
        console.error("Fetch error:", e.message);
    }
}

testServerSideUrls();
