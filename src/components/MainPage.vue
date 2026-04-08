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

        <!-- Footer -->
        <footer class="site-footer">
            <div class="footer-content">
                <div class="footer-brand">
                    <span class="footer-name">Arthur Barcelos</span>
                    <p class="footer-tagline">Building with purpose, one line at a time.</p>
                </div>
                <div class="footer-links">
                    <a href="https://www.linkedin.com/in/arthurbarceloslucena/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/Firewarez" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i class="bi bi-github"></i>
                    </a>
                    <a href="https://www.instagram.com/arthurbarcelos1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i class="bi bi-instagram"></i>
                    </a>
                </div>
                <div class="footer-copy">
                    <span>&copy; {{ new Date().getFullYear() }} Arthur Barcelos. All rights reserved.</span>
                </div>
            </div>
        </footer>
    </main>


</template>

<script setup>


import NavBar from './NavBar.vue'
import SectionHome from './SectionHome.vue'
import SectionProjects from './SectionProjects.vue'
import SectionAbout from './SectionAbout.vue'
import ContactMe from './ContactMe.vue'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { ref } from 'vue';

const vantaRef = ref(null);


</script>

<style scoped>
.Main-Page {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
}

/* Footer */
.site-footer {
    padding: 40px 20px 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    background: rgba(0, 0, 0, 0.15);
}

.footer-content {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
}

.footer-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.02em;
}

.footer-tagline {
    margin-top: 4px;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.4);
    font-weight: 300;
}

.footer-links {
    display: flex;
    gap: 20px;
}

.footer-links a {
    color: rgba(255, 255, 255, 0.4);
    font-size: 1.1rem;
    transition: all 0.3s ease;
    text-decoration: none;
}

.footer-links a:hover {
    color: #8B5DFF;
    transform: translateY(-2px);
}

.footer-copy {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.25);
}
</style>
