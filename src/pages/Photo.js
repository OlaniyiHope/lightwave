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

const Photo = () => {
    const [mainIndex, setMainIndex] = useState(0);

    const slideNext = () => {
      if (mainIndex < items.length - 1) {
        setMainIndex(mainIndex + 1);
      }
    };
  
    const slidePrev = () => {
      if (mainIndex > 0) {
        setMainIndex(mainIndex - 1);
      }
    };
  const items = [
    
    
    
  ];

  return (
    <div className="App">
         <AliceCarousel
        activeIndex={mainIndex}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
     
      <div className="btn-prev" onClick={slidePrev}>
      &lang;
    </div>
    <div className="btn-next" onClick={slideNext}>
      &rang;
    </div>
    
    </div>
  );
};

export default Photo;