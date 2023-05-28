import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classes from "./onlynew.css"


const New2 = props => {
  const videoSource = "https://res.cloudinary.com/dftygokow/video/upload/v1684982338/lightvid_w2seiw.mp4"
  return (
 <div className='classes.Container'>
 
 <video autoPlay="autoplay" loop="loop" muted className={classes.Video} controls>
<source src={videoSource} type="video/mp4" />
</video>
 </div>
  )
};


export default New2;

