import cx from 'classnames';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import styles from './modal.module.css';
import food1 from '../../images/food-offer-1.png';
import food2 from '../../images/food-offer-2.png';

export const Modal = React.memo(
  ({ children, closeModal, darkMode = false, className }) => {
    const domEl = document.getElementById("root")

    if (!domEl) return null

    return ReactDOM.createPortal(
      <div className={styles.modalOverlay}>
        <div
          className={cx(styles.modal, { [styles.dark]: darkMode }, className)}
        >
          <div className={styles.modalHeader}>
          {/* <div className={styles.headerBg}> */}
            <img className={styles.food1} src={food1} />
            <img className={styles.food2} src={food2} />
          {/* </div> */}
            <button
              type="button"
              className={styles.modalClose}
              onClick={closeModal}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6376 11L21.6609 20.0234C22.1131 20.4756 22.1131 21.2087 21.6609 21.6608C21.2087 22.1131 20.4755 22.1131 20.0234 21.6608L11 12.6375L1.97664 21.6608C1.52444 22.1131 0.791311 22.1131 0.339152 21.6608C-0.113008 21.2086 -0.113051 20.4755 0.339152 20.0234L9.36249 11L0.339152 1.97669C-0.113051 1.52448 -0.113051 0.791353 0.339152 0.339193C0.791354 -0.113008 1.52449 -0.112965 1.97664 0.339193L11 9.36253L20.0233 0.339193C20.4755 -0.113008 21.2086 -0.112965 21.6608 0.339193C22.113 0.791397 22.113 1.52453 21.6608 1.97669L12.6376 11Z"
                  fill={darkMode ? `var(--color-white)` : `var(--color-black)`}
                />
              </svg>
            </button>
          </div>
          <div className={styles.modalBody}>
            <h3 className={cx("text-center", styles.modalTitle)}>
              Speciální homeoffice pack
            </h3>
            <p className={cx("text-center", styles.desc)}>Oběd a večeře až k tobě domů!</p>
            <div className={styles.offerPlank}>
              <div className={styles.offer1}>
                <span>
                  <b>Pack pro jednoho</b> za <b>125 Kč/porce</b> včetně dovozu.
                </span>
              </div>
              <div className={styles.offer2}>
                <span>
                  <b>Pack pro páry</b> za <b>110 Kč/porce</b> včetně dovozu.
                </span>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>,
      domEl
    )
  }
)

export const useModal = (ch) => {
  const [isVisible, setIsVisible] = useState(ch)

  const show = () => {
    document.body.style.height = "100vh"
    document.body.style.overflow = "hidden"
    setIsVisible(true)
  }
  const hide = () => {
    document.body.style.height = "initial"
    document.body.style.overflow = "initial"
    setIsVisible(false)
  }

  const RenderModal = ({ children, darkMode, className}) => (
    <>
      {isVisible && (
        <Modal closeModal={hide} darkMode={darkMode} className={className}>
          {children}
        </Modal>
      )}
    </>
  )

  return {
    show,
    hide,
    RenderModal,
  }
}
