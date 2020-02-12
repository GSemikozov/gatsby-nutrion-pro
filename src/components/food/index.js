import './food-carousel.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import React from 'react';
import Slider from 'react-slick';

import { Container } from '../container';
import { FoodCard } from './food-card';
import styles from './food-carousel.module.css';
import img1 from './images/food1.png';
import img2 from './images/food2.png';
import img3 from './images/food3.png';
import img4 from './images/food4.png';
import img5 from './images/food5.png';

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
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      <div className={styles.carouselItem}>
        <FoodCard
          img={img1}
          title="Celozrná palačinka s jahodovou omáčkou a tvarohem"
        >
          <FoodCardList>
            <FoodCardListItem text="375" title="kcal" />
            <FoodCardListItem text="45g" title="sacharidy" />
            <FoodCardListItem text="25g" title="bílkoviny" />
            <FoodCardListItem text="10g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem}>
        <FoodCard
          img={img2}
          title="Quinoa salát s krevetami a citrónovou zálivkou"
        >
          <FoodCardList>
            <FoodCardListItem text="371" title="kcal" />
            <FoodCardListItem text="38g" title="sacharidy" />
            <FoodCardListItem text="23g" title="bílkoviny" />
            <FoodCardListItem text="13g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem}>
        <FoodCard
          img={img3}
          title="Špenátové lasagne s kuřecím masem a mozzarellou"
        >
          <FoodCardList>
            <FoodCardListItem text="514" title="kcal" />
            <FoodCardListItem text="43g" title="sacharidy" />
            <FoodCardListItem text="32g" title="bílkoviny" />
            <FoodCardListItem text="22g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem}>
        <FoodCard
          img={img4}
          title="Chilli con carne s tortillou a zakysanou smetanou"
        >
          <FoodCardList>
            <FoodCardListItem text="307" title="kcal" />
            <FoodCardListItem text="30g" title="sacharidy" />
            <FoodCardListItem text="14g" title="bílkoviny" />
            <FoodCardListItem text="13g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem}>
        <FoodCard
          img={img5}
          title="Burrito se salátem pico de gallo a zakysanou smetanou"
        >
          <FoodCardList>
            <FoodCardListItem text="348" title="kcal" />
            <FoodCardListItem text="33g" title="sacharidy" />
            <FoodCardListItem text="19g" title="bílkoviny" />
            <FoodCardListItem text="13g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
    </Slider>
  )
}

export const FoodCarouselSection = () => (
  <section className={styles.foodCarouselSection}>
    <Container>
      <h3 className="sectionTitle text-center">Jaká jídla tě s námi čekají?</h3>
      <FoodCarousel />
    </Container>
  </section>
)
