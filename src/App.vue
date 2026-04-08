<template>
    <MainPage />
</template>

<script setup>

import MainPage from './components/MainPage.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { trackPageView } from './analytics.js'
import { onMounted } from 'vue'

onMounted(() => {
    trackPageView(window.location.pathname)
})

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

</style>
