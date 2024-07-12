import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharactersList from './pages/CharactersList';
import DetailCharacter from './pages/DetailCharacter';
import CharacterByLocation from './pages/CharacterByLocation';

const App = () => {
  const [locations, setLocations] = useState([]);

  const addLocation = (location) => {
    setLocations([...locations, location]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" exact component={CharactersList} />
        <Route path="/character/:id" render={(props) => (
          <DetailCharacter {...props} addLocation={addLocation} />
        )} />
        <Route path="/locations" render={() => (
          <CharacterByLocation locations={locations} />
        )} />
      </Routes>
    </Router>
  );
};

export default App;
