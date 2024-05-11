import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PuppyGuide from '../pages/PuppyGuide';
import TeamSection from '../pages/Team';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="puppy-guide" element={<PuppyGuide />} />
        <Route path="team" element={<TeamSection />} />
      </Routes>
  );
};

export default AppRoutes;