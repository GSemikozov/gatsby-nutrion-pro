import React from 'react';
import Slider from 'react-slick';

import { Container } from '../container';
import imgD from './images/3.png';
import img1 from './images/review1.png';
import img2 from './images/review2.png';
import img3 from './images/review3.png';
import styles from './reviews.module.css';

const ReviewsCarousel = () => {
  const settings = {
    arrows: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <Slider {...settings} className="reviews-carousel">
      <div className={styles.carouselItem}>
        <img src={imgD} className={styles.carouselItemImg} alt="img" />
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
    </Slider>
  )
}

export const Reviews = () => (
  <section className={styles.reviewsSection}>
    <Container className={styles.container}>
      <h3 className="sectionTitle text-center">Jaká jídla tě s námi čekají?</h3>
      <ReviewsCarousel />
    </Container>
  </section>
)
