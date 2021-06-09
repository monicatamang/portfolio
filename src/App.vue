<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App'
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Lora:wght@400;700&display=swap');

  :root{
    --titleFont: 'Lato', sans-serif;
    --bodyFont: 'Lora', serif;
  }
</style>