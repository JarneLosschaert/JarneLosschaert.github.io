<template>
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
</style>