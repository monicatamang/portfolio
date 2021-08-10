<template>
    <div id="navBar">
        <router-link to="/" id="logoLink">
            <img src="../assets/logo.png" id="logo" alt="Monica Tamang's official logo with the initials 'MT' in the middle with the word 'DESIGNS' spaced out at beneatht initials enclosed in a square.">
        </router-link>
        <div></div>
        <nav>
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
        name: "desktop-nav-bar"
    }
</script>

<style scoped>
    #navBar {
        display: none;
    }

    @media only screen and (min-width: 1024px) {

        #navBar {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }

        nav {
            display: grid;
            place-items: center;
            grid-template-columns: repeat(5, 1fr);
            margin-right: 5%;
        }

        #logo {
            width: 6vw;
            margin-left: 0.8vw;
        }

        #logoLink {
            padding: 0px;
            margin-top: 10px;
            border: 1px solid white;
            width: 10%;
        }

        img {
            width: 16%;
            margin-left: 3%;
        }

        nav a {
            font-family: var(--primaryFont);
            text-decoration: none;
            color: black;
            font-size: 0.9rem;
            text-transform: uppercase;
            font-weight: 400;
            border: 0.5px solid white;
        }

        .v-application a {
            padding: 5% 10%;
        }

        nav a:hover, .router-link-exact-active {
            border: 0.5px solid var(--primaryColor);
        }
    }
</style>