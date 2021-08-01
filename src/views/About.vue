<template>
    <section>
        <mobile-nav-bar :isHomePage="false"></mobile-nav-bar>
        <article>
            <h1>About</h1>
            <p>My name is Monica Tamang and I’m a Full-Stack Developement graduate from InnoTech College. Prior to attending InnoTech, I had graduated from the University of Calgary in 2020 with a bachelor’s degree in Chemical Engineering and earned my Engineer-in-Training (EIT) and Environmental Professional-in-Training (EPt) designation.</p>
            <p>I initially enrolled in the accelerated Full-Stack Development Diploma Program to upskill and further expand my career path. However, as I’ve built more projects over time, I’ve not only developed strengths markup languages and object-oriented programming, but also found myself to enjoy building innovative websites that people can interact with and being able to project the client’s vision onto a blank “canvas” that I can draw on using numbers and variables.</p>
            <p>After seeing myself evolve from an individual with no prior experience in web development to someone who has gained valuable hands-on experience in front-end and back-end development within a short period of time, I aspire to have a career where I’m continuously building impactful websites that creates positive user experiences and optimizes business growth through design, creativity and innovation.</p>
        </article>
    </section>
</template>

<script>
    import MobileNavBar from "../components/MobileNavBar.vue";

    export default {
        name: "About",

        components: {
            MobileNavBar,
        }
    }
</script>

<style scoped>
    section {
        text-align: left;
        display: grid;
        place-items: center;
    }

    article {
        display: grid;
        place-items: center;
        margin: 11vh 0vw 1vh 0vw;
        padding: 0vh 6vw;
    }

    h1 {
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 4px;
        font-size: 1.8rem;
        margin-bottom: 3vh;
        text-align: center;
        font-family: var(--primaryFont);
    }

    p {
        font-family: var(--primaryFont);
        font-weight: 300;
    }
</style>