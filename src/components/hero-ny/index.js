import cx from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Trans, useTranslation } from 'react-i18next';

import { Button } from '../button';
import { Container } from '../container';
import { HeroNYForm } from '../forms/hero-ny-form';
import styles from './hero.module.css';

const BackgroundSection = ({ children, className, image }) => {
  const data = useStaticQuery(graphql`
    query {
      ads: file(relativePath: { eq: "ny-ads-hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1293) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobile: file(relativePath: { eq: "ny-ads-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const adsImg = data.ads.childImageSharp.fluid
  const mobileFoodImg = data.mobile.childImageSharp.fluid

  const getImg = image => {
    switch (true) {
      case image === "ads":
        return adsImg
      case image === "mobile-food":
        return mobileFoodImg
      default:
        return ""
    }
  }
  const img = getImg(image)

  return (
    <BackgroundImage className={className} fluid={img}>
      {children}
    </BackgroundImage>
  )
}

export const HeroNY = () => {
  const { t } = useTranslation()

  const [showForm, setShowForm] = useState(false)
  const [openBtn, setOpenBtn] = useState(true)
  const [hideBtn, setHideBtn] = useState(false)

  const hadleShow = () => {
    setShowForm(!showForm)
    setOpenBtn(!openBtn)
    setHideBtn(!hideBtn)
  }

  const onMobileMenuOpen = () => {
    hadleShow()
    window.dataLayer.push({
      event: "ga.event",
      eCategory: "banner",
      eAction: "vice",
      eLabel: "HP",
    })
    trackCustomEvent({
      category: "banner",
      action: "vice",
      label: "HP",
    })
  }

  const onMobileMenuHide = () => {
    hadleShow()
    window.dataLayer.push({
      event: "ga.event",
      eCategory: "banner",
      eAction: "mene",
      eLabel: "HP",
    })
    trackCustomEvent({
      category: "banner",
      action: "mene",
      label: "HP",
    })
  }

  return (
    <>
      <BrowserView>
        <section className={styles.hero}>
          <div>
            <div className={styles.heroForm}>
              <Container>
                <h1 className={styles.title}>
                  <span className={styles.titlePart1}>
                    Vánoční
                    {/* <img
                      src="./images/deer-icon.png"
                      className={styles.titleIcon}
                      alt="deer"
                    /> */}
                  </span>
                  <span className={styles.titlePart2}>slevová nadílka</span>
                </h1>
                <HeroNYForm />
              </Container>
            </div>
          </div>
          <BackgroundSection image="ads" className={styles.offersContent}>
            <div>
              <div className={styles.offersList}>
                <div className={styles.offersListMobileItemWrapper}>
                  <div className={cx(styles.offersListItem, styles.red)}>
                    <div className={styles.offersListItemHeader} />
                    <div className={styles.offersListItemBody}>
                      <span>Sleva</span>
                      <span className={styles.offersListMobileItemPrice}>
                        20%
                      </span>
                    </div>
                  </div>
                  <div className={styles.offersListMobileItemInfo}>
                    na měsiční program
                  </div>
                </div>
                <div className={styles.offersListMobileItemWrapper}>
                  <div className={cx(styles.offersListItem, styles.green)}>
                    <div className={styles.offersListItemHeader} />
                    <div className={styles.offersListItemBody}>
                      <span>Sleva</span>
                      <span className={styles.offersListMobileItemPrice}>
                        10%
                      </span>
                    </div>
                  </div>
                  <div className={styles.offersListMobileItemInfo}>
                    na dvoutydenní program
                  </div>
                </div>
              </div>
            </div>
          </BackgroundSection>
        </section>
      </BrowserView>
      <MobileView>
        <BackgroundSection image="ads" className={styles.heroMobileImg}>
          <section className={styles.heroMobile}>
            <div className={styles.titleMobile}>
              <Trans i18nKey="forms.hero2FormTitle">
                Dvoudenní zkouška <strong>5chodového</strong> menu za{" "}
                <strong>super cenu</strong>
              </Trans>
            </div>
            <div className={styles.oldPriceMobile}>
              1000 <span className={styles.green}>Kč</span>
            </div>
            <div className={styles.heroPriceMobile}>
              <div>
                700 <span>Kč</span>
              </div>
            </div>
            <div className="text-center">
              <Button
                type="primary"
                className={!openBtn ? "hide" : ""}
                handleClick={onMobileMenuOpen}
              >
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 12 6"
                  fill="none"
                  style={{ marginRight: "5px" }}
                >
                  <path
                    d="M6.00254 3.98378L1.51317 0.163078C1.38985 0.0578741 1.22498 4.23292e-07 1.04917 4.30976e-07C0.873268 4.38665e-07 0.708487 0.0578742 0.584975 0.163078L0.191805 0.497869C0.0680973 0.602906 -2.29777e-07 0.743316 -2.23237e-07 0.892942C-2.16696e-07 1.04257 0.0680973 1.18281 0.191805 1.28793L5.53678 5.83709C5.66068 5.94262 5.82624 6.00041 6.00224 6C6.17902 6.00041 6.34439 5.9427 6.46839 5.83709L11.8082 1.29217C11.9319 1.18705 12 1.0468 12 0.897093C12 0.747467 11.9319 0.607223 11.8082 0.50202L11.415 0.167312C11.1591 -0.0504847 10.7425 -0.0504847 10.4867 0.167312L6.00254 3.98378Z"
                    fill="white"
                  />
                </svg>
                Zjistit více
              </Button>
            </div>
            <div
              className={cx(styles.desc, { [styles.descHidden]: !showForm })}
            >
              <div className={styles.offersListMobile}>
                <div className={styles.offersListMobileItem}>
                  <div className={styles.offersListMobileItemIcon}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.0625 22.1562H28.5938V21.6875C28.5938 14.3893 22.9037 8.59754 15.9375 8.12609V7.15625H16.875C17.3928 7.15625 17.8125 6.73654 17.8125 6.21875C17.8125 5.70096 17.3928 5.28125 16.875 5.28125H13.125C12.6073 5.28125 12.1875 5.70096 12.1875 6.21875C12.1875 6.73654 12.6073 7.15625 13.125 7.15625H14.0625V8.12609C7.09201 8.59783 1.40625 14.393 1.40625 21.6875V22.1562H0.9375C0.419766 22.1562 0 22.576 0 23.0938C0 23.6115 0.419766 24.0312 0.9375 24.0312H1.24031L2.87959 28.1294C3.02191 28.4854 3.36668 28.7188 3.75 28.7188H26.25C26.6334 28.7188 26.9781 28.4854 27.1204 28.1294L28.7597 24.0312H29.0625C29.5803 24.0312 30 23.6115 30 23.0938C30 22.576 29.5803 22.1562 29.0625 22.1562ZM3.28125 21.6875C3.28125 15.2258 8.53828 9.96875 15 9.96875C21.4617 9.96875 26.7188 15.2258 26.7188 21.6875V22.1562H3.28125V21.6875ZM25.6153 26.8438H4.38475L3.25975 24.0312H26.7403L25.6153 26.8438Z"
                        fill="#2FA037"
                      />
                    </svg>
                  </div>
                  <div className={styles.offersListItemBody}>
                    <b>12</b> krabiček pro <br /> <b>10</b> chodů
                  </div>
                </div>
                <div className={styles.offersListMobileItem}>
                  <div className={styles.offersListMobileItemIcon}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0007 11.0464C16.9716 11.0464 18.575 9.44303 18.575 7.47217C18.575 5.50131 16.9716 3.89795 15.0007 3.89795C13.0299 3.89795 11.4265 5.50131 11.4265 7.47217C11.4265 9.44303 13.0299 11.0464 15.0007 11.0464ZM15.0007 5.65576C16.0023 5.65576 16.8171 6.47062 16.8171 7.47217C16.8171 8.47371 16.0023 9.28857 15.0007 9.28857C13.9991 9.28857 13.1843 8.47371 13.1843 7.47217C13.1843 6.47062 13.9991 5.65576 15.0007 5.65576Z"
                        fill="#2FA037"
                      />
                      <path
                        d="M26.4844 13.2422C26.4844 11.7883 25.3015 10.6055 23.8477 10.6055H21.787C24.0116 5.81812 20.5998 0 15.0008 0C9.42117 0 5.97949 5.80014 8.21443 10.6055H6.15234C4.69846 10.6055 3.51562 11.7883 3.51562 13.2422V27.3633C3.51562 28.8172 4.69846 30 6.15234 30H23.8477C25.3015 30 26.4844 28.8172 26.4844 27.3633C26.4844 27.1287 26.4844 13.4845 26.4844 13.2422ZM24.7266 23.9704L22.1827 21.4265L24.7266 18.8826V23.9704ZM24.7266 13.2422V16.3967L13.2451 27.8781L8.02646 22.6594L12.7753 17.9106L14.2587 20.2478C14.6033 20.7908 15.3979 20.7915 15.7428 20.2478L20.7471 12.3633H23.8477C24.3323 12.3633 24.7266 12.7576 24.7266 13.2422ZM15.0008 1.75781C19.2897 1.75781 22.3072 6.43846 19.8021 10.5718L15.0008 18.1366C14.5365 17.4052 10.2024 10.5763 10.1979 10.5693C7.75963 6.79711 10.4596 1.75781 15.0008 1.75781ZM6.15234 12.3633H9.25453L11.8101 16.3899L5.27344 22.9266V13.2422C5.27344 12.7576 5.66771 12.3633 6.15234 12.3633ZM5.27344 27.3633V25.4125L6.78346 23.9024L11.1233 28.2422H6.15234C5.66771 28.2422 5.27344 27.8479 5.27344 27.3633ZM23.8477 28.2422H15.367L20.9397 22.6695L24.7266 26.4563V27.3633C24.7266 27.8479 24.3323 28.2422 23.8477 28.2422Z"
                        fill="#2FA037"
                      />
                    </svg>
                  </div>
                  <div className={styles.offersListItemBody}>
                    Dovoz až ke dveřím <b>zdarma</b>
                  </div>
                </div>
                <div className={styles.offersListMobileItem}>
                  <div className={styles.offersListMobileItemIcon}>
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M29.9062 28.8751H3.09377C1.38778 28.8751 0 27.4873 0 25.7813V20.625C0 20.055 0.461229 19.5938 1.03126 19.5938C2.73724 19.5938 4.12503 18.206 4.12503 16.5C4.12503 14.794 2.73724 13.4062 1.03126 13.4062C0.461229 13.4063 0 12.9451 0 12.3751V7.21877C0 5.51278 1.38778 4.125 3.09377 4.125H29.9063C31.6123 4.125 33.0001 5.51278 33.0001 7.21877V12.3751C33.0001 12.9451 32.5388 13.4063 31.9688 13.4063C30.2628 13.4063 28.875 14.7941 28.875 16.5001C28.875 18.2061 30.2628 19.5938 31.9688 19.5938C32.5388 19.5938 33.0001 20.0551 33.0001 20.6251V25.7814C33 27.4873 31.6123 28.8751 29.9062 28.8751ZM2.06251 21.5526V25.7813C2.06251 26.3503 2.52478 26.8126 3.09377 26.8126H29.9063C30.4753 26.8126 30.9376 26.3503 30.9376 25.7813V21.5526C28.587 21.0732 26.8125 18.9906 26.8125 16.5C26.8125 14.0095 28.587 11.9269 30.9376 11.4475V7.21877C30.9376 6.64978 30.4753 6.18751 29.9063 6.18751H3.09377C2.52478 6.18751 2.06251 6.64978 2.06251 7.21877V11.4475C4.41302 11.9269 6.18754 14.0095 6.18754 16.5001C6.18754 18.9906 4.41302 21.0732 2.06251 21.5526Z"
                          fill="#2FA037"
                        />
                        <path
                          d="M12.4412 24.3738L18.6265 7.87961L20.5576 8.6038L14.3723 25.098L12.4412 24.3738Z"
                          fill="#2FA037"
                        />
                        <path
                          d="M11.6214 16.8472C9.91537 16.8472 8.52759 15.4594 8.52759 13.7534C8.52759 12.0474 9.91537 10.6597 11.6214 10.6597C13.3273 10.6597 14.7151 12.0474 14.7151 13.7534C14.7151 15.4594 13.3273 16.8472 11.6214 16.8472ZM11.6214 12.7222C11.0524 12.7222 10.5901 13.1844 10.5901 13.7534C10.5901 14.3224 11.0524 14.7847 11.6214 14.7847C12.1903 14.7847 12.6526 14.3224 12.6526 13.7534C12.6526 13.1844 12.1903 12.7222 11.6214 12.7222Z"
                          fill="#2FA037"
                        />
                        <path
                          d="M22.2813 23.243C20.5753 23.243 19.1875 21.8552 19.1875 20.1492C19.1875 18.4432 20.5753 17.0554 22.2813 17.0554C23.9873 17.0554 25.375 18.4432 25.375 20.1492C25.375 21.8552 23.9873 23.243 22.2813 23.243ZM22.2813 19.1179C21.7123 19.1179 21.25 19.5802 21.25 20.1492C21.25 20.7182 21.7123 21.1805 22.2813 21.1805C22.8503 21.1805 23.3125 20.7182 23.3125 20.1492C23.3125 19.5802 22.8503 19.1179 22.2813 19.1179Z"
                          fill="#2FA037"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="33" height="33" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className={styles.offersListItemBody}>
                    Sleva <b>30%</b> <br /> Jen <b>350 Kč</b>/den
                  </div>
                </div>
              </div>
              <div className={styles.heroForm}>
                <HeroNYForm />
              </div>
              <div
                className={cx(styles.btnTop, { ["hide"]: !hideBtn })}
                onClick={() => onMobileMenuHide()}
              >
                <svg
                  width="25"
                  height="13"
                  viewBox="0 0 25 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4947 4.3998L21.8476 12.0235C22.1045 12.2334 22.448 12.3489 22.8142 12.3489C23.1807 12.3489 23.524 12.2334 23.7813 12.0235L24.6004 11.3554C24.8581 11.1459 25 10.8657 25 10.5671C25 10.2686 24.8581 9.98874 24.6004 9.77899L13.465 0.70178C13.2069 0.491199 12.862 0.375884 12.4953 0.376713C12.127 0.375884 11.7825 0.491033 11.5242 0.70178L0.399593 9.77054C0.14187 9.98029 -4.33022e-07 10.2601 -4.4611e-07 10.5588C-4.59191e-07 10.8574 0.14187 11.1372 0.399593 11.3472L1.2187 12.015C1.75183 12.4496 2.61972 12.4496 3.15264 12.015L12.4947 4.3998Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </section>
        </BackgroundSection>
      </MobileView>
    </>
  )
}
