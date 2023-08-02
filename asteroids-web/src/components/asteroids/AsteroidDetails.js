import React, { useState } from 'react';

const AsteroidDetails = ({ asteroid }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  const {
    name,
    nasa_jpl_url,
    absolute_magnitude_h,
    estimated_diameter,
    is_potentially_hazardous_asteroid,
    close_approach_data,
  } = asteroid;

  return (
    <div>
      <h3 onClick={toggleDetails} style={{ cursor: 'pointer' }}>
        {name}
      </h3>
      {showDetails && (
        <div>
          <p>
            <strong>NASA JPL URL:</strong>{' '}
            <a href={nasa_jpl_url} target="_blank" rel="noopener noreferrer">
              {nasa_jpl_url}
            </a>
          </p>
          <p>
            <strong>Absolute Magnitude H:</strong> {absolute_magnitude_h}
          </p>
          <p>
            <strong>Estimated Diameter:</strong> {estimated_diameter.kilometers.estimated_diameter_min} -{' '}
            {estimated_diameter.kilometers.estimated_diameter_max} km
          </p>
          <p>
            <strong>Is Potentially Hazardous Asteroid:</strong>{' '}
            {is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Close Approach Date:</strong>{' '}
            {close_approach_data && close_approach_data[0]?.close_approach_date || 'N/A'}
          </p>
        </div>
      )}
    </div>
  );
};

export default AsteroidDetails;
