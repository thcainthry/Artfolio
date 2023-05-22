import React from "react";
import ImageZigzag from "./Collections.jsx";
import img1 from '../../../files/images/TheConductorAndHisOrchestra/REQUIEM.jpeg';
import img2 from '../../../files/images/TheConductorAndHisOrchestra/TheBlindConductorAndHisOrchestra.jpeg';
import './style.css'

const images = [
  {
    src: img1,
    alt: "REQUIEM",
    text: "SREQUIEM",
  
  },
  {
    src: img2,
    alt: "The Blind Conductor And His Orchestra",
    text: "The Blind Conductor And His Orchestra",
  },

];

const App = () => {
  return (
    <>
      <h1>The Conductor And His Orchestra</h1>
      <ImageZigzag images={images} />
    </>
  );
};

export default App;
