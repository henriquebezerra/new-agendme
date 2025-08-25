export class Servico {
  id: number;
  titulo: string;
  valor: number;
  descricao?: string;

  constructor(id: number, titulo: string, valor: number, descricao?: string) {
    this.id = id;
    this.titulo = titulo;
    this.valor = valor;
    this.descricao = descricao;
  }
}
