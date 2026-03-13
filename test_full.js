const axios = require('axios');

async function testSubscription() {
    const key = 'ec68d1b7c8msh049680bcefd54e5p152371jsnd6c2ddafaa5d';
    const testUrl = 'https://www.youtube.com/watch?v=gsTHF00RFgA';
    const apiHost = 'social-download-all-in-one.p.rapidapi.com';

    try {
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
        require('fs').writeFileSync('full_res.json', JSON.stringify(res.data, null, 2), 'utf8');
        console.log("Saved full_res.json");
    } catch (e) {
        console.log("[FAIL]", e.message);
    }
}

testSubscription();
