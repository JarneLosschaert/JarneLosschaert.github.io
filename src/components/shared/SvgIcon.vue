<script>
import { defineAsyncComponent } from 'vue';

export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        public: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        dynamicComponent() {
            const name = this.name;
            const url = this.public ? `./${name}.vue` : `../../assets/icons/${name}.vue`;

            return defineAsyncComponent(() => import(url));
        },
    },
};
</script>

<template>
    <component :is="dynamicComponent" />
</template>
