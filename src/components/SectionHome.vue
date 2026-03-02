<template>
    <section class="Section-Home">

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
                    <button class="button" @click="handleDownload">
                        <span class="button_lg">
                            <span class="button_sl"></span>
                            <span class="button_text">Download CV</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>






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