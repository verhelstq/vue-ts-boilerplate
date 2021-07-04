<template>
  <h1>Home</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  async mounted(): Promise<void>{
    const response = await this.$http.get('https://jsonplaceholder.typicode.com/todos')
    console.log(response.data);
  }
}
</script>
