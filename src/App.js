import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Manifesto from './components/pages/Manifesto';
import Articles from './components/pages/Articles';
import Books from './components/pages/Books';
import About from './components/pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<div>{Navbar()}{Home()}</div>} />
        <Route path='/manifesto' element={Manifesto()} />
        <Route path='/articles' element={Articles()} />
        <Route path='/books' element={Books()} />
        <Route path='/about' element={About()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
