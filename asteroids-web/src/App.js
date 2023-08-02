import {useEffect, useState} from 'react';
import AsteroidList from './components/asteroids/AsteroidList';
import fetchData from './client';
import DateRangePicker from './components/dates/DateRangePicker';
import fakeData from './data/api.json'


function App() {
  const [data, setData] = useState({});
  const [asteroids, setAsteroids] = useState([]);
  const [error, setError] = useState(null);

  const  getAsteroids = async ({ start, end }) => {
    try {
      const result = await fetchData({ start, end })
      console.log('result');
      setData(result)
    } catch (err) {
      console.log('error', err)
      setData(fakeData); 
      setError('Error, using fake data')
    }
  }
  
  const handleDateChange = ({ start, end }) => {
    getAsteroids({ start, end })
  };

  useEffect(() => {
    const extractedAsteroids = extractAsteroids(data)
    setAsteroids(extractedAsteroids)
  }, [data]);

  useEffect(() => {
    getAsteroids({})
  }, []);

  return (
    <div>
      <div>
        <DateRangePicker onDateChange={handleDateChange} />
        {error && <p>{error}</p>}
        <div className="App">
          <AsteroidList asteroids={asteroids} />
        </div>
      </div>      
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
