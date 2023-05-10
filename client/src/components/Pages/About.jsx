import React from 'react';
import '../style/About.css';
import Contact from './Contact.jsx';
import painterPic from '../assets/profilePicture.jpg'
import Resume from '../assets/Resume- Albiona Berisha.pdf'
function About() {
  return (
    <div className="about">
      <div className="profile">
        <img src={painterPic} alt="Albiona Berisha" />
        <div className="profile-info">
          <h1>Albiona Berisha</h1>
          <p>Unë jam një piktore që aftësitë e saj i ka pasur që në moshën gjashtë vjeçare.
             Që nga ajo moshë kam përmirësuar artin tim në degën e pikturës. 
             Në vend të kësaj, unë jam dhe një adhuruese e fotografisë, të cilën e praktikoj si një mënyrë për të shprehur ndjenjat e mia përmes saj. 
             Për mua, arti është gjuha ime e të folurit nëpërmjet imazheve.

</p>
        </div>
      </div>
      
      <div className="capabilities">
        <div className="section-title">Të tjera</div>
        <div className="section-subtitle">Trajnimet</div>
        <div className="section-content">
        <ul>
  <li>Mendimi kritik (BONEVET, mbështetur nga CDF-BRICK).</li>
  <li>Trajnim për trajnerë - Internet Security (kamp 3 ajvor, i mbështetur nga CDF, Ferizaj).</li>
  <li>Videmokracia (Projekti i prezantuar nga BLINK, program nga Erasmus+).</li>
  <li>Trajnime pwr udhwheqje, hartim dhe zbatim tw projekteve (Mbwshtetur nga CDF, realizuar nga KYC, Ferizaj).</li>
</ul>

        </div>
        <div className="section-subtitle">Aftësitë</div>
        <div className="section-content">
         <ul>
          <li>Kapacitet akomodues.</li>
<li>Aftësi komunikuese.</li>
<li>Aftësi artistike.</li>
<li>Aftësi bashkëpunuese.</li>
         </ul>
        </div>
      </div>
      <div className="resume">
      <a href={Resume} download="Resume" target='_blank'>Download Resume</a>
      <a href="/Contact" element={<Contact />}>Contact Albiona Berisha</a>
      </div>

    
     
    </div>
  );
};

export default About;
