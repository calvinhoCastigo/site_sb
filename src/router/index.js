import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PaginaViewVue from '@/views/PaginaView.vue'
import ObjetoView from '@/views/ObjetoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Pagina Inicial',
      component: HomeView
    },
    {
      path: '/clientes',
      name: 'Clientes',
      component: PaginaViewVue
    },
    {
      path:'/equipamentos',
      name:'Equipamentos',
      component: PaginaViewVue
    },
    {
      path:'/projetos',
      name:'Produtos',
      component: PaginaViewVue
    },
    {
      path:'/contatos',
      nome:'Contato',
      component: PaginaViewVue
    },
    {
      path:'/equipamento/:id/:nome',
      nome:'Equipamento',
      component: ObjetoView,
    },
    {
      path:'/projeto/:id/:nome',
      nome:'Projeto',
      component: ObjetoView
    }
  ]
})

export default router
