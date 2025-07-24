import { API_BASE_URL  } from '@env';
import axios, { AxiosInstance } from 'axios';

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

  public async cadastrar(nome: string, email: string, password: string): Promise<any> {
    try {
        const response = await this.apiClient.post('/usuario', {
            nome,
            email,
            senha: password
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            const status = error.response.status;
            let retorno: any;

            // Verifica se o status é 400 e formata a mensagem
            if (status === 400 && error.response.data && error.response.data.parameterViolations) {
                retorno = { message: error.response.data.parameterViolations[0].message };
            } else {
                retorno = { message: 'Erro ao cadastrar usuário.' };
            }

            return retorno;
        } else {
            console.error("Erro na requisição:", error);
            throw error; // Re-throw error if not Axios-specific
        }
    }
  }
}