import React from 'react';

import { CategoriesFilterPanel } from '../../components/blog/categories-filter-panel';
import { Hero } from '../../components/blog/hero';
import { PostSidebar } from '../../components/blog/post-sidebar';
import { Breadcrumbs, BreadcrumbsItem } from '../../components/breadcrumbs';
import { Container } from '../../components/container';
import styles from './post-grid.module.css';
import img1 from './post1-img1.png';
import img2 from './post1-img2.png';

const Post2 = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Breadcrumbs style={{ margin: "24px 0" }}>
          <BreadcrumbsItem link="/">Domu</BreadcrumbsItem>
          <BreadcrumbsItem link="/blog/posts">Blog</BreadcrumbsItem>
          <BreadcrumbsItem link="/blog/post-2">
            Detox. Ano nebo ne?
          </BreadcrumbsItem>
        </Breadcrumbs>
      </Container>
      <Container>
        <div className={styles.postGrid}>
          <div>
            <Hero title="Detox. Ano nebo ne?" date="20.05.21" />
            <div>
              <h5 className={styles.postTitle}>
                Detox je zkratka pro „detoxikaci“, tedy neutralizaci jedů,
                očištění těla od toxinů při otravě.
              </h5>
              <p className={styles.postText}>
                Při otravě jedy dochází k zásahu do metabolických dějů končící
                až poškozením funkce orgánů. Ještě donedávna se detoxikační
                procesy praktikovaly jen u lidí s těžkou otravou alkoholem nebo
                například drogami na jednotkách intenzivní péče.
              </p>
              <p className={styles.postText}>
                Poté se ale myšlenka očištění těla poněkud zpopularizovala.V
                dnešní době je detox něčím, co je podle některých nutričních
                odborníků nedílnou součástí zdravé výživy moderního člověka.
                Jsme přece pořád pod negativním vlivem vnějšího prostředí a
                toxických potravin. Nebo ani ne?
              </p>
              <h5 className={styles.postTitle}>Toxiny.</h5>
              <p className={styles.postText}>
                Koncept detoxikace spočívá v tom, že v průběhu života naše tělo
                vytváří toxiny, které je třeba neustále odbourávat a vylučovat.
                Pokud to neuděláme, toxiny pak poškozují pokožku, střeva a
                zdraví celkově. Nabízí se nám džusové diety, koření, hydrocolon
                terapie, vitaminové kapačky a k tomu speciální masáže a sauny.
              </p>
              <p className={styles.postText}>
                Všechny tyto metody by měly neutralizovat jedy v naší krvi a
                očistit střeva a pokožku. A ano, za týden konzumace barevných
                šťáv a půstu lidé opravdu trochu zhubnou, dokonce i jejich barva
                pleti se zlepší. Ale jde to i jinak.
              </p>

              <h5 className={styles.postTitle}>Je to opravdu nutné?</h5>
              <p className={styles.postText}>
                Naše tělo si s detoxem poradí samo a to naprosto přirozenými,
                fyziologickými procesy. Tento proces probíhá v játrech a vše
                zbytečné se vylučuje pomoci střev a také ledvin a plic. Pokud
                tedy chcete játrům opravdu pomoci, omezte konzumaci alkoholu. V
                reálu totiž koktejly a smoothies toxiny a odpadní produkty z
                těla neodstraní, ani nevyčistí játra a žlučník.
              </p>
              <p className={styles.postText}>
                Přechodem z běžné stravy na šťávy, tekutou a nízkokalorickou
                stravu jen snížíte kalorický přijem a začnete rychle hubnout. Co
                ale opravdu během takového detoxu ztratíte, je voda a někdy i
                svalová hmota, protože tuky se pomocí okurkové šťávy nespalují.
                Narozdíl od vydaných peněz, ztracená kila se vám rychle vrátí.
              </p>
              <p className={styles.postText}>
                Ve zkratce, z biologického hlediska detox nedává absolutně žádný
                smysl. Není podložen žádnými fakty a neexistují vědecké důkazy o
                tom, že detox funguje. Ani že byste ho nutně potřebovali.
              </p>
              <p className={styles.postText}>
                Detox je falešné řešení pro neexistující problémy. O jaká rizika
                si naopak koledujete?
              </p>
              <ul className={styles.postList}>
                <li>Nedostatek duležitých živin, vitamínů a minerálů</li>
                <li>Nedostatek energie pro fyzický i psychický výkon.</li>
                <li>Stres pro celé tělo.</li>
                <li>Únava.</li>
                <li>Negativní ovlivnění střevní mikroflóry.</li>
                <li>Záchvaty přejídání.</li>
              </ul>
              <p className={styles.postText}>
                I jídlo umí detoxikovat. Jednou takovou populární potravinou je
                koriandr. Jeho účinek na lidské tělo však dosud nebyl prokazan.
                Byl nalezen pouze malý účinek koriandru na zvířata otrávená
                kadmiem, jako v případě duhových pstruhů.
              </p>
              <p className={styles.postText}>
                Pokud jde o borůvky, zázvor, zelí, česnek, zelený čaj a další
                látky klasifikované jako „detoxikační“, neexistují žádné vědecké
                důkazy o jejich zázračných vlastnostech. Neznamená to ale, že
                jsou pro nás špatné. Spíš prostě nemohou sloužit jako protijed.
                Opravdová intoxikace těla, včetně otravy jídlem, je doprovázena
                akutními příznaky v podobě vysoké teploty. A v takovém případě
                nepomůže celerová šťáva, ale návštěva lékaře. Naše tělo je
                složitý, ale velmi chytrý systém a nedá se jen tak ošálit.
              </p>
              <p className={styles.postText}>
                Pokud tedy nejste pstruh duhový, znepokojený hladinami kadmia ve
                vašem těle, zaměřte se raději na zdravou a vyváženou stravu a
                pravidelný pitný režim. Tady můžeme dát link na článek pitný
                režim. Pohlídejte si i dostatek vlakniny, která je důležitá pro
                správné trávení a vyprazdňování. A hlavně, nezapomeňte se
                pravidelně hýbat.
              </p>
            </div>
          </div>
          <PostSidebar />
        </div>
      </Container>
    </div>
  )
}

export default Post2
