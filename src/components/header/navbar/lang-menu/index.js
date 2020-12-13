import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import { LangContext, useLangContext } from '../../../../utils/lang';

const LanguageMenu = props => {
  const { t, i18n } = useTranslation()

  return (
    <Select
      options={[
        {
          value: "5chodové menu",
          label: t("forms.mainFormMenuOption1"),
        },
        {
          value: "3chodové menu",
          label: t("forms.mainFormMenuOption2"),
        },
        {
          value: "2chodové menu",
          label: t("forms.mainFormMenuOption3"),
        },
      ]}
      isSearchable={false}
      value={{
        value: "cz",
        label: "cz",
      }}
      onChange={e => {}}
    />
  )
}

export default LanguageMenu

export const LanguagePicker = () => {
  const { originalPath } = useLangContext()
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
    <div className="language-selector-container">
      {site.siteMetadata.supportedLanguages.map(supportedLang => (
        <GatsbyLink
          aria-label={`Change language to ${supportedLang}`}
          to={`/${supportedLang}${originalPath}`}
          key={supportedLang}
        >
          {supportedLang.toUpperCase()}
        </GatsbyLink>
      ))}
    </div>
  )
}
