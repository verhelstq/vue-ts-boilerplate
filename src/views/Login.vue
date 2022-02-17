<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <div class="px-15 pb-10">
          <v-img src="/img/logo-Itinera.png"></v-img>
        </div>

        <v-card class="elevation-12">
          <v-toolbar dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                v-model="inputs.email"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="inputs.password"
                @keyup.enter="login"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <!-- <v-btn text @click="resetPassword" :loading="resetting">{{ $t('pages.login.forgotPassword') }}</v-btn> -->
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :loading="loading.submit"
              @click.stop="login"
              class="px-10"
              role="login"
              >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang='ts'>
import { ROOT_ACTIONS } from "@/store/actions";
import { USER_ACTIONS } from "@/store/user/actions";
import supabase from "@/supabase";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  inputs = {
    email: "",
    password: "",
  };

  loading = {
    submit: false,
  };

  async login() {
    this.loading.submit = true;
    const { user, error } = await supabase.auth.signIn({
      email: this.inputs.email,
      password: this.inputs.password,
    });

    if (user) {
      await this.$store.dispatch(USER_ACTIONS.AUTHENTICATE_USER);
      this.$router.push("/");
    }

    if (error) {
      this.$store.dispatch(ROOT_ACTIONS.TOGGLE_NOTIFICATION, {
        color: "error",
        text: error,
      });
    }
    this.loading.submit = false;
  }
}
</script>