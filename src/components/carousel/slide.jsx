import React from 'react';
import PropTypes from 'prop-types';

const Slide = (props) => {
  const activeClass = (props.isActive) ? 'carousel__slide--is-active' : '';
  return (
    <div className={`carousel__slide ${activeClass}`}>
      <img src={props.src} alt="" />
    </div>
  );
};

Slide.propTypes = {
  src: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Slide;
