import React, { useState } from 'react';

const CharacterByLocation = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleSelect = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div>
      <h1>Characters by Location</h1>
      <select onChange={handleSelect}>
        {locations.map((loc, index) => (
          <option key={index} value={loc}>{loc}</option>
        ))}
      </select>
      <ul>
        {/* Render characters based on selected location */}
      </ul>
    </div>
  );
};

export default CharacterByLocation;
