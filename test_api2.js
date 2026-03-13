const axios = require('axios');
const fs = require('fs');

async function testApis() {
    const key = 'ec68d1b7c8msh049680bcefd54e5p152371jsnd6c2ddafaa5d';
    const testUrl = 'https://www.instagram.com/p/C-0K_X1N-1m/';
    let log = '';

    const endpoints = [
        {
            url: 'https://social-media-video-downloader.p.rapidapi.com/smvd/get/all',
            host: 'social-media-video-downloader.p.rapidapi.com',
            method: 'GET',
            params: { url: testUrl, filename: 'video' }
        },
        {
            url: 'https://social-media-video-downloader.p.rapidapi.com/smvd/get/instagram',
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
                    'x-rapidapi-host': ep.host
                },
                params: ep.params
            };
            const res = await axios.request(options);
            log += `[SUCCESS] ${ep.host}${new URL(ep.url).pathname} worked!\n${JSON.stringify(res.data, null, 2)}\n`;
        } catch (e) {
            log += `[FAIL] ${ep.host}${new URL(ep.url).pathname}: ${e.response?.status} - ${e.response?.data?.message || JSON.stringify(e.response?.data) || e.message}\n`;
        }
    }
    fs.writeFileSync('api_log2.txt', log);
}

testApis();
