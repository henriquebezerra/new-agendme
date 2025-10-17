export class Disponibilidade {
  
  dataDisponivel: string;
  hours:string[];
  intervaloMinutos:number;

  constructor(dataDisponivel: string, hours:string[], intervaloMinutos:number) {
    this.dataDisponivel = dataDisponivel;
    this.hours = hours;
    this.intervaloMinutos = intervaloMinutos;
  }
}