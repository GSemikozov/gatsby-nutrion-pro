import './carousel.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { Button } from '../button';
import { Container } from '../container';
import { LocalizedLink } from '../localized-link';
import { FoodCard } from './food-card';
import styles from './food-carousel.module.css';

const FoodCardListItem = ({ text, title }) => (
  <li>
    <span className={styles.el}>{text}</span>
    <span className={styles.title}>{title}</span>
  </li>
)

const FoodCardList = ({ children }) => (
  <ul className={styles.foodCardList}>{children}</ul>
)

const FoodCarousel = () => {
  const { t } = useTranslation()

  const slidesData = [
    {
      img: "/images/food03.jpg",
      title: t("general.food.card1Title"),
      param1: "228",
      param2: "17g",
      param3: "33g",
      param4: "4g",
    },
    {
      img: "/images/food12.jpg",
      title: t("general.food.card2Title"),
      param1: "316",
      param2: "33g",
      param3: "21g",
      param4: "13g",
    },
    {
      img: "/images/food04.jpg",
      title: t("general.food.card3Title"),
      param1: "264",
      param2: "11g",
      param3: "21g",
      param4: "20g",
    },
    {
      img: "/images/food08.jpg",
      title: t("general.food.card4Title"),
      param1: "165",
      param2: "13g",
      param3: "9g",
      param4: "11g",
    },
    {
      img: "/images/food09.jpg",
      title: t("general.food.card5Title"),
      param1: "147",
      param2: "16g",
      param3: "12g",
      param4: "5g",
    },
    {
      img: "/images/food10.jpg",
      title: t("general.food.card6Title"),
      param1: "234",
      param2: "23g",
      param3: "25g",
      param4: "6g",
    },
    {
      img: "/images/food05.jpg",
      title: t("general.food.card7Title"),
      param1: "324",
      param2: "21g",
      param3: "39g",
      param4: "12g",
    },
    {
      img: "/images/food06.jpg",
      title: t("general.food.card8Title"),
      param1: "338",
      param2: "25g",
      param3: "28g",
      param4: "18g",
    },
    {
      img: "/images/food07.jpg",
      title: t("general.food.card9Title"),
      param1: "244",
      param2: "20g",
      param3: "20g",
      param4: "12g",
    },
    {
      img: "/images/food01.jpg",
      title: t("general.food.card10Title"),
      param1: "127",
      param2: "6g",
      param3: "5g",
      param4: "12g",
    },
    {
      img: "/images/food02.jpg",
      title: t("general.food.card11Title"),
      param1: "205",
      param2: "26g",
      param3: "6g",
      param4: "11g",
    },
    {
      img: "/images/food11.jpg",
      title: t("general.food.card12Title"),
      param1: "231",
      param2: "12g",
      param3: "23g",
      param4: "13g",
    },
  ]

  const slides = slidesData.map(item => (
    <div className={styles.carouselItem} key={item.title}>
      <FoodCard img={item.img} title={item.title}>
        <FoodCardList>
          <FoodCardListItem
            text={item.param1}
            title={t("general.food.cardInfoLabel1")}
          />
          <FoodCardListItem
            text={item.param2}
            title={t("general.food.cardInfoLabel2")}
          />
          <FoodCardListItem
            text={item.param3}
            title={t("general.food.cardInfoLabel3")}
          />
          <FoodCardListItem
            text={item.param4}
            title={t("general.food.cardInfoLabel4")}
          />
        </FoodCardList>
      </FoodCard>
    </div>
  ))

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    slidesData !== null &&
    slidesData.length > 0 && <Slider {...settings}>{slides}</Slider>
  )
}

export const FoodCarouselSection = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.foodCarouselSection} id="food">
      <Container>
        <h3 className="sectionTitle text-center">{t("general.food.title")}</h3>
        <FoodCarousel />
        <div className="text-center">
          <Button type="outline" size="lg" className={styles.outsideButton}>
            <LocalizedLink to="/ukazka-menu" style={{ padding: "14px 20px" }}>
              {t("general.food.CTA")}
            </LocalizedLink>
          </Button>
        </div>
      </Container>
    </section>
  )
}
