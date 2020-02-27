import CarouselBase from 'nuka-carousel';
import React from 'react';

import useSmoothScroll from '../../hooks/useSmoothScroll';
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
  <Job
    title="NUTRIČNÍ SPECIALISTA"
    description="Do našeho rychle rostoucího týmu hledáme kolegu na pozici Nutriční specialista."
    date="12.12.2019"
    color="#FDF9F4"
    link="/jobs/nutritionist"
  />,
  <Job
    title="Specialista pro příchozí poptávky"
    description="Do našeho mladého týmu hledáme šikovného/ou kolegu/yni na pozici Telesales specialist(k)y."
    date="12.12.2019"
    color="#EAEFF7"
    link="/jobs/sales"
  />,
  <Job
    title="Marketing &nbsp; manager"
    description="Do našeho rychle rostoucího týmu hledáme kolegu na pozici Marketing manager."
    date="15.12.2019"
    color="#F7F4FD"
    link="/jobs/marketing-manager"
  />,
  // <Job
  //   title="NUTRIČNÍ SPECIALISTA"
  //   description="Burrito se salátem pico de gallo a zakysanou smetanou"
  //   date="12.12.2020"
  //   color="#E3F0FA"
  //   link=""
  // />,
]

const Jobs = () => {
  // const scroll = useSmoothScroll()

  return (
    <div className={styles.content}>
      {/* <Title>Jak vypadá den s NutritionPro</Title> */}

      <div className={styles.meals}>{renderJobs()}</div>
      <CarouselBase
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
