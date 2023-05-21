import React from "react";
import ImageZigzag from "./Collections.jsx";
import img1 from '../../../files/images/TheLinesOfTheBlind/AllegroConBrio.jpeg';
import img2 from '../../../files/images/TheLinesOfTheBlind/Linverno.jpeg';
import img3 from '../../../files/images/TheLinesOfTheBlind/OP.16.jpeg';
import './style.css'

const images = [
  {
    src: img1,
    alt: "Allegro Con Brio",
    text: "Allegro Con Brio",
  
  },
  {
    src: img2,
    alt: "L'inverno",
    text: "L'inverno",
  },
  {
    src: img3,
    alt: "OP.16",
    text: "OP.16",
  },
];


const App = () => {
  return (
    <>
      <h1>The Lines Of The Blind</h1>
      <ImageZigzag images={images} />
    </>
  );
};
export default App;
