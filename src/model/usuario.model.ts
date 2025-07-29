export class Usuario {

  nome: string;
  email: string;
  senha: string;
  perfil: string;

  constructor(nome:string, email:string, senha:string, perfil:string){
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.perfil = perfil;
  }

}