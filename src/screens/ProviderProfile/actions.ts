import { FileObject } from "@/model/interfaces/general-interfaces";
import { Servico } from "@/model/servico.model";
import { EstabelecimentoApi } from "@/services/Estabelecimento/api";
import { ProfileApi } from "@/services/Profile/api";
import { ServicoAPI } from "@/services/Servico/api";

export class ProviderProfileAction {

  private api: ProfileApi;
  private serviceApi: ServicoAPI;
  private estabelecimentoApi: EstabelecimentoApi;
  

  constructor(){
    this.api = ProfileApi.getInstance();
    this.serviceApi = ServicoAPI.getInstance();
    this.estabelecimentoApi = EstabelecimentoApi.getInstance();
  }

  public listUriForSwiper(uuidStorage:string): Promise<FileObject[]>{
    return this.api.listUriForSwiper(uuidStorage, 'swiper');
  }

  public listServicosByEstabelecimentoId(estabelecimentoId:number): Promise<Servico[]>{
    return this.serviceApi.listarServicosPorEstabelecimento(estabelecimentoId);
  }

  public isFavorite(estabelecimentoId:number, idUser:number): Promise<boolean>{
    return this.estabelecimentoApi.isFavorite(estabelecimentoId, idUser);
  }

  public handleFavorite(estabelecimentoId:number, idUser:number): Promise<boolean>{
    return this.estabelecimentoApi.favoritarEstabelecimento(estabelecimentoId, idUser);
  }

}