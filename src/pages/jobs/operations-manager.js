import React from 'react';

import SEO from '../../components/seo';
import styles from './job.module.css';

const JobPage = () => {
  return (
    <>
      <SEO title="Operations Manager" />

      <div className={styles.bgJob}>
        <div className={styles.job}>
          <h1 className={styles.textHeader}>Operations Manager</h1>
          <p className={styles.text}>
            Если ты хочешь быть правой рукой CEO успешного FoodTech стартапа, 
            управлять молодой международной командой специалистов и принимать 
            участие в работе с крупными инвесторами, то мы ищем именно тебя! 
          </p>
          <p className={styles.text}>
            Наш проект недавно получил второй раунд инвестиций для дальнейшего 
            роста на рынке Чехии и нам нужен ответственный человек, который 
            возьмет на себя внутреннюю операционную деятельность компании.
          </p>


          <h3 className={styles.textSubHeader}>Что будет входить в твои обязанности?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Построение и контроль внутренних процессов компании{" "}
            </li>
            <li className={styles.newList}>
              Активный менеджмент проектов (координация команды, контроль выполнения задач и сроков){" "}
            </li>
            <li className={styles.newList}>
              Регулярная отчетность 
            </li>
            <li className={styles.newList}>
              Внутренний HR (постановка KPI, работа с мотивацией и культурой компании) 
            </li>
            <li className={styles.newList}>
              Коммуникация с инвесторами 
            </li>
          </ul>

          <h3 className={styles.textSubHeader}>Что мы от тебя ожидаем?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Опыт работы на подобной позиции (или в области Project management) от 5 лет
            </li>
            <li className={styles.newList}>Знание чешского языка на ВЫСОКОМ уровне (грамотная устная и письменная речь) - ОБЯЗАТЕЛЬНОЕ условие!</li>
            <li className={styles.newList}>Системность, рациональное мышление и высокая самоорганизованность</li>
            <li className={styles.newList}>Умение выслушать, выстроить отношения с членами команды и сплотить коллектив </li>
            <li className={styles.newList}>Опыт ведения собственных проектов - будет большим плюсом</li>
            <li className={styles.newList}>Опыт работы в больших корпорациях - также является плюсом</li>
          </ul>
          <h3 className={styles.textSubHeader}>Что мы предлагаем?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>Мотивирующий оклад плюс месячные и квартальные бонусы</li>
            <li className={styles.newList}>Пакет опционов компании (акции)</li>
            <li className={styles.newList}>
              Работа в прогрессивной международной команде 
            </li>
            <li className={styles.newList}>
              Возможность карьерного роста на позицию СОО
            </li>
            <li className={styles.newList}>Регулярные оплачиваемые тренинги/обучение</li>
            <li className={styles.newList}>
              Дружеская рабочая атмосфера без дресс-кода, офис в сердце Карлина, терраса с прекрасным видом на Прагу
            </li>
            <li className={styles.newList}>
              Multisport карта, скидки на фирменные продукты, sick-days
            </li>
          </ul>

          <p className={styles.text}>
            Позиция уже открыта – приступить можно сразу.
          </p>

          <h3 className={styles.textSubHeader}>
            Ждем твое резюме с сопроводительным письмом на нашу почту <a className={styles.text} href="mailto:marie@nutritionpro.cz">marie@nutritionpro.cz.</a>
          </h3>
          <br />
          <p className={styles.text}>
            Будем рады видеть тебя в нашей команде!
          </p>
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
