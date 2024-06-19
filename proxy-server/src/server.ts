import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3001; // Możesz zmienić port, jeśli 3001 jest zajęty

app.use(cors())

app.get('/fetch-favicon', async (req, res) => {
  const { url } = req.query;
  if (!url || typeof url !== 'string') {
    return res.status(400).send('URL is required');
  }

  try {
    const faviconUrl = new URL('/favicon.ico', url).href;
    const response = await axios.get(faviconUrl, { responseType: 'arraybuffer' });
    res.set('Content-Type', 'image/x-icon');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching favicon:', error);
    res.status(500).send('Error fetching favicon');
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
