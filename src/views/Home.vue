<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Dag {{ user.first_name }}.</h1>
      </v-col>
    </v-row>
    <v-row class="mb-7">
      <v-col cols="3">
        <v-card class="pa-4" color="#f6f6f6">
          <b>{{ users.filter((e) => e.group === "COACH").length }}</b>
          Coaches
        </v-card>
      </v-col>
       <v-col cols="3">
        <v-card class="pa-4" color="#f6f6f6">
          <b>0</b>
          OUT deelnemers
        </v-card>
      </v-col>
       <v-col cols="3">
        <v-card class="pa-4" color="#f6f6f6">
          <b>0</b>
          Interim bedrijven
        </v-card>
      </v-col>
       <v-col cols="3">
        <v-card class="pa-4" color="#f6f6f6">
          <b>{{ users.filter((e) => e.group === "INTERIM_MANAGER").length }}</b>
          Interim managers
        </v-card>
      </v-col>
    </v-row>
    <h3 class="mb-5">Snel naar</h3>
    <v-row>
      <v-col cols="4">
        <v-btn height="150" block to="/presence">
          > Presence beheer
        </v-btn>
      </v-col>
       <v-col cols="4">
        <v-btn height="150" block to="/interim">
          > Interim beheer
        </v-btn>
      </v-col>
       <v-col cols="4">
        <v-btn height="150" block to="/users">
          > Gebruikers beheer
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { ROOT_ACTIONS } from "@/store/actions";
import { User } from "@/store/user/types";
import supabase from "@/supabase";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  get user(): User {
    return this.$store.state.user.profile;
  }

  users: User[] = [];

  loading = {
    profiles: true,
  };

  mounted() {
    this.getProfiles();
  }

  async getProfiles() {
    const { data, error } = await supabase.from("Profiles");

    if (error) {
      this.$store.dispatch(ROOT_ACTIONS.TOGGLE_NOTIFICATION, {
        color: "error",
        text: error,
      });
    }

    this.users = data as User[];
  }
}
</script>
