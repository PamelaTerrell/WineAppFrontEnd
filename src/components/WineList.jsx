import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WineList() {
  const [wines, setWines] = useState([]);
  const [loading, setLoading] = useState(true);  // New state to handle loading state
  const [error, setError] = useState(null);  // State to track any error

  useEffect(() => {
    axios.get('http://localhost:3000/api/wines')
      .then((response) => {
        setWines(response.data);
        setLoading(false); // Stop loading after data is fetched
      })
      .catch((error) => {
        setError("There was an error fetching the wines!");  // Set error message
        setLoading(false); // Stop loading even in case of error
        console.error("There was an error fetching the wines!", error);
      });
  }, []);

  if (loading) {
    return <p>Loading wines...</p>;  // Show loading message while data is being fetched
  }

  if (error) {
    return <p>{error}</p>;  // Show error message if there's an error
  }

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

