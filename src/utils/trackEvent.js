export const trackEvent = (eventData) => {
  if (typeof window === "undefined") return

  // Push to GTM dataLayer (normal case)
  window.dataLayer?.push(eventData)

  // SendBeacon fallback for external navigations
  if (navigator.sendBeacon && process.env.GATSBY_GTM_ID) {
    const blob = new Blob([JSON.stringify(eventData)], {
      type: "application/json",
    })

    navigator.sendBeacon(
      `https://www.googletagmanager.com/gtm.js?id=${process.env.GATSBY_GTM_ID}`,
      blob
    )
  }
}
