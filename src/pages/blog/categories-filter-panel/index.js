import cx from 'classnames';
import React from 'react';

import { Button2 } from '../../../components/button2';
import styles from './categories-filter-panel.module.css';

const FilterBtn = ({ text, isActive }) => (
  <button
    type="button"
    className={cx(styles.filterButton, { [styles.active]: isActive })}
  >
    <svg
      width="17"
      height="21"
      viewBox="0 0 17 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M9.35078 6.125C9.80165 6.125 10.2341 6.30937 10.5529 6.63756C10.8717 6.96575 11.0508 7.41087 11.0508 7.875V18.375L6.80078 15.75L2.55078 18.375V7.875C2.55078 7.41087 2.72989 6.96575 3.0487 6.63756C3.36751 6.30937 3.79991 6.125 4.25078 6.125H9.35078Z"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.17578 3.5C6.3252 3.23359 6.5402 3.01243 6.79911 2.85881C7.05802 2.70519 7.35169 2.62455 7.65053 2.625H12.7505C13.2014 2.625 13.6338 2.80938 13.9526 3.13756C14.2714 3.46575 14.4505 3.91087 14.4505 4.375V14.875L13.6005 14.35"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="17" height="21" fill="white" />
        </clipPath>
      </defs>
    </svg>
    {text}
  </button>
)

export const CategoriesFilterPanel = () => {
  return (
    <div className={styles.filterPanel}>
      <nav>
        <b>Kategorie:</b>
        <FilterBtn text="Všechno" />
        <FilterBtn text="Recepty" />
        <FilterBtn text="Výzkum" />
        <FilterBtn text="Tipy" />
      </nav>
    </div>
  )
}
