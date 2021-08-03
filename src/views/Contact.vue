<template>
    <section>
        <mobile-nav-bar :isHomePage="false"></mobile-nav-bar>
        <h1>Contact</h1>
        <article>
            <div id="contactInfoContainer">
                <a href="mailto:tamang.monica@gmail.com"><v-icon color="black">mdi-email</v-icon> tamang.monica@gmail.com</a>
                <a href="tel:4034776231" id="mobilePhoneNumber"><v-icon color="black">mdi-phone</v-icon> (403) 477-6231</a>
                <p id="desktopPhoneNumber"><v-icon color="black">mdi-phone</v-icon> (403) 477-6231</p>
                <a href="https://github.com/monicatamang/"><v-icon color="black">mdi-github</v-icon> github.com/monicatamang</a>
                <a target="_blank" href="https://www.linkedin.com/in/monicatamang/"><v-icon color="black">mdi-linkedin</v-icon> www.linkedin.com/in/monicatamang</a>
                <a href="https://drive.google.com/file/d/1lHhJbNFCjgE1QXYolNGi5cu0FvtEwzI8/view?usp=sharing" id="resumeButton"><button>View Resume</button></a>
            </div>
            <div id="quoteRequestContainer">
                <h3>Feel free to reach out to me for any questions or if you just want to have a quick chat</h3>
                <v-icon color="black" id="chatIcon">mdi-chat</v-icon>
                <a target="_blank" href="mailto:tamang.monica@gmail.com">
                    <button><v-icon>mdi-email</v-icon>Email Me</button>
                </a>
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
        }
    }
</script>

<style scoped>
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
        font-family: var(--primaryFont);
        text-transform: uppercase;
        text-align: center;
        font-weight: 400;
        letter-spacing: 4px;
        font-size: 1.8rem;
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
        margin-top: 5vh;
    }

    #quoteRequestContainer > a {
        background: white;
        color: black;
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
        color: black;
    }

    #resumeButton {
        border: 1px solid black;
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
            font-family: var(--primaryFont);
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
            border-right: 1px solid black;
        }

        #quoteRequestContainer {
            background: none;
            margin-top: 0vh;
            row-gap: 50px;
        }

        #quoteRequestContainer button {
            border: 1px solid black;
            width: 100%;
            padding: 5% 2%;
            font-size: 1.2rem;
        }

        #quoteRequestContainer button:hover {
            background: black;
            color: white;
        }

        #quoteRequestContainer > a {
            padding: 0%;
            width: 30%;
        }

        #quoteRequestContainer > a .v-icon {
            margin-left: 10px;
        }

        #quoteRequestContainer button:hover .v-icon {
            color: white;
        }

        #chatIcon {
            display: grid;
            font-size: 5.5rem;
        }

        h3 {
            color: black;
            font-size: 1.2rem;
            padding: 0% 10%;
        }

        h1 {
            font-size: 2rem;
            margin: 3vh 0vw 5vh 0vw;
        }

        .v-icon {
            font-size: 1.4rem;
        }

        a, p {
            font-size: 1.1rem;
        }

        a:hover {
            font-weight: 700;
        }

        #resumeButton {
            padding: 1% 2%;
            font-size: 1rem;
            justify-self: center;
        }

        #resumeButton:hover {
            background: black;
            color: white;
        }
    }
</style>