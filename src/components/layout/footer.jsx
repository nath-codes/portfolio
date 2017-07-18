import React, { Component } from 'react';

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      year: new Date().getFullYear(),
    };
  }

  render() {
    return (
      <footer>
        <div className="l-container">
          Lorem ipsum dolor sit amet {this.state.year}
        </div>
      </footer>
    );
  }
}
