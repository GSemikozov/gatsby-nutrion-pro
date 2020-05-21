import cx from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React, { useEffect } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { HeroForm } from '../forms/hero-form';
import { OrderSpecialOfferForm } from '../forms/order-special-offer-form';
import { useModal as useModalSpecial } from '../modal-special';
import styles from './hero.module.css';

const ModalFormSpecialOffer = () => (
  <>
    <OrderSpecialOfferForm className={styles.heroFormWrapper} />
  </>
)

const BackgroundSection = ({ children, className, image }) => {
  const data = useStaticQuery(graphql`
    query {
      food: file(relativePath: { eq: "food-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gradient: file(relativePath: { eq: "green-gradient-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobile: file(relativePath: { eq: "mobile-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const foodImg = data.food.childImageSharp.fluid
  const gradientImg = data.gradient.childImageSharp.fluid
  const mobileFoodImg = data.mobile.childImageSharp.fluid

  const getImg = image => {
    switch (true) {
      case image === "food":
        return foodImg
      case image === "gradient":
        return gradientImg
      case image === "mobile-food":
        return mobileFoodImg
    }
  }
  const img = getImg(image)

  return (
    <BackgroundImage className={className} fluid={img}>
      {children}
    </BackgroundImage>
  )
}

export const Hero = () => {
  const { show, RenderModal: RenderModalOffer } = useModalSpecial()
  useEffect(() => {
    show()
  }, [])

  return (
    <>
      {typeof document !== `undefined` && (
        <RenderModalOffer className="modalForm">
          <ModalFormSpecialOffer />
        </RenderModalOffer>
      )}
      <BrowserView>
        <section className={styles.hero}>
          <BackgroundSection image="gradient">
            <div className={styles.heroForm}>
              <h1 className={styles.title}>
                Dvoudenní zkouška <strong>5chodového</strong> menu za{" "}
                <strong>super cenu</strong>
              </h1>
              <HeroForm />
            </div>
          </BackgroundSection>
          <BackgroundSection image="food" className={styles.offersContent}>
            <div>
              <div className={styles.heroPrice}>
                <div className={styles.oldPrice}>
                  1000 <span>Kč</span>
                </div>
                <div>
                  700 <span>Kč</span>
                </div>
              </div>
              <div className={styles.offersList}>
                <div className={styles.offersListItem}>
                  <div className={styles.offersListItemHeader}>
                    <svg
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M29.1952 20.1562H28.7243V19.6875C28.7243 12.3893 23.0083 6.59754 16.0103 6.12609V5.15625H16.9521C17.4722 5.15625 17.8938 4.73654 17.8938 4.21875C17.8938 3.70096 17.4722 3.28125 16.9521 3.28125H13.1849C12.6648 3.28125 12.2432 3.70096 12.2432 4.21875C12.2432 4.73654 12.6648 5.15625 13.1849 5.15625H14.1267V6.12609C7.1244 6.59783 1.41267 12.393 1.41267 19.6875V20.1562H0.941781C0.421682 20.1562 0 20.576 0 21.0938C0 21.6115 0.421682 22.0312 0.941781 22.0312H1.24598L2.89274 26.1294C3.03571 26.4854 3.38205 26.7188 3.76712 26.7188H26.3699C26.755 26.7188 27.1013 26.4854 27.2442 26.1294L28.891 22.0312H29.1952C29.7154 22.0312 30.137 21.6115 30.137 21.0938C30.137 20.576 29.7154 20.1562 29.1952 20.1562ZM3.29623 19.6875C3.29623 13.2258 8.57727 7.96875 15.0685 7.96875C21.5597 7.96875 26.8408 13.2258 26.8408 19.6875V20.1562H3.29623V19.6875ZM25.7322 24.8438H4.40477L3.27463 22.0312H26.8624L25.7322 24.8438Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="30.137" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className={styles.offersListItemBody}>
                    <b>12</b> krabíček pro <b>10</b> chodů
                  </div>
                </div>
                <div className={styles.offersListItem}>
                  <div className={styles.offersListItemHeader}>
                    <svg
                      width="25"
                      height="26"
                      viewBox="0 0 25 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M12.2326 9.34169C13.8398 9.34169 15.1473 7.98576 15.1473 6.31904C15.1473 4.65232 13.8398 3.29639 12.2326 3.29639C10.6254 3.29639 9.31787 4.65232 9.31787 6.31904C9.31787 7.98576 10.6254 9.34169 12.2326 9.34169ZM12.2326 4.78294C13.0494 4.78294 13.7138 5.47205 13.7138 6.31904C13.7138 7.16602 13.0494 7.85514 12.2326 7.85514C11.4158 7.85514 10.7513 7.16602 10.7513 6.31904C10.7513 5.47205 11.4158 4.78294 12.2326 4.78294Z"
                          fill="white"
                        />
                        <path
                          d="M21.6602 11.1987C21.6602 9.96915 20.6956 8.96885 19.51 8.96885H17.8296C19.6437 4.92028 16.8615 0 12.2956 0C7.74553 0 4.93892 4.90507 6.76146 8.96885H5.07987C3.89426 8.96885 2.92969 9.96915 2.92969 11.1987V23.1406C2.92969 24.3701 3.89426 25.3704 5.07987 25.3704H19.51C20.6956 25.3704 21.6602 24.3701 21.6602 23.1406C21.6602 22.9422 21.6602 11.4036 21.6602 11.1987ZM20.2268 20.2713L18.1523 18.12L20.2268 15.9687V20.2713ZM20.2268 11.1987V13.8664L10.8639 23.576L6.60818 19.1627L10.4808 15.1467L11.6904 17.1232C11.9715 17.5824 12.6194 17.583 12.9007 17.1232L16.9815 10.4554H19.51C19.9052 10.4554 20.2268 10.7888 20.2268 11.1987ZM12.2956 1.48655C15.7931 1.48655 18.2538 5.44488 16.211 8.9404L12.2956 15.3378C11.917 14.7192 8.38261 8.94417 8.37893 8.93827C6.39058 5.74819 8.59233 1.48655 12.2956 1.48655ZM5.07987 10.4554H7.60964L9.69365 13.8606L4.36315 19.3886V11.1987C4.36315 10.7888 4.68467 10.4554 5.07987 10.4554ZM4.36315 23.1406V21.4908L5.59453 20.2139L9.13355 23.8839H5.07987C4.68467 23.8839 4.36315 23.5505 4.36315 23.1406ZM19.51 23.8839H12.5942L17.1387 19.1711L20.2268 22.3736V23.1406C20.2268 23.5505 19.9052 23.8839 19.51 23.8839Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="24.4644" height="25.3704" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className={styles.offersListItemBody}>
                    Dovoz až ke dveřím <b>zdarma</b>
                  </div>
                </div>
                <div className={styles.offersListItem}>
                  <div className={styles.offersListItemHeader}>
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M29.9062 28.8751H3.09377C1.38778 28.8751 0 27.4873 0 25.7813V20.625C0 20.055 0.461229 19.5938 1.03126 19.5938C2.73724 19.5938 4.12503 18.206 4.12503 16.5C4.12503 14.794 2.73724 13.4062 1.03126 13.4062C0.461229 13.4063 0 12.9451 0 12.3751V7.21877C0 5.51278 1.38778 4.125 3.09377 4.125H29.9063C31.6123 4.125 33.0001 5.51278 33.0001 7.21877V12.3751C33.0001 12.9451 32.5388 13.4063 31.9688 13.4063C30.2628 13.4063 28.875 14.7941 28.875 16.5001C28.875 18.2061 30.2628 19.5938 31.9688 19.5938C32.5388 19.5938 33.0001 20.0551 33.0001 20.6251V25.7814C33 27.4873 31.6123 28.8751 29.9062 28.8751V28.8751ZM2.06251 21.5526V25.7813C2.06251 26.3503 2.52478 26.8126 3.09377 26.8126H29.9063C30.4753 26.8126 30.9376 26.3503 30.9376 25.7813V21.5526C28.587 21.0732 26.8125 18.9906 26.8125 16.5C26.8125 14.0095 28.587 11.9269 30.9376 11.4475V7.21877C30.9376 6.64978 30.4753 6.18751 29.9063 6.18751H3.09377C2.52478 6.18751 2.06251 6.64978 2.06251 7.21877V11.4475C4.41302 11.9269 6.18754 14.0095 6.18754 16.5001C6.18754 18.9906 4.41302 21.0732 2.06251 21.5526V21.5526Z"
                          fill="white"
                        />
                        <path
                          d="M12.4414 24.3738L18.6267 7.87961L20.5579 8.6038L14.3726 25.098L12.4414 24.3738Z"
                          fill="white"
                        />
                        <path
                          d="M11.6211 16.8472C9.91513 16.8472 8.52734 15.4594 8.52734 13.7534C8.52734 12.0474 9.91513 10.6597 11.6211 10.6597C13.3271 10.6597 14.7149 12.0474 14.7149 13.7534C14.7149 15.4594 13.3271 16.8472 11.6211 16.8472ZM11.6211 12.7222C11.0521 12.7222 10.5899 13.1844 10.5899 13.7534C10.5899 14.3224 11.0521 14.7847 11.6211 14.7847C12.1901 14.7847 12.6524 14.3224 12.6524 13.7534C12.6524 13.1844 12.1901 12.7222 11.6211 12.7222Z"
                          fill="white"
                        />
                        <path
                          d="M22.2813 23.243C20.5753 23.243 19.1875 21.8552 19.1875 20.1492C19.1875 18.4432 20.5753 17.0554 22.2813 17.0554C23.9873 17.0554 25.375 18.4432 25.375 20.1492C25.375 21.8552 23.9873 23.243 22.2813 23.243V23.243ZM22.2813 19.1179C21.7123 19.1179 21.25 19.5802 21.25 20.1492C21.25 20.7182 21.7123 21.1805 22.2813 21.1805C22.8503 21.1805 23.3125 20.7182 23.3125 20.1492C23.3125 19.5802 22.8503 19.1179 22.2813 19.1179Z"
                          fill="white"
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
                    Slevu <b>30 %</b>
                    Jen <b>350 Kč</b> za den
                  </div>
                </div>
              </div>
            </div>
          </BackgroundSection>
          <div className={styles.wave}></div>
        </section>
      </BrowserView>
      <MobileView>
        <BackgroundSection image="mobile-food">
          <section className={styles.heroMobile}>
            <div className={styles.titleMobile}>
              Dvoudenní zkouška{" "}
              <strong className={styles.green}>5chodového</strong> menu za{" "}
              <b>super cenu</b>
            </div>
            <div>
              <div className={styles.oldPriceMobile}>
                1000 <span className={styles.green}>Kč</span>
              </div>
              <div className={styles.heroPriceMobile}>
                <div>
                  700 <span>Kč</span>
                </div>
              </div>
              <div className={styles.offersListMobile}>
                <div className={styles.offersListMobileTitle}>Dostanete:</div>
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
                    <b>12</b> krabíček pro <b>10</b> chodů
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
                    Slevu <b>30%</b> Jen <b>350 Kč</b> za den
                  </div>
                </div>
              </div>
              <div className={styles.heroForm}>
                <HeroForm />
              </div>
              <div className={styles.btnTop}>
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
            <div className={styles.waveMobile}></div>
            <div className={styles.foodMask}></div>
          </section>
        </BackgroundSection>
      </MobileView>
    </>
  )
}
