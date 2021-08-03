<template>
    <article>
        <div id="linksContainer">
            <a href="mailto:tamang.monica@gmail.com"><v-icon color="white">mdi-email</v-icon></a>
            <a href="tel:4034776231" id="mobilePhoneNumber"><v-icon color="white">mdi-phone</v-icon></a>
            <v-icon color="white" id="desktopPhoneNumber">mdi-phone</v-icon>
            <a href="https://github.com/monicatamang/"><v-icon color="white">mdi-github</v-icon></a>
            <a href="https://www.linkedin.com/in/monicatamang/"><v-icon color="white">mdi-linkedin</v-icon></a>
        </div>
        <p><v-icon color="white" id="copyrightIcon">mdi-copyright</v-icon> 2021 Monica Tamang. All Rights Reserved.</p>
    </article>
</template>

<script>
    export default {
        name: "page-footer"
    }
</script>

<style scoped>
    article {
        display: grid;
        place-items: center;
        background: black;
        width: 100%;
        height: 100%;
        padding: 10% 5%;
        row-gap: 30px;
    }

    #linksContainer {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
    }

    a, p {
        color: white;
    }

    a {
        text-decoration: none;
    }

    p {
        font-family: var(--primaryFont);
        font-size: 0.8rem;
        letter-spacing: 1px;
        text-align: center;
        font-weight: 300;
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

        .v-icon:hover {
            background: grey;
            border-radius: 2px;
        }

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