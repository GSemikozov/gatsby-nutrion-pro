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
          <h1 className={styles.TextHeader}>Nutriční specialista</h1>
          <h3 className={styles.TextSubHeader}>
            Do našeho rychle rostoucího týmu hledáme kolegu na pozici Nutriční
            specialista.
          </h3>
          <p className={styles.text}>
            Jsi nutriční geek, máš rád inovativní přístup k dietologii, jsi
            nadšený vidět výsledky svých klientů a nebojíš se práce s daty?
            Chtěl bys aplikovat své poznatky z dietologie na stovky, nebo až
            tisíce lidí a skutečně zlepšit jejich život a zdraví? Tak jsi tady
            správně!
          </p>
          <p className={styles.text}>
            NutritionPro - je nový rychle rostoucí startup z oblasti FoodTech.
            Vyvinuli jsme algoritmus, který ti na základě tělesných údajů
            vytvoří jídelníček na míru. Tím to ale nekončí - přesně spočítané
            jídlo pro tebe i uvaříme a dovezeme! Jsme společnost orientovaná na
            výsledky, a to nejen naše, ale hlavně našich zákazníků. A největší
            vliv na to budeš mít právě Ty!
          </p>

          <h3 className={styles.TextSubHeader}>Co u nás budeš dělat?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Těsně spolupracovat s našim developerem na zlepšení a zpřesnění
              výsledků algoritmu
              <ul className={styles.textUl}>
                <li className={styles.NewSubList}>
                  Sběr, analýza a hodnocení vstupních a výstupních informací o
                  klientech (složení těla, cíle, PAL atd.)
                </li>
                <li className={styles.NewSubList}>
                  Učit náš algoritmus práci s výjimkami, preferencemi a
                  alergiemi klientů
                </li>
                <li className={styles.NewSubList}>
                  Testování a korekce algoritmu
                </li>
              </ul>
            </li>
            <li className={styles.newList}>
              Tvorba, údržba a pravidelné zlepšení našich technických karet
            </li>
            <li className={styles.newList}>
              Tvorba a údržba databáze receptů a ingrediencí
            </li>
            <li className={styles.newList}>
              Zpracování klientských dat, jejich výsledků a pravidelné
              reportování
            </li>
            <li className={styles.newList}>
              Vypracování nových výživových programů (např. Nizkosacharidová
              dieta nebo bezlaktózní menu)
            </li>
          </ul>

          <h3 className={styles.TextSubHeader}>Co získáš od nás?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>Full-time/Part-time uplatnění</li>
            <li className={styles.newList}>Flexibilní pracovní dobu</li>
            <li className={styles.newList}>Příspěvky na vzdělávací kurzy</li>
            <li className={styles.newList}>
              Odpovídající finanční ohodnocení, měsíční a kvartální bonusy
            </li>
            <li className={styles.newList}>Multisport karta</li>
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

          <h3 className={styles.TextSubHeader}>
            Těšíme se na tvoje CV a rádi Tě uvítáme v našem týmu NutritionPro!
          </h3>
          <h3 className={styles.TextSubHeader}>Kontakty:</h3>
          <a className={styles.jobsEmail} href="mailto:marie@nutritionpro.cz">
            marie@nutritionpro.cz
          </a>
          <a className={styles.jobsEmail} href="tel:+420775514775">
            +420 775 514 775
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
