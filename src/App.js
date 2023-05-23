import React from 'react';
import Navbar from './components/navbar';
import Card from './components/card';
import Landing from './components/landing';
import Footer from './components/footer';
import './app.css';

const Button = ({ bgcolor = 'blue', color = 'white', text, fontsize = '1rem' }) => {
  return (
    <button style={{ backgroundColor: bgcolor, color, fontSize: fontsize }}>{text}</button>
  );
};

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Landing />

      <div className="test-components">
        <Button text="Click me" />
        <Button fontsize="2rem" text="Hover me" />
      </div>
      <div className="row">
        <div className="col-sm-4">
          <Card
            title="Example Card 1"
            image="path/to/image1.jpg"
            description="This is the description for Example Card 1."
          />
        </div>
        <div className="col-sm-4">
          <Card
            title="Example Card 2"
            image="path/to/image2.jpg"
            description="This is the description for Example Card 2."
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
