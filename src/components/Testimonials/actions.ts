import { Avaliacao } from "@/model/avaliacao.model";
import { AvaliacaoApi } from "@/services/Avaliacao/api";

export class TestimonialsAction {

  private avaliacaoApi: AvaliacaoApi;

  constructor(){
    this.avaliacaoApi = AvaliacaoApi.getInstance();
  }


  public listAvaliacoesByEstabelecimentoId(estabelecimentoId:number): Promise<Avaliacao[]>{
    return this.avaliacaoApi.buscarAvaliacaoPorEstabelecimento(estabelecimentoId);
  }


}