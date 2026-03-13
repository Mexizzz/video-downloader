const fs = require('fs');
const data = JSON.parse(fs.readFileSync('full_res.json', 'utf8'));

console.log("Title:", data.title);
console.log("Thumbnail:", data.thumbnail);
console.log("Picture:", data.picture);
console.log("Duration:", data.duration);

if (data.medias && Array.isArray(data.medias)) {
    console.log(`Found ${data.medias.length} medias. First 2 medias:`, JSON.stringify(data.medias.slice(0, 2), null, 2));
} else {
    console.log("Medias object:", Object.keys(data.medias || {}));
}
