import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';

export const LangContext = createContext()

const lang = [
  { id: "en", text: "EN" },
  { id: "cz", text: "CZ" },
]

const reducer = (state, action) => {
  switch (action.type) {
    case "SWITCH":
      const langActive = state.lang.find(item => item.id === action.payload.id)
      localStorage.setItem("langActive", JSON.stringify(langActive))
      return {
        ...state,
        active: langActive,
      }
    default:
      throw new Error()
  }
}

export function LangProvider({ children }) {
  const langActive =
    (window !== "undefined" &&
      JSON.parse(localStorage.getItem("langActive"))) ||
    `{ id: "en", text: "EN" }`

  const initialState = {
    lang: lang,
    active: langActive,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const provider = {
    state,
    dispatch,
  }

  return (
    <LangContext.Provider value={provider}>{children}</LangContext.Provider>
  )
}
