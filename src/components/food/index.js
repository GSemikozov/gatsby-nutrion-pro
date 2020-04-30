import './carousel.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import React from 'react';
import Slider from 'react-slick';

import { Container } from '../container';
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

const slidesData = [
  {
    img: "/images/food03.jpg",
    title: "Kuřecí nudličky v zeleninové omáčce s fazolovými lusky",
    param1: "228",
    param2: "17g",
    param3: "33g",
    param4: "4g",
  },
  {
    img: "/images/food12.jpg",
    title: "Lososový wrap",
    param1: "316",
    param2: "33g",
    param3: "21g",
    param4: "13g",
  },
  {
    img: "/images/food04.jpg",
    title: "Salát s hovězím masem po korejsku",
    param1: "264",
    param2: "11g",
    param3: "21g",
    param4: "20g",
  },
  {
    img: "/images/food08.jpg",
    title: "Salát s pečeným roastbeefem, medovou zálivkou a tapenádou z oliv",
    param1: "165",
    param2: "13g",
    param3: "9g",
    param4: "11g",
  },
  {
    img: "/images/food09.jpg",
    title: "Sendvič s krůtím masem, zeleninou a kimchi omáčkou",
    param1: "147",
    param2: "16g",
    param3: "12g",
    param4: "5g",
  },
  {
    img: "/images/food10.jpg",
    title: "Hovězí maso s rýžovými nudlemi, zeleninou a thajskou zálivkou",
    param1: "234",
    param2: "23g",
    param3: "25g",
    param4: "6g",
  },
  {
    img: "/images/food05.jpg",
    title: "Bramborový nákyp s mletým hovězím masem",
    param1: "324",
    param2: "21g",
    param3: "39g",
    param4: "12g",
  },
  {
    img: "/images/food06.jpg",
    title: "Okoun se smaženým zelím a kari omáčkou",
    param1: "338",
    param2: "25g",
    param3: "28g",
    param4: "18g",
  },
  {
    img: "/images/food07.jpg",
    title: "Pohankové karbanátky s čočkou",
    param1: "244",
    param2: "20g",
    param3: "20g",
    param4: "12g",
  },
  {
    img: "/images/food01.jpg",
    title: "Bonbón s ořechem",
    param1: "127",
    param2: "6g",
    param3: "5g",
    param4: "12g",
  },
  {
    img: "/images/food02.jpg",
    title: "Jablečně-mrkvové vafle s krémem",
    param1: "205",
    param2: "26g",
    param3: "6g",
    param4: "11g",
  },
  {
    img: "/images/food11.jpg",
    title: "Tykvový nákyp se smetanou",
    param1: "231",
    param2: "12g",
    param3: "23g",
    param4: "13g",
  },
]

const FoodCarousel = ({ slidesData }) => {
  const slides = slidesData.map(item => (
    <div className={styles.carouselItem} key={item.title}>
      <FoodCard img={item.img} title={item.title}>
        <FoodCardList>
          <FoodCardListItem text={item.param1} title="kcal" />
          <FoodCardListItem text={item.param2} title="sacharidy" />
          <FoodCardListItem text={item.param3} title="bílkoviny" />
          <FoodCardListItem text={item.param4} title="tuky" />
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

export const FoodCarouselSection = () => (
  <section className={styles.foodCarouselSection} id="food">
    <Container>
      <h3 className="sectionTitle text-center">Jaká jídla tě s námi čekají?</h3>
      <FoodCarousel slidesData={slidesData} />
    </Container>
  </section>
)
