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

export function getUTM() {
  const UTM_from_local_storage = JSON.parse(localStorage.getItem("UTM"))
  let UTM_SOURCE = ""
  let UTM_MEDIUM = ""
  let UTM_CAMPAIGN = ""
  let UTM_TERM = ""
  let UTM_CONTENT = ""
  if (UTM_from_local_storage !== null) {
    UTM_SOURCE = UTM_from_local_storage.source
    UTM_MEDIUM = UTM_from_local_storage.medium
    UTM_CAMPAIGN = UTM_from_local_storage.campaign
    UTM_TERM = UTM_from_local_storage.term
    UTM_CONTENT = UTM_from_local_storage.content
  } else {
    let urlString = document.location.href
    let url = new URL(urlString)
    UTM_SOURCE = url.searchParams.get("utm_source")
    UTM_MEDIUM = url.searchParams.get("utm_medium")
    UTM_CAMPAIGN = url.searchParams.get("utm_campaign")
    UTM_TERM = url.searchParams.get("utm_term")
    UTM_CONTENT = url.searchParams.get("utm_content")
  }
  return {
    UTM_SOURCE,
    UTM_MEDIUM,
    UTM_CAMPAIGN,
    UTM_TERM,
    UTM_CONTENT,
  }
}

export function getReferrer() {
  const referrer_from_local_storage = JSON.parse(
    localStorage.getItem("referrer")
  )

  if (referrer_from_local_storage !== null) {
    return referrer_from_local_storage
  } else if (document.referrer !== "") {
    return new URL(document.referrer).hostname
  } else {
    return ""
  }
}
