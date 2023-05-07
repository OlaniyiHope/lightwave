import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const renderVideo = ({
  noControls,
  src,
  vidButtonRef,
  vidRef,
  handleToggleVideo,
}) => (
  <>
    {noControls ? (
      <div ref={vidButtonRef} className="video video__play-button">
        <video
          ref={vidRef}
          src="https://res.cloudinary.com/dftygokow/video/upload/v1682846161/56_bacts3.mp4"

          onClick={handleToggleVideo}
        ></video>
      </div>
    ) : (
      <video
         src="https://res.cloudinary.com/dftygokow/video/upload/v1682846161/56_bacts3.mp4"

        controls
        controlsList="nodownload"
      ></video>
    )}
  </>
);

const New2 = props => {
  const vidRef = useRef(null);
  const vidButtonRef = useRef(null);
  const { noControls, src } = props;
  const handlePlay = () => {
    vidRef.current.play();
    // hide overlay play button styles, set by 'video__play-button'
    vidButtonRef.current.classList.add('is-playing');
  };
  const handlePause = () => {
    vidRef.current.pause();
    // show overlay play button styles, set by 'video__play-button'
    vidButtonRef.current.classList.remove('is-playing');
  };
  const handleToggleVideo = () => (vidRef.current.paused ? handlePlay() : handlePause());
  return (
    <>
      {renderVideo({
        noControls,
        src,
        vidButtonRef,
        vidRef,
        handleToggleVideo,
      })}
    </>
  );
};

New2.propTypes = {
  noControls: PropTypes.bool,
  videoUrl: PropTypes.string,
};

export default New2;