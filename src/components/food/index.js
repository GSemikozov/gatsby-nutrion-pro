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
    title: "Kuřecí nudličky v zeleninové omáčce s fazolovými lusky",
    param1: "228",
    param2: "17g",
    param3: "33g",
    param4: "4g",
  },
  {
    img: img2,
    title: "Lososový wrap",
    param1: "316",
    param2: "33g",
    param3: "21g",
    param4: "13g",
  },
  {
    img: img3,
    title: "Salát s hovězím masem po korejsku",
    param1: "264",
    param2: "11g",
    param3: "21g",
    param4: "20g",
  },
  {
    img: img4,
    title: "Salát s pečeným roastbeefem, medovou zálivkou a tapenádou z oliv",
    param1: "165",
    param2: "13g",
    param3: "9g",
    param4: "11g",
  },
  {
    img: img5,
    title: "Sendvič s krůtím masem, zeleninou a kimchi omáčkou",
    param1: "147",
    param2: "16g",
    param3: "12g",
    param4: "5g",
  },
  {
    img: img6,
    title: "Hovězí maso s rýžovými nudlemi, zeleninou a thajskou zálivkou",
    param1: "234",
    param2: "23g",
    param3: "25g",
    param4: "6g",
  },
  {
    img: img7,
    title: "Bramborový nákyp s mletým hovězím masem",
    param1: "324",
    param2: "21g",
    param3: "39g",
    param4: "12g",
  },
  {
    img: img8,
    title: "Okoun se smaženým zelím a kari omáčkou",
    param1: "338",
    param2: "25g",
    param3: "28g",
    param4: "18g",
  },
  {
    img: img9,
    title: "Pohankové karbanátky s čočkou",
    param1: "244",
    param2: "20g",
    param3: "20g",
    param4: "12g",
  },
  {
    img: img10,
    title: "Bonbón s ořechem",
    param1: "127",
    param2: "6g",
    param3: "5g",
    param4: "12g",
  },
  {
    img: img11,
    title: "Jablečně-mrkvové vafle s krémem",
    param1: "205",
    param2: "26g",
    param3: "6g",
    param4: "11g",
  },
  {
    img: img12,
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
  const slides = slidesData.map(item => (
    <div className={styles.carouselItem} key={item.title}>
      <FoodCard img={item.img} title={item.title}>
        {console.log("item", item)}
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
