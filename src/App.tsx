import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Mirror from './components/Mirror';
import Memory from './components/Memory';
import End from './components/End';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mirror" element={<Mirror />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </Router>
  );
}

export default App;