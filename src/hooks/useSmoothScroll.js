import { useEffect, useState } from 'react';

export const useSmoothScroll = () => {
  const [scroll, setScroll] = useState({ animateScroll: () => {} })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SmoothScroll = require("smooth-scroll")
      const s = new SmoothScroll()
      setScroll(s)
    }
  }, [])

  return scroll
}
