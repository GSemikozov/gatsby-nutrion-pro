import scrollToElement from 'scroll-to-element';

export function scroller(target, offset) {
  scrollToElement(target, {
    offset,
  })
}

export function handleMenuLinkClick(link, e, lang) {
  if (typeof window !== "undefined" && link.link.includes("#")) {
    const [anchorPath, anchor] = link.link.split("#")
    if (window.location.pathname === `${anchorPath}${lang}/`) {
      e && e.preventDefault()
      scroller(`#${anchor}`, 0)
    }
  }
}
