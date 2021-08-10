<template>
    <section>
        <mobile-nav-bar :isHomePage="false"></mobile-nav-bar>
        <h1>Skills</h1>
        <article class="mainContainer">
            <div v-for="skill in skills" :key="skill.id" class="skillContainer">
                <img src="../assets/skillsIcons/html.jpg" :alt="skill.alt" v-if="skill.language === 'HTML'">
                <img src="../assets/skillsIcons/css.jpg" :alt="skill.alt" v-if="skill.language === 'CSS'">
                <img src="../assets/skillsIcons/scss.jpg" :alt="skill.alt" v-if="skill.language === 'SASS'">
                <img src="../assets/skillsIcons/javascript.jpg" :alt="skill.alt" v-if="skill.language === 'JavaScript'">
                <img src="../assets/skillsIcons/vue.jpg" :alt="skill.alt" v-if="skill.language === 'Vue.js'">
                <img src="../assets/skillsIcons/mariadb.jpg" :alt="skill.alt" v-if="skill.language === 'MariaDB'">
                <img src="../assets/skillsIcons/sql.jpg" :alt="skill.alt" v-if="skill.language === 'SQL'">
                <img src="../assets/skillsIcons/python.jpg" :alt="skill.alt" v-if="skill.language === 'Python'">
                <img src="../assets/skillsIcons/flask.jpg" :alt="skill.alt" v-if="skill.language === 'Flask'">
                <img src="../assets/skillsIcons/api.jpg" :alt="skill.alt" v-if="skill.language === 'Rest APIs'">
                <img src="../assets/skillsIcons/git.jpg" :alt="skill.alt" v-if="skill.language === 'Git'">
                <img src="../assets/skillsIcons/googleCloud.jpg" :alt="skill.alt" v-if="skill.language === 'Google Cloud'">
                <img src="../assets/skillsIcons/ux.jpg" :alt="skill.alt" v-if="skill.language === 'UX Design'">
                <img src="../assets/skillsIcons/figma.jpg" :alt="skill.alt" v-if="skill.language === 'Figma'">
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
                        alt: "The HTML orange coloured and shield-shaped logo with the number 5 in the middle.",
                        language: "HTML",
                    },
                    {
                        id: 2,
                        icon: "/img/css.a05494da.jpg",
                        alt: "The CSS blue coloured and shield-shaped logo with the number 3 in the middle.",
                        language: "CSS",
                    },
                    {
                        id: 3,
                        icon: "/img/scss.dcab4615.jpg",
                        alt: "The SASS logo that has the word 'SASS' written in a cursive, pink-coloured font.",
                        language: "SASS",
                    },
                    {
                        id: 4,
                        icon: "/img/javascript.02ebf2a6.jpg",
                        alt: "The JavaScript logo which is a yellow squares with the initials 'JS' in a black, bold font in the bottom right corner.",
                        language: "JavaScript",
                    },
                    {
                        id: 5,
                        icon: "/img/vue.53e0fa73.jpg",
                        alt: "The Vue.js logo which is the letter 'V' with a navy blue and a light green colour.",
                        language: "Vue.js",
                    },
                    {
                        id: 6,
                        icon: "/img/mariadb.eb4f8395.jpg",
                        alt: "The MariaDB logo which is a dark tan coloured seal looking in the right direction.",
                        language: "MariaDB",
                    },
                    {
                        id: 7,
                        icon: "/img/sql.bf89e33e.jpg",
                        alt: "A vector image of a grey coloured database server.",
                        language: "SQL",
                    },
                    {
                        id: 8,
                        icon: "/img/python.c28d29ce.jpg",
                        alt: "The python logo with two-colour snakes. The snake on the left side is blue and the snake of the right side is yellow.",
                        language: "Python",
                    },
                    {
                        id: 9,
                        icon: "/img/flask.d070e7fd.jpg",
                        alt: "The Flask logo which is an sketch of a volumetric flask.",
                        language: "Flask",
                    },
                    {
                        id: 10,
                        icon: "/img/api.2602bfad.jpg",
                        alt: "A vector image of a light grey gear with the symbols of a blue left and right arrow with a red backslash in the middle of the arrows.",
                        language: "Rest APIs",
                    },
                    {
                        id: 11,
                        icon: "/img/git.16c78d60.jpg",
                        alt: "The Git logo which is an orange rhombus with rounded corners and an abstract white image on it.",
                        language: "Git",
                    },
                    {
                        id: 12,
                        icon: "/img/googleCloud.169542bc.jpg",
                        alt: "The Google Cloud logo which is a small cloud shaped with a border that has the colours red, blue, green and yellow.",
                        language: "Google Cloud",
                    },
                    {
                        id: 13,
                        icon: "/img/ux.072a8d7c.jpg",
                        alt: "A vector image of a soft pink bordered website with a with a persona displayed on a dark blue bordered phone.",
                        language: "UX Design",
                    },
                    {
                        id: 14,
                        icon: "/img/figma.14979871.jpg",
                        alt: "The Figma logo which has the letter 'F' that is made of up of smaller circles with that colours red, purple, blue and green on a black, rounded square.",
                        language: "Figma",
                    }
                ]
            }
        },

        mounted() {
            document.querySelector("section").style.opacity = 1;
            document.querySelector("section").style.transition = "opacity 1s ease-in-out 10ms";
        }
    }
</script>

<style scoped>
    section {
        opacity: 0;
    }

    h1 {
        margin: 11vh 0vw 3vh 0vw;
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
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        padding: 0% 5%;
        row-gap: 15px;
        margin-bottom: 3vh;
        text-align: center;
    }

    .v-application p {
        margin-bottom: 0px;
    }

    p {
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

    @media only screen and (min-width: 768px) {

        h1 {
            font-size: 2.3rem;
            margin: 10vh 0vw 4vh 0vw;
        }

        p {
            font-size: 1.3rem;
        }

        img {
            width: 45%;
        }
    }

    @media only screen and (min-width: 1024px) {

        h1 {
            font-size: 2rem;
            margin: 3vh 0vw 5vh 0vw;
        }

        p {
            font-size: 0.9rem;
        }

        img {
            width: 35%;
        }

        .mainContainer {
            margin-bottom: 5vh;
        }
    }
</style>