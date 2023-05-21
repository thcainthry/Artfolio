import React, { useState } from 'react';
import '../style/ImageSlider.css';
import { useEffect } from 'react';
const ImageSlider = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(goToNextSlide, interval);
      return () => clearInterval(timer);
    }, [currentIndex, interval]);
  
    const goToPreviousSlide = () => {
      const newIndex = (currentIndex - 1 + images.length) % images.length;
      setCurrentIndex(newIndex);
    };
  
    const goToNextSlide = () => {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
    };
  
    return (
      <div className="slider-container">

        <div className="slider">
          <button className="slider-arrow slider-arrow-left" onClick={goToPreviousSlide}>
            &lt;
          </button>
          <img className="slider-image" src={images[currentIndex]} alt="Slider" />
          <button className="slider-arrow slider-arrow-right" onClick={goToNextSlide}>
            &gt;
          </button>
          <h2 className='text_title'>Exhibitions</h2>

        </div>
      </div>
  );
};

export default ImageSlider;
