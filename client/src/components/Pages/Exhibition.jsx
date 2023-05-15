import React from 'react';
import "../style/ExhibitonStyles.css";



function Exhibition() {
  return (
    <div>
      <header>
        <h1>Artist Name Exhibition</h1>
      </header>

      <main>
        <section id="gallery">
          <h2>Gallery</h2>
          <div className="gallery-container">
            <img src="img1.jpg"alt="Artwork 1" />
            <img src="img2.jpg" alt="Artwork 2" />
            <img src="img3.jpg" alt="Artwork 3" />
            <img src="img4.jpg" alt="Artwork 4" />
            <img src="img5.jpg" alt="Artwork 5" />
            <img src="img6.jpg" alt="Artwork 6" />
          </div>
        </section>

      </main>
    </div>
  );
}

export default Exhibition;
