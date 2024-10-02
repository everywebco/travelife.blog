import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import PlacePage from './pages/Place.js';
import CountryPage from './pages/Country.js';
import SpecialPlacePage from './pages/Special-place.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/place" element={<PlacePage />} />
         
      <Route path="/country" element={<CountryPage />} />
         
      <Route path="/specialplace" element={<SpecialPlacePage />} />
    </Routes>
  );
}

export default App;
