const https = require('https');
const fs = require('fs');

function follow(url, name) {
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      follow(res.headers.location, name);
    } else {
      fs.appendFileSync('result.txt', name + ': ' + url + '\n');
    }
  });
}

follow('https://maps.app.goo.gl/LE8eqwpwWQ6J7Lpc7', 'Junior');
follow('https://maps.app.goo.gl/RXJNKHZHqDFEqiwh7', 'Degree');
