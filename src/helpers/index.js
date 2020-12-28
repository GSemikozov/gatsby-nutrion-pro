import scrollToElement from 'scroll-to-element';

export function scroller(target, offset) {
  scrollToElement(target, {
    offset,
  })
}

export function handleMenuLinkClick(link) {
  console.log("handleMenuLinkClick", link)
  if (typeof window !== "undefined" && link.link.includes("#")) {
    const [anchorPath, anchor] = link.link.split("#")
    if (window.location.pathname === `${anchorPath}`) {
      // e && e.preventDefault()
      scroller(`#${anchor}`, 0)
    }
  }
}
