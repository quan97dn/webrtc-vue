<template>
  <div>
    <v-app id="inspire">
      <app-navbar :drawer="drawer"></app-navbar>

      <app-header @drawer="changeDrawer($event)"></app-header>

      <v-content>
        <v-container class="fill-height" fluid>
          <router-view />
        </v-container>
      </v-content>

      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>


// Component
import Header from '../../components/layout/admin/Header';
import Navbar from '../../components/layout/admin/Navbar';
import Footer from '../../components/layout/admin/Footer';

export default {
  data () {
    return {
      drawer: true,
    };
  },
  methods: {
    changeDrawer (drawer) {
      this.drawer = drawer;
    },
  },
  components: {
    'app-header': Header,
    'app-navbar': Navbar,
    'app-footer': Footer,
  }
};
</script>
