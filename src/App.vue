<template>
  <v-app>
    <desktop-nav-bar></desktop-nav-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  import DesktopNavBar from "../src/components/DesktopNavBar.vue";

  export default {
    name: 'App',

    components: {
      DesktopNavBar
    }
};
</script>

<style>
  :root {
    --primaryFont: 'Lato', sans-serif;
    --primaryColor: #292929;
    --secondaryColor: #7F7F7F;
    --backgroundColour: #FFFEFE;
  }

  .v-main {
    background: var(--backgroundColour);
  }
</style>