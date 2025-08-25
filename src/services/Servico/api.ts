import { Servico } from "@/model/servico.model";
import apiClient  from "@/services/api";

export class ServicoAPI {

  private static instance: ServicoAPI;

  private constructor() { }


  public async listarServicosPorEstabelecimento(idEstabelecimento:number): Promise<Servico[]> {
    const response = await apiClient.get(`/servico/estabelecimento/${idEstabelecimento}`);
    return response.data;
  }

  public static getInstance(): ServicoAPI {
    if (!ServicoAPI.instance) {
      ServicoAPI.instance = new ServicoAPI();
    }
    return ServicoAPI.instance;
  }

}