<template>
    <section id="skills">
        <h2 v-motion-slide-visible-once-bottom :duration="1000"><span>Skills</span> That I've Acquired</h2>
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
</style>