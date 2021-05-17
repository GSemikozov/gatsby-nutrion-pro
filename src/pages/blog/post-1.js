import React from 'react';

import { CategoriesFilterPanel } from '../../components/blog/categories-filter-panel';
import { Hero } from '../../components/blog/hero';
import { PostSidebar } from '../../components/blog/post-sidebar';
import { Breadcrumbs, BreadcrumbsItem } from '../../components/breadcrumbs';
import { Container } from '../../components/container';
import img1 from './post-1.jpg';
import styles from './post-grid.module.css';

const Post1 = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Breadcrumbs style={{ margin: "24px 0" }}>
          <BreadcrumbsItem link="/">Domu</BreadcrumbsItem>
          <BreadcrumbsItem link="/blog/posts">Blog</BreadcrumbsItem>
          <BreadcrumbsItem link="/blog/post-1">
            Chia semínka. Super potravina nebo hype?
          </BreadcrumbsItem>
        </Breadcrumbs>
      </Container>
      <Container>
        <div className={styles.postGrid}>
          <div>
            <Hero
              title="Chia semínka. Super potravina nebo hype?"
              date="20.05.21"
            />
            <div>
              <p className={styles.postText}>
                Věděli jste, chia semínka se používala jako měna a vládci Mayů a
                Aztéků je přijímali od poražených kmenů jako oběť? A dělo se to
                už před pěti tisíci lety ve starověkém Mexiku. I teď na
                internetu najdete jen pozitivní informace. Žádná negativa či
                kontraindikace zatím nejsou známa.
              </p>
              <img src={img1} className={styles.postImg} alt="img1" />
              <h5 className={styles.postTitle}>Co je na tom pravdy?</h5>
              <p className={styles.postText}>
                Chia semínka jsou přímo nabitá zdraví prospěšnými látkami.
                Obsahují více draslíku než banány, více vápníku než mléko a
                navíc jako luštěniny spoustu rostlinných bílkovin. Semínka jsou
                bohatá na vitamíny, vlákninu a zdravé, nenasycené omega 3 mastné
                kyseliny. , které pomáhají udržet vaše srdce v kondici.
              </p>
              <p className={styles.postText}>Na 100 g produktu: 486 kcal</p>
              <p className={styles.postText}>
                Bílkoviny, g: 16,5
                <br />
                Tuk, g: 30,7
                <br />
                Sacharidy, g: 7,72
                <br />
                Vláknina, g: 34,4
              </p>
              <p className={styles.postText}>
                Co dál? Chia semínka zasytí a jsou tak super zdravou součástí
                svačinky nebo snídaně. Díky chytré přeměně na želé po namočení
                se skvěle hodí na přípravu domácí marmelády. Přidat je můžete do
                jogurtu nebo do vody. A je i z nich moc výborný pudink s
                rostlinným mlékem a ovocem.
              </p>
              {/* <img src={img2} className={styles.postImg} alt="img2" /> */}
              <h5 className={styles.postTitle}>Rovnováha je důležitá.</h5>
              <p className={styles.postText}>
                Všeho moc škodí. Mějte na paměti, že denní norma jsou maximálně
                2 lžíce, což je zhruba 15-20 g. I když vám někteří odborníci na
                výživu budou tvrdit opak, vězte, že ve velkém množství si chia
                semínka zle pohrají s krevním tlakem a srdeční frekvencí. Tak si
                je dopřejte v rozumném množství.
              </p>
              <h5 className={styles.postTitle}>Chia jako superpotravina?</h5>
              <p className={styles.postText}>
                O superpotravinách už jste asi slyšeli. Jde o některé druhy
                ovoce, zeleniny, ořechů a semínek, slibujících zázračný přínos
                pro naše zdraví. Ve srovnání s jinými potravinami je to velké
                množství vitamínů, minerálních látek a antioxidantů. Říká se
                taky, že si poradí s vysokým krevním tlakem, cukrovkou,
                srdečními chorobami a dokonce i s rakovinou.
              </p>
              <h5 className={styles.postTitle}>Superpotraviny = super síla?</h5>
              <p className={styles.postText}>
                Záleží, co si pod superlativem představujete. Standardní seznam
                superpotravin zahrnuje bobule (zejména borůvky), tučné ryby,
                špenát, ořechy (jako vlašské ořechy), olivový olej, zeleninu
                (brokolice, růžičková kapusta) a luštěniny. V průběhu let se
                přidala další jídla a koření jako kurkuma, skořice a taky
                avokádo nebo právě chia semínka.
              </p>
              <h5 className={styles.postTitle}>
                Jsou ale superpotraviny vážně lepší než ty obvyklé?
              </h5>
              <p className={styles.postText}>
                Ano i ne. Žádná kritéria pro označení superpotraviny totiž
                neexistují, a tak si je většinou určuje marketing. To ale nutně
                neznamená, že jsou superpotraviny špatně. Hodně z nich je
                opravdu zdraví prospěšných.{" "}
                <strong>
                  Bez zdravé a vyvážené stravy, pitného režimu a dostatečné
                  fyzické aktivity vám ale k zázraku nepomohou.
                </strong>
              </p>
            </div>
          </div>
          <PostSidebar />
        </div>
      </Container>
    </div>
  )
}

export default Post1
