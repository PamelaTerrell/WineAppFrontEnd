// src/components/WineList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WineList() {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/wines')
      .then((response) => {
        setWines(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the wines!", error);
      });
  }, []);

  return (
    <div className="wine-list">
      {wines.map(wine => (
        <div key={wine._id} className="wine-item">
          <h3>{wine.name} ({wine.year})</h3>
          <p>Type: {wine.type}</p>
          <p>Rating: {wine.rating}</p>
          <p>{wine.description}</p>
          <p>Pairs with: {wine.foodPairings.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default WineList;
