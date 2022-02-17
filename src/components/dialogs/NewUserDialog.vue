<template>
  <v-dialog v-model="show" width="500" persistent>
    <v-card>
      <v-card-title>Gebruiker toevoegen</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field label="naam"></v-text-field>
          </v-col>
           <v-col cols="12" md="6">
            <v-text-field label="famillienaam"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field label="email"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-select :items="groups" item-text="text" item-value="value" label="Groep"></v-select>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="show = false">
          Anulleer
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang='ts'>
import { Component, VModel, Vue } from "vue-property-decorator";

@Component
export default class NewUserDialog extends Vue {
  @VModel({ required: true }) show!: boolean;

   groups = [
    { text: "Coaches", value: "COACH" },
    { text: "Deelnemers", value: "PARTICIPANT" },
    { text: "Bedrijfscontacten", value: "COMPANY_CONTACT" },
    { text: "Interim managers", value: "INTERIM_MANAGER" },
  ];
}
</script>