<template>
    <section id="contact">
        <h2 v-motion-slide-visible-once-bottom :duration="1000"><span>Get In Touch</span></h2>
        <form v-motion-slide-visible-once-bottom :duration="1000" @submit.prevent="sendEmail">
            <div>
                <input type="text" v-model="form.name" placeholder="Name" required />
                <input type="email" v-model="form.email" placeholder="Email" required />
            </div>
            <textarea v-model="form.message" placeholder="Message" required></textarea>
            <button type="submit">
                <p>Send</p>
                <SvgIcon name="send" />
            </button>
        </form>
    </section>
</template>

<script>
import { portfolioData } from '../data/data.js';
import SvgIcon from './shared/SvgIcon.vue';
import emailjs from 'emailjs-com';

export default {
    data() {
        return {
            data: portfolioData,
            form: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    components: {
        SvgIcon
    },
    methods: {
        sendEmail() {
            const serviceID = import.meta.env.VITE_SERVICE_ID;
            const templateID = import.meta.env.VITE_TEMPLATE_ID;
            const userID = import.meta.env.VITE_USER_ID;

            console.log(serviceID, templateID, userID);

            emailjs.send(serviceID, templateID, this.form, userID)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Message sent successfully!');
                    this.form.name = '';
                    this.form.email = '';
                    this.form.message = '';
                }, (error) => {
                    console.log('FAILED...', error);
                    alert('Failed to send message. Please try again later.');
                });
        }
    }
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