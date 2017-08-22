import React, { Component } from 'react';
import VideoBackground from '../video-background';

export default class Hero extends Component {
  render() {
    return (
      <section className="l-section  l-section--hero hero">
        <VideoBackground
          src="https://s3-eu-west-1.amazonaws.com/nath-codes/hero.webm"
          autoPlay
          loop
        />
        <div className="l-container l-container--hero l-container--left">
          <div className="l-section__inner l-section__inner--hero">
            <div className="heading heading--hero" style={{color: 'white'}}>
              Hi, I&#39;m Nathan.<br />
              I&#39;m a web developer <br />
              from Bristol.
            </div>
          </div>
        </div>
      </section>
    );
  }
}
