import React from "react";
import "./style.css";

const ImageZigzag = ({ images }) => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto",
    maxWidth: "800px",
    backgroundColor: "#f1f1f1", 
    padding: "20px 20px 40px 20px", 
    borderRadius: "10px"
  };
  

  const itemStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "20px 0",
  };

  const imageStyle = {
    width: "48%",
    marginRight: "3%",
    marginLeft: "3%",
    marginBottom: "20px"
  };

const textContainerStyle = {
  width: "48%",
  marginRight: "3%",
  marginLeft: "3%",
  backgroundColor: "#fff",
  padding: "10px",
  borderRadius: "5px",
  paddingLeft: "20px",
  paddingRight:"20px", 
};


  const textStyle = {
    margin: "0"
  };

  return (
    <div style={containerStyle}>
      {images.map((image, index) => {
        const isEven = index % 2 === 0;
        const itemStyleWithFlex = {
          ...itemStyle,
          flexDirection: isEven ? "row" : "row-reverse",
        };
        const imageStyleWithFloat = {
          ...imageStyle,
          float: isEven ? "left" : "right",
        };
        return (
          <div style={itemStyleWithFlex} key={index}>
            <img src={image.src} alt={image.alt} style={imageStyleWithFloat} />
            <div style={textContainerStyle}>
              <p style={textStyle}>{image.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageZigzag;

