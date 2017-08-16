import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from './slide';

class Carousel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.transition();
    }, this.props.delay);
  }

  transition() {
    const totalSlides = this.props.slides.length;
    const currentIndex = this.state.currentIndex;
    const nextIndex = ((currentIndex + 1) === totalSlides) ? 0 : currentIndex + 1;

    this.setState({ currentIndex: nextIndex });
  }

  render() {
    const slides = this.props.slides.map((slide, index) =>
      <Slide isActive={index === this.state.currentIndex} src={slide.src} key={slide.id} />,
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
  slides: PropTypes.array.isRequired,
};

export default Carousel;
