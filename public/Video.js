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

<video src="https://res.cloudinary.com/dftygokow/video/upload/v1683491996/buy_kjvvhz.mp4" />
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