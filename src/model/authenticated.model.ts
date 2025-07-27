export class Authenticated {

  nome: string;
  email: string; 
  senha: string; 
  token: string;
  exp?: number;
  dataExpiracao?: Date;
  avatar?: string;

  constructor(nome: string, email: string, senha: string, token: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.token = token;
  }

}