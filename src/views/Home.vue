<template>
    <section>
        <nav-bar></nav-bar>
        <main>
            <article>
                <h1>Monica Tamang</h1>
                <p>Optimizing business growth through design, innovation and creativity</p>
            </article>
            <div>
                <router-link to="/Contact" class="text-decoration-none">
                    <v-btn large depressed color="black" class="white--text">Contact</v-btn>
                </router-link>
                <router-link to="/Projects" class="text-decoration-none">
                    <v-btn large depressed outlined>Projects</v-btn>
                </router-link>
            </div>
        </main>
    </section>
</template>

<script>
    import NavBar from "../components/NavBar.vue";

    export default {
        name: "Home",

        components: {
            NavBar
        }
    }
</script>

<style scoped>
    main {
        display: grid;
        place-items: center;
        min-height: 80vh;
        text-align: center;
    }

    article {
        display: grid;
        place-items: center;
        row-gap: 30px;
    }

    div {
        display: grid;
        place-items: center;
        row-gap: 30px;
    }

    .v-btn {
        font-family: var(--titleFont);
        letter-spacing: 2px;
    }

    h1 {
        font-family: var(--titleFont);
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 4px;
        font-size: 1.6rem;
    }

    p {
        font-family: var(--bodyFont);
        padding: 0% 10%;
        line-height: 30px;
    }
</style>