import cx from 'classnames';
import React from 'react';

import styles from './container.module.css';

export const Container = ({ children, className, isWide = false }) => (
  <div
    className={cx(
      styles.container,
      {
        [styles.wideContainer]: isWide,
      },
      className
    )}
  >
    {children}
  </div>
)
