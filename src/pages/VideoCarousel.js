import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./VideoCarousel.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import shu1 from "./images/portfolio/lady-shutterbug.jpg"

import wood1 from "./images/portfolio/woodcraft.jpg"
import bee from "./images/portfolio/gallery/g-beetle.jpg"


import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import VIDEO_PATH4 from "../pages/4.mp4";

const Slidde = () => {


  return (

    <div className="container">
    <h1 className="heading">Flower Gallery</h1>
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
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide>
        
     <video controls><source src={VIDEO_PATH4}  type="video/mp4"/></video>
      
    
      </SwiperSlide>
      <SwiperSlide>
     
      <video controls><source src={VIDEO_PATH4}  type="video/mp4"/></video>
      </SwiperSlide>
      <SwiperSlide>
 
      <video controls><source src={VIDEO_PATH4}  type="video/mp4"/></video>
      </SwiperSlide>
      <SwiperSlide>
   
      <video controls><source src={VIDEO_PATH4}  type="video/mp4"/></video>
      </SwiperSlide>
      <SwiperSlide>
     
     <video controls><source src={VIDEO_PATH4}  type="video/mp4"/></video>
      </SwiperSlide>
      <SwiperSlide>
    
      <video controls><source src={VIDEO_PATH4}  type="video/mp4"/></video>
      </SwiperSlide>
      <SwiperSlide>
   
      <video controls><source src={VIDEO_PATH4}  type="video/mp4"/></video>
      </SwiperSlide>
   

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
  );
};

export default Slidde;
