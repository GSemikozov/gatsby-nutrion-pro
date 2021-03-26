import { createContext, useContext } from 'react';

export const HomepageTabsContext = createContext(null)

export const HomepageTabsProvider = HomepageTabsContext.Provider

export const homepageTabsReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_TAB1":
      return { activeTab: 1 }
    case "OPEN_TAB2":
      return { activeTab: 2 }
    default:
      throw new Error()
  }
}

export function useHomepageTabsContext() {
  const context = useContext(FormContext)
  return context
}
