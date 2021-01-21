import React from 'react';

import SEO from '../../components/seo';
import styles from './job.module.css';

// import jobBgSrc from "../../images/job-bg.png"
const JobPage = () => {
  return (
    <>
      <SEO title="Vedoucí výroby" />

      <div className={styles.bgJob}>
        <div className={styles.job}>
          <h1 className={styles.textHeader}>Vedoucí výroby</h1>

          {/* <h3 className={styles.textSubHeader}>
            Do našeho týmu hledáme šikovného/ou kolegu/yni na pozici Technologa potravinářské výroby. Máte praxi v potravinářském průmyslu? Baví Vás technologie výrobních procesů? Tak jste tady správně!
          </h3> */}
          <p className={styles.text}>
            Do našeho týmu hledáme šikovného/ou kolegu/yni na pozici <b>Vedoucí výroby</b>. <br />
            Máš praxi v potravinářském průmyslu? Baví tě technologie výrobních procesů? Tak jsi tady správně!
          </p>
          <p className={styles.text}>
            NutritionPro je nový, rychle rostoucí startup z oblasti FoodTech. Přišli jsme na trh s námi vyvinutým algoritmem, 
            který je schopen vytvořit klientovi jídelníček na míru založený na údajích o jeho těle. Tím to ale nekončí – 
            jídlo pro něj uvaříme a dovezeme ho až ke dveřím!
          </p>
          <p className={styles.text}>
            Budeš mít na starosti jednu z nejdůležitějších části projektu - kontrolu celého výrobního procesu.
          </p>


          <h3 className={styles.textSubHeader}>Náplň práce:</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Intenzivní komunikace a kontrola výrobních procesů u našich dodavatelů - externích kuchyní.
            </li>
            <li className={styles.newList}>
              Zajištění a kontrola plnění technologických a kvalitativních norem dle požadavků firmy.
            </li>
            <li className={styles.newList}>
              Stalá optimalizace, analýza a zlepšování výrobních procesů.
            </li>
            <li className={styles.newList}>
              Udržování rotace receptů.
            </li>
            <li className={styles.newList}>
              Vytvoření nových produktových řad.
            </li>
          </ul>
 


          <h3 className={styles.textSubHeader}>Jak vypadá ideální kandidát?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Zkušenosti z výrobního provozu v gastronomii min. 5 let 
            </li>
            <li className={styles.newList}>
              Znalost, orientace v HACCP a IFS normách a předpisech 
            </li>
            <li className={styles.newList}>
              Samostatnost a aktivní přístup k práci 
            </li>
            <li className={styles.newList}>
              Dobré komunikační a organizační schopnosti
            </li>
            <li className={styles.newList}>
              Výhoda, ale ne nutnost je praxe s výrobou krabičkových diet.
            </li>
          </ul>







          <h3 className={styles.textSubHeader}>Co od nás získáte?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>Motivující finanční ohodnocení, měsíční a kvartální bonusy</li>
            <li className={styles.newList}>Full-time uplatnění</li>
            <li className={styles.newList}>Příspěvky na vzdělávací kurzy</li>
            <li className={styles.newList}>Multisport kartu</li>
            <li className={styles.newList}>
              Posilovnu a lekce jógy přímo v kanceláři zdarma
            </li>
          </ul>

          <p className={styles.text}>
            Sídlíme v moderních kancelářích v srdci Karlína, takže mimo jiné dostaneš i skvěle prostředí pro navázání kontaktů, 
            neformální atmosféru bez dress code a velkou terasu s výhledem na Prahu!
          </p>

          <h3 className={styles.textSubHeader}>
            Těšíme se na tvoje CV a rádi tě uvítáme v našem týmu NutritionPro!
          </h3>
          <h3 className={styles.textSubHeader}>Kontakty:</h3>
          <a className={styles.jobsEmail} href="mailto:elena@nutritionpro.cz">
            elena@nutritionpro.cz
          </a>
          <br />
          <a className={styles.jobsEmail} href="tel:+420608068463">
            +420 608 068 463
          </a>
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
