import {useEffect, useState} from 'react';
import AsteroidList from './AsteroidList';
import fetchData from './client';

function App() {
  const [data, setData] = useState({});
  const [asteroids, setAsteroids] = useState([]);


  useEffect(() => {
    const extractedAsteroids = extractAsteroids(data)
    console.log('extractedAsteroids', extractedAsteroids);
    setAsteroids(extractedAsteroids)
  }, [data]);

  useEffect(() => {
    fetchData()
    .then((data) => setData(data));
  // fetch('https://localhost:8000/api/asteroids')
  //     .then((response) => response.json())
  //     .then((data) => setAsteroids(data.near_earth_objects));
  }, []);

  return (
    <div className="App">
      <AsteroidList asteroids={asteroids} />
    </div>
  );
}

function extractAsteroids(data) {
  const asteroids = [];
  const nearEarthObjects = data.asteroids // .near_earth_objects;

  for (const date in nearEarthObjects) {
    if (Object.prototype.hasOwnProperty.call(nearEarthObjects, date)) {
      const asteroidData = nearEarthObjects[date];
      asteroidData.forEach((asteroid) => {
        const {
          name,
          nasa_jpl_url,
          absolute_magnitude_h,
          estimated_diameter,
          is_potentially_hazardous_asteroid,
        } = asteroid;

        const asteroidInfo = {
          name,
          nasa_jpl_url,
          absolute_magnitude_h,
          estimated_diameter: {
            kilometers: {
              estimated_diameter_min: estimated_diameter.kilometers.estimated_diameter_min,
              estimated_diameter_max: estimated_diameter.kilometers.estimated_diameter_max,
            },
          },
          is_potentially_hazardous_asteroid,
        };

        asteroids.push(asteroidInfo);
      });
    }
  }

  return asteroids;
}


export default App;
