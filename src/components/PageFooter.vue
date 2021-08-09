<template>
    <article>
        <h1>Want to learn more? Let's Connect!</h1>
        <h2>Feel free to contact me about anything web development related or just to have a quick chat!</h2>
        <router-link to="/Contact" id="contactButton"><button>Contact</button></router-link>
        <div id="linksContainer">
            <a target="_blank" href="mailto:tamang.monica@gmail.com"><v-icon :color="iconColor">mdi-email</v-icon></a>
            <a target="_blank" href="https://github.com/monicatamang/"><v-icon :color="iconColor">mdi-github</v-icon></a>
            <a target="_blank" href="https://www.linkedin.com/in/monicatamang/"><v-icon :color="iconColor">mdi-linkedin</v-icon></a>
        </div>
        <p><v-icon :color="copyrightIconColor" id="copyrightIcon">mdi-copyright</v-icon> 2021 Monica Tamang. All Rights Reserved.</p>
    </article>
</template>

<script>
    export default {
        name: "page-footer",

        data() {
            return {
                iconColor: "white",
                copyrightIconColor: "black"
            }
        }
    }
</script>

<style scoped>
    article {
        display: grid;
        place-items: center;
        border-top: 0.5px solid var(--secondaryColor);
        width: 100%;
        height: 100%;
        padding: 10% 5%;
        row-gap: 30px;
    }

    h1, h2 {
        font-family: var(--primaryFont);
        text-align: center;
    }

    h2 {
        font-weight: 300;
        font-size: 1rem;
    }

    #linksContainer {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
    }

    #linksContainer a {
        text-decoration: none;
        background: var(--primaryColor);
        border-radius: 30px;
        padding: 10%;
    }

    p {
        font-family: var(--primaryFont);
        font-size: 0.8rem;
        letter-spacing: 1px;
        text-align: center;
        font-weight: 400;
    }

    .v-application p {
        margin-bottom: 0px;
    }

    .v-icon {
        font-size: 2rem;
    }

    #copyrightIcon {
        font-size: 1rem;
    }

    #contactButton {
        border: 0.5px solid var(--primaryColor);
        width: 40%;
        padding: 3% 0%;
        text-align: center;
        color: var(--primaryColor);
        font-family: var(--primaryFont);
        margin: 1vh 0vw 2vh 0vw;
    }

    #desktopPhoneNumber {
        display: none;
    }

    @media only screen and (min-width: 768px) {

        article {
            row-gap: 50px;
            padding: 6%;
            position: relative;
            bottom: -6vh;
        }

        .v-icon {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.1rem;
        }

        #copyrightIcon {
            font-size: 1.3rem;
        }
    }

    @media only screen and (min-width: 1024px) {

        article {
            row-gap: 7vh;
            padding: 3%;
            bottom: 0vh;
        }

        #linksContainer {
            width: 30%;
        }

        p {
            font-size: 0.7rem;
        }

        #copyrightIcon {
            font-size: 0.9rem;
        }

        .v-icon {
            font-size: 1.5rem;
        }

        /* .v-icon:hover {
            background: grey;
            border-radius: 2px;
        } */

        #mobilePhoneNumber {
            display: none;
        }

        #desktopPhoneNumber {
            display: grid;
        }

        #desktopPhoneNumber:hover {
            background: none;
        }
    }
</style>