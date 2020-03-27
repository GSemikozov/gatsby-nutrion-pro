import cx from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { Button } from '../../components/button';
import { Container } from '../../components/container';
import { Counter } from '../../components/counter';
import { Footer } from '../../components/footer';
import { LandingForm } from '../../components/forms/landing-form';
import { HowItWork } from '../../components/howitwork';
import { useModal } from '../../components/modal';
import { Reviews } from '../../components/reviews';
import SEOLanding from '../../components/seo-landing';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import styles from './hero.module.css';
import img1 from './images/1.svg';
import img2 from './images/2.svg';
import img3 from './images/3.svg';
import img4 from './images/4.svg';
import img5 from './images/5.svg';
import img7 from './images/7.svg';
import img8 from './images/8.svg';
import imgChef from './images/chef.svg';
import fb from './images/facebook.svg';
import insta from './images/instagram.svg';
import logo from './images/logo.svg';
import section3 from './pockets.module.css';
import section2 from './section2.module.css';
import section4 from './section4.module.css';

const ModalForm = () => (
  <>
    <h3
      className={cx(styles.formHeading, "text-center")}
      style={{ marginBottom: "20px" }}
    >
      Mám zájem
    </h3>
    <LandingForm />
  </>
)

const ImunitaPage = ({ location }) => {
  const scroll = useSmoothScroll()

  const onLinkClick = selector => () => {
    scroll.animateScroll(document.getElementById(selector))
  }

  const { show, RenderModal } = useModal()

  const { siteURL } = useSiteMetadata()

  return (
    <main id="root">
      {/* <SEOLanding /> */}
      <Helmet>
        <div id="fb-root"></div>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/cs_CZ/sdk.js#xfbml=1&version=v6.0"
        ></script>
        {/*<!-- Primary Meta Tags -->*/}
        <title>Daruj jídlo zdravotníkům i ty!</title>
        <meta name="title" content="Daruj jídlo zdravotníkům i ty!" />
        <meta
          name="description"
          content="Imunita pro tebe, imunita pro ně. S každou objednávkou věnujeme 10 jídel zdravotníkům, kteří potřebují posílit imunitu nejvíce. Pomáhej s námi."
        />

        {/*<!-- Open Graph / Facebook -->*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nutritionpro.cz/imunita/" />
        <meta property="og:title" content="Daruj jídlo zdravotníkům i ty!" />
        <meta
          property="og:description"
          content="Imunita pro tebe, imunita pro ně. S každou objednávkou věnujeme 10 jídel zdravotníkům, kteří potřebují posílit imunitu nejvíce. Pomáhej s námi."
        />
        <meta
          property="og:image"
          content="https://nutritionpro.cz/images/fb-cover.png"
        />

        {/*<!-- Twitter -->*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://nutritionpro.cz/imunita/"
        />
        <meta
          property="twitter:title"
          content="Daruj jídlo zdravotníkům i ty!"
        />
        <meta
          property="twitter:description"
          content="Imunita pro tebe, imunita pro ně. S každou objednávkou věnujeme 10 jídel zdravotníkům, kteří potřebují posílit imunitu nejvíce. Pomáhej s námi."
        />
        <meta
          property="twitter:image"
          content="https://nutritionpro.cz/images/fb-cover.png"
        />
      </Helmet>
      <section className={styles.hero}>
        <Container className={styles.topContainer}>
          <div className={styles.header}>
            <a href="/" className={styles.logo}>
              <img src={logo} alt="logo" />
            </a>
            <Counter />
            <div className={styles.headerSocials}>
              <a href="https://www.facebook.com/nutritionprocz" target="_blank">
                <img src={fb} alt="fb" />
              </a>
              <a
                href="https://www.instagram.com/nutritionprocz/"
                target="_blank"
              >
                <img src={insta} alt="fb" />
              </a>
            </div>
          </div>
        </Container>
        <Container className={styles.heroContainer}>
          <div>
            <img
              src={img4}
              className={styles.heroMobileImg}
              alt="content-img"
            />
          </div>
          <h1 className={styles.heroTitle}>
            Imunita pro tebe, <br /> imunita pro ně
          </h1>
          <div>
            <div className={styles.heroTextHash}>
              #nutrition<span>pro</span>
              imunitu
            </div>
            <p className={styles.heroText}>
              Tvoje podpora nám umožňuje věnovat jídlo těm, kteří potřebují
              posílit imunitu nejvíce - <b>našim zdravotníkům</b>.
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
      <section className={section2.section2}>
        <Container className="text-center">
          <div>
            <img src={img1} alt="icon" />
          </div>
          <h3 className={section2.section2Title}>Chceme pomáhat</h3>
          <p className={section2.section2Text}>
            Věříme, že{" "}
            <strong>
              zdravá a pestrá strava je základem pro silnou imunitu
            </strong>
            , která je v tomto období nezbytná nejen pro nás všechny, ale hlavně
            pro naše zdravotníky, kteří pracují každý den s obrovským nasazením
            a statečně bojují proti pandemii koronaviru. Oni jsou ti, kterým je
            teď potřeba podat pomocnou ruku.
          </p>
          <p className={section2.section2Text}>
            Rozhodli jsme se proto, že za každou objednávku dovezeme jídla
            různým zdravotnickým zařízením v Praze. Můžeme tak dodat energii
            prostřednictvím zdravého{" "}
            <strong>
              jídla doktorům, sestřičkám i zdravotnickým pracovníkům
            </strong>
            .
          </p>
        </Container>
      </section>
      <section className={section3.programsSection} id="programs">
        <Container>
          <h3 className={cx("sectionTitle", section3.title)}>
            Jak můžeš pomoci ty?
          </h3>
          <p className={section3.description}>
            Objednej si jeden z našich balíčků vyvážené pestré stravy
            NutritionPro, kterým nejen podpoříš svoji imunitu, ale také daruješ
            jídlo pro naše zdravotníky.
          </p>
          <div className={section3.programs}>
            <div className={section3.programsNav}>
              <div className={cx(section3.program)}>
                <div onClick={show} className={section3.programTop}>
                  <div className={section3.programTopRibbon}>
                    5chodové <br />
                    menu
                  </div>
                  <div className={section3.programTopImgWrap}>
                    <img
                      src={imgChef}
                      className={section3.programTopImg}
                      alt="icon"
                    />
                  </div>
                  <h5 className={section3.programTitle}>
                    Měsíční menu na míru
                  </h5>
                </div>
                <div className={section3.programImgWrap}>
                  <img src={img2} className={section3.programImg} alt="icon" />
                </div>
                <p className={section3.programText}>
                  Daruješ <b>10 jídel</b> zdravotníkům
                </p>
                <button
                  type="button"
                  onClick={show}
                  className={section3.button}
                >
                  Objednat
                </button>
                <RenderModal className="modalForm">
                  <ModalForm />
                </RenderModal>
              </div>
              <div className={cx(section3.program)}>
                <Link to="/" className={section3.programTop}>
                  <div className={section3.programTopRibbon}>
                    Obědy <br />
                    + <br />
                    večeře
                  </div>
                  <div className={section3.programTopImgWrap}>
                    <img
                      src={img5}
                      className={section3.programTopImg}
                      alt="icon"
                    />
                  </div>
                  <h5 className={section3.programTitle}>
                    Homeoffice pack pro jednoho
                  </h5>
                </Link>
                <div className={section3.programImgWrap}>
                  <img src={img3} className={section3.programImg} alt="icon" />
                </div>
                <p className={section3.programText}>
                  Daruješ <b>5 jídel</b> zdravotníkům
                </p>
                <Link to="/" className={section3.button}>
                  Objednat
                </Link>
              </div>
              <div className={cx(section3.program)}>
                <Link to="/" className={section3.programTop}>
                  <div
                    className={cx(
                      section3.programTopRibbon,
                      section3.programTopRibbonOrange
                    )}
                  >
                    2x obědy <br /> + <br /> večeře
                  </div>
                  <div className={section3.programTopImgWrap}>
                    <img
                      src={img7}
                      className={section3.programTopImg}
                      alt="icon"
                    />
                  </div>
                  <h5 className={section3.programTitle}>
                    Homeoffice pack pro páry
                  </h5>
                </Link>
                <div className={section3.programImgWrap}>
                  <img src={img2} className={section3.programImg} alt="icon" />
                </div>
                <p className={section3.programText}>
                  Daruješ <b>10 jídel</b> zdravotníkům
                </p>
                <Link to="/" className={section3.button}>
                  Objednat
                </Link>
              </div>
            </div>
          </div>
          <div className={section3.share}>
            Pomůžeš i sdílením. Děkujeme!{" "}
            <a
              // href={`https://www.facebook.com/sharer/sharer.php?u=${siteURL}${location.pathname}`}
              href="https://www.facebook.com/nutritionprocz"
              target="_blank"
              className={section3.shareLink}
            >
              <img src={img8} alt="icon" />
            </a>
            <div
              class="fb-share-button"
              data-href="https://nutritionpro.cz/imunita/"
              data-layout="button_count"
              data-size="large"
              style={{ opacity: 0, width: 0, height: 0 }}
            >
              <a
                target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnutritionpro.cz%2Fimunita%2F&amp;src=sdkpreparse"
                class="fb-xfbml-parse-ignore"
              >
                Поделиться
              </a>
            </div>
          </div>
        </Container>
      </section>
      <section className={section4.section}>
        <Container>
          <div className={section4.blockWrap}>
            <h3
              className={cx("sectionTitle -light text-center", section4.title)}
            >
              Znáš nějakou nemocnici z Prahy a okolí, které můžeme pomoci?
            </h3>
            <Button type="secondary">
              <a href="mailto:info@nutritionpro.cz" className={section4.link}>
                Napiš nam
              </a>
            </Button>
          </div>
        </Container>
      </section>
      {/* <Reviews id="reviews" /> */}
      <Footer />
      {/* <div id="fb-root"></div>
      <script>(function(d, s, id) {
    js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script> */}
    </main>
  )
}

export default ImunitaPage
