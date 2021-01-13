import scrollToElement from 'scroll-to-element';

export function scroller(target, offset) {
  scrollToElement(target, {
    offset,
  })
}

export function handleMenuLinkClick(link, lang) {
  console.log("handleMenuLinkClick", link, lang)
  if (typeof window !== "undefined" && link.link.includes("#")) {
    const [anchorPath, anchor] = link.link.split("#")
    console.log("compare", window.location.pathname, anchorPath)
    if (
      window.location.pathname === `${anchorPath}` ||
      (lang === "en" && window.location.pathname === `${anchorPath}${lang}/`)
    ) {
      // e && e.preventDefault()
      scroller(`#${anchor}`, 0)
    }
  }
}

export function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}
