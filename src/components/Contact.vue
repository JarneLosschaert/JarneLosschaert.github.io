<template>
    <section id="contact">
        <h2 v-motion-slide-visible-once-bottom :duration="1000"><span>Get In Touch</span></h2>
        <form v-motion-slide-visible-once-bottom :duration="1000" @submit.prevent="sendEmail">
            <div>
                <input type="text" v-model="form.name" placeholder="Name" required />
                <input type="email" v-model="form.email" placeholder="Email" required />
            </div>
            <textarea v-model="form.message" placeholder="Message" required></textarea>
            <button type="submit" :disabled="loading">
                <p>Send</p>
                <SvgIcon name="send" v-if="!loading" />
                <SvgIcon name="spinner" v-if="loading" />
            </button>
            <p v-if="message" v-motion-slide-visible-left :duration="1000">{{ message }}</p>
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
            loading: false,
            message: '',
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

            this.loading = true;

            emailjs.send(serviceID, templateID, this.form, userID)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    this.message = 'Message sent successfully!';
                    this.form.name = '';
                    this.form.email = '';
                    this.form.message = '';
                    this.endMail();
                }, (error) => {
                    console.log('FAILED...', error);
                    this.message = 'Failed to send message. Please try again later.';
                    this.endMail();
                }
            );
        },
        endMail() {
            this.loading = false;
            setTimeout(() => {
                this.message = '';
            }, 5000);
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
    width: 60vw;
    max-width: 40rem;
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

@media (max-width: 850px) {
    #contact form {
        width: 80vw;
    }

    div {
        flex-direction: column;
    }

    input {
        width: 100%;
        box-sizing: border-box;
    }
}
</style>