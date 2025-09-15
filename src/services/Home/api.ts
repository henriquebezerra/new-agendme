import { Estabelecimento } from '@/model/estabelecimento.model';
import { DadosLocation } from '@/model/interfaces/general-interfaces';
import apiClient from "@/services/api";


export class HomeAPI {

  private static instance: HomeAPI;
  
  private constructor() { }

  
  public async carregarEstabelecimentos(dados:DadosLocation): Promise<Estabelecimento[]>{
    const response = await apiClient.get(`/estabelecimento/cidade/${dados.cidade}/uf/${dados.uf}`);
    return response.data;
  }
  
  public async carregarEstabelecimentosNome(nome:string): Promise<Estabelecimento[]>{
    const response = await apiClient.get(`/estabelecimento/nome/${nome}`);
    return response.data;
  }
  
  public static getInstance(): HomeAPI {
    if(!HomeAPI.instance){
      HomeAPI.instance = new HomeAPI();
    }
    return HomeAPI.instance;
  }
}