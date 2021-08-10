<template>
    <section>
        <mobile-nav-bar :isHomePage="false"></mobile-nav-bar>
        <h1>Contact</h1>
        <article>
            <div id="quoteRequestContainer">
                <h2>Want to learn more? Let's connect!</h2>
                <v-icon :color="primaryColor" id="chatIcon">mdi-chat</v-icon>
                <p>I'd love to chat about anything web development related or just getting to know each other!</p>
            </div>
            <div id="contactInfoContainer">
                <a href="mailto:tamang.monica@gmail.com"><v-icon :color="primaryColor">mdi-email</v-icon> tamang.monica@gmail.com</a>
                <a href="tel:4034776231" id="mobilePhoneNumber"><v-icon :color="primaryColor">mdi-phone</v-icon> (403) 477-6231</a>
                <p id="desktopPhoneNumber"><v-icon :color="primaryColor">mdi-phone</v-icon> (403) 477-6231</p>
                <a href="https://github.com/monicatamang/"><v-icon color="black">mdi-github</v-icon> github.com/monicatamang</a>
                <a target="_blank" href="https://www.linkedin.com/in/monicatamang/"><v-icon :color="primaryColor">mdi-linkedin</v-icon> www.linkedin.com/in/monicatamang</a>
                <a href="https://drive.google.com/file/d/1lHhJbNFCjgE1QXYolNGi5cu0FvtEwzI8/view?usp=sharing" id="resumeButton"><button>View Resume</button></a>
            </div>
        </article>
    </section>
</template>

<script>
    import MobileNavBar from "../components/MobileNavBar.vue";

    export default {
        name: "Contact",

        components: {
            MobileNavBar
        },

        data() {
            return {
                primaryColor: "#292929"
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

    article {
        display: grid;
        justify-self: start;
        align-items: center;
    }

    #contactInfoContainer {
        display: grid;
        justify-self: start;
        align-items: center;
        row-gap: 30px;
        padding: 0% 5%;
    }

    h1 {
        margin: 11vh 0vw 3vh 0vw;
        text-transform: uppercase;
        text-align: center;
        font-weight: 400;
        letter-spacing: 4px;
        font-size: 1.8rem;
    }

    h2, h2 + p {
        text-align: center;
        color: var(--primaryColor);
        font-size: 1rem;
    }

    a {
        text-decoration: none;
    }

    .v-application a {
        color: var(--primaryColor);
    }

    #quoteRequestContainer {
        display: grid;
        place-items: center;
        color: var(--primaryColor);
        row-gap: 10px;
        margin-bottom: 2vh;
        text-align: center;
    }

    #quoteRequestContainer > a {
        background: white;
        color: var(--primaryColor);
        padding: 3% 5%;
        border-radius: 2px;
        font-size: 1.3rem;
    }

    #quoteRequestContainer button {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 3fr;
        font-size: 1.3rem;
    }

    .v-icon {
        margin-right: 5px;
        font-size: 1.5rem;
        color: var(--primaryColor);
    }

    #resumeButton {
        border: 1px solid var(--primaryColor);
        justify-self: start;
        padding: 3%;
    }

    #desktopPhoneNumber {
        display: none;
    }

    #chatIcon {
        display: none;
    }

    @media only screen and (min-width: 768px) {

        #contactInfoContainer {
            row-gap: 40px;
        }

        h1 {
            font-size: 2.3rem;
            margin: 10vh 0vw 4vh 0vw;
        }

        h3 {
            font-size: 1.6rem;
        }

        #quoteRequestContainer {
            padding: 3% 5%;
        }

        #quoteRequestContainer button {
            font-size: 1.6rem;
        }

        .v-icon {
            margin-right: 10px;
            font-size: 2rem;
        }

        a {
            font-size: 1.4rem;
        }

        #resumeButton {
            padding: 2% 3%;
        }
    }

    @media only screen and (min-width: 1024px) {

        #mobilePhoneNumber {
            display: none;
        }

        #desktopPhoneNumber {
            display: inline;
            margin-bottom: 0px;
        }

        article {
            grid-template-columns: 1fr 1fr;
            margin-top: 8vh;
        }

        #contactInfoContainer, #quoteRequestContainer {
            width: 100%;
            height: 100%;
        }

        #contactInfoContainer {
            place-items: center;
            margin-top: 5vh;
            border-left: 1px solid var(--primaryColor);
        }

        #quoteRequestContainer {
            background: none;
            margin-top: 0vh;
            row-gap: 50px;
            padding: 3% 10%; 
        }

        #quoteRequestContainer button {
            border: 1px solid var(--primaryColor);
            width: 100%;
            padding: 5% 2%;
            font-size: 1.2rem;
        }

        #quoteRequestContainer > a {
            padding: 0%;
            width: 30%;
        }

        #quoteRequestContainer > a .v-icon {
            margin-left: 10px;
        }

        #chatIcon {
            display: grid;
            font-size: 5.5rem;
        }

        h1 {
            font-size: 2rem;
            margin: 3vh 0vw 5vh 0vw;
        }

        h2 {
            font-size: 1.3rem;
        }

        .v-icon {
            font-size: 1.4rem;
        }

        a {
            font-size: 1.1rem;
        }

        #resumeButton {
            padding: 1% 2%;
            font-size: 1rem;
            justify-self: center;
        }
    }
</style>