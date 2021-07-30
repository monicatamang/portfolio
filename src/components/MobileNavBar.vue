<template>
    <div id="navBar">
        <img src="../assets/logo.png" alt="" v-if="isHomePage === false">
        <div id="spacer"></div>
        <v-icon large color="black" v-if="toggleNavMenu === false" @click="toggleNavMenu = !toggleNavMenu">mdi-menu</v-icon>
        <v-icon large color="black" v-if="toggleNavMenu === true" @click="toggleNavMenu = !toggleNavMenu">mdi-close</v-icon>
        <nav id="navMenu" :class="{ showNavMenu: toggleNavMenu }">
            <router-link to="/">Home</router-link>
            <router-link to="/About">About</router-link>
            <router-link to="/Projects">Projects</router-link>
            <router-link to="/Skills">Skills</router-link>
            <router-link to="/Contact">Contact</router-link>
        </nav>
    </div>
</template>
<script>
    export default {
        name: "mobile-nav-bar",

        props: {
            isHomePage: Boolean
        },

        data() {
            return {
                toggleNavMenu: false
            }
        }
    }
</script>

<style scoped>
    #navBar {
        position: fixed;
        top: 0%;
        width: 100%;
        height: 8vh;
        z-index: 1;

        display: grid;
        place-items: center;
        grid-template-columns: 5fr 1fr;
    }

    nav, .showNavMenu {
        background: white;
        position: absolute;
        width: 100%;
        display: grid;
        grid-auto-flow: row;
        transition: top 500ms ease-in-out;
    }

    nav {
        top: -50vh;
        display: grid;
        place-items: center;
        padding: 5% 0%;
    }

    .showNavMenu {
        background: white;
        top: 100%;
    }

    a {
        text-decoration: none;
        font-family: var(--font);
        letter-spacing: 1px;
        padding: 20px 0px;
    }

    .v-application a {
        color: black;
    }

    .router-link-exact-active {
        text-align: center;
        background: rgba(211, 211, 211, 0.3);
        width: 100%;
    }

    .v-icon {
        z-index: 5;
    }

    img {
        width: 10%;
    }
</style>