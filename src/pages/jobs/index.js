import React from 'react';

import { Container } from '../../components/container';
import SEO from '../../components/seo';
import Jobs from './jobItem';
import styles from './jobs.module.css';

const JobsPage = () => (
  <>
    <SEO title="Dělej, co tě baví!" />
    <Container>
      <div className={styles.terms}>
        <h3 className={styles.textHeader}>Dělej, co tě baví!</h3>
        Přidej se k nám!
        <br />
        NutrionPro je nový, rychle rostoucí startup z oblasti FoodTech. Přišli
        jsme na trh s námi vyvinutým algoritmem, který je schopen na základě
        údajů o tvém těle vytvořit jídelníček na míru. Tím to ale nekončí -
        jídlo pro tebe i uvaříme a dovezeme až ke dveřím! Tento individuální
        přístup k naším zákazníkům zaručuje efektivnějšího a snadnějšího
        dosahování jejich cílů.
      </div>
      <div className={styles.textSubHeader}>Právě hledáme:</div>
      <Jobs />
    </Container>
  </>
)

export default JobsPage
