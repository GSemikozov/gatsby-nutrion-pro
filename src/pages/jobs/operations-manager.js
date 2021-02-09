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
            Если ты хочешь быть правой рукой руководителя успешного FoodTech стартапа, то мы ищем именно тебя!
          </p>
          <p className={styles.text}>
            Наш проект недавно получил второй раунд инвестиций для дальнейшего 
            роста на рынке Чехии и нам нужен ответственный человек, который 
            возьмет на себя внутреннюю операционную деятельность компании.
          </p>


          <h3 className={styles.textSubHeader}>Что будет входить в твои обязанности?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Контроль внутренних процессов{" "}
            </li>
            <li className={styles.newList}>
              Менеджмент проектов (координация команды, контроль выполнения задач и сроков) {" "}
            </li>
            <li className={styles.newList}>
              Ведение отчетности
            </li>
            <li className={styles.newList}>
              Внутренний HR (постановка KPI, работа с мотивацией и культурой компании) 
            </li>
            <li className={styles.newList}>
              Административная поддержка команды
            </li>
          </ul>

          <h3 className={styles.textSubHeader}>Что мы от тебя ожидаем?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>
              Опыт работы в командах от 10 человек, в идеале - в больших компаниях
            </li>
            <li className={styles.newList}>Системность, самоорганизованность</li>
            <li className={styles.newList}>Высокая степень требовательности и ориентация на достижение цели</li>
            <li className={styles.newList}>Готовность и желание брать на себя ответственность</li>
            <li className={styles.newList}>Знание чешского языка на высоком уровне (грамотная устная и письменная речь) - ОБЯЗАТЕЛЬНОЕ условие!</li>
          </ul>
          <h3 className={styles.textSubHeader}>Что мы предлагаем?</h3>
          <ul className={styles.textUl}>
            <li className={styles.newList}>Мотивирующий оклад плюс месячные и квартальные бонусы</li>
            <li className={styles.newList}>
              Работа в прогрессивной международной команде 
            </li>
            <li className={styles.newList}>
              Возможность карьерного роста
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
            Ждем твое резюме с сопроводительным письмом на нашу почту <a className={styles.text} href="mailto:marie@nutritionpro.cz">yana@nutritionpro.cz.</a>
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
