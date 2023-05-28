// About.jsx
import React from 'react';
import Banner from '../components/banner';

const About = () => {
  const imageUrl = 'https://png.pngtree.com/thumb_back/fh260/background/20201009/pngtree-dark-green-cyan-paper-cut-minimalist-background-for-brochure-poster-banner-image_405384.jpg';
  const title = 'About Me';

  return <Banner title={title} imageUrl={imageUrl} />;
};

export default About;
