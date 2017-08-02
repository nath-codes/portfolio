import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from './slide';

class Carousel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.transition();
    }, this.props.delay);
  }

  transition() {
    const currentSlide = this.state.currentSlide;
    const totalSlides = this.props.slides.length;

    const nextSlide = ((currentSlide + 1) === totalSlides) ? 0 : currentSlide + 1;
    this.setState({ currentSlide: nextSlide });
  }

  render() {
    const slides = this.props.slides.map((slide, index) =>
      <Slide isActive={index === this.state.currentSlide} src={slide} key={slide} />,
    );

    return (
      <div className="carousel">
        {slides}
      </div>
    );
  }

}

Carousel.propTypes = {
  delay: PropTypes.string.isRequired,
  slides: PropTypes.object.isRequired,
};

export default Carousel;
