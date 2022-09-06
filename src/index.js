import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/photographies/abstract" element={<Abstract />} />
        <Route path="/photographies/architecture" element={<Architecture />} />
        <Route path="/photographies/fashion" element={<Fashion />} />
        <Route path="/photographies/portraits" element={<Portraits />} />
        <Route path="/photographies/reportage" element={<Reportage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
