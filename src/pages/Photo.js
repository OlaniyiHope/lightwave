import "./VideoCarousel.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import Vid1 from "../pages/let.mp4";
import Vid2 from "../pages/six.mp4";
import Vid3 from "../pages/news.mp4";
import ReactPlayer from "react-player";
import VideoCarousel from "./VideoCarousel";


const Photo = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: "https://res.cloudinary.com/dftygokow/video/upload/v1683488753/4_bgqz8l.mp4",
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 2,
      title: "Video 2",
      src: "https://res.cloudinary.com/dftygokow/video/upload/v1683491766/mat_lyihem.mp4",
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 3,
      title: "Video 3",
      src: "https://res.cloudinary.com/dftygokow/video/upload/v1683491825/let_sadcnr.mp4",
      credit: "Video by cottonbro from Pexels",
    },
  ];

  return (
    <div className="App">
      <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={true}
              />
              <Carousel.Caption>
                <h3>{videoObj.title}</h3>
                <p>{videoObj.credit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <VideoCarousel />
    </div>
  );
};

export default Photo;