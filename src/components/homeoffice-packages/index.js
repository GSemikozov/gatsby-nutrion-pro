import cx from 'classnames';
import { Link } from 'gatsby';
import React, { useState } from 'react';

import { Button } from '../button';
import { Container } from '../container';
import { OrderConsultationForm } from '../forms/order-consultation-form';
import { useModal } from '../modal';
import styles from './homeoffice-packages.module.css';
import icon1 from './icons/icon1.svg';
import icon2 from './icons/icon2.svg';

const ModalForm = ({ data }) => (
  <>
    <h3 className={cx("text-center", styles.modalTitle)}>{data.title}</h3>
    <OrderConsultationForm
      leadName={data.leadName}
      leadValue={data.leadValue}
    />
  </>
)

export const HomeofficePackages = () => {
  const { show, RenderModal } = useModal()
  const initialModalData = {
    title: "Mám zájem",
    leadName: "homeoffice-package",
    leadValue: "0",
  }
  const [modalData, setModalData] = useState(initialModalData)

  const handleOpenModal = data => {
    setModalData(data)
    show()
  }

  return (
    <section className={cx("section", styles.section)}>
      <Container>
        <h3 className={cx("sectionTitle text-center", styles.title)}>
          Speciální homeoffice balíček
        </h3>
        <p className={styles.subtitle}>
          “Obědy a večeře” s dovozem od{" "}
          <strong className={styles.green}>110 Kč / porce</strong>
        </p>
        <div className={styles.homeofficePackages}>
          <div className={styles.homeofficePackage}>
            <div className={styles.homeofficePackageRibbon}>125 Kč</div>
            <div className={styles.homeofficePackageTop}>
              <img
                src={icon1}
                className={styles.homeofficePackageIcon}
                alt="icon"
                onClick={() =>
                  handleOpenModal({
                    title: "Pro jednoho",
                    leadName: "homeoffice_package",
                    leadValue: "1",
                  })
                }
              />
            </div>
            <div className={styles.homeofficePackageBottom}> Pro jednoho</div>
          </div>
          <div className={styles.homeofficePackage}>
            <div className={styles.homeofficePackageRibbon}>110 Kč</div>
            <div className={styles.homeofficePackageTop}>
              <img
                src={icon2}
                className={styles.homeofficePackageIcon}
                alt="icon"
                onClick={() =>
                  handleOpenModal({
                    title: "Pro par",
                    leadName: "homeoffice_package",
                    leadValue: "2",
                  })
                }
              />
            </div>
            <div className={styles.homeofficePackageBottom}> Pro par</div>
          </div>
          <div className={cx(styles.homeofficePackage, styles.hiddenXS)}>
            <div className={styles.homeofficePackageTop}>
              Máte zájem o homeoffice balíček pro více lidi?
            </div>
            <div className={styles.homeofficePackageBottom}>
              <Button type="outline" className={styles.button}>
                <span
                  onClick={() =>
                    handleOpenModal({
                      title: "Mám zájem",
                      leadName: "homeoffice_package",
                      leadValue: "0",
                    })
                  }
                >
                  Mám zájem
                </span>
              </Button>
              <RenderModal className="modalForm">
                <ModalForm data={modalData} />
              </RenderModal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
