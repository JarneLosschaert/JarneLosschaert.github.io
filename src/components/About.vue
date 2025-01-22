<template>
    <section id="about">
        <div id="about-text">
            <p id="intro" v-motion-fade :duration="1200" :delay="200">Hi there, 👋 I'm</p>
            <div id="about-title" v-motion-fade :duration="1000" :delay="400">
                <h1 v-html="data.name"></h1>
                <h3 id="tag" v-html="data.tag"></h3>
            </div>
            <p v-html="data.about" v-motion-fade :duration="1000" :delay="600"></p>
            <div id="about-buttons" v-motion-fade :duration="1000" :delay="800">
                <button @click="scrollToSection">
                    <p>Contact Me</p>
                    <SvgIcon name="message" />
                </button>
                <button @click="goToResume">
                    <p>View Resume</p>
                    <SvgIcon name="download" />
                </button>
            </div>
        </div>
        <div id="about-profile" v-motion-pop :duration="1000" :delay="500">
            <div id="about-img">
                <div id="about-images">
                    <img :src="data.images[0]" alt="profile" />
                    <img :src="data.images[1]" alt="profile" />
                </div>
                <div id="about-socials">
                    <div v-for="social in data.socials" :key="social.id" class="social">
                        <a :href="social.link" target="_blank">
                            <SvgIcon :name="social.icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
    methods: {
        scrollToSection(event) {
            event.preventDefault();
            const targetElement = document.getElementById("contact");
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 50;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        },
        goToResume() {
            window.open('./Jarne-Losschaert-CV.pdf', '_blank');
        }
    },
    components: {
        SvgIcon
    },
};
</script>

<style scoped>
#about {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}

#about-text {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

#about-title {
    padding-bottom: 0.5rem;
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
    padding: 1rem;
    background-color: var(--white);
    box-shadow: var(--shadow-l);
    transform: rotate(15deg);
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

#about-images {
    position: relative;
    width: 16rem;
    height: 22rem;
    transform-style: preserve-3d;
    perspective: 1000px;
}

#about-images img {
    height: 22rem;
    object-fit: cover;
    position: absolute;
    backface-visibility: hidden;
    transition: 1s;
}

#about-images img:nth-child(2) {
    transform: rotateY(180deg);
}

#about-images:hover img:nth-child(2) {
    transform: rotateY(0deg);
}

#about-images:hover img:nth-child(1) {
    transform: rotateY(-180deg)
}

@media (max-width: 1000px) {
    #about {
        align-items: center;
        gap: 2rem;
    }

    #about h1 {
        font-size: 2rem;
    }

    #tag {
        font-size: 1.25rem;
    }

    #intro {
        font-size: 1rem;
    }

    #about-text {
        width: 100%;
    }

    #about-buttons {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 1rem;
    }

    #about-img {
        transform: rotate(0deg);
    }
}

@media (max-width: 450px) {
    #about-profile {
        display: none;
    }
}
</style>