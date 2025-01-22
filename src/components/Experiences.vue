<template>
    <section id="experiences">
        <h2 v-motion-slide-visible-once-bottom :duration="1000">My <span>Experience</span> So Far</h2>
        <div id="experiences-split">
            <div class="experience-list">
                <Experience :experiences="oddExperiences" />
            </div>
            <hr v-motion-slide-visible-once-bottom :duration="1000">
            <div class="experience-list" id="experiences-right">
                <Experience :experiences="evenExperiences" :left="false"/>
            </div>
        </div>
        <div id="experiences-full">
            <div class="experience-list">
                <Experience :experiences="data.experience" :left="false"/>
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
#experiences #experiences-split {
    padding: 0 2rem;
    display: flex;
    gap: 1rem;
}

#experiences hr {
    background-color: var(--light-gray);
    color: var(--light-gray);
    border-color: var(--light-gray);
    border-radius: var(--border-radius-l);
    z-index: -1;
}

.experience-list {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

#experiences-right {
    margin-top: 14rem;
}

#experiences-full {
    display: none;
}

@media (max-width: 1000px) {
    #experiences-full {
        display: flex;
    }

    #experiences #experiences-split {
        display: none;
    }

    #experiences hr {
        width: 100%;
    }

    .experience-list {
        width: 100%;
        gap: 1rem;
    }

    #experiences-right {
        margin-top: 0;
    }
}
</style>