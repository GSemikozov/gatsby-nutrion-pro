import React from 'react';

import SEO from '../../components/seo';
import styles from './job.module.css';

// import jobBgSrc from "../../images/job-bg.png"

const JobPage = () => {
  return (
    <>
      <SEO title="Nutriční specialista" />

      <div className={styles.bgJob}>
        <div className={styles.job}>
          <h1 className={styles.textHeader}>Obchodní zástupce</h1>
          <p className={styles.text}>
            Do našeho mladého týmu hledáme šikovného/ou kolegu/yni na pozici
            Obchodní zástupce. Rád/a komunikuješ s lidmi a chceš se podílet na
            rozvoji nového progresivního řešení v oblasti zdravé výživy? Tak jsi
            tady správně!
          </p>
          <p className={styles.text}>
            NutritionPro je nový, rychle rostoucí startup z oblasti FoodTech.
            Přišli jsme na trh s námi vyvinutým algoritmem, který na základě
            údajů o Tvém těle je schopen vytvořit jídelníček přímo Tobě na míru.
            Tím to ale nekončí – jídlo pro tebe uvaříme a dovezeme až ke dveřím!
          </p>

          <h3 className={styles.textSubHeader}>Co u nás budeš dělat?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Převezmeš na sebe telefonickou komunikaci s potenciálními klienty,
              kteří již sami projevili zájem o naše produkty.{" "}
            </li>
            <li className={styles.newList}>
              Veškerý prodej je zaměřen pouze na příchozí poptávky z našeho
              webu, cold calls u nás dělat nebudeš :){" "}
            </li>
            <li className={styles.newList}>
              Všemu Tě naučíme, takže nevadí, pokud nemáš mnoholeté zkušenosti,
              stačí chuť do práce!
            </li>
          </ul>
          <h3 className={styles.textSubHeader}>Jak bychom tě představovali?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Máš výborné komunikační schopnosti
            </li>
            <li className={styles.newList}>Nebojíš se telefonovat</li>
            <li className={styles.newList}>Baví Tě zdravý životní styl</li>
            <li className={styles.newList}>Jsi otevřený/á novým věcem</li>
          </ul>

          <h3 className={styles.textSubHeader}>Co získáš od nás?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>Full-time uplatnění</li>
            <li className={styles.newList}>Příspěvky na vzdělávací kurzy</li>
            <li className={styles.newList}>
              Motivující finanční ohodnocení, měsíční a kvartální bonusy
            </li>
            <li className={styles.newList}>
              Možnost postupu na pozice s větším vlivem na celé Sales oddělení
            </li>
            <li className={styles.newList}>Multisport karta</li>
            <li className={styles.newList}>
              Posilovna a lekce jógy přímo v kanceláři zdarma
            </li>
            <li className={styles.newList}>
              Voda, káva, čaj, džusy a čerstvé ovoce na pracovišti zdarma
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
          <p className={styles.text}>Kontakty:</p>
          <a className={styles.text} href="mailto:yana@nutritionpro.cz">
            yana@nutritionpro.cz
          </a>
          <br />
          {/* <a className={styles.text} href="tel:+420608068463">
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
