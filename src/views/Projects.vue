<template>
    <section>
        <nav-bar></nav-bar>
        <h1>Projects</h1>
        <!-- <article v-for="project in projects" :key="project.id">
            <v-card elevation="2" class="mt-10" width="90vw">
                <router-link :to="project.projectLink">
                    <img width="100%" height="100%" :src="project.src" :alt="project.alt">
                </router-link>
                <h3>{{project.title}}</h3>
                <p>{{project.description}}</p>
                <v-card-actions>
                    <a target="_blank" :href="project.website">
                        <v-btn text color="#3286AA">Website</v-btn>
                    </a>
                    <a target="_blank" :href="project.github">
                        <v-btn text color="#3286AA">Github</v-btn>
                    </a>
                    <router-link :to="project.projectLink">
                        <v-btn text color="#3286AA">Learn more</v-btn>
                    </router-link>
                </v-card-actions>
            </v-card>
        </article> -->
        <article>
            <v-card elevation="2" class="mt-10" width="90vw">
                <router-link to="#">
                    <img width="100%" height="100%" src="../assets/okotokspizzamockup.jpg" alt="">
                </router-link>
                <h3>Okotoks Pizza</h3>
                <p>Responsive web design for a startup pizza restaurant</p>
                <v-card-actions>
                    <a target="_blank" href="https://okotokspizzarestaurant.ml">
                        <v-btn text color="black">Website</v-btn>
                    </a>
                    <a target="_blank" href="https://github.com/monicatamang/OkotoksPizzaProject.git">
                        <v-btn text color="black">Github</v-btn>
                    </a>
                    <router-link to="#">
                        <v-btn text color="black">Learn more</v-btn>
                    </router-link>
                </v-card-actions>
            </v-card>
        </article>
        <article>
            <v-card elevation="2" class="mt-10" width="90vw">
                <router-link to="#">
                    <img width="100%" height="100%" src="../assets/rockpaperscissorsmockup.jpg" alt="">
                </router-link>
                <h3>Rock Paper Scissors</h3>
                <p>Responsive web design for the classic Rock Paper Scissors game</p>
                <v-card-actions>
                    <a target="_blank" href="https://okotokspizzarestaurant.ml">
                        <v-btn text color="black">Website</v-btn>
                    </a>
                    <a target="_blank" href="https://github.com/monicatamang/vueRockPaperScissors.git">
                        <v-btn text color="black">Github</v-btn>
                    </a>
                    <router-link to="#">
                        <v-btn text color="black">Learn more</v-btn>
                    </router-link>
                </v-card-actions>
            </v-card>
        </article>
    </section>
</template>

<script>
    import NavBar from "../components/MobileNavBar.vue";

    export default {
        name: "Projects",

        components: {
            NavBar
        },

        data() {
            return {
                projects: [
                    {
                        id: 1,
                        title: "Okotoks Pizza",
                        description: "Responsive web design for a startup pizza restaurant",
                        image: "../assets/okotokspizzamockup.jpg",
                        alt: "",
                        website: "https://okotokspizzarestaurant.ml",
                        github: "https://github.com/monicatamang/OkotoksPizzaProject.git",
                        projectLink: ""
                    },

                    {
                        id: 2,
                        title: "Rock Paper Scissors",
                        description: "Responsive web design for the classic Rock Paper Scissors game",
                        image: "../assets/rockpaperscissorsmockup.jpg",
                        alt: "",
                        website: "https://rockpaperscissorsgame.ml",
                        github: "https://github.com/monicatamang/vueRockPaperScissors.git",
                        projectLink: ""
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    h1 {
        text-align: center;
        font-family: var(--titleFont);
        text-transform: uppercase;
        margin-top: 3vh;
    }

    a {
        display: grid;
        place-items: center;
        text-decoration: none;
    }

    .v-btn {
        font-family: var(--titleFont);
        font-weight: bold;
    }

    h3 {
        font-family: var(--titleFont);
        text-transform: uppercase;
        font-weight: 600;
        padding: 20px 16px 16px 16px;
        letter-spacing: 1px;
    }

    p {
        font-family: var(--bodyFont);
        padding: 0px 16px;
        font-size: 0.9rem;
        letter-spacing: 0.5px;
    }

    article {
        display: grid;
        place-items: center;
    }
</style>