import store from '@/store'
export default (to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    store.getters['auth/LOGGED_IN'] ? next() : next('/')
  } else {
    next()
  }
}
