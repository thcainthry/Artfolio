import React from "react";
import ImageZigzag from "./Collections.jsx";
import img1 from '../../../files/images/Portraits/AUTOPORTRAIT.jpeg';
import img2 from '../../../files/images/Portraits/THEGUITARIST.jpeg';
import img3 from '../../../files/images/Portraits/THEPAINTER.jpeg';
import img4 from '../../../files/images/Portraits/portrait.jpeg';
import './style.css'

const images = [
  {
    src: img1,
    alt: "AUTO PORTRAIT",
    text: "AUTO PORTRAIT",
  
  },
  {
    src: img2,
    alt: "THE GUITARIST",
    text: "THE GUITARIST",
  },
  {
    src: img3,
    alt: "THE PAINTER",
    text: "THE PAINTER",
  },
  {
    src: img4,
    alt: "Portrait",
    text: "Portrait",
  },
];


const App = () => {
  return (
    <>
      <h1>Portraits</h1>
      <ImageZigzag images={images} />
    </>
  );
};
export default App;
