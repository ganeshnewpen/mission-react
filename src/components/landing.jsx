// Landing.jsx
import React from 'react';
import Banner from './banner';

const Landing = () => {
  const imageUrl = 'https://t3.ftcdn.net/jpg/04/42/06/34/360_F_442063430_OjLo5sHK0twuUk2hCGWpjLphEHiLcamL.jpg';
  const title = 'Hi! I am Ganesh Neupane';

  return <Banner title={title} imageUrl={imageUrl} />;
};

export default Landing;
