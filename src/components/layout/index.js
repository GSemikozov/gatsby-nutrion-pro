import './layout.css';

import PropTypes from 'prop-types';
import React from 'react';

import { Header } from '../header';

export const Layout = ({ children }) => (
  <>
    <Header />
    <>
      <main>{children}</main>
      {/* footer */}
    </>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
