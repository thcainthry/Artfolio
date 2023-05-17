import React from "react";
import ImageZigzag from "./pamja.jsx";
import img1 from '../../../files/images/EnRouge/DiellaEnRouge.jpeg';
import img2 from '../../../files/images/EnRouge/LfilleEnRouge.jpeg';
import img3 from '../../../files/images/EnRouge/SomethingEnRouge.jpeg';
import './style.css'

const images = [
  {
    src: img1,
    alt: "Diella En Rouge",
    text: "Diella En Rouge",
  
  },
  {
    src: img2,
    alt: "L'fille En Rouge",
    text: "L'fille En Rouge",
  },
  {
    src: img3,
    alt: "Something En Rouge",
    text: "Something En Rouge",
  },
];

const App = () => {
  return (
    <>
      <h1>En Rouge</h1>
      <ImageZigzag images={images} />
    </>
  );
};

export default App;
