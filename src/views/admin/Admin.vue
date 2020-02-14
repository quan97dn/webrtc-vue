<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>group</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Users</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Web RTC</v-toolbar-title>
        <v-spacer />
        <v-btn @click="signOut()" text icon color="white">
          <v-icon>launch</v-icon>
        </v-btn>
      </v-app-bar>

      <v-content>
        <v-container class="fill-height" fluid>
          <router-view />
        </v-container>
      </v-content>

      <v-footer app>
        <span>&copy; 2020</span>
      </v-footer>

      <v-snackbar v-model="snackbar">
        SignOut Fail! <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-app>
  </div>
</template>

<script>
import Auth from '../../shared/core/auth/authentication';

export default {
  data() {
    return {
      snackbar: false,
      drawer: null,
    };
  },
  methods: {
    signOut () {
      Auth.signOut(() => {
        this.$router.replace({ name: 'Login' });
      }, () => {
        this.snackbar = true;
      });
    }
  }
};
</script>
