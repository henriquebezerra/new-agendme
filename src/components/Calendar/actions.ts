import { DayItem } from "@/model/interfaces/general-interfaces";
import { DisponibilidadeApi } from "@/services/Disponibilidade/api";

export class CalendarActions {

  private static instance: CalendarActions;
  private disService: DisponibilidadeApi;

  private constructor() {
    this.disService = DisponibilidadeApi.getInstance();
  }

  public static getInstance(): CalendarActions {
    if (!CalendarActions.instance) {
      CalendarActions.instance = new CalendarActions();
    }
    return CalendarActions.instance;
  }

  public async verifyAvailability(selectedYear: number, selectedMonth: number, idEstabelecimento: number, days:string[]): Promise<DayItem[]> {
    let daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    let newListDays: DayItem[] = [];
    const availabilities = await this.disService.getDisponibilidade(idEstabelecimento);
    for(let day = 1; day <= daysInMonth; day++) {
      let date = new Date(selectedYear, selectedMonth, day);
      let year = date.getFullYear().toString();
      let month = (date.getMonth() + 1).toString();
      let weekDay = date.getDay().toString();
      let dayStr = day < 10 ? '0' + day.toString() : day.toString();
      month = Number(month) < 10 ? '0' + month : month;
      weekDay = Number(weekDay) < 10 ? '0' + weekDay : weekDay;
      let selDate =  `${year}-${month}-${dayStr}`;
      let isAvailable = availabilities.some(item => item.dataDisponivel === selDate);

      newListDays.push({
        status: isAvailable,
        weekDay: days[date.getDay()],
        day: day
      } as DayItem);
    }
    return newListDays;
  }
}