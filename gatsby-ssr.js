import i18n from 'i18next';
import React from 'react';
import { I18nextProvider } from 'react-i18next';

import { LangProvider } from './src/utils/lang';

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
// const React = require('react');
// const config = require('./gatsby-config');

// exports.onRenderBody = ({ pathname, setHeadComponents }) => {
//   setHeadComponents([
//     <link rel="canonical" href={`${config.siteMetadata.siteUrl}${pathname}`} />,
//   ]);
// };

/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
export const wrapRootElement = ({ element }) => {
  return <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
}

/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
export const wrapPageElement = ({ element, props }) => {
  return <LangProvider value={props.pageContext}>{element}</LangProvider>
}
