<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-tabs
          background-color="deep-purple accent-4"
          center-active
          dark
          v-model="tab"
        >
          <v-tab v-for="group in groups" :key="group.value">{{
            group.text
          }}</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-data-table
            :loading="loading.users"
            :headers="headers"
            :items="users"
          >
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-tooltip left v-if="isAdmin">
      <template v-slot:activator="{ on, attrs }">
        <v-btn fab bottom right fixed v-bind="attrs" v-on="on" @click="dialogs.newUser = true">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>Nieuwe gebruiker</span>
    </v-tooltip>
    <NewUserDialog :value="dialogs.newUser" @input="dialogs.newUser = false" />
  </v-container>
</template>

<script lang='ts'>
import { ROOT_ACTIONS } from "@/store/actions";
import { User } from "@/store/user/types";
import supabase from "@/supabase";
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {
    NewUserDialog: () => import('@/components/dialogs/NewUserDialog.vue')
  }
})
export default class Index extends Vue {
  tab = 0;
  
  get isAdmin(): boolean{
    return this.$store.state.user.profile.group === 'ADMIN'
  }

  users: User[] = [];

  loading = {
    users: false,
  };

  dialogs = {
    newUser: false,
  }

  headers = [
    { text: "Naam", value: "first_name" },
    { text: "Famillienaam", value: "last_name" },
    { text: "email", value: "email" },
  ];

  groups = [
    { text: "Coaches", value: "COACH" },
    { text: "Deelnemers", value: "PARTICIPANT" },
    { text: "Bedrijfscontacten", value: "COMPANY_CONTACT" },
    { text: "Interim managers", value: "INTERIM_MANAGER" },
  ];


  @Watch("tab", { immediate: true })
  async getUsersFromGroup() {
    this.loading.users = true;
    const groupName = this.groups[this.tab].value;
    const { data, error } = await supabase
      .from("Profiles")
      .select()
      .eq("group", groupName);

    if (error) {
      this.$store.dispatch(ROOT_ACTIONS.TOGGLE_NOTIFICATION, {
        color: "error",
        text: error,
      });
    }

    this.users = data as User[];

    this.loading.users = false;
  }
}
</script>