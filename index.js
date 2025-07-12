const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/chatgpt', (req, res) => {
  const html = `
    <html>
      <head><title>Proxy Test</title></head>
      <body><h1>This is a test HTML from proxy server</h1></body>
    </html>
  `;
  res.set('Content-Type', 'text/html');
  res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
