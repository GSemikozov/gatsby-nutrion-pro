import React from 'react';

import { Button } from '../../components/button';
import { Container } from '../../components/container';
import { Footer } from '../../components/footer';
import { HowItWork } from '../../components/howitwork';
import { Program } from '../../components/program';
import { Reviews } from '../../components/reviews';
import SEO from '../../components/seo';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import img1 from './images/1.svg';
import fb from './images/facebook.svg';
import insta from './images/instagram.svg';
import logo from './images/logo.svg';
import styles from './styles.module.css';

// import img4 from './images/4.svg';
// import imgChef from './images/chef.svg';
// import img2 from './images/2.svg';
// import img3 from './images/3.svg';
// import img5 from './images/5.svg';
// import img7 from './images/7.svg';
// import img8 from './images/8.svg';
// const Hero = onLinkClick => (

// )

const ImunitaPage = () => {
  const scroll = useSmoothScroll()

  const onLinkClick = selector => () => {
    scroll.animateScroll(document.getElementById(selector))
  }

  return (
    <main>
      <SEO title="Program" />
      <section className={styles.hero}>
        <Container className={styles.topContainer}>
          <div className={styles.header}>
            <a href="/" className={styles.logo}>
              <img src={logo} alt="logo" />
            </a>
            <div className={styles.counterWrap}>
              <div className={styles.counter}>
                <div className={styles.counterItem}>
                  0 <span className={styles.counterItemDivider}></span>
                </div>
                <div className={styles.counterItem}>
                  0 <span className={styles.counterItemDivider}></span>
                </div>
                <div className={styles.counterItem}>
                  5 <span className={styles.counterItemDivider}></span>
                </div>
                <div className={styles.counterItem}>
                  1 <span className={styles.counterItemDivider}></span>
                </div>
              </div>
              <div className={styles.counterText}>
                Rozdacich jidel <br /> zdravotnikum
              </div>
            </div>
            <div className={styles.headerSocials}>
              <a href="#">
                <img src={fb} alt="fb" />
              </a>
              <a href="#">
                <img src={insta} alt="fb" />
              </a>
            </div>
          </div>
        </Container>
        <Container className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            Imunita pro tebe <br />
            Imunita pro ně
          </h1>
          <div className="visible-desktop">
            <div className={styles.heroImg}>{/* <HeroDesktopImg /> */}</div>
          </div>
          <div className="visible-mobile">
            <div className={styles.heroImg}>{/* <HeroMobileImg /> */}</div>
          </div>
          <div>
            <div
              className={styles.heroText}
              style={{
                textTransform: "uppercase",
                fontWeight: "900",
                color: `var(--color-green)`,
              }}
            >
              #nutrition<span style={{ color: `var(--color-body)` }}>pro</span>
              imunitu
            </div>
            <p className={styles.heroText}>
              Vaše podpora nám pomáhá věnovat jídlo těm, kteří potřebují posílit
              imunitu nejvíce - <b>našim zdravotníkům.</b>
            </p>
            <p className={styles.heroText}>
              <b>Děkujeme.</b>
            </p>
          </div>
          <div className={styles.buttons}>
            <Button
              type="primary"
              className={styles.link}
              handleClick={onLinkClick("programs")}
            >
              Chci také pomoci
            </Button>
          </div>
        </Container>
      </section>
      <section className={styles.section2}>
        <Container className="text-center">
          <div>
            <img src={img1} alt="icon" />
          </div>
          <h3 className={styles.section2Title}>Chceme pomáhat</h3>
          <p className={styles.section2Text}>
            Věříme, že{" "}
            <strong>
              zdravá a pestrá strava je základem pro silnou imunitu
            </strong>
            , která je v tomto období nezbytná nejen pro nás všechny, ale hlavně
            pro naše zdravotníky, kteří pracují každý den s obrovským nasazením
            a statečně bojují proti pandemii koronaviru. Oni jsou ti, kterým je
            teď potřeba podat pomocnou ruku.
          </p>
          <p className={styles.section2Text}>
            Rozhodli jsme se pro to, že za každou objednávku dovezeme jídla
            různým zdravotnickým zařízením v Praze. Můžeme tak dodat energii
            prostřednictvím zdravého{" "}
            <strong>
              jídla doktorům, sestřičkám i zdravotnickým pracovníkům
            </strong>
            .
          </p>
        </Container>
      </section>
      <Program id="programs" />
      <HowItWork />
      {/* <Reviews id="reviews" /> */}
      <Footer />
    </main>
  )
}

export default ImunitaPage
