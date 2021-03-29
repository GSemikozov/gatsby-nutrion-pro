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
import user from './icons/icon-user.svg';
import instagram from './icons/instagram.svg';
import vk from './icons/vk.svg';

export const Footer = () => {
  const { t } = useTranslation()
  const { lang } = useLangContext()
  const isHomepage =
    typeof window !== "undefined" && window.location.pathname === "/"

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerCols}>
          <div className={styles.footerCol}>
            <LocalizedLink to="/">
              <Logo />
            </LocalizedLink>
            <div className={styles.socials}>
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
                <img src={vk} alt="icon" />
              </a>
            </div>
          </div>
          <div className={styles.footerCol}>
            <div className={cx(styles.footerMenu, styles.hideXS)}>
              {isHomepage && (
                <>
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
                </>
              )}
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
            <p>© 2020 NUTRITIONPRO</p>
          </div>
          <div className={styles.footerCol}>
            <p>+420 774 137 352</p>
            <p>
              {t("menu.days")} 10:00 - 12:00 <br /> 13:00 - 18:00
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
