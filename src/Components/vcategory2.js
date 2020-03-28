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
const videos = ["Zm_Le4YKwTM", "QnX0fLANGec","vFKk20PCf6E", "ntJouJhLM48", "CpuEIkjH6iw", 
"TN052R8xST4", "15ff4mpKtyc", "1-tmiRQwv_A", "-dhdUoK7s2s", "gn6cd1BNDLk" ];

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
