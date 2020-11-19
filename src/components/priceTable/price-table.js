import cx from 'classnames';
import React, { useState } from 'react';

import { Button } from '../button';
import { Container } from '../container';
import styles from './price-table.module.css';

const Table = ({ type }) => {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.priceTable}>
        <thead>
          <tr>
            <th>Program</th>
            <th>2 týdny</th>
            <th>1 měsíc</th>
            <th>2 měsíce</th>
            <th>3 měsíce</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Oběd a večeře</td>
            <td>
              <span className={cx({ [styles.oldPrice]: type === "promotion" })}>
                280 Kč
              </span>{" "}
              {type === "promotion" && (
                <span className={styles.newPrice}>224 Kč</span>
              )}
            </td>
            <td>
              <span className={cx({ [styles.oldPrice]: type === "promotion" })}>
                270 Kč
              </span>{" "}
              {type === "promotion" && (
                <span className={styles.newPrice}>224 Kč</span>
              )}
            </td>
            <td>
              <span className={cx({ [styles.oldPrice]: type === "promotion" })}>
                260 Kč
              </span>{" "}
              {type === "promotion" && (
                <span className={styles.newPrice}>224 Kč</span>
              )}
            </td>
            <td>
              <span className={cx({ [styles.oldPrice]: type === "promotion" })}>
                250 Kč
              </span>{" "}
              {type === "promotion" && (
                <span className={styles.newPrice}>224 Kč</span>
              )}
            </td>
          </tr>
          <tr>
            <td>3chodové menu</td>
            <td>
              <span className={cx({ [styles.oldPrice]: type === "promotion" })}>
                360 Kč
              </span>{" "}
              {type === "promotion" && (
                <span className={styles.newPrice}>288 Kč</span>
              )}
            </td>
            <td>
              <span className={cx({ [styles.oldPrice]: type === "promotion" })}>
                350 Kč
              </span>{" "}
              {type === "promotion" && (
                <span className={styles.newPrice}>288 Kč</span>
              )}
            </td>
            <td>
              <span className={cx({ [styles.oldPrice]: type === "promotion" })}>
                330 Kč
              </span>{" "}
              {type === "promotion" && (
                <span className={styles.newPrice}>288 Kč</span>
              )}
            </td>
            <td>
              <span className={cx({ [styles.oldPrice]: type === "promotion" })}>
                320 Kč
              </span>{" "}
              {type === "promotion" && (
                <span className={styles.newPrice}>288 Kč</span>
              )}
            </td>
          </tr>
          <tr>
            <td>5chodové menu</td>
            <td>
              <span className={cx({ [styles.oldPrice]: type === "promotion" })}>
                440 Kč
              </span>{" "}
              {type === "promotion" && (
                <span className={styles.newPrice}>352 Kč</span>
              )}
            </td>
            <td>
              <span className={cx({ [styles.oldPrice]: type === "promotion" })}>
                420 Kč
              </span>{" "}
              {type === "promotion" && (
                <span className={styles.newPrice}>352 Kč</span>
              )}
            </td>
            <td>
              <span className={cx({ [styles.oldPrice]: type === "promotion" })}>
                395 Kč
              </span>{" "}
              {type === "promotion" && (
                <span className={styles.newPrice}>352 Kč</span>
              )}
            </td>
            <td>
              <span className={cx({ [styles.oldPrice]: type === "promotion" })}>
                380 Kč
              </span>{" "}
              {type === "promotion" && (
                <span className={styles.newPrice}>352 Kč</span>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export const TablePrice = () => {
  const [priceTable, setPriceTable] = useState("base")

  return (
    <section className={styles.tableSection}>
      <Container>
        <h3 className={cx("sectionTitle", styles.title)}>
          Ukázková cenová nabídka
        </h3>
        <div className={cx(styles.typeSelector)}>
          <Button
            type="primary"
            size="md"
            className={cx(
              priceTable === "base"
                ? styles.selectedButton
                : styles.selectButton
            )}
            handleClick={() => setPriceTable("base")}
          >
            Cenik
          </Button>
          <Button
            type="primary"
            size="md"
            className={cx(
              priceTable === "promotion"
                ? styles.selectedButton
                : styles.selectButton
            )}
            handleClick={() => setPriceTable("promotion")}
          >
            Akce do 30.11
          </Button>
        </div>

        {priceTable === "base" && <Table type="base" />}
        {priceTable === "promotion" && <Table type="promotion" />}
      </Container>
    </section>
  )
}
