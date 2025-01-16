<template>
    <div id="portfolio">
        <header>
            <a href="#">
                <img src="../assets/logo.png" alt="logo" />
            </a>
            <nav>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                    <button>
                        <p>Resume</p>
                        <SvgIcon name="download" />
                    </button>
                </ul>
            </nav>
        </header>
        <main>
            <About />
            <Experiences />
            <Skills />
            <Projects />
        </main>
    </div>
</template>

<script>
import { portfolioData } from '../data/data.js';
import SvgIcon from './shared/SvgIcon.vue';
import About from './About.vue';
import Experiences from './Experiences.vue';
import Skills from './Skills.vue';
import Projects from './Projects.vue';

export default {
    data() {
        return {
            data: portfolioData
        };
    },
    components: {
        SvgIcon,
        About,
        Experiences,
        Skills,
        Projects
    },
};
</script>

<style scoped>
#portfolio {
    display: flex;
    flex-direction: column;
    align-items: center;
}

main {
    width: 80rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 5rem;
    margin-top: 5rem;
}

header {
    position: fixed;
    z-index: 999;
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--blue);
    padding: 1rem 4rem;
    box-shadow: var(--shadow);
}

header img {
    width: 4rem;
}

header nav ul {
    display: flex;
    align-items: center;
    gap: 2rem;
}

header a {
    transition: var(--hover-transition-s);
}

header nav ul li a:hover {
    color: var(--green);
    transition: var(--hover-transition);
}

</style>
