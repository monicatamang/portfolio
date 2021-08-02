<template>
    <section>
        <mobile-nav-bar :isHomePage="true"></mobile-nav-bar>
        <main>
            <img src="../assets/logo.png" alt="Monica Tamang's official logo with the initials 'MT' in the middle with the word 'DESIGNS' spaced out at beneatht initials enclosed in a square.">
            <article>
                <h1>Monica Tamang</h1>
                <h2>Junior Full-Stack Web Developer</h2>
            </article>
            <div>
                <v-btn large dark depressed @click="goToContactPage">Contact</v-btn>
                <v-btn large outlined depressed @click="goToProjectsPage">Projects</v-btn>
            </div>
        </main>
    </section>
</template>

<script>
    import MobileNavBar from "../components/MobileNavBar.vue";

    export default {
        name: "Home",

        components: {
            MobileNavBar
        },

        methods: {
            goToContactPage() {
                this.$router.push('/Contact');
            },

            goToProjectsPage() {
                this.$router.push('/Projects');
            }
        }
    }
</script>

<style scoped>
    main {
        display: grid;
        place-items: center;
        min-height: 65vh;
        text-align: center;
        margin-top: 10vh;
    }

    article {
        display: grid;
        place-items: center;
        row-gap: 25px;
    }

    div {
        display: grid;
        place-items: center;
        row-gap: 20px;
    }

    .v-btn {
        font-family: var(--primaryFont);
        letter-spacing: 2px;
        width: 35vw;
    }

    h1 {
        font-family: var(--primaryFont);
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 4px;
        font-size: 1.6rem;
    }

    h2 {
        font-family: var(--primaryFont);
        font-weight: 300;
        letter-spacing: 1px;
        font-size: 1.1rem;
        margin-top: -5%;
    }

    img {
        width: 50%;
    }

    @media only screen and (min-width: 768px) {

        main {
            row-gap: 10vh;
        }

        article {
            row-gap: 35px;
        }

        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 1.6rem;
        }

        .v-btn.v-size--large {
            font-size: 1.4rem;
        }

        .v-btn:not(.v-btn--round).v-size--large {
            width: 25vw;
            height: 6vh;
        }

        img {
            width: 30%;
        }
    }

    @media only screen and (min-width: 1024px) {

        article {
            row-gap: 40px;
        }

        img {
            display: none;
        }

        h1 {
            letter-spacing: 10px;
        }

        h2 {
            font-size: 1.5rem;
        }

        .v-btn.v-size--large {
            font-size: 1rem;
        }

        .v-btn:not(.v-btn--round).v-size--large {
            width: 12vw;
            height: 8vh;
        }
    }
</style>