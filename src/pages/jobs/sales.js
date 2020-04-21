import React from 'react';

import { Layout } from '../../components/layout';
import SEO from '../../components/seo';
import styles from './job.module.css';

// import jobBgSrc from "../../images/job-bg.png"

const JobPage = () => {
  return (
    <Layout>
      <SEO title="Nutriční specialista" />

      <div className={styles.bgJob}>
        <div className={styles.job}>
          <h1 className={styles.textHeader}>Obchodní zástupce</h1>
          <p className={styles.text}>
            Do našeho mladého týmu hledáme šikovného/ou kolegu/yni na pozici
            Obchodní zástupce. Máš rád/a lidí, telefonická komunikace pro tebe
            není stressful a chceš se podílet na rozvoji nového progresivního
            řešení v oblasti zdravé výživy? Tak jsi tady správně!
          </p>
          <p className={styles.text}>
            NutritionPro je nový, rychle rostoucí startup z oblasti FoodTech.
            Přišli jsme na trh s námi vyvinutým algoritmem, který na základě
            údajů o Tvém těle je schopen vytvořit jídelníček přímo Tobě na míru.
            Tím to ale nekončí – jídlo pro tebe uvaříme a dovezeme až ke dveřím!
          </p>

          <h3 className={styles.textSubHeader}>Co u nás budeš dělat?</h3>
          <p className={styles.text}>
            Telefonická komunikace s klienty, kteří již sami projevili zájem o
            naše produkty. Veškerý prodej je zaměřen pouze na příchozí poptávky.
            To znamená, že nebudeš dělat cold calls :)
          </p>
          <h3 className={styles.textSubHeader}>Jak bychom tě představovali?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Energická, komunikativní a pozitivní osobnost
            </li>
            <li className={styles.newList}>Orientace na výsledek</li>
            <li className={styles.newList}>Flexibilita</li>
            <li className={styles.newList}>
              Praxe v oblasti telesales (alespoň 1 rok) nutností
            </li>
          </ul>

          <h3 className={styles.textSubHeader}>Co získáš od nás?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>Full nebo part-time uplatnění</li>
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
          <h3 className={styles.textSubHeader}>Kontakty:</h3>
          <a className={styles.text} href="mailto:marie@nutritionpro.cz">
            marie@nutritionpro.cz
          </a>
          <a className={styles.text} href="tel:+420775514775">
            +420 775 514 775
          </a>
          <br />
          <br />
          <a className={styles.backButton} href="/jobs">
            Zpět
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default JobPage
