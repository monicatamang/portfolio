<template>
    <div id="navBar">
        <router-link to="/" id="logo">
            <img src="../assets/logo.png" alt="Monica Tamang's official logo with the initials 'MT' in the middle with the word 'DESIGNS' spaced out at beneatht initials enclosed in a square.">
        </router-link>
        <div></div>
        <nav>
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
            grid-template-columns: auto 1fr 1fr;
        }

        nav {
            display: grid;
            place-items: center;
            grid-template-columns: repeat(5, 1fr);
            margin-right: 5%;
        }

        #logo {
            padding: 0px;
            margin-top: 10px;
            border-bottom: 1px solid white;
        }

        img {
            width: 16%;
            margin-left: 3%;
        }

        nav a {
            text-decoration: none;
            color: black;
            font-family: var(--primaryFont);
            font-size: 0.9rem;
            text-transform: uppercase;
            font-weight: 300;
            border-bottom: 1px solid white;
        }

        .v-application a {
            padding: 2%;
        }

        nav a:hover, .router-link-exact-active {
            border-bottom: 1px solid lightgrey;
        }
    }
</style>