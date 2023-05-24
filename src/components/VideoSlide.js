import "./VideoCarousel.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import Vid1 from "./videos/mat.mp4";
import Vid2 from "./videos/news.mp4";
import Vid3 from "./videos/six.mp4";
import ReactPlayer from "react-player";


const VideoSlide = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: Vid1,
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 2,
      title: "Video 2",
      src: Vid2,
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 3,
      title: "Video 3",
      src: Vid3,
      credit: "Video by cottonbro from Pexels",
    },
  ];


  return (
    <div>
      <Carousel style={{margin: "auto"}} >
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id} >
              <ReactPlayer
             
                url={videoObj.src}
               className="love"
              width="100%"
                controls={true}
              
              />
            
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoSlide;
