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

const FoodCarousel = () => {
  const slides = slidesData.map((item, i) => (
    <div className={styles.carouselItem} key={i}>
      <img src={item.img} styles={{ height: "270px" }} />
      <h3>{item.title}</h3>
      {/* <FoodCard img={item.img} title={item.title}>
        <FoodCardList>
          <FoodCardListItem text={item.param1} title="kcal" />
          <FoodCardListItem text={item.param2} title="sacharidy" />
          <FoodCardListItem text={item.param3} title="bílkoviny" />
          <FoodCardListItem text={item.param4} title="tuky" />
        </FoodCardList>
      </FoodCard> */}
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

const FoodCarouselMobile = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      <div className={styles.carouselItem} key="1">
        <FoodCard
          img={img1}
          title="Kuřecí nudličky v zeleninové omáčce s fazolovými lusky"
        >
          <ul className={styles.foodCardList}>
            <li>
              <span className={styles.el}>268</span>
              <span className={styles.title}>kcal</span>
            </li>
            <li>
              <span className={styles.el}>17g</span>
              <span className={styles.title}>sacharidy</span>
            </li>
            <li>
              <span className={styles.el}>33g</span>
              <span className={styles.title}>bílkoviny</span>
            </li>
            <li>
              <span className={styles.el}>4g</span>
              <span className={styles.title}>tuky</span>
            </li>
          </ul>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="2">
        <FoodCard img={img2} title="Lososový wrap">
          <ul className={styles.foodCardList}>
            <li>
              <span className={styles.el}>333</span>
              <span className={styles.title}>kcal</span>
            </li>
            <li>
              <span className={styles.el}>33g</span>
              <span className={styles.title}>sacharidy</span>
            </li>
            <li>
              <span className={styles.el}>21g</span>
              <span className={styles.title}>bílkoviny</span>
            </li>
            <li>
              <span className={styles.el}>13g</span>
              <span className={styles.title}>tuky</span>
            </li>
          </ul>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="3">
        <FoodCard img={img3} title="Salát s hovězím masem po korejsku">
          <ul className={styles.foodCardList}>
            <li>
              <span className={styles.el}>333</span>
              <span className={styles.title}>kcal</span>
            </li>
            <li>
              <span className={styles.el}>33g</span>
              <span className={styles.title}>sacharidy</span>
            </li>
            <li>
              <span className={styles.el}>21g</span>
              <span className={styles.title}>bílkoviny</span>
            </li>
            <li>
              <span className={styles.el}>13g</span>
              <span className={styles.title}>tuky</span>
            </li>
          </ul>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="4">
        <FoodCard
          img={img4}
          title="Salát s pečeným roastbeefem, medovou zálivkou a tapenádou z oliv"
        >
          <ul className={styles.foodCardList}>
            <li>
              <span className={styles.el}>333</span>
              <span className={styles.title}>kcal</span>
            </li>
            <li>
              <span className={styles.el}>33g</span>
              <span className={styles.title}>sacharidy</span>
            </li>
            <li>
              <span className={styles.el}>21g</span>
              <span className={styles.title}>bílkoviny</span>
            </li>
            <li>
              <span className={styles.el}>13g</span>
              <span className={styles.title}>tuky</span>
            </li>
          </ul>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="5">
        <FoodCard
          img={img5}
          title="Sendvič s krůtím masem, zeleninou a kimchi omáčkou"
        >
          <ul className={styles.foodCardList}>
            <li>
              <span className={styles.el}>333</span>
              <span className={styles.title}>kcal</span>
            </li>
            <li>
              <span className={styles.el}>33g</span>
              <span className={styles.title}>sacharidy</span>
            </li>
            <li>
              <span className={styles.el}>21g</span>
              <span className={styles.title}>bílkoviny</span>
            </li>
            <li>
              <span className={styles.el}>13g</span>
              <span className={styles.title}>tuky</span>
            </li>
          </ul>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="6">
        <FoodCard
          img={img6}
          title="Hovězí maso s rýžovými nudlemi, zeleninou a thajskou zálivkou"
        >
          <ul className={styles.foodCardList}>
            <li>
              <span className={styles.el}>333</span>
              <span className={styles.title}>kcal</span>
            </li>
            <li>
              <span className={styles.el}>33g</span>
              <span className={styles.title}>sacharidy</span>
            </li>
            <li>
              <span className={styles.el}>21g</span>
              <span className={styles.title}>bílkoviny</span>
            </li>
            <li>
              <span className={styles.el}>13g</span>
              <span className={styles.title}>tuky</span>
            </li>
          </ul>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="7">
        <FoodCard img={img7} title="Bramborový nákyp s mletým hovězím masem">
          <ul className={styles.foodCardList}>
            <li>
              <span className={styles.el}>333</span>
              <span className={styles.title}>kcal</span>
            </li>
            <li>
              <span className={styles.el}>33g</span>
              <span className={styles.title}>sacharidy</span>
            </li>
            <li>
              <span className={styles.el}>21g</span>
              <span className={styles.title}>bílkoviny</span>
            </li>
            <li>
              <span className={styles.el}>13g</span>
              <span className={styles.title}>tuky</span>
            </li>
          </ul>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="8">
        <FoodCard img={img8} title="Okoun se smaženým zelím a kari omáčkou">
          <ul className={styles.foodCardList}>
            <li>
              <span className={styles.el}>333</span>
              <span className={styles.title}>kcal</span>
            </li>
            <li>
              <span className={styles.el}>33g</span>
              <span className={styles.title}>sacharidy</span>
            </li>
            <li>
              <span className={styles.el}>21g</span>
              <span className={styles.title}>bílkoviny</span>
            </li>
            <li>
              <span className={styles.el}>13g</span>
              <span className={styles.title}>tuky</span>
            </li>
          </ul>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="9">
        <FoodCard img={img9} title="Pohankové karbanátky s čočkou">
          <ul className={styles.foodCardList}>
            <li>
              <span className={styles.el}>333</span>
              <span className={styles.title}>kcal</span>
            </li>
            <li>
              <span className={styles.el}>33g</span>
              <span className={styles.title}>sacharidy</span>
            </li>
            <li>
              <span className={styles.el}>21g</span>
              <span className={styles.title}>bílkoviny</span>
            </li>
            <li>
              <span className={styles.el}>13g</span>
              <span className={styles.title}>tuky</span>
            </li>
          </ul>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="10">
        <FoodCard img={img10} title="Bonbón s ořechem">
          <ul className={styles.foodCardList}>
            <li>
              <span className={styles.el}>333</span>
              <span className={styles.title}>kcal</span>
            </li>
            <li>
              <span className={styles.el}>33g</span>
              <span className={styles.title}>sacharidy</span>
            </li>
            <li>
              <span className={styles.el}>21g</span>
              <span className={styles.title}>bílkoviny</span>
            </li>
            <li>
              <span className={styles.el}>13g</span>
              <span className={styles.title}>tuky</span>
            </li>
          </ul>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="11">
        <FoodCard img={img11} title="Jablečně-mrkvové vafle s krémem">
          <ul className={styles.foodCardList}>
            <li>
              <span className={styles.el}>333</span>
              <span className={styles.title}>kcal</span>
            </li>
            <li>
              <span className={styles.el}>33g</span>
              <span className={styles.title}>sacharidy</span>
            </li>
            <li>
              <span className={styles.el}>21g</span>
              <span className={styles.title}>bílkoviny</span>
            </li>
            <li>
              <span className={styles.el}>13g</span>
              <span className={styles.title}>tuky</span>
            </li>
          </ul>
        </FoodCard>
      </div>
      <div className={styles.carouselItem} key="12">
        <FoodCard img={img12} title="Tykvový nákyp se smetanou">
          <ul className={styles.foodCardList}>
            <li>
              <span className={styles.el}>333</span>
              <span className={styles.title}>kcal</span>
            </li>
            <li>
              <span className={styles.el}>33g</span>
              <span className={styles.title}>sacharidy</span>
            </li>
            <li>
              <span className={styles.el}>21g</span>
              <span className={styles.title}>bílkoviny</span>
            </li>
            <li>
              <span className={styles.el}>13g</span>
              <span className={styles.title}>tuky</span>
            </li>
          </ul>
        </FoodCard>
      </div>
    </Slider>
  )
}

export const FoodCarouselSection = () => (
  <section className={styles.foodCarouselSection} id="food">
    <Container>
      <h3 className="sectionTitle text-center">Jaká jídla tě s námi čekají?</h3>
      <FoodCarousel />
      <BrowserView>{/* <FoodCarousel /> */}</BrowserView>
      {/* <MobileView>
        <FoodCarouselMobile />
      </MobileView> */}
    </Container>
  </section>
)
