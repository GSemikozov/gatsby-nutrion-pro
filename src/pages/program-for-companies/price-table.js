import cx from 'classnames';
import React, { useState } from 'react';

import { Button } from '../../components/button';
import { Container } from '../../components/container';
import styles from './price-table.module.css';

const Table = ({ type }) => {
  console.log("type", type, typeof type)
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
              <span>280 Kč</span>
            </td>
            <td>
              <span className={cx({ [styles.oldPrice]: type === "promotion" })}>
                270 Kč
              </span>{" "}
              {type === "promotion" && (
                <span className={styles.newPrice}>250 Kč</span>
              )}
            </td>
            <td>
              <span>260 Kč</span>
            </td>
            <td>
              <span>250 Kč</span>
            </td>
          </tr>
          <tr>
            <td>3chodové menu</td>
            <td>
              <span>360 Kč</span>
            </td>
            <td>
              <span>350 Kč</span>
            </td>
            <td>
              <span>330 Kč</span>
            </td>
            <td>
              <span>320 Kč</span>
            </td>
          </tr>
          <tr>
            <td>5chodové menu</td>
            <td>
              <span>440 Kč</span>
            </td>
            <td>
              <span>420 Kč</span>
            </td>
            <td>
              <span>395 Kč</span>
            </td>
            <td>
              <span>380 Kč</span>
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
            Akce do 31.11
          </Button>
        </div>

        {priceTable === "base" && <Table type="base" />}
        {priceTable === "promotion" && <Table type="promotion" />}
      </Container>
    </section>
  )
}
