import './layout.css';

import { StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

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
        <Helmet>
          <script
            src="//code.jivosite.com/widget.js"
            jv-id="TLJ5HRqinQ"
            async
          />
          <script type="text/javascript">
            {`(function(w, d, s, h, id) {
              w.roistatProjectId = id;
              w.roistatHost = h;
              var p = d.location.protocol == "https:" ? "https://" : "http://";
              var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init";
              var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
          })(window, document, 'script', 'cloud.roistat.com', '5ab3e816589c8e79e08e948e2d6e4313');`}
          </script>
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
