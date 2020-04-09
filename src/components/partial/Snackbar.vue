<template>
  <div>
    <v-snackbar v-model="getIsSnackbar.isShow">
      {{ getIsSnackbar.text }} <v-btn color="pink" text @click="changeSnackbar()">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('Snackbar', ['getIsSnackbar'])
  },
  methods: {
    changeSnackbar () {
      this.$store.commit('Snackbar/setIsSnackbar', { isShow: false });
    }
  }
}
</script>
