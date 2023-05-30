import React from 'react';
import '../style/Home.css';
import Exhibition from './Exhibition.jsx';
import Backgroundimage from '../assets/vllau.jpeg'

const HomePage = () => {
  return (
    <header style={ image}>
    <div className="container">
      
      <div className="content">
        <h1 className="title">Welcome to my Gallery</h1>
        <p className="subtitle">I am an artist and painter, creating beautiful pieces of art that reflect my passion and creativity. Browse my portfolio to discover a world of imagination and inspiration.</p>
        <a href="/Exhibition" element={<Exhibition />}>
        <button className="cta-button">View Gallery</button>
        </a>
      </div>
    </div>
    </header>
  );
};
const image = {

  width: "100%",
  height: "90vh",
  background: `url(${Backgroundimage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

export default HomePage;
