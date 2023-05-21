import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./VideoCarousel.css"
const VideoSliderCarousel = () => {
  const videos = [
    "https://res.cloudinary.com/dftygokow/video/upload/v1683491996/buy_kjvvhz.mp4",
    "https://res.cloudinary.com/dftygokow/video/upload/v1683491996/buy_kjvvhz.mp4",

    // Add more video URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Video Slider Carousel</h2>
      <Slider {...settings}>
        {videos.map((videoUrl, index) => (
          <div key={index}>
            <iframe
              title={`video-${index}`}
              width="560"
              height="315"
              src={videoUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSliderCarousel;
