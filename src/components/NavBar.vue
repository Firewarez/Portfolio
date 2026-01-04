<template>
    <nav class="navbar-content">
        <div class="bar-content">
            <div class="bar-content-tittle">
                <a href="#about" class="desktop-item" :class="{ active: activeSection === 'about' }"
                    @click.prevent="scrollToSection('about')">
                    <span class="desktop-item">Arthur Barcelos</span>
                </a>
            </div>
            <div class="bar-content-items">
                <button class="desktop-item" @click="scrollToSection('about')"
                    :class="{ active: activeSection === 'about' }">
                    <span>Skills</span>
                </button>
                <button class="desktop-item" @click="scrollToSection('works')"
                    :class="{ active: activeSection === 'works' }">
                    <span>Jobs</span>
                </button>
                <button class="desktop-item" @click="scrollToSection('projects')"
                    :class="{ active: activeSection === 'projects' }">
                    <span>Projects</span>
                </button>
                <button class="desktop-item" @click="scrollToSection('contact')"
                    :class="{ active: activeSection === 'contact' }">
                    <span>Contact</span>
                </button>
            </div>
            <div class="bar-content-items-mobile">
                <i class="bi bi-list" @click="toggleDropdown"></i>
                <div class="bar-content-items-mobile-dropdown hide" id="bar-content-items-mobile-dropdown"
                    v-if="dropdownVisible">
                    <ul>
                        <li>
                            <a href="#about" class="mobile-item" @click.prevent="scrollToSection('about')">
                                <span>Skills</span>
                            </a>
                        </li>
                        <li>
                            <a href="#works" class="mobile-item" @click.prevent="scrollToSection('works')">
                                <span>Works</span>
                            </a>
                        </li>
                        <li>
                            <a href="#projects" class="mobile-item" @click.prevent="scrollToSection('projects')">
                                <span>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" class="mobile-item" @click.prevent="scrollToSection('contact')">
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

const dropdownVisible = ref(false);



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
    height: 100px;
    position: fixed;
    background-color: transparent;
    align-items: center;
    padding: 0 20px;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
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
        display: none;
        position: absolute;
        top: 40px;
        right: 0;
        background-color: var(--secondary-font);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        overflow: hidden;
        flex-direction: column;
    }

    .bar-content-items-mobile i {
        font-size: 24px;
        font-weight: bold;
        color: white;
        cursor: pointer;
    }
}
</style>