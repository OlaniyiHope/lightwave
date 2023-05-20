import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./VideoCarousel.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";


import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import VIDEO_PATH2 from "./images/contact-bg.jpg";
import VIDEO_PATH1 from "./images/ggg.jpg";
import VIDEO_PATH5 from "./images/sus5.png";
import VIDEO_PATH6 from "./images/sus3.jpg";

const VideoCarousel = () => {

 
  return (

    <div className="container">

    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
    <SwiperSlide>
    <img src={VIDEO_PATH2} alt="slide_image" />
  </SwiperSlide>
    <SwiperSlide>
    <img src={VIDEO_PATH1} alt="slide_image" />
  </SwiperSlide>
    <SwiperSlide>
    <img src={VIDEO_PATH5} alt="slide_image" />
  </SwiperSlide>
    <SwiperSlide>
    <video src="https://res.cloudinary.com/dftygokow/video/upload/v1683491996/buy_kjvvhz.mp4 "     controls alt="slide_video"/>
  </SwiperSlide>
   
   

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
        <FaArrowCircleLeft width="100px" color='black' height="100px"/>
        </div>
        <div className="swiper-button-next slider-arrow">
        <FaArrowCircleRight width="100px" color='black' height="100px"/>
        </div>
   
      </div>
    </Swiper>
  </div>
  );
};

export default VideoCarousel;