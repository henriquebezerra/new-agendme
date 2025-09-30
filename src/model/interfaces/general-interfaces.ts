import {Estabelecimento} from "@/model/estabelecimento.model";
import { Servico } from "@/model/servico.model";

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

export interface ServiceItemProps {
  title: string;
  value: number;
  servico: Servico;
}

export interface TestimonialsPops {
  idEstabelecimento: number;
}
export interface EmptyResultProps {
  message?: string;
  subMessage?: string;
  iconColor?: string;
  textColor?: string;
  searchIcon?: React.ReactNode;
}