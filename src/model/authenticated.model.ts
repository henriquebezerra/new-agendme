export class Authenticated {

  nome: string;
  email: string; 
  senha: string; 
  token?: string;
  avatar?: string;

  constructor(nome: string, email: string, senha: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

}