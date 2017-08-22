import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {

  getItems() {
    return this.props.items.map(item => (
      <a
        href={item.href}
        className={`link nav__item ${this.props.itemClass}`}
      >
        {item.title}
      </a>
    ));
  }

  render() {
    const items = this.getItems();
    return (

      <nav className="nav">{items}</nav>
    );
  }
}

Nav.propTypes = {
  items: PropTypes.array.isRequired,
  itemClass: PropTypes.string,
};

Nav.defaultProps = {
  itemClass: '',
};

export default Nav;
