import cx from 'classnames';
import React from 'react';

import { Button } from '../components/button';
import { Calculator } from '../components/calculator';
import { Container } from '../components/container';
import { Layout } from '../components/layout';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import productImg1 from '../images/product-1-bg.jpg';
import productImg2 from '../images/product-2-bg.jpg';
import productImg3 from '../images/product-3-bg.jpg';
import productImg4 from '../images/product-4-bg.jpg';
import styles from './hero.module.css';
import angleDownIcon from './icons/angle-down-icon.svg';
import s1icon1 from './icons/s1-icon1.svg';
import s1icon2 from './icons/s1-icon2.svg';
import s1icon3 from './icons/s1-icon3.svg';
import s3icon1 from './icons/s3-icon1.svg';
import s3icon2 from './icons/s3-icon2.svg';
import s3icon3 from './icons/s3-icon3.svg';
import s3icon4 from './icons/s3-icon4.svg';
import section1 from './section1.module.css';
import section2 from './section2.module.css';
import section3 from './section3.module.css';
import section4 from './section4.module.css';

const ProductTemplate = ({ productId, title, productList }) => {
  const scroll = useSmoothScroll()

  const scrollTo = selector => () => {
    selector && scroll.animateScroll(document.getElementById(selector))
  }

  const img = productId => {
    let img = null
    switch (true) {
      case productId === "1":
        img = productImg1
        break
      case productId === "2":
        img = productImg2
        break
      case productId === "3":
        img = productImg3
        break
      case productId === "4":
        img = productImg4
        break
      default:
        img = productImg1
        break
    }
    return img
  }
  return (
    <Layout>
      <section className={styles.productHero}>
        <img src={img(productId)} className={styles.productHeroImg} alt="bg" />
        <div className={styles.productHeroCaption}>
          <Container className={styles.heroContainer}>
            <h1 className={styles.productHeroTitle}>{title}</h1>
            <ul className={styles.productHeroList}>{productList()}</ul>
            <Button type="primary" className={styles.productHeroBtn}>
              Spočítat cenu
            </Button>
          </Container>
        </div>
      </section>
      <section className={cx("section", section1.section)}>
        <Container>
          <h3 className={cx("sectionTitle", section1.title)}>
            Jídelníček na míru tvým cílům
          </h3>
          <p className={section1.text}>
            Náš speciální algoritmus, který pracuje s nejnovějšími poznatky ze
            světa dietologie, ti přesně určí tvůj denní kalorický příjem na
            základě měření složení tvého těla a tvých cílů. Po kontrole naším
            dietologem ti algoritmus sestaví jídelníček na míru s přesně
            stanovenými makronutrienty.
          </p>
        </Container>
        <Container>
          <div className={section1.cardGrid}>
            <div className={section1.card}>
              <div className={section1.cardIcon}>
                <img src={s1icon1} alt="icon" />
              </div>
              <div className={section1.cardBody}>
                <h5 className={section1.cardTitle}>Každý den nové jídlo</h5>
                <p className={section1.cardText}>
                  Menu složené z 300 nutričně vyvážených a chutných jídel? Pro
                  nás žádný problém! Naše menu pravidelně obměňujeme, a tak na
                  tebe každý den čeká nové, chutné a čerstvě uvařené jídlo.
                </p>
              </div>
            </div>
            <div className={section1.card}>
              <div className={section1.cardIcon}>
                <img src={s1icon2} alt="icon" />
              </div>
              <div className={section1.cardBody}>
                <h5 className={section1.cardTitle}>Prémiové suroviny </h5>
                <p className={section1.cardText}>
                  Vždy čerstvé a kvalitní suroviny jsou pro zdravé stravování
                  naprostým základem. V NutritionPro jsou proto takové suroviny
                  od českých dodavatelů pravidlem.
                </p>
              </div>
            </div>
            <div className={section1.card}>
              <div className={section1.cardIcon}>
                <img src={s1icon3} alt="icon" />
              </div>
              <div className={section1.cardBody}>
                <h5 className={section1.cardTitle}>
                  Možnost vyloučit až 3 potraviny
                </h5>
                <p className={section1.cardText}>
                  Je něco, co nejíš nebo ti nechutná? Nevadí. U nás můžeš z
                  jídelníčku vyloučit až 3 druhy potravin.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              className={section1.link}
              onClick={scrollTo("section-2")}
            >
              Vzorový jídelníček
              <img src={angleDownIcon} alt="icon" />
            </button>
          </div>
        </Container>
      </section>
      <section className={cx("section", section2.section)} id="section-2">
        <Container className={section2.container}>
          <h3 className={cx("sectionTitle -light", section2.title)}>
            Diagnostika těla
          </h3>
          <p className={section2.text}>
            Změříme tě na přístroji Tanita, který nám ukáže, jaký máš poměr mezi
            svalovou a tukovou hmotou, a ukáže množství útrobního tuku a vody v
            těle.
          </p>
          <p className={section2.text}>
            Tyto informace jsou nezbytné nejen pro nastavení individuálního
            jídelníčku, ale také pro kontrolu tvých výsledků.
          </p>
          <p className={section2.text}>
            Jednou za 14 dní tě přeměří náš zaškolený pracovník, a to na místě,
            které si sám určíš.
          </p>
        </Container>
      </section>
      <section className={cx("section", section3.section)}>
        <Container className={section3.container}>
          <h3 className={cx("sectionTitle", section3.title)}>
            Dohled výživového poradce
          </h3>
          <p className={section3.text}>
            Dietolog se stará o to, aby cesta za tvým cílem byla co možná
            nejsnazší. Dohlíží na plnění cílů a podle výsledků měření a tvé
            zpětné vazby, upravuje jídelníček. Každý měsíc ti od něj přijde
            vyhodnocení, kde se přesně dozvíš, jak si vedeš.
          </p>
          <div className="text-center">
            <button
              type="button"
              className={section3.link}
              onClick={scrollTo("section-4")}
            >
              Více info o našem výživovém poradci
              <img src={angleDownIcon} alt="icon" />
            </button>
          </div>
        </Container>
      </section>
      <section className={cx("section", section4.section)} id="section-4">
        <Container>
          <h3 className={cx("sectionTitle", section4.title)}>
            Rozvoz až k tobě ke dvěřím
          </h3>
          <p className={section4.text}>
            Jídlo ti dovezeme až ke dveřím tvého domova a v čas, který nám sám
            sdělíš. Rozvážíme ve večerních hodinách od 17 do 22 hodin, a to
            každé úterý, čtvrtek a neděli.
          </p>
        </Container>
        <Container>
          <div className={section4.cardGrid}>
            <div className={section4.card}>
              <div className={section4.cardIcon}>
                <img src={s3icon1} alt="icon" />
              </div>
              <div className={section4.cardBody}>
                <h5 className={section4.cardTitle}>Doprava je zdarma</h5>
                <p className={section4.cardText}>
                  Rozvážíme po celé Praze a okolí zcela zadarmo.
                </p>
              </div>
            </div>
            <div className={section4.card}>
              <div className={section4.cardIcon}>
                <img src={s3icon2} alt="icon" />
              </div>
              <div className={section4.cardBody}>
                <h5 className={section4.cardTitle}>
                  Vyber si přesný čas doručení
                </h5>
                <p className={section4.cardText}>2hodinová časová okna</p>
              </div>
            </div>
            <div className={section4.card}>
              <div className={section4.cardIcon}>
                <img src={s3icon3} alt="icon" />
              </div>
              <div className={section4.cardBody}>
                <h5 className={section4.cardTitle}>
                  Možnost změnit místo doručení
                </h5>
                <p className={section4.cardText}>
                  Stačí nám napsat v den rozvozu do 15 hodin a my ti jídlo
                  dovezeme na novou adresu.
                </p>
              </div>
            </div>
            <div className={section4.card}>
              <div className={section4.cardIcon}>
                <img src={s3icon4} alt="icon" />
              </div>
              <div className={section4.cardBody}>
                <h5 className={section4.cardTitle}>Odběrné místo </h5>
                <p className={section4.cardText}>
                  Jídlo si můžeš vyzvednout i na našem odběrném místě v centru
                  Prahy.
                </p>
              </div>
            </div>
          </div>
          <div className={cx("text-center", section4.buttons)}>
            <div className={section4.buttonsTitle}>Vozíme i k Vám?</div>
            <Button type="outline" className={section4.button}>
              Zkontrolovat adresu
            </Button>
          </div>
        </Container>
      </section>
      <Calculator id="calculator" />
    </Layout>
  )
}

export default ProductTemplate
