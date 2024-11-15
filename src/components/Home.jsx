// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to the Wine Pairing App</h1>
      <p>Find the perfect wine to pair with your favorite dishes like Beef, Chicken, Cheese, and more!</p>
      
      <h2>Explore Wines</h2>
      <p>Browse through our curated list of wines and their perfect pairings.</p>
      <Link to="/wines" className="btn">Explore Wines</Link>
    </div>
  );
}

export default Home;
