const axios = require('axios');
const fs = require('fs');

async function testCobalt() {
    const testUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    let log = '';

    try {
        const res = await axios.post('https://api.cobalt.tools/api/json', {
            url: testUrl
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        log += `[SUCCESS] Cobalt worked!\n${JSON.stringify(res.data, null, 2)}\n`;
    } catch (e) {
        log += `[FAIL] Cobalt: ${e.response?.status} - ${JSON.stringify(e.response?.data) || e.message}\n`;
    }
    fs.writeFileSync('api_log3.txt', log);
}

testCobalt();
