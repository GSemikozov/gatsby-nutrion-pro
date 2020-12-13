import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import React from 'react';

import { useLangContext } from '../../utils/lang';

export const LocalizedLink = ({ to, ref, children, onClick, ...rest }) => {
  const { lang } = useLangContext()

  // return <GatsbyLink {...rest} to={`/${lang}${to}`} />
  return (
    <a href={`/${lang}${to}`} {...rest} onClick={onClick}>
      {children}
    </a>
  )
}
