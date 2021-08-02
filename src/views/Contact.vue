<template>
    <section>
        <mobile-nav-bar :isHomePage="false"></mobile-nav-bar>
        <h1>Contact</h1>
        <article>
            <div>
                <h2>Email</h2>
                <a href="mailto:tamang.monica@gmail.com">tamang.monica@gmail.com</a>
            </div>
            <div>
                <h2>Phone Number</h2>
                <p>(403) 477-6231</p>
            </div>
            <div>
                <h2>LinkedIn</h2>
                <a target="_blank" href="https://www.linkedin.com/in/monicatamang/">www.linkedin.com/in/monicatamang/</a>
            </div>
            <div>
                <h2>Resume</h2>
                <a href="https://drive.google.com/file/d/1lHhJbNFCjgE1QXYolNGi5cu0FvtEwzI8/view?usp=sharing">View Resume</a>
            </div>
        </article>
        <div id="quoteRequestContainer">
            <h3>Feel free to reach out to me for any questions or if you just want to have a quick chat!</h3>
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
            MobileNavBar,
        }
    }
</script>

<style scoped>
    article {
        display: grid;
        align-items: center;
        row-gap: 20px;
        padding: 0% 5%;
        margin-bottom: 5vh;
    }

    article div {
        display: grid;
        align-items: center;
        row-gap: 10px;
    }

    h1 {
        margin: 11vh 0vw 4vh 0vw;
        font-family: var(--primaryFont);
        text-transform: uppercase;
        text-align: center;
        font-weight: 400;
        letter-spacing: 4px;
        font-size: 1.8rem;
    }

    h2 {
        font-family: var(--primaryFont);
        font-weight: 700;
        font-size: 1.2rem;
    }

    h3 {
        font-family: var(--primaryFont);
        font-weight: 400;
    }

    .v-application p {
        margin-bottom: 0px;
    }

    a, p {
        font-size: 1.1rem;
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
        position: fixed;
        bottom: 0%;
        color: white;
        background: black;
        text-align: center;
        min-height: 35vh;
        padding: 5%;
    }

    #quoteRequestContainer > a {
        background: white;
        color: black;
        padding: 3% 5%;
        border-radius: 2px;
        font-size: 1.3rem;
    }

    button {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 2fr;
    }

    .v-icon {
        margin-left: -10px;
        font-size: 1.8rem;
    }
</style>