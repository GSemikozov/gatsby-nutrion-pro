import React from 'react';

import SEO from '../../components/seo';
import styles from './job.module.css';

const JobPage = () => {
  return (
    <>
      <SEO title="Operations Manager" />

      <div className={styles.bgJob}>
        <div className={styles.job}>
          <h1 className={styles.textHeader}>Event Manager</h1>
          <p className={styles.text}>Ahoj!</p>
          <p className={styles.text}>
            Do našeho mladého týmu hledáme šikovného/ou kolegu/yni na pozici
            Event Manager. Rád/a komunikuješ s lidmi a chceš se podílet na
            rozvoji nového progresivního řešení v oblasti zdravé výživy? Tak jsi
            tady správně!
          </p>
          <p className={styles.text}>
            NutritionPro je nový, rychle rostoucí startup z oblasti FoodTech.
            Přišli jsme na trh s námi vyvinutým algoritmem, který na základě
            údajů o Tvém těle je schopen vytvořit jídelníček přímo Tobě na míru.
            Tím to ale nekončí – jídlo pro tebe uvaříme a dovezeme až ke dveřím!
          </p>

          <h3 className={styles.textSubHeader}>Co budeš mít na starosti?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Organizaci našich ochutnávacích akcí a workshopů v fitness
              centrech a kancelářích
            </li>
            <li className={styles.newList}>
              Zajištění potřebných materiálů (brožury, letáky atd.)
            </li>
            <li className={styles.newList}>
              Komunikaci s našimi obchodními partnery
            </li>
            <li className={styles.newList}>
              Koordinaci týmu (hostesek, fotografů, sales manažerů)
            </li>
          </ul>

          <h3 className={styles.textSubHeader}>Jak bychom tě představovali?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Máš výborné komunikační a organizační schopnosti
            </li>
            <li className={styles.newList}>
              Máš prokazatelné zkušenosti z organizaci eventů různých velikosti
            </li>
            <li className={styles.newList}>
              Dokážeš si zachovat chladnou hlavu i ve stresových situacích
            </li>
            <li className={styles.newList}>Baví Tě zdravý životní styl</li>
            <li className={styles.newList}>Jsi otevřený/á novým věcem</li>
          </ul>
          <h3 className={styles.textSubHeader}>Co získáš od nás?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>Part-time uplatnění</li>
            <li className={styles.newList}>Příspěvky na vzdělávací kurzy</li>
            <li className={styles.newList}>
              Motivující finanční ohodnocení, měsíční a kvartální bonusy
            </li>
            <li className={styles.newList}>
              Možnost kariérního růstu v rámci marketingového nebo sales
              oddělení
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
