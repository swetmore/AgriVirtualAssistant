import React from 'react';
import Slider from 'react-animated-slider';
import {Helmet} from 'react-helmet'
import 'react-animated-slider/build/horizontal.css';
import "../slider-animations.css";
import "../styles.css";

  const content = [
      {
          title: "Virtual Agri Assistant",
          description: "Created to serve farmers, The Virtual Agri Assistant helps keep you informed with weather updates, informational agricultural videos, and a searchable pest database to ensure that you have the knowledge you need to keep your crops healthy.",
          button: "Learn More",
          image: "https://i.imgur.com/MY3sQYq.jpg",
          onItemClick: function (event) {
            window.location.replace("./info")
          }
      },
      {
          title: "Check The Weather",
          description: "Get the weather forecast for your area to keep track of weather conditions on your farm.",
          button: "Click Here",
          image: "https://i.imgur.com/Mul3rZ2.png",
          onItemClick: function (event) {
            window.location.replace("./weatherpage")
          }
      },
      {
          title: "Watch Videos",
          description: "Learn more on a variety of agricultural topics including preservation, productivity, and agricultural techniques.",
          button: "Click Here",
          image: "https://i.imgur.com/ev47PN4.jpg",
          onItemClick: function (event) {
            window.location.replace("./videopage1")
          }
      },
      {
          title: "Search Pests",
          description: "Use keywords to search our database on pests to find more information on what is damaging your crops.",
          button: "Click Here",
          image: "https://i.imgur.com/uQPXN5a.jpg",
          onItemClick: function (event) {
            window.location.replace("./pestpage")
          }
      },
      {
          title: "Search Pests by Photo",
          description: "Don't know the name of the pest? Use our pest photos feature to find an image of the pest that's afflicting your crops.",
          button: "Click Here",
          image: "https://i.imgur.com/ulBbicY.jpg",
          onItemClick: function (event) {
            window.location.replace("./photopage")
          }
      }
  ];



const HomePage = () => {
    return (
        <div>
            <Helmet>
                <style>{'body {background-color: #bbdefb; }'}</style>
            </Helmet>
       <Slider className="slider-wrapper">
           {content.map((item, index) => (
               <div
                    key = {index}
                    className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className = "inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button onClick = {item.onItemClick}>{item.button}</button>
                        </div>
                    </div>
           ))
           }
       </Slider>
       <div>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
       </div>
    )
}

export default HomePage;
