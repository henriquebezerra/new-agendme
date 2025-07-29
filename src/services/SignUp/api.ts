import { Authenticated } from '@/model/authenticated.model';
import { OptionsType } from '@/types/options-type';
import apiClient from '@/services/api';
export class ApiSignUp {

  public async cadastrar(nome: string, email: string, password: string): Promise<Authenticated> {
    const response = await apiClient.post('/usuario', {
        nome,
        email,
        senha: password
    })
    return response.data;
  }

  public async buscarPerfis(): Promise<OptionsType[]> {
    const response = await apiClient.get<OptionsType[]>('/usuario/perfis');
    return response.data;
  }
}