import router from './router'
import store from '@/store'

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && to.name !== 'Register' && to.name !== 'RegisterSuccess' && !store.state.isLogin) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
