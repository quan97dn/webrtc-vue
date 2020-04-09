<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
    <app-snackbar></app-snackbar>
    <app-alert></app-alert>
    <app-dialog></app-dialog>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Snackbar from './components/partial/Snackbar';
import Alert from './components/partial/Alert';
import Dialog from './components/partial/Dialog';

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
    'app-dialog': Dialog,
  }
});
</script>

<style lang="scss">

</style>
