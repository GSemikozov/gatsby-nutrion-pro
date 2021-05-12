import React from 'react';

import styles from './card.module.css';

export const BlogPostsCard = ({ link, img, date, title, category }) => {
  return (
    <a href={link} className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.cardTopBtns}>
          <div className={styles.cardCategory}>
            <svg
              width="17"
              height="22"
              viewBox="0 0 17 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "6px" }}
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M6 3.05566H12C12.5304 3.05566 13.0391 3.26491 13.4142 3.63738C13.7893 4.00985 14 4.51503 14 5.04177V18.9446L9 15.9654L4 18.9446V5.04177C4 4.51503 4.21071 4.00985 4.58579 3.63738C4.96086 3.26491 5.46957 3.05566 6 3.05566Z"
                  stroke="#3DC383"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="17" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>

            {category}
          </div>
          <a href="#" className={styles.cardShareLink}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 13.75C7.01878 13.75 8.25 12.5188 8.25 11C8.25 9.48122 7.01878 8.25 5.5 8.25C3.98122 8.25 2.75 9.48122 2.75 11C2.75 12.5188 3.98122 13.75 5.5 13.75Z"
                stroke="#FF8F62"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 8.25C18.0188 8.25 19.25 7.01878 19.25 5.5C19.25 3.98122 18.0188 2.75 16.5 2.75C14.9812 2.75 13.75 3.98122 13.75 5.5C13.75 7.01878 14.9812 8.25 16.5 8.25Z"
                stroke="#FF8F62"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 19.25C18.0188 19.25 19.25 18.0188 19.25 16.5C19.25 14.9812 18.0188 13.75 16.5 13.75C14.9812 13.75 13.75 14.9812 13.75 16.5C13.75 18.0188 14.9812 19.25 16.5 19.25Z"
                stroke="#FF8F62"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.97461 9.80807L14.0246 6.69141"
                stroke="#FF8F62"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.97461 12.1914L14.0246 15.3081"
                stroke="#FF8F62"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <img src={img} alt="img" className={styles.cardImg} />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardDate}>{date}</div>
        <div className={styles.cardTitle}>{title}</div>
      </div>
    </a>
  )
}
