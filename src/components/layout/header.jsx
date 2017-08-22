import React from 'react';
import Nav from '../nav';
import nav from '../../data/nav';

export default () => (
  <header className="l-header">
    <div className="l-container">
      <Nav items={nav} />
    </div>
  </header>
);
