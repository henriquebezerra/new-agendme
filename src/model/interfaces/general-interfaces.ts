import {Estabelecimento} from "@/model/estabelecimento.model";

export interface Validation {
  message: string;
}

export interface DadosLocation {
  cidade: string;
  uf?: string | null;
  subregiao?: string | null;
}

export interface EstabelecimentoPops {
  estabelecimento:Estabelecimento;
}

export interface FileObject {
  objectKey?: string;
  size?:number;
  uri?: string;
}