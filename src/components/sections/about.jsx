import React, { Component } from 'react';
import crossSvg from '../../cross.svg';

export default class About extends Component {
  render() {
    return (
      <section id="about" className="l-section l-section--about">
        <div className="l-container l-container--about flex">
          <article className="article">
            <h2 className="heading heading--alt">About</h2>
            <div className="copy copy--alt copy--frontend">
              <p>
                I’ve been developing websites professionally for nearly ten years.
                I love what I do and I have been lucky to work on a variety of projects,
                big to small, cool to ... not so cool.
              </p>
              <p>
                This website highlights some of my more recent work,
                as well as giving you a brief overview of what languages
                and frameworks I use when I’m developing.
              </p>
            </div>
          </article>
          <div
            className="wrapper wrapper--frontend-cross flex flex--centered"
            dangerouslySetInnerHTML={{ __html: crossSvg }}
          />
        </div>
      </section>
    );
  }
}
