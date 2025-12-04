import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import Header from './components/Header';
import VOD from './pages/VOD'; // הוספתי את VOD
import MoreInfo from './pages/MoreInfo'; // הוספתי את MoreInfo

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vod" element={<VOD />} /> {/* נתיב עבור עמוד VOD */}
        <Route path="/movie/:id" element={<MoreInfo />} /> {/* נתיב עבור עמוד פרטי הסרט */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
