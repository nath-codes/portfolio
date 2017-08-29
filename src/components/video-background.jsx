import React from 'react';
import PropTypes from 'prop-types';

const Video = props => (
  <div>
    <div className="overlay overlay--hero" />
    <video
      className="video-background"
      src={props.src}
      autoPlay="true"
      loop="true"
      ref={(node) => {
        node.setAttribute('playsinline', '');
        node.setAttribute('muted', '');
      }}
    />
  </div>
);

Video.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Video;
