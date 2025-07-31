export class Endereco {

  rua:string;
  bairro:string;
  numero:number
  cidade:string;
  estado:string;
  complemento?:string;

  constructor(rua: string,bairro: string, numero: number, cidade: string,estado: string) {
    this.rua = rua;
    this.bairro = bairro;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
  }
}