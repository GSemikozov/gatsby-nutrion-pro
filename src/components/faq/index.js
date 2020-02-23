import cx from 'classnames';
import React, { useState } from 'react';

import { Container } from '../container';
import styles from './faq.module.css';
import AngleDownIcon from './icons/angle-down.svg';
import Img4 from './icons/catering.svg';
import Img1 from './icons/chef.svg';
import Img2 from './icons/dining.svg';
import Img3 from './icons/healthy-food.svg';
import PlusIcon from './icons/plus.svg';

const section0Texts = [
  {
    question: "Proč potřebuji znát složení svého těla?",
    answer:
      "Měřením získáš přehled o tom, jaký máš poměr mezi svalovou a tukovou hmotou, množství útrobního tuku a vody v těle. To jsou důležité indikátory zdraví a je třeba na ně brát ohled při sestavování jídelníčku.",
  },
  {
    question: "Jak probíhá měření?",
    answer:
      "Měření trvá několik minut. Zdarma se můžeš změřit na pobočce světa zdraví na adrese: Praha 1, Dlážděná 5. Nebo na jakékoliv váze, která toto měření umožňuje.",
  },
  {
    question: "Jak často bych se měl nechat změřit?",
    answer:
      "Díky častějšímu měření jsme schopni přesněji sledovat tvoje výsledky a dynamicky upravovat jídelníček. Doporučujeme se pravidelně měřit každé 2-3 týdny.",
  },
  {
    question: "Kdo sestavuje jídelníček?",
    answer:
      "Jídelníček je sestavován námi vyvinutým algoritmem na základě potřeb tvého těla a tvých cílů. Za složení samotných jídel je zodpovědný Jiří Kaloč, certifikovaný poradce pro výživu.",
  },
  {
    question: "Jak pestrý je jídelníček?",
    answer:
      "Jídelníček sestavuje náš algoritmus z 300 jídel, které se pravidelně střídají. Stále pracujeme na zařazení nových jídel, takže se můžeš těšit na stále nová a zajímavá jídla.",
  },
  {
    question:
      "Nejím některé potraviny, dokážete mi upravit jídelníček dle mých požadavků?",
    answer: "Ano, jídelníček ti upravíme na základě tvých preferencí. ",
  },
  {
    question: "Jak dlouho dopředu musím nahlásit vynechání dovozu?",
    answer:
      "Vynechání dovozu je možné pouze v pracovní době zákaznické podpory, tj. Po–Pá od 10:00 do 18:00, nejpozději však 3 celé pracovní dny přede dnem doručení (nepočítá se však samotný den doručení, tj. den doručení minus 3 celé pracovní dny). Děje se tak z důvodu, že pro každé vaření nakupujeme čerstvé suroviny pro přesný počet zákazníků.",
  },
  {
    question: "Můžu zrušit pouze jeden den?",
    answer:
      "V případě, že se Vaše objednávka vztahuje na dva dny, tak můžete zrušit pouze celou dvoudenní objednávku. Zrušit pouze jeden den v tomto případě tedy není možné.",
  },
]

const section1Texts = [
  {
    question: "Jsou vaše jídla čerstvá?",
    answer:
      "Ano, suroviny kupujeme v den přípravy. Jídlo se následně šokově zchladí (z 90°C na 2°C za méně než hodinu) a hermeticky balí. To zajišťuje maximální čerstvost.",
  },
  {
    question: "Používáte kvalitní suroviny?",
    answer:
      "Ano, zeleninu, maso a vejce nakupujeme pouze u českých dodavatelů.",
  },
  {
    question: "Jak připravujete jídlo?",
    answer:
      "Příprava jídel probíhá den dopředu (tzn. v neděli na pondělí a úterý, v úterý na středu a čtvrtek atd.)",
  },
  {
    question: "Máte dezerty?",
    answer:
      "Ano, jsou výborné, zdravé a na gram přesně spočítané, tak aby zapadly do tvého osobního jídelníčku.",
  },
]

const section2Texts = [
  {
    question: "Doručujete i do okrajových částí Prahy?",
    answer:
      "Ano, pro upřesnění a bližší info nás neváhej kontaktovat na klientské lince.",
  },
  {
    question: "Kdy doručujete?",
    answer:
      "Jídlo rozvážíme obden a to v neděli, úterý a čtvrtek, mezi 17. a 22. hodinou, čas si můžeš dále upřesnit na dvě hodiny. Jsme flexibilní, nemusíš se tedy bát změn v tvých plánech, čas doručení si můžete změnit i v ten samý den.",
  },
  {
    question:
      "Co když potřebuji změnit doručovací údaje, nebo odjíždím mimo Prahu?",
    answer:
      "Změnit doručovací údaje můžete do 15. hodiny dne doručení. Pokud odjíždíš mimo Prahu, stačí nás o tom informovat dva dny předem.",
  },
  {
    question: "Jak stanovujete cenu?",
    answer: "Současná průměrná cena je 480 Kč za pětichodové denní menu.",
  },
  {
    question: "Jak probíhá platba?",
    answer: "Po objednání dostanete na email fakturu.",
  },
]

const section3Texts = [
  {
    question: "Jak ohřívat jídlo?",
    answer:
      "Do fólie propíchni dírky a ohřej v mikrovlnné troubě. Potřebný čas se liší podle druhu jídla a velikosti porce. Pro rovnoměrné prohřátí jídla doporučujeme použít střední výkon (600-700 W) a delší čas.",
  },
  {
    question: "Musí se jídlo ohřívat?",
    answer:
      "Některé jídla jsou určeny ke konzumaci za pokojové teploty. Jídla určená k ohřevu se dají konzumovat i neohřáté, ale pro lepší chuť je doporučujeme ohřát.",
  },
  {
    question: "Jak skladovat jídlo?",
    answer:
      "Jídlo doporučujeme skladovat v lednici, ale není problém si ho vzít do práce, nebo na cesty. Jídlo vydrží několik hodin mimo lednici a to bez jakékoliv změny chuti, či kvality.",
  },
]

export const FAQ = () => {
  const [openedQuestion, setOpenedQuestion] = useState(0)
  const [openedSection, setOpenedSection] = useState(0)

  let texts = []
  if (openedSection === 0) {
    texts = section0Texts
  } else if (openedSection === 1) {
    texts = section1Texts
  } else if (openedSection === 2) {
    texts = section2Texts
  } else if (openedSection === 3) {
    texts = section3Texts
  }

  return (
    <section className={styles.section} id="faq">
      <Container className={styles.container}>
        <h3 className="sectionTitle text-center">Často kladené otázky</h3>
        <div className={styles.tabsTop}>
          <button
            type="button"
            className={cx(styles.tab, { [styles.active]: openedSection === 0 })}
            onClick={() => setOpenedSection(0)}
          >
            <div className={styles.tabImgWrap}>
              <img src={Img1} className={styles.tabImg} alt="icon" />
            </div>

            <div className={styles.tabTitle}>Jídlo na míru</div>
          </button>

          <button
            type="button"
            className={cx(styles.tab, { [styles.active]: openedSection === 1 })}
            onClick={() => setOpenedSection(1)}
          >
            <div className={styles.tabImgWrap}>
              <img src={Img2} className={styles.tabImg} alt="icon" />
            </div>

            <div className={styles.tabTitle}>Suroviny</div>
          </button>

          <button
            type="button"
            className={cx(styles.tab, { [styles.active]: openedSection === 2 })}
            onClick={() => setOpenedSection(2)}
          >
            <div className={styles.tabImgWrap}>
              <img src={Img3} className={styles.tabImg} alt="icon" />
            </div>

            <div className={styles.tabTitle}>Rozvoz a platba</div>
          </button>

          <button
            type="button"
            className={cx(styles.tab, { [styles.active]: openedSection === 3 })}
            onClick={() => setOpenedSection(3)}
          >
            <div className={styles.tabImgWrap}>
              <img src={Img4} className={styles.tabImg} alt="icon" />
            </div>

            <div className={styles.tabTitle}>Způsob konzumace</div>
          </button>
        </div>

        <div className={styles.tabsContent}>
          {texts.map(({ question, answer }, index) => (
            <div
              className={styles.listItem}
              key={index}
              onClick={() => setOpenedQuestion(index)}
              opened={(openedQuestion === index).toString()}
            >
              <h4 className={styles.listTitle}>
                {question}{" "}
                {openedQuestion === index ? (
                  <img src={AngleDownIcon} alt="icon" />
                ) : (
                  <img src={PlusIcon} alt="icon" />
                )}
              </h4>
              <p className={styles.listText}>
                {openedQuestion === index ? answer : null}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
