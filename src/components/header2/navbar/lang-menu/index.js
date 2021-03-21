import cx from 'classnames';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import { LangContext, useLangContext } from '../../../../utils/lang';
import styles from './lang-menu.module.css';

const LanguageMenu = props => {
  const { t, i18n } = useTranslation()
  const [activeLang, setaActiveLang] = useState("cz")

  const handleActiveLang = value => setaActiveLang(value)

  return (
    <Select
      options={[
        {
          value: "cz",
          label: "cz",
        },
        {
          value: "en",
          label: "en",
        },
      ]}
      isSearchable={false}
      value={{
        value: "cz",
        label: "cz",
      }}
      onChange={e => handleActiveLang(e.value)}
    />
  )
}

export default LanguageMenu

export const LanguagePicker = ({ isLight = false }) => {
  const { lang, originalPath } = useLangContext()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            supportedLanguages
          }
        }
      }
    `
  )

  return (
    <div className={styles.langMenu}>
      {site.siteMetadata.supportedLanguages.map(supportedLang => (
        <a
          aria-label={`Change language to ${supportedLang}`}
          href={
            supportedLang === "cz"
              ? `${originalPath}`
              : `/${supportedLang}${originalPath}`
          }
          key={supportedLang}
          className={cx(styles.langMenuItem, {
            [styles.active]: lang === supportedLang,
            [styles.isLight]: isLight,
          })}
        >
          {supportedLang === "cz" ? (
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4872 27C20.936 27 26.9744 20.9558 26.9744 13.5C26.9744 6.04416 20.936 0 13.4872 0C6.03843 0 0 6.04416 0 13.5C0 20.9558 6.03843 27 13.4872 27Z"
                fill="#F0F0F0"
              />
              <path
                d="M12.3153 13.5C12.3153 13.5 3.95907 23.0478 3.95117 23.0459C6.39183 25.4889 9.76369 27 13.4881 27C20.9369 27 26.9753 20.9558 26.9753 13.5H12.3153Z"
                fill="#D80027"
              />
              <path
                d="M3.95031 3.9541C-1.31677 9.22617 -1.31677 17.7739 3.95031 23.0461C6.12686 20.8674 8.22017 18.7721 13.4872 13.5001L3.95031 3.9541Z"
                fill="#0052B4"
              />
            </svg>
          ) : (
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4618 27C21.9106 27 27.9491 20.9558 27.9491 13.5C27.9491 6.04416 21.9106 0 14.4618 0C7.01304 0 0.974609 6.04416 0.974609 13.5C0.974609 20.9558 7.01304 27 14.4618 27Z"
                fill="white"
              />
              <path
                d="M3.76289 5.28125C2.70346 6.66094 1.9046 8.25114 1.43945 9.97867H8.45586L3.76289 5.28125Z"
                fill="#2C3E50"
              />
              <path
                d="M27.4851 9.97862C27.0199 8.25115 26.221 6.66094 25.1616 5.28125L20.4688 9.97862H27.4851Z"
                fill="#2C3E50"
              />
              <path
                d="M1.43945 17.022C1.90466 18.7494 2.70351 20.3397 3.76289 21.7193L8.45571 17.022H1.43945Z"
                fill="#2C3E50"
              />
              <path
                d="M22.6734 2.79102C21.295 1.73059 19.7064 0.930977 17.9805 0.465332V7.48834L22.6734 2.79102Z"
                fill="#2C3E50"
              />
              <path
                d="M6.25 24.2095C7.62838 25.2699 9.21708 26.0695 10.9429 26.5352V19.5122L6.25 24.2095Z"
                fill="#2C3E50"
              />
              <path
                d="M10.9429 0.465332C9.21703 0.930977 7.62833 1.73059 6.25 2.79097L10.9429 7.48829V0.465332Z"
                fill="#2C3E50"
              />
              <path
                d="M17.9805 26.5352C19.7063 26.0695 21.295 25.2699 22.6733 24.2095L17.9805 19.5122V26.5352Z"
                fill="#2C3E50"
              />
              <path
                d="M20.4688 17.022L25.1616 21.7193C26.221 20.3397 27.0199 18.7494 27.4851 17.022H20.4688Z"
                fill="#2C3E50"
              />
              <path
                d="M27.8349 11.7391H16.2211H16.2211V0.114275C15.6452 0.0392344 15.0581 0 14.4618 0C13.8655 0 13.2785 0.0392344 12.7026 0.114275V11.739V11.7391H1.08878C1.01381 12.3155 0.974609 12.9032 0.974609 13.5C0.974609 14.0969 1.01381 14.6845 1.08878 15.2609H12.7025H12.7026V26.8857C13.2785 26.9608 13.8655 27 14.4618 27C15.0581 27 15.6452 26.9608 16.221 26.8857V15.261V15.2609H27.8349C27.9099 14.6845 27.9491 14.0969 27.9491 13.5C27.9491 12.9032 27.9099 12.3155 27.8349 11.7391Z"
                fill="#2C3E50"
              />
              <path
                d="M17.9805 17.0218L23.9989 23.0459C24.2757 22.769 24.5398 22.4794 24.7917 22.1793L19.6391 17.0217H17.9805V17.0218Z"
                fill="#2C3E50"
              />
              <path
                d="M10.9443 17.022H10.9442L4.92578 23.0461C5.20248 23.3232 5.49177 23.5875 5.79165 23.8396L10.9443 18.682V17.022Z"
                fill="#2C3E50"
              />
              <path
                d="M10.9421 9.97843V9.97832L4.92366 3.9541C4.64685 4.23106 4.3828 4.52063 4.13086 4.82079L9.28356 9.97838H10.9421V9.97843Z"
                fill="#2C3E50"
              />
              <path
                d="M17.9805 9.97841L23.999 3.95414C23.7223 3.67707 23.433 3.41277 23.1331 3.16064L17.9805 8.31822V9.97841Z"
                fill="#2C3E50"
              />
            </svg>
          )}
        </a>
      ))}
    </div>
  )
}
