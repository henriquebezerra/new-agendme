export class Disponibilidade {
  
  dataDisponivel: string;
  hours:string[];

  constructor(dataDisponivel: string, hours:string[]) {
    this.dataDisponivel = dataDisponivel;
    this.hours = hours;
  }
}