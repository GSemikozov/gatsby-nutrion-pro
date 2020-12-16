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

export const LanguagePicker = () => {
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
          })}
        >
          {supportedLang.toUpperCase()}
        </a>
      ))}
    </div>
  )
}
