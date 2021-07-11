import React from 'react';

import icon1 from './icons/1.svg';

import styles from './card.module.css';

export const ReviewCard = ({ text, name, date }) => {
  return (
  	<div className={styles.card}>
  	<div className={styles.cardHeader}>
  	<span className={styles.cardHeaderReviewName}>{name}</span>
  	<span className={styles.cardHeaderReviewDate}>{date}</span>
  	</div>
  	<p className={styles.cardBody}>{text}</p>
  	<div className={styles.cardFooter}>
  	<span className={styles.cardFooterRating}>
  	<img src={icon1} className={styles.icon} alt="icon" />
  	<img src={icon1} className={styles.icon} alt="icon" />
  	<img src={icon1} className={styles.icon} alt="icon" />
  	<img src={icon1} className={styles.icon} alt="icon" />
  	<img src={icon1} className={styles.icon} alt="icon" />
  	</span>
  	</div>
  	</div>
  )
}