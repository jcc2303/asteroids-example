
import React, { useState } from "react";

function AsteroidList({ asteroids }) {
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedAsteroids = asteroids.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (sortOrder === "asc") {
      return nameA.localeCompare(nameB);
    } else {
      return nameB.localeCompare(nameA);
    }
  });

  return (
    <div>
      <button onClick={handleSort}>
        Sort by Name ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
      {sortedAsteroids.map((asteroid, index) => (
        <div key={index}>
          {/* Rest of the JSX remains the same */}
          <div>
            {asteroids.map((asteroid, index) => (
              <div key={index}>
                <h3>{asteroid.name}</h3>
                <p>
                  <strong>Estimated Diameter:</strong>{" "}
                  {
                    asteroid.estimated_diameter.kilometers
                      .estimated_diameter_min
                  }{" "}
                  -{" "}
                  {
                    asteroid.estimated_diameter.kilometers
                      .estimated_diameter_max
                  }{" "}
                  km
                </p>
                <p>
                  <strong>NASA JPL URL:</strong>{" "}
                  <a
                    href={asteroid.nasa_jpl_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {asteroid.nasa_jpl_url}
                  </a>
                </p>
                <p>
                  <strong>Absolute Magnitude (H):</strong>{" "}
                  {asteroid.absolute_magnitude_h}
                </p>
                <p>
                  <strong>Is Potentially Hazardous Asteroid:</strong>{" "}
                  {asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}
                </p>
              </div>
            ))}
          </div>

          {/* ... */}
        </div>
      ))}
    </div>
  );
}

// function AsteroidList({ asteroids }) {
//   return (
//   );
// }

export default AsteroidList;
