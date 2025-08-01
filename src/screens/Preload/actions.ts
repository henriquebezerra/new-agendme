import { Authenticated } from "@/model/authenticated.model";
import { PreloadApi } from "@/services/Preload/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "@/components/Alert";

export class PreloadAction {

  private userDispatch: any;
  private api: PreloadApi;

  constructor(userDispatch?: Function){
    this.api = new PreloadApi();
    this.userDispatch = userDispatch;
  }

  public async checkToken(){
      try {
        const token = await AsyncStorage.getItem('token');
        if(token){
          let authenticated:Authenticated = await this.api.refreshToken(token);
          if(authenticated.token){
            authenticated.avatar = 'http://img.freepik.com/foto-gratis/foto-primer-plano-amable-hombre-rubio-sonriendo-mientras-posa_132075-8195.jpg?t=st=1652130495~exp=1652131095~hmac=cd779c32e4a3c58f3d1a5a83655414a2a27a75ada4106986f05f6d42f8a813e7&w=360';
            AsyncStorage.setItem('token', authenticated.token);
            this.userDispatch({
                type: 'setUser',
                payload:{
                  user: authenticated
                }
              });
              
          } else {
            Alert('Alerta', 'Não foi possível gerar credencial',[{text: 'OK'}]);
            throw null;
          }
        } else {
          throw null;
        }
      } catch (error) {
        throw error;
      }
  }
}