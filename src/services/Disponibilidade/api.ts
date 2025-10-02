import { Disponibilidade } from "@/model/disponibilidade.model";
import apiClient from "@/services/api";

export class DisponibilidadeApi {
  private static instance: DisponibilidadeApi; 
 
  private constructor() {}

  public async getDisponibilidade(idEstabelecimento:number):Promise<Disponibilidade[]>{
      const response = await apiClient.get(`/disponibilidade/estabelecimento/${idEstabelecimento}`);
      return response.data;
  }

  public static getInstance(): DisponibilidadeApi {
    if (!DisponibilidadeApi.instance) {
      DisponibilidadeApi.instance = new DisponibilidadeApi();
    }
    return DisponibilidadeApi.instance;
  }

}