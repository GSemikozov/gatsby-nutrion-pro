import cx from 'classnames';
import React from 'react';

import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { Button } from '../button';
import { Container } from '../container';
import { OrderConsultationForm } from '../forms/order-consultation-form';
import { OrderSpecialOfferForm } from '../forms/order-special-offer-form';
import { useModal } from '../modal';
import { useModal as useModalSpecial } from '../modal-special';
import { HeroDesktopImg } from './hero-content-img-desktop';
import { HeroMobileImg } from './hero-content-img-mobile';
import styles from './hero.module.css';

const ModalForm = () => (
  <>
    <h3 className={cx("text-center", styles.heroModalTitle)}>Mám zájem</h3>
    <OrderConsultationForm className={styles.heroFormWrapper} />
  </>
)

const ModalFormSpecialOffer = () => (
  <>
    <OrderSpecialOfferForm className={styles.heroFormWrapper} />
  </>
)

export const Hero = () => {
  const { show, RenderModal } = useModal()
  const { RenderModal: RenderModalOffer } = useModalSpecial(true)
  const scroll = useSmoothScroll()

  const onLinkClick = selector => () => {
    scroll.animateScroll(document.getElementById(selector))
  }

  return (
    <section className={styles.hero}> 
      <Container className={styles.container}>
        <h1 className={styles.title}>
          Výživový poradce <br /> a šéfkuchař v jednom
        </h1>
        <div className="visible-desktop">
          <div className={styles.img}>
            <HeroDesktopImg />
          </div>
        </div>
        <div className="visible-mobile">
          <div className={styles.img}>
            <HeroMobileImg />
          </div>
        </div>
        <div className={styles.buttons}>
          <Button type="primary" className={styles.button} handleClick={show}>
            Mám zájem
          </Button>
          <Button
            type="unstyled"
            className={styles.link}
            handleClick={onLinkClick("calculator")}
          >
            Spočítat cenu
          </Button>
          <RenderModal className="modalForm">
            <ModalForm />
          </RenderModal>

          {typeof document !== `undefined` && (
            <RenderModalOffer className="modalForm">
              <ModalFormSpecialOffer />
            </RenderModalOffer>
          )}
        </div>
      </Container>
    </section>
  )
}
