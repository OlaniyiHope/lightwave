import "./wraps.css";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Vid1 from "../pages/let.mp4";
import Vid2 from "../pages/six.mp4";
import Vid3 from "../pages/news.mp4";
import ReactPlayer from "react-player";
import VideoCarousel from "./VideoCarousel";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import "./photo.css"

const Photo = () => {
 
  return (
    <div>
    <div className="body">
  
    <header class="contain">
      <section class="tent">
        <h1>Responsive Full Background Image</h1>
        <p class="sub-title"><strong>Resize your browser window</strong> <br /> to see the background image change in size</p>
        <p><a class="button" id="load-more-content" href="#top">Load some content</a></p>
        <p>To see scrolling behavior</p>
        
     
      </section>
    </header>
  </div>

    </div>
  );
};

export default Photo;