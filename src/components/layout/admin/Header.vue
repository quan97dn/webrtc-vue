<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click.stop="changeDrawer()" />
    <v-toolbar-title>Web RTC</v-toolbar-title>
    <v-spacer />
    <v-btn @click="signOut()" text icon color="white">
      <v-icon>launch</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
// Auth
import Auth from '../../../shared/core/auth/authentication';

export default {
  data () {
    return {
      drawer: true,
    }
  },
  methods: {
    signOut () {
      Auth.signOut(() => {
        this.$store.commit('Auth/setLogined', false);
        this.$router.replace({ name: 'Login' });
      }, () => {
        //
      });
    },
    changeDrawer () {
      this.drawer = !this.drawer;
      this.$emit('drawer', this.drawer);
    }
  }
}
</script>
