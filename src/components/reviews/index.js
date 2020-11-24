import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { Container } from '../container';
import img1 from './images/review1.png';
import img2 from './images/review2.png';
import img3 from './images/review3.png';
import img4 from './images/review4.jpg';
import img5 from './images/review5.jpg';
import styles from './reviews.module.css';

const ReviewsCarousel = () => {
  const settings = {
    arrows: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <Slider {...settings} className="reviews-carousel">
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
      <div className={styles.carouselItem}>
        <img src={img5} className={styles.carouselItemImg} alt="img" />
      </div>
    </Slider>
  )
}

export const Reviews = ({ id = "" }) => {
  const { t } = useTranslation()
  return (
    <section className={styles.reviewsSection} id={id}>
      <Container className={styles.container}>
        <h3 className="sectionTitle text-center">
          {t("general.reviews.title")}
        </h3>
        <ReviewsCarousel />
      </Container>
    </section>
  )
}
