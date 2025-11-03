import { createApp } from 'vue'
import App from './App.vue'
import {createI18n} from 'vue-i18n'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'


const languages = {
    'pt_BR':{
        About: {
            Abtme: 'Sobre mim',
            Name: 'Arthur Barcelos, Desenvolvedor Web',
            About: 'Desenvolvedor web brasileiro. Construo aplicações para aproximar pessoas. Entenda mais sobre o meu <span style="color: #8B5DFF;">Trabalho</span>'
        },
    
        Info:{
            Title: 'Objetivos',
            Info1: 'Desenvolvo aplicações <span style="color: #8B5DFF;">interativas</span> com <span style="color: #8B5DFF;">praticidade</span> e <span style="color: #8B5DFF;">segurança</span>, entregando com <span style="color: #8B5DFF;">eficiência</span> produtos para o seu negócio',
            Info2: 'Construo banco de dados <span style="color: #8B5DFF;">eficientes</span> e <span style="color: #8B5DFF;">seguros</span>, proporcionando um melhor gerenciamento para você e para seus clientes',
            Info3: 'Um dos meus maiores objetivos como desenvolvedor é ampliar a comunicação, proporcionar ambientes saudáveis, seguros e acessíveis para todos.'
        },
    
        Projects:{
            UnpAbout: 'Um fórum de notícias desenvolvido na faculdade com objetivo de criar um ambiente conectado de alunos para criação de perguntas, gerar engajamento e aproximação da comunidade estudantil',
            UnpAbout2: 'Possui funções de comunicação de posts, comentários, noticias e perfil de usuário',
            UnpAbout3: 'Desenvolvido utilizando HTML, CSS, JavaScript, PHP e MySQL',
            Portfolio: 'Meu portfolio que desenvolvi para mostrar alguns de meus projetos e habilidades. Site responsivo e com animações.',
            Portfolio2: 'Utilizei Vue.js, HTML, CSS e JavaScript.',
            Clicker: 'Um jogo de de clicker simples para testar lógica de javascript e brincar com minha criatividade.',
            Clicker2: 'Desenvolvido de forma simples utilizando apenas HTML, CSS e JavaScript.',
        },
        Contact:{
            Header: 'Entre em contato',
            Submit: 'Enviar'
        }
    },
    'en_US':{
        About: {
            Abtme: 'About me',
            Name: 'Arthur Barcelos, Web Dev',
            About: 'Brazilian web developer. I build applications to bring people together. Learn more about my <span style="color: #8B5DFF;">work</span>'
        },
        Info:{
            Title: 'Goals',
            Info1: 'I develop <span style="color: #8B5DFF;">interactive</span> applications with <span style="color: #8B5DFF;">practicality</span> and <span style="color: #8B5DFF;">security</span>, efficiently delivering products for your <span style="color: #8B5DFF;">business</span>.',
            Info2: 'I build <span style="color: #8B5DFF;">efficient</span> and <span style="color: #8B5DFF;">secure</span> databases, providing better management for <span style="color: #8B5DFF;">you</span> and your <span style="color: #8B5DFF;">costumers</span>.',
            Info3: 'One of my biggest goals as a developer is to expand communication, provide healthy, safe and accessible environments for everyone.'
        },
    
        Projects:{
            UnpAbout: 'A news forum developed at the college with the aim of creating a connected environment for students to ask questions, generate engagement and bring the student community closer together.',
            UnpAbout2: 'It has functions for communicating posts, comments, news and user profiles.',
            UnpAbout3: 'Developed using HTML, CSS, JavaScript, PHP and MySQL',
            Portfolio: 'My portfolio that I developed to show some of my projects and skills. Responsive site with animations.',
            Portfolio2: 'I used Vue.js, HTML, CSS and JavaScript.',
            Clicker: 'A simple clicker game to test javascript logic and play with my creativity.',
            Clicker2: 'Developed using only HTML, CSS and JavaScript.',
            
        },
        Contact:{
            Header: 'Contact me',
            Submit: 'Submit'
        }
    }
}

const i18n = createI18n({
    locale: 'en_US',
    fallbackLocale: 'pt_BR',
    messages: languages,
    legacy: false
})

createApp(App).use(Quasar, quasarUserOptions).use(i18n).mount('#app')
