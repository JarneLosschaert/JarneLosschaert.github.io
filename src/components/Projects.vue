<template>
    <section id="projects">
        <h2 v-motion-slide-visible-once-bottom :duration="1000"><span>Projects</span> That I've Built</h2>
        <div>
            <div v-for="(project, index) in displayedProjects" :key="project.id" class="project">
                <Motion :initial="{ opacity: 0, x: getInitialX(index) }" :visible-once="{ opacity: 1, x: 0, scale: 1 }"
                    :duration="1000">
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
                </Motion>
            </div>
            <button @click="toggleProjects">
                <p>{{ showAll ? 'Show Less' : 'Show All Projects' }}</p>
                <SvgIcon :name="showAll ? 'less' : 'more'" />
            </button>
        </div>
    </section>
</template>

<script>
import { portfolioData } from '../data/data.js';
import SvgIcon from './shared/SvgIcon.vue';

export default {
    data() {
        return {
            data: portfolioData,
            displayedProjects: [],
            showAll: false,
        };
    },
    components: {
        SvgIcon
    },
    methods: {
        toggleProjects() {
            this.showAll = !this.showAll;
            this.displayedProjects = this.showAll ? this.data.projects : this.data.projects.slice(0, 3);
            if (this.showAll) {
                setTimeout(() => {
                    const projects = document.querySelectorAll('.project');
                    const targetElement = projects[3];
                    this.scrollToSection(targetElement);
                }, 100);
            } else {
                const projects = document.querySelectorAll('.project');
                const targetElement = projects[2];
                this.scrollToSection(targetElement);
            }

        },
        getInitialX(index) {
            return index % 2 === 0 ? 100 : -100;
        },
        scrollToSection(targetElement) {
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 200;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    },
    mounted() {
        this.displayedProjects = this.data.projects.slice(0, 3);
    },
};
</script>

<style scoped>
#projects>div {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.project:nth-child(even) div {
    justify-content: flex-end;
    text-align: right;
}

.project>div {
    position: relative;
    height: 20rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    padding: 1rem 2rem;
    margin: 0 10rem;
}

.project>div>div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 998;
}

.project:nth-child(even)>div div {
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

button {
    margin: 0 auto;
}
</style>