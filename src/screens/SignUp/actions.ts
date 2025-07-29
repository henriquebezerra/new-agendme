import { Authenticated } from '@/model/authenticated.model';
import { ApiSignUp } from '@/services/SignUp/api';
import { OptionsType } from '@/types/options-type';
import { AppAlert } from '../SignIn/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Usuario } from '@/model/usuario.model';

export class SignUpAction {

  private api: ApiSignUp;

  constructor(){
    this.api = new ApiSignUp();
  }

  public cadastrar(usuario:Usuario): Promise<Authenticated> {
    return this.api.cadastrar(usuario)
      .then((data: Authenticated) => {
          data.avatar = 'http://img.freepik.com/foto-gratis/foto-primer-plano-amable-hombre-rubio-sonriendo-mientras-posa_132075-8195.jpg?t=st=1652130495~exp=1652131095~hmac=cd779c32e4a3c58f3d1a5a83655414a2a27a75ada4106986f05f6d42f8a813e7&w=360';
          //AsyncStorage.setItem('token', data.token);
          return data;
        })
      .catch((error) => {
        if(error.message){
          AppAlert.alert('Alerta', error.message, [
            {text: 'OK'}
          ]);
        }
        throw error;
      });
  }

  public async buscarPerfis(): Promise<OptionsType[]> {
    return await this.api.buscarPerfis();
  }
}