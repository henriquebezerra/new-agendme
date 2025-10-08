import { Disponibilidade } from "@/model/disponibilidade.model";
import { DisponibilidadeApi } from "@/services/Disponibilidade/api";

export class ScheduleActions {

  private static instance: ScheduleActions;
  private disService: DisponibilidadeApi;

  private constructor() {
    this.disService = DisponibilidadeApi.getInstance();
  }


  public static getInstance(): ScheduleActions {
    if (!ScheduleActions.instance) {
      ScheduleActions.instance = new ScheduleActions();
    }
    return ScheduleActions.instance;
  }


  public getDisponibilidade(idEstabelecimento:number): Promise<Disponibilidade[]>{
    return this.disService.getDisponibilidade(idEstabelecimento);
  }


}