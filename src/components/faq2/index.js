import cx from 'classnames';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '../container';
import styles from './faq.module.css';
import AngleDownIcon from './icons/angle-down.svg';
import Img4 from './icons/icon1.svg';
import Img1 from './icons/icon2.svg';
import Img2 from './icons/icon3.svg';
import Img3 from './icons/icon4.svg';
import lessIcon from './icons/less-info.svg';
import moreIcon from './icons/more-info.svg';
import PlusIcon from './icons/plus.svg';

const section0Texts = [
  {
    question: "V čem jste jiní než ostatní krabičkové diety?",
    answer:
      "Věříme v individuální přístup. Každý z nás je originál a každý z nás potřebuje jiný kalorický příjem, pokud chce dosáhnout svého cíle zdravou cestou. Jinak bude vypadat menu pro 50kg ženu, která chce zhubnout a jinak pro 90kg muže, který chce nabrat svalovou hmotu. Jídelníček je proto přizpůsoben na míru tělu a cílům, což obyčejná krabičková dieta nebere v potaz.",
  },
  // {
  //   question: "Proč potřebuji znát složení svého těla?",
  //   answer:
  //     "Měřením získáš přehled o tom, jaký máš poměr mezi svalovou a tukovou hmotou a jaké je množství útrobního tuku a vody v těle. Jedná se o důležité indikátory zdraví, a proto je potřeba na ně brát ohled už při sestavování jídelníčku.",
  // },
  // {
  //   question: "Jak probíhá měření?",
  //   answer:
  //     "Pro měření používáme přístroj Tanita. Náš zaškolený pracovník za tebou přijede na místo, které sám určíš, a změří tě. Měření trvá jen několik minut. Můžeš se ale také nechat změřit na jakékoli váze, která toto měření umožňuje, a výsledky nám poté zaslat.",
  // },
  // {
  //   question: "Jak často bych se měl nechat změřit?",
  //   answer:
  //     "Díky častějšímu měření jsme schopni přesněji sledovat tvoje výsledky a dynamicky upravovat jídelníček. Měření tedy doporučujeme realizovat pravidelně každé 2–3 týdny.",
  // },
  {
    question: "Kdo sestavuje jídelníček?",
    answer:
      "Jídelníček je sestavován naším speciálním algoritmem na základě potřeb tvého těla a tvých cílů. Náš certifikovaný poradce pro výživu Jiří Kaloč pak zodpovídá za složení samotných jídel i za tvé výsledky.",
  },
  {
    question: "Jak vypadá jídelníček?",
    answer:
      "Jsme zastánci vyvážené stravy. Jídla jsou tak velmi pestrá a chutná. Jídelníček je sestavován z 300 různých jídel, která se pravidelně střídají. Zároveň naši databázi neustále aktualizujeme a zařazujeme nová a zajímavá jídla. Prostě se ti u nás žádné jídlo nepřejí.",
  },
  // {
  //   question:
  //     "Nejím některé potraviny, dokážete mi upravit jídelníček dle mých požadavků?",
  //   answer:
  //     "Ano, můžeš si u nás z jídelníčku vyloučit až 3 druhy potravin a upravit ho tak podle svých preferencí. V tuto chvíli však nenabízíme možnost low-carb, low-fat, vegetarián, vegan či speciálních zdravotních diet.",
  // },
]

const section1Texts = [
  {
    question: "Jaké používáte suroviny?",
    answer:
      "Kvalitní a čerstvé suroviny jsou pro zdravé stravování základem, proto používáme výhradně prémiové suroviny od českých dodavatelů.",
  },
  {
    question: "Jsou vaše jídla čerstvá?",
    answer:
      "Ano, suroviny kupujeme v den přípravy. Jídlo se následně šokově zchladí (z 90 °C na 2 °C za méně než hodinu) a hermeticky balí. To zajišťuje maximální čerstvost.",
  },
  {
    question: "Kdy jídlo připravujete?",
    answer:
      "Příprava jídel probíhá v den rozvozu. To znamená, že v neděli připravujeme na pondělí a úterý, v úterý na středu a čtvrtek, ve čtvrtek na pátek a sobotu.",
  },
  {
    question: "Máte dezerty?",
    answer:
      "Ano, jsou výborné. A navíc přesně na gram spočítané tak, aby zapadly do tvého osobního jídelníčku.",
  },
]

const section2Texts = [
  {
    question: "Kam ti jídlo dovezeme?",
    answer: "Naše krabičky si vychutnáš kdekoliv po Praze.",
  },
  {
    question: "Kdy jídlo doručujete?",
    answer:
      "Jídlo rozvážíme obden, a to v úterý, čtvrtek a neděli. Vždy mezi 17. a 22. hodinou. Čas můžeš upřesnit v rámci dvouhodinových oken.",
  },
  {
    question: "Co když potřebuji změnit doručovací údaje?",
    answer:
      "Jsme flexibilní, nemusíš se tedy bát změn v tvých plánech. Čas či místo doručení můžeš změnit i v ten samý den do 15. hodiny.",
  },
  {
    question: "Jak dlouho dopředu musím nahlásit vynechání dovozu?",
    answer:
      "Vynechání dovozu je možné nahlásit pouze v pracovní době zákaznické podpory, tj. Pondělí–Pátek od 10:00 do 18:00, nejpozději však 3 celé pracovní dny přede dnem doručení. Nepočítá se však samotný den doručení, tj. den doručení minus 3 celé pracovní dny. Děje se tak z důvodu, že pro každé vaření nakupujeme čerstvé suroviny pro přesný počet zákazníků.",
  },
  {
    question: "Můžu zrušit pouze jeden den?",
    answer:
      "V případě, že se tvoje objednávka vztahuje na dva dny, můžeš zrušit pouze celou dvoudenní objednávku. Zrušit pouze jeden den v tomto případě není možné.",
  },
  {
    question: "Jak stanovujete cenu?",
    answer:
      "Cena je stanovena individuálně podle stravovacího plánu na míru a je odvozena podle potřeby denního kalorického příjmu pro daného člověka a podle jeho cíle. Cena pak bude odlišná v případě ženy, která chce zhubnout, a muže, který chce nabrat svalovou hmotu. Současná průměrná cena se však pohybuje kolem 480,- Kč za pětichodové denní menu.",
  },
  {
    question: "Jak probíhá platba?",
    answer:
      "Po realizaci objednávky ti bude vystavena faktura a odeslána k proplacení na tvůj e-mail.",
  },
]

const section3Texts = [
  {
    question: "Musí se jídlo ohřívat?",
    answer:
      "Některá jídla jsou určena ke konzumaci za studena, jiná jsou zase určena k ohřevu. Můžeš je konzumovat i neohřáté, ale pro lepší chuť doporučujeme jejich ohřátí.",
  },
  {
    question: "Jak ohřívat jídlo?",
    answer:
      "Pokud použiješ ohřev v mikrovlnné troubě, doporučujeme do folie propíchnout dírky. Potřebný čas ohřevu se liší podle druhu jídla a velikosti porce. Pro rovnoměrné prohřátí jídla doporučujeme použít střední výkon (6000–7000 W) a delší čas.",
  },
  {
    question: "Jak skladovat jídlo?",
    answer:
      "Jídlo doporučujeme skladovat v lednici, ale není problém si ho vzít i do práce nebo na cesty. Jídlo vydrží několik hodin mimo lednici, a to bez jakékoliv změny chuti či kvality.",
  },
]

export const FAQ2 = () => {
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

  const { t } = useTranslation()

  return (
    <section className={styles.section} id="faq">
      <Container className={styles.container}>
        <h3 className="fancyUnderlineText sectionTitleNew text-center">
          {/* {t("home.qa.title")} */}
          Často kladené <span>otázky</span>
        </h3>
        <div className={styles.tabsTop}>
          <button
            type="button"
            className={cx(styles.tab, { [styles.active]: openedSection === 0 })}
            onClick={() => setOpenedSection(0)}
          >
            <div className={styles.tabImgWrap}>
              <img src={Img3} className={styles.tabImg} alt="icon" />
            </div>

            <div className={styles.tabTitle}>Jídelníček na míru</div>
          </button>

          <button
            type="button"
            className={cx(styles.tab, { [styles.active]: openedSection === 1 })}
            onClick={() => setOpenedSection(1)}
          >
            <div className={styles.tabImgWrap}>
              <img src={Img4} className={styles.tabImg} alt="icon" />
            </div>

            <div className={styles.tabTitle}>Suroviny</div>
          </button>

          <button
            type="button"
            className={cx(styles.tab, { [styles.active]: openedSection === 2 })}
            onClick={() => setOpenedSection(2)}
          >
            <div className={styles.tabImgWrap}>
              <img src={Img1} className={styles.tabImg} alt="icon" />
            </div>

            <div className={styles.tabTitle}>Rozvoz a platba</div>
          </button>

          <button
            type="button"
            className={cx(styles.tab, { [styles.active]: openedSection === 3 })}
            onClick={() => setOpenedSection(3)}
          >
            <div className={styles.tabImgWrap}>
              <img src={Img2} className={styles.tabImg} alt="icon" />
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
                  <img src={lessIcon} alt="icon" />
                ) : (
                  <img src={moreIcon} alt="icon" />
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
