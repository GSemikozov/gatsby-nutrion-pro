import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './food-card.module.css';

const FoodCardListItem = ({ text, title }) => (
  <li>
    <span className={styles.el}>{text}</span>
    <span className={styles.title}>{title}</span>
  </li>
)

const FoodCardList = ({ children }) => (
  <ul className={styles.foodCardList}>{children}</ul>
)

export const FoodCard = ({ item }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.foodCard}>
      <div className={styles.foodCardTop}>
        <img src={item.img} className={styles.foodCardImg} alt={item.title} />
      </div>
      <div className={styles.foodCardBody}>
        <FoodCardList>
          <FoodCardListItem
            text={item.param1}
            title={t("general.food2.cardInfoLabel1")}
          />
          <FoodCardListItem
            text={item.param2}
            title={t("general.food2.cardInfoLabel2")}
          />
          <FoodCardListItem
            text={item.param3}
            title={t("general.food2.cardInfoLabel3")}
          />
          <FoodCardListItem
            text={item.param4}
            title={t("general.food2.cardInfoLabel4")}
          />
        </FoodCardList>
      </div>
    </div>
  )
}
