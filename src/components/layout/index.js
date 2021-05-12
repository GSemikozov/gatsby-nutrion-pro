import './layout.css';

import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import { withTrans } from '../../i18n/withTrans';
import { LangProvider } from '../../utils/lang';
import { Footer2 } from '../footer2';
import { Header2 } from '../header2';
import { PreHeader } from '../preheader';

// import { I18nextProvider } from 'react-i18next';
// import i18next from './i18next';
const Layout = ({ children, t, i18n, location, pageContext }) => {
  return (
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
            {/* <PreHeader /> */}
            {/* {pageContext.layout !== "special" && ( */}
            <Header2
              menuLinks={data.site.siteMetadata.menuLinks}
              isLight={true}
            />
            {/* )} */}
            <>
              <main>{children}</main>
              {/* {pageContext.layout !== "special" && ( */}
              <Footer2 />
              {/* )} */}
            </>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// export default withTrans(Layout)
