<template>
  <v-navigation-drawer clipped app v-model="sidebar">
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.to" :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { ROOT_MUTATIONS } from '@/store/mutations';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {

  get sidebar(): boolean {
    return this.$store.state.navigation;
  }

  set sidebar(value: boolean) {
    this.$store.commit(ROOT_MUTATIONS.SET_NAVIGATION, value);
  }

  items = [
    {
      icon: 'mdi-home',
      to: '/',
      text: 'Home'
    },
    {
      icon: 'mdi-help',
      to: '/about',
      text: 'About'
    }
  ]
}
</script>

<style>

</style>