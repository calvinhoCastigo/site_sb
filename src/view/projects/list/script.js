import BotaoPrincipal from '@/components/mainButton/BotaoPrincipal.vue';
import BarraDePequisa from '@/components/searchBar/BarraDePequisa.vue';
import area_de_atuacao from '@/data/area_de_atuacao';
import projetos from '@/data/projetos';

export default {
    name: "ProjetosView",
    data() {
        const banner = import.meta.env.VITE_IMGBODY + 'banners/Alameda dos Poemas - Imagem 02 REV01.png';
        return {
            banner: banner,
            mostraBotaoTodos: false,
            projetos: projetos,
            areasDeAtuacao: area_de_atuacao,
            listaRenderizacao: [],
        }
    }, methods: {
        scrollaAteMain: () => {
            document.querySelector('#elementos').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        },
        fetchProjetos: async function ( filtro) {
            this.mostraBotaoTodos = filtro ? true : false;
            try {
                if (filtro) {
                    this.listaRenderizacao = this.areasDeAtuacao.filter(area_de_atuacao => area_de_atuacao.id == filtro);
                    this.listaRenderizacao[0].projetos = this.projetos.filter(projetos => projetos.areaDeAtucaoId == filtro);
                } else {
                    this.areasDeAtuacao.forEach( (ada) => {
                        let area_de_atuacao = {
                            nome: ada.nome, projetos : this.projetos.filter(projetos => projetos.areaDeAtucaoId == ada.id)
                        }
                        this.listaRenderizacao.push(area_de_atuacao)
                    })
                }
            }
            catch (error) {
                return console.log("ERRO: "+error);
            }
        }
    },
    mounted() {
        this.fetchProjetos(false);
    }, components: { BotaoPrincipal, BarraDePequisa }
}