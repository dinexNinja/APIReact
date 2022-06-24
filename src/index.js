import React from 'react';
import ReactDOM from 'react-dom/client';
import Inicial from './api/App.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicial />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

