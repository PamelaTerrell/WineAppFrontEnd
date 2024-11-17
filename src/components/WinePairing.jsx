// src/components/WinePairing.jsx
import React, { useState } from 'react';
import axios from 'axios';

function WinePairing() {
  const [foodChoice, setFoodChoice] = useState('');
  const [winePairings, setWinePairings] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!foodChoice) {
      setError('Please enter a food item.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/api/wines/pairings?food=${foodChoice}`);
      setWinePairings(response.data);
      setError('');
    } catch (err) {
      setError(`No wines found for ${foodChoice}`);
      setWinePairings([]);
    }
  };

  return (
    <div>
      <h2>Find Wine Pairing</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={foodChoice}
          onChange={(e) => setFoodChoice(e.target.value)}
          placeholder="Enter a food item (e.g., Beef, Chicken)"
        />
        <button type="submit">Find Pairing</button>
      </form>

      {error && <p>{error}</p>}

      <div>
        <h3>Pairings:</h3>
        {winePairings.length > 0 ? (
          <ul>
            {winePairings.map((wine) => (
              <li key={wine._id}>
                <h4>{wine.name}</h4>
                <p>{wine.description}</p>
                <p>Year: {wine.year}</p>
                <p>Rating: {wine.rating}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No pairings found.</p>
        )}
      </div>
    </div>
  );
}

export default WinePairing;

