<template>
    <div id="portfolio">
        <header>
            <a href="#">
                <img src="../assets/logo.png" alt="logo" />
            </a>
            <nav>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#technologies">Technologies</a></li>
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
            <section id="about">
                <div id="about-text">
                    <p id="intro">Hi there, 👋 I'm</p>
                    <div>
                        <h1 v-html="data.name"></h1>
                        <h3 id="tag" v-html="data.tag"></h3>
                    </div>
                    <p v-html="data.about"></p>
                    <div id="about-buttons">
                        <button>
                            <p>Contact Me</p>
                            <SvgIcon name="message" />
                        </button>
                        <button>
                            <p>View Resume</p>
                            <SvgIcon name="download" />
                        </button>
                    </div>
                </div>
                <div id="about-profile">
                    <div id="about-img">
                        <img :src="data.profile" alt="profile" />
                    </div>
                </div>
            </section>
            <section id="technologies">
                <h2><span>Technologies</span> That I Use</h2>
                <div>
                    <div v-for="tech in data.technologies" :key="tech.id" class="tech">
                        <img :src="tech.icon" :alt="tech.name" />
                        <p v-html="tech.name"></p>
                    </div>
                </div>
            </section>
            <section id="projects">
                <h2><span>Projects</span> That I've Built</h2>
                <div>
                    <div v-for="project in data.projects" :key="project.id" class="project">
                        <img :src="project.image" :alt="project.name" />
                        <div>
                            <h3 v-html="project.title"></h3>
                            <p v-html="project.description" class="project-description"></p>
                            <p v-html="project.tags" class="project-tags"></p>
                            <a href="project.link"><SvgIcon name="github" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { portfolioData } from '../data/data.js';
import SvgIcon from './shared/SvgIcon.vue';

export default {
    data() {
        return {
            data: portfolioData,
        };
    },
    components: {
        SvgIcon
    },
    methods: {
    }
};
</script>

<style scoped>

/* PROJECTS */

#projects>div {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.project:nth-child(even) {
    justify-content: flex-end;
    text-align: right;
}

.project {
    position: relative;
    height: 20rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    padding: 1rem 2rem;
    margin: 0 10rem;
}

.project div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 999;
}

.project-description {
    padding: 1rem;
    background-color: var(--dark-grey-trans);
    border-radius: var(--border-radius-l);
    text-align: left;
    color: var(--white);
    transition: var(--hover-transition-s);
}

.project-description:hover {
    transform: translateY(-0.25rem);
    transition: var(--hover-transition);
}

.project-tags {
    color: var(--green);
}

.project svg {
    height: 2rem;
    width: 2rem;
    fill: var(--white);
}

.project img {
    position: absolute;
    right: 0;
    height: 20rem;
    border-radius: var(--border-radius-l);
    transition: var(--hover-transition-s);
}

.project:nth-child(even) img {
    left: 0;
}

.project img:hover {
    transform: scale(1.05);
    transition: var(--hover-transition);
}

/* TECHNOLOGIES */

#technologies div {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.tech {
    width: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 1rem 3rem;
    background-color: var(--dark-grey);
    border-radius: var(--border-radius-l);
    cursor: pointer;
    box-shadow: var(--shadow);
    transition: var(--hover-transition-s);
}

.tech img {
    width: 3rem;
}

.tech:hover {
    transform: scale(1.05);
    box-shadow: none;
    transition: var(--hover-transition);
}

/* ABOUT */

#about {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}

#about-text {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

#intro {
    font-size: 1.25rem;
    color: var(--green);
    font-weight: 600;
}

#about h1 {
    font-size: 3rem;
    font-weight: 600;
    color: var(--white);
}

#about-buttons {
    display: flex;
    gap: 1rem;
}

#about-profile {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#about-img {
    padding: 1rem 1rem 4rem 1rem;
    background-color: var(--white);
    box-shadow: var(--shadow-l);
    transform: rotate(15deg);
}

#about-img img {
    height: 20rem;
}

/* MAIN */

main {
    display: flex;
    flex-direction: column;
    padding: 3rem 5rem;
}

/* HEADER */

header {
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

header nav ul li a:hover {
    color: var(--green);
    transition: var(--hover-transition);
}

/* GENERAL */

button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: var(--dark-grey);
    padding: 0.75rem 1.25rem;
    border-radius: var(--border-radius);
    cursor: pointer;
}

button p {
    color: var(--white);
}

button svg {
    width: 1.25rem;
    height: 1.25rem;
    stroke: var(--white);
    color: var(--white);
}

button:hover {
    background: var(--green-trans);
    transition: var(--hover-transition);
}

h2 {
    text-align: center;
    padding: 5rem 0 4rem 0;
    font-size: 2rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    color: var(--white);
}

h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--white);
}
</style>
