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
import YoutubeEmbed from "../environments/YoutubeEmbed";


function Exhibiton() {
  return (
    <div>
    <div className="app">
      <div className="center-container">
      <ImageSlider images={[firstImg, secondImg, thirdImg, fourthImg, fifthImg, sixthImg, seventhImg, eighthtImg, neinthImg]} />
      </div>
    </div>
    <div className="exhibition_des">
    <h1 className="exhibition-title">2023</h1>
    <p>Peneli i Flakës - Gjilan</p>
    <h1 className="exhibition-title">2022</h1>
    <p>Ditët e Kulturës - Ferizaj.</p>
    <p>Çmimi tradicional "Gursel Sylejmani" - Ferizaj.</p>
    <p>Ura me tri harqe - Tetovë.</p>
    <p>Monumentet e trashëgimisë kulturore në Kosovë përmes fotografisë - Ferizaj.</p>
    <p>"Më shumë se kaq" - Suharekë.</p>
    <p>Ekspozitë kolektive- Biblioteka Kombëtare e Kosovës - Prishtinë.</p>
    <p>Koloni artistike - Kolegji AAB.</p>
    <p>Rilindja Warehouse x Manifesta Nights - ekspozim i pikturave si projeksione vizuele.</p>
    <p>Ekspozita e studentëve të Fakultetit të Arteve (UP-së) - Klinë</p>
    <p>Ditët e Kulturës - Klinë.</p>
    <p>Konkursi ndërkombëtar i fotografisë - Shkodër</p>
    <p>Ekspozitë: "Arti i ngujuar" - "Artistët për Artistë"  QK në Mitrovicë.</p>
    <h1 className="exhibition-title">Want to know more about me?</h1>
    <div className="yt-vid">
      <YoutubeEmbed embedId="B66zqVPfXdo"/>
    </div>
    <p>"Feminizmi në art", ekspozita që jep mesazhe të fuqishme" në ATV. </p>
    <div className="yt-vid">
      <YoutubeEmbed embedId="gqfT7i40T2A"/>
    </div>
    <p>"Feminizmi në art", ekspozita që jep mesazhe të fuqishme" në RTV Dukagjini. </p>
    <div className="artikulli">
    <iframe src="https://kosovapost.net/aulona-berisha-artistja-e-re-qe-i-premton-shume-artit-kosovar/" title="Website Embed"   height=" 500px"  width= "800px"/>
    {/* <p>https://kosovapost.net/aulona-berisha-artistja-e-re-qe-i-premton-shume-artit-kosovar/</p> */}
    </div>
    </div>
  </div>
  );  
};
export default Exhibiton;