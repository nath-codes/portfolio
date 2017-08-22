import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {

  getItems() {
    return this.props.items.map(item => <a href={item.href} className="nav__item">{item.title}</a>);
  }

  render() {
    const items = this.getItems();
    return (

      <nav>{items}</nav>
    );
  }
}

Nav.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Nav;
