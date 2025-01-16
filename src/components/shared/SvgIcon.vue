<script>
import { defineAsyncComponent } from 'vue';

const icons = {
    // General
    'download': () => import('../../assets/icons/download.vue'),
    'message': () => import('../../assets/icons/message.vue'),
    'send': () => import('../../assets/icons/send.vue'),
    'less': () => import('../../assets/icons/less.vue'),
    'more': () => import('../../assets/icons/more.vue'),
    // Socials
    'github': () => import('../../assets/icons/socials/github.vue'),
    'linkedin': () => import('../../assets/icons/socials/linkedin.vue'),
    'spotify': () => import('../../assets/icons/socials/spotify.vue'),
    'instagram': () => import('../../assets/icons/socials/instagram.vue'),
    // Skills
    'javascript': () => import('../../assets/icons/skills/javascript.vue'),
};

export default {
    props: {
        name: {
            type: String,
            required: true,
        }
    },

    computed: {
        dynamicComponent() {
            const name = this.name;
            return defineAsyncComponent(icons[name]);
        },
    },
};
</script>

<template>
    <component :is="dynamicComponent" />
</template>
