<template>
  <v-app>
    <!-- <AppBar /> -->
    <v-main v-if="!appLoading">
      <Navigation />
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <v-snackbar :color="snackbar.color" v-model="snackbar.trigger">
      {{ snackbar.text }}
    </v-snackbar>
  </v-app>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { ROOT_MUTATIONS } from "./store/mutations";
import { Snackbar } from "./store/types";
import { USER_ACTIONS } from "./store/user/actions";
import supabase from "./supabase";

@Component({
  components: {
    AppBar: () => import("@/components/layout/AppBar.vue"),
    Navigation: () => import("@/components/layout/Navigation.vue"),
  },
})
export default class App extends Vue {
  get snackbar(): Snackbar {
    return this.$store.state.snackbar;
  }
  set snackbar(value: Snackbar) {
    this.$store.commit(ROOT_MUTATIONS.TOGGLE_SNACKBAR, value);
  }

  appLoading = true;

  async created(){
    await this.$store.dispatch(USER_ACTIONS.AUTHENTICATE_USER);
    this.appLoading = false;
  }
}
</script>
