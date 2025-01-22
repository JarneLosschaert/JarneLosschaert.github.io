<template>
    <div id="portfolio">
        <header v-motion-slide-top :duration="1000">
            <a href="#portfolio" @click="scrollToSection"><img src="../assets/logo.png" alt="logo" /></a>
            <nav>
                <ul>
                    <li :class="{ active: currentSection === 'about' }"><a href="#portfolio"
                            @click="scrollToSection">About</a></li>
                    <li :class="{ active: currentSection === 'experiences' }"><a href="#experiences"
                            @click="scrollToSection">Experience</a></li>
                    <li :class="{ active: currentSection === 'skills' }"><a href="#skills"
                            @click="scrollToSection">Skills</a></li>
                    <li :class="{ active: currentSection === 'projects' }"><a href="#projects"
                            @click="scrollToSection">Projects</a></li>
                    <li :class="{ active: currentSection === 'contact' }"><a href="#contact"
                            @click="scrollToSection">Contact Me</a></li>
                    <button @click="goToResume">
                        <p>Resume</p>
                        <SvgIcon name="download" />
                    </button>
                </ul>
            </nav>
        </header>
        <main>
            <About id="about" />
            <Experiences id="experiences" />
            <Skills id="skills" />
            <Projects id="projects" />
            <Contact id="contact" />
        </main>
        <footer>
            <span>&copy; 2025 - Jarne Losschaert</span>
            <div>
                <div v-for="social in data.socials" :key="social.id" class="social">
                    <a :href="social.link" target="_blank">
                        <SvgIcon :name="social.icon" />
                    </a>
                </div>
            </div>
        </footer>
        <a href="#portfolio" @click="scrollToSection" id="up" v-motion-roll-visible-bottom :duration="1000">
            <SvgIcon name="less" />
        </a>
    </div>
</template>

<script>
import { portfolioData } from '../data/data.js';
import SvgIcon from './shared/SvgIcon.vue';
import About from './About.vue';
import Experiences from './Experiences.vue';
import Skills from './Skills.vue';
import Projects from './Projects.vue';
import Contact from './Contact.vue';

export default {
    data() {
        return {
            data: portfolioData,
            currentSection: ''
        };
    },
    methods: {
        scrollToSection(event) {
            event.preventDefault();
            const target = event.target.closest('a');
            const targetId = target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 50;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        },
        updateCurrentSection() {
            const sections = ['about', 'experiences', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
                    this.currentSection = section;
                    const $up = document.getElementById('up');
                    if (section === 'about') {
                        $up.classList.add('hidden');
                    } else {
                        $up.classList.remove('hidden');
                    }
                    break;
                }
            }
        },
        goToResume() {
            window.open('./Jarne-Losschaert-CV.pdf', '_blank');
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateCurrentSection);
        this.updateCurrentSection();
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.updateCurrentSection);
    },
    components: {
        SvgIcon,
        About,
        Experiences,
        Skills,
        Projects,
        Contact
    }
};
</script>

<style scoped>
#portfolio {
    display: flex;
    flex-direction: column;
    align-items: center;
}

main {
    width: 85vw;
    max-width: 75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 5rem;
    margin-top: 5rem;
}

header {
    position: fixed;
    z-index: 999;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--blue);
    box-shadow: var(--shadow);
}

header img {
    margin-left: 4rem;
    width: 3rem;
}

header nav ul {
    padding: 1rem 4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}

header a {
    padding: 0 0.5rem;
    color: var(--white);
    transition: var(--hover-transition-s);
}

header nav ul li a:hover {
    color: var(--green);
    transition: var(--hover-transition);
}

.active a {
    color: var(--green);
    transition: var(--hover-transition);
    position: relative;
}

.active a:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 7px;
    width: 100%;
    border: solid 2px var(--green);
    border-color: var(--green) transparent transparent transparent;
    border-radius: 50%;
}

footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    width: 100%;
    background-color: var(--blue);
    box-shadow: var(--shadow);
    text-align: center;
}

footer div {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

footer svg {
    height: 2.25rem;
    width: 2.25rem;
    fill: var(--light-grey);
    color: var(--light-grey);
    transition: var(--hover-transition-s);
}

svg path {
    fill: var(--blue);
}

footer svg:hover {
    fill: var(--green);
    color: var(--green);
    transition: var(--hover-transition);
}

#up {
    display: flex;
    background-color: var(--green);
    padding: 1rem;
    position: fixed;
    bottom: 5.5rem;
    right: 2rem;
    border-radius: 50%;
}

#up svg {
    height: 1rem;
    width: 1rem;
    fill: var(--white);
}

@media (max-width: 850px) {
    header {
        display: none;
    }

    main {
        width: 90vw;
        margin-top: 0;
        padding: 2rem 0rem;
    }

    #up {
        padding: 0.75rem;
        bottom: 3rem;
        right: 1rem;
    }

    #up svg {
        height: 0.75rem;
        width: 0.75rem;
    }

    footer svg {
        height: 2rem;
        width: 2rem;
    }
}

</style>
