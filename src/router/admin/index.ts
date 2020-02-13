import Admin from '../../views/admin/Admin.vue'
import Dashboard from '../../views/admin/Dashboard.vue';

export default {
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
