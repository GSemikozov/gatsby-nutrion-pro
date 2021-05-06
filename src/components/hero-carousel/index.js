// import './carousel.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import cx from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { FoodCard } from './food-card';
import styles from './food-carousel.module.css';
import carouselControlImg1 from './images/obed-image.png';
import maskMobile from './mask-mob.svg';
import mask from './mask.svg';

export const HeroCarousel = () => {
  const { t } = useTranslation()

  const slidesData = [
    {
      img: "/images/F1-min.jpg",
      title: t("general.food.card1Title"),
      param1: "228",
      param2: "17g",
      param3: "33g",
      param4: "4g",
    },
    {
      img: "/images/F2-min.jpg",
      title: t("general.food.card2Title"),
      param1: "316",
      param2: "33g",
      param3: "21g",
      param4: "13g",
    },
    {
      img: "/images/F3-min.jpg",
      title: t("general.food.card3Title"),
      param1: "264",
      param2: "11g",
      param3: "21g",
      param4: "20g",
    },
    {
      img: "/images/F4-min.jpg",
      title: t("general.food.card4Title"),
      param1: "165",
      param2: "13g",
      param3: "9g",
      param4: "11g",
    },
    {
      img: "/images/F5-min.jpg",
      title: t("general.food.card5Title"),
      param1: "147",
      param2: "16g",
      param3: "12g",
      param4: "5g",
    },
    {
      img: "/images/F6-min.jpg",
      title: t("general.food.card6Title"),
      param1: "234",
      param2: "23g",
      param3: "25g",
      param4: "6g",
    },
  ]

  const slides = slidesData.map(item => (
    <div className={styles.carouselItem} key={item.title}>
      <FoodCard item={item} />
    </div>
  ))

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    fade: true,
    dotsClass: `slick-dots ${styles.carouselDots}`,
    // appendDots: dots => {
    //   return (
    //     <ul>
    //       {dots.map((item, index) => {
    //         return <li key={index}>{item.props.children}</li>
    //       })}
    //     </ul>
    //   )
    // },
    // customPaging: index => {
    //   return <button>{index + 1}</button>
    // },
  }
  return (
    slidesData !== null &&
    slidesData.length > 0 && (
      <div className={styles.carouselWrapper}>
        <img src={mask} className={styles.mask} alt="mask" />
        <img src={maskMobile} className={styles.maskMobile} alt="mask" />
        <Slider {...settings}>{slides}</Slider>
      </div>
    )
  )
}
