import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {

  getItems() {
    return this.props.items.map(item => (
      <a
        href={item.href}
        key={item.title}
        className={`link nav__item ${this.props.itemClass}`}
      >
        {item.title}
      </a>
    ));
  }

  render() {
    const isActive = this.props.active ? 'is-active' : '';
    const items = this.getItems();

    return (
      <nav className={`nav ${isActive}`}>{items}</nav>
    );
  }
}

Nav.propTypes = {
  active: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  itemClass: PropTypes.string,
};

Nav.defaultProps = {
  itemClass: '',
};

export default Nav;
