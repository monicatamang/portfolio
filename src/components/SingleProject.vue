<template>
    <article>
        <div v-for="project in projects" :key="project.id" class="mainContainer">
            <div class="projectContainer">
                <img :src="project.image" :alt="project.alt">
                <div class="textContainer">
                    <h1 class="projectTitle">{{ project.title }}</h1>
                    <p class="projectDuration">{{ project.duration }}</p>
                    <p>{{ project.description }}</p>
                    <div class="skillsContainer">
                        <span></span>
                        <p class="projectSkills">{{ project.skills }}</p>
                    </div>
                    <div class="buttonContainer">
                        <a target="_blank" :href="project.website" class="websiteLink">
                            <button class="websiteButton">Website</button>
                        </a>
                        <div class="githubLinks">
                            <a target="_blank" :href="project.frontendCode" class="frontendCodeLink" v-if="project.backendCode !== '' && project.backendCode !== null">
                                <button class="frontendCodeButton">Front-end Code</button>
                            </a>
                            <a target="_blank" :href="project.backendCode" class="backendCodeLink" v-if="project.backendCode !== '' && project.backendCode !== null">
                                <button class="backendCodeButton">Back-end Code</button>
                            </a>
                            <a target="_blank" :href="project.frontendCode" class="frontendCodeLink" v-else-if="project.backendCode === '' || project.backendCode === null">
                                <button class="frontendCodeButton">Front-end Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "single-project",

        props: {
            project: Object
        },

        mounted() {
            let websiteLinks = document.getElementsByClassName('websiteLink');
            let frontendCodeLinks = document.getElementsByClassName('frontendCodeLink');
            let backendCodeLinks = document.getElementsByClassName('backendCodeLink');
            let dashlines = document.querySelectorAll('span');
            for(let i = 0; i < this.projects.length; i++) {
                websiteLinks[i].style.background = `#60A3D9`;
                frontendCodeLinks[i].style.border = `1px solid ${this.projects[i].color}`;
                frontendCodeLinks[i].style.color = `${this.projects[i].color}`;
                backendCodeLinks[i].style.color = `${this.projects[i].color}`;
                backendCodeLinks[i].style.border = `1px solid ${this.projects[i].color}`;
                dashlines[j].style.background = `${this.projects[j].color}`;
            }
        }
    }
</script>

<style scoped>
    .mainContainer, div {
        display: grid;
        place-items: center;
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

    .githubLinks {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        width: 100%;
    }

    .websiteLink, .frontendCodeLink, .backendCodeLink {
        font-family: var(--primaryFont);
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
        padding: 3% 0%;
    }

    .websiteButton, .frontendCodeButton, .backendCodeButton {
        letter-spacing: 1px;
        font-size: 1rem;
    }

    span {
        background: #52688F;
        width: 15px;
        height: 1.5px;
        align-self: center;
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