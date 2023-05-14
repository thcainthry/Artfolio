import React from "react";
import ImageZigzag from "./pamja.jsx";
import img1 from '../../../files/images/ConnectedByBlood/vllau.jpeg';
import img2 from '../../../files/images/ConnectedByBlood/lamadre.jpeg';
import img3 from '../../../files/images/ConnectedByBlood/myfatherseyes.jpeg'
import './style.css'

const images = [
  {
    src: img1,
    alt: ".",
    text: ".",
  
  },
  {
    src: img2,
    alt: "La Madre",
    text: "La Madre",
  },
  {
    src: img3,
    alt: "My fathers eyes",
    text: "My fathers eyes",
  },
];

const App = () => {
  return (
    <>
      <h1>Connected By Blood</h1>
      <ImageZigzag images={images} />
    </>
  );
};

export default App;
