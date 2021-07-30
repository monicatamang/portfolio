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
  :root {
    --font: 'Lato', sans-serif;
    --backgroundColour: #FFFEFE;
  }

  .v-main {
    background: var(--backgroundColour);
  }
</style>