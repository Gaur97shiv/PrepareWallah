import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Signup } from './Pages/Signup/Signup';
import Navbar from './Component/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
