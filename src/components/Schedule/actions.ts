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


  public getDisponibilidade(idEstabelecimento:number, idServico:number): Promise<Disponibilidade[]>{
    return this.disService.getDisponibilidade(idEstabelecimento, idServico);
  }

  public bringHoursByDay(selectedDay:number, selectedMonth:number, selectedYear:number, availabilities: Disponibilidade[]): string[] {
    if(selectedDay > 0){
      let day = new Date();
      day.setFullYear(selectedYear);
      day.setMonth(selectedMonth);
      day.setDate(selectedDay);
      
      const availableHours = availabilities.filter(item => item.dataDisponivel === day.toISOString().split('T')[0]);
      let listHours: string[] = [];
      if (availableHours) {
        listHours = availableHours.map(item => {
          return item.hours;
        }).flat();
      }
      return listHours;
    }

    return [];

  }
}