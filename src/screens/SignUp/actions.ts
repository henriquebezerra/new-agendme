import { Authenticated } from '@/model/authenticated.model';
import { SignUpApi } from '@/services/SignUp/api';
import { OptionsType } from '@/types/general-type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Usuario } from '@/model/usuario.model';
import { Alert } from '@/components/Alert';

export class SignUpAction {

  private api: SignUpApi;

  constructor(){
    this.api = new SignUpApi();
  }

  public cadastrar(usuario:Usuario): Promise<Authenticated> {
    return this.api.cadastrar(usuario)
      .then((data: Authenticated) => {
          AsyncStorage.setItem('token', data.token || '');
          return data;
        })
      .catch((error) => {
        if(error.message){
          Alert('Alerta', error.message, [{text: 'OK'}]);
        }
        throw error;
      });
  }

  public async buscarPerfis(): Promise<OptionsType[]> {
    return await this.api.buscarPerfis();
  }
}