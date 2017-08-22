import React, { Component } from 'react';
import Social from '../social';

export default class Contact extends Component {
  render() {
    return (
      <section id="contact" className="l-section l-section--contact">
        <div className="l-container flex flex--centered">
          <article className="article article--centered flex flex--column">
            <h2 className="heading">Contact</h2>
            <div className="copy copy--contact">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore odit quam enim consequatur deleniti animi sunt.
                Voluptatibus eaque dignissimos ex tempora expedita, ab reprehenderit quas!
              </p>
            </div>
            <a href="mailto:hello@nath.codes" className="link link--contact">hello@nath.codes</a>
            <Social />
          </article>
        </div>
      </section>
    );
  }
}
