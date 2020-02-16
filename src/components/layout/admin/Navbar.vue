<template>
  <v-navigation-drawer v-model="isDrawer" app clipped>
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
</template>

<script>
export default {
  props: ['drawer'],
  data: function () {
    return {
      isDrawer: true,
    }
  },
  watch: {
    drawer () {
      this.isDrawer = this.drawer;
    }
  }
}
</script>
