<template>
    <section>
        <mobile-nav-bar :isHomePage="false"></mobile-nav-bar>
        <h1>Contact</h1>
        <article>
            <a href="mailto:tamang.monica@gmail.com"><v-icon color="black">mdi-email</v-icon> tamang.monica@gmail.com</a>
            <a href="tel:4034776231"><v-icon color="black">mdi-phone</v-icon> (403) 477-6231</a>
            <a href="https://github.com/monicatamang/"><v-icon color="black">mdi-github</v-icon> github.com/monicatamang</a>
            <a target="_blank" href="https://www.linkedin.com/in/monicatamang/"><v-icon color="black">mdi-linkedin</v-icon> www.linkedin.com/in/monicatamang</a>
            <a href="https://drive.google.com/file/d/1lHhJbNFCjgE1QXYolNGi5cu0FvtEwzI8/view?usp=sharing" id="resumeButton"><button>View Resume</button></a>
        </article>
        <div id="quoteRequestContainer">
            <h3>Feel free to reach out to me for any questions or if you just want to have a quick chat</h3>
            <a target="_blank" href="mailto:tamang.monica@gmail.com">
                <button><v-icon color="black">mdi-email</v-icon>Email Me</button>
            </a>
        </div>
    </section>
</template>

<script>
    import MobileNavBar from "../components/MobileNavBar.vue";

    export default {
        name: "Contact",

        components: {
            MobileNavBar
        }
    }
</script>

<style scoped>
    article {
        display: grid;
        justify-self: start;
        align-items: center;
        row-gap: 30px;
        padding: 0% 5%;
        margin-bottom: 5vh;
    }

    h1 {
        margin: 11vh 0vw 3vh 0vw;
        font-family: var(--primaryFont);
        text-transform: uppercase;
        text-align: center;
        font-weight: 400;
        letter-spacing: 4px;
        font-size: 1.8rem;
    }

    h2 {
        font-weight: 700;
    }

    h3 {
        font-family: var(--primaryFont);
        font-weight: 400;
    }

    h2, a {
        font-size: 1rem;
        font-family: var(--primaryFont);
    }

    a {
        text-decoration: none;
    }

    .v-application a {
        color: black;
    }

    #quoteRequestContainer {
        display: grid;
        place-items: center;
        color: white;
        background: black;
        text-align: center;
        min-height: 41vh;
        padding: 5%;
    }

    #quoteRequestContainer > a {
        background: white;
        color: black;
        padding: 3% 5%;
        border-radius: 2px;
        font-size: 1.3rem;
    }

    .v-icon {
        margin-right: 5px;
        font-size: 1.8rem;
    }

    #resumeButton {
        border: 1px solid black;
        justify-self: start;
        padding: 3%;
    }
</style>