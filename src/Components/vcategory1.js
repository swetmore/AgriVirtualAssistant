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
const videos = ["Iy0Yk2QJGoY", "6vQW8Tl_KLc", "-4OBcRHX1Bc", 
"nY9lu-dn1F8","vq4d1_46C8U", "v9DKJ7SE2lc", "4d0kgyVY4g8" ];

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

