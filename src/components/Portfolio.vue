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
                        <div id="about-socials">
                            <div v-for="social in data.socials" :key="social.id" class="social">
                                <a :href="social.link">
                                    <SvgIcon :name="social.icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="experience">
                <h2>My <span>Experience</span> So Far</h2>
                <div id="experiences">
                    <div id="experience-left">
                        <div v-for="experience in oddExperiences" :key="experience.id" class="experience">
                            <div class="circle"></div>
                            <h4 v-html="experience.date"></h4>
                            <img :src="experience.image" :alt="experience.date" />
                            <p v-html="experience.description"></p>
                        </div>
                    </div>
                    <hr>
                    <div id="experience-right">
                        <div v-for="experience in evenExperiences" :key="experience.id" class="experience">
                            <div class="circle"></div>
                            <h4 v-html="experience.date"></h4>
                            <img :src="experience.image" :alt="experience.date" />
                            <p v-html="experience.description"></p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="skills">
                <h2><span>Skills</span> That I've Acquired</h2>
                <div>
                    <div v-for="skill in data.skills" :key="skill.id" class="skill">
                        <SvgIcon :name="skill.icon" />
                        <p v-html="skill.name"></p>
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
                            <div class="project-tags">
                                <div v-for="(tag, index) in project.tags" :key="tag.id">
                                    <p v-html="tag.name"></p>
                                    <p v-if="index < project.tags.length - 1">~</p>
                                </div>
                            </div>
                            <div class="project-links">
                                <div v-for="link in project.links" :key="link.id">
                                    <a :href="link.link">
                                        <SvgIcon :name="link.icon" />
                                    </a>
                                </div>
                            </div>
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
            data: portfolioData
        };
    },
    computed: {
        oddExperiences() {
            return this.data.experience.filter((_, index) => index % 2 === 0);
        },
        evenExperiences() {
            return this.data.experience.filter((_, index) => index % 2 !== 0);
        }
    },
    components: {
        SvgIcon
    },
};
</script>

<style scoped>
/* EXPERIENCE */

#experiences {
    padding: 0 5rem;
    display: flex;
    gap: 1rem;
}

#experiences hr {
    background-color: var(--light-gray);
    color: var(--light-gray);
    border-color: var(--light-gray);
    border-radius: var(--border-radius-l);
}

#experiences>div {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

#experience-left p {
    margin-right: 3rem;
}

#experience-left .experience {
    align-items: flex-end;
}

#experience-left .circle {
    right: -1.55rem;
}

#experience-right {
    margin-top: 10rem;
}

#experience-right p {
    margin-left: 3rem;
}

#experience-right .circle {
    left: -1.55rem;
}

.experience {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
}

.experience p {
    margin-top: 10rem;
    z-index: 988;
    padding: 1rem;
    background-color: var(--dark-grey-trans);
    border-radius: var(--border-radius-l);
    color: var(--white);
    transition: var(--hover-transition-s);
}

.experience p:hover {
    transform: translateY(-0.25rem);
    transition: var(--hover-transition);
}

.experience img {
    position: absolute;
    top: 3rem;
    height: 15rem;
    max-width: 80%;
    object-fit: cover;
    border-radius: var(--border-radius-l);
    box-shadow: var(--shadow-l);
    transition: var(--hover-transition-s);
}

.experience img:hover {
    transform: scale(1.025);
    transition: var(--hover-transition);
}

.experience .circle {
    position: absolute;
    top: 1.25rem;
    height: 1rem;
    width: 1rem;
    background-color: var(--green);
    border-radius: 50%;
}

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

.project>div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 998;
}

.project:nth-child(even) div {
    align-items: end;
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
    display: flex;
    gap: 0.5rem;
    color: var(--green);
}

.project-tags div {
    display: flex;
    gap: 0.5rem;
}

.project-tags p {
    color: var(--green);
}

.project-links {
    display: flex;
    gap: 1rem;
}

.project svg {
    height: 1.75rem;
    width: 1.75rem;
    fill: var(--white);
}

.project a {
    width: fit-content;
}

.project img {
    position: absolute;
    right: 0;
    height: 20rem;
    box-shadow: var(--shadow);
    border-radius: var(--border-radius-l);
    transition: var(--hover-transition-s);
}

.project:nth-child(even) img {
    left: 0;
}

.project img:hover {
    box-shadow: none;
    transform: scale(1.025);
    transition: var(--hover-transition);
}

/* SKILLS */

#skills div {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.skill {
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

.skill svg {
    width: 3rem;
    height: 3rem;
    fill: var(--light-grey);
    stroke: var(--light-gray);
    transition: var(--hover-transition-s);
}

.skill p {
    transition: var(--hover-transition-s);
}

.skill:hover {
    transform: scale(1.05);
    box-shadow: none;
    transition: var(--hover-transition);
}

.skill:hover p,
.skill:hover svg {
    color: var(--white);
    fill: var(--white);
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
    padding: 1rem 1rem 1rem 1rem;
    background-color: var(--white);
    box-shadow: var(--shadow-l);
    transform: rotate(15deg);
}

#about-img img {
    height: 22rem;
}

#about-socials {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
}

#about-socials svg {
    height: 2.25rem;
    width: 2.25rem;
    fill: var(--dark-grey-trans);
    color: var(--dark-grey-trans);
    transition: var(--hover-transition-s);
}

#about-socials svg:hover {
    fill: var(--green);
    color: var(--green);
    transition: var(--hover-transition);
}

/* MAIN */

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

/* HEADER */

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

/* GENERAL */

@font-face {
    font-family: "Syncopate";
    src: url(../assets/fonts/syncopate/Syncopate-Bold.ttf);
}

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
    color: var(--white);
}

h2,
h2 span {
    font-family: "Syncopate", serif;
    text-transform: uppercase;
    text-align: center;
    padding: 5rem 0 4rem 0;
    font-size: 2rem;
    font-weight: 600;
}

h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--white);
}

h4 {
    color: var(--green);
    font-weight: 600;
    text-transform: uppercase;
}
</style>
