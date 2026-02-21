<template>
    <section class="Section-About-Me">

        <div class="about-content">
            <div class="content-block block-main">
                <div class="block-text">
                    <h1>FullStack Developer</h1>
                    <span>I like to develop solutions where people feel comfortable and safe</span>
                </div>
                <div class="block-buttons">
                    <div class="socials">
                        <a href="https://www.linkedin.com/in/arthurbarceloslucena/" class="social-link linkedin"
                            target="_blank">
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a href="https://github.com/Firewarez" class="social-link github" target="_blank">
                            <i class="bi bi-github"></i>
                        </a>
                        <a href="https://www.instagram.com/arthurbarcelos1/" class="social-link instagram"
                            target="_blank">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                    <button class="botao" :class="{ downloading: isDownloading }" @click="handleDownload">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="mysvg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="Interface / Download">
                                    <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke="#f1f1f1"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <span class="texto">Download CV</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { ref } from 'vue';




// Lógica Download 
const isDownloading = ref(false);

const handleDownload = () => {
    isDownloading.value = true;
    const link = document.createElement('a');
    link.href = '/Curriculum Vitae.pdf';
    link.download = 'Curriculum_Vitae_Arthur_Barcelos.pdf';

    const handleVisibilityChange = () => {
        if (!document.hidden) {
            setTimeout(() => {
                isDownloading.value = false;
                document.removeEventListener('visibilitychange', handleVisibilityChange);
            }, 500);
        }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
        isDownloading.value = false;
        document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, 3000);
};
</script>

<style scoped>
.Section-About-Me {
    z-index: 0;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    background-size: cover;
    background-position: center;
    position: relative;
}


/* O .svg-bg e o @keyframes scaleSpin
  foram REMOVIDOS daqui.
*/


.about-content {
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 90%;
    height: 90%;
    margin: 0 auto;
    padding-top: 100px;
    box-sizing: border-box;
}


.content-block {
    color: white;
}

.block-main {
    flex: 1;
    padding-right: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.block-text {
    text-align: center;
}

.block-text h1 {
    font-size: 48px;
    font-weight: bold;
    margin: 0;
    line-height: 1.2;
}

.block-text span {
    font-size: 24px;
    font-weight: 400;
    opacity: 0.9;
    display: block;
    margin-top: 16px;
}

.block-buttons {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    box-shadow: 0 5px 15px rgba(59, 190, 230, 0.4);
}

.social-link.instagram:hover {
    background: linear-gradient(to right,
            #833ab4, #fd1d1d, #fcb045);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(59, 190, 230, 0.4);
}

.social-link:hover i {
    transform: scale(1.1);
}

.block-right img {
    max-width: 400px;
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
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

    .block-right {
        justify-content: center;
    }

    .block-text h1 {
        font-size: 36px;
    }

    .block-text span {
        font-size: 18px;
    }

    .block-buttons {
        justify-content: center;
    }
}
</style>

<style scoped>
.botao {
    position: relative;
    width: 125px;
    height: 45px;
    border-radius: 20px;
    border: none;
    box-shadow: 1px 1px rgba(107, 221, 215, 0.37);
    padding: 5px 10px;
    background: rgb(47, 93, 197);
    background: linear-gradient(160deg, rgba(47, 93, 197, 1) 0%, rgba(46, 86, 194, 1) 5%, rgba(47, 93, 197, 1) 11%, rgba(59, 190, 230, 1) 57%, rgba(0, 212, 255, 1) 71%);
    color: #fff;
    font-family: Roboto, sans-serif;
    font-weight: 505;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    filter: drop-shadow(0 0 10px rgba(59, 190, 230, 0.568));
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 0;
}

.botao .mysvg {
    display: none;
}

.botao .texto {
    display: inline;
}

.botao.downloading {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: calc((125px - 50px) / 2);
    display: flex;
    align-items: center;
    justify-content: center;
}

.botao.downloading .texto {
    display: none;
}

.botao.downloading .mysvg {
    display: inline;
}

.botao.downloading::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    border: 3.5px solid transparent;
    border-top: 3.5px solid #fff;
    border-right: 3.5px solid #fff;
    border-radius: 50%;
    animation: animateC 1s linear infinite;
}

@keyframes animateC {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>