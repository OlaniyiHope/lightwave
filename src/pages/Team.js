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
          <img src={img1} />
          <div className="myCarousel">
            <h3>David Oriazowan </h3>
            <h4>Project Manager</h4>
         
          </div>
        </div>

        <div>
          <img src={img2} />
          <div className="myCarousel">
            <h3>Will Forbes</h3>
            <h4>Managing Director</h4>
       
          </div>
        </div>

        <div>
          <img src={img3} />
          <div className="myCarousel">
            <h3>Nathan Marriot</h3>
            <h4>Creative Director</h4>
           
          </div>
        </div>
      </Carousel>
    );
  }
export default Team;