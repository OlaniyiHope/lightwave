import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "./myslide.css";
import "react-alice-carousel/lib/alice-carousel.css";
import VIDEO_PATH1 from "./images/contact-bg.jpg";
import VIDEO_PATH2 from "./images/hero-bg.jpg";
import VIDEO_PATH3 from "../pages/sustain.jpeg";
import VIDEO_PATH4 from "../pages/amp.jpeg";


const items = [
  <div className="item">
    <img src={VIDEO_PATH1 } className="media" />
  </div>,
  <div className="item">
    <img src={VIDEO_PATH2}className="media" />
  </div>,
  <div className="item">
    <img src={VIDEO_PATH3} className="media" />
  </div>,

  <div className="item">
    <video width="100%" controls className="media">
      <source src="https://res.cloudinary.com/dftygokow/video/upload/v1683491996/buy_kjvvhz.mp4" />
    
    </video>
  </div>
];

const Myslide = () => {
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

  return (
    <div className="carousel">
      <AliceCarousel
        activeIndex={mainIndex}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
      <p className="index">{`${mainIndex + 1}/${items.length}`}</p>
      <div className="caption-container">
        <p className="caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      <div className="btn-prev" onClick={slidePrev}>
        &lang;
      </div>
      <div className="btn-next" onClick={slideNext}>
        &rang;
      </div>
    </div>
  );
};

export default Myslide;
