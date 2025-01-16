<template>
    <section>
        <h2>My <span>Experience</span> So Far</h2>
        <div id="experiences">
            <div>
                <Experience :experiences="oddExperiences" />
            </div>
            <hr>
            <div id="experiences-right">
                <Experience :experiences="evenExperiences" :left="false"/>
            </div>
        </div>
    </section>
</template>

<script>
import { portfolioData } from '../data/data.js';
import SvgIcon from './shared/SvgIcon.vue';
import Experience from './Experience.vue';

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
        SvgIcon,
        Experience
    },
};
</script>

<style scoped>
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
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

#experiences-right {
    margin-top: 12rem;
}
</style>