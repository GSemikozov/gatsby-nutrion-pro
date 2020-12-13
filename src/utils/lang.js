import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const LangContext = createContext({})

// const lang = [
//   { id: "en", text: "EN" },
//   { id: "cz", text: "CZ" },
// ]

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SWITCH":
//       const langActive = state.lang.find(item => item.id === action.payload.id)
//       localStorage.setItem("langActive", JSON.stringify(langActive))
//       return {
//         ...state,
//         active: langActive,
//       }
//     default:
//       throw new Error()
//   }
// }

// export function LangProvider({ children }) {
//   const langActive =
//     (typeof window !== `undefined` &&
//       JSON.parse(localStorage.getItem("langActive"))) ||
//     `{ id: "cz", text: "CZ" }`

//   const initialState = {
//     lang: lang,
//     active: { id: "cz", text: "CZ" }, // TODO: use langActive
//   }

//   const [state, dispatch] = useReducer(reducer, initialState)

//   const provider = {
//     state,
//     dispatch,
//   }

//   return (
//     <LangContext.Provider value={provider}>{children}</LangContext.Provider>
//   )
// }

export const LangProvider = ({ children }) => {
  const { i18n } = useTranslation()
  const { pageContext } = children.props
  i18n.changeLanguage(pageContext.lang)

  return (
    <LangContext.Provider value={pageContext}>{children}</LangContext.Provider>
  )
}

export const useLangContext = () => useContext(LangContext)
