import React from "react";
import Carousel from "react-multi-carousel";
import Video from "./video";

const responsive = {
  vids: {
    breakpoint: { max: 3000, min: 0 },
    items: 1
  }
};

//productivity
const videos = ["Zm_Le4YKwTM", "QnX0fLANGec"];

class Cat2 extends React.Component {
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

export default Cat2;
