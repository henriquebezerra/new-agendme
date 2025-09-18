import { Authenticated } from "@/model/authenticated.model";
import { PreloadApi } from "@/services/Preload/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "@/components/Alert";
import { API_BASE_URL, ENDPOINT_BASE_URL } from "@env";

export class PreloadAction {

  private userDispatch: any;
  private api: PreloadApi;

  constructor(userDispatch?: Function){
    this.api = PreloadApi.getInstance();
    this.userDispatch = userDispatch;
  }

  public async checkToken(){
      try {
        const token = await AsyncStorage.getItem('token');
        if(token){
          let authenticated:Authenticated = await this.api.refreshToken(token);
          if(authenticated.token){
            if(authenticated.avatar)
              authenticated.avatar = `${API_BASE_URL}${ENDPOINT_BASE_URL}${authenticated.avatar}`;
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