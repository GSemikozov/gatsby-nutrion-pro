import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import React from 'react';

import { useLangContext } from '../../utils/lang';

export const LocalizedLink = ({
  to,
  ref,
  children,
  onClick,
  className,
  ...rest
}) => {
  const { lang } = useLangContext()

  // return (
  //   <GatsbyLink {...rest} to={`/${lang}${to}`} className={className}>
  //     {children}
  //   </GatsbyLink>
  // )
  return (
    <a
      href={lang === "cz" ? `${to}` : `/${lang}${to}`}
      // href={`/${lang}${to}`}
      onClick={onClick}
      className={className}
      {...rest}
    >
      {children}
    </a>
  )
}
