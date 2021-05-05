import React from 'react';

import styles from './food-card.module.css';

export const FoodCard = ({ img, title, children }) => (
  <div className={styles.foodCard}>
    <div className={styles.foodCardTop}>
      <img src={img} className={styles.foodCardImg} alt="img" />
    </div>
    <div className={styles.foodCardBody}>
      <h5 className={styles.foodCardTitle}>{title}</h5>
      <div>{children}</div>
    </div>
  </div>
)
