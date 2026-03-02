<template>

    <main class="Main-Page" ref="vantaRef">

        <NavBar />

        <section id="home">
            <SectionHome />
        </section>

        <section id="projects">
            <SectionProjects />
        </section>

        <ContactMe />

        <section id="about">
            <SectionAbout />
        </section>
    </main>


</template>

<script setup>


import NavBar from './NavBar.vue'
import SectionHome from './SectionHome.vue'
import SectionProjects from './SectionProjects.vue'
import SectionAbout from './SectionAbout.vue'
import ContactMe from './ContactMe.vue'
import 'bootstrap-icons/font/bootstrap-icons.css';
//import iconImage from '@/assets/Icon.jpg';
//import { useI18n } from 'vue-i18n';

import { ref } from 'vue';

const vantaRef = ref(null);


</script>

<style scoped>
.Main-Page {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
}
</style>
