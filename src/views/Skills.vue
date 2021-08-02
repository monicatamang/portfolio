<template>
    <section>
        <mobile-nav-bar :isHomePage="false"></mobile-nav-bar>
        <h1>Skills</h1>
        <article class="mainContainer">
            <div v-for="skill in skills" :key="skill.id" class="skillContainer">
                <img :src="skill.icon" :alt="skill.alt">
                <p>{{ skill.language }}</p>
            </div>
        </article>
        <page-footer></page-footer>
    </section>
</template>

<script>
    import MobileNavBar from "../components/MobileNavBar.vue";
    import PageFooter from "../components/PageFooter.vue";

    export default {
        name: "Skills",

        components: {
            MobileNavBar,
            PageFooter
        },

        data() {
            return {
                skills: [
                    {
                        id: 1,
                        icon: "/img/html.c4d15f8c.jpg",
                        alt: "",
                        language: "HTML",
                    },
                    {
                        id: 2,
                        icon: "/img/css.a05494da.jpg",
                        alt: "",
                        language: "CSS",
                    },
                    {
                        id: 3,
                        icon: "/img/scss.dcab4615.jpg",
                        alt: "",
                        language: "SCSS",
                    },
                    {
                        id: 4,
                        icon: "/img/javascript.02ebf2a6.jpg",
                        alt: "",
                        language: "JavaScript",
                    },
                    {
                        id: 5,
                        icon: "/img/vue.53e0fa73.jpg",
                        alt: "",
                        language: "Vue.js",
                    },
                    {
                        id: 6,
                        icon: "/img/mariadb.eb4f8395.jpg",
                        alt: "",
                        language: "MariaDB",
                    },
                    {
                        id: 7,
                        icon: "/img/sql.bf89e33e.jpg",
                        alt: "",
                        language: "SQL",
                    },
                    {
                        id: 8,
                        icon: "/img/python.c28d29ce.jpg",
                        alt: "",
                        language: "Python",
                    },
                    {
                        id: 9,
                        icon: "/img/flask.d070e7fd.jpg",
                        alt: "",
                        language: "Flask",
                    },
                    {
                        id: 10,
                        icon: "/img/api.2602bfad.jpg",
                        alt: "",
                        language: "Rest APIs",
                    },
                    {
                        id: 11,
                        icon: "/img/git.16c78d60.jpg",
                        alt: "",
                        language: "Git",
                    },
                    {
                        id: 12,
                        icon: "/img/googleCloud.169542bc.jpg",
                        alt: "",
                        language: "Google Cloud",
                    },
                    {
                        id: 13,
                        icon: "/img/ux.072a8d7c.jpg",
                        alt: "",
                        language: "UX Design",
                    },
                    {
                        id: 14,
                        icon: "/img/figma.14979871.jpg",
                        alt: "",
                        language: "Figma",
                    }
                ]
            }
        },
    }
</script>

<style scoped>
    h1 {
        margin: 11vh 0vw 3vh 0vw;
        font-family: var(--primaryFont);
        text-transform: uppercase;
        text-align: center;
        font-weight: 400;
        letter-spacing: 4px;
        font-size: 1.8rem;
    }

    .mainContainer, div {
        display: grid;
        place-items: center;
        height: 100%;
    }

    .mainContainer {
        grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
        padding: 0% 5%;
        row-gap: 15px;
        margin-bottom: 3vh;
    }

    .v-application p {
        margin-bottom: 0px;
    }

    p {
        font-family: var(--primaryFont);
        letter-spacing: 1px;
        font-size: 1.1rem;
    }

    .skillContainer {
        background: white;
        box-shadow: 0px 0px 5px lightgrey;
        width: 90%;
        padding: 10% 0%;
        row-gap: 15px;
    }

    img {
        width: 40%;
    }
</style>