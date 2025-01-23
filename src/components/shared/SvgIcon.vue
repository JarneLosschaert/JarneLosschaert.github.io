<script>
import { defineAsyncComponent } from 'vue';

const icons = {
    // General
    'download': () => import('../../assets/icons/download.vue'),
    'message': () => import('../../assets/icons/message.vue'),
    'send': () => import('../../assets/icons/send.vue'),
    'less': () => import('../../assets/icons/less.vue'),
    'more': () => import('../../assets/icons/more.vue'),
    'home': () => import('../../assets/icons/home.vue'),
    // Socials
    'github': () => import('../../assets/icons/socials/github.vue'),
    'linkedin': () => import('../../assets/icons/socials/linkedin.vue'),
    'spotify': () => import('../../assets/icons/socials/spotify.vue'),
    'instagram': () => import('../../assets/icons/socials/instagram.vue'),
    'youtube': () => import('../../assets/icons/socials/youtube.vue'),
    // Skills
    'html': () => import('../../assets/icons/skills/html.vue'),
    'css': () => import('../../assets/icons/skills/css.vue'),
    'sass': () => import('../../assets/icons/skills/sass.vue'),
    'javascript': () => import('../../assets/icons/skills/javascript.vue'),
    'typescript': () => import('../../assets/icons/skills/typescript.vue'),
    'vue': () => import('../../assets/icons/skills/vue.vue'),
    'net': () => import('../../assets/icons/skills/net.vue'),
    'blazor': () => import('../../assets/icons/skills/blazor.vue'),
    'java': () => import('../../assets/icons/skills/java.vue'),
    'sql': () => import('../../assets/icons/skills/sql.vue'),
    'kotlin': () => import('../../assets/icons/skills/kotlin.vue'),
    'angular': () => import('../../assets/icons/skills/angular.vue'),
    'flutter': () => import('../../assets/icons/skills/flutter.vue'),
    'python': () => import('../../assets/icons/skills/python.vue'),
    'git': () => import('../../assets/icons/skills/git.vue'),
    'csharp': () => import('../../assets/icons/skills/csharp.vue'),
    'android': () => import('../../assets/icons/skills/android.vue'),
    'docker': () => import('../../assets/icons/skills/docker.vue'),
    'figma': () => import('../../assets/icons/skills/figma.vue'),
    'laravel': () => import('../../assets/icons/skills/laravel.vue'),
}

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
