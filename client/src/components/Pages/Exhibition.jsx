import "../style/ExhibitonStyles.css";
import React from 'react';
import firstImg from "../assets/exhibitionImages/firstImg.jpg"
import secondImg from "../assets/exhibitionImages/secondImg.jpg"
import thirdImg from "../assets/exhibitionImages/thirdImg.jpg"
import fourthImg from "../assets/exhibitionImages/fourthImg.jpg"
import fifthImg from "../assets/exhibitionImages/fifthImg.jpg"
import sixthImg from "../assets/exhibitionImages/sixthImg.jpg"
import seventhImg from "../assets/exhibitionImages/seventhImg.jpg"
import eighthtImg from "../assets/exhibitionImages/eighthtImg.jpg"
import neinthImg from "../assets/exhibitionImages/neinthImg.jpg"
import ImageSlider from "../environments/ImageSlider";


function Exhibiton() {
  return (
    <div className="app">
      <div className="center-container">
      <ImageSlider images={[firstImg, secondImg, thirdImg, fourthImg, fifthImg, sixthImg, seventhImg, eighthtImg, neinthImg]} />
      </div>
    </div>
  
  );  
};
export default Exhibiton;