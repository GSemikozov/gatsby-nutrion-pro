import cx from 'classnames';
import React, { useState } from 'react';

import { Button } from '../../../button';
import { SubscribeForm } from '../../../forms/subscribe-form';
import LocationMarkIcon from '../../icons/icon-map.svg';
import styles from './modal.module.css';

export const ModalLocation = ({ close }) => {
  const [hide, toggleHide] = useState(true)

  const showNext = () => {
    toggleHide(!hide)
  }

  return (
    <>
      <div
        className="text-center"
        style={{ marginBottom: "6px", marginTop: "-16px" }}
      >
        <img src={LocationMarkIcon} alt="icon" />
      </div>
      <h3 className={cx(styles.modalTitle, "text-center")}>
        Bydlíš v Praze a okolí?
      </h3>
      <div
        className={cx(
          styles.locationModalButtons,
          { hide: !hide },
          { show: hide }
        )}
      >
        <Button
          type="tertiary"
          className={styles.locationModalButton}
          handleClick={close}
        >
          Ano
        </Button>
        <Button
          type="outline"
          className={styles.locationModalButton}
          handleClick={showNext}
        >
          Ne, jsem z jiného města
        </Button>
      </div>
      <div
        className={cx(styles.modalContactForm, { hide: hide }, { show: !hide })}
      >
        <p>
          Tak to nás velmi mrzí.{" "}
          <b className={styles.colorSuccess}>
            Bohužel, zatím rozvážíme jenom v Praze a okolí
          </b>
          .
        </p>
        <p>
          Pokud chceš, abychom se ti ozvali, až naši lokaci rozšíříme,{" "}
          <span className={styles.colorSuccess}>zanech nám na sebe e-mail</span>
          .
        </p>
        <p className={styles.colorSuccess}>
          <b>Dáme ti vědět!</b>
        </p>
        <SubscribeForm />
      </div>
    </>
  )
}
