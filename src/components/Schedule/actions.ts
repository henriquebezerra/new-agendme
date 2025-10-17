import { StatusAgendamento } from "@/enums";
import { Agendamento } from "@/model/agendamento.model";
import { Disponibilidade } from "@/model/disponibilidade.model";
import { Estabelecimento } from "@/model/estabelecimento.model";
import { Hours, ItemHour } from "@/model/interfaces/general-interfaces";
import { Servico } from "@/model/servico.model";
import { Usuario } from "@/model/usuario.model";
import { AgendamentoApi } from "@/services/Agendamento/api";
import { DisponibilidadeApi } from "@/services/Disponibilidade/api";

export class ScheduleActions {

  private static instance: ScheduleActions;
  private disService: DisponibilidadeApi;
  private agendamentoApi: AgendamentoApi;

  private constructor() {
    this.disService = DisponibilidadeApi.getInstance();
    this.agendamentoApi = AgendamentoApi.getInstance();
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

  public bringHoursByDay(selectedDay:number, selectedMonth:number, selectedYear:number, availabilities: Disponibilidade[]): Hours[] {
    if(selectedDay > 0){
      let day = new Date();
      day.setFullYear(selectedYear);
      day.setMonth(selectedMonth);
      day.setDate(selectedDay);
      
      const availableHours = availabilities.filter(item => item.dataDisponivel === day.toISOString().split('T')[0]);
      let listHours: Hours[] = [];
      if (availableHours) {
        listHours = availableHours.map(item => {
          return {
            hours: item.hours,
            intervalMin: item.intervaloMinutos
          } as Hours;
        });
      }
      return listHours;
    }

    return [];

  }

  public finishSchedule(
    selectedDay:number, 
    selectedMonth:number, 
    selectedYear:number,
    selectedItemHour: ItemHour,
    idEstabelecimento:number,
    idServico:number,
    idUsuario:number):Promise<Agendamento>{

    const [hour, minutes ] = selectedItemHour.hour.split(':').map(Number);
    let date = new Date(0, 0, 0, hour, minutes);
    date.setMinutes(date.getMinutes() + selectedItemHour.intervalMin);
    const hourEnd = date.getHours().toString().padStart(2, '0');
    const minutesEnd = date.getMinutes().toString().padStart(2, '0');
    
    const agendamento: Agendamento = {
      estabelecimento: { id: idEstabelecimento } as Estabelecimento,
      usuario: { id: idUsuario } as Usuario,
      servico: { id: idServico } as Servico,
      horaInicio: selectedItemHour.hour,
      horaFim: `${hourEnd}:${minutesEnd}`,
      dataAgendamento: new Date(selectedYear, selectedMonth, selectedDay).toISOString().split('T')[0],
      status: StatusAgendamento.PENDING
    }
    
    return this.agendamentoApi.finishSchedule(agendamento);
    
  }
}