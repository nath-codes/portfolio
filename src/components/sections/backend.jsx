import React, { Component } from 'react';
import Particles from 'react-particles-js';

export default class Backend extends Component {
  render() {
    return (
      <section id="backend" className="l-section l-section--backend">
        <div className="particles">
          <Particles />
        </div>
        <div className="l-container flex flex--right">
          <article className="article flex flex--column">
            <h2 className="heading heading--alt heading--backend">Backend</h2>
            <div className="copy copy--alt">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore odit quam enim consequatur deleniti animi sunt.
                Voluptatibus eaque dignissimos ex tempora expedita, ab reprehenderit quas!
              </p>
            </div>
          </article>
        </div>
      </section>
    );
  }
}
