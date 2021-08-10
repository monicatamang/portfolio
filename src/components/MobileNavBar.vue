<template>
    <div id="navBar" :class="{ hideLogo: isHomePage }">
        <div id="spacer" v-if="isHomePage === true"></div>
        <router-link to="/" v-if="isHomePage === false" id="logo">
            <img src="../assets/logo.png" alt="Monica Tamang's official logo with the initials 'MT' in the middle with the word 'DESIGNS' spaced out at beneatht initials enclosed in a square.">
        </router-link>
        <v-spacer></v-spacer>
        <v-icon large :color="primaryColor" v-if="toggleNavMenu === false" @click="toggleNavMenu = !toggleNavMenu">mdi-menu</v-icon>
        <v-icon large :color="primaryColor" v-if="toggleNavMenu === true" @click="toggleNavMenu = !toggleNavMenu">mdi-close</v-icon>
        <nav id="navMenu" :class="{ showNavMenu: toggleNavMenu }">
            <router-link to="/">Home</router-link>
            <router-link to="/About">About</router-link>
            <router-link to="/Projects">Work</router-link>
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
                toggleNavMenu: false,
                primaryColor: "#292929"
            }
        }
    }
</script>

<style scoped>
    #navBar, .hideLogo {
        position: fixed;
        top: 0%;
        width: 100%;
        height: 8vh;
        z-index: 10;

        display: grid;
        place-items: center;
        grid-auto-flow: column;
        background: white;
    }

    #navBar {
        grid-template-columns: 1fr 3fr 1fr;
    }

    .hideLogo {
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
    }

    .showNavMenu {
        background: white;
        top: 100%;
        padding: 5% 0%;
    }

    a {
        text-decoration: none;
        letter-spacing: 1px;
        padding: 20px 0px;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .v-application a {
        color: black;
    }

    .router-link-exact-active {
        text-align: center;
        background: rgba(211, 211, 211, 0.3);
        width: 100%;
    }

    #logo {
        padding: 0px;
        margin-top: 10px;
    }

    img {
        width: 100%;
        margin-left: 15%;
    }

    @media only screen and (min-width: 768px) {

        .mdi:before, .mdi-set {
            font-size: 3rem;
        }

        #navBar {
            grid-template-columns: 1fr 5fr 1fr;
        }

        .v-application a {
            font-size: 1.4rem;
        }
    }

    @media only screen and (min-width: 1024px) {

        #navBar {
            display: none;
        }
    }
</style>