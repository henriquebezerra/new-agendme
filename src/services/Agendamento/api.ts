import { Agendamento } from "@/model/agendamento.model";
import apiClient from "../api";

export class AgendamentoApi {

  private static instance: AgendamentoApi; 

  private constructor() {}

  public async finishSchedule(agendamento:Agendamento){
    const response = await apiClient.post('/agendamento', agendamento);
    return  response.data;
  }

  public static getInstance(): AgendamentoApi {
    if (!AgendamentoApi.instance) {
      AgendamentoApi.instance = new AgendamentoApi();
    }
    return AgendamentoApi.instance;
  }

}