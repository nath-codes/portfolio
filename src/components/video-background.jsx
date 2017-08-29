import React from 'react';
import PropTypes from 'prop-types';

const Video = props => (
  <div>
    <div className="overlay overlay--hero" />
    <video
      className="video-background"
      src={props.src}
      ref={node => node && node.setAttribute('playsinline', '')}
      autoPlay="true"
      loop="true"
    />
  </div>
);

Video.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Video;
