import { React, useEffect, useRef } from 'react';
import "./main2.css"
 const New2 = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <div>
    <video
      style={{  margin: "0 auto" }}
      playsInline
      loop
      muted
  
      src="https://res.cloudinary.com/dftygokow/video/upload/v1682846161/56_bacts3.mp4"
      ref={videoEl}
    />
  </div>
  )
}
export default New2