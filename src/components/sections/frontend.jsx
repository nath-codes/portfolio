import React, { Component } from 'react';
import Carousel from '../carousel/carousel';
import slides from '../../data/frontend-carousel';

export default class Frontend extends Component {
  constructor() {
    super();

    this.state = {
      backgroundClass: 'react',
    };

    this.handleTransition = this.handleTransition.bind(this);
  }

  handleTransition(backgroundClass) {
    this.setState({ backgroundClass });
  }

  render() {
    const background = this.state.backgroundClass;

    return (
      <section id="frontend" className={`l-section l-section--frontend l-section--${background}`}>
        <div className="l-container l-container--frontend flex flex--between">
          <article className="article">
            <h2 className="heading heading--alt">Frontend</h2>
            <div className="copy copy--alt">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore odit quam enim consequatur deleniti animi sunt.
                Voluptatibus eaque dignissimos ex tempora expedita, ab reprehenderit quas!
              </p>
            </div>
          </article>
          <Carousel slides={slides} delay="2500" onTransition={this.handleTransition} />
        </div>
      </section>
    );
  }
}
