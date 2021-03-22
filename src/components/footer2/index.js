import cx from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { handleMenuLinkClick } from '../../helpers';
import { useLangContext } from '../../utils/lang';
import { Button } from '../button';
import { Container } from '../container';
import { Logo } from '../header/logo';
import { LocalizedLink } from '../localized-link';
import styles from './footer.module.css';
import fb from './icons/facebook.svg';
import logo from './icons/footer-logo.svg';
import user from './icons/icon-user.svg';
import instagram from './icons/instagram.svg';
import twitter from './icons/twitter.svg';

export const Footer2 = () => {
  const { t } = useTranslation()
  const { lang } = useLangContext()
  return (
    <footer className={styles.footer}>
      <Container isWide={true}>
        <div className={styles.footerCols}>
          <div className={styles.footerCol}>
            <LocalizedLink to="/">
              <img src={logo} alt="logo" />
            </LocalizedLink>
            <div className={cx(styles.socials, styles.hideXS)}>
              <a
                href="https://www.facebook.com/nutritionprocz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fb} alt="icon" />
              </a>
              <a
                href="https://www.instagram.com/nutritionprocz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="icon" />
              </a>
              <a
                href="https://vk.com/nutritionprocz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="icon" />
              </a>
            </div>
            <div className={cx(styles.footerMenu, styles.visibleXS)}>
              <Button
                type="unstyled"
                handleClick={() =>
                  handleMenuLinkClick({ link: "/#programs" }, lang)
                }
              >
                {t("menu.Programy")}
              </Button>
              <Button
                type="unstyled"
                handleClick={() =>
                  handleMenuLinkClick({ link: "/#food" }, lang)
                }
              >
                {t("menu.Jídelníček")}
              </Button>
              <Button
                type="unstyled"
                handleClick={() =>
                  handleMenuLinkClick({ link: "/#calculator" }, lang)
                }
              >
                {t("menu.Cena")}
              </Button>
              {lang !== "en" && (
                <LocalizedLink to="/jobs">{t("menu.Kariéra")}</LocalizedLink>
              )}
            </div>
          </div>
          <div className={cx(styles.footerCol, styles.hideXS)}>
            <div className={cx(styles.footerMenu, styles.hideXS)}>
              <Button
                type="unstyled"
                handleClick={() =>
                  handleMenuLinkClick({ link: "/#programs" }, lang)
                }
              >
                {t("menu.Programy")}
              </Button>
              <Button
                type="unstyled"
                handleClick={() =>
                  handleMenuLinkClick({ link: "/#food" }, lang)
                }
              >
                {t("menu.Jídelníček")}
              </Button>
              <Button
                type="unstyled"
                handleClick={() =>
                  handleMenuLinkClick({ link: "/#calculator" }, lang)
                }
              >
                {t("menu.Cena")}
              </Button>
              {lang !== "en" && (
                <LocalizedLink to="/jobs">{t("menu.Kariéra")}</LocalizedLink>
              )}
            </div>
            <p>
              <LocalizedLink
                to="/terms"
                target="_blank"
                rel="noopener norefferer"
              >
                {t("general.footer.terms1")}
              </LocalizedLink>{" "}
              <span className={styles.hideXS}>
                {t("general.footer.terms2")}
              </span>
            </p>
            <p>
              <span>© 2020 NUTRITIONPRO</span>
            </p>
          </div>
          <div className={cx(styles.footerCol, styles.contacts)}>
            <p>+420 774 137 352</p>
            <p>
              <span style={{ color: "#3DC383" }}>{t("menu.days")}</span> 10:00 -
              12:00
            </p>
            <p>13:00 - 18:00</p>
          </div>
        </div>
        <div className={cx(styles.mobileCol, styles.visibleXS)}>
          <div className={cx(styles.socials)}>
            <a
              href="https://www.instagram.com/nutritionprocz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="icon" />
            </a>
            <a
              href="https://www.facebook.com/nutritionprocz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt="icon" />
            </a>
            <a
              href="https://vk.com/nutritionprocz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="icon" />
            </a>
          </div>
          <p className="text-center">
            <LocalizedLink
              to="/terms"
              target="_blank"
              rel="noopener norefferer"
            >
              {t("general.footer.terms1")}
            </LocalizedLink>{" "}
            <span>{t("general.footer.terms2")}</span>
          </p>
          <p className="text-center">
            <span>© 2020 NUTRITIONPRO</span>
          </p>
        </div>
      </Container>
    </footer>
  )
}
