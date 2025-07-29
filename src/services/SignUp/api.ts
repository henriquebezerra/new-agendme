import { Authenticated } from '@/model/authenticated.model';
import { API_BASE_URL  } from '@env';
import axios, { AxiosInstance } from 'axios';
import { handleApiError } from '@/utils/handleError';
import { OptionsType } from '@/types/options-type';

export class ApiSignUp {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });
  }

  public cadastrar(nome: string, email: string, password: string): Promise<Authenticated> {
    return this.apiClient.post('/usuario', {
        nome,
        email,
        senha: password
    }).then(response => {
        return response.data;
    }).catch(error => {
        handleApiError(error, axios);
    })
  }

  public buscarPerfis(): Promise<OptionsType[]> {
    return this.apiClient.get<OptionsType[]>('/usuario/perfis')
        .then(response => {
            return response.data;
        }).catch(error => {
            handleApiError(error, axios);
            throw error;
    });
  }
}