<template>
    <article>
        <div id="linksContainer">
            <a href="mailto:tamang.monica@gmail.com"><v-icon color="white">mdi-email</v-icon></a>
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
        grid-template-columns: repeat(3, 1fr);
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
</style>