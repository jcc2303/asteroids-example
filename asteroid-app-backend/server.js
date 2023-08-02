const express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get('/asteroids', (req, res) => {
  const asteroids = [{ name: 'Asteroid 1' }, { name: 'Asteroid 2' }];
  res.json(asteroids);
});
