<template>

    <main class="Main-Page" ref="vantaRef">

        <NavBar />

        <section id="about">
            <SectionAbout />
        </section>

        <section id="projects">
            <SectionProjects />
        </section>

        <ContactMe />

    </main>


</template>

<script setup>


import NavBar from './NavBar.vue'
import SectionAbout from './SectionAbout.vue'
import SectionProjects from './SectionProjects.vue'
import ContactMe from './ContactMe.vue'
import 'bootstrap-icons/font/bootstrap-icons.css';
//import iconImage from '@/assets/Icon.jpg';
//import { useI18n } from 'vue-i18n';

import { ref, onMounted, onUnmounted } from 'vue';
import p5 from 'p5';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';

const vantaRef = ref(null);
let vantaEffect = null;

onMounted(() => {
    vantaEffect = TOPOLOGY({
        el: vantaRef.value, // Anexa à <section>
        p5: p5,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x8e45af,
        backgroundColor: 0x1e1322
    });
});

onUnmounted(() => {
    if (vantaEffect) {
        vantaEffect.destroy();
    }
});


</script>

<style scoped>
.Main-Page {
    position: relative;
    min-height: 100vh;
}

</style>
