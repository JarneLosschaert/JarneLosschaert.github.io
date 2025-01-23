<template>
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
</template>

<script>
import { portfolioData } from '../../data/data.js';
import SvgIcon from './SvgIcon.vue';

export default {
    data() {
        return {
            data: portfolioData,
            currentSection: ''
        };
    },
    components: {
        SvgIcon
    }
};
</script>

<style scoped>
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

footer svg:hover {
    fill: var(--green);
    color: var(--green);
    transition: var(--hover-transition);
}

@media (max-width: 850px) {
    footer svg {
        height: 2rem;
        width: 2rem;
    }
}
</style>