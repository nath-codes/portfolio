import React from 'react';
import PropTypes from 'prop-types';

const Video = props => (
  <div>
    <div className="overlay overlay--hero" />
    <video
      className="video-background"
      src={props.src}
      autoPlay={props.autoPlay}
      loop={props.loop}
      ref={node => node && node.setAttribute('playsinline', '')}
    />
  </div>
);

Video.propTypes = {
  src: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
};

Video.defaultProps = {
  autoPlay: false,
  loop: false,
};

export default Video;
