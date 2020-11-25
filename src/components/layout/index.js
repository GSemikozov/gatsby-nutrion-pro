import './layout.css';

import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import { withTrans } from '../../i18n/withTrans';
import { LangProvider } from '../../utils/lang';
import { Footer } from '../footer';
import { Header } from '../header';
import { PreHeader } from '../preheader';

const Layout = ({ children, t, i18n }) => (
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
      <LangProvider>
        <Helmet>
          <script
            src="//code.jivosite.com/widget.js"
            jv-id="TLJ5HRqinQ"
            async
          />
        </Helmet>
        <div className="wrapper" id="root">
          {/* <PreHeader /> */}
          <Header menuLinks={data.site.siteMetadata.menuLinks} />
          <>
            <main>{children}</main>
            <Footer />
          </>
        </div>
      </LangProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTrans(Layout)
