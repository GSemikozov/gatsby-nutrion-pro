import React from 'react';

import SEO from '../../components/seo';
import styles from './job.module.css';

// import jobBgSrc from "../../images/job-bg.png"
const JobPage = () => {
  return (
    <>
      <SEO title="Marketing manager" />

      <div className={styles.bgJob}>
        <div className={styles.job}>
          <h1 className={styles.textHeader}>Marketing manager</h1>

          <h3 className={styles.textSubHeader}>
            Do našeho rychle rostoucího týmu hledáme kolegu na pozici Marketing
            manager.
          </h3>
          <p className={styles.text}>
            Chceš být členem nadšeného týmu a hledáš kreativní práci v mladém a
            dynamickém kolektivu? Pokud jsi milovníkem zdravého životního stylu,
            máš tah na branku, cítíš se být aspirativní a nebojíš se realizovat
            vlastní nápady, tak jsi tady správně!
          </p>
          <p className={styles.text}>
            NutritionPro - je nový rychle rostoucí startup z oblasti FoodTech.
            Vyvinuli jsme algoritmus, který ti na základě tělesných údajů
            vytvoří jídelníček na míru. Tím to ale nekončí - přesně spočítané
            jídlo pro tebe i uvaříme a dovezeme!
          </p>

          <h3 className={styles.textSubHeader}>Co u nás budeš dělat?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Řídit marketingový tým z 6 lidí, který: vytváří a publikuje
              inspirativní kontent, řídí vztahy s influencery a spravuje
              sociální sítě, udržuje a posouvá kreativní výraz značky
            </li>
            <li className={styles.newList}>
              Vytvářet marketingové aktivity, které budou drivovat návštěvnost s
              cílem dosáhnout plánovaných obratů
            </li>
            <li className={styles.newList}>
              Navrhovat a realizovat efektivní marketingové kampaně a aktivity
              napříč všemi komunikačními kanály
            </li>
            <li className={styles.newList}>
              Komunikovat s médii a řídit PR aktivity
            </li>
            <li className={styles.newList}>
              Vytvářet image a komunikační strategii značky
            </li>
            <li className={styles.newList}>Organizovat průzkumy trhu</li>
            <li className={styles.newList}>
              Spolupracovat s performance marketing týmem
            </li>
          </ul>

          <h3 className={styles.textSubHeader}>Co od tebe očekáváme?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Zkušenost na pozici Marketing Managera
            </li>
            <li className={styles.newList}>
              Jsi sebevědomá a dynamická osobnost
            </li>
            <li className={styles.newList}>
              Velmi dobrou znalost češtiny a angličtiny
            </li>
            <li className={styles.newList}>
              Časovou flexibilitu, týmového ducha
            </li>
            <li className={styles.newList}>
              Chuť pracovat s nadšením a posouvat věci dopředu
            </li>
          </ul>

          <h3 className={styles.textSubHeader}>Co získáš od nás?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>Flexibilní pracovní dobu</li>
            <li className={styles.newList}>Sick-days</li>
            <li className={styles.newList}>Možnost home office</li>
            <li className={styles.newList}>Příspěvky na vzdělávací kurzy</li>
            <li className={styles.newList}>
              Odpovídající finanční ohodnocení, měsíční a kvartální bonusy
            </li>
            <li className={styles.newList}>Multisport karta</li>
            <li className={styles.newList}>
              Zaměstnanecké slevy na firemní produkty
            </li>
            <li className={styles.newList}>
              Posilovna a lekce jógy přímo v kanceláři zdarma
            </li>
            <li className={styles.newList}>
              Voda, káva, čaj, džusy, čerstvé ovoce na pracovišti zdarma
            </li>
          </ul>

          <p className={styles.text}>
            Sídlíme v moderních kancelářích v srdci Karlína, takže mimo jiné
            dostaneš i skvěle prostředí pro navázání kontaktů, neformální
            atmosféru bez dress code a velkou terasu s výhledem na Prahu!
          </p>

          <h3 className={styles.textSubHeader}>
            Těšíme se na tvoje CV a rádi Tě uvítáme v našem týmu NutritionPro!
          </h3>
          <h3 className={styles.textSubHeader}>Kontakty:</h3>
          <a className={styles.jobsEmail} href="mailto:yana@nutritionpro.cz">
            yana@nutritionpro.cz
          </a>
          {/* <a className={styles.jobsEmail} href="tel:+420608068463">
            +420 608 068 463
          </a> */}
          <br />
          <br />
          <a className={styles.backButton} href="/jobs">
            Zpět
          </a>
        </div>
      </div>
    </>
  )
}

export default JobPage
