import React from 'react';
import Navbar from './components/navbar';
import Card from './components/card';

import Landing from './components/landing';
import Footer from './components/footer';
import './app.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
       <Card />
      <Footer />
    </div>
  );
};

export default App;
