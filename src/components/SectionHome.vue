<template>
    <section class="Section-Home">

        <div class="about-content">
            <div class="content-block block-main">
                <div class="block-text">
                    <span class="greeting">Hi, I'm</span>
                    <h1 class="name-gradient">Arthur Barcelos</h1>
                    <div class="typing-wrapper">
                        <span class="typing-text">{{ displayedRole }}</span>
                        <span class="cursor">|</span>
                    </div>
                    <p class="tagline">Building digital experiences that people trust & love</p>
                </div>
                <div class="block-buttons">
                    <div class="socials">
                        <a href="https://www.linkedin.com/in/arthurbarceloslucena/" class="social-link linkedin"
                            target="_blank" aria-label="LinkedIn">
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a href="https://github.com/Firewarez" class="social-link github" target="_blank"
                            aria-label="GitHub">
                            <i class="bi bi-github"></i>
                        </a>
                        <a href="https://www.instagram.com/arthurbarcelos1/" class="social-link instagram"
                            target="_blank" aria-label="Instagram">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                    <button class="button" @click="handleDownload">
                        <span class="button_lg">
                            <span class="button_sl"></span>
                            <span class="button_text">Download CV</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>

        <div class="scroll-indicator" @click="scrollToProjects">
            <span>Scroll</span>
            <i class="bi bi-chevron-double-down"></i>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const roles = ['FullStack Developer', 'UI/UX Enthusiast', 'AI Passionate', 'Problem Solver'];
const displayedRole = ref('');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimer = null;

const typeEffect = () => {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        displayedRole.value = currentRole.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
            isDeleting = true;
            typingTimer = setTimeout(typeEffect, 2000);
            return;
        }
    } else {
        displayedRole.value = currentRole.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    typingTimer = setTimeout(typeEffect, isDeleting ? 40 : 80);
};

onMounted(() => {
    typeEffect();
});

onUnmounted(() => {
    clearTimeout(typingTimer);
});

const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

// Lógica Download
const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Curriculum Vitae.pdf';
    link.download = 'Curriculum_Vitae_Arthur_Barcelos.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
</script>

<style scoped>
.Section-Home {
    z-index: 0;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.about-content {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 90%;
    box-sizing: border-box;
}

.content-block {
    color: white;
}

.block-main {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.block-text {
    text-align: center;
}

.greeting {
    font-size: 20px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 2px;
    margin-right: -2px;
    /* Correção: Compensa o espaço extra gerado pelo letter-spacing */
    text-transform: uppercase;
    display: block;
    margin-bottom: 8px;
    animation: fadeInUp 0.8s ease forwards;
}

.name-gradient {
    font-size: 56px;
    font-weight: 800;
    margin: 0;
    line-height: 1.1;
    background: linear-gradient(135deg, #ffffff 0%, #8B5DFF 50%, #3bbee6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeInUp 0.8s 0.2s ease both;
}

.typing-wrapper {
    margin-top: 16px;
    font-size: 24px;
    font-weight: 500;
    color: #8B5DFF;
    min-height: 36px;
    animation: fadeInUp 0.8s 0.4s ease both;
    display: inline-flex;
    /* Correção: Abraça exatamente o tamanho do texto */
    align-items: center;
    position: relative;
    /* Correção: Serve de base para o cursor absoluto */
}

.typing-text {
    font-weight: 600;
}

.cursor {
    animation: blink 1s step-end infinite;
    color: #8B5DFF;
    position: absolute;
    /* Correção: Tira o cursor do fluxo visual, centralizando o texto real */
    right: -12px;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.tagline {
    font-size: 17px;
    font-weight: 300;
    opacity: 0.7;
    display: block;
    margin-top: 20px;
    letter-spacing: 0.3px;
    margin-right: -0.3px;
    /* Correção de margem proporcional ao letter-spacing */
    line-height: 1.5;
    animation: fadeInUp 0.8s 0.6s ease both;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.block-buttons {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Correção: Força o botão e as redes sociais a dividirem o mesmo eixo central */
    gap: 20px;
    animation: fadeInUp 0.8s 0.8s ease both;
}

.socials {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    text-decoration: none;
}

.social-link i {
    font-size: 22px;
    color: #fff;
    transition: all 0.3s ease;
}

.social-link.linkedin:hover {
    background: linear-gradient(160deg, rgba(47, 93, 197, 1) 0%, rgba(59, 190, 230, 1) 100%);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(59, 190, 230, 0.4);
}

.social-link.github:hover {
    background: linear-gradient(45deg, #6e5494, #24292e);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(110, 84, 148, 0.4);
}

.social-link.instagram:hover {
    background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(131, 58, 180, 0.4);
}

.social-link:hover i {
    transform: scale(1.1);
}

/* Scroll indicator */
.scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 48.5%;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: color 0.3s ease;
    animation: fadeInUp 1s 1.2s ease both;
}

.scroll-indicator:hover {
    color: rgba(255, 255, 255, 0.8);
}

.scroll-indicator span {
    font-size: 12px;
    letter-spacing: 2px;
    margin-right: -2px;
    /* Correção: Anula o desvio provocado pelo letter-spacing */
    text-transform: uppercase;
}

.scroll-indicator i {
    font-size: 18px;
    animation: bounceDown 2s ease infinite;
}

@keyframes bounceDown {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(8px);
    }
}

@media (max-width: 768px) {
    .about-content {
        flex-direction: column;
        text-align: center;
        padding-top: 120px;
    }

    .block-main {
        padding-right: 0;
        margin-bottom: 40px;
    }

    .name-gradient {
        font-size: 36px;
    }

    .typing-wrapper {
        font-size: 18px;
    }

    .block-buttons {
        justify-content: center;
    }

    .scroll-indicator {
        bottom: 20px;
    }
}

/* Button Estilos */
.button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    color: #fff;
    cursor: pointer;
    position: relative;
    padding: 8px;
    margin-bottom: 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    transition: all .15s ease;
}

.button::before,
.button::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    height: calc(50% - 5px);
    border: 1px solid #7D8082;
    transition: all .15s ease;
}

.button::before {
    top: 0;
    border-bottom-width: 0;
}

.button::after {
    bottom: 0;
    border-top-width: 0;
}

.button:active,
.button:focus {
    outline: none;
}

.button:active::before,
.button:active::after {
    right: 3px;
    left: 3px;
}

.button:active::before {
    top: 3px;
}

.button:active::after {
    bottom: 3px;
}

.button_lg {
    position: relative;
    display: block;
    padding: 10px 20px;
    color: #fff;
    background-color: #0f1923;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 1px transparent;
}

.button_lg::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background-color: #0f1923;
}

.button_lg::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4px;
    height: 4px;
    background-color: #0f1923;
    transition: all .2s ease;
}

.button_sl {
    display: block;
    position: absolute;
    top: 0;
    bottom: -1px;
    left: -8px;
    width: 0;
    background-color: #3bbee6;
    transform: skew(-15deg);
    transition: all .2s ease;
}

.button_text {
    position: relative;
}

.button:hover {
    color: #0f1923;
}

.button:hover .button_sl {
    width: calc(100% + 15px);
}

.button:hover .button_lg::after {
    background-color: #fff;
}
</style>