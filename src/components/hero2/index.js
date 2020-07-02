import cx from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { Button } from '../button';
import { Container } from '../container';
import { HeroForm } from '../forms/hero-form';
import { OrderSpecialOfferForm } from '../forms/order-special-offer-form';
import styles from './hero.module.css';

// import { useModal as useModalSpecial } from '../modal-special';
// const ModalFormSpecialOffer = () => (
//   <>
//     <OrderSpecialOfferForm className={styles.heroFormWrapper} />
//   </>
// )

const BackgroundSection = ({ children, className, image }) => {
  const data = useStaticQuery(graphql`
    query {
      food: file(relativePath: { eq: "food-bg-desktop.jpg" }) {
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
  // const { show, RenderModal: RenderModalOffer } = useModalSpecial()

  // useEffect(() => {
  //   show()
  // }, [])

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
      {/* {typeof document !== `undefined` && (
        <RenderModalOffer className="modalForm">
          <ModalFormSpecialOffer />
        </RenderModalOffer>
      )} */}
      <BrowserView>
        <section className={styles.hero}>
          <BackgroundSection image="gradient">
            <div className={styles.heroForm}>
              <Container>
                <h1 className={styles.title}>
                  Dvoudenní zkouška <strong>5chodového</strong> menu za{" "}
                  <strong>super cenu</strong>
                </h1>
                <HeroForm />
              </Container>
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
                    <b>5</b> prémiových <br /> <b>jídel</b> denně
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
                      width="29"
                      height="30"
                      viewBox="0 0 29 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.3981 15.3886C27.2774 15.1416 27.2774 14.8584 27.3981 14.6115L28.517 12.3225C29.1399 11.0481 28.6463 9.52904 27.3933 8.86419L25.1427 7.67006C24.8999 7.54127 24.7334 7.31206 24.6859 7.04142L24.2458 4.53193C24.0007 3.13472 22.7082 2.19583 21.3039 2.39452L18.7813 2.75135C18.509 2.78978 18.2398 2.70225 18.0423 2.51117L16.2112 0.739789C15.1916 -0.246567 13.5944 -0.246626 12.5748 0.739789L10.7437 2.51135C10.5461 2.70248 10.2769 2.78984 10.0047 2.75152L7.48204 2.39469C6.07727 2.19589 4.7853 3.1349 4.5402 4.53211L4.10005 7.04147C4.05253 7.31217 3.88607 7.54133 3.64332 7.67018L1.39276 8.8643C0.139686 9.5291 -0.353902 11.0482 0.26906 12.3227L1.38789 14.6116C1.5086 14.8586 1.5086 15.1418 1.38789 15.3887L0.269001 17.6776C-0.35396 18.952 0.139628 20.4711 1.3927 21.1359L3.64326 22.33C3.88607 22.4588 4.05253 22.688 4.10005 22.9587L4.5402 25.4682C4.76332 26.7401 5.85398 27.6321 7.10746 27.632C7.23091 27.632 7.35618 27.6233 7.4821 27.6055L10.0047 27.2487C10.2768 27.2101 10.5462 27.2978 10.7437 27.4889L12.5748 29.2603C13.0847 29.7535 13.7387 30.0001 14.393 30C15.0471 29.9999 15.7015 29.7534 16.2111 29.2603L18.0423 27.4889C18.2398 27.2978 18.5091 27.2105 18.7813 27.2487L21.3039 27.6055C22.7089 27.8043 24.0007 26.8653 24.2458 25.4681L24.686 22.9587C24.7335 22.688 24.8999 22.4589 25.1427 22.33L27.3933 21.1359C28.6463 20.4711 29.1399 18.952 28.517 17.6775L27.3981 15.3886ZM26.5823 19.6074L24.3317 20.8015C23.6142 21.1823 23.1221 21.8595 22.9817 22.6597L22.5416 25.1691C22.4587 25.6418 22.0216 25.9594 21.5463 25.8923L19.0236 25.5354C18.2192 25.4215 17.4231 25.6804 16.8392 26.2452L15.0081 28.0165C14.6632 28.3501 14.1228 28.3501 13.7778 28.0165L11.9467 26.2451C11.4532 25.7678 10.8081 25.5091 10.1347 25.5091C10.0113 25.5091 9.88688 25.5177 9.76231 25.5354L7.2397 25.8922C6.76475 25.9594 6.32735 25.6418 6.24438 25.1691L5.80417 22.6596C5.66378 21.8594 5.17172 21.1821 4.45413 20.8015L2.20357 19.6073C1.77959 19.3824 1.6126 18.8685 1.82336 18.4373L2.94225 16.1484C3.29897 15.4185 3.29897 14.5815 2.94225 13.8516L1.82336 11.5627C1.6126 11.1315 1.77959 10.6176 2.20357 10.3926L4.45413 9.19852C5.17166 8.81772 5.66378 8.1405 5.80411 7.34036L6.24426 4.83093C6.32723 4.3582 6.76422 4.04063 7.23959 4.10778L9.76219 4.46461C10.5664 4.57846 11.3627 4.31965 11.9466 3.75487L13.7778 1.98349C14.1226 1.64986 14.663 1.64986 15.008 1.98349L16.8391 3.75487C17.423 4.31971 18.2192 4.57846 19.0235 4.46461L21.5461 4.10778C22.0212 4.04057 22.4586 4.3582 22.5415 4.83093L22.9816 7.34042C23.122 8.14056 23.6141 8.81784 24.3317 9.19852L26.5822 10.3926C27.0062 10.6176 27.1732 11.1315 26.9624 11.5627L25.8435 13.8516C25.4868 14.5813 25.4868 15.4185 25.8435 16.1483L26.9624 18.4372C27.1732 18.8685 27.0063 19.3825 26.5823 19.6074Z"
                        fill="white"
                      />
                      <path
                        d="M20.7139 8.67868C20.3761 8.34083 19.8282 8.34083 19.4904 8.67868L8.07126 20.0979C7.73341 20.4357 7.73341 20.9835 8.07126 21.3214C8.24018 21.4903 8.4616 21.5748 8.68297 21.5748C8.90433 21.5748 9.12582 21.4903 9.29468 21.3214L20.7138 9.90222C21.0518 9.56431 21.0518 9.01658 20.7139 8.67868Z"
                        fill="white"
                      />
                      <path
                        d="M10.9324 7.21387C9.18331 7.21387 7.76025 8.63693 7.76025 10.3861C7.76025 12.1352 9.18331 13.5582 10.9324 13.5582C12.6816 13.5582 14.1046 12.1352 14.1046 10.3861C14.1046 8.63693 12.6816 7.21387 10.9324 7.21387ZM10.9324 11.8279C10.1374 11.8279 9.49058 11.1811 9.49058 10.386C9.49058 9.59094 10.1374 8.94413 10.9324 8.94413C11.7275 8.94413 12.3744 9.59094 12.3744 10.386C12.3743 11.1811 11.7275 11.8279 10.9324 11.8279Z"
                        fill="white"
                      />
                      <path
                        d="M17.8538 16.4419C16.1047 16.4419 14.6816 17.865 14.6816 19.6141C14.6816 21.3632 16.1047 22.7863 17.8538 22.7863C19.603 22.7863 21.026 21.3632 21.026 19.6141C21.026 17.865 19.603 16.4419 17.8538 16.4419ZM17.8538 21.056C17.0588 21.056 16.4119 20.4091 16.4119 19.6141C16.4119 18.819 17.0587 18.1722 17.8538 18.1722C18.6489 18.1722 19.2957 18.819 19.2957 19.6141C19.2957 20.4091 18.6489 21.056 17.8538 21.056Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className={styles.offersListItemBody}>
                    Sleva <b>30%</b>
                    <br />
                    Jen <b>350 Kč</b>/den
                  </div>
                </div>
              </div>
            </div>
          </BackgroundSection>
          <div className={styles.wave}>
            <svg
              width="1920"
              height="66"
              viewBox="0 0 1920 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M743.204 5.79774C331.094 -11.0589 76.0221 12.8213 0 26.8685V66H1920V23.3568C1713.68 54.6619 1223.2 28.8753 1223.2 28.8753C1223.2 28.8753 1155.31 22.6544 743.204 5.79774Z"
                fill="white"
              />
            </svg>
          </div>
        </section>
      </BrowserView>
      <MobileView>
        <BackgroundSection image="mobile-food" className={styles.heroMobileImg}>
          <section className={styles.heroMobile}>
            <div className={styles.titleMobile}>
              Dvoudenní zkouška{" "}
              <strong className={styles.green}>5chodového</strong> menu za{" "}
              <b>super cenu</b>
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
                <HeroForm />
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
            <div className={styles.waveMobile}></div>
            <div className={styles.foodMaskLeft1}></div>
            <div
              className={cx(styles.foodMaskLeft2, {
                [styles.descHidden]: !showForm,
              })}
            ></div>
            <div className={styles.foodMaskLeft3}></div>
            <div className={styles.foodMaskRight1}></div>
            <div
              className={cx(styles.foodMaskRight2, {
                [styles.descHidden]: !showForm,
              })}
            ></div>
            <div className={styles.foodMaskRight3}></div>
          </section>
        </BackgroundSection>
      </MobileView>
    </>
  )
}
