import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import routeHandler from './route-handler'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(routeHandler)

export default router
