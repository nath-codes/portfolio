import React, { Component } from 'react';
import Carousel from '../carousel/carousel';
import slides from '../../data/frontend-carousel';

export default class Frontend extends Component {
  constructor() {
    super();

    this.state = {
      backgroundClass: '',
    }

    this.handleTransition = this.handleTransition.bind(this);
  }

  handleTransition(backgroundClass) {
    this.setState({ backgroundClass });
  }

  render() {
    const background = this.state.backgroundClass;

    return (
      <section className={`l-section l-section--frontend ${background ? `l-section--${background}` : ''}`}>
        <div className="l-container">
          <div className="l-section__inner">
            <h2 className="heading heading--alt">Frontend</h2>
            <div className="copy copy--alt">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore odit quam enim consequatur deleniti animi sunt.
                Voluptatibus eaque dignissimos ex tempora expedita, ab reprehenderit quas!
              </p>
            </div>
          </div>
          <Carousel slides={slides} delay="2000" onTransition={this.handleTransition} />
        </div>
      </section>
    );
  }
}
