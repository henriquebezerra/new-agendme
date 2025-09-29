import { FavoritoResponse } from '@/model/favorito-response.model';
import  apiClient  from '@/services/api';

export class EstabelecimentoApi {

  private static instance: EstabelecimentoApi;


  public async isFavorite(idEstabelecimento: number, idUser: number): Promise<boolean> {
    return (await apiClient.get(`/estabelecimento/isFavorito/usuario/${idUser}/estabelecimento/${idEstabelecimento}`)).data;
  }

  public async favoritarEstabelecimento(idEstabelecimento: number, idUser: number): Promise<FavoritoResponse> {
    return (await apiClient.post(`/estabelecimento/favoritar/${idUser}/estabelecimento/${idEstabelecimento}`)).data;
  }

  public static getInstance(): EstabelecimentoApi {
    if (!EstabelecimentoApi.instance) {
      EstabelecimentoApi.instance = new EstabelecimentoApi();
    }
    return EstabelecimentoApi.instance;
  }

}