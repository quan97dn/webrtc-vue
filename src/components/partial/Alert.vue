<template>
  <div class="app-alert">
    <v-alert class="position-alert" :type="getIsAlert.type" v-model="getIsAlert.isShow">
      {{ getIsAlert.text }}
    </v-alert>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      //
    };
  },
  computed: {
    ...mapGetters('Alert', ['getIsAlert'])
  },
  methods: {
    changeAlert () {
      this.$store.commit('Alert/setIsAlert', { isShow: false });
    }
  }
}
</script>
