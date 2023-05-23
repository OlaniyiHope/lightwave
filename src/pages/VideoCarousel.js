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

import VIDEO_PATH1 from "./images/contact-bg.jpg";
import VIDEO_PATH2 from "./images/hero-bg.jpg";
import VIDEO_PATH3 from "../pages/sustain.jpeg";
import VIDEO_PATH4 from "../pages/amp.jpeg";

const Slidde = () => {


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
        
    <img src={VIDEO_PATH1} />
     
   
     </SwiperSlide>
     <SwiperSlide>
    
     <img src={VIDEO_PATH2}  />
     </SwiperSlide>
     <SwiperSlide>
     <img src={VIDEO_PATH3} />
     </SwiperSlide>
     <SwiperSlide>
     <img src={VIDEO_PATH4} />
     </SwiperSlide>
      <SwiperSlide>
      <iframe
    src="https://res.cloudinary.com/dftygokow/video/upload/v1683491996/buy_kjvvhz.mp4"
  
  ></iframe>
    
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

export default Slidde;