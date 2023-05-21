import React from "react";
import ImageZigzag from "./pamja.jsx";
import img1 from '../../../files/images/TheVanityOfExistence/THEVANITYOFEXISTENCE.jpeg';
import img2 from '../../../files/images/TheVanityOfExistence/THEVANITYOFEXISTENCE2.jpeg';
import img3 from '../../../files/images/TheVanityOfExistence/THEVANITYOFEXISTENCE3.jpeg';
import img4 from '../../../files/images/TheVanityOfExistence/THEVANITYOFEXISTENCE4.jpeg';
import './style.css'

const images = [
  {
    src: img1,
    alt: "THE VANITY OF EXISTENCE",
    text: "THE VANITY OF EXISTENCE",
  
  },
  {
    src: img2,
    alt: "THE VANITY OF EXISTENCE 2",
    text: "THE VANITY OF EXISTENCE 2",
  },
  {
    src: img3,
    alt: "THE VANITY OF EXISTENCE 3",
    text: "THE VANITY OF EXISTENCE 3",
  },
  {
    src: img4,
    alt: "THE VANITY OF EXISTENCE 4",
    text: "THE VANITY OF EXISTENCE 4",
  },
];

const App = () => {
  return (
    <>
      <h1>The Vanity of Existence</h1>
      <ImageZigzag images={images} />
    </>
  );
};
export default App;
