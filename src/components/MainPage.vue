<template>
    <div class="SplashScreen" id="splashScreen">
        <div class="container">
            <div class="txt-container" id="txtContainer">
                <span id="text">>Terminal</span>

            </div>

            <div class="cmd-container">

                <div class="cmd-label">
                    <i id="cmdIcon" class="bi bi-terminal"></i>
                </div>
                <div class="cmd-input-form">
                    <input type="text" id="input" class="cmd-input" placeholder="Type 'Start' to begin" />
                </div>

            </div>
        </div>
    </div>

    <div id="loading" style="display: none;" class="loading">
        <div id="initializingText" class="initializingText">
            <p>Loading</p>
        </div>

        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>


    </div>


    <div id="content" class="content" style="display: none;">
        <!-- Conteúdo real da página -->
        <nav class="navbar-content scroll">
            <div class="nav-container" style="color: white; font-size: 50px;">
                <i class="bi bi-list btn-dropdown"></i>
                <div class="navbar-dropdown" style="display: none;">
                    <a href="#">Home</a>

                </div>
            </div>
            <div class="txt-portfolio">
                <h1><a href="mailto:arthurbarcelospb@hotmail.com" class="contact">Contato</a></h1>
            </div>
        </nav>

        <div class="first-section">

            <div class="aboutme">
                <div class="abtme-info">
                    <div class="txt scroll" style="color: white;">
                        <h1 id="txt1">About me</h1>
                    </div>
                    <div class="abtme-first scroll">
                        <p id="txt1"
                            style="font-size: 25px; font-weight: bold; font-family: Outfit,Arial,Helvetica,sans-serif;">
                            Arthur Barcelos, Desenvolvedor Web</p>
                    </div>
                    <div class="abtme-second scroll">
                        <p id="txt2" style="font-size: 25px; font-family: Outfit,Arial,Helvetica,sans-serif;">Sou um
                            desenvolvedor web independente brasileiro, conecte-se com o mundo na palma da sua mão.
                            Entenda mais sobre o meu <a href="#" class="trab-btn">Trabalho</a></p>
                    </div>
                </div>
                <div class="abtme-pfp scroll">
                    <img :src="iconImage" alt="Profile Picture" />
                </div>
            </div>


        </div>
        <div class="next-btn">
            <i class="bi bi-arrow-down-short"></i>
        </div>

        <div class="topblur"></div>
        <div class="bottomblur"></div>

        <div class="second-section">
            <div class="languages">

            </div>
        </div>
    </div>


</template>

<script setup>


import 'bootstrap-icons/font/bootstrap-icons.css';
import iconImage from '@/assets/Icon.jpg';



document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const icon = document.getElementById('cmdIcon');
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');
    const firstContainer = document.getElementById('splashScreen');



    const nextBtn = document.querySelector('.next-btn');

    nextBtn.addEventListener('click', () => {
        const secondSection = document.querySelector('.second-section');
        secondSection.scrollIntoView({ behavior: 'smooth' });
    });


    input.addEventListener('keyup', () => {
        if (input.value.trim() !== '') {
            icon.classList.remove('bi-terminal');
            icon.classList.add('bi-terminal-fill');
        } else {
            icon.classList.remove('bi-terminal-fill');
            icon.classList.add('bi-terminal');
        }
    });

    input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            if (input.value.trim() === 'Start' || input.value.trim() === 'start') {
                // Exibe a animação de carregamento
                loading.style.display = 'block';
                content.style.visibility = 'hidden';
                content.style.opacity = 0;
                firstContainer.style.display = 'none'; // Esconde o campo de entrada
                content.style.display = 'none'; // Esconde o conteúdo real

                // Simula um atraso para a animação de carregamento (ex: 3 segundos)
                setTimeout(() => {
                    // Esconde a animação de carregamento e exibe o conteúdo
                    loading.style.display = 'none';
                    content.style.visibility = 'visible';
                    content.style.opacity = 1;
                    content.style.display = 'block';
                }, 3000); // Atraso de 3 segundos para mostrar o conteúdo
            } else {
                // Seleciona o cmd-container
                const cmdContainer = document.querySelector('.cmd-container');
                const cmdIcon = document.querySelector('.cmd-label');
                const cmdInpust = document.querySelector('.cmd-input');
                const cmdTerm = document.querySelector('.txt-container');

                // Adiciona a classe de erro para ativar a animação
                cmdContainer.classList.add('error-animation');
                cmdIcon.classList.add('error-red');
                cmdInpust.classList.add('error-red');
                cmdTerm.classList.add('error-animation');

                // Remove a classe de erro após a animação terminar
                setTimeout(() => {
                    cmdContainer.classList.remove('error-animation');
                    cmdIcon.classList.remove('error-red');
                    cmdInpust.classList.remove('error-red');
                    cmdTerm.classList.remove('error-animation');
                }, 1000); // Tempo correspondente à duração da animação
            }
        }
    });
});



</script>

<style scoped>
@keyframes blinkRed {
    0% {
        border-color: #ff0000;
        color: red;
    }

    50% {
        border-color: transparent;
    }

    100% {
        border-color: #ff0000;
        color: red;
    }
}

@keyframes shakeHorizontal {
    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-10px);
    }

    50% {
        transform: translateX(10px);
    }

    75% {
        transform: translateX(-10px);
    }

    100% {
        transform: translateX(0);
    }
}

.error-animation {
    animation: blinkRed 0.5s ease-in-out, shakeHorizontal 0.5s ease-in-out;
    border-color: #ff0000;
    color: red;
}

.error-red{
    animation: blinkRed 0.5s ease-in-out;
    border-color: #ff0000;
    color: red;
}

.SplashScreen {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.container {
    display: flex;
    flex-direction: column;
    margin-top: 19%;
    align-items: center;
}

.txt-container {
    margin-bottom: 20px;
    text-align: center;
    color: #00cc00;
}

.cmd-container {
    width: 400px;
    height: 55px;
    border: 1px solid #00ff00;
    border-radius: 5px;
    padding: 5px;
    display: flex;
}


.cmd-form {
    display: flex;
    align-items: center;
}

.cmd-label {
    font-size: 30px;
    color: #00ff00;
    display: flex;
    align-items: center;
    height: 100%;
}

.cmd-input {
    background-color: #17153B;
    color: #00ff00;
    border: none;
    padding: 10px;
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;
    width: 100%;
    border-radius: 5px;
}

.cmd-input:focus {
    outline: none;
    border-color: #00cc00;
}

.cmd-input::placeholder {
    color: #00ff00;
    opacity: 0.7;
}

.cmd-input-form {
    width: 100%;
}

#text {
    font-size: 20px;
}
</style>

<style scoped>
/* Estilo para a animação de carregamento estilo CMD */
#loading {
    font-family: 'Courier New', Courier, monospace;
    /* Estilo de fonte de terminal */
    font-size: 30px;
    color: #fff;
    text-align: center;
    padding: 20px;
    display: none;
    position: fixed;
    /* Fixa o loading na tela */
    top: 50%;
    /* Posiciona no centro da tela verticalmente */
    left: 50%;
    /* Posiciona no centro da tela horizontalmente */
    transform: translate(-50%, -50%);
    /* Ajusta para garantir o centro exato */
    padding: 30px;
    /* Espaço extra ao redor */
    border-radius: 10px;
    /* Bordas arredondadas */
    z-index: 9999;
    /* Garante que o loading ficará acima de outros elementos */
    /* Inicialmente oculto */
}

#initText {
    opacity: 0;
    transition: opacity 2s ease-in-out;
    font-weight: bold;
    font-size: 30px;
    color: #00ff00;
}

.dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: #00ff00;
    /* Cor do ponto */
    opacity: 0;
    /* Começa invisível */
    animation: blink 1.5s infinite;
    /* Animação de piscar */
}

/* Efeito de piscar para criar os pontos */
@keyframes blink {
    0% {
        opacity: 0;
    }

    33% {
        opacity: 1;
    }

    66% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

/* Animação para alternar a visibilidade dos pontos */
.dot:nth-child(1) {
    animation-delay: 0s;
    /* Primeiro ponto */
}

.dot:nth-child(2) {
    animation-delay: 0.5s;
    /* Segundo ponto */
}

.dot:nth-child(3) {
    animation-delay: 1s;
    /* Terceiro ponto */
}

#initializingText {
    font-family: 'Courier New', Courier, monospace;
    color: #fff;
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
}

#initText {
    display: inline-block;
    font-weight: bold;
    opacity: 0;
}
</style>

<style scoped>
.Loading {
    display: flex;
    margin-top: 19%;
    align-items: center;
    color: #00ff00;
}

.first-section {
    width: 100%;
    display: flex;
    height: 100vh;
    min-height: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: relative;
}

.txt {
    z-index: 1;
    width: 100%;
    padding-bottom: 40px;
    font-size: 50px;
}

.topblur {
    position: absolute;
    top: 0;
    width: 50vw;
    height: 50vw;
    background: #302b63;
    filter: blur(100px);
    top: -135px;
    left: 1vw;
    z-index: 0;
    border-radius: 700px;
}

.bottomblur {
    position: absolute;
    bottom: 0;
    width: 50vw;
    height: 50vw;
    background: #302b63;
    filter: blur(100px);
    bottom: -600px;
    right: 1vw;
    z-index: 0;
    border-radius: 700px;
}

.next-btn {
    position: absolute;
    bottom: 20px;
    /* Posiciona o botão no final da first-section */
    left: 50%;
    /* Centraliza horizontalmente */
    transform: translateX(-50%);
    /* Ajusta a centralização */
    font-size: 50px;
    color: #00ff00;
    z-index: 1;
    cursor: pointer;
    /* Adiciona cursor pointer para indicar que é clicável */
}

.next-btn i {
    animation: float 2s ease-in-out infinite;
    /* Adiciona animação ao ícone */
}

@keyframes float {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
    }
}

.aboutme {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    color: white;
    z-index: 1;
    top: -15%;
    position: relative;
}

.abtme-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    right: 0;
    width: 50%;
    z-index: 1;
}

.abtme-pfp {
    width: 500px;
    height: 500px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.abtme-pfp img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }

    100% {
        transform: translateY(0);
    }
}

.content {
    transition: all 1s ease;
    visibility: hidden;
    opacity: 0;
    overflow: hidden;
}

.nav-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.nav-container i {
    cursor: pointer;
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease;
}

.nav-container i:hover {
    transform: scale(1.2);
}

.abtme-buttons {
    display: flex;
    gap: 20px;
    height: 70px;
}

.contact {
    text-decoration: none;
    color: white;
    font-size: 25px;
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

.contanct:hover {
    transition: all .12s cubic-bezier(.25, .46, .45, .94);
}

.btn:hover {
    cursor: pointer;
    transition: transform 0.3 ease;
}

.second-section {
    width: 100%;
    height: 100vh;
    /* Faz a second-section ocupar toda a altura da tela */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a1a1a;
    /* Cor de fundo para diferenciar */
    color: white;
}
</style>

<style scoped>
.navbar-content {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding-left: 100px;
    padding-right: 100px;
    color: white;
    z-index: 2;
}

.trab-btn {
    text-decoration: none;
    color: #a757e3;
    font-weight: bold;
    cursor: pointer;
}

.trab-btn:hover {
    transition: 0.3s;
    transform: scale(1.2);
}

.abtme-second {
    display: flex;
    flex-direction: column;
}

@keyframes appear {
    from {
        opacity: 0;
        translate: -100vw 0;
    }

    to {
        opacity: 1;
        translate: 0 0;
    }
}

.scroll {
    animation: appear 1s;
}
</style>

<style scoped>
/* Smartphone css styling area1 */

@media screen and (max-width: 768px) {
    .navbar-content {
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        justify-content: space-between;
    }

    .container {
        padding-top: 0;
        height: 100vh;
        /* Make the SplashScreen take the full height of the viewport */
        display: flex;
        align-items: center;
        /* Center vertically */
        justify-content: center;
        /* Center horizontally */
        position: relative;
        padding-top: 250px;
    }

}

@media screen and (max-width: 480px) {

    .navbar-content {
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        justify-content: space-between;
    }

    .container {
        padding-top: 0;
        height: 100vh;
        /* Make the SplashScreen take the full height of the viewport */
        display: flex;
        align-items: center;
        /* Center vertically */
        justify-content: center;
        /* Center horizontally */
        position: relative;
        padding-bottom: 400px;
    }

    .txt {
        font-size: 30px;
    }

    .aboutme {
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }

    .abtme-pfp {
        display: none;
    }

    .topblur {
        width: 300px;
        height: 300px;
        top: 135px;
    }

    .bottomblur {
        width: 300px;
        height: 300px;
        bottom: -200px;
    }

}
</style>