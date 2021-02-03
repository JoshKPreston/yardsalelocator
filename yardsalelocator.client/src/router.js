import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'
import { ClearAppState } from './AppState'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage'),
    beforeEnter: ClearAppState
  },
  {
    path: '/results',
    name: 'Results',
    component: loadPage('ResultsPage'),
    beforeEnter: ClearAppState
  },
  {
    path: '/listing/:listingId',
    name: 'Listing',
    component: loadPage('ListingPage'),
    beforeEnter: ClearAppState
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage'),
    beforeEnter: ClearAppState
  },
  {
    path: '/profile',
    name: 'Profile',
    component: loadPage('ProfilePage'),
    beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
