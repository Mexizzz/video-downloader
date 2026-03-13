const axios = require('axios');

async function testFreshProxy() {
    const key = 'ec68d1b7c8msh049680bcefd54e5p152371jsnd6c2ddafaa5d';
    const testUrl = 'https://www.youtube.com/watch?v=gsTHF00RFgA';
    const apiHost = 'social-download-all-in-one.p.rapidapi.com';

    try {
        console.log("1. Fetching RapidAPI for new links...");
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

        const media = res.data.medias[0];
        console.log("Got media URL:", media.url.substring(0, 100) + "...");

        console.log("2. Immediately hitting the URL from this script...");
        const proxyRes = await fetch(media.url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
            }
        });

        console.log("Status:", proxyRes.status);
        console.log("Headers:", proxyRes.headers);
        if (!proxyRes.ok) {
            console.log("Error text:", await proxyRes.text());
        } else {
            console.log("SUCCESS! Server-side fetch works on fresh URLs.");
        }

    } catch (e) {
        console.error(e);
    }
}

testFreshProxy();
