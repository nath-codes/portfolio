import React, { Component } from 'react';
import Social from '../social';

export default class Contact extends Component {
  render() {
    return (
      <section className="l-section l-section--contact">
        <div className="l-container l-container--center">
          <div className="l-section__inner l-section__inner--center">
            <h2 className="heading">Contact</h2>
            <div className="copy copy--contact">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore odit quam enim consequatur deleniti animi sunt.
                Voluptatibus eaque dignissimos ex tempora expedita, ab reprehenderit quas!
              </p>

              <p>
                <a href="mailto:hello@nath.codes" className="link link--contact">hello@nath.codes</a>
              </p>
            </div>
            <Social />
          </div>
        </div>
      </section>
    );
  }
}
