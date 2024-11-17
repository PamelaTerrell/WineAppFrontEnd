// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WineList from './components/WineList'; // Assuming this is your Wine List component
import WineForm from './components/WineForm'; // Assuming this is your Add Wine form
import WinePairing from './components/WinePairing'; // Import the new WinePairing component

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wines" element={<WineList />} />
          <Route path="/add-wine" element={<WineForm />} />
          <Route path="/wines/pairing" element={<WinePairing />} /> {/* New Route for Wine Pairing */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
