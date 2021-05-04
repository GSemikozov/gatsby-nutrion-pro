import cx from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { AnimatedWrapper } from '../animated-wrapper';
import { Container } from '../container';
import img1 from './images/review1.svg';
import img2 from './images/review2.svg';
import img3 from './images/review3.svg';
import img4 from './images/review4.svg';
import styles from './reviews.module.css';

// import img5 from './images/review5.jpg';
const ReviewsCarousel = () => {
  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  }
  return (
    <Slider
      {...settings}
      className={cx("reviews-carousel", styles.carouselList)}
    >
      <div className={styles.carouselItem}>
        <img src={img4} className={styles.carouselItemImg} alt="img" />
      </div>
      <div className={styles.carouselItem}>
        <img src={img1} className={styles.carouselItemImg} alt="img" />
      </div>
      <div className={styles.carouselItem}>
        <img src={img2} className={styles.carouselItemImg} alt="img" />
      </div>
      <div className={styles.carouselItem}>
        <img src={img3} className={styles.carouselItemImg} alt="img" />
      </div>
      {/* <div className={styles.carouselItem}>
        <img src={img5} className={styles.carouselItemImg} alt="img" />
      </div> */}
    </Slider>
  )
}

export const Reviews2 = ({ id = "" }) => {
  const { t } = useTranslation()
  return (
    <section className={styles.section} id={id}>
      <Container isWide={true} className={styles.container}>
        <AnimatedWrapper>
          <h3 className="fancyUnderlineText sectionTitleNew text-center">
            {/* {t("general.reviews.title")} */}
            Co <span>o nás říkají</span> naši zákazníci?
          </h3>
          <ReviewsCarousel />
        </AnimatedWrapper>
      </Container>
    </section>
  )
}
