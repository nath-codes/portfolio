import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';
import '../styles/main.scss';

export default () => (
  <div>
    <Helmet>
      <title>nath.codes</title>
      <meta
        name="description"
        content=" The portfolio of web developer Nathan Tredgett."
      />
    </Helmet>
    <Header />
    <Main />
    <Footer />
  </div>
);
