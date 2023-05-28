// Landing.jsx
import React from 'react';
import Banner from './banner';

const Landing = () => {
  const imageUrl = 'https://t3.ftcdn.net/jpg/04/42/06/34/360_F_442063430_OjLo5sHK0twuUk2hCGWpjLphEHiLcamL.jpg';
  const title = 'Hi! I am Ganesh Neupane';
  const paragraph = 'Welcome to my portfolio website. I am a passionate developer showcasing my work and skills.';

  return <Banner title={title} paragraph={paragraph} imageUrl={imageUrl} />;
};

export default Landing;
