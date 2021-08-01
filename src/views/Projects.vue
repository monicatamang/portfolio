<template>
    <section>
        <mobile-nav-bar :isHomePage="false"></mobile-nav-bar>
        <h1 id="heading">Projects</h1>
        <article v-for="project in projects" :key="project.id">
            <div class="projectContainer">
                <img :src="project.image" :alt="project.alt">
                <div class="textContainer">
                    <h1 class="projectTitle">{{ project.title }}</h1>
                    <p class="projectDuration">{{ project.duration }}</p>
                    <p>{{ project.description }}</p>
                    <p class="projectSkills">{{ project.skills }}</p>
                    <div class="buttonContainer">
                        <a target="_blank" :href="project.website" class="websiteLink">
                            <button class="websiteButton">Website</button>
                        </a>
                        <div class="githubLinksFrontendAndBackend" v-if="project.backendCode !== '' && project.backendCode !== null">
                            <a target="_blank" :href="project.frontendCode" class="frontendCodeLink">
                                <button class="frontendCodeButton">Front-end Code</button>
                            </a>
                            <a target="_blank" :href="project.backendCode" class="backendCodeLink">
                                <button class="backendCodeButton">Back-end Code</button>
                            </a>
                        </div>
                        <div class="githubLinksFrontendOnly" v-else-if="project.backendCode === '' || project.backendCode === null">
                            <a target="_blank" :href="project.frontendCode" class="frontendCodeLink">
                                <button class="frontendCodeButton">Front-end Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
    import MobileNavBar from "../components/MobileNavBar.vue";

    export default {
        name: "Projects",

        components: {
            MobileNavBar
        },

        data() {
            return {
                projects: [
                    {
                        id: 1,
                        title: "Job Check",
                        duration: "July 10, 2021 - July 21, 2021",
                        description: "An application used to help job seekers track and organize job applications, interviews, networking events and other relevant career opportunities.",
                        skills: "Vue.js, MariaDB, SQL, Flask",
                        image: "img/jobCheckIphoneMockup.7343d89f.png",
                        alt: "",
                        website: "https://jobcheck.ml",
                        frontendCode: "https://github.com/monicatamang/jobCheckFrontend.git",
                        backendCode: "https://github.com/monicatamang/jobCheckBackend.git",
                        color: "#52688F"
                    },
                    {
                        id: 2,
                        title: "Post-It",
                        duration: "April 2021 - July 2021",
                        description: "A Twitter clone application used for college and university students to increase community engagement on campus.",
                        skills: "Vue.js, MariaDB, SQL, Flask",
                        image: "/img/postItIphoneMockup.6549f2b0.jpg",
                        alt: "",
                        website: "https://post-it.tk",
                        frontendCode: "https://github.com/monicatamang/postItFrontend.git",
                        backendCode: "https://github.com/monicatamang/postItBackend.git",
                        color: "#60A3D9"
                    },
                    {
                        id: 3,
                        title: "Rock Paper Scissors",
                        duration: "April 2021 - May 2021",
                        description: "Website design for the classic game of 'Rock Paper Scissors'.",
                        skills: "Vue.js",
                        image: "/img/rockPaperScissorsIphoneMockup.fa399af0.jpg",
                        alt: "",
                        website: "https://post-it.tk",
                        frontendCode: "https://github.com/monicatamang/vueRockPaperScissors.git",
                        backendCode:  "",
                        color: "#313131"
                    },
                    {
                        id: 4,
                        title: "Okotoks Pizza",
                        duration: "March 2, 2021 - March 15, 2021",
                        description: "Website design for a pizza restaurant to increase the number of phone call orders for pick-up and online reservations.",
                        skills: "HTML, SCSS",
                        image: "/img/okotoksPizzaIphoneMockup.fcc7716e.jpg",
                        alt: "",
                        website: "https://okotokspizzarestaurant.ml",
                        frontendCode: "https://github.com/monicatamang/OkotoksPizzaProject.git",
                        backendCode:  "",
                        color: "#393F46"
                    },
                ]
            }
        },

        mounted() {
            let websiteLinks = document.getElementsByClassName('websiteLink');
            let frontendCodeLinks = document.getElementsByClassName('frontendCodeLink');
            let backendCodeLinks = document.getElementsByClassName('backendCodeLink');

            for(let i = 0; i < websiteLinks.length; i++) {
                websiteLinks[i].style.background = this.projects[i].color;
            }

            for(let i = 0; i < frontendCodeLinks.length; i++) {
                frontendCodeLinks[i].style.border = `1px solid ${this.projects[i].color}`;
                frontendCodeLinks[i].style.color = this.projects[i].color;
            }

            for(let i = 0; i < backendCodeLinks.length; i++) {
                backendCodeLinks[i].style.border = `1px solid ${this.projects[i].color}`;
                backendCodeLinks[i].style.color = this.projects[i].color;
            }
        }
    }
</script>

<style scoped>
    article, div {
        display: grid;
        place-items: center;
    }

    #heading {
        margin: 11vh 0vw 3vh 0vw;
        font-family: var(--primaryFont);
        text-transform: uppercase;
        text-align: center;
        font-weight: 400;
        letter-spacing: 4px;
        font-size: 1.8rem;
    }

    .projectContainer {
        background: white;
        box-shadow: 0px 0px 5px lightgrey;
        width: 90%;
        margin-bottom: 20px;
    }

    img {
        width: 80%;
    }

    .projectTitle, p {
        font-family: var(--primaryFont);
        justify-self: left;
    }

    .projectTitle {
        font-weight: 400;
        font-size: 1.3rem;
        margin-bottom: 5%;
    }

    p {
        font-weight: 300;
        font-size: 1rem;
    }

    .textContainer {
        padding: 0% 5%;
    }

    .buttonContainer {
        width: 100%;
        row-gap: 15px;
        margin: 6% 0% 8% 0%;
    }

    .githubLinksFrontendAndBackend {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        width: 100%;
    }

    .githubLinksFrontendOnly {
        display: grid;
        place-items: center;
        width: 100%;
    }

    .websiteLink, .frontendCodeLink, .backendCodeLink {
        font-family: var(--primaryFont);
        border-radius: 2px;
        font-weight: 300;
    }

    .websiteLink {
        color: white;
        width: 100%;
        padding: 2% 0%;
        text-align: center;
    }

    .frontendCodeLink, .backendCodeLink {
        width: 100%;
        text-align: center;
        padding: 2% 0%;
    }

    .websiteButton, .frontendCodeButton, .backendCodeButton {
        letter-spacing: 1px;
        font-size: 1rem;
    }

    .projectSkills {
        margin-bottom: 0px;
    }

    .skillsContainer {
        display: grid;
        grid-template-columns: 1fr 10fr;
        column-gap: 10px;
        justify-self: start;
    }
</style>