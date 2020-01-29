import cx from 'classnames';
import React from 'react';

import styles from './button.module.css';

export const Button = ({ type = "primary", className, children }) => (
  <button
    type="button"
    className={cx(styles.button, className, {
      [styles.primary]: type === "primary",
      [styles.outline]: type === "outline",
      [styles.secondary]: type === "secondary",
    })}
  >
    {children}
  </button>
)
