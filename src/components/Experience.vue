<template>
    <div v-for="experience in experiences" :key="experience.id" :class="['experience', { right: !left }]">
        <div class="circle"></div>
        <h4 v-html="experience.date"></h4>
        <img :src="experience.image" :alt="experience.date" />
        <p v-html="experience.description"></p>
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
    }
};
</script>

<style scoped>
.experience {
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
}

.right {
    align-items: flex-start;
}

.right p {
    margin-left: 3rem;
}

.right .circle {
    left: -1.55rem;
}
</style>