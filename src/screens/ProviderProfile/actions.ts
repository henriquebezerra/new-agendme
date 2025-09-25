import { Avaliacao } from "@/model/avaliacao.model";
import { FileObject } from "@/model/interfaces/general-interfaces";
import { Servico } from "@/model/servico.model";
import { AvaliacaoApi } from "@/services/Avaliacao/api";
import { ProfileApi } from "@/services/Profile/api";
import { ServicoAPI } from "@/services/Servico/api";

export class ProviderProfileAction {

  private api: ProfileApi;
  private serviceApi: ServicoAPI;
  private avaliacaoApi: AvaliacaoApi;

  constructor(){
    this.api = ProfileApi.getInstance();
    this.serviceApi = ServicoAPI.getInstance();
    this.avaliacaoApi = AvaliacaoApi.getInstance();
  }

  public listUriForSwiper(uuidStorage:string): Promise<FileObject[]>{
    return this.api.listUriForSwiper(uuidStorage, 'swiper');
  }

  public listServicosByEstabelecimentoId(estabelecimentoId:number): Promise<Servico[]>{
    return this.serviceApi.listarServicosPorEstabelecimento(estabelecimentoId);
  }

  public listAvaliacoesByEstabelecimentoId(estabelecimentoId:number): Promise<Avaliacao[]>{
    return this.avaliacaoApi.buscarAvaliacaoPorEstabelecimento(estabelecimentoId);
  }

}