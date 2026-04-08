<template>
    <nav class="navbar-content" :class="{ scrolled: isScrolled }">
        <div class="bar-content">
            <div class="bar-content-tittle">
                <a href="#home" class="desktop-item" :class="{ active: activeSection === 'home' }"
                    @click.prevent="scrollToSection('home')">
                    <span class="desktop-item">Arthur Barcelos</span>
                </a>
            </div>
            <div class="bar-content-items">
                <button class="desktop-item" @click="scrollToSection('about')"
                    :class="{ active: activeSection === 'About' }">
                    <span>About</span>
                </button>
                <button class="desktop-item" @click="scrollToSection('projects')"
                    :class="{ active: activeSection === 'projects' }">
                    <span>Projects</span>
                </button>
                <button class="desktop-item" @click="menuStore.toggle()"
                    :class="{ active: activeSection === 'contact' }">
                    <span>Contact</span>
                </button>
            </div>
            <div class="bar-content-items-mobile">
                <i class="bi bi-list" @click="toggleDropdown"></i>
                <div class="bar-content-items-mobile-dropdown" id="bar-content-items-mobile-dropdown"
                    v-if="dropdownVisible">
                    <ul>
                        <li>
                            <a href="#about" class="mobile-item" @click.prevent="scrollToSection('about'); closeDropdown()">
                                <span>About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#projects" class="mobile-item" @click.prevent="scrollToSection('projects'); closeDropdown()">
                                <span>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" class="mobile-item" @click.prevent="menuStore.toggle(); closeDropdown()">
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<!--Script-->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const activeSection = ref('about');
const isScrolled = ref(false);

const dropdownVisible = ref(false);

const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
};

const closeDropdown = () => {
    dropdownVisible.value = false;
};

import { menuStore } from '../store.js'

console.log(`                                      
                      ########                    
                  ################                
                ####################              
              ######          ########            
            ######                ######          
            ####                  ######          
            ####                    ####          
          ######                    ####          
          ######                    ####          
            ####                    ####          
            ######                ######          
            ########            ######            
              ########        ########            
                ######        ######              
                  ####        ####                
                  ################                
                  ################                
                                                  
                                                  
                    ############                  
                    ############                  
                      ########                    
                                             `);
console.log("It's dark over there so I brought a light source to illuminate the code. 🧑‍💻");

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;

    const sections = ['about', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 150; // offset para detectar antes

    for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                activeSection.value = sectionId;
                break;
            }
        }
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // checa a posição inicial
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<!--Css-->
<style scoped>
.navbar-content {
    z-index: 999;
    width: 100%;
    height: 80px;
    position: fixed;
    background-color: transparent;
    align-items: center;
    padding: 0 20px;
    transition: all 0.3s ease;
}

.navbar-content.scrolled {
    background: rgba(15, 12, 41, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    height: 70px;
}

.bar-content {
    max-width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.desktop-item {
    position: relative;
    display: inline-block;
    margin-left: 20px;
    text-decoration: none;
    color: white;
    font-weight: 500;
    border: none;
    background: none;
    cursor: pointer;
}

.desktop-item span {
    font-size: 24px;
    font-weight: bold;
}

.desktop-item::after {
    content: "";
    position: absolute;
    display: block;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(255, 255, 255);
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.3s ease;
}

.desktop-item:hover::after {
    transform: scaleX(1);
}


.bar-content-items-mobile {
    display: none;
    position: relative;
}


/* Mobile media styles 768px */
@media (max-width: 768px) {

    .navbar-content {
        width: 100%;
        padding: 0 0px;
    }

    .bar-content {
        width: 100%;
    }

    .bar-content-items {
        display: none;
    }

    .bar-content-items-mobile {
        display: flex;
    }

    .bar-content-items-mobile-dropdown {
        display: flex;
        position: absolute;
        top: 40px;
        right: 0;
        background: rgba(30, 30, 30, 0.95);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.5rem;
        overflow: hidden;
        flex-direction: column;
        min-width: 160px;
        z-index: 1000;
    }

    .bar-content-items-mobile-dropdown ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    }

    .bar-content-items-mobile-dropdown li {
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .bar-content-items-mobile-dropdown li:last-child {
        border-bottom: none;
    }

    .bar-content-items-mobile-dropdown .mobile-item {
        display: block;
        padding: 12px 20px;
        text-decoration: none;
        color: #f3f4f6;
        font-weight: 500;
        font-size: 1.1rem;
        transition: background-color 0.2s ease, color 0.2s ease;
    }

    .bar-content-items-mobile-dropdown .mobile-item:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: #ffffff;
    }

    .bar-content-items-mobile i {
        font-size: 24px;
        font-weight: bold;
        color: white;
        cursor: pointer;
    }
}
</style>