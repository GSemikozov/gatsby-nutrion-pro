import React from 'react';

import { LocalizedLink } from '../localized-link';
import styles from './breadcrumbs.module.css';

export const Breadcrumbs = ({ children, ...rest }) => {
  return (
    <div className={styles.breadcrumbs} {...rest}>
      {children}
    </div>
  )
}

export const BreadcrumbsItem = ({ children, link }) => {
  return (
    <div className={styles.breadcrumbsItem}>
      <LocalizedLink to={link}>{children}</LocalizedLink>
    </div>
  )
}
