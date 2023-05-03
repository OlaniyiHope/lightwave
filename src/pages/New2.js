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
    <button type="button" class="video-control__button video-control__button--volume">
    <span class="video-control__icon--volume" aria-hidden="true">
    <svg class="svg-icon svg-icon--ico_volume" role="img" aria-hidden="true">
    <use href="#sprite-ico_volume"></use></svg>
    </span><span class="video-control__icon--muted" aria-hidden="true">
    <svg class="svg-icon svg-icon--ico_muted" role="img" aria-hidden="true">
    <use href="#sprite-ico_muted"></use></svg></span><span class="screen-reader-text">
    Click to toggle volume</span></button>
  </div>
  )
}
export default New2