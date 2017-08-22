import React from 'react';
import Nav from '../nav';
import nav from '../../data/nav';

export default () => (
  <header className="l-header">
    <Nav items={nav} />
  </header>
);
