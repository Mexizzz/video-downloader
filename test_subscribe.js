const axios = require('axios');

async function testSubscription() {
    const key = 'ec68d1b7c8msh049680bcefd54e5p152371jsnd6c2ddafaa5d';
    const testUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    const apiHost = 'social-download-all-in-one.p.rapidapi.com';

    try {
        console.log("Testing API Subscription...");
        const options = {
            method: 'POST',
            url: `https://${apiHost}/v1/social/autolink`,
            headers: {
                'x-rapidapi-key': key,
                'x-rapidapi-host': apiHost,
                'Content-Type': 'application/json'
            },
            data: { url: testUrl }
        };
        const res = await axios.request(options);
        console.log("[SUCCESS] You are subscribed! The API returned:", Object.keys(res.data));
    } catch (e) {
        if (e.response && e.response.status === 403) {
            console.log("[FAIL] 403 Forbidden - You are still not subscribed to the API.");
            console.log("Message:", e.response.data.message);
        } else {
            console.log("[FAIL]", e.message);
        }
    }
}

testSubscription();
