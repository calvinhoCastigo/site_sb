import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/home/HomeView.vue";
import ClientesView from "@/view/collaborators/ClientesView.vue";
import EquipamentosView from "@/view/equipment/list/EquipamentListView.vue";
import ProjetosView from "@/view/projects/list/ProjetosView.vue";
import ContatoView from "@/view/contact/ContatoView.vue";
import EquipamentoView from "@/view/equipment/object/EquipamentoView.vue";
import ProjetoView from "@/view/projects/object/ProjetoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Pagina Inicial",
      component: HomeView,
    },
    {
      path: "/clientes",
      name: "Clientes",
      component: ClientesView,
    },
    {
      path: "/equipamentos",
      name: "Equipamentos",
      component: EquipamentosView,
    },
    {
      path: "/projetos",
      name: "Produtos",
      component: ProjetosView,
    },
    {
      path: "/contatos",
      nome: "Contato",
      component: ContatoView,
    },
    {
      path: "/equipamento/:id/:nome",
      nome: "Equipamento",
      component: EquipamentoView,
    },
    {
      path: "/projeto/:id/:nome",
      nome: "Projeto",
      component: ProjetoView,
    },
  ],
});

export default router;
