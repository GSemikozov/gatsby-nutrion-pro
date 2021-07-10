import React from 'react';

import styles from './review.module.css';

export const Review = ({ text }) => {
  return (
    <div className={styles.review}>
      <p className={styles.reviewText}>{text}</p>
    </div>
  )
}
