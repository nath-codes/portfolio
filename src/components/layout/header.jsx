import React, { Component } from 'react';
import Nav from '../nav';
import nav from '../../data/nav';
import menuSvg from '../../menu.svg';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      navToggled: false,
    };

    this.handleNavToggle = this.handleNavToggle.bind(this);
  }

  handleNavToggle() {
    this.setState({ navToggled: !this.state.navToggled });
  }

  render() {
    const isToggled = this.state.navToggled ? 'is-active' : '';

    return (
      <header className="l-header">
        <div className="l-container l-container--nav flex flex--right">
          <Nav items={nav} itemClass="nav__item--l" active={this.state.navToggled} />
          <div
            className={`nav__icon ${isToggled}`}
            onClick={this.handleNavToggle}
            dangerouslySetInnerHTML={{ __html: menuSvg }}
          />
        </div>
      </header>
    );
  }
}

export default Header;
