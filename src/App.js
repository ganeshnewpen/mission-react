import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Card from './components/card';
import UseStateComponents from './components/usestates';
import Landing from './components/landing';
import Footer from './components/footer';
import AboutPage from './pages/about.jsx';
import NotFound from './pages/404.jsx'; // Import the NotFound component

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} /> {/* Add the fallback route */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const HomePage = () => {
  return (
    <div>
      <Landing />
      <Card />
      <UseStateComponents />
    </div>
  );
};

export default App;
