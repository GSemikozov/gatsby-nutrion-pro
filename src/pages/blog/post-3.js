import React from 'react';

import { CategoriesFilterPanel } from '../../components/blog/categories-filter-panel';
import { Hero } from '../../components/blog/hero';
import { PostSidebar } from '../../components/blog/post-sidebar';
import { Breadcrumbs, BreadcrumbsItem } from '../../components/breadcrumbs';
import { Container } from '../../components/container';
import styles from './post-grid.module.css';
import img1 from './post1-img1.png';
import img2 from './post1-img2.png';

const Post3 = () => {
  return (
    <>
      <Container>
        <Breadcrumbs style={{ margin: "24px 0" }}>
          <BreadcrumbsItem link="/">Domu</BreadcrumbsItem>
          <BreadcrumbsItem link="/blog/posts">Blog</BreadcrumbsItem>
          <BreadcrumbsItem link="/blog/post-3">
            S vodou je spojeno hodně mýtů. Co je vhodné pít, kdy a v jakém
            množství?
          </BreadcrumbsItem>
        </Breadcrumbs>
      </Container>
      <Container>
        <div className={styles.postGrid}>
          <div>
            <Hero
              title="S vodou je spojeno hodně mýtů. Co je vhodné  pít, kdy a v jakém množství?"
              date="20.05.21"
            />
            <div>
              <p className={styles.postText}>
                Voda je ten nejdůležitější a nejzdravější zdroj tekutin, který
                existuje. Voda hraje klíčovou roli při trávení jídla a absorpci
                živin, pomáhá odstranit z těla všechny odpadní látky, a zároveň
                je prostředím pro chemické procesy metabolismu.
              </p>
              <p className={styles.postText}>
                Nejvyšší podíl vody na tělesné hmotnosti je u novorozenců, a to
                75–80 %. V průběhu života neustále klesá a u dospělého člověka
                zůstává na pouhých 55–60 %. Ve stáří se tento podíl ještě sníží.
              </p>
              <h5 className={styles.postTitle}>Pití během jídla</h5>
              <p className={styles.postText}>
                Dostatečný příjem tekutin je jednoznačně prospěšný. V současné
                době ale existují i názory, které poukazují na načasování příjmu
                tekutin, škodlivost pití během jídla a jeho vliv na správné
                trávení. Říkají, že konzumace tekutin v průběhu jídla ředí
                žaludeční kyseliny a trávicí proces je poté obtížnější.
              </p>
              <p className={styles.postText}>
                Naše fyziologie funguje velmi specificky. Žaludeční šťáva
                obsahuje kyselinu chlorovodíkovou, kterou nemůžeme jen tak
                naředit vodou a není tak důvod podceňovat naše tělo . Pokud se
                množství konzumovaného jídla zvýší, zvýší se i množství vyrobené
                kyseliny. Pokud by to z ředěním žaludečních šťáv bylo takto
                jednoduché, netrpěli bychom pálením žáhy. Jednoduše bychom ji
                uhasili pomocí sklenice vody. Jak ale víte, voda proti pálení
                žáhy nepomáhá.
              </p>
              <h5 className={styles.postTitle}>Proces trávení.</h5>
              <p className={styles.postText}>
                Pokud se bojíte, že vypitá tekutina vám naruší kyselé prostředí
                a proces trávení v žaludku, je důležité znát zásadní věc. Hlavní
                proces trávení potravy probíhá ve střevech, ne v žaludku. Právě
                tam jsou pod vlivem pankreatických šťáv a žluči tráveny a
                vstřebávány všechny živiny. A co je nejzajímavější? Narozdíl od
                žaludku tam prostředí není kyselé, ale zásadité.
              </p>
              <p className={styles.postText}>
                Zředit žaludeční šťávu a narušit si tím trávení prostě není
                možné! Ale. Velké množství tekutiny vypité s jídlem může
                zbytečně zvětšit objem potravy v žaludku a vyvolat tak
                nepříjemný pocit. Pít během jídla je tedy vhodné jen tak,
                abychom se cítili komfortně.
              </p>
              <h5 className={styles.postTitle}>Vodní bilance</h5>
              <p className={styles.postText}>
                Člověk v průměru vyloučí asi 2,5 litru vody denně, a to močí,
                stolicí, dýcháním i kůží. Aby tělo správně vyrovnalo vodní
                bilanci a tyto ztráty uhradilo, musí vodu přijímat.
              </p>
              <p className={styles.postText}>
                Příjem tekutin by neměl klesnout pod 2 litry denně, v horkých
                dnech a při větší fyzické aktivitě je třeba pít ještě více.
                Pokud chcete, můžete si spočítat množství tekutin vhodné právě
                pro vás. Na 1kg tělesné váhy byste měli vypít 20-40ml tekutin.V
                ideálním případě tekutiny doplňovat plynule po celý den. Pozor
                na kalorické a sladké nápoje. Do denního příjmu tekutin se
                nepočítají, zato ale zvyšují počet přijatých kalorií! Naopak
                pokud zařadíte do jídelníčku polévky a hodně zeleniny, zvýšíte
                tím svůj příjem tekutin.
              </p>
              <p className={styles.postText}>
                A jak poznat možnou dehydrataci? Hlavními příznaky jsou bolesti
                hlavy, únava a malátnost, pokles fyzické a duševní výkonnosti,
                problémy se soustředěním a koncentrací. Takže nezapomeňte na
                pitný režim a dejte si sklenku vody.
              </p>
            </div>
          </div>
          <PostSidebar />
        </div>
      </Container>
    </>
  )
}

export default Post3
