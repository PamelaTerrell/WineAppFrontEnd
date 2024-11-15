// src/components/WineDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function WineDetail() {
  const { id } = useParams();
  const [wine, setWine] = useState(null);

  useEffect(() => {
    // Fetch the wine details
    axios.get(`http://localhost:3000/api/wines/${id}`)
      .then((response) => {
        setWine(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the wine details!", error);
      });
  }, [id]);

  if (!wine) return <p>Loading...</p>;

  return (
    <div>
      <h2>{wine.name}</h2>
      <p><strong>Year:</strong> {wine.year}</p>
      <p><strong>Region:</strong> {wine.region}</p>
      <p><strong>Type:</strong> {wine.type}</p>
      <p><strong>Rating:</strong> {wine.rating}</p>
      <p><strong>Description:</strong> {wine.description}</p>
    </div>
  );
}

export default WineDetail;
