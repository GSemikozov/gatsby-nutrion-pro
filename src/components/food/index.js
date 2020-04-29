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
    <Slider {...settings}>
      <div className={styles.carouselItem} key="1">
        <div className={styles.foodCard}>
          <div className={styles.foodCardTop}>
            <img src={img1} className={styles.foodCardImg} alt="img" />
          </div>
          <div className={styles.foodCardBody}>
            <h5 className={styles.foodCardTitle}>
              Kuřecí nudličky v zeleninové omáčce s fazolovými lusky 1
            </h5>
            <div>
              <FoodCardList>
                <FoodCardListItem text="228" title="kcal" />
                <FoodCardListItem text="17g" title="sacharidy" />
                <FoodCardListItem text="33g" title="bílkoviny" />
                <FoodCardListItem text="4g" title="tuky" />
              </FoodCardList>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carouselItem} key="2">
        <div className={styles.foodCard}>
          <div className={styles.foodCardTop}>
            <img src={img2} className={styles.foodCardImg} alt="img" />
          </div>
          <div className={styles.foodCardBody}>
            <h5 className={styles.foodCardTitle}>
              Kuřecí nudličky v zeleninové omáčce s fazolovými lusky 2
            </h5>
            <div>
              <FoodCardList>
                <FoodCardListItem text="228" title="kcal" />
                <FoodCardListItem text="17g" title="sacharidy" />
                <FoodCardListItem text="33g" title="bílkoviny" />
                <FoodCardListItem text="4g" title="tuky" />
              </FoodCardList>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carouselItem} key="3">
        <div className={styles.foodCard}>
          <div className={styles.foodCardTop}>
            <img src={img3} className={styles.foodCardImg} alt="img" />
          </div>
          <div className={styles.foodCardBody}>
            <h5 className={styles.foodCardTitle}>
              Kuřecí nudličky v zeleninové omáčce s fazolovými lusky 3
            </h5>
            <div>
              <FoodCardList>
                <FoodCardListItem text="228" title="kcal" />
                <FoodCardListItem text="17g" title="sacharidy" />
                <FoodCardListItem text="33g" title="bílkoviny" />
                <FoodCardListItem text="4g" title="tuky" />
              </FoodCardList>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carouselItem} key="4">
        <div className={styles.foodCard}>
          <div className={styles.foodCardTop}>
            <img src={img4} className={styles.foodCardImg} alt="img" />
          </div>
          <div className={styles.foodCardBody}>
            <h5 className={styles.foodCardTitle}>
              Kuřecí nudličky v zeleninové omáčce s fazolovými lusky 4
            </h5>
            <div>
              <FoodCardList>
                <FoodCardListItem text="228" title="kcal" />
                <FoodCardListItem text="17g" title="sacharidy" />
                <FoodCardListItem text="33g" title="bílkoviny" />
                <FoodCardListItem text="4g" title="tuky" />
              </FoodCardList>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carouselItem} key="5">
        <div className={styles.foodCard}>
          <div className={styles.foodCardTop}>
            <img src={img5} className={styles.foodCardImg} alt="img" />
          </div>
          <div className={styles.foodCardBody}>
            <h5 className={styles.foodCardTitle}>
              Kuřecí nudličky v zeleninové omáčce s fazolovými lusky 5
            </h5>
            <div>
              <FoodCardList>
                <FoodCardListItem text="228" title="kcal" />
                <FoodCardListItem text="17g" title="sacharidy" />
                <FoodCardListItem text="33g" title="bílkoviny" />
                <FoodCardListItem text="4g" title="tuky" />
              </FoodCardList>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carouselItem} key="6">
        <div className={styles.foodCard}>
          <div className={styles.foodCardTop}>
            <img src={img6} className={styles.foodCardImg} alt="img" />
          </div>
          <div className={styles.foodCardBody}>
            <h5 className={styles.foodCardTitle}>
              Kuřecí nudličky v zeleninové omáčce s fazolovými lusky 6
            </h5>
            <div>
              <FoodCardList>
                <FoodCardListItem text="228" title="kcal" />
                <FoodCardListItem text="17g" title="sacharidy" />
                <FoodCardListItem text="33g" title="bílkoviny" />
                <FoodCardListItem text="4g" title="tuky" />
              </FoodCardList>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carouselItem} key="7">
        <div className={styles.foodCard}>
          <div className={styles.foodCardTop}>
            <img src={img7} className={styles.foodCardImg} alt="img" />
          </div>
          <div className={styles.foodCardBody}>
            <h5 className={styles.foodCardTitle}>
              Kuřecí nudličky v zeleninové omáčce s fazolovými lusky 7
            </h5>
            <div>
              <FoodCardList>
                <FoodCardListItem text="228" title="kcal" />
                <FoodCardListItem text="17g" title="sacharidy" />
                <FoodCardListItem text="33g" title="bílkoviny" />
                <FoodCardListItem text="4g" title="tuky" />
              </FoodCardList>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carouselItem} key="8">
        <div className={styles.foodCard}>
          <div className={styles.foodCardTop}>
            <img src={img8} className={styles.foodCardImg} alt="img" />
          </div>
          <div className={styles.foodCardBody}>
            <h5 className={styles.foodCardTitle}>
              Kuřecí nudličky v zeleninové omáčce s fazolovými lusky 8
            </h5>
            <div>
              <FoodCardList>
                <FoodCardListItem text="228" title="kcal" />
                <FoodCardListItem text="17g" title="sacharidy" />
                <FoodCardListItem text="33g" title="bílkoviny" />
                <FoodCardListItem text="4g" title="tuky" />
              </FoodCardList>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carouselItem} key="9">
        <div className={styles.foodCard}>
          <div className={styles.foodCardTop}>
            <img src={img9} className={styles.foodCardImg} alt="img" />
          </div>
          <div className={styles.foodCardBody}>
            <h5 className={styles.foodCardTitle}>
              Kuřecí nudličky v zeleninové omáčce s fazolovými lusky 9
            </h5>
            <div>
              <FoodCardList>
                <FoodCardListItem text="228" title="kcal" />
                <FoodCardListItem text="17g" title="sacharidy" />
                <FoodCardListItem text="33g" title="bílkoviny" />
                <FoodCardListItem text="4g" title="tuky" />
              </FoodCardList>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carouselItem} key="10">
        <div className={styles.foodCard}>
          <div className={styles.foodCardTop}>
            <img src={img10} className={styles.foodCardImg} alt="img" />
          </div>
          <div className={styles.foodCardBody}>
            <h5 className={styles.foodCardTitle}>
              Kuřecí nudličky v zeleninové omáčce s fazolovými lusky 10
            </h5>
            <div>
              <FoodCardList>
                <FoodCardListItem text="228" title="kcal" />
                <FoodCardListItem text="17g" title="sacharidy" />
                <FoodCardListItem text="33g" title="bílkoviny" />
                <FoodCardListItem text="4g" title="tuky" />
              </FoodCardList>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carouselItem} key="11">
        <div className={styles.foodCard}>
          <div className={styles.foodCardTop}>
            <img src={img11} className={styles.foodCardImg} alt="img" />
          </div>
          <div className={styles.foodCardBody}>
            <h5 className={styles.foodCardTitle}>
              Kuřecí nudličky v zeleninové omáčce s fazolovými lusky 11
            </h5>
            <div>
              <FoodCardList>
                <FoodCardListItem text="228" title="kcal" />
                <FoodCardListItem text="17g" title="sacharidy" />
                <FoodCardListItem text="33g" title="bílkoviny" />
                <FoodCardListItem text="4g" title="tuky" />
              </FoodCardList>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carouselItem} key="12">
        <div className={styles.foodCard}>
          <div className={styles.foodCardTop}>
            <img src={img12} className={styles.foodCardImg} alt="img" />
          </div>
          <div className={styles.foodCardBody}>
            <h5 className={styles.foodCardTitle}>
              Kuřecí nudličky v zeleninové omáčce s fazolovými lusky 12
            </h5>
            <div>
              <FoodCardList>
                <FoodCardListItem text="228" title="kcal" />
                <FoodCardListItem text="17g" title="sacharidy" />
                <FoodCardListItem text="33g" title="bílkoviny" />
                <FoodCardListItem text="4g" title="tuky" />
              </FoodCardList>
            </div>
          </div>
        </div>
      </div>
    </Slider>
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
