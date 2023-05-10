import React from 'react';
import '../style/About.css';
<<<<<<< HEAD
import Contact from './Contact.jsx';
import painterPic from '../assets/profilePicture.jpg'
import Resume from '../assets/Resume- Albiona Berisha.pdf'
=======
import painterPic from '../../files/images/about_img.jpg'
import atachFile from '../../files/images/pin.png'


const onClickDownload = () => {
  fetch("../../files/Resume_Albiona Berisha.pdf").then(response => {
    response.blob().then(blob => {
      const fileUrl = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileUrl;
      alink.download = "Resume_Albiona Berisha.pdf";
      alink.click();
    });
  });
};



>>>>>>> about_artist
function About() {
  return (


      <div className={"container"}>
        <img src={painterPic} width="100%" height="100%"></img>
        <div className={'text'}>
          <h3>BIO AND CV</h3>
          <p>Unë jam një piktore që aftësitë e saj i ka pasur që në moshën gjashtë vjeçare. 
            Që nga ajo moshë kam përmirësuar artin tim në degën e pikturës.              
            Në vend të kësaj, unë jam dhe një adhuruese e fotografisë, të cilën e praktikoj si një mënyrë për të shprehur ndjenjat e mia përmes saj. 
            Për mua, arti është gjuha ime e të folurit nëpërmjet imazheve.
         </p>
         <div className={'text cv_download'} onClick={onClickDownload}>View and download my CV:
      
         <img src={atachFile} className={'fotoja_pin'} onClick={onClickDownload}></img>
         </div>
         
        </div>
      </div>
      
<<<<<<< HEAD
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

=======
>>>>>>> about_artist
    
  );
};

export default About;
