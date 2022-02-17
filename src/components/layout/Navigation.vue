<template>
  <v-navigation-drawer clipped app permanent v-show="authenticated" color="#f6f6f6">
    <div class="px-10 mt-5">
          <v-img src="/img/logo-itinera.png"></v-img>
    </div>

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
    <v-bottom-navigation absolute v-if="authenticated">
      <v-btn block @click="dialogs.signOut = true">
        <span>logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <ConfirmationDialog
      :value="dialogs.signOut"
      question="Afmelden?"
      @confirm="signOut"
      confirmBtnText="Afmelden"
      cancelBtnText="Blijven"
      @input="dialogs.signOut = false"
      :loading="loading.signOut"
    />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { ROOT_ACTIONS } from "@/store/actions";
import { ROOT_MUTATIONS } from "@/store/mutations";
import { USER_ACTIONS } from "@/store/user/actions";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    ConfirmationDialog: () =>
      import("@/components/dialogs/ConfirmationDialog.vue"),
  },
})
export default class Navigation extends Vue {
  get sidebar(): boolean {
    return this.$store.state.navigation;
  }

  set sidebar(value: boolean) {
    this.$store.commit(ROOT_MUTATIONS.SET_NAVIGATION, value);
  }

  get authenticated(): boolean {
    return this.$store.state.user.authenticated;
  }

  dialogs = {
    signOut: false,
  };

  loading = {
    signOut: false,
  };

  items = [
    {
      icon: "mdi-home",
      to: "/",
      text: "Home",
    },
    {
      icon: 'mdi-account-group',
      to: '/users',
      text: 'Gebruikers'
    },
    {
      icon: 'mdi-account-multiple-check',
      to: '/presence',
      text: 'Presence'
    },
    {
      icon: 'mdi-account-arrow-right',
      to: '/interim',
      text: 'Interim'
    }
  ];

  async signOut() {
    try {
      this.loading.signOut = true;
      await this.$store.dispatch(USER_ACTIONS.SIGNOUT);
      this.$router.push("/login");
    } catch (error) {
      this.$store.dispatch(ROOT_ACTIONS.TOGGLE_NOTIFICATION, {
        color: "error",
        text: error,
      });
    } finally {
      this.loading.signOut = false;
      this.dialogs.signOut = false;
    }
  }
}
</script>

<style>
</style>