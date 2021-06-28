import React from 'react';

import SEO from '../../components/seo';
import styles from './job.module.css';

// import jobBgSrc from "../../images/job-bg.png"
const JobPage = () => {
  return (
    <>
      <SEO title="Výrobní ředitel" />

      <div className={styles.bgJob}>
        <div className={styles.job}>
          <h1 className={styles.textHeader}>Výrobní ředitel</h1>

          {/* <h3 className={styles.textSubHeader}>
            Do našeho týmu hledáme šikovného/ou kolegu/yni na pozici Technologa potravinářské výroby. Máte praxi v potravinářském průmyslu? Baví Vás technologie výrobních procesů? Tak jste tady správně!
          </h3> */}
          <p className={styles.text}>
            Hledáme ředitele výroby ve společnosti NutritionPro
            (nutritionpro.cz). Jsme speciální krabičková dieta v Praze a měsíčně
            rozvezeme desítky tisíc jídel. Naše poslání? Připravujeme jídlo s
            potenciálem léčit svět.
          </p>

          <h3 className={styles.textSubHeader}>
            Co bude Váš každodenní chleba:
          </h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Vedení celého produkčního oddělení, optimalizace, analýza a
              zlepšování výrobních procesů
            </li>
            <li className={styles.newList}>
              Intenzivní komunikace a kontrola výrobních procesů s partnerskými
              kuchyněmi
            </li>
            <li className={styles.newList}>
              Zajištění a kontrola plnění technologických a kvalitativních norem
              dle našich standardů
            </li>
            <li className={styles.newList}>
              Tvorba nových produktových řad a udržování rotace receptů
            </li>
            <li className={styles.newList}>
              Práce s naší softwarovou platformou a její vylepšování
            </li>
          </ul>

          <h3 className={styles.textSubHeader}>
            Co byste měl/a ideálně mít/umět?
          </h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Zkušenosti z výrobního provozu v gastronomii min. 3 roky
            </li>
            <li className={styles.newList}>
              Přirozenou schopnost nasávat nové technologie
            </li>
            <li className={styles.newList}>
              Schopnost vyjednávat a udržovat dobré vztahy s dodavateli
            </li>
            <li className={styles.newList}>
              Praxe s výrobou krabičkových diet Vám dá body navíc
            </li>
            <li className={styles.newList}>
              Hodit se bude i znalost angličtiny a ruštiny
            </li>
            <li className={styles.newList}>
              Orientaci na trhu a umění rychle analyzovat trendy
            </li>
            <li className={styles.newList}>
              Zkušenosti s rychlým strategickým rozhodováním
            </li>
            <li className={styles.newList}>
              Perfektní gastro CV není nutností, ale výhodou
            </li>
            <li className={styles.newList}>
              Uvítáme znalost, orientace v HACCP a IFS normách a předpisech
            </li>
          </ul>

          <h3 className={styles.textSubHeader}>Co budete mít na starosti?</h3>
          <p className={styles.text}>
            Jednu z nejdůležitějších části projektu - kontrolu celého výrobního
            procesu a partnerských kuchyní. Za Vámi budou stovky spokojených
            klientů a renomé té nejlepší krabičkové diety v Praze.
          </p>

          <h3 className={styles.textSubHeader}>A co za to dostanete?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Motivující finanční ohodnocení, měsíční bonusy, opční plán (podíl
              firmy)
            </li>
            <li className={styles.newList}>Full-time uplatnění</li>
            <li className={styles.newList}>Stravování zdarma</li>
            <li className={styles.newList}>Plně hrazené vzdělávací kurzy</li>
            <li className={styles.newList}>
              Multisport kartu a fitko přímo v kanceláři zdarma
            </li>
            <li className={styles.newList}>20% sleva na produkty</li>
          </ul>

          <p className={styles.text}>
            A když už jsme u místa Vašeho působiště, sídlíme v Karlíně. Takže
            Vás čeká super prostředí pro networking, pražská panoramata z naší
            úžasné terasy a žádný dress code.
          </p>

          <h3 className={styles.textSubHeader}>O NutritionPro</h3>
          <p className={styles.text}>
            Jsme nový, rychle rostoucí startup z oblasti FoodTech. Vyvíjíme
            softwarovou platformu, která zprocesuje zákaznická data. Na jejichž
            základě pak generujeme individuální jídelní plány a předáváme je
            partnerským kuchyním k výrobě. Hotový produkt přivezeme klientovi až
            ke dveřím. A jsme úspěšní: během dvouletého působení jsme překonali
            firmy, které jsou na trhu více než dekádu. V tuhle chvíli našim
            zákazníkům nabízíme 2,3 a 5-chodová menu pro dosažení jejich cílů.
          </p>
          <p className={styles.text}>
            <b>
              Odměníme Vás! Pokud nám doporučíte toho správného člověka z okruhu
              svých přátel a projde zkušební dobou, máte od nás 5-chodové menu
              na měsíc zdarma.
            </b>
          </p>
          <p className={styles.text}>
            <b>
              Těšíme se na tvoje CV a rádi tě uvítáme v našem týmu NutritionPro!
            </b>
          </p>

          <h3 className={styles.textSubHeader}>Kontakty:</h3>
          <a className={styles.jobsEmail} href="mailto:yana@nutritionpro.cz">
            yana@nutritionpro.cz
          </a>
          <br />
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
