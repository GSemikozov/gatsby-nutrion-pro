import PropTypes from 'prop-types';
import React from 'react';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w, d, s, h, id) {
              w.roistatProjectId = id; w.roistatHost = h;
              var p = d.location.protocol == "https:" ? "https://" : "http://";
              var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init";
              var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
          })(window, document, 'script', 'cloud.roistat.com', '5ab3e816589c8e79e08e948e2d6e4313');
                `,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          let urlString = document.location.href
          let url = new URL(urlString)
          let UTM_SOURCE = url.searchParams.get("utm_source")
          let UTM_MEDIUM = url.searchParams.get("utm_medium")
          let UTM_CAMPAIGN = url.searchParams.get("utm_campaign")
          let UTM_TERM = url.searchParams.get("utm_term")
          let UTM_CONTENT = url.searchParams.get("utm_content")
          let UTMS = {
            source: UTM_SOURCE,
            medium: UTM_MEDIUM,
            campaign: UTM_CAMPAIGN,
            term: UTM_TERM,
            content: UTM_CONTENT
          }
          if (UTM_SOURCE !== null) {
            localStorage.setItem('UTM', JSON.stringify(UTMS));
          }
          `,
        }}
      />
      <script
        data-skip-moving="true"
        dangerouslySetInnerHTML={{
          __html: `
                    (function(w,d,u,b){w['Bitrix24FormObject']=b;w[b] = w[b] || function(){arguments[0].ref=u;
                        (w[b].forms=w[b].forms||[]).push(arguments[0])};
                        if(w[b]['forms']) return;
                        var s=d.createElement('script');s.async=1;s.src=u+'?'+(1*new Date());
                        var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
                    })(window,document,'https://nutritionprocz.bitrix24.eu/bitrix/js/crm/form_loader.js','b24form');
                    b24form({"id":"8","lang":"ru","sec":"51r8oh","type":"inline"});
                `,
        }}
      />
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
