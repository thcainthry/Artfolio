import React from "react";
import ImageZigzag from "./Collections.jsx";
import img1 from '../../../files/images/TheRedBeret/THEGIRLONTHERED.jpeg';
import img2 from '../../../files/images/TheRedBeret/THEPRAYER.jpeg';
import img3 from '../../../files/images/TheRedBeret/THEREDDIELLONA.jpeg'
import './style.css'

const images = [
  {
    src: img1,
    alt: "THE GIRL ON THE RED",
    text: "THE GIR ON THE RED",
  
  },
  {
    src: img2,
    alt: "THE PRAYER",
    text: "THE PRAYER",
  },
  {
    src: img3,
    alt: "THE RED DIELLONA",
    text: "THE RED DIELLONA",
  },
];

const App = () => {
  return (
    <>
      <h1>The Red Beret</h1>
      <ImageZigzag images={images} />
    </>
  );
};

export default App;
