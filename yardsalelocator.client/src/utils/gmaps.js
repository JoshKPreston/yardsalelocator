// src/utils/gmaps.js

// Your personal API key.
// Get it here: https://console.cloud.google.com/google/maps-apis
// const API_KEY = 'AIzaSyBQJfGPc1OC7pA1ynFg9mHGmq0-H0mz3Qs' josh old

const API_KEY = 'AIzaSyA3d9hA6pbLww_QEaABa94ZqMpGs_Anmrc'

// const API_KEY = 'AIzaSyC5NSDtmNuQjpMs-ZvY6UFfO2HfrgWuUH8'

// const API_KEY = 'AIzaSyADaW8IlimQIb8UuXiaozTR8cza1poAeaE'
const CALLBACK_NAME = 'initMap'

// @ts-ignore
let initialized = !!window.google
let resolveInitPromise
let rejectInitPromise
// This promise handles the initialization
// status of the google maps script.
const initPromise = new Promise((resolve, reject) => {
  resolveInitPromise = resolve
  rejectInitPromise = reject
})

export default function init() {
  // If Google Maps already is initialized
  // the `initPromise` should get resolved
  // eventually.
  if (initialized) return initPromise

  initialized = true
  // The callback function is called by
  // the Google Maps script if it is
  // successfully loaded.
  // @ts-ignore
  window[CALLBACK_NAME] = () => resolveInitPromise(window.google)

  // We inject a new script tag into
  // the `<head>` of our HTML to load
  // the Google Maps script.
  const script = document.createElement('script')
  script.async = true
  script.defer = true
  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}`
  script.onerror = rejectInitPromise
  document.querySelector('head').appendChild(script)

  return initPromise
}
