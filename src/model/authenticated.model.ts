export class Authenticated {

  id:number | null;
  nome: string;
  email: string; 
  senha: string; 
  token?: string;
  avatar?: string;

  constructor(id:number | null,nome: string, email: string, senha: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

}