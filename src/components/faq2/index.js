import cx from 'classnames';
import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { AnimatedWrapper } from '../animated-wrapper';
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

export const FAQ2 = () => {
  const [openedQuestion, setOpenedQuestion] = useState(0)
  const [openedSection, setOpenedSection] = useState(0)

  const { t } = useTranslation()

  const section0Texts = [
    {
      question: t("home.qa.tab1option1question"),
      answer: t("home.qa.tab1option1answer"),
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
      question: t("home.qa.tab1option2question"),
      answer: t("home.qa.tab1option2answer"),
    },
    {
      question: t("home.qa.tab1option3question"),
      answer: t("home.qa.tab1option3answer"),
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
      question: t("home.qa.tab2option1question"),
      answer: t("home.qa.tab2option1answer"),
    },
    {
      question: t("home.qa.tab2option2question"),
      answer: t("home.qa.tab2option2answer"),
    },
    {
      question: t("home.qa.tab2option3question"),
      answer: t("home.qa.tab2option3answer"),
    },
    {
      question: t("home.qa.tab2option4question"),
      answer: t("home.qa.tab2option4answer"),
    },
  ]

  const section2Texts = [
    {
      question: t("home.qa.tab3option1question"),
      answer: t("home.qa.tab3option1answer"),
    },
    {
      question: t("home.qa.tab3option2question"),
      answer: t("home.qa.tab3option2answer"),
    },
    {
      question: t("home.qa.tab3option3question"),
      answer: t("home.qa.tab3option3answer"),
    },
    {
      question: t("home.qa.tab3option4question"),
      answer: t("home.qa.tab3option4answer"),
    },
    {
      question: t("home.qa.tab3option5question"),
      answer: t("home.qa.tab3option5answer"),
    },
    {
      question: t("home.qa.tab3option6question"),
      answer: t("home.qa.tab3option6answer"),
    },
    {
      question: t("home.qa.tab3option7question"),
      answer: t("home.qa.tab3option7answer"),
    },
  ]

  const section3Texts = [
    {
      question: t("home.qa.tab4option1question"),
      answer: t("home.qa.tab4option1answer"),
    },
    {
      question: t("home.qa.tab4option2question"),
      answer: t("home.qa.tab4option2answer"),
    },
    {
      question: t("home.qa.tab4option3question"),
      answer: t("home.qa.tab4option3answer"),
    },
  ]

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
      <Container isWide={true} className={styles.container}>
        {/* <AnimatedWrapper> */}
        <h3 className="fancyUnderlineText sectionTitleNew text-center">
          {/* {t("home.qa.title")} */}
          <Trans i18nKey="home.qa.title">
            Často kladené <span>otázky</span>
          </Trans>
        </h3>
        {/* </AnimatedWrapper> */}
        {/* <AnimatedWrapper> */}
        <div className={styles.tabsTop}>
          <button
            type="button"
            className={cx(styles.tab, {
              [styles.active]: openedSection === 0,
            })}
            onClick={() => setOpenedSection(0)}
          >
            <div className={styles.tabImgWrap}>
              <img src={Img3} className={styles.tabImg} alt="icon" />
            </div>

            <div className={styles.tabTitle}>{t("home.qa.tab1title")}</div>
          </button>

          <button
            type="button"
            className={cx(styles.tab, {
              [styles.active]: openedSection === 1,
            })}
            onClick={() => setOpenedSection(1)}
          >
            <div className={styles.tabImgWrap}>
              <img src={Img4} className={styles.tabImg} alt="icon" />
            </div>

            <div className={styles.tabTitle}>{t("home.qa.tab2title")}</div>
          </button>

          <button
            type="button"
            className={cx(styles.tab, {
              [styles.active]: openedSection === 2,
            })}
            onClick={() => setOpenedSection(2)}
          >
            <div className={styles.tabImgWrap}>
              <img src={Img1} className={styles.tabImg} alt="icon" />
            </div>

            <div className={styles.tabTitle}>{t("home.qa.tab3title")}</div>
          </button>

          <button
            type="button"
            className={cx(styles.tab, {
              [styles.active]: openedSection === 3,
            })}
            onClick={() => setOpenedSection(3)}
          >
            <div className={styles.tabImgWrap}>
              <img src={Img2} className={styles.tabImg} alt="icon" />
            </div>

            <div className={styles.tabTitle}>{t("home.qa.tab4title")}</div>
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
        {/* </AnimatedWrapper> */}
      </Container>
    </section>
  )
}
