import { StatusAgendamento } from "@/enums";
import { Estabelecimento } from "./estabelecimento.model";
import { Servico } from "./servico.model";
import { Usuario } from "./usuario.model";

export class Agendamento {

  id?: number;
  estabelecimento: Estabelecimento;
  usuario: Usuario;
  servico: Servico;
  status: StatusAgendamento;
  horaInicio: string; // Formato "HH:mm"
  horaFim: string;    // Formato "HH:mm"
  dataAgendamento: string; // Formato "YYYY-MM-DD"
  criadoEm?: string;

  constructor(
    estabelecimento: Estabelecimento,
    usuario: Usuario,
    servico: Servico,
    horaInicio: string,
    horaFim: string,
    dataAgendamento: string,
    status: StatusAgendamento
  ) {
    this.estabelecimento = estabelecimento;
    this.usuario = usuario;
    this.servico = servico;
    this.horaInicio = horaInicio;
    this.horaFim = horaFim;
    this.dataAgendamento = dataAgendamento;
    this.status = status;
  }
}