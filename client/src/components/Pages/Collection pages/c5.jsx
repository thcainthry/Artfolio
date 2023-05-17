import React from "react";
import ImageZigzag from "./pamja.jsx";
import img1 from '../../../files/images/NoCollection/FromTheNewWorld.jpeg';
import img2 from '../../../files/images/NoCollection/la traviata.jpeg';
import './style.css'

const images = [
  {
    src: img1,
    alt: "From The New World",
    text: "From The New World",
  
  },
  {
    src: img2,
    alt: "la traviata",
    text: "la traviata",
  },

];


const App = () => {
  return (
    <>
      <h1>No Collection</h1>
      <ImageZigzag images={images} />
    </>
  );
};

export default App;
