import React from 'react';
import Nav from '../nav';
import nav from '../../data/nav';
import menuSvg from '../../menu.svg';

export default () => (
  <header className="l-header">
    <div className="l-container">
      <Nav items={nav} />
      <div
        className="nav__icon"
        dangerouslySetInnerHTML={{ __html: menuSvg }}
      />
    </div>
  </header>
);
