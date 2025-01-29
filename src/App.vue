<template>
    <RouterView v-cloak />
</template>

<script setup>
import { RouterView } from 'vue-router';
import './reset.css'
import './style.css'
</script>

<style scoped>
[v-cloak]>* {
    display: none
}

[v-cloak]::before {
    content: "Loading…"
}
</style>