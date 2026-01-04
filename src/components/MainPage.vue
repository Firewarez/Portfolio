<template>

    <main class="Main-Page">

        <NavBar />

        <section id="about">
            <SectionAbout />
        </section>

        <section id="projects">
            <SectionProjects />
        </section>

        <section id="contact">
            <ContactMe />
        </section>

        <section id="works">
            <SectionWorks />
        </section>

    </main>


</template>

<script setup>


import NavBar from './NavBar.vue'
import SectionAbout from './SectionAbout.vue'
import SectionProjects from './SectionProjects.vue'
import SectionWorks from './SectionWorks.vue'
import ContactMe from './ContactMe.vue'
import 'bootstrap-icons/font/bootstrap-icons.css';
//import iconImage from '@/assets/Icon.jpg';
//import { useI18n } from 'vue-i18n';





</script>
