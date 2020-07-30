import React from 'react';

import styles from './calc.module.css';

export const RadioButton = props => {
  return (
    <div className={styles.radio}>
      <input
        id={props.id}
        onChange={props.changed}
        value={props.value}
        type="radio"
        checked={props.isSelected}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}
