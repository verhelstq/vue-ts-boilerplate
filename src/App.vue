<template>
  <v-app>
    <AppBar />
    <v-main>
      <Navigation />
      <v-container>
          <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    AppBar: () => import('@/components/layout/AppBar.vue'),
    Navigation: () => import('@/components/layout/Navigation.vue')
  }
});
</script>
