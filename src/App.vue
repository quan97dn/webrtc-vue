<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
    <app-snackbar></app-snackbar>
    <app-alert></app-alert>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Snackbar from './components/partial/Snackbar';
import Alert from './components/partial/Alert';

export default Vue.extend({
  name: 'App',
  created () {
    this.$vuetify.theme.dark = true
  },
  data () {
    return {
      //
    };
  },
  components: {
    'app-snackbar': Snackbar,
    'app-alert': Alert,
  }
});
</script>

<style lang="scss">

</style>
