import Auth from '../../views/auth/Auth.vue'
import Login from '../../views/auth/Login.vue'
import Register from '../../views/auth/Register.vue'

export default {
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
}
