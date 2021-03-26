import { createContext, useContext } from 'react';

export const initialState = {
  activeTab: "calc", // "order"
}

export const HomepageTabsContext = createContext(null)

export const HomepageTabsProvider = HomepageTabsContext.Provider

export const homepageTabsReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_TAB1":
      return { activeTab: "calc" }
    case "OPEN_TAB2":
      return { activeTab: "order" }
    default:
      return state
  }
}

export function useHomepageTabsContext() {
  const context = useContext(HomepageTabsContext)
  return context
}
