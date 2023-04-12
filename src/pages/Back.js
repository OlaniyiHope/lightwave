import { useState, useRef, useEffect } from "react";
import img1 from "./images/book.avif.avif";
import img2 from "./images/sus.avif.avif"
import img3 from "./images/sus4.avif.avif"
import img4 from "./sustain.jpeg"
import "./Background.css";
const Back = () => {
  const images = [img1, img2, img3, img4];
  const [currentSlide, setCurrentSlide] = useState(0);
  // useRef does not cause a re-render
  let sliderInterval = useRef();
  let switchImages = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  useEffect(() => {
    sliderInterval = setInterval(() => {
      switchImages();
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  });
  return (
    <div className="imgWrapper">
      {images.map((img, index) => {
        return (
          <img
            src={img}
            className={
              index === currentSlide ? "imageActive homeImage" : "image"
            }
          />
        );
      })}
    </div>
  );
};

export default Back;
