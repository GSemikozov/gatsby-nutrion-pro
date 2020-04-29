import './carousel.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import Slider from 'react-slick';

import { Container } from '../container';
import { FoodCard } from './food-card';
import styles from './food-carousel.module.css';
import img10 from './images/food1.jpg';
import img6 from './images/food10.jpg';
import img12 from './images/food11.jpg';
import img2 from './images/food12.jpg';
import img11 from './images/food2.jpg';
import img1 from './images/food3.jpg';
import img3 from './images/food4.jpg';
import img7 from './images/food5.jpg';
import img8 from './images/food6.jpg';
import img9 from './images/food7.jpg';
import img4 from './images/food8.jpg';
import img5 from './images/food9.jpg';

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
      <div className={styles.carouselItem} key="1">
        <FoodCard img={img1} title="Kureci nudlicky s fazolovymi lusky">
          <FoodCardList>
            <FoodCardListItem text="268" title="kcal" />
            <FoodCardListItem text="17g" title="sacharidy" />
            <FoodCardListItem text="33g" title="bílkoviny" />
            <FoodCardListItem text="4g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="2">
        <FoodCard img={img2} title="Wrap s lososem">
          <FoodCardList>
            <FoodCardListItem text="333" title="kcal" />
            <FoodCardListItem text="33g" title="sacharidy" />
            <FoodCardListItem text="21g" title="bílkoviny" />
            <FoodCardListItem text="13g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="3">
        <FoodCard img={img3} title="Meal">
          <FoodCardList>
            <FoodCardListItem text="514" title="kcal" />
            <FoodCardListItem text="43g" title="sacharidy" />
            <FoodCardListItem text="32g" title="bílkoviny" />
            <FoodCardListItem text="22g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="4">
        <FoodCard
          img={img4}
          title="Salat s roastbeefem
          a medovou zalivkou"
        >
          <FoodCardList>
            <FoodCardListItem text="186" title="kcal" />
            <FoodCardListItem text="13g" title="sacharidy" />
            <FoodCardListItem text="9g" title="bílkoviny" />
            <FoodCardListItem text="11g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="5">
        <FoodCard img={img5} title="Sendvic s krutim a kimchi omackou">
          <FoodCardList>
            <FoodCardListItem text="157" title="kcal" />
            <FoodCardListItem text="16g" title="sacharidy" />
            <FoodCardListItem text="12g" title="bílkoviny" />
            <FoodCardListItem text="5g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="6">
        <FoodCard
          img={img6}
          title="Sklenene nudle 
          s hovezim a zeleninou "
        >
          <FoodCardList>
            <FoodCardListItem text="244" title="kcal" />
            <FoodCardListItem text="23g" title="sacharidy" />
            <FoodCardListItem text="25g" title="bílkoviny" />
            <FoodCardListItem text="6g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="7">
        <FoodCard img={img7} title="Nakyp bramborovy s masem">
          <FoodCardList>
            <FoodCardListItem text="468" title="kcal" />
            <FoodCardListItem text="59g" title="sacharidy" />
            <FoodCardListItem text="31g" title="bílkoviny" />
            <FoodCardListItem text="12g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="8">
        <FoodCard img={img8} title="Okoun s Kari omackou se zelim">
          <FoodCardList>
            <FoodCardListItem text="305" title="kcal" />
            <FoodCardListItem text="18g" title="sacharidy" />
            <FoodCardListItem text="28g" title="bílkoviny" />
            <FoodCardListItem text="42g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="9">
        <FoodCard img={img9} title="Pohankove karbanatky s cockou">
          <FoodCardList>
            <FoodCardListItem text="298" title="kcal" />
            <FoodCardListItem text="20g" title="sacharidy" />
            <FoodCardListItem text="20g" title="bílkoviny" />
            <FoodCardListItem text="12g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="10">
        <FoodCard img={img10} title="Bonbon s orechem">
          <FoodCardList>
            <FoodCardListItem text="509" title="kcal" />
            <FoodCardListItem text="25g" title="sacharidy" />
            <FoodCardListItem text="20g" title="bílkoviny" />
            <FoodCardListItem text="48g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="11">
        <FoodCard img={img11} title="Jablecne-mrkvove vafle">
          <FoodCardList>
            <FoodCardListItem text="217" title="kcal" />
            <FoodCardListItem text="26g" title="sacharidy" />
            <FoodCardListItem text="6g" title="bílkoviny" />
            <FoodCardListItem text="11g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="12">
        <FoodCard img={img12} title="Tykvovy nakyp">
          <FoodCardList>
            <FoodCardListItem text="256" title="kcal" />
            <FoodCardListItem text="12g" title="sacharidy" />
            <FoodCardListItem text="23g" title="bílkoviny" />
            <FoodCardListItem text="13g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
    </Slider>
  )
}

const FoodCarouselMobile = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
        },
      },
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
      <div className={styles.carouselItem} key="1">
        <FoodCard img={img1} title="Kureci nudlicky s fazolovymi lusky">
          <FoodCardList>
            <FoodCardListItem text="268" title="kcal" />
            <FoodCardListItem text="17g" title="sacharidy" />
            <FoodCardListItem text="33g" title="bílkoviny" />
            <FoodCardListItem text="4g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="2">
        <FoodCard img={img2} title="Wrap s lososem">
          <FoodCardList>
            <FoodCardListItem text="333" title="kcal" />
            <FoodCardListItem text="33g" title="sacharidy" />
            <FoodCardListItem text="21g" title="bílkoviny" />
            <FoodCardListItem text="13g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="3">
        <FoodCard img={img3} title="Meal">
          <FoodCardList>
            <FoodCardListItem text="514" title="kcal" />
            <FoodCardListItem text="43g" title="sacharidy" />
            <FoodCardListItem text="32g" title="bílkoviny" />
            <FoodCardListItem text="22g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="4">
        <FoodCard
          img={img4}
          title="Salat s roastbeefem
          a medovou zalivkou"
        >
          <FoodCardList>
            <FoodCardListItem text="186" title="kcal" />
            <FoodCardListItem text="13g" title="sacharidy" />
            <FoodCardListItem text="9g" title="bílkoviny" />
            <FoodCardListItem text="11g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="5">
        <FoodCard img={img5} title="Sendvic s krutim a kimchi omackou">
          <FoodCardList>
            <FoodCardListItem text="157" title="kcal" />
            <FoodCardListItem text="16g" title="sacharidy" />
            <FoodCardListItem text="12g" title="bílkoviny" />
            <FoodCardListItem text="5g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="6">
        <FoodCard
          img={img6}
          title="Sklenene nudle 
          s hovezim a zeleninou "
        >
          <FoodCardList>
            <FoodCardListItem text="244" title="kcal" />
            <FoodCardListItem text="23g" title="sacharidy" />
            <FoodCardListItem text="25g" title="bílkoviny" />
            <FoodCardListItem text="6g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="7">
        <FoodCard img={img7} title="Nakyp bramborovy s masem">
          <FoodCardList>
            <FoodCardListItem text="468" title="kcal" />
            <FoodCardListItem text="59g" title="sacharidy" />
            <FoodCardListItem text="31g" title="bílkoviny" />
            <FoodCardListItem text="12g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="8">
        <FoodCard img={img8} title="Okoun s Kari omackou se zelim">
          <FoodCardList>
            <FoodCardListItem text="305" title="kcal" />
            <FoodCardListItem text="18g" title="sacharidy" />
            <FoodCardListItem text="28g" title="bílkoviny" />
            <FoodCardListItem text="42g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="9">
        <FoodCard img={img9} title="Pohankove karbanatky s cockou">
          <FoodCardList>
            <FoodCardListItem text="298" title="kcal" />
            <FoodCardListItem text="20g" title="sacharidy" />
            <FoodCardListItem text="20g" title="bílkoviny" />
            <FoodCardListItem text="12g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="10">
        <FoodCard img={img10} title="Bonbon s orechem">
          <FoodCardList>
            <FoodCardListItem text="509" title="kcal" />
            <FoodCardListItem text="25g" title="sacharidy" />
            <FoodCardListItem text="20g" title="bílkoviny" />
            <FoodCardListItem text="48g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="11">
        <FoodCard img={img11} title="Jablecne-mrkvove vafle">
          <FoodCardList>
            <FoodCardListItem text="217" title="kcal" />
            <FoodCardListItem text="26g" title="sacharidy" />
            <FoodCardListItem text="6g" title="bílkoviny" />
            <FoodCardListItem text="11g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="12">
        <FoodCard img={img12} title="Tykvovy nakyp">
          <FoodCardList>
            <FoodCardListItem text="256" title="kcal" />
            <FoodCardListItem text="12g" title="sacharidy" />
            <FoodCardListItem text="23g" title="bílkoviny" />
            <FoodCardListItem text="13g" title="tuky" />
          </FoodCardList>
        </FoodCard>
      </div>
    </Slider>
  )
}

export const FoodCarouselSection = () => (
  <section className={styles.foodCarouselSection} id="food">
    <Container>
      <h3 className="sectionTitle text-center">Jaká jídla tě s námi čekají?</h3>
      <BrowserView>
        <FoodCarousel />
      </BrowserView>
      <MobileView>
        <FoodCarouselMobile />
      </MobileView>
    </Container>
  </section>
)
