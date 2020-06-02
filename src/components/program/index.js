import cx from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import { useState } from 'react';

import IconCook from './icons/icon-ui-cook.svg';
import IconHealthForce from './icons/icon-ui-health-force.svg';
import IconMeasurement from './icons/icon-ui-measurement.svg';
import IconProgram from './icons/icon-ui-program.svg';
import styles from './program.module.css';

export const Program = ({ id = "" }) => {
  const useSwitchUtil = (type, selectedItem) => {
    const [activeItem, setActiveItem] = useState(selectedItem)

    const changeActiveItem = id => {
      const isTabs = type === "tabs"
      const isAlreadyActive = activeItem === id
      const idSelected = isAlreadyActive && !isTabs ? 0 : id
      setActiveItem(idSelected)
    }
    return [activeItem, changeActiveItem]
  }
  const [activeTab, setActiveTab] = useSwitchUtil("tabs", 1)
  return (
    <section className={styles.program} id={id}>
      <h3 className={cx("sectionTitle", styles.title)}>
        Vyber si svůj program
      </h3>
      <div className={styles.tabs}>
        <nav className={styles.tabsNav}>
          <button
            key={`tab-1`}
            role="tab"
            aria-selected={1 === activeTab}
            id={`panel-1`}
            onClick={() => setActiveTab(1, "tabs")}
            onPointerOver={() => setActiveTab(1, "tabs")}
            className={cx(styles.tab, {
              [styles.tabSelected]: activeTab === 1,
            })}
          >
            <a href="/products/product-1" className={styles.tabLink}>
              <img src={IconCook} className={styles.tabImg} alt="icon" />
            </a>
            <h5 className={styles.tabTitle}>Hubnoucí program</h5>
          </button>
          <button
            key={`tab-2`}
            role="tab"
            aria-selected={2 === activeTab}
            id={`panel-2`}
            onClick={() => setActiveTab(2, "tabs")}
            onPointerOver={() => setActiveTab(2, "tabs")}
            className={cx(styles.tab, {
              [styles.tabSelected]: activeTab === 2,
            })}
          >
            <a href="/products/product-2" className={styles.tabLink}>
              <img src={IconHealthForce} className={styles.tabImg} alt="icon" />
            </a>
            <h5 className={styles.tabTitle}>Nabírací program</h5>
          </button>
          <button
            key={`tab-3`}
            role="tab"
            aria-selected={3 === activeTab}
            id={`panel-3`}
            onClick={() => setActiveTab(3, "tabs")}
            onPointerOver={() => setActiveTab(3, "tabs")}
            className={cx(styles.tab, {
              [styles.tabSelected]: activeTab === 3,
            })}
          >
            <a href="/products/product-3" className={styles.tabLink}>
              <img src={IconMeasurement} className={styles.tabImg} alt="icon" />
            </a>
            <h5 className={styles.tabTitle}>Udržovací program</h5>
          </button>
          <button
            key={`tab-4`}
            role="tab"
            aria-selected={4 === activeTab}
            id={`panel-4`}
            onClick={() => setActiveTab(4, "tabs")}
            onPointerOver={() => setActiveTab(4, "tabs")}
            className={cx(styles.tab, {
              [styles.tabSelected]: activeTab === 4,
            })}
          >
            <a href="/products/product-4" className={styles.tabLink}>
              {/* <img src={IconProgram} className={styles.tabImg} alt="icon" /> */}
              <svg
                className={styles.tabImg}
                width="128"
                height="102"
                viewBox="0 0 128 102"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M122.189 44.3599H102.4C104.577 42.9634 106.562 41.2431 108.27 39.2326C112.36 34.4163 114.614 28.259 114.614 21.8957V11.2182C116.586 10.4754 117.996 8.55399 117.996 6.29885V6.27112C117.996 3.37519 115.674 1.02002 112.818 1.02002H15.1807C12.3271 1.02002 10.0059 3.37519 10.0059 6.27112V6.29885C10.0059 8.55299 11.416 10.4744 13.3857 11.2172V21.8957C13.3857 28.259 15.6396 34.4163 19.7314 39.2326C21.4385 41.2431 23.4229 42.9634 25.6006 44.3599H5.81055C2.60645 44.3599 0 47.0033 0 50.2528V50.2864C0 52.907 1.69629 55.1325 4.0332 55.896V68.8742C4.0332 86.1399 17.8828 100.186 34.9072 100.186H38.3379C38.3428 100.186 38.3477 100.187 38.3525 100.187H89.6494C89.6543 100.187 89.6592 100.186 89.6631 100.186H93.0957C110.12 100.186 123.97 86.1399 123.97 68.8742V55.8951C126.306 55.1305 128 52.905 128 50.2854V50.2528C128 47.0033 125.394 44.3599 122.189 44.3599V44.3599ZM114.246 6.27112V6.29885C114.246 7.09711 113.606 7.74681 112.819 7.74681H87.3955V4.82315H112.819C113.606 4.82315 114.246 5.47285 114.246 6.27112V6.27112ZM83.6445 4.82315V12.2908C83.6445 13.3416 84.4844 14.1923 85.5195 14.1923C86.5557 14.1923 87.3945 13.3416 87.3945 12.2908V11.5499H110.863V21.8957C110.863 27.3488 108.934 32.6237 105.428 36.7497C101.986 40.8004 97.252 43.4982 92.085 44.3599H87.3945V20.6596C87.3945 19.6088 86.5557 18.7581 85.5195 18.7581C84.4844 18.7581 83.6445 19.6088 83.6445 20.6596V44.3599H44.3574V4.82315H83.6445ZM87.7734 54.252C87.7734 54.2609 87.7725 54.2688 87.7725 54.2767C87.7725 54.2857 87.7734 54.2936 87.7734 54.3015V96.3826H40.2275V48.164H87.7744V54.252H87.7734ZM13.7559 6.27112C13.7559 5.47285 14.3955 4.82315 15.1816 4.82315H40.6074V7.74681H15.1816C14.3955 7.74681 13.7559 7.09711 13.7559 6.29885V6.27112ZM22.5723 36.7497C19.0664 32.6237 17.1357 27.3488 17.1357 21.8957V11.5499H40.6074V44.3609H35.918C30.749 43.4982 26.0137 40.8004 22.5723 36.7497ZM7.7832 68.8742V56.1783H29.1846C30.2207 56.1783 31.0596 55.3276 31.0596 54.2767C31.0596 53.2269 30.2207 52.3752 29.1846 52.3752H5.81055C4.67383 52.3752 3.75 51.4383 3.75 50.2864V50.2528C3.75 49.1009 4.67383 48.164 5.81055 48.164H35.751H35.7539H35.7588H36.4766V96.3826H34.9062C19.9512 96.3826 7.7832 84.0422 7.7832 68.8742ZM120.22 68.8742C120.22 84.0422 108.052 96.3826 93.0957 96.3826H91.5244V56.1783H120.22V68.8742ZM124.25 50.2854C124.25 51.4383 123.325 52.3752 122.189 52.3752H91.5244V48.164H92.2432H92.248H92.251H122.189C123.325 48.164 124.249 49.1009 124.249 50.2528V50.2854H124.25Z"
                  fill="#424242"
                />
                <path
                  d="M70.3848 55.9546H48.8877C47.8516 55.9546 47.0127 56.8112 47.0127 57.8671C47.0127 58.9239 47.8516 59.7796 48.8877 59.7796H70.3848C71.4209 59.7796 72.2598 58.9239 72.2598 57.8671C72.2598 56.8112 71.4209 55.9546 70.3848 55.9546Z"
                  fill="#2FA037"
                />
                <path
                  d="M59.6357 63.7202H48.8877C47.8516 63.7202 47.0127 64.5759 47.0127 65.6327C47.0127 66.6886 47.8516 67.5452 48.8877 67.5452H59.6357C60.6719 67.5452 61.5107 66.6886 61.5107 65.6327C61.5107 64.5759 60.6719 63.7202 59.6357 63.7202Z"
                  fill="#2FA037"
                />
                <path
                  d="M59.6357 86.4669H48.8877C47.8516 86.4669 47.0127 87.3236 47.0127 88.3794C47.0127 89.4363 47.8516 90.2919 48.8877 90.2919H59.6357C60.6719 90.2919 61.5107 89.4363 61.5107 88.3794C61.5107 87.3236 60.6719 86.4669 59.6357 86.4669Z"
                  fill="#2FA037"
                />
                <path
                  d="M53.252 14.9195H74.749C75.7852 14.9195 76.624 14.0638 76.624 13.007C76.624 11.9511 75.7852 11.0945 74.749 11.0945H53.252C52.2158 11.0945 51.377 11.9511 51.377 13.007C51.377 14.0638 52.2158 14.9195 53.252 14.9195V14.9195Z"
                  fill="#2FA037"
                />
                <path
                  d="M53.252 22.6851H64.001C65.0361 22.6851 65.876 21.8285 65.876 20.7726C65.876 19.7158 65.0361 18.8601 64.001 18.8601H53.252C52.2158 18.8601 51.377 19.7158 51.377 20.7726C51.377 21.8285 52.2158 22.6851 53.252 22.6851V22.6851Z"
                  fill="#2FA037"
                />
                <path
                  d="M53.252 37.3506H64.001C65.0361 37.3506 65.876 36.494 65.876 35.4381C65.876 34.3813 65.0361 33.5256 64.001 33.5256H53.252C52.2158 33.5256 51.377 34.3813 51.377 35.4381C51.377 36.494 52.2158 37.3506 53.252 37.3506V37.3506Z"
                  fill="#2FA037"
                />
              </svg>
            </a>
            <h5 className={styles.tabTitle}>Office pack</h5>
          </button>
        </nav>
        <div className={styles.tabsContent}>
          <div
            key={`panel-1`}
            id={`content-panel-1`}
            role="tabpanel"
            aria-labelledby={`tab-1`}
            className={cx(styles.tabPanel, {
              show: activeTab === 1,
              hide: activeTab !== 1,
            })}
          >
            <h4 className={styles.tabsContentTitle}>Hubnoucí program</h4>
            <p className={styles.tabsContentText}>
              Speciální krabičková dieta zaměřená na redukci tělesného tuku
              zdravou cestou a s udržitelnými výsledky.
            </p>
            <Link to="/products/product-1" className={styles.button}>
              Více o programu
            </Link>
            <p className={styles.afterButtonText}>
              V tuto chvíli bohužel nenabízíme možnost low-carb, low-fat,
              vegetarián, vegan či speciálních zdravotních diet.
            </p>
          </div>
          <div
            key={`panel-2`}
            id={`content-panel-2`}
            role="tabpanel"
            aria-labelledby={`tab-2`}
            className={cx(styles.tabPanel, {
              show: activeTab === 2,
              hide: activeTab !== 2,
            })}
          >
            <h4 className={styles.tabsContentTitle}>Nabírací program</h4>
            <p className={styles.tabsContentText}>
              Speciální krabičková dieta zaměřená zejména pro muže, kteří
              usilují o nárůst svalové hmoty.
            </p>
            <Link to="/products/product-2" className={styles.button}>
              Více o programu
            </Link>
            <p className={styles.afterButtonText}>
              V tuto chvíli bohužel nenabízíme možnost low-carb, low-fat,
              vegetarián, vegan či speciálních zdravotních diet.
            </p>
          </div>
          <div
            key={`panel-3`}
            id={`content-panel-3`}
            role="tabpanel"
            aria-labelledby={`tab-3`}
            className={cx(styles.tabPanel, {
              show: activeTab === 3,
              hide: activeTab !== 3,
            })}
          >
            <h4 className={styles.tabsContentTitle}>Udržovací program</h4>
            <p className={styles.tabsContentText}>
              Speciální krabičková dieta zaměřená na udržení současné tělesné
              hmotnosti díky vyváženému, pestrému a chutnému jídlu.
            </p>
            <Link to="/products/product-3" className={styles.button}>
              Více o programu
            </Link>
            <p className={styles.afterButtonText}>
              V tuto chvíli bohužel nenabízíme možnost low-carb, low-fat,
              vegetarián, vegan či speciálních zdravotních diet.
            </p>
          </div>
          <div
            key={`panel-4`}
            id={`content-panel-4`}
            role="tabpanel"
            aria-labelledby={`tab-4`}
            className={cx(styles.tabPanel, {
              show: activeTab === 4,
              hide: activeTab !== 4,
            })}
          >
            <h4 className={styles.tabsContentTitle}>Office pack</h4>
            <p className={styles.tabsContentText}>
              Vyvážené jídlo do kanceláře, po kterém ti práce půjde od ruky.
            </p>
            <Link to="/products/product-4" className={styles.button}>
              Více o programu
            </Link>
            <p className={styles.afterButtonText}>
              V tuto chvíli bohužel nenabízíme možnost low-carb, low-fat,
              vegetarián, vegan či speciálních zdravotních diet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
