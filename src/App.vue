<template>
  <transition name="fade" v-if="show">
    <div id="app">
      <vue-particles color="#49BEB5" style="position: absolute; left: 0; top: 0; height: 100vh; width: 100vw; z-index: 1;"
                     :particleOpacity="0.7"
                     :particlesNumber="40"
                     shapeType="circle"
                     :particleSize="4"
      ></vue-particles>
      <img src="./assets/logo.png" width="20%" style="z-index: 2;"/>
      <h2 style="z-index: 2;">
        Estamos todos conectados.
      </h2>
      <h2 style="z-index: 2; color: #49BEB5;">
        E somos uma só conexão.
      </h2>

      <carousel
        style="z-index: 99"
        :autoplay="true"
        :autoplayHoverPause="true"
        :perPage="3"
        :paginationEnabled="true"
        paginationColor="#F9F9F9"
        paginationActiveColor="#49BEB5"
        paginationSize="12"
      >
        <slide v-for="(card, idx) in cards" :key="idx">
          <card
            :title="card.title"
            :description="card.desc"
            :icon="card.icon"
          />
        </slide>
      </carousel>
    </div>
  </transition>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import Card from './Card'

export default {
  name: 'app',
  components: {
    Card,
    Carousel,
    Slide
  },
  data () {
    return {
      show: false,
      cards: [
        {
          title: 'Engenharia de Software',
          desc: 'Aqui temos a possibilidade de trabalhar com diversas linguagens de codificações, sempre visando as novas tendências de mercado, e encaixando certo cada cada parte da engrenagem no processo de engenharia de softwares.',
          icon: 'fa fa-cogs fa-2x',
        },
        {
          title: 'Desenvolvimento',
          desc: 'Estamos sempre atrás de novos desafios e realizando projetos para solucinar os mais diversos problemas! Desenvolvemos aplicações com as melhores e mais modernas tecnologias do mercado.',
          icon: 'fa fa-file-code fa-2x'
        },
        {
          title: 'Análise de sistemas',
          desc: 'Neste processo, temos ótimos analistas para levantamentos de requisitos, soluções de problemas e metodologias de desenvolvimento ágil, sempre focando nos pilares de qualidade e segurança no desenvolvimento de softwares.',
          icon: 'fa fa-chart-line fa-2x',
        },
        {
          title: 'Integração Acadêmcia',
          desc: 'Integramos as mais diversas áreas acadêmicas do IESB para conseguir tornar todo os nossos produtos mais sólidos, coerentes e inclusivos. Somos TI, somos Comunicação, somos Marketing, somos integrados!',
          icon: 'fa fa-graduation-cap fa-2x',
        },
        {
          title: 'Nosso trabalho',
          desc: 'Conheça um pouco do nosso trabalho: para todos os projetos de código aberto, concluídos ou em andamento, utilizamos a plataforma Github. <a href="https://github.com/organizations/cpa-bayarea/">Clique Aqui</a>',
          icon: 'fab fa-github-square fa-2x',
          clickable: true,
        },
      ],
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 1);
  },
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #363636;
  width: 100vw;
  height: 100vh;
}

h1, h2 {
  font-weight: normal;
  color: white;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #49BEB5;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.VueCarousel-dot-button {
  outline: none !important;
}
</style>
