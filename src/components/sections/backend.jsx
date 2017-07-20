import React, { Component } from 'react';
import Particles from 'react-particles-js';

export default class Backend extends Component {
  render() {
    return (
      <section className="l-section l-section--backend">
        <div className="particles">
          <Particles />
        </div>
        <div className="l-container l-container--right">
          <div className="l-section__inner">
            <h2 className="heading heading--alt">Backend</h2>
            <div className="copy copy--alt">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore odit quam enim consequatur deleniti animi sunt.
                Voluptatibus eaque dignissimos ex tempora expedita, ab reprehenderit quas!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
