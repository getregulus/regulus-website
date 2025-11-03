export const trackEvent = ({ event, category, action, label }) => {
  if (typeof window === "undefined" || !window.dataLayer) return

  window.dataLayer.push({
    event,
    category,
    action,
    label,
    page_location: window.location.href,
    page_title: document.title,
    hostname: window.location.hostname,
  })
}
