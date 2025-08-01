export interface Validation {
  message: string;
}

export interface DadosLocation {
  cidade: string;
  uf?: string | null;
  subregiao?: string | null;
}