import React from "react";
import Carousel from "react-multi-carousel";
import Video from "./video";

const responsive = {
  vids: {
    breakpoint: { max: 3000, min: 0 },
    items: 1
  }
};

//Agriculture Techniques
const videos =["M_dBCOzFSAE","IH_kGijV8so", "461Du-r4y7o", "ryzhaiBoB4g", "2xKmkO6o5_I", "wJjDAnwTwAY", 
"NOYSOb6UTOc", "ICfDSZrdjE4", "73T7kysSwQU", "VwOLVSKPcW4", "dnCQuwCtqJg", "HHDgsK09-1k", "pqjHT8MFSow",
"AsNLvO_AsKY", "i29Vea7ShyI", "6dg-ufvI-mU", "vPRySy3Qtvs" ];

class Cat3 extends React.Component {
  render() {
    return (
      <Carousel swipeable={false} draggable={false} responsive={responsive}>
        {videos.map(id => {
          return <Video id={id} key={id} />;
         })}
      </Carousel>
    );
  }
}

export default Cat3;
