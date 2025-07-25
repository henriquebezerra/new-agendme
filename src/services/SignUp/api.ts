import { Authenticated } from '@/model/authenticated.model';
import  { Validation }  from '@/model/interfaces/validations';
import { API_BASE_URL  } from '@env';
import axios, { AxiosInstance } from 'axios';
import { handleApiError } from '@/utils/handleError';

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

  public async cadastrar(nome: string, email: string, password: string): Promise<Authenticated> {
    return new Promise((resolve, reject) => {
        this.apiClient.post('/usuario', {
            nome,
            email,
            senha: password
        }).then(response => {
            resolve(response.data);
        }).catch(error => {
            try {
                handleApiError(error, axios);
            } catch (error) {
                reject(error);
            }
        })
    });
  }
}