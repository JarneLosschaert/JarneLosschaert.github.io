<template>
    <div v-for="experience in experiences" :key="experience.id" :class="['experience', { right: !left }]">
        <Motion :initial="{ opacity: 0, x: initialX }" :visible-once="{ opacity: 1, x: 0, scale: 1 }" :duration="1000">
            <div class="circle"></div>
            <h4 v-html="experience.date"></h4>
            <img :src="experience.image" :alt="experience.date" />
            <p v-html="experience.description"></p>
        </Motion>
    </div>
</template>

<script>
export default {
    props: {
        experiences: {
            type: Array,
            required: true
        },
        left: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        initialX() {
            const screenWidth = window.innerWidth;
            let margin = screenWidth * 0.05;
            if (screenWidth <= 1000) {
                margin = screenWidth * 0.01;
            }
            return this.left ? -margin : margin;
        }
    }
};
</script>

<style scoped>
.experience>div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    padding: 1rem;
}

.experience p {
    margin-top: 10rem;
    margin-right: 3rem;
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
    max-width: 75%;
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
    right: -1.55rem;
    height: 1rem;
    width: 1rem;
    background-color: var(--green);
    border-radius: 50%;
    z-index: 998;
}

.right>div {
    align-items: flex-start;
}

.right p {
    margin-right: 0;
    margin-left: 3rem;
}

.right .circle {
    left: -1.55rem;
}

@media (max-width: 1000px) {
    .experience img {
        height: 10rem;
    }

    .experience p {
        margin-top: 5rem;
    }

    .circle {
        display: none;
    }
}

@media (max-width: 450px) {
    .experience p {
        margin-left: 0.5rem;
    }

    .experience img {
        left: 1rem;
    }
}
</style>