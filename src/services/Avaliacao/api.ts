import { Avaliacao } from "@/model/avaliacao.model";
import apiClient from "@/services/api";

export class AvaliacaoApi {

  private static instance: AvaliacaoApi;

  private constructor() { }

  public async buscarAvaliacaoPorEstabelecimento(estabelecimentoId:number): Promise<Avaliacao[]>{
    const response = await apiClient.get(`/avaliacao/estabelecimento/${estabelecimentoId}`);
    return response.data;
    
  }

  public static getInstance(): AvaliacaoApi {
    if(!AvaliacaoApi.instance){
      AvaliacaoApi.instance = new AvaliacaoApi();
    }

    return AvaliacaoApi.instance;
  }
}