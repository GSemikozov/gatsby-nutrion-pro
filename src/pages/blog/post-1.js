import React from 'react';

import { CategoriesFilterPanel } from '../../components/blog/categories-filter-panel';
import { Hero } from '../../components/blog/hero';
import { PostSidebar } from '../../components/blog/post-sidebar';
import { Breadcrumbs, BreadcrumbsItem } from '../../components/breadcrumbs';
import { Container } from '../../components/container';
import styles from './post-grid.module.css';
import img1 from './post1-img1.png';
import img2 from './post1-img2.png';

const Post1 = () => {
  return (
    <>
      <Container>
        <Breadcrumbs style={{ margin: "24px 0" }}>
          <BreadcrumbsItem link="/">Domu</BreadcrumbsItem>
          <BreadcrumbsItem link="/blog/posts">Blog</BreadcrumbsItem>
          <BreadcrumbsItem link="/blog/post-1">
            INSPIRACE Z PROGRAMU PRO ZDRAVÍ
          </BreadcrumbsItem>
        </Breadcrumbs>
      </Container>
      <Container>
        <div className={styles.postGrid}>
          <div>
            <Hero />
            <div>
              <p className={styles.postText}>
                Že jste vyzkoušeli již různé diety, ale žádná se vám
                neosvědčila? Rádi bychom vám ukázali a namotivovali vás, že to
                prostě jde a i pořádného „pivního“ pupíku se lze zbavit, a ještě
                se přitom můžete pořádně najíst. Máme pro vás důkaz místo slibů,
                a tím je proměna Petra, který se podělil o svou zkušenost s
                bojem.
              </p>
              <img src={img1} className={styles.postImg} alt="img1" />
              <h5 className={styles.postTitle}>
                Boj s nadváhou vede mnoho z nás. Patříte také mezi ty, pro které
                představuje vlastní hmotnost nepřítele číslo jedna?
              </h5>
              <p className={styles.postText}>
                Pojďme si Petra krátce představit. Petr je mladý 33letý muž,
                který pracuje jako referent nákupu a výroby v potravinářské
                firmě. V práci se jak nasedí, tak ujde kolem 10 000 kroků za
                den. Na svém začátku v boji s kily trpěl vysokým krevním tlakem,
                na který bral léky a bolavým kolenem. Jeho startovací hmotnost
                ukazovala celých 126,6 kg při výšce 176 cm.
              </p>
              <h5 className={styles.postTitle}>
                Kamutový salát s kuřecím masem sypaný sýrem
              </h5>
              <ul className={styles.postList}>
                <li>
                  Kuřecí prso necháme vcelku, okořeníme směsí soli, pepře,
                  adžiky a celerové nati. Upečeme s trochou oleje v troubě a
                  poté nakrájíme na plátky.
                </li>
                <li>
                  Kamut uvaříme dle návodu. Cibulku nakrájíme nadrobno,
                  orestujeme s kapkou oleje na pánvi, přidáme na proužky
                  nakrájené papriky, kukuřici a poloviny cherry rajčátek.
                  Restujeme jen chvíli, aby zelenina zůstala na skus. Dochutíme
                  solí a pepřem.
                </li>
                <li>
                  Na závěr promícháme kamut se zeleninou a petrželkou nasekanou
                  nadrobno. Na kamut vrstvíme kuřecí maso a posypeme parmazánem.
                </li>
              </ul>
              <img src={img2} className={styles.postImg} alt="img2" />
              <h5 className={styles.postTitle}>
                Sýrové rolky s dýňovým semínkem
              </h5>
              <ul className={styles.postList}>
                <li>
                  Dýňová semínka opražíme nasucho na pánvi, necháme vychladnout
                  a nadrtíme na malé kousky.
                </li>
                <li>
                  Tvaroh s žervé důkladně promícháme do hladka, ochutíme solí,
                  pepřem a nasekanou pažitkou. Krém namažeme na plátek sýru,
                  posypeme semínky a zabalíme do ruličky. Podáváme se zeleninou
                  a křehkým chlebem.
                </li>
              </ul>
            </div>
          </div>
          <PostSidebar />
        </div>
      </Container>
    </>
  )
}

export default Post1
