<template>
  <v-row>
    <v-col cols="12">
      <v-btn @click="open()">Open</v-btn>
      <v-btn @click="close()">Close</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { Alert } from '@/shared/common/modules/alert/index'

export default {
  mounted () {
    //
  },
  data () {
    return {
      //
    };
  },
  methods:  {
    open () {
      Alert.open({
        type: 'info',
        text: 'Connection internet success!',
      });
    },
    close () {
      Alert.close();
    }
  },
};
</script>
