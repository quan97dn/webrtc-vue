import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

// Route Authentication
import Auth from '../views/auth/Auth.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

// Route Admin
import Admin from '../views/admin/Admin.vue'
import Dashboard from '../views/admin/Dashboard.vue'

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
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
      },
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      }
    ]
  }
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
