import React from 'react';
import '../Home/Home.css';
import Exhibition from './Exhibiton';

const HomePage = () => {
  return (
    <div className="container">
      <div className="bg-image" />
      <div className="content">
        <h1 className="title">Welcome to my Gallery</h1>
        <p className="subtitle">I am an artist and painter, creating beautiful pieces of art that reflect my passion and creativity. Browse my portfolio to discover a world of imagination and inspiration.</p>
        <a href="/Exhibition" element={<Exhibition />}>
        <button className="cta-button">View Gallery</button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
