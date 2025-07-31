import { Endereco } from "./endereco.model";

export class Estabelecimento {

  id: number;
  nome: string;
  endereco: Endereco;
  star?: number;
  avatar?: string;

  constructor(id: number, nome:string, endereco:Endereco){
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
  }

}