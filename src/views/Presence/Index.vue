<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-tabs background-color="deep-purple accent-4" center-active dark>
          <v-tab>Programmas</v-tab>
          <v-tab>Templates</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-sheet color="#c4c4c4" width="100%" height="50px"></v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Index extends Vue {}
</script>