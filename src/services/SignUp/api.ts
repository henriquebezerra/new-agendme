import { Authenticated } from '@/model/authenticated.model';
import { OptionsType } from '@/types/general-type';
import apiClient from '@/services/api';
import { Usuario } from '@/model/usuario.model';
export class SignUpApi {

  public async cadastrar(usuario:Usuario): Promise<Authenticated> {
    const response = await apiClient.post('/usuario', {
        ...usuario,
        role: usuario.perfil
    })
    return response.data;
  }

  public async buscarPerfis(): Promise<OptionsType[]> {
    const response = await apiClient.get<OptionsType[]>('/usuario/perfis');
    return response.data;
  }
}