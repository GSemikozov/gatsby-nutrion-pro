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
            className={cx(styles.tab, {
              [styles.tabSelected]: activeTab === 1,
            })}
          >
            <img src={IconCook} className={styles.tabImg} alt="icon" />
            <h5 className={styles.tabTitle}>Hubnoucí program</h5>
          </button>
          <button
            key={`tab-2`}
            role="tab"
            aria-selected={2 === activeTab}
            id={`panel-2`}
            onClick={() => setActiveTab(2, "tabs")}
            className={cx(styles.tab, {
              [styles.tabSelected]: activeTab === 2,
            })}
          >
            <img src={IconHealthForce} className={styles.tabImg} alt="icon" />
            <h5 className={styles.tabTitle}>Nabírací program</h5>
          </button>
          <button
            key={`tab-3`}
            role="tab"
            aria-selected={3 === activeTab}
            id={`panel-3`}
            onClick={() => setActiveTab(3, "tabs")}
            className={cx(styles.tab, {
              [styles.tabSelected]: activeTab === 3,
            })}
          >
            <img src={IconMeasurement} className={styles.tabImg} alt="icon" />
            <h5 className={styles.tabTitle}>Udržovací program</h5>
          </button>
          <button
            key={`tab-4`}
            role="tab"
            aria-selected={4 === activeTab}
            id={`panel-4`}
            onClick={() => setActiveTab(4, "tabs")}
            className={cx(styles.tab, {
              [styles.tabSelected]: activeTab === 4,
            })}
          >
            <img src={IconProgram} className={styles.tabImg} alt="icon" />
            <h5 className={styles.tabTitle}>Uvaříme na míru</h5>
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
              Individuální stravovací plán zaměřený na{" "}
              <span>redukci tělesného tuku</span>
              zdravou cestou a s udržitelnými výsledky.
            </p>
            <Link to="/products/product-1" className={styles.button}>
              Více o programu
            </Link>
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
              Individuální stravovací plán zaměřený zejména pro muže, kteří
              usilují o <span>nárůst svalové hmoty</span>.
            </p>
            <Link to="/products/product-2" className={styles.button}>
              Více o programu
            </Link>
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
              Individuální stravovací plán zaměřený na{" "}
              <span>udržení současné tělesné hmotnosti</span> díky vyváženému,
              pestrému a chutnému jídlu.
            </p>
            <Link to="/products/product-3" className={styles.button}>
              Více o programu
            </Link>
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
            <h4 className={styles.tabsContentTitle}>Uvaříme na míru</h4>
            <p className={styles.tabsContentText}>
              Individuální program přesně{" "}
              <span>podle tebou zadaných makronutrientů</span>.
            </p>
            <Link to="/products/product-4" className={styles.button}>
              Více o programu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
