import cx from 'classnames';
import React from 'react';

import styles from './button.module.css';

export const Button = ({
  type = "primary",
  buttonType,
  className,
  handleClick,
  children,
  disabled = false,
}) =>
  type === "unstyled" ? (
    <button
      type={buttonType || "button"}
      className={cx(className, {
        [styles.unstyled]: type === "unstyled",
      })}
      onClick={handleClick}
      disabled={disabled}
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
      disabled={disabled}
    >
      {children}
    </button>
  )
