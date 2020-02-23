import './layout.css';

import PropTypes from 'prop-types';
import React from 'react';

import { Footer } from '../footer';
import { Header } from '../header';

export const Layout = ({ children }) => (
  <div className="wrapper">
    <Header />
    <>
      <main>{children}</main>
      <Footer />
    </>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
