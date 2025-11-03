<template>
    <section class="Section-About-Me">
        <svg class="svg-bg" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'>
            <rect fill='#000000' width='2000' height='1500' />
            <defs>
                <ellipse fill='none' stroke-width='200' stroke-opacity='0.13' id='a' rx='600' ry='450' />
            </defs>
            <g transform='' style='transform-origin:center'>
                <g transform='' style='transform-origin:center'>
                    <g transform='rotate(-160 0 0)' style='transform-origin:center'>
                        <g transform='translate(1000 750)'>
                            <use stroke='#27002B' href='#a' transform='rotate(-60 0 0) scale(0.4)' />
                            <use stroke='#29032d' href='#a' transform='rotate(-50 0 0) scale(0.5)' />
                            <use stroke='#2a052f' href='#a' transform='rotate(-40 0 0) scale(0.6)' />
                            <use stroke='#2c0731' href='#a' transform='rotate(-30 0 0) scale(0.7)' />
                            <use stroke='#2e0933' href='#a' transform='rotate(-20 0 0) scale(0.8)' />
                            <use stroke='#300b36' href='#a' transform='rotate(-10 0 0) scale(0.9)' />
                            <use stroke='#320d38' href='#a' transform='' />
                            <use stroke='#34103a' href='#a' transform='rotate(10 0 0) scale(1.1)' />
                            <use stroke='#36123c' href='#a' transform='rotate(20 0 0) scale(1.2)' />
                            <use stroke='#38143e' href='#a' transform='rotate(30 0 0) scale(1.3)' />
                            <use stroke='#3a1641' href='#a' transform='rotate(40 0 0) scale(1.4)' />
                            <use stroke='#3b1843' href='#a' transform='rotate(50 0 0) scale(1.5)' />
                            <use stroke='#3d1b45' href='#a' transform='rotate(60 0 0) scale(1.6)' />
                            <use stroke='#3f1d47' href='#a' transform='rotate(70 0 0) scale(1.7)' />
                            <use stroke='#411f4a' href='#a' transform='rotate(80 0 0) scale(1.8)' />
                            <use stroke='#43214c' href='#a' transform='rotate(90 0 0) scale(1.9)' />
                            <use stroke='#45234e' href='#a' transform='rotate(100 0 0) scale(2)' />
                            <use stroke='#472550' href='#a' transform='rotate(110 0 0) scale(2.1)' />
                            <use stroke='#492753' href='#a' transform='rotate(120 0 0) scale(2.2)' />
                            <use stroke='#4b2a55' href='#a' transform='rotate(130 0 0) scale(2.3)' />
                            <use stroke='#4d2c57' href='#a' transform='rotate(140 0 0) scale(2.4)' />
                            <use stroke='#4f2e5a' href='#a' transform='rotate(150 0 0) scale(2.5)' />
                            <use stroke='#51305C' href='#a' transform='rotate(160 0 0) scale(2.6)' />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        <div class="about-content">
            <div class="content-block block-left">
                <div class="block-text">
                    <h1>FullStack Developer</h1>
                    <span>I like to develop solutions where people feel comfortable and safe</span>
                </div>
                <div class="block-buttons">
                    <div class="socials">
                        <a href="https://www.linkedin.com/in/arthurbarceloslucena/" class="social-link" target="_blank">
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a href="https://github.com/Firewarez" class="social-link" target="_blank">
                            <i class="bi bi-github"></i>
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
            <div class="content-block block-right">
                <img :src="meImage" alt="Image of Arthur Barcelos">
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import meImage from '@/assets/me.png';

const isDownloading = ref(false);

const handleDownload = () => {
    isDownloading.value = true;

    const link = document.createElement('a');
    link.href = '/Curriculum Vitae.pdf'; // Agora aponta para public/
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
    background-color: #000000;
    background-size: cover;
    background-position: center;
    position: relative;
}

.svg-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation: scaleSpin 3s cubic-bezier(.4, 2, .3, 1) forwards;
    transform-origin: center;
}

@keyframes scaleSpin {
    0% {
        transform: rotate(-160deg) scale(0.4);
    }

    100% {
        transform: rotate(0deg) scale(1);
    }
}

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

.block-left {
    flex: 1;
    padding-right: 40px;
}

.block-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
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

/* ÍCONES SOCIAIS */
.socials {
    display: flex;
    gap: 15px;
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

.social-link:hover {
    background: linear-gradient(160deg, rgba(47, 93, 197, 1) 0%, rgba(59, 190, 230, 1) 100%);
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

/* Responsivo */
@media (max-width: 768px) {
    .about-content {
        flex-direction: column;
        text-align: center;
        padding-top: 120px;
    }

    .block-left {
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

<!-- Estilo separado botão de download -->
<style scoped>
/* From Uiverse.io by Tsiangana/curly-rat-7 */
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

/* MUDANÇA: :active para .downloading (classe JavaScript) */
.botao.downloading {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: calc((125px - 50px) / 2);
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