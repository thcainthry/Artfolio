import React from "react";
import ImageZigzag from "./pamja.jsx";
import img1 from '../../../files/images/Fossils/fossils.jpeg';
import img2 from '../../../files/images/Fossils/fossils_2.jpeg';
import img3 from '../../../files/images/Fossils/fossils_3.jpeg';
import './style.css'

const images = [
  {
    src: img1,
    alt: "Fossils",
    text: "Fossils",
  
  },
  {
    src: img2,
    alt: "Fossils 2",
    text: "Fossils 2",
  },
  {
    src: img3,
    alt: "Fossils 3",
    text: "Fossils 3",
  },
];

const App = () => {
  return (
    <>
      <h1>Fossils</h1>
      <ImageZigzag images={images} />
    </>
  );
};


export default App;
