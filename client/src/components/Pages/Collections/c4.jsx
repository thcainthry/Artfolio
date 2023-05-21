import React from "react";
import ImageZigzag from "./Collections.jsx";
import img1 from '../../../files/images/Instrumentalism/DOUBLEBASSPLAYER.jpeg';
import img2 from '../../../files/images/Instrumentalism/FOUEBASSISTS.jpeg';
import img3 from '../../../files/images/Instrumentalism/URIMSGUITAR.jpeg';
import './style.css'

const images = [
  {
    src: img1,
    alt: "DOUBLEBASSPLAYER",
    text: "DOUBLEBASSPLAYER",
  
  },
  {
    src: img2,
    alt: "FOUEBASSISTS",
    text: "FOUEBASSISTS",
  },
  {
    src: img3,
    alt: "URIMSGUITAR",
    text: "URIMSGUITAR",
  },
];

const App = () => {
  return (
    <>
      <h1>Instrumentalism</h1>
      <ImageZigzag images={images} />
    </>
  );
};

export default App;
