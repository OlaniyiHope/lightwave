import React, { useState } from 'react';
 const videos = [
	{
        "url":"https://res.cloudinary.com/dftygokow/video/upload/v1682846161/56_bacts3.mp4"
	},

	{
        "url":"https://res.cloudinary.com/dftygokow/video/upload/v1682846161/56_bacts3.mp4"
	},
	{
        "url":"https://res.cloudinary.com/dftygokow/video/upload/v1682846161/56_bacts3.mp4"
	},
	{
        "url":"https://res.cloudinary.com/dftygokow/video/upload/v1682846161/56_bacts3.mp4"
	},

];
const Viding = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <video src={videos[currentIndex]} controls />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Viding;