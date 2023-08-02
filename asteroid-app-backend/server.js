const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 8000;

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  const asteroids = `welcome
    get /api/asteroids
      start_date
      end_date
  `;
  res.send(asteroids);
});


app.get('/api/asteroids', async (req, res) => {
  try {
    // Fetch data from NASA API
    const response = await axios.get('https://api.nasa.gov/neo/rest/v1/feed', {
      params: {
        start_date: req.query.start_date,
        end_date: req.query.end_date,
        api_key: 'DEMO_KEY'
      }
    });

    // Extract the relevant asteroid data from the API response
    const asteroids = response.data.near_earth_objects;

    res.json({ asteroids });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
