import React, { Component } from 'react';
import Social from '../social';

export default class Contact extends Component {
  render() {
    return (
      <section id="contact" className="l-section l-section--contact">
        <div className="l-container flex flex--centered">
          <article className="article article--centered flex flex--column">
            <h2 className="heading">Contact</h2>
            <div className="copy">
              <p>
                I&#39;m available for contract work in Bristol,
                London and the South-West of the UK.
              </p>
              <p>
                If you would like to together on a project,
                click the button below and drop me a message.
              </p>
            </div>

            <a href="mailto:hello@nath.codes" className="button button--contact">Say hello</a>
            <Social />
          </article>
        </div>
      </section>
    );
  }
}
