<template>
  <v-app-bar color="indigo" app  :clipped-left="$vuetify.breakpoint.lgAndUp" dark>
    <v-app-bar-nav-icon @click="sidebar = !sidebar"><v-icon>mdi-menu</v-icon></v-app-bar-nav-icon>
    <v-toolbar-title>App</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { ROOT_ACTIONS } from '@/store/actions';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppBar extends Vue {
  get sidebar(): boolean {
    return this.$store.state.navigation;
  }
  set sidebar(value: boolean) {
    this.$store.dispatch(ROOT_ACTIONS.TOGGLE_NAVIGATION, value)
  }
}
</script>

<style>

</style>