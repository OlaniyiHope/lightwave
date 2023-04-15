import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img3 from "./matt2.jpg"
import img2 from "./will4.jpg"
import img1 from "./dave2.jpg"
import "./team.css"
const Team = () => {

    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
     
          <div className="myCarousel">
            <h3>The content you never knew you wanted but knew you always needed." </h3>
            <h4>Energy Byte</h4>
         
          </div>
        </div>

        <div>
         
          <div className="myCarousel">
            <h3>What they produced was way above what we asked for."</h3>
            <h4>Its Milk co</h4>
       
          </div>
        </div>

      </Carousel>
    );
  }
export default Team;