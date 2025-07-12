const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/chatgpt', async (req, res) => {
  try {
    const response = await axios.get('https://chatgpt.com', {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'text/html'
      }
    });
    res.set('Content-Type', 'text/html');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Failed to fetch ChatGPT page');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
