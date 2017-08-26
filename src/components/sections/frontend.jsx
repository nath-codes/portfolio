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
            <div className="copy copy--alt copy--frontend">
              <p>
                My current frontend framework of choice is React,
                but I cut my teeth with vanilla javascript and frameworks,
                such as Backbone and Marionette.
              </p>
              <p>
                Styling is handled via SCSS, made scaleable with SCMACCS and BEM architecture.
                My current build tool is Webpack, but before that it was Gulp and Grunt.
              </p>

            </div>
          </article>
          <Carousel slides={slides} delay="2500" onTransition={this.handleTransition} />
        </div>
      </section>
    );
  }
}
