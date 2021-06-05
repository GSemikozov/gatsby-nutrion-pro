import cx from 'classnames';
import React from 'react';

import { CategoriesFilterPanel } from '../../components/blog/categories-filter-panel';
import { Hero } from '../../components/blog/hero';
import { PostSidebar } from '../../components/blog/post-sidebar';
import { Breadcrumbs, BreadcrumbsItem } from '../../components/breadcrumbs';
import { Container } from '../../components/container';
import img1 from './post-4.jpg';
import styles from './post-grid.module.css';

const Post4 = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Breadcrumbs style={{ margin: "24px 0" }}>
          <BreadcrumbsItem link="/">Domu</BreadcrumbsItem>
          <BreadcrumbsItem link="/blog/posts">Blog</BreadcrumbsItem>
          <BreadcrumbsItem link="/blog/post-4">
            Krabičkování. Proč je krabičková dieta snadné řešení.
          </BreadcrumbsItem>
        </Breadcrumbs>
      </Container>
      <Container>
        <div className={styles.postGrid}>
          <div>
            <Hero
              title="Krabičkování. Proč je krabičková dieta snadné řešení."
              date="31.05.21"
            />
            <div>
              <p className={styles.postText}>
                Dnešní životní tempo velkoměsta je občas až moc rychlé. Máme
                málo času na domácí práce, úklid, praní, žehlení a bohužel i na
                nákupy a vaření. Většina pracujících lidi tak nestíhá jíst včas
                a správně. Výsledkem je přejídání se večer po práci, příliš
                mnoho cukru a tuku a nedostatek vlákniny. A to je špatně.
              </p>
              <img
                src={img1}
                className={styles.postImg}
                style={{ marginBottom: "40px" }}
                alt="img1"
              />
              <h5 className={styles.postTitle}>Jak z toho ven</h5>
              <p className={styles.postText}>
                Nemusíte se točit v začarovaném kruhu. Krabičková dieta je
                správnou volbou pro ty, co si přejí žít zdravěji, zhubnout, jíst
                lépe a pravidelněji než dosud.{" "}
                <b>Dobrá zpráva, vaření netřeba</b>. Jídlo totiž dostanete
                komplet hotové a dokonce až ke dveřím. Každý den na vás čeká
                domluvený počet krabiček, ve kterých najdete snídani, oběd,
                večeři a případně i svačiny.
              </p>
              <h5 className={styles.postTitle}>
                S čím bojuje 99% pracujících lidí
              </h5>
              <ul className={styles.postList}>
                <li>nesprávné sestavení jídel</li>
                <li>tápání při nastavení stravovacího režimu</li>
                <li>stres a poruchy spánky</li>
                <li>nedostatek fyzické aktivity</li>
                <li>touha zhubnout</li>
                <li>nízká produktivita</li>
              </ul>
              <p className={styles.postText}>
                <b>
                  Zdravá výživa není jen o jídle, ale o všech stránkách našeho
                  života
                </b>
                . Změnou stravovacích návyků tak můžete ovlivnit jak fyzické
                zdraví, tak psychiku.
              </p>
              <h5 className={styles.postTitle}>Výhody krabičkové diety</h5>
              <ol className={cx(styles.postList, styles.postListNumber)}>
                <li>
                  <strong>Úspora času</strong>. Žádné vymýšlení, nákupy, ani
                  vaření.
                </li>
                <li>
                  <strong>Snížení váhy a prevence nadváhy/obezity. </strong>
                </li>
                <li>
                  <strong>Hubnutí pod dohledem</strong>. Spolu s krabičkami
                  získáte i kontrolu nutričního terapeuta.
                </li>
                <li>
                  <strong>Bez čísel</strong>. Žádné vážení, ani počítání kcal -
                  jen nutričně i kaloricky vyvážená jídla, připravená zdravým
                  způsobem z kvalitních surovin.
                </li>
                <li>
                  <strong>Správné stravovací návyky</strong>. Naučíte se jíst
                  pravidelně a zdravě, a tak dosáhnete svých cílů.
                </li>
                <li>
                  <strong>Zdravé sladkosti</strong>. Pokud máte slabost pro
                  sladké, s krabičkovou dietou si zdravá sladká jídla užijete
                  každý den. (tady by bylo fajn přidat fotku)
                </li>
              </ol>
              <p className={styles.postText} style={{ marginBottom: "32px" }}>
                V čem jsou krabičky NutritionPro jiné? Jsou:
              </p>
              <ul className={styles.postList}>
                <li>Zdravé, chutné a nutričně vyvážené.</li>
                <li>Pestré. Vaříme z více než 1000 receptů.</li>
                <li>Program pod dohledem nutričního terapeuta.</li>
                <li>Kontrola vašich výsledků v ceně programu.</li>
              </ul>
              <p className={styles.postText} style={{ marginBottom: "32px" }}>
                Díky spolupráci spolu můžeme:
              </p>
              <ul className={styles.postList}>
                <li>Sestavit váš ideální jídelníček na míru.</li>
                <li>Co nejlépe upravit váš kalorický příjem.</li>
                <li>Dovést vás do cíle rychleji a efektivněji. </li>
                <li>
                  Konzultovat váš stravovací režim s nutričním terapeutem z
                  lékařské fakulty.
                </li>
              </ul>
              <p className={styles.postText}>
                Stačí jen napsat. Tak jděte do toho, jsme tu pro vás!
              </p>
            </div>
          </div>
          <PostSidebar />
        </div>
      </Container>
    </div>
  )
}

export default Post4
