import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./VideoCarousel.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import VIDEO_PATH4 from "../pages/4.mp4";
import VIDEO_PATH3 from "../pages/mat.mp4";
import VIDEO_PATH2 from "../pages/let.mp4";
import VIDEO_PATH1 from "../pages/six.mp4";
import VIDEO_PATH5 from "../pages/news.mp4";

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
        
     <video controls><source src={VIDEO_PATH4}  type="video/mp4"/></video>
      
    
      </SwiperSlide>
      <SwiperSlide>
     
      <video controls><source src={VIDEO_PATH3}  type="video/mp4"/></video>
      </SwiperSlide>
      <SwiperSlide>
      <video controls><source src={VIDEO_PATH5}  type="video/mp4"/></video>
      </SwiperSlide>
      <SwiperSlide>
      <video controls><source src={VIDEO_PATH2}  type="video/mp4"/></video>
      </SwiperSlide>
      <SwiperSlide>
   
      <video controls><source src={VIDEO_PATH1}  type="video/mp4"/></video>
      </SwiperSlide>
      <SwiperSlide>
     
    
    
      <video controls><source src={VIDEO_PATH3}  type="video/mp4"/></video>
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
