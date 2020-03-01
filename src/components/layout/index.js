import './layout.css';

import { StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Footer } from '../footer';
import { Header } from '../header';

export const Layout = ({ children }) => (
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
        {/* <Helmet
          title={"title"}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        ></Helmet> */}
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
