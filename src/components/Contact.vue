<template>
    <section id="contact">
        <h2 v-motion-slide-visible-once-bottom :duration="1000"><span>Get In Touch</span></h2>
        <form v-motion-slide-visible-once-bottom :duration="1000">
            <div>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button>
                <p>Send</p>
                <SvgIcon name="send" />
            </button>
        </form>
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
#contact {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#contact form {
    width: 40vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#contact h2 {
    padding-bottom: 1rem;
}

form div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

input {
    width: 100%;
}

input,
textarea {
    padding: 1rem;
    border: none;
    border-radius: var(--border-radius);
    background-color: var(--dark-grey);
    color: var(--white);
}

textarea {
    height: 10rem;
    resize: vertical;
}

input::placeholder,
textarea::placeholder {
    color: var(--light-grey);
}

input:focus,
textarea:focus {
    outline: var(--green) auto 0.25rem;
    border-color: var(--green);
    box-shadow: var(--shadow-l);
}

button {
    justify-content: center;
}
</style>