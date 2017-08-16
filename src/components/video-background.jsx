import React from 'react';
import PropTypes from 'prop-types';

const Video = props => (
  <div>
    <video
      className="video-background"
      src={props.src}
      autoPlay={props.autoPlay}
      loop={props.loop}
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
