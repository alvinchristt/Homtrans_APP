import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [location, setLocation] = useState('');
  const [assignedLocation, setAssignedLocation] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setCharacter(response.data);
      });
  }, [id]);

  const handleAssign = () => {
    if (location && !assignedLocation.includes(location)) {
      setAssignedLocation([...assignedLocation, location]);
    }
  };

  return character ? (
    <div>
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      {/* Add more character details here */}
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
      />
      <button onClick={handleAssign}>Assign to Location</button>
      <ul>
        {assignedLocation.map((loc, index) => (
          <li key={index}>{loc}</li>
        ))}
      </ul>
    </div>
  ) : <p>Loading...</p>;
};

export default DetailCharacter;
