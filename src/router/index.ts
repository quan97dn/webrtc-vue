import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

// Route Authentication
import Auth from './auth/index';

// Route Admin
import Admin from './admin/index';

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: {
      name: 'Login',
    },
  },
  {
    path: '/',
    redirect: {
      name: 'Login',
    },
  },
  Auth,
  Admin
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next({ name: 'Login' });
  else if (!requiresAuth && currentUser) next({ name: 'Dashboard' });
  else next();
})

export default router
