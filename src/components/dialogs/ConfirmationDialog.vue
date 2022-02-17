<template>
  <div class="text-center">
    <v-dialog v-model="show" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ question }}
        </v-card-title>

        <v-card-text v-if="text !== ''">
          {{ text }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text :disabled="loading" @click="show = false">{{ cancelBtnText }}</v-btn>
          <v-btn color="primary" :loading="loading" text @click="$emit('confirm')">
            {{ confirmBtnText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, VModel } from 'vue-property-decorator';
@Component
export default class ConfirmationDialog extends Vue{
  @VModel({ required: true }) show!: boolean;
  @Prop({ required: true }) question!: string;
  @Prop({ required: false, default: '' }) text!: string;
  @Prop({ required: false, default: 'Confirm' }) confirmBtnText!: string;
  @Prop({ required: false, default: 'Cancel' }) cancelBtnText!: string;
  @Prop({ required: false, default: false }) loading!: boolean;
}
</script>