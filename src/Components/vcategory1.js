import React from "react";
import Carousel from "react-multi-carousel";
import Video from "./video";

const responsive = {
  vids: {
    breakpoint: { max: 3000, min: 0 },
    items: 1
  }
};

//preservation video's
const videos = ["M_dBCOzFSAE", "IH_kGijV8so"];

class Cat1 extends React.Component {
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

export default Cat1;

