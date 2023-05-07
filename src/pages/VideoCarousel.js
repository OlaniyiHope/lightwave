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

import VIDEO_PATH2 from "../pages/let.mp4";
import VIDEO_PATH1 from "../pages/six.mp4";
import VIDEO_PATH5 from "../pages/news.mp4";
import VIDEO_PATH6 from "../pages/buy.mp4";

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
        
     <video controls><source src="https://res.cloudinary.com/dftygokow/video/upload/v1683488753/4_bgqz8l.mp4" /></video>
      
    
      </SwiperSlide>
      <SwiperSlide>
     
      <video controls><source src="https://res.cloudinary.com/dftygokow/video/upload/v1683491766/mat_lyihem.mp4"  /></video>
      </SwiperSlide>
      <SwiperSlide>
      <video controls><source src='https://res.cloudinary.com/dftygokow/video/upload/v1683491825/let_sadcnr.mp4' /></video>
      </SwiperSlide>
      <SwiperSlide>
      <video controls><source src="https://res.cloudinary.com/dftygokow/video/upload/v1683491919/six_jgvkaz.mp4" /></video>
      </SwiperSlide>
      <SwiperSlide>
   
      <video controls><source src="https://res.cloudinary.com/dftygokow/video/upload/v1683491996/buy_kjvvhz.mp4" /></video>
      </SwiperSlide>
      <SwiperSlide>
      <video controls><source src="https://res.cloudinary.com/dftygokow/video/upload/v1683488753/4_bgqz8l.mp4"  /></video>
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