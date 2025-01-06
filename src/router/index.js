import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'
import ObjetoView from '@/view/ObjetoView.vue'
import ClientesView from '@/view/ClientesView.vue'
import EquipamentosView from '@/view/EquipamentosView.vue'
import ProjetosView from '@/view/ProjetoView.vue'
import ContatoView from '@/view/ContatoView.vue'

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
      component: ClientesView
    },
    {
      path:'/equipamentos',
      name:'Equipamentos',
      component: EquipamentosView
    },
    {
      path:'/projetos',
      name:'Produtos',
      component: ProjetosView
    },
    {
      path:'/contatos',
      nome:'Contato',
      component: ContatoView
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
