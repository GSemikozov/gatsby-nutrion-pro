import CarouselBase from 'nuka-carousel';
import React from 'react';

import styles from './jobs-item.module.css';

export const Job = props => {
  return (
    <a
      href={props.link}
      className={styles.itemWrapper}
      style={{ background: props.color }}
    >
      <div className={styles.jobDate}>{props.date}</div>
      <div className={styles.jobTitle}>{props.title}</div>
      <div className={styles.mealDescription}>{props.description} </div>
    </a>
  )
}

const renderJobs = () => [
  // <Job
  //   key="1"
  //   title="NUTRIČNÍ SPECIALISTA"
  //   description="Do našeho rychle rostoucího týmu hledáme kolegu na pozici Nutriční specialista."
  //   date="12.12.2019"
  //   color="#FDF9F4"
  //   link="/jobs/nutritionist"
  // />,
  <Job
    key="2"
    title="Sales manager"
    description="Do našeho mladého týmu hledáme šikovného/ou kolegu/yni na pozici Obchodní zástupce."
    date="18.05.2021"
    color="#EAEFF7"
    link="/jobs/sales"
  />,
  <Job
    key="3"
    title="Výrobní ředitel"
    description="Hledáme ředitele výroby ve společnosti NutritionPro"
    date="17.05.2021"
    color="#F7F4FD"
    link="/jobs/production-manager"
  />,
  <Job
    key="1"
    title="Marketing manager"
    description="Do našeho rychle rostoucího týmu hledáme kolegu na pozici Marketing manager."
    date="20.05.2021"
    color="#FDF9F4"
    link="/jobs/marketing-manager"
  />,
  <Job
    key="4"
    title="Event Manager"
    description="Do našeho mladého týmu hledáme šikovného/ou kolegu/yni na pozici Event Manager."
    date="01.06.2021"
    color="#E3F0FA"
    link="/jobs/event-manager"
  />,
  // <Job
  //   title="NUTRIČNÍ SPECIALISTA"
  //   description="Burrito se salátem pico de gallo a zakysanou smetanou"
  //   date="12.12.2020"
  //   color="#E3F0FA"
  //   link=""
  // />,
  <Job title="" description="" date="" color="#FFF" link="" />,
]

const Jobs = () => {
  // const scroll = useSmoothScroll()

  return (
    <div className={styles.content}>
      {/* <Title>Jak vypadá den s NutritionPro</Title> */}

      <div className={styles.meals}>{renderJobs()}</div>
      <CarouselBase
        className={styles.carousel}
        renderBottomCenterControls={() => null}
        renderCenterLeftControls={({ previousSlide }) => (
          <button type="button" onClick={previousSlide}>
            prev
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button type="button" onClick={nextSlide}>
            next
          </button>
        )}
      >
        {renderJobs()}
      </CarouselBase>
    </div>
  )
}

export default Jobs
