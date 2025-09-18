import { FileObject } from "@/model/interfaces/general-interfaces";
import { Servico } from "@/model/servico.model";
import { ProfileApi } from "@/services/Profile/api";
import { ServicoAPI } from "@/services/Servico/api";

export class ProfileAction {

  private api: ProfileApi;
  private serviceApi: ServicoAPI;

  constructor(){
    this.api = ProfileApi.getInstance();
    this.serviceApi = ServicoAPI.getInstance();
  }

  public listUriForSwiper(uuidStorage:string): Promise<FileObject[]>{
    return this.api.listUriForSwiper(uuidStorage, 'swiper');
  }

  public listServicosByEstabelecimentoId(estabelecimentoId:number): Promise<Servico[]>{
    return this.serviceApi.listarServicosPorEstabelecimento(estabelecimentoId);
  }

}