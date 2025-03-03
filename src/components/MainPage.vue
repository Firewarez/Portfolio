<template>
    <div class="SplashScreen" id="splashScreen">
        <div class="container">
            <div class="txt-container">
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
        <div id="initText" class="initText" style="opacity: hidden;">Almost done!</div>
        <div id="initializingText" class="initializingText">
            <p>Loading</p>
        </div>

        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>


    </div>


    <div id="content" class="content" style="display: none;">
        <!-- Conteúdo real da página -->
        <nav class="navbar-content">
            <div class="nav-container" style="color: white; font-size: 50px;">
                <i class="bi bi-list btn-dropdown"></i>
                <div class="navbar-dropdown" style="display: none;">
                    <a href="#">Home</a>

                </div>
            </div>
            <div class="txt-portfolio">
                <a href="#" style="text-decoration: none; color: white;">
                    <h1>Portfólio</h1>
                </a>
            </div>
        </nav>

        <div class="first-section">

            <div class="aboutme">
                <div class="abtme-info">
                    <div class="txt" style="color: white;">
                        <h1 id="txt1">About me</h1>
                    </div>
                    <div class="abtme-first">
                        <p id="txt1"
                            style="font-size: 25px; font-weight: bold; font-family: Outfit,Arial,Helvetica,sans-serif;">
                            Arthur Barcelos, Desenvolvedor Web</p>
                    </div>
                    <div class="abtme-second">
                        <p id="txt2" style="font-size: 25px; font-family: Outfit,Arial,Helvetica,sans-serif;">Sou um
                            desenvolvedor web atuando como freelancer desenvolvendo aplicações interativas e
                            responsivas, buscando experiências no mercado para melhorar e expandir meu conhecimento</p>
                    </div>
                    <div class="abtme-buttons">
                        <a href="mailto:arthurbarcelospb@hotmail.com" class="btn btn-primary">Contato</a>
                        <a href="https://github.com/Firewarez" class="btn btn-secondary">Github</a>
                    </div>
                </div>
                <div class="abtme-pfp">
                    <img :src="iconImage" alt="Profile Picture" />
                </div>
            </div>
            <div class="topblur"></div>
            <div class="bottomblur"></div>

            
        </div>
        <div class="next-btn">
                <i class="bi bi-arrow-down-short"></i>
            </div>

        <div class="second-section">
            <h2>Seção 2</h2>
            <p>Este é o conteúdo da segunda seção.</p>
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
    const initText = document.getElementById('initText');

    const txt = document.getElementById('txt1').innerHTML;
    const txt2 = document.getElementById('txt2').innerHTML;
    let speed = 10;
    let i = 0;
    document.getElementById("txt1").innerHTML = "";
    document.getElementById("txt2").innerHTML = "";

    async function typeWriter() {
        return new Promise(resolve => {
            if (i < txt.length) {
                document.getElementById("txt1").innerHTML += txt.charAt(i);
                i++;
                setTimeout(() => {
                    typeWriter().then(resolve); // A cada chamada recursiva, garante a execução do resolve quando terminar
                }, speed);
            } else {
                resolve(); // Resolve a Promise quando terminar a digitação
            }
        });
    }

    let j = 0;

    function typeWriter2() {
        if (j < txt2.length) {
            document.getElementById("txt2").innerHTML += txt2.charAt(j);
            j++;
            setTimeout(typeWriter2, speed);
        }
    }

    async function run() {
        await typeWriter(); // Espera o typeWriter terminar
        setTimeout(() => {
            typeWriter2(); // Agora chama o typeWriter2 depois que o primeiro terminar
        }, 100); // Atraso de 1 segundo
    }

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
        if (e.key === 'Enter' && input.value.trim() === 'Start' || input.value.trim() == 'start') {
            // Exibe a animação de carregamento
            loading.style.display = 'block';
            content.style.visibility = 'hidden';
            content.style.opacity = 0;
            firstContainer.style.display = 'none'; // Esconde o campo de entrada
            content.style.display = 'none'; // Exibe o conteúdo real

            // Simula um atraso para a animação de carregamento (ex: 3 segundos)
            setTimeout(() => {
                // Exibe a mensagem "Almost done!" com transição suave
                initText.style.opacity = 1;
                initText.style.transition = 'opacity 2s ease-in-out'; // Adiciona a transição suave
            }, 3000); // Atraso de 3 segundos para mostrar a mensagem

            // Após a mensagem "Almost Done" desaparecer, exibe o conteúdo
            setTimeout(() => {
                initText.style.opacity = 0; // Esconde o "Almost done!" depois da animação

                setTimeout(() => {
                    loading.style.display = 'none';
                    content.style.visibility = 'visible';
                    content.style.opacity = 1;
                    content.style.display = 'block';
                    run(); // Inicia o typewriter do conteúdo
                }, 1000); // Espera 1 segundo para esconder a mensagem e mostrar o conteúdo
            }, 5000);  // Atraso de 5 segundos para esconder a mensagem "Almost done!"
        } else if (e.key === 'Enter' && input.value.trim() !== 'Start') {
            alert('Digite "Start" para começar');
        }
    });
});



</script>

<style scoped>
.SplashScreen {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

.bottomblur{
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
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-size: 50px;
    color: #00ff00;
    z-index: 1;
}

.aboutme {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 70%;
    gap: 10px;
    color: white;
    z-index: 1;
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
    transition: all 1 s ease;
    visibility: hidden;
    opacity: 0;
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

.abtme-buttons{
    display: flex;
    gap: 20px;
    height: 70px;
}

.btn{
    border-radius: 100px;
    background-color: #3E7B27;
    text-decoration: none;
    color: white;
    font-size: 20px;
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

.btn:hover{
    cursor: pointer;
    transition: transform 0.3 ease;
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
</style>