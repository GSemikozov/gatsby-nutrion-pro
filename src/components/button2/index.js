import cx from 'classnames';
import React from 'react';

import styles from './button.module.css';

export const Button2 = ({
  children,
  size,
  hasShadow = true,
  isBlock,
  color,
  handleClick,
  disabled = false,
  className,
  buttonType = "button",
  ...rest
}) => {
  return (
    <button
      type={buttonType}
      className={cx(
        styles.button,
        {
          [styles.buttomSm]: size === "sm",
          [styles.noShadow]: !hasShadow,
          [styles.buttonBlock]: isBlock,
          [styles.buttonPrimary]: color === "primary",
          [styles.buttonSecondary]: color === "secondary",
        },
        className
      )}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
