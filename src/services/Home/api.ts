import { Estabelecimento } from '@/model/estabelecimento.model';
import { DadosLocation } from '@/model/interfaces/general-interfaces';
import apiClient from "@/services/api";


export class HomeAPI {

public async carregarEstabelecimentos(dados:DadosLocation): Promise<Estabelecimento[]>{
    const response = await apiClient.get(`/estabelecimento/cidade/${dados.cidade}/uf/${dados.uf}`);
    return response.data;
  }
}