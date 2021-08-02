<template>
    <section>
        <mobile-nav-bar :isHomePage="true"></mobile-nav-bar>
        <main>
            <img src="../assets/logo.png" alt="">
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
        row-gap: 30px;
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
</style>