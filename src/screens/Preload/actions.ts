import { UserContext } from "@/contexts/UserContext";
import { Authenticated } from "@/model/authenticated.model";
import { ApiPreload } from "@/services/Preload/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { AppAlert } from "../SignUp/style";

export class PreloadAction {

  private userDispatch: any;
  private api: ApiPreload;

  constructor(userDispatch?: Function){
    this.api = new ApiPreload();
    this.userDispatch = userDispatch;
  }

  public async checkToken(){
      try {
        const token = await AsyncStorage.getItem('token');
        if(token){
          let authenticated:Authenticated = await this.api.checkToken(token);
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
            AppAlert.alert('Alerta', 'Não foi possível gerar credencial',[{text: 'OK'}]);
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