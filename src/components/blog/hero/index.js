import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

import styles from './hero.module.css';

export const Hero = ({ title, date }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            shareData {
              title
              tags
            }
          }
        }
      }
    `
  )
  //For the social share buttons
  const shareTitle = `Read ${site.siteMetadata.shareData.title} `
  const url = typeof window !== `undefined` && window.location.href
  const twitterHandle = "_MsLinda"
  const tags = site.siteMetadata.shareData.tags

  // useEffect(() => {
  //   console.log("------ shareTitle", shareTitle)
  //   console.log("------ url", url)
  //   console.log("------ tags", tags)
  // }, [shareTitle, url, tags, site])

  return (
    <div className={styles.hero}>
      <h2 className={styles.heroTitle}>{title}</h2>
      <div className={styles.bottomPanel}>
        <nav className={styles.socialLinks}>
          {/* <a href="#" className={styles.socialLink}>
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
          </a> */}
          {site && (
            <FacebookShareButton className={styles.socialLink} url={url}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.41602 9.16667V12.8333H9.16602V19.25H12.8327V12.8333H15.5827L16.4994 9.16667H12.8327V7.33333C12.8327 7.09022 12.9293 6.85706 13.1012 6.68515C13.2731 6.51324 13.5062 6.41667 13.7494 6.41667H16.4994V2.75H13.7494C12.5338 2.75 11.368 3.23289 10.5084 4.09243C9.6489 4.95197 9.16602 6.11776 9.16602 7.33333V9.16667H6.41602Z"
                  stroke="#FF8F62"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </FacebookShareButton>
          )}
          {site && (
            <TwitterShareButton
              url={url}
              title={shareTitle}
              via={twitterHandle}
              hashtags={tags}
              className={styles.socialLink}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.7274 5.29223C18.4453 5.82492 18.0945 6.32137 17.6819 6.76815C17.5455 6.91594 17.4697 7.10971 17.4697 7.31087C17.4697 11.6635 15.3397 14.6921 12.4125 16.1929C10.2912 17.2805 7.71692 17.5824 5.16841 16.9611C6.22842 16.6848 7.24732 16.2501 8.1891 15.666C8.44612 15.5066 8.59127 15.2159 8.56425 14.9146C8.53723 14.6134 8.34266 14.3532 8.06138 14.2421C6.2401 13.5226 5.08241 12.5736 4.3471 11.5877C3.60984 10.5992 3.26615 9.53183 3.13833 8.53257C3.03851 7.75224 3.07129 7.01896 3.15007 6.41184C3.91856 7.26969 4.81131 7.99558 5.83414 8.49685C7.38926 9.25899 9.19577 9.47646 11.2142 8.91179C11.5598 8.81512 11.7987 8.50019 11.7987 8.14137V7.33379H11.7988L11.7986 7.32342C11.7911 6.74599 11.9612 6.18019 12.2857 5.70253L12.2857 5.70244C12.5283 5.34535 12.8496 5.04871 13.2248 4.83539C13.6001 4.62206 14.0193 4.49774 14.4502 4.47201C14.8811 4.44627 15.3122 4.51982 15.7102 4.68696C16.1082 4.85411 16.4625 5.1104 16.7458 5.43609C16.9477 5.6682 17.2648 5.76397 17.5614 5.68241C17.9574 5.57354 18.3467 5.44324 18.7274 5.29223Z"
                  stroke="#FF8F62"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </TwitterShareButton>
          )}
        </nav>
        <span className={styles.divider} />
        <span className={styles.publishDate}>2{date}</span>
      </div>
    </div>
  )
}
