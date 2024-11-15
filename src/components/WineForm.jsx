// src/components/WineForm.jsx
import React, { useState } from 'react';
import './WineForm.css'; // Import the CSS for styling

function WineForm() {
  const [wine, setWine] = useState({
    name: '',
    year: '',
    rating: '',
    description: '',
    foodPairings: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWine({ ...wine, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log('Wine submitted:', wine);
  };

  return (
    <div className="wine-form-container">
      <h2>Add a New Wine</h2>
      <form onSubmit={handleSubmit} className="wine-form">
        <div className="form-group">
          <label htmlFor="name">Wine Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={wine.name}
            onChange={handleChange}
            required
            placeholder="Enter wine name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            name="year"
            value={wine.year}
            onChange={handleChange}
            required
            placeholder="Enter year of wine"
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={wine.rating}
            onChange={handleChange}
            required
            placeholder="Enter wine rating (1-5)"
            min="1"
            max="5"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={wine.description}
            onChange={handleChange}
            required
            placeholder="Write a description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="foodPairings">Food Pairings (comma separated):</label>
          <input
            type="text"
            id="foodPairings"
            name="foodPairings"
            value={wine.foodPairings}
            onChange={handleChange}
            required
            placeholder="Beef, Chicken, Cheese, etc."
          />
        </div>

        <button type="submit" className="submit-btn">Add Wine</button>
      </form>
    </div>
  );
}

export default WineForm;
