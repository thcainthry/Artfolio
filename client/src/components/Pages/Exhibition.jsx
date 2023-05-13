// import React, {useState, useEffect} from "react";
// import axios from "axios";
// // import "../style/ExhibitonStyles.css";
// import Slider from "../environments/Slider";

// const Exhibition = () => {
//   const imageUrls = [
//       'https://www.facebook.com/photo/?fbid=5639219052864609&set=a.508148675971698',
//       'https://www.facebook.com/photo/?fbid=447383900875204&set=pcb.447383977541863',
//       'https://www.facebook.com/photo/?fbid=447383204208607&set=pcb.447383977541863',
//       'https://www.facebook.com/photo/?fbid=447383880875206&set=pcb.447383977541863',
//       'https://www.facebook.com/photo/?fbid=447383577541903&set=pcb.447383977541863',
//       'https://www.facebook.com/photo/?fbid=447383560875238&set=pcb.447383977541863',
//       'https://www.facebook.com/photo/?fbid=5218402168279635&set=a.508148675971698',
//       'https://www.facebook.com/photo?fbid=5092527640867089&set=a.508148675971698,',
//       'https://www.facebook.com/photo/?fbid=2064289913731264&set=a.128941320599476'
//   ];
//   const [images, setImages] = useState([]);
  
//   useEffect(() => {
//       const fetchImages = async () => {
//           try {
//               const responses = await Promise.all(
//                   imageUrls.map((url) => axios.get(url, {responseType: 'blob'}))
//               );
  
//               const imageBlobs = responses.map((response) => response.data);
//               const imageObjects = imageBlobs.map((blob) => URL.createObjectURL(blob));
//               setImages(imageObjects);
//           }catch(error){
//               console.error("Error fetching images: ", error);
//           }
//       };
  
//       fetchImages();
//   }, []);

//   return(
//     <div>
//       <h1>fotot</h1>
//       {
//         images.length > 0 ?(
//       <Slider images={images}/>
//         ) : (
//           <p>loading...</p>
//         )}
//     </div>
//   );

// };  
// export default Exhibition;

import "../style/ExhibitonStyles.css";
import React from 'react';
import HeroSlider, {Slide} from 'hero-slider';

const Exhibition =() => {
    const imageUrl=[
      'https://www.facebook.com/photo/?fbid=5639219052864609&set=a.508148675971698',
      'https://www.facebook.com/photo/?fbid=447383900875204&set=pcb.447383977541863',
      'https://www.facebook.com/photo/?fbid=447383204208607&set=pcb.447383977541863',
      'https://www.facebook.com/photo/?fbid=447383880875206&set=pcb.447383977541863',
      'https://www.facebook.com/photo/?fbid=447383577541903&set=pcb.447383977541863',
      'https://www.facebook.com/photo/?fbid=447383560875238&set=pcb.447383977541863',
      'https://www.facebook.com/photo/?fbid=5218402168279635&set=a.508148675971698',
      'https://www.facebook.com/photo?fbid=5092527640867089&set=a.508148675971698,',
      'https://www.facebook.com/photo/?fbid=2064289913731264&set=a.128941320599476'
    ];

    return (
      
      <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>{
              console.log("onBeforeChange",previousSlide, nextSlide)
          } 
        }
        onChage={(nextSlide) =>  {
          console.log("onChage",nextSlide)
          }
       }
        onAfterChange={(nextSlide) => {
          console.log("onAfterChange",nextSlide)
           }
        }

        style={
          {
            backgroundColor:"rgba(0,0,0,0.33)"
          }
        }

        settings={
          {
            slidingDuration: 250,
            slidingDelay: 100,
            shouldAutoplay: true,
            shouldDisplayButtons: true,
            autoplayDuration: 5000,
            height: "100vh",
          }
        }
      >
        <Slide
          background={{
            backgroundImage: imageUrl[0],
            backgroundAttachment: 'fixed'
          }}
        />
        <Slide
          background={{
            backgroundImage: imageUrl[1],
            backgroundAttachment: 'fixed'
          }}
        />
        <Slide
          background={{
            backgroundImage: imageUrl[2],
            backgroundAttachment: 'fixed'
          }}
        />
        <Slide
          background={{
            backgroundImage: imageUrl[3],
            backgroundAttachment: 'fixed'
          }}
        />
      </HeroSlider>

    );
}

export default Exhibition;