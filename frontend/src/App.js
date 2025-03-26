import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Prez from './pages/Prez';
import Sources from './pages/Sources';
import About from './pages/About';
import Quiz from './pages/Quiz';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/prez" element={<Prez />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;