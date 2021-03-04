import './layout.css';

import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import { Footer } from '../footer';
import { Header } from '../header';

const Layout = ({ children, t, i18n, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
              section
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <script
            src="//code.jivosite.com/widget.js"
            jv-id="TLJ5HRqinQ"
            async
          />
        </Helmet>
        <div className="wrapper" id="root">
          <Header menuLinks={data.site.siteMetadata.menuLinks} />
          <>
            <main>{children}</main>
            <Footer />
          </>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
