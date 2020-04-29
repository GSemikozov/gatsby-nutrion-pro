import './carousel.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import Slider from 'react-slick';

import { Container } from '../container';
import { FoodCard } from './food-card';
import styles from './food-carousel.module.css';
import img10 from './images/food01.jpg';
import img11 from './images/food02.jpg';
import img1 from './images/food03.jpg';
import img3 from './images/food04.jpg';
import img7 from './images/food05.jpg';
import img8 from './images/food06.jpg';
import img9 from './images/food07.jpg';
import img4 from './images/food08.jpg';
import img5 from './images/food09.jpg';
import img6 from './images/food10.jpg';
import img12 from './images/food11.jpg';
import img2 from './images/food12.jpg';

const FoodCardListItem = ({ text, title }) => (
  <li>
    <span className={styles.el}>{text}</span>
    <span className={styles.title}>{title}</span>
  </li>
)

const FoodCardList = ({ children }) => (
  <ul className={styles.foodCardList}>{children}</ul>
)

const slidesData = [
  {
    img: img1,
    title: "1",
    param1: "param1",
    param2: "param2",
    param3: "param3",
    param4: "param4",
  },
  {
    img: img2,
    title: "2",
    param1: "param1",
    param2: "param2",
    param3: "param3",
    param4: "param4",
  },
  {
    img: img3,
    title: "3",
    param1: "param1",
    param2: "param2",
    param3: "param3",
    param4: "param4",
  },
  {
    img: img4,
    title: "4",
    param1: "param1",
    param2: "param2",
    param3: "param3",
    param4: "param4",
  },
  {
    img: img5,
    title: "5",
    param1: "param1",
    param2: "param2",
    param3: "param3",
    param4: "param4",
  },
  {
    img: img6,
    title: "6",
    param1: "param1",
    param2: "param2",
    param3: "param3",
    param4: "param4",
  },
  {
    img: img7,
    title: "7",
    param1: "param1",
    param2: "param2",
    param3: "param3",
    param4: "param4",
  },
  {
    img: img8,
    title: "8",
    param1: "param1",
    param2: "param2",
    param3: "param3",
    param4: "param4",
  },
  {
    img: img9,
    title: "9",
    param1: "param1",
    param2: "param2",
    param3: "param3",
    param4: "param4",
  },
  {
    img: img10,
    title: "10",
    param1: "param1",
    param2: "param2",
    param3: "param3",
    param4: "param4",
  },
  {
    img: img11,
    title: "11",
    param1: "param1",
    param2: "param2",
    param3: "param3",
    param4: "param4",
  },
  {
    img: img12,
    title: "12",
    param1: "param1",
    param2: "param2",
    param3: "param3",
    param4: "param4",
  },
]

const FoodCarousel = ({ slidesData }) => {
  const slides = slidesData.map(item => (
    <FoodCard img={item.img} title={item.title}>
      <FoodCardList>
        <FoodCardListItem text={item.param1} title="kcal" />
        <FoodCardListItem text={item.param2} title="sacharidy" />
        <FoodCardListItem text={item.param3} title="bílkoviny" />
        <FoodCardListItem text={item.param4} title="tuky" />
      </FoodCardList>
    </FoodCard>
  ))

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
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
    slidesData !== null &&
    slidesData.length > 0 && <Slider {...settings}>{slides}</Slider>
  )
}

const FoodCarouselMobile = ({ slidesData }) => {
  console.log("slides", slidesData)
  const slides = slidesData.slice(0, 5).map(item => (
    <FoodCard img={item.img} title={item.title}>
      {console.log("item", item)}
      <FoodCardList>
        <FoodCardListItem text={item.param1} title="kcal" />
        <FoodCardListItem text={item.param2} title="sacharidy" />
        <FoodCardListItem text={item.param3} title="bílkoviny" />
        <FoodCardListItem text={item.param4} title="tuky" />
      </FoodCardList>
    </FoodCard>
  ))

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  }
  return (
    slidesData !== null &&
    slidesData.length > 0 && <Slider {...settings}>{slides}</Slider>
  )
}

export const FoodCarouselSection = () => (
  <section className={styles.foodCarouselSection} id="food">
    <Container>
      <h3 className="sectionTitle text-center">Jaká jídla tě s námi čekají?</h3>
      {/* <FoodCarousel slidesData={slidesData} /> */}
      <BrowserView>
        <FoodCarousel slidesData={slidesData} />
      </BrowserView>
      <MobileView>
        <FoodCarouselMobile slidesData={slidesData} />
      </MobileView>
    </Container>
  </section>
)
