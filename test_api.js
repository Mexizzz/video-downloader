const axios = require('axios');
const fs = require('fs');

async function testApis() {
    const key = 'ec68d1b7c8msh049680bcefd54e5p152371jsnd6c2ddafaa5d';
    const testUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    let log = '';

    const endpoints = [
        {
            url: 'https://social-download-all-in-one.p.rapidapi.com/v1/social/autolink',
            host: 'social-download-all-in-one.p.rapidapi.com',
            method: 'POST',
            data: { url: testUrl }
        },
        {
            url: 'https://auto-download-all-in-one.p.rapidapi.com/v1/social/autolink',
            host: 'auto-download-all-in-one.p.rapidapi.com',
            method: 'POST',
            data: { url: testUrl }
        },
        {
            url: 'https://social-media-video-downloader.p.rapidapi.com/smvd/get/all',
            host: 'social-media-video-downloader.p.rapidapi.com',
            method: 'GET',
            params: { url: testUrl }
        }
    ];

    for (let ep of endpoints) {
        try {
            const options = {
                method: ep.method,
                url: ep.url,
                headers: {
                    'x-rapidapi-key': key,
                    'x-rapidapi-host': ep.host,
                    'Content-Type': 'application/json'
                },
                data: ep.data,
                params: ep.params
            };
            const res = await axios.request(options);
            log += `[SUCCESS] ${ep.host} worked! ${JSON.stringify(Object.keys(res.data))}\n`;
        } catch (e) {
            log += `[FAIL] ${ep.host}: ${e.response?.status} - ${e.response?.data?.message || JSON.stringify(e.response?.data) || e.message}\n`;
        }
    }
    fs.writeFileSync('api_log.txt', log);
}

testApis();
