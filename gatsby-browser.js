/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export { wrapPageElement, wrapRootElement } from "./gatsby-ssr"

const scrollToElement = require("scroll-to-element")

// temporary hide it
export function onRouteUpdate({ location }) {
  checkHash(location)
}

const checkHash = location => {
  let { hash } = location
  if (hash) {
    scrollToElement(hash, {
      offset: -95,
      duration: 1000,
    })
  }
}
