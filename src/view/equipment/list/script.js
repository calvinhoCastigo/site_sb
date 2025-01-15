import BotaoPrincipal from '@/components/mainButton/BotaoPrincipal.vue';
import BarraDePequisa from '@/components/searchBar/BarraDePequisa.vue';
import equipamentos from '@/data/equipamentos';
import tipo_equipamento from '@/data/tipo_equipamento';

export default {
    name: "EquipamentListView",
    data() {
        const banner = import.meta.env.VITE_IMGBODY + 'banners/bannerequip.png';
        return {
            banner: banner,
            tipo_equipamento: tipo_equipamento,
            equipamentos: equipamentos,
            listaRenderizacao: [],
            equipamentosFiltrados: false,
            mostraBotaoTodos: false,
        }
    }, methods: {
        scrollaAteMain: () => {
            document.querySelector('#elementos').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        },
        fetchTiposEquipamentosComEquipamentos: async function (filtro) {
            this.mostraBotaoTodos = filtro ? true : false;
            try {
                if (filtro) {
                    this.listaRenderizacao = this.tipo_equipamento.filter(te => te.id == filtro);
                    this.listaRenderizacao[0].equipamentos = this.equipamentos.filter(equipamentos => equipamentos.tipoEquipamentoId == filtro);
                } else {
                    this.tipo_equipamento.forEach((tde) => {
                        let te = {
                            nome: tde.nome, equipamentos: this.equipamentos.filter(equipamentos => equipamentos.tipoEquipamentoId == tde.id)
                        }
                        this.listaRenderizacao.push(te)
                    })
                }
            }
            catch (error) {
                console.log("ERRO: " + error);
            }
        }
    }, mounted() {
        this.fetchTiposEquipamentosComEquipamentos();
    }, components: { BotaoPrincipal, BarraDePequisa }
}