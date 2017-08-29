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
                I have used many PHP frameworks over the years including Laravel, Zend,
                even going back to Codeigniter.
              </p>
              <p>
                For CMSs, I’ve built more Wordpress sites then I would care to mention,
                but I&#39;ve also used Drupal and Expression Engine in previous projects.
              </p>
            </div>
          </article>
        </div>
      </section>
    );
  }
}
