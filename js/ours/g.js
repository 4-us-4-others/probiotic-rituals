function loadGoogleAnalytics() {
  const ga = document.createElement('script')
  ga.type = 'text/javascript'
  ga.async = true
  ga.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR-TRACKING-CODE'

  const s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(ga, s)
}

loadGoogleAnalytics()

window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag('js', new Date())

gtag('config', 'YOUR-GA-TRACKING-CODE')
