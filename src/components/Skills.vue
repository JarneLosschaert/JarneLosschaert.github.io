<template>
    <section id="skills">
        <h2 v-motion-slide-visible-once-bottom :duration="1000"><span>Skills</span> I've Learned</h2>
        <div v-motion-slide-visible-once-bottom :duration="1000">
            <div v-for="skill in data.skills" :key="skill.id" class="skill">
                <SvgIcon :name="skill.icon" />
                <p v-html="skill.name"></p>
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
    padding: 1rem 2rem;
    background-color: var(--dark-grey);
    border-radius: var(--border-radius-l);
    cursor: default;
    box-shadow: var(--shadow);
    transition: var(--hover-transition-s);
}

.skill svg {
    width: 3rem;
    height: 3rem;
    transition: var(--hover-transition-s);
}

.skill p {
    text-align: center;
    transition: var(--hover-transition-s);
}

.skill:hover {
    transform: scale(1.05);
    box-shadow: none;
    transition: var(--hover-transition);
}

.skill:hover p {
    color: var(--white);
    transition: var(--hover-transition);
}

@media (max-width: 850px) {
    #skills div {
        gap: 0.75rem;
    }

    .skill {
        padding: 1rem;
        width: 7rem;
        gap: 1rem;
    }

    .skill svg {
        width: 2rem;
        height: 2rem;
    }
}

@media (max-width: 450px) {
    .skill {
        width: 5rem;
    }
}
</style>