const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = {
  "Infosys": "http://infosys.com",
  "Wipro": "http://wipro.com",
  "Cognizant": "http://cognizant.com",
  "TCS": "http://tcs.com",
  "Accenture": "http://accenture.com",
  "Capgemini": "http://capgemini.com",
  "ICICI": "http://icicibank.com",
  "KIA": "http://kia.com",
  "Deccan": "http://deccangroup.com"
};

const dir = path.join(__dirname, 'public', 'Recruiters');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

Object.entries(urls).forEach(([name, domain]) => {
  const url = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${domain}&size=128`;
  const dest = path.join(dir, `${name}.png`);
  const file = fs.createWriteStream(dest);

  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, response => {
    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${name}`);
      });
    } else {
        file.close();
        fs.unlink(dest, () => {});
        console.log(`Failed ${name}: Status ${response.statusCode}`);
    }
  }).on('error', err => {
    fs.unlink(dest, () => {});
    console.error(`Error downloading ${name}: ${err.message}`);
  });
});
