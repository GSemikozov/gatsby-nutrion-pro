import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LangContext } from '../../../../utils/lang';

const LanguageMenu = props => {
  const { t, i18n } = useTranslation()
  const { state, dispatch } = useContext(LangContext)

  const handleLanguageChange = event => {
    const selectedLanguage = state.lang.find(
      lang => lang.id === event.target.value
    )
    i18n.changeLanguage(event.target.value)
    dispatch({
      type: "SWITCH",
      payload: selectedLanguage,
    })
  }

  console.log("state", state)

  return (
    <select
      {...props}
      value={state.active.id}
      onChange={handleLanguageChange}
      style={{ padding: "8px", outline: "none", cursor: "pointer" }}
    >
      {state.lang.map(item => (
        <option key={item.id} value={item.id}>
          {item.text}
        </option>
      ))}
    </select>
  )
}

export default LanguageMenu
