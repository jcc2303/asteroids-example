import React, { useState } from "react";
import "./AsteroidList.css"; // Import the CSS file
import AsteroidDetails from './AsteroidDetails';

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
      <button className="sort-button" onClick={handleSort}>
        Sort by Name ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
      {sortedAsteroids.map((asteroid, index) => (
        <div className="asteroid-container" key={index}>
          {/* Rest of the JSX remains the same */}
          <div>
            {asteroids.map((asteroid, index) => (
              <div className="asteroid-details" key={index}>
                <AsteroidDetails key={asteroid.id} asteroid={asteroid} />
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
