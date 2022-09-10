import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Abstract from './Pages/Photographies/Abstract';
import Architecture from './Pages/Photographies/Architecture';
import Fashion from './Pages/Photographies/Fashion';
import Portraits from './Pages/Photographies/Portraits';
import Reportage from './Pages/Photographies/Reportage';
import Photography from './Pages/Photography';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WallTextures from './Pages/Photographies/WallTextures';
import Milan from './Pages/Photographies/Milan';
import Locarno from './Pages/Photographies/Locarno';
import Ukraine2022 from './Pages/Photographies/Ukraine2022';
import PostApocalypticHighFashion from './Pages/Photographies/PostApocalypticHighFashion';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ph" element={<Photography />} />
        <Route path="/ph/abstract" element={<Abstract />} />
        <Route path="/ph/architecture" element={<Architecture />} />
        <Route path="/ph/architecture/walltextures" element={<WallTextures />} />
        <Route path="/ph/fashion" element={<Fashion />} />
        <Route path="/ph/fashion/postapocalyptichighfashion" element={<PostApocalypticHighFashion />} />
        <Route path="/ph/fashion/locarno" element={<Locarno />} />
        <Route path="/ph/fashion/milan" element={<Milan />} />
        <Route path="/ph/portraits" element={<Portraits />} />
        <Route path="/ph/reportage" element={<Reportage />} />
        <Route path="/ph/reportage/ukraine2022" element={<Ukraine2022 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
