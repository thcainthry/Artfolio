import React from 'react';
import '../style/About.css';
import painterPic from '../../files-img/images/about_img.jpg'
import atachFile from '../../files-img/images/pin.png'


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



function About() {
  return (


      <div className={"containeri"}>
        <img src={painterPic} className='imge' ></img>
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
      
    
  );
};

export default About;
