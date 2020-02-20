import cx from 'classnames';
import React from 'react';

import styles from './button.module.css';

export const Button = ({
  type = "primary",
  buttonType = "button",
  className,
  handleClick,
  children,
}) =>
  type === "unstyled" ? (
    <button
      type={buttonType}
      className={cx(className, {
        [styles.unstyled]: type === "unstyled",
      })}
      onClick={handleClick}
    >
      {children}
    </button>
  ) : (
    <button
      type={buttonType}
      className={cx(
        styles.button,
        {
          [styles.primary]: type === "primary",
          [styles.outline]: type === "outline",
          [styles.secondary]: type === "secondary",
          [styles.tertiary]: type === "tertiary",
          [styles.white]: type === "white",
        },
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  )
