<template>
    <MainPage />
</template>

<script setup>

import MainPage from './components/MainPage.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'



</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Mosk, sans-serif;
}

body {
    background-color: #f6f0f0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%23f2e2b1' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M5 3.59L1.46.05.05 1.46 3.59 5 .05 8.54l1.41 1.41L5 6.41l3.54 3.54 1.41-1.41L6.41 5l3.54-3.54L8.54.05 5 3.59zM17 2h24v2H17V2zm0 4h24v2H17V6zM2 17h2v24H2V17zm4 0h2v24H6V17z'/%3E%3C/g%3E%3C/svg%3E");
    font-family: 'Courier New', Courier, monospace;
}
</style>
