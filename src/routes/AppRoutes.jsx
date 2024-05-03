import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PuppyGuide from '../pages/PuppyGuide';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="puppy-guide" element={<PuppyGuide />} />
      </Routes>
  );
};

export default AppRoutes;