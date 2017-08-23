import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './layout/header';
import Main from './layout/main';
import '../styles/main.scss';

export default () => (
  <div>
    <Helmet>
      <title>Nath.codes | Portfolio</title>
      <meta
        name="description"
        content="The portfolio of Bristol web developer Nathan Tredgett."
      />
    </Helmet>
    <Header />
    <Main />
  </div>
);
